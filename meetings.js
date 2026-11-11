// generated from app.html by build.sh
window.L30_MEETS=[
 {id:"aog",t:"AOG ở Delhi: lỗi bơm thuỷ lực",ctx:"Airline Ấn Độ báo máy bay nằm đất, gọi với Airbus support.",sp:{Arjun:"in",Julien:"fr",Nguyen:"us"},lines:[
  ["Arjun","Good morning everyone. So, we have an AOG in Delhi since yesterday night. MSN four eight one two, registration Victor Tango, India Delta Kilo."],
  ["Arjun","The aircraft had a hydraulic pump failure on the green system. We have already replaced it once, but the fault is coming again."],
  ["Julien","Okay, thank you Arjun. Actually, we have seen this on two other aircraft this month. Can you send us the PFR and the troubleshooting data?"],
  ["Arjun","Sure, I will share it by end of day itself. But our priority is to get the part. Kindly confirm the ETA."],
  ["Julien","The pump is in stock in Hamburg. If we ship it today, it should arrive in Delhi on Thursday morning, local time."],
  ["Nguyen","Thursday works. I'll set up an alert in the dashboard so we can track the green system pressure after the replacement."],
  ["Julien","Perfect. Let's have a short call again on Thursday afternoon to confirm the aircraft is back in service."]],
  qs:[["Which system has the problem?",["Blue hydraulic system","Green hydraulic system","Yellow hydraulic system","Fuel system"],1],
   ["Where is the spare pump now?",["Delhi","Toulouse","Hamburg","Singapore"],2],
   ["When should the part arrive?",["Wednesday evening","Thursday morning","Thursday afternoon","Friday"],1],
   ["What will Nguyen do?",["Ship the pump","Send the PFR","Set up a dashboard alert","Call the airline CEO"],2],
   ["What does Arjun mean by \"by end of day itself\"?",["Today at the latest","Tomorrow","Only if possible","Next week"],0,"\"itself\" kiểu Ấn Độ dùng để nhấn mạnh: ngay trong hôm nay."]]},
 {id:"rel",t:"Lấy yêu cầu với SME độ tin cậy",ctx:"Kỹ sư độ tin cậy người Anh mô tả dashboard họ cần.",sp:{Tom:"gb",Nguyen:"us"},lines:[
  ["Tom","Right, so from the reliability side, what we really need is the unscheduled removal rate per ATA chapter, per month."],
  ["Nguyen","Understood. Do you want it by fleet type, or by individual tail?"],
  ["Tom","Both, ideally. The A320 fleet first, then the A350s. And we need MTBUR for the top twenty components."],
  ["Tom","At the moment we're doing it all in Excel, and it takes my team about three days every month."],
  ["Nguyen","How fresh does the data need to be? Is a daily refresh good enough?"],
  ["Tom","Daily is fine. To be honest, weekly would already be a massive improvement."],
  ["Tom","One more thing. We need to exclude no fault found removals, otherwise the numbers look much worse than they are."]],
  qs:[["Which fleet does Tom want first?",["A350","A320","A330","All fleets at once"],1],
   ["How long does the Excel process take now?",["Three hours","One day","Three days","A week"],2],
   ["Which refresh frequency is acceptable?",["Real time only","Daily","Monthly","Quarterly"],1],
   ["What should be excluded?",["Scheduled removals","No fault found removals","Engine removals","A350 data"],1],
   ["How many components need MTBUR?",["Ten","Twelve","Twenty","Thirty"],2]]},
 {id:"sb",t:"Tiến độ Service Bulletin",ctx:"Airbus (Pháp) và airline Tây Ban Nha rà soát chiến dịch SB.",sp:{Claire:"fr",Elena:"es"},lines:[
  ["Claire","Hello everyone. Today I would like to review the status of the service bulletin campaign on the landing gear, ATA thirty-two."],
  ["Claire","Currently, the embodiment rate is sixty-five percent on your fleet. We have eleven aircraft remaining."],
  ["Elena","For us, the problem is the hangar slots. We can only do two aircraft per week, because of the summer schedule."],
  ["Claire","I understand. But the airworthiness directive has a compliance date at the end of September. It is not negotiable."],
  ["Elena","Okay. Then we will need the kits earlier. Can Airbus deliver all the kits before the fifteenth of July?"],
  ["Claire","I will check with logistics and revert to you by Friday."]],
  qs:[["Which system is the SB about?",["Landing gear","Engines","Doors","Navigation"],0,"ATA 32 = landing gear (càng đáp)."],
   ["What is the current embodiment rate?",["15%","50%","65%","75%"],2],
   ["How many aircraft remain?",["Seven","Eleven","Twelve","Seventeen"],1],
   ["Why can the airline only do two aircraft per week?",["No kits","Limited hangar slots","No engineers","Bad weather"],1],
   ["What is the compliance deadline?",["End of July","15 July","End of September","This Friday"],2],
   ["What will Claire do by Friday?",["Deliver the kits","Reply after checking with logistics","Cancel the SB","Visit the hangar"],1]]},
 {id:"otp",t:"Rà soát OTP của airline",ctx:"Phân tích chậm chuyến với đội vận hành Ấn Độ và đồng nghiệp Mỹ.",sp:{Priya:"in",Sarah:"us"},lines:[
  ["Priya","So last month our on-time performance dropped to seventy-eight percent, from eighty-four percent in May."],
  ["Priya","Main contributor is delay code ninety-three, that is the late arrival of the aircraft from the previous sector."],
  ["Sarah","Got it. So it's mostly knock-on delays. Do you see a pattern by station?"],
  ["Priya","Yes, mostly in Mumbai during the evening peak. The turnaround time there is only forty minutes, which is too tight."],
  ["Sarah","Could we pull the data for the last ninety days and break it down by hour of the day?"],
  ["Priya","Sure, I'll do the needful and send it across by tomorrow."]],
  qs:[["What was OTP last month?",["84%","78%","87%","73%"],1],
   ["What does delay code 93 mean here?",["A technical problem","Late arrival of the aircraft from the previous flight","Weather","Crew shortage"],1],
   ["Which station has the problem?",["Delhi","Bangalore","Mumbai","Chennai"],2],
   ["What is the turnaround time there?",["Fourteen minutes","Forty minutes","Forty-five minutes","Four hours"],1],
   ["\"I'll do the needful\" means:",["I'll do what is necessary","I need help","I can't do it","I'll ask my boss"],0]]},
 {id:"pdm",t:"Mô hình bảo dưỡng dự đoán APU",ctx:"Data scientist người Đức trình bày kết quả mô hình.",sp:{Markus:"de",Nguyen:"us"},lines:[
  ["Markus","We have now tested the model on the APU data from the last two years."],
  ["Markus","It predicts a starter failure about ten days before it happens, with a precision of around seventy percent."],
  ["Nguyen","And what about false positives? Maintenance teams don't like alerts that turn out to be nothing."],
  ["Markus","Yes, this is the main issue. Roughly three out of ten alerts are false positives. We want to bring this under fifteen percent."],
  ["Markus","My proposal is a pilot with one airline, on thirty aircraft, for three months."],
  ["Nguyen","Sounds reasonable. Let's align with the airline next week and agree on the success criteria."]],
  qs:[["Which component does the model predict?",["Engine fan blade","APU starter","Brakes","Hydraulic pump"],1],
   ["How early does it predict the failure?",["Ten hours","Two days","Ten days","Two years"],2],
   ["What share of alerts are false positives now?",["About 10%","About 15%","About 30%","About 70%"],2],
   ["What is the pilot scope?",["1 airline, 30 aircraft, 3 months","3 airlines, 10 aircraft, 1 month","1 airline, 13 aircraft, 3 weeks","All airlines, 1 year"],0]]},
 {id:"dq",t:"Sự cố dữ liệu ACARS",ctx:"Escalation: thiếu dữ liệu từ đội tàu A321.",sp:{Sarah:"us",Arjun:"in",Nguyen:"gb"},lines:[
  ["Sarah","Hey all, quick heads-up. Since Monday, we're missing about a third of the ACARS messages from the A321 fleet."],
  ["Arjun","Yes, we noticed also. Our ground station provider changed the format without informing us."],
  ["Nguyen","That explains it. The pipeline is rejecting the new messages because the schema doesn't match."],
  ["Sarah","What's the workaround for now? The reliability team is blind on those aircraft."],
  ["Nguyen","I can map the new fields today and backfill the missing data from Monday. It should be done by tomorrow noon."],
  ["Sarah","Great. Arjun, can you get the provider to send us the new specification, so it doesn't happen again?"],
  ["Arjun","Yes, I will escalate it to the vendor manager today itself."]],
  qs:[["How much of the data is missing?",["About a quarter","About a third","About half","All of it"],1],
   ["What is the root cause?",["Server outage","The provider changed the message format","Aircraft software bug","Expired password"],1],
   ["When will the backfill be finished?",["Today","Tomorrow noon","Monday","Next week"],1],
   ["What will Arjun do?",["Fix the pipeline","Escalate to the vendor manager","Call Airbus","Nothing"],1]]},
 {id:"lease",t:"Trả máy bay thuê (redelivery)",ctx:"Airline Tây Ban Nha và quản lý hợp đồng người Anh.",sp:{Tom:"gb",Elena:"es"},lines:[
  ["Tom","Okay, let's go through the redelivery of the A330, MSN twelve forty-five. The lease ends on the thirtieth of November."],
  ["Elena","From our side, the main risk is the records. Some of the back to birth traceability for the landing gear is missing."],
  ["Tom","How many parts are we talking about?"],
  ["Elena","Around fifteen. We are searching the paper archive in Madrid, but it is slow."],
  ["Tom","If we can't find them, the lessor may ask us to replace the parts, and that's very expensive. Let's put it on the risk register."],
  ["Elena","Agreed. I will give you an update every Monday until the redelivery."]],
  qs:[["Which aircraft type?",["A320","A321","A330","A350"],2],
   ["When does the lease end?",["30 September","13 November","30 November","3 December"],2],
   ["What is missing?",["An engine","Landing gear traceability records","Cabin seats","Pilot logbooks"],1],
   ["How often will Elena give an update?",["Every day","Every Monday","Every month","Only once"],1]]},
 {id:"kick",t:"Kick-off dự án dashboard đội tàu",ctx:"Airbus (Pháp), airline Ấn Độ và bạn.",sp:{Julien:"fr",Priya:"in",Nguyen:"us"},lines:[
  ["Julien","Welcome everyone to the kick-off. The objective is to put the fleet health dashboard in production by the end of Q1."],
  ["Julien","The scope is the A350 fleet of the airline, so twenty-two aircraft, with the engine and APU data."],
  ["Priya","I have one doubt. Will the dashboard also cover the A320 neo fleet, or that is phase two?"],
  ["Julien","Good question. The A320 neo is phase two. We will discuss it in the steering committee in April."],
  ["Nguyen","On the timeline, we plan three sprints of two weeks, then two weeks of user acceptance testing."],
  ["Priya","Okay, please share the planning so we can block the time of our engineers. Kindly add me in the invite."]],
  qs:[["What is the go-live target?",["End of Q1","End of Q2","April","Phase two"],0],
   ["What is in phase one?",["The A320neo fleet","22 A350 aircraft","12 A350 aircraft","All fleets"],1],
   ["Priya says \"I have one doubt\". She means:",["She doesn't trust Julien","She has a question","She disagrees","She is confused about her job"],1],
   ["What comes before UAT?",["Two sprints of three weeks","Three sprints of two weeks","Three months of design","Two weeks of testing"],1],
   ["Priya asks for \"the planning\". She means:",["The schedule","A budget","A design document","A contract"],0,"\"planning\" dùng như danh từ = lịch trình, rất hay gặp với người Pháp và Ấn."]]},
 {id:"relrev",t:"Họp reliability hằng tháng",ctx:"Dữ liệu reliability: removal rate, alert level, shop findings.",sp:{Tom:"gb",Arjun:"in",Nguyen:"us"},lines:[
  ["Tom","Okay, first item on the reliability review. The pack flow control valve, ATA twenty-one, is above the alert level for the third month in a row."],
  ["Arjun","Yes, we had fourteen removals in October. The removal rate is now zero point nine per thousand flight hours, and the alert level is zero point six."],
  ["Tom","And what do the shop findings say? Are these confirmed failures?"],
  ["Arjun","Only six were confirmed. The other eight were no fault found. And three removals were on the same tail, so it is a repetitive defect."],
  ["Nguyen","I can split the dashboard into confirmed and unconfirmed removals, and flag repetitive defects automatically, say three removals within thirty days."],
  ["Tom","That would be very useful. Let's also raise it with Airbus, we need to know if other operators see the same trend."]],
  qs:[["Which component is discussed?",["Pack flow control valve","Bleed valve","APU starter","Brake unit"],0],
   ["How many removals were there in October?",["Four","Six","Fourteen","Forty"],2],
   ["What is the alert level?",["0.6 per 1000 FH","0.9 per 1000 FH","1.6 per 1000 FH","6 per 1000 FH"],0],
   ["How many removals were confirmed failures?",["Three","Six","Eight","Fourteen"],1],
   ["What rule does Nguyen propose for repetitive defects?",["2 removals in 10 days","3 removals in 30 days","3 removals in 3 months","Any NFF removal"],1]]},
 {id:"smp",t:"Kế hoạch bảo dưỡng: đổi MPD",ctx:"Airbus giới thiệu revision MPD mới, airline lập kế hoạch A-check.",sp:{Claire:"fr",Elena:"es",Nguyen:"us"},lines:[
  ["Claire","So the new MPD revision is published. The main change is the A-check interval, which goes from six hundred to seven hundred fifty flight hours."],
  ["Elena","That is good news. But do we need to update our AMP first, or can we apply it directly?"],
  ["Claire","You must update your AMP and get approval from your authority. Normally it takes around two months."],
  ["Elena","Okay. And for the zonal inspection, the threshold stays at twelve thousand cycles?"],
  ["Claire","Yes, the threshold is the same, but the repeat interval is now two years or three thousand cycles, whichever comes first."],
  ["Nguyen","I'll recalculate the due list with the new intervals, so you can see how many A-checks you save next year."]],
  qs:[["New A-check interval?",["600 FH","650 FH","750 FH","7,500 FH"],2],
   ["What must the airline do before applying it?",["Nothing","Update its AMP and get approval","Buy new task cards","Ask the pilots"],1],
   ["How long does approval usually take?",["Two weeks","Two months","Six months","One year"],1],
   ["The zonal inspection repeat interval is:",["2 years or 3,000 FC, whichever comes first","3 years or 2,000 FC","12,000 FC only","Unchanged"],0],
   ["What will Nguyen recalculate?",["The MPD","The due list","The alert levels","The lease"],1]]},
 {id:"utg",t:"Dữ liệu utilization không khớp",ctx:"Giờ bay từ ACARS lệch với tech log của airline.",sp:{Priya:"in",Nguyen:"us"},lines:[
  ["Priya","Hi Nguyen. I have one doubt on the utilization report. For VT-IXA, the dashboard shows thirteen point two flight hours per day, but our tech log says eleven point eight."],
  ["Nguyen","Thanks Priya. The dashboard calculates flight hours from the ACARS OOOI times. Is your tech log using block time or airborne time?"],
  ["Priya","Airborne time, from off to on. That is how we report flight hours to the authority."],
  ["Nguyen","Then that's the gap. Our pipeline is using out to in, so it's block time. Taxi time adds more than an hour a day at your hubs."],
  ["Priya","Okay, understood. Also, some flights have no in-time because of missing ACARS messages. How are you handling those?"],
  ["Nguyen","Right now they're dropped. I'll fill them from the tech log instead, and exclude parked aircraft from the fleet average."]],
  qs:[["What daily utilization does the dashboard show?",["11.8 FH","12.3 FH","13.2 FH","30.2 FH"],2],
   ["How does the airline report flight hours?",["Block time, out to in","Airborne time, off to on","Engine running time","Scheduled time"],1],
   ["Why is the dashboard number higher?",["It counts taxi time","It counts parked aircraft","It double counts cycles","Wrong time zone"],0],
   ["What happens now to flights with no in-time?",["They are dropped","They are estimated","They are counted twice","They are sent to Airbus"],0],
   ["What will be excluded from the fleet average?",["Long flights","Parked aircraft","Night flights","ACARS data"],1]]},
 {id:"cfg",t:"Mô hình dữ liệu configuration in parts",ctx:"Ghép dữ liệu cấu hình linh kiện theo MSN, FIN, part number, serial number.",sp:{Markus:"de",Julien:"fr",Nguyen:"us"},lines:[
  ["Markus","For the configuration in parts dataset, each row is one installed part: MSN, FIN, position, part number, serial number and install date."],
  ["Nguyen","Okay. And when a part is removed, do we close the row with a removal date, or do we get a new record?"],
  ["Markus","We close the row and open a new one for the replacement part. So you can rebuild the as-maintained configuration at any date."],
  ["Julien","Be careful, the as-built configuration from Airbus and the airline's as-maintained data do not always match. Actually, we found around two percent of mismatches."],
  ["Nguyen","Mostly serial number swaps, or superseded part numbers?"],
  ["Julien","Both. And for the LLPs, the remaining cycles must come from the airline records, not from our data."],
  ["Markus","My suggestion: we join on MSN and FIN first, then check the part number against the IPC for interchangeability."]],
  qs:[["What does one row represent?",["One flight","One installed part","One task card","One aircraft"],1],
   ["What happens when a part is removed?",["The row is deleted","The row is closed and a new row opens","Nothing","The MSN changes"],1],
   ["How many records mismatch between as-built and as-maintained?",["About 0.2%","About 2%","About 20%","None"],1],
   ["Where must LLP remaining cycles come from?",["Airbus data","The airline records","The IPC","ACARS"],1],
   ["What are the first join keys Markus suggests?",["Part number and serial number","MSN and FIN","FIN and install date","Tail number and date"],1]]},
 {id:"shop",t:"Engine shop visit: kéo dài thời gian ở xưởng",ctx:"Xưởng động cơ báo trễ, airline lo thiếu máy bay mùa cao điểm.",sp:{Markus:"de",Priya:"in",Nguyen:"us"},lines:[
  ["Markus","Good afternoon. I have to inform you that the shop visit for engine serial number eight nine two four will take longer than planned."],
  ["Markus","During the inspection we found damage on two high pressure turbine blades, so the turnaround time goes from sixty to seventy-eight days."],
  ["Priya","That is a big problem for us. We need this engine back before the summer schedule starts on the first of June."],
  ["Nguyen","Priya, I checked the spare engine pool. One spare is available from the fifteenth of April, so we can cover the gap if we lease it."],
  ["Priya","Okay, that helps. Markus, can you share the shop findings report so our engineering team can review the blade damage?"],
  ["Markus","Yes, I will send the report tomorrow morning, including the photos and the cost estimate."]],
  qs:[["Why will the shop visit take longer?",["Missing parts","Damage on turbine blades","Staff shortage","Wrong paperwork"],1],
   ["What is the new turnaround time?",["60 days","68 days","78 days","87 days"],2],
   ["When does the summer schedule start?",["1 April","15 April","1 June","15 June"],2],
   ["How does Nguyen propose to cover the gap?",["Delay flights","Lease a spare engine","Buy a new engine","Cancel the summer schedule"],1],
   ["What will Markus send tomorrow?",["An invoice only","The shop findings report with photos and cost","A new engine","The lease contract"],1]]},
 {id:"fleet",t:"Lập kế hoạch đội tàu năm sau",ctx:"Hoạch định số máy bay và giờ bay cho năm tới.",sp:{Tom:"gb",Elena:"es",Nguyen:"us"},lines:[
  ["Tom","Right, let's look at next year's fleet plan. We expect four new A321neo deliveries, two in March and two in September."],
  ["Elena","And at the same time, we return three A320ceo to the lessors, so the net growth is only one aircraft."],
  ["Nguyen","Based on this year's data, the average utilization is eleven point four block hours per day. If we keep that, the new aircraft add about sixteen thousand block hours."],
  ["Tom","Sounds about right. But the A321neo will fly longer sectors, so I'd assume closer to twelve and a half hours a day."],
  ["Elena","Agreed. Can you rerun the model with twelve and a half hours for the neo, and send the new numbers by Friday?"],
  ["Nguyen","Sure, I'll update the model and share it before Friday's planning meeting."]],
  qs:[["How many A321neo deliveries are expected?",["Two","Three","Four","Six"],2],
   ["How many A320ceo go back to lessors?",["One","Two","Three","Four"],2],
   ["What is this year's average utilization?",["10.4 hours","11.4 hours","12.4 hours","12.5 hours"],1],
   ["Why does Tom expect higher utilization for the neo?",["Newer engines","Longer sectors","Fewer crews","Cheaper fuel"],1],
   ["When does Elena want the new numbers?",["Today","By Friday","Next month","In September"],1]]},
 {id:"gov",t:"Quản trị dữ liệu: ai được xem dữ liệu gì",ctx:"Airline muốn kiểm soát quyền truy cập dữ liệu bảo dưỡng.",sp:{Claire:"fr",Arjun:"in",Nguyen:"gb"},lines:[
  ["Arjun","Our security team has one concern. Currently all users can see the maintenance data of all fleets. We want to restrict it."],
  ["Claire","I understand. Actually, the platform supports access by fleet and by role. For example, engineers see their fleet, managers see everything."],
  ["Nguyen","We can also mask the names of the technicians in the tech log data, so the reliability team only sees anonymous IDs."],
  ["Arjun","That is perfect. Also, we need an audit log of who exported which dataset, for the authority."],
  ["Claire","The audit log is already available. It keeps every export for two years."],
  ["Nguyen","Then the action items are: I'll set up the fleet-based groups, and Arjun will send the list of users and their roles by next Wednesday."]],
  qs:[["What is the security team's concern?",["Data is too slow","All users can see all fleets' maintenance data","Passwords are weak","Data is deleted"],1],
   ["How can access be restricted?",["By fleet and by role","By country only","By time of day","It cannot be restricted"],0],
   ["What will be masked?",["Aircraft registrations","Technician names","Part numbers","Flight numbers"],1],
   ["How long is the audit log kept?",["Six months","One year","Two years","Forever"],2],
   ["What will Arjun send by next Wednesday?",["The audit log","The list of users and roles","The fleet plan","A contract"],1]]},
 {id:"sec",t:"Rà soát bảo mật hệ thống IT",ctx:"Kiểm tra bảo mật trước khi kết nối hệ thống airline với nền tảng.",sp:{Sarah:"us",Markus:"de",Nguyen:"us"},lines:[
  ["Sarah","Before we connect the airline's maintenance system, IT security needs to approve the integration. Markus, can you walk us through the findings?"],
  ["Markus","Yes. In general the design is good. We found two issues. First, the service account has more rights than it needs."],
  ["Markus","Second, the API key is valid for one year. Our policy is maximum ninety days, so it must be rotated more often."],
  ["Nguyen","Both make sense. I can reduce the service account to read-only on the three tables we use, and set up automatic key rotation every sixty days."],
  ["Sarah","Great. Markus, if those two points are fixed, can you sign off this week?"],
  ["Markus","Yes, if I see the changes by Thursday, I will give the approval on Friday."]],
  qs:[["Who must approve the integration?",["The airline CEO","IT security","Airbus","The authority"],1],
   ["What is the first issue?",["The service account has too many rights","The data is encrypted","The server is slow","No backups"],0],
   ["What is the maximum key validity in their policy?",["30 days","60 days","90 days","One year"],2],
   ["How often will Nguyen rotate the key?",["Every 30 days","Every 60 days","Every 90 days","Once a year"],1],
   ["When will Markus give approval if he sees the changes by Thursday?",["Thursday","Friday","Next Monday","Next week"],1]]},
 {id:"warr",t:"Claim bảo hành linh kiện",ctx:"Airline đòi bảo hành cho van bị hỏng sớm; Airbus và nhà cung cấp tham gia.",sp:{Arjun:"in",Claire:"fr",Nguyen:"us"},lines:[
  ["Arjun","We want to raise a warranty claim for the bleed valves. Six units failed before four thousand flight hours, and the guaranteed MTBUR is ten thousand."],
  ["Claire","Okay. For the claim, we need the removal date, the flight hours since new and the shop report for each unit."],
  ["Nguyen","I can extract that from the reliability data. Four of the six shop reports confirm a seal failure, the other two are no fault found."],
  ["Claire","The no fault found units are normally not covered. But the four confirmed failures are clearly within the warranty period."],
  ["Arjun","Fine, we will claim for the four units first, and send the two others for a second test at a different shop."],
  ["Claire","Good. Please submit the claim before the end of the month, because the warranty window closes on the thirtieth."]],
  qs:[["How many valves failed early?",["Four","Six","Ten","Sixteen"],1],
   ["What is the guaranteed MTBUR?",["4,000 FH","6,000 FH","10,000 FH","40,000 FH"],2],
   ["What do four shop reports confirm?",["A seal failure","Wrong installation","No fault found","Corrosion"],0],
   ["Which units are normally not covered?",["Confirmed failures","No fault found units","New units","Units under 4,000 FH"],1],
   ["When does the warranty window close?",["The 13th","The 20th","The 30th","Next month"],2]]},
 {id:"audit",t:"Nhà chức trách kiểm tra hồ sơ bảo dưỡng",ctx:"Chuẩn bị cho đợt audit của nhà chức trách hàng không.",sp:{Tom:"gb",Priya:"in",Nguyen:"us"},lines:[
  ["Tom","The authority audit is in two weeks. They will focus on the deferred defects and on the airworthiness directive compliance."],
  ["Priya","For the deferred defects, we found three items that stayed open longer than the MEL allows. We need an explanation for each one."],
  ["Nguyen","I've built a report that shows every deferred defect with its MEL category, the deferral date and the closing date. The three late ones are highlighted."],
  ["Tom","Very useful. Can you add the AD compliance status per aircraft, with the next due date?"],
  ["Nguyen","Yes, I'll add it by Wednesday, and export both reports to PDF for the auditors."],
  ["Priya","Please also keep the raw data ready. Last time the auditor asked to see the source records, not only the summary."]],
  qs:[["When is the audit?",["Tomorrow","In one week","In two weeks","In two months"],2],
   ["How many deferred defects stayed open too long?",["Two","Three","Four","Thirteen"],1],
   ["What will Nguyen add to the report?",["Crew hours","AD compliance status per aircraft","Fuel burn","Delay codes"],1],
   ["In what format will the reports go to the auditors?",["Excel","PDF","Email text","Paper only"],1],
   ["What did the auditor ask for last time?",["Photos","The source records","A presentation","A discount"],1]]}
];
(function(){const V = t => t.trim().split("\n").map(l=>{const [w,m,x]=l.split("|");return {w:w.trim(),m:m.trim(),x:x.trim()}});
window.L30_TERMS=[
 {t:"Bảo dưỡng & kỹ thuật",v:V(`AOG|Aircraft On Ground: máy bay nằm đất chờ sửa (đọc A-O-G)|We have an AOG in Bangkok, the part is urgent.
MRO|Maintenance, Repair and Overhaul: bảo dưỡng sửa chữa (đọc M-R-O)|The engine is at the MRO shop for three weeks.
MEL|Minimum Equipment List: danh mục được phép bay khi hỏng (đọc M-E-L hoặc "mel")|The defect is deferred under the MEL for ten days.
deferred defect|lỗi được hoãn sửa|There are four deferred defects on this aircraft.
AD|Airworthiness Directive: chỉ thị bắt buộc của nhà chức trách (đọc A-D)|The AD must be complied with before the end of the year.
SB|Service Bulletin: thông báo kỹ thuật của nhà sản xuất (đọc S-B)|Airbus released a new service bulletin for the cargo door.
ATA chapter|chương ATA phân loại hệ thống (32 = càng đáp)|Most of the removals are in ATA chapter thirty-two.
MSN|Manufacturer Serial Number: số sản xuất (đọc M-S-N)|Which MSN are we talking about?
tail number|số đăng ký máy bay|Can you give me the tail number of the aircraft?
unscheduled removal|tháo thiết bị ngoài kế hoạch|Unscheduled removals went up by twenty percent.
NFF|No Fault Found: tháo ra kiểm tra không thấy lỗi|Almost half of these removals are no fault found.
MTBUR|Mean Time Between Unscheduled Removals (đọc từng chữ)|The MTBUR of this valve is below the target.
heavy check|đợt bảo dưỡng lớn (C-check)|The aircraft is in the hangar for a heavy check.
line maintenance|bảo dưỡng tại sân đỗ|Line maintenance found a leak during the walkaround.
repair turnaround time|thời gian sửa xong và trả lại|The repair turnaround time is about fifteen days.`)},
 {t:"Khai thác bay (airline ops)",v:V(`OTP|On-Time Performance: tỉ lệ đúng giờ (đọc O-T-P)|Our OTP was eighty-five percent last month.
delay code|mã nguyên nhân chậm chuyến|Most delays were coded as technical.
block hours|giờ khối, từ lúc rời bến tới lúc vào bến|The aircraft flew about ten block hours a day.
flight cycles|số chu kỳ cất và hạ cánh|This part is limited by flight cycles, not hours.
utilization|mức khai thác (giờ bay mỗi ngày)|Fleet utilization is higher in the summer.
turnaround|quay đầu chuyến tại sân bay|We have a forty-minute turnaround in Hanoi.
slot|khung giờ được cấp (cất hạ cánh, hangar)|We lost our slot because of the delay.
diversion|chuyển hướng hạ cánh|The flight had a diversion to Kolkata.
MCC|Maintenance Control Centre: trung tâm điều hành kỹ thuật|Please call MCC before releasing the aircraft.
dispatch reliability|độ tin cậy khởi hành|Dispatch reliability is above ninety-nine percent.
wet lease|thuê máy bay kèm tổ bay|We wet leased two aircraft for the summer peak.
redelivery|trả máy bay khi hết hợp đồng thuê|The redelivery is planned for November.
ETOPS|bay đường dài hai động cơ (đọc "EE-tops")|This aircraft is not ETOPS certified.
station|sân bay hoặc trạm khai thác|We don't have an engineer at that station.
sector|chặng bay|The aircraft flew six sectors today.`)},
 {t:"Dữ liệu & nền tảng",v:V(`ACARS|hệ thống truyền dữ liệu máy bay và mặt đất (đọc "AY-cars")|We receive ACARS messages in near real time.
PFR|Post Flight Report: báo cáo lỗi sau chuyến (đọc P-F-R)|Can you send me the PFR for that flight?
fault message|thông báo lỗi hệ thống|The same fault message appears on every flight.
FDM|Flight Data Monitoring: giám sát dữ liệu bay|The FDM data comes from the QAR every day.
health monitoring|giám sát tình trạng thiết bị|Engine health monitoring flagged a trend shift.
data pipeline|luồng xử lý dữ liệu|The data pipeline failed last night.
ingestion|nạp dữ liệu vào hệ thống|Ingestion takes about twenty minutes.
schema|cấu trúc dữ liệu|The provider changed the schema without telling us.
backfill|nạp bù dữ liệu cũ|We need to backfill the data from last week.
data refresh|làm mới dữ liệu|Is a daily data refresh good enough?
lineage|truy vết nguồn gốc dữ liệu|You can see the lineage of every dataset.
false positive|cảnh báo sai|Too many false positives and nobody trusts the alerts.
predictive maintenance|bảo dưỡng dự đoán|Predictive maintenance can prevent AOG events.
UAT|User Acceptance Testing: người dùng kiểm thử (đọc U-A-T)|UAT starts the week after next.
go-live|đưa vào chạy thật|The go-live is planned for March.`)},
 {t:"Ngôn ngữ cuộc họp",v:V(`action item|việc cần làm sau họp|Let's recap the action items.
heads-up|báo trước|Just a quick heads-up, the server will be down tonight.
take it offline|bàn riêng sau|Let's take this offline, it's too detailed.
align|thống nhất|We need to align with the airline first.
stakeholder|bên liên quan|All stakeholders should be in the loop.
escalate|đẩy lên cấp cao hơn|If it's not fixed by Friday, we'll escalate.
sign off|phê duyệt|The SME has to sign off on the requirements.
blocker|vật cản|Is there any blocker on your side?
ETA|thời gian dự kiến đến hoặc xong (đọc E-T-A)|What's the ETA for the fix?
bandwidth|khả năng, thời gian để làm thêm|I don't have the bandwidth this week.
ballpark|con số ước chừng|Can you give me a ballpark figure?
revert|(Ấn Độ) phản hồi lại|Kindly revert at the earliest.
do the needful|(Ấn Độ) làm những gì cần làm|Please do the needful and close the ticket.
prepone|(Ấn Độ) dời sớm hơn|Can we prepone the call to ten o'clock?
actually|(người Pháp hay dùng với nghĩa "hiện tại")|Actually, we have three aircraft in the hangar.`)},
 {t:"Dữ liệu Reliability",v:V(`removal rate|tỉ lệ tháo thiết bị (thường tính trên 1000 FH)|The removal rate is two point five per thousand flight hours.
alert level|ngưỡng cảnh báo độ tin cậy|The pack valve is above the alert level for the third month.
MTBF|Mean Time Between Failures: thời gian trung bình giữa hai lần hỏng|We use MTBF only for confirmed failures.
confirmed failure|hỏng được xác nhận khi sửa ở xưởng|Only sixty percent of the removals were confirmed failures.
shop findings|kết quả kiểm tra ở xưởng sửa chữa|We are still waiting for the shop findings from the vendor.
pilot report|báo cáo lỗi của phi công (PIREP)|Pilot reports on ATA twenty-one doubled this month.
maintenance report|báo cáo lỗi do kỹ thuật viên phát hiện (MAREP)|Maintenance reports are entered in the tech log.
repetitive defect|lỗi lặp lại trên cùng máy bay|This is a repetitive defect, the third time in ten days.
chronic defect|lỗi mãn tính, sửa mãi không dứt|The airline flagged it as a chronic defect.
top removers|các thiết bị bị tháo nhiều nhất|Let's start with the top ten removers.
technical delay|chậm chuyến do kỹ thuật|Technical delays per hundred departures went down.
reliability review|cuộc họp rà soát độ tin cậy hằng tháng|We'll present the dashboard at the next reliability review.`)},
 {t:"Bảo dưỡng theo kế hoạch",v:V(`MPD|Maintenance Planning Document: tài liệu kế hoạch bảo dưỡng của Airbus|The new MPD revision changes thirty task intervals.
AMP|Aircraft Maintenance Programme: chương trình bảo dưỡng của airline|Each airline adapts the MPD into its own AMP.
task card|phiếu công việc bảo dưỡng|The task card shows the access panels and the tools.
interval|chu kỳ lặp của một task|The interval is six hundred flight hours or four months.
threshold|ngưỡng lần thực hiện đầu tiên|The first inspection is at a threshold of twelve thousand cycles.
whichever comes first|cái nào đến trước thì tính|Do it every two years or three thousand cycles, whichever comes first.
due list|danh sách task sắp đến hạn|Can you export the due list for the next thirty days?
A-check|đợt kiểm tra nhẹ định kỳ|The A-check is every seven hundred fifty flight hours.
work package|gói công việc cho một lần vào hangar|The work package has three hundred task cards.
ground time|thời gian máy bay nằm đất để bảo dưỡng|We only have eight hours of ground time tonight.
interval escalation|kéo dài chu kỳ task dựa trên dữ liệu|We want to justify the interval escalation with three years of findings.
hard time|thay thế bắt buộc theo giờ hoặc chu kỳ|This component is hard time, it must be replaced at the limit.`)},
 {t:"Utilization (giờ bay & chu kỳ)",v:V(`FH|Flight Hours: giờ bay (đọc F-H hoặc "flight hours")|The aircraft did eleven FH yesterday.
FC|Flight Cycles: chu kỳ bay (đọc F-C)|We record one FC per take-off and landing.
FH to FC ratio|tỉ lệ giờ bay trên chu kỳ (độ dài chặng)|A short-haul fleet has an FH to FC ratio around one point five.
daily utilization|giờ bay trung bình mỗi ngày|Average daily utilization is twelve point three hours.
OOOI times|Out, Off, On, In: rời bến, cất cánh, hạ cánh, vào bến|We calculate block time from the OOOI times.
airborne time|thời gian bay từ cất cánh tới hạ cánh|Flight hours are based on airborne time, not block time.
tech log|sổ kỹ thuật ghi giờ bay và lỗi|The tech log is still on paper at that station.
TSN|Time Since New: giờ từ khi mới (đọc T-S-N)|What is the TSN of this engine?
CSN|Cycles Since New: chu kỳ từ khi mới (đọc C-S-N)|The CSN is close to the life limit.
TSO|Time Since Overhaul: giờ từ lần đại tu gần nhất|The TSO resets after the shop visit.
parked aircraft|máy bay để nằm, không khai thác|Exclude parked aircraft from the utilization average.
stage length|độ dài trung bình một chặng|Longer stage length means fewer cycles per day.`)},
 {t:"Configuration in parts",v:V(`installed base|toàn bộ thiết bị đang lắp trên đội tàu|The installed base has about forty thousand serialized parts.
part number|mã linh kiện (P/N)|The same part number can have several serial numbers.
serial number|số sê-ri của từng chiếc linh kiện (S/N)|Two records have the same serial number on different aircraft.
position|vị trí lắp (trái, phải, số 1, số 2)|Engine number two is in position two, right wing.
FIN|Functional Item Number: mã chức năng vị trí của Airbus|We join the parts on MSN and FIN.
next higher assembly|cụm lắp cấp trên (NHA)|The valve is installed on the pack, its next higher assembly.
effectivity|áp dụng cho những máy bay nào|Check the effectivity before you order the part.
interchangeability|khả năng thay thế lẫn nhau (một chiều, hai chiều)|The new part number is one-way interchangeable.
IPC|Illustrated Parts Catalog: danh mục linh kiện minh hoạ (đọc I-P-C)|The alternate part numbers are listed in the IPC.
as-built|cấu hình lúc xuất xưởng|The as-built configuration comes from the manufacturer.
as-maintained|cấu hình thực tế sau các lần thay|The as-maintained configuration is what is really on the aircraft.
LLP|Life Limited Part: linh kiện giới hạn tuổi thọ (đọc L-L-P)|We track the remaining cycles of every LLP.
rotable|linh kiện sửa được, quay vòng|Rotables go to the shop and come back to the pool.
superseded|bị thay bằng mã mới|This part number is superseded by the dash nine.`)}
];
})();
