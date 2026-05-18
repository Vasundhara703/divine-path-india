import { useState } from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import jsPDF from "jspdf";
import QRCode from "qrcode";
import { useNavigate } from "react-router-dom";

function JourneyPlanner() {

  const { id } = useParams();

  const [step, setStep] = useState(1);
const navigate = useNavigate();
  // STEP STATES
  const [budget, setBudget] = useState("");
  const [travelMode, setTravelMode] = useState("");
  const [stay, setStay] = useState("");

  // TRAVEL POPUP
  const [showBookingPopup, setShowBookingPopup] =
    useState(false);

  const [bookingDetails, setBookingDetails] =
    useState({
      vehicleName: "",
      pnr: "",
      screenshot: null,
    });

  // STAY POPUP
  const [showStayPopup, setShowStayPopup] =
    useState(false);

  const [stayName, setStayName] =
    useState("");

  const [bookingId, setBookingId] =
    useState("");

  const [stayScreenshot, setStayScreenshot] =
    useState(null);

  // DISTANCE
  const [stayDistance, setStayDistance] =
    useState("");

  const [stayTravelTime, setStayTravelTime] =
    useState("");

const [staySuggestion, setStaySuggestion] =
  useState("");
const [foodChoice, setFoodChoice] =
  useState("");

const [placeChoice, setPlaceChoice] =
  useState("");
  // OTHER STEPS
  const [reservation, setReservation] =
    useState("");
const templeImage =
"https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop";
const downloadReceipt = async () => {

try {

const doc = new jsPDF();


// IMAGE TO BASE64

const response =
await fetch(
templeImage
);

const blob =
await response.blob();

const imageData =
await new Promise((resolve)=>{

const reader =
new FileReader();

reader.onloadend=()=>{

resolve(
reader.result
);

};

reader.readAsDataURL(
blob
);

});


// QR DATA

const qrData =
await QRCode.toDataURL(

`
Temple:${id}
Budget:${budget}
Travel:${travelMode}
Vehicle:${bookingDetails.vehicleName}
PNR:${bookingDetails.pnr}
Stay:${stay}
StayName:${stayName}
Booking:${bookingId}
Distance:${stayDistance}
TravelTime:${stayTravelTime}
Reservation:${reservation}
Food:${foodChoice}
Nearby:${placeChoice}
`

);


// HEADER

doc.setFontSize(
22
);

doc.text(
"DivinePath India 🇮🇳",
45,
20
);


doc.setFontSize(
14
);

doc.text(
"Journey Receipt",
70,
30
);


// TEMPLE IMAGE

doc.addImage(

imageData,

"JPEG",

20,

40,

170,

55

);


// DETAILS BOX

doc.roundedRect(

15,

105,

180,

145,

3,

3

);


doc.setFontSize(
11
);

let y=118;


const details=[

`Temple ID : ${id}`,

`Budget : ${budget}`,

`Travel Mode : ${travelMode}`,

`Vehicle Name : ${
bookingDetails.vehicleName || "N/A"
}`,

`Ticket / PNR : ${
bookingDetails.pnr || "N/A"
}`,

`Stay Type : ${
stay || "N/A"
}`,

`Stay Name : ${
stayName || "N/A"
}`,

`Stay Booking : ${
bookingId || "N/A"
}`,

`Distance : ${
stayDistance || 0
} KM`,

`Travel Time : ${
stayTravelTime || "N/A"
}`,

`Suggestion : ${
staySuggestion || "N/A"
}`,

`Darshan : ${
reservation || "N/A"
}`,

`Food : ${
foodChoice || "N/A"
}`,

`Nearby Places : ${
placeChoice || "N/A"
}`

];


details.forEach((item)=>{

doc.text(
item,
22,
y
);

y+=9;

});


// QR

doc.addImage(

qrData,

"PNG",

145,

200,

35,

35

);

doc.text(
"Scan QR",
150,
240
);


// FOOTER

doc.setFontSize(
12
);

doc.text(
"Thank you for using DivinePath 🙏",
50,
275
);


// DOWNLOAD PDF

doc.save(
"DivinePathJourney.pdf"
);


// OPEN NEXT PAGE

setTimeout(()=>{

navigate(
"/journey-complete"
);

},1000);

}

catch(error){

console.log(
"PDF Error:",
error
);

}

};
  // TRAVEL OPTIONS
  const getTravelOptions = () => {

    if (budget === "Low") {
      return ["Bus", "Train"];
    }

    if (budget === "Medium") {
      return ["Bus", "Train", "Cab"];
    }

    return ["Flight", "Cab"];
  };

// STEP 2 NEXT
const handleTravelNext = () => {

  if (!travelMode) {

    alert(
      "Please select travel mode"
    );

    return;

  }

  setShowBookingPopup(true);

};


// SAVE BOOKING
const handleBookingSubmit = () => {

  if (

    !bookingDetails.vehicleName ||

    !bookingDetails.pnr ||

    !bookingDetails.screenshot

  ) {

    alert(
      "Fill all booking details"
    );

    return;

  }

  setShowBookingPopup(false);

  setStep(3);

};


// STEP 3 NEXT
const handleStayNext = () => {

  if (!stay) {

    alert(
      "Please select stay option"
    );

    return;

  }

  setShowStayPopup(true);

};


// SAVE STAY DETAILS
const handleStaySubmit = () => {

  if (

    !stayName ||

    !bookingId

  ) {

    alert(
      "Please fill all stay details"
    );

    return;

  }

  setShowStayPopup(false);

  setStep(4);

};
  // CALCULATE DISTANCE
  const calculateDistance = () => {

    const randomDistance =
      Math.floor(Math.random() * 25) + 1;

    setStayDistance(randomDistance);

    if (randomDistance <= 5) {

      setStaySuggestion(
        "Very Near To Temple 🚶"
      );

      setStayTravelTime(
        "Approx 10-20 Minutes"
      );

    }

    else if (randomDistance <= 15) {

      setStaySuggestion(
        "Moderate Distance 🚕"
      );

      setStayTravelTime(
        "Approx 30-45 Minutes"
      );

    }

    else {

      setStaySuggestion(
        "Far From Temple 🚆"
      );

      setStayTravelTime(
        "Approx 1-2 Hours"
      );

    }

  };

  return (

    <div className="min-h-screen bg-black text-white px-6 py-10">

      {/* HEADER */}
      <div className="text-center">

        <h1 className="text-6xl font-bold">
          Plan Your Journey ✨
        </h1>

        <p className="mt-4 text-gray-400 text-xl">
          Temple ID: {id}
        </p>

      </div>

      {/* STEP BAR */}
      <div className="max-w-5xl mx-auto mt-14">

        <div className="flex justify-between">

          {[1,2,3,4,5,6,7].map((item) => (

            <div
              key={item}
              className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl

              ${
                step >= item
                ? "bg-indigo-600"
                : "bg-gray-700"
              }`}
            >
              {item}
            </div>

          ))}

        </div>

      </div>

      {/* MAIN CARD */}
      <motion.div
        key={step}
        initial={{
          opacity: 0,
          y: 40,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.5,
        }}
        className="max-w-5xl mx-auto mt-16 bg-gray-900 rounded-3xl p-10 shadow-2xl"
      >

     {/* STEP 1 */}
{step === 1 && (

<div>

<h2 className="text-4xl font-bold">
Step 1 — Select Budget 💰
</h2>

<div className="grid md:grid-cols-3 gap-6 mt-12">

{["Low","Medium","High"].map((item)=>(

<button
key={item}
onClick={()=>
setBudget(item)
}
className={`p-8 rounded-3xl border-2 text-2xl

${
budget===item
?
"bg-indigo-600 border-indigo-600"
:
"bg-gray-800 border-gray-700"
}`}
>

{item==="Low" && "₹ Low"}
{item==="Medium" && "₹₹ Medium"}
{item==="High" && "₹₹₹ Luxury"}

</button>

))}

</div>

<button
onClick={()=>
setStep(2)
}
className="mt-12 bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-2xl text-2xl"
>

Next →

</button>

</div>

)}



{/* STEP 2 */}
{step===2 && (

<div>

<h2 className="text-4xl font-bold">
Step 2 — Travel Mode 🚆
</h2>


{/* SUGGESTION */}

<div className="mt-8 bg-indigo-600/20 border border-indigo-500 rounded-3xl p-6">

<h3 className="text-2xl font-bold">

Suggested For {budget} Budget

</h3>

<p className="mt-4 text-lg text-gray-300">

{getTravelOptions().join(", ")}

</p>

</div>


{/* OPTIONS */}

<div className="grid md:grid-cols-2 gap-6 mt-10">

{getTravelOptions().map((mode)=>(

<button
key={mode}
onClick={()=>
setTravelMode(mode)
}
className={`p-8 rounded-3xl border-2 text-2xl

${
travelMode===mode
?
"bg-indigo-600 border-indigo-600"
:
"bg-gray-800 border-gray-700"
}`}
>

{mode==="Train" && "🚆"}
{mode==="Bus" && "🚌"}
{mode==="Cab" && "🚕"}
{mode==="Flight" && "✈️"}

{" "}

{mode}

</button>

))}

</div>


{/* BOOK LINKS */}

{travelMode && (

<div className="mt-10 bg-gray-800 rounded-3xl p-8 border border-gray-700">

<h3 className="text-2xl font-bold">

Need to book your {travelMode}? 🎟️

</h3>

<p className="mt-3 text-gray-300">

Complete booking and return here.

</p>


{travelMode==="Train" && (

<a
href="https://www.irctc.co.in/nget/train-search"
target="_blank"
rel="noreferrer"
className="inline-block mt-5 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl"
>

Book Train 🚆

</a>

)}


{travelMode==="Bus" && (

<a
href="https://www.redbus.in/"
target="_blank"
rel="noreferrer"
className="inline-block mt-5 bg-red-600 hover:bg-red-700 px-6 py-3 rounded-xl"
>

Book Bus 🚌

</a>

)}


{travelMode==="Flight" && (

<a
href="https://www.makemytrip.com/flights/"
target="_blank"
rel="noreferrer"
className="inline-block mt-5 bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-xl"
>

Book Flight ✈️

</a>

)}


{travelMode==="Cab" && (

<a
href="https://www.olacabs.com/"
target="_blank"
rel="noreferrer"
className="inline-block mt-5 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
>

Book Cab 🚕

</a>

)}

</div>

)}


<div className="flex gap-6 mt-12">

<button
onClick={()=>
setStep(1)
}
className="bg-gray-700 px-10 py-4 rounded-2xl text-2xl"
>

← Back

</button>

<button
onClick={handleTravelNext}
className="bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-2xl text-2xl"
>

Continue →

</button>

</div>

</div>

)}
{/* STEP 3 */}
{step === 3 && (

<div>

<h2 className="text-4xl font-bold">
Step 3 — Stay Options 🏨
</h2>


<div className="grid md:grid-cols-4 gap-6 mt-10">

{["Hotel","Hostel","Airbnb","Ashram"].map((item)=>(

<button
key={item}

onClick={()=>
setStay(item)
}

className={`p-8 rounded-3xl border-2 text-2xl

${
stay===item
?
"bg-indigo-600 border-indigo-600"
:
"bg-gray-800 border-gray-700"
}`}
>

{item==="Hotel" && "🏨"}

{item==="Hostel" && "🛏️"}

{item==="Airbnb" && "🏡"}

{item==="Ashram" && "🙏"}

{" "}

{item}

</button>

))}

</div>


{/* BOOKING LINKS */}

{stay && (

<div className="mt-10 bg-gray-800 rounded-3xl p-8 border border-gray-700">

<h3 className="text-2xl font-bold">

Need to book your {stay}? 🏨

</h3>

<p className="mt-3 text-gray-300">

Complete booking and return here.

</p>


{stay==="Hotel" && (

<a
href="https://www.booking.com"
target="_blank"
rel="noreferrer"
className="inline-block mt-5 bg-blue-600 px-6 py-3 rounded-xl"
>

Book Hotel 🏨

</a>

)}

{stay==="Hostel" && (

<a
href="https://www.hostelworld.com"
target="_blank"
rel="noreferrer"
className="inline-block mt-5 bg-orange-600 px-6 py-3 rounded-xl"
>

Book Hostel 🛏️

</a>

)}

{stay==="Airbnb" && (

<a
href="https://www.airbnb.com"
target="_blank"
rel="noreferrer"
className="inline-block mt-5 bg-pink-600 px-6 py-3 rounded-xl"
>

Book Airbnb 🏡

</a>

)}

{stay==="Ashram" && (

<a
href="https://www.google.com/search?q=ashram+booking"
target="_blank"
rel="noreferrer"
className="inline-block mt-5 bg-green-600 px-6 py-3 rounded-xl"
>

Find Ashram 🙏

</a>

)}

</div>

)}


{/* DETAILS ADDED */}

{stayName && (

<div className="mt-10 bg-green-600/20 border border-green-500 rounded-3xl p-8">

<h3 className="text-3xl font-bold">

Stay Details Added ✅

</h3>

<div className="mt-6 space-y-4 text-xl">

<p>🏨 Stay: {stay}</p>

<p>📍 Name: {stayName}</p>

<p>🎫 Booking ID: {bookingId}</p>

</div>

</div>

)}


{/* BUTTONS */}

<div className="flex gap-6 mt-12">

<button
onClick={()=>
setStep(2)
}
className="bg-gray-700 px-10 py-4 rounded-2xl text-2xl"
>

← Back

</button>


<button

onClick={()=>{

if(!stay){

alert(
"Please select stay option"
);

return;

}

setShowStayPopup(true);

}}

className="bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-2xl text-2xl"
>

Continue →

</button>

</div>

</div>

)}
        {/* STEP 4 */}
        {step === 4 && (

          <div>

            <h2 className="text-4xl font-bold">
              Step 4 — Temple Distance 📍
            </h2>

            <div className="mt-10 bg-gray-800 rounded-3xl p-8">

              <h3 className="text-3xl font-bold">
                Your Stay Details 🏨
              </h3>

              <div className="mt-6 space-y-4 text-xl">

                <p>
                  🏨 Stay:
                  {" "}
                  {stay}
                </p>

                <p>
                  📍 Name:
                  {" "}
                  {stayName}
                </p>

              </div>

              <button
                onClick={calculateDistance}
                className="mt-8 bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-2xl text-xl"
              >
                Calculate Distance 📍
              </button>

            </div>

            {/* RESULT */}
            {stayDistance && (

              <div className="mt-10 bg-green-600/20 border border-green-500 rounded-3xl p-8">

                <h3 className="text-3xl font-bold">
                  Distance Analysis ✨
                </h3>

                <div className="mt-6 space-y-4 text-xl">

                  <p>
                    📍 Distance:
                    {" "}
                    {stayDistance} KM
                  </p>

                  <p>
                    🚕 Suggestion:
                    {" "}
                    {staySuggestion}
                  </p>

                  <p>
                    ⏳ Time:
                    {" "}
                    {stayTravelTime}
                  </p>

                </div>

              </div>

            )}

            {/* BUTTONS */}
            <div className="flex gap-6 mt-12">

              <button
                onClick={() =>
                  setStep(3)
                }
                className="bg-gray-700 px-10 py-4 rounded-2xl text-2xl"
              >
                ← Back
              </button>

              <button
                disabled={!stayDistance}
                onClick={() =>
                  setStep(5)
                }
                className={`px-10 py-4 rounded-2xl text-2xl

                ${
                  stayDistance
                  ? "bg-indigo-600 hover:bg-indigo-700"
                  : "bg-gray-600 cursor-not-allowed"
                }`}
              >
                Next →
              </button>

            </div>

          </div>

        )}
{/* STEP 5 */}
{step === 5 && (

<div>

<h2 className="text-4xl font-bold">

Step 5 — Darshan Reservation 🙏

</h2>


<div className="grid md:grid-cols-2 gap-6 mt-10">

{["Normal Darshan","VIP Darshan"].map((item)=>(

<button
key={item}

onClick={()=>
setReservation(item)
}

className={`p-8 rounded-3xl border-2 text-2xl

${
reservation===item
?
"bg-indigo-600 border-indigo-600"
:
"bg-gray-800 border-gray-700"
}`}
>

{item==="Normal Darshan" && "🙏"}

{item==="VIP Darshan" && "⭐"}

{" "}

{item}

</button>

))}

</div>


{/* BOOKING LINKS */}

{reservation && (

<div className="mt-10 bg-gray-800 rounded-3xl p-8 border border-gray-700">

<h3 className="text-2xl font-bold">

Book {reservation} 🎫

</h3>

<p className="mt-3 text-gray-300">

Complete darshan booking and return here.

</p>


{reservation==="Normal Darshan" && (

<a
href="https://www.google.com/search?q=temple+darshan+booking"
target="_blank"
rel="noreferrer"
className="inline-block mt-6 bg-green-600 hover:bg-green-700 px-6 py-3 rounded-xl"
>

Book Normal Darshan 🙏

</a>

)}


{reservation==="VIP Darshan" && (

<a
href="https://www.google.com/search?q=vip+darshan+booking"
target="_blank"
rel="noreferrer"
className="inline-block mt-6 bg-yellow-600 hover:bg-yellow-700 px-6 py-3 rounded-xl"
>

Book VIP Darshan ⭐

</a>

)}

</div>

)}


{/* BUTTONS */}

<div className="flex gap-6 mt-12">

<button
onClick={()=>
setStep(4)
}
className="bg-gray-700 px-10 py-4 rounded-2xl text-2xl"
>

← Back

</button>


<button

disabled={!reservation}

onClick={()=>
setStep(6)
}

className={`px-10 py-4 rounded-2xl text-2xl

${
reservation
?
"bg-indigo-600 hover:bg-indigo-700"
:
"bg-gray-600 cursor-not-allowed"
}`}
>

Next →

</button>

</div>

</div>

)}
{/* STEP 6 */}
{step === 6 && (

<div>

<h2 className="text-4xl font-bold">

Step 6 — Explore Local Culture 🍲

</h2>


{/* FOOD */}

<h3 className="text-2xl font-bold mt-10">

Famous Food 🍛

</h3>

<div className="grid md:grid-cols-3 gap-6 mt-6">

{["Street Food","Traditional Food","Sweets"].map((item)=>(

<button
key={item}
onClick={()=>
setFoodChoice(item)
}
className={`p-6 rounded-3xl border-2 text-xl

${
foodChoice===item
?
"bg-indigo-600 border-indigo-600"
:
"bg-gray-800 border-gray-700"
}`}
>

{item}

</button>

))}

</div>


{/* FOOD DETAILS */}

{foodChoice==="Street Food" && (

<div className="mt-8 bg-gray-800 rounded-3xl p-8">

<h3 className="text-2xl font-bold">

Street Food Details 🍜

</h3>

<p className="mt-4">

• Chaat & Golgappe 🥗  
• Kachori Sabzi 🫓  
• Samosa & Tea ☕  
• Local fruit stalls 🍎  

Popular around temple roads and market areas.

</p>

</div>

)}


{foodChoice==="Traditional Food" && (

<div className="mt-8 bg-gray-800 rounded-3xl p-8">

<h3 className="text-2xl font-bold">

Traditional Food 🍲

</h3>

<p className="mt-4">

• Khichdi  
• Puri Sabzi  
• Temple Prasad  
• Regional Thali  

Traditional meals served near temple areas.

</p>

</div>

)}


{foodChoice==="Sweets" && (

<div className="mt-8 bg-gray-800 rounded-3xl p-8">

<h3 className="text-2xl font-bold">

Popular Sweets 🍮

</h3>

<p className="mt-4">

• Jalebi  
• Peda  
• Laddu Prasad  
• Rabri  

Common offerings and local desserts.

</p>

</div>

)}



{/* NEARBY PLACES */}

<h3 className="text-2xl font-bold mt-12">

Nearby Places 🗺️

</h3>

<div className="grid md:grid-cols-3 gap-6 mt-6">

{["Holy Ghats","Temples","Markets"].map((item)=>(

<button
key={item}
onClick={()=>
setPlaceChoice(item)
}
className={`p-6 rounded-3xl border-2 text-xl

${
placeChoice===item
?
"bg-indigo-600 border-indigo-600"
:
"bg-gray-800 border-gray-700"
}`}
>

{item}

</button>

))}

</div>


{/* PLACE DETAILS */}

{placeChoice==="Holy Ghats" && (

<div className="mt-8 bg-gray-800 rounded-3xl p-8">

<h3 className="text-2xl font-bold">

Holy Ghats 🌊

</h3>

<p className="mt-4">

• Sacred riverside areas for prayers 🙏  
• Evening Aarti ceremonies 🪔  
• Spiritual meditation spots 🧘  
• Popular for sunrise and photography 📸  

A peaceful place to explore after temple darshan.

</p>

</div>

)}


{placeChoice==="Temples" && (

<div className="mt-8 bg-gray-800 rounded-3xl p-8">

<h3 className="text-2xl font-bold">

Nearby Temples 🛕

</h3>

<p className="mt-4">

• Ancient shrines  
• Jyotirlinga temples  
• Spiritual meditation centers  
• Historic temples nearby

</p>

</div>

)}


{placeChoice==="Markets" && (

<div className="mt-8 bg-gray-800 rounded-3xl p-8">

<h3 className="text-2xl font-bold">

Local Markets 🛍️

</h3>

<p className="mt-4">

• Prasad shops  
• Handicrafts  
• Religious items  
• Local souvenirs

</p>

</div>

)}



{/* BUTTONS */}

<div className="flex gap-6 mt-12">

<button
onClick={()=>
setStep(5)
}
className="bg-gray-700 px-10 py-4 rounded-2xl text-2xl"
>

← Back

</button>

<button
onClick={()=>
setStep(7)
}
className="bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-2xl text-2xl"
>

Next →

</button>

</div>

</div>

)}
{/* STEP 7 */}
{step === 7 && (

<div>

  {/* HEADER */}
  <div className="text-center">

    <h2 className="text-5xl font-bold">
      Journey Receipt 🧾
    </h2>

    <p className="mt-5 text-gray-400 text-xl">
      Your DivinePath journey is ready.
    </p>

  </div>

  {/* RECEIPT CARD */}
  <div className="mt-12 bg-gray-800 rounded-3xl p-10">

    <div className="grid md:grid-cols-2 gap-10">

      {/* LEFT */}
      <div>

        <h3 className="text-3xl font-bold mb-8">
          Travel Details ✨
        </h3>

        <div className="space-y-5 text-xl">

          <p>
            💰 Budget:
            {" "}
            {budget}
          </p>

          <p>
            🚆 Travel:
            {" "}
            {travelMode}
          </p>

          <p>
            🏨 Stay:
            {" "}
            {stay}
          </p>

          <p>
            📍 Distance:
            {" "}
            {stayDistance} KM
          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div>

        <h3 className="text-3xl font-bold mb-8">
          Experience Details 🌟
        </h3>

        <div className="space-y-5 text-xl">

          <p>
            🎫 Reservation:
            {" "}
            {reservation}
          </p>

          <p>
            🍲 Food:
            {" "}
            {foodChoice}
          </p>

          <p>
            🗺️ Places:
            {" "}
            {placeChoice}
          </p>

        </div>

      </div>

    </div>

    {/* THANK YOU */}

    <div className="border-t border-gray-700 mt-12 pt-10 text-center">

      <h2 className="text-4xl font-bold">
        Thank You 🙏
      </h2>

      <p className="mt-5 text-gray-300 text-lg">

        Thank you for planning your
        spiritual journey with
        DivinePath India 🇮🇳

      </p>

    </div>

  </div>

  {/* BUTTONS */}

  <div className="flex flex-wrap gap-6 justify-center mt-14">

    <button
      onClick={() =>
        setStep(6)
      }
      className="bg-gray-700 px-10 py-4 rounded-2xl text-2xl"
    >
      ← Back
    </button>

    <button
onClick={downloadReceipt}
className="bg-green-600 hover:bg-green-700 px-10 py-4 rounded-2xl text-2xl"
>
Download Receipt 📄
</button>

    <button
      onClick={() =>
        window.location.href="/home"
      }
      className="bg-indigo-600 hover:bg-indigo-700 px-10 py-4 rounded-2xl text-2xl"
    >
      Home 🏠
    </button>

  </div>

</div>

)}
</motion.div>



      {/* TRAVEL POPUP */}
      {showBookingPopup && (

        <div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-6">

          <div className="bg-white text-black rounded-3xl p-10 w-full max-w-2xl">

            <h2 className="text-4xl font-bold">
              Booking Details 🎫
            </h2>

            <input
              type="text"
              placeholder="Train / Bus / Flight Name"
              value={bookingDetails.vehicleName}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  vehicleName: e.target.value,
                })
              }
              className="w-full mt-8 border-2 border-gray-300 rounded-2xl px-5 py-4"
            />

            <input
              type="text"
              placeholder="PNR / Booking ID"
              value={bookingDetails.pnr}
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  pnr: e.target.value,
                })
              }
              className="w-full mt-5 border-2 border-gray-300 rounded-2xl px-5 py-4"
            />

            <input
              type="file"
              className="w-full mt-5"
              onChange={(e) =>
                setBookingDetails({
                  ...bookingDetails,
                  screenshot: e.target.files[0],
                })
              }
            />

            <div className="flex gap-5 mt-10">

              <button
                onClick={() =>
                  setShowBookingPopup(false)
                }
                className="bg-gray-400 px-8 py-3 rounded-2xl"
              >
                Cancel
              </button>

              <button
                onClick={handleBookingSubmit}
                className="bg-indigo-600 text-white px-8 py-3 rounded-2xl"
              >
                Save & Continue →
              </button>

            </div>

          </div>

        </div>

      )}

     {/* STAY POPUP */}
{showStayPopup && (

<div className="fixed inset-0 bg-black/80 z-50 flex justify-center items-center p-6">

<div className="bg-gray-900 rounded-3xl p-10 max-w-2xl w-full">

<h2 className="text-4xl font-bold">

{stay} Details ✨

</h2>

<input
type="text"
placeholder={`Enter ${stay} Name`}
value={stayName}
onChange={(e)=>
setStayName(
e.target.value
)
}
className="w-full mt-8 p-5 rounded-2xl bg-gray-800 border border-gray-700 text-xl"
/>


<input
type="text"
placeholder="Booking ID"
value={bookingId}
onChange={(e)=>
setBookingId(
e.target.value
)
}
className="w-full mt-5 p-5 rounded-2xl bg-gray-800 border border-gray-700 text-xl"
/>


<input
type="file"
className="w-full mt-5"
onChange={(e)=>
setStayScreenshot(
e.target.files[0]
)
}
/>


<div className="flex gap-5 mt-10">

<button
onClick={()=>
setShowStayPopup(false)
}
className="bg-gray-700 px-8 py-4 rounded-2xl text-xl"
>

Cancel

</button>


<button

disabled={
!stayName ||
!bookingId
}

onClick={handleStaySubmit}

className={`px-8 py-4 rounded-2xl text-xl

${
stayName &&
bookingId
?
"bg-indigo-600 hover:bg-indigo-700"
:
"bg-gray-600 cursor-not-allowed"
}`}

>

Save Details ✅

</button>

</div>

</div>

</div>

)}

    </div>
  );
}

export default JourneyPlanner;