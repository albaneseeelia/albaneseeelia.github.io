export type Activity = { id:string; date:string; name:string; duration:number; distance:number; hr:number|null; maxHr:number|null; cadence:number|null; calories:number; laps?:[number,number,number][]; load:number|null; pace:number; category:string };

const RAW: any[] = [
["25016006269","2026-11-09 05:40","RUNNING","San Martino di Lupari Running",3214,10.01,128,138,177,618],
["25005696603","2026-11-08 07:11","RUNNING","San Martino di Lupari - PushPush Hard",8162,33.16,157,182,184,2000],
["24991026781","2026-11-06 16:58","RUNNING","San Martino di Lupari Running",3035,10.25,140,163,177,660],
["24976669997","2026-11-05 14:37","RUNNING","San Martino di Lupari - UnderOver OneK",3477,13.56,152,179,181,844],
["24973736742","2026-11-05 08:25","CYCLING","San Martino di Lupari Cycling",3396,27.4,100,124,46,396],
["24963426227","2026-11-04 10:54","ROAD_BIKING","San Martino di Lupari Road Cycling",7781,66.0,113,151,87,1316],
["24947719421","2026-11-03 05:40","RUNNING","San Martino di Lupari - UnderOver Miles",3918,14.4,143,170,null,859],
["24935896777","2026-11-02 05:40","RUNNING","San Martino di Lupari Running",4263,14.2,137,154,null,881],
["24926739256","2026-11-01 08:08","ROAD_BIKING","San Martino di Lupari Road Cycling",9829,78.5,113,144,88,1560],
["24916434277","2026-10-31 07:42","ROAD_BIKING","San Martino di Lupari Road Cycling",17464,143.4,119,139,91,2946],
["24900933181","2026-10-30 05:28","RUNNING","San Martino di Lupari - TempoRun",3628,12.9,145,172,null,798],
["24893149948","2026-10-29 10:51","ROAD_BIKING","San Martino di Lupari Road Cycling",8955,74.9,119,145,90,1613],
["24884263750","2026-10-28 16:42","RUNNING","San Martino di Lupari Running",3053,10.2,142,160,null,620],
["24872045551","2026-10-27 16:45","RUNNING","San Martino di Lupari - Fast Intervals",2801,9.0,139,172,null,584],
["24859917052","2026-10-26 16:54","RUNNING","San Martino di Lupari Running",2934,10.0,143,154,null,609],
["24854637704","2026-10-26 06:47","ROAD_BIKING","San Martino di Lupari Road Cycling",8221,66.5,114,141,90,1293],
["24843824002","2026-10-25 06:53","ROAD_BIKING","San Martino di Lupari Road Cycling",8344,68.4,112,136,91,1385],
["24832854828","2026-10-24 06:12","RUNNING","San Martino di Lupari - HurtsMoreToLose",9344,36.0,151,177,183,2080],
["24813013199","2026-10-22 10:13","RUNNING","San Martino di Lupari - ProgressiveRun",3943,15.0,154,181,null,947],
["24793145304","2026-10-20 15:40","RUNNING","San Martino di Lupari Running",3662,12.0,138,157,null,737],
["24781116304","2026-10-19 15:50","RUNNING","San Martino di Lupari - ProgressiveMile",3728,13.0,143,178,null,782],
["24764644222","2026-10-18 06:45","ROAD_BIKING","San Martino di Lupari Road Cycling",7911,63.9,114,152,91,1306],
["24758029314","2026-10-17 13:17","ROAD_BIKING","San Martino di Lupari Road Cycling",6478,52.9,111,125,93,991],
["24753435155","2026-10-17 06:38","RUNNING","San Martino di Lupari - CruiseControl",8682,33.0,151,164,181,2068],
["24732137674","2026-10-15 10:12","RUNNING","San Martino di Lupari - BrokenMiles",3665,12.6,149,181,null,816],
["24711472232","2026-10-13 15:41","RUNNING","San Martino di Lupari Running",3724,14.1,148,174,null,845],
["24697711779","2026-10-12 12:00","ROAD_BIKING","San Martino di Lupari Road Cycling",7972,66.7,115,132,91,1247],
["24693923300","2026-10-12 07:35","RUNNING","San Martino di Lupari - Tempo",2831,10.0,144,174,null,638],
["24680857889","2026-10-11 04:57","RUNNING","San Martino di Lupari Running",3238,10.0,127,137,null,635],
["24675231831","2026-10-10 12:28","ROAD_BIKING","San Martino di Lupari Road Cycling",7060,58.2,114,134,93,1094],
["24670565365","2026-10-10 05:58","RUNNING","San Martino di Lupari - RacePracticeRun",7336,28.1,156,176,185,1707],
["24641739867","2026-10-07 15:05","RUNNING","San Martino di Lupari Running",4079,15.0,150,169,null,944],
["24635256641","2026-10-07 04:48","RUNNING","San Martino di Lupari - OneK Intervals",1562,5.0,136,146,null,330],
["24622253708","2026-10-06 04:40","RUNNING","San Martino di Lupari Running",3469,10.5,131,138,null,683],
["24600474245","2026-10-04 07:45","RUNNING","Levico Terme Running",7335,30.4,165,179,187,1905],
["24585734980","2026-10-03 04:55","ROAD_BIKING","San Martino di Lupari Road Cycling",6736,54.0,null,null,89,1149],
["24580811302","2026-10-02 15:57","RUNNING","San Martino di Lupari Running",2995,10.2,143,152,null,668],
["24562448200","2026-10-01 04:29","RUNNING","San Martino di Lupari - 800 Repeats",2961,10.2,146,179,null,669],
["24550678849","2026-09-30 04:34","ROAD_BIKING","San Martino di Lupari Road Cycling",9050,75.5,120,145,90,1621],
["24536861865","2026-09-29 04:38","RUNNING","San Martino di Lupari Running",2975,10.2,139,161,null,622],
["24528883174","2026-09-28 10:47","ROAD_BIKING","San Martino di Lupari Road Cycling",9641,82.4,126,167,91,1735],
["24518359844","2026-09-27 11:52","ROAD_BIKING","San Martino di Lupari Road Cycling",7100,60.1,120,135,89,1196],
["24512858063","2026-09-27 04:46","WALKING","San Martino di Lupari Walking",9601,14.0,100,143,null,784],
["24505160015","2026-09-26 11:45","WALKING","San Martino di Lupari Walking",4999,6.9,109,127,null,527],
["24500995369","2026-09-26 04:51","WALKING","San Martino di Lupari Walking",8569,12.1,118,137,null,920],
["24494066069","2026-09-25 12:10","WALKING","San Martino di Lupari Walking",7242,10.0,92,131,null,713],
["24471872665","2026-09-23 14:59","ROAD_BIKING","San Martino di Lupari Road Cycling",6914,58.4,116,134,89,1139],
["24458869744","2026-09-22 15:45","RUNNING","San Martino di Lupari Running",4109,15.0,144,157,null,985]];
const LAPS: Record<string, [number, number, number][]> = {"25005696603":[[6,1692,141],[5,1190,160],[1,273,152],[5,1186,160],[1,271,151],[6,1401,162],[6,1312,172],[2,533,149],[1.16,304,156]],
"24976669997":[[3,890,132],[0.38,120,132],[1,240,152],[1,216,166],[1,238,163],[1,216,169],[1,235,167],[1,213,173],[1,234,169],[1,202,177],[0.19,120,136],[1.98,553,146]],
"24832854828":[[5,1482,137],[5,1462,139],[4,955,156],[1,289,145],[4,940,160],[1,292,145],[4,933,161],[1,294,145],[4,931,163],[1,288,149],[4,903,166],[2,571,150]],
"24753435155":[[3,805,146],[6,1607,150],[6,1596,150],[6,1592,149],[6,1575,150],[6,1504,157]],
"24670565365":[[9,2577,143],[5,1171,168],[1,297,155],[5,1170,171],[1,316,154],[5,1154,167],[2,619,146]],
"24600474245":[[30.44,7335,165]]};

export const activities: Activity[] = RAW.filter((r:any[]) => r[2] === "RUNNING").map((r:any[]) => {
  const [id,date,_type,rawName,duration,distance,hr,maxHr,cadence,calories] = r;
  const name = rawName.replace(/^San Martino di Lupari[\\s-]*/, "") || "Corsa libera";
  return { id, date, name: name === "Running" ? "Corsa libera" : name, duration, distance, hr, maxHr, cadence, calories, laps: LAPS[id], load: hr == null ? null : duration / 60 * Math.max(0,(hr-73)/(181-73)), pace: duration / distance, category: classify(name,distance,hr) };
}).sort((a,b) => b.date.localeCompare(a.date));

function classify(name:string, distance:number, hr:number|null) {
 const n=name.toLowerCase();
 if (/interval|repeat|miles|onek|broken/.test(n)) return "Ripetute";
 if (/tempo/.test(n)) return "Tempo";
 if (/progress/.test(n)) return "Progressivo";
 if (distance >= 25) return "Lungo";
 if (hr != null && hr >= 150) return "Medio";
 return "Easy";
}
