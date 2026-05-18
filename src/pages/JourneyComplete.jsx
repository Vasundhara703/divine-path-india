import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

function JourneyComplete() {

const navigate = useNavigate();

const [showPacking,setShowPacking]=
useState(false);

const [showRules,setShowRules]=
useState(false);


const packing=[

"🎒 Water Bottle",
"💊 Medicines",
"📱 Power Bank",
"🧥 Warm Clothes",
"👟 Comfortable Shoes",
"☂️ Umbrella",
"🪪 ID Proof"

];


const rules=[

"🙏 Respect temple traditions",

"👕 Wear appropriate clothing",

"📵 Avoid loud music",

"🚯 Don't litter",

"📸 Follow photography rules",

"👥 Respect devotees"

];


const tips=[

"🙏 Carry ID proof",

"💧 Carry water bottle",

"📱 Keep phone charged",

"🧥 Wear comfortable clothing"

];


const quotes=[

"The soul is neither born nor dies.",

"Faith and patience lead to blessings.",

"Peace comes from within.",

"Devotion transforms the journey."

];

const randomQuote =

quotes[
Math.floor(
Math.random()*quotes.length
)
];


return(

<div className="min-h-screen bg-black text-white p-8">

<motion.div

initial={{
opacity:0,
scale:0.9
}}

animate={{
opacity:1,
scale:1
}}

transition={{
duration:0.7
}}

className="bg-gray-900 rounded-3xl p-10 max-w-5xl mx-auto text-center"
>

<h1 className="text-5xl font-bold">

Journey Ready ✨

</h1>


<p className="mt-6 text-gray-300 text-xl">

Your receipt has been downloaded successfully.

Prepare yourself before your spiritual journey.

</p>


{/* JOURNEY COUNTDOWN */}

<div className="bg-gray-800 rounded-3xl p-8 mt-10">

<h2 className="text-3xl font-bold">

Journey Countdown ⏳

</h2>

<p className="text-5xl mt-5">

5 Days Left

</p>

</div>



{/* PACKING PROGRESS */}

<div className="bg-gray-800 rounded-3xl p-8 mt-8">

<h2 className="text-3xl font-bold">

Packing Progress 🎒

</h2>

<div className="w-full bg-gray-700 h-6 rounded-full mt-8">

<div
className="bg-indigo-600 h-6 rounded-full w-[60%]"
></div>

</div>

<p className="mt-4">

60% Complete

</p>

</div>



{/* QUOTE */}

<div className="bg-gray-800 rounded-3xl p-8 mt-8">

<h2 className="text-3xl font-bold">

Today's Spiritual Quote ✨

</h2>

<p className="italic mt-6 text-xl">

"{randomQuote}"

</p>

</div>



{/* TEMPLE TIPS */}

<div className="bg-gray-800 rounded-3xl p-8 mt-8">

<h2 className="text-3xl font-bold">

Temple Tips 📋

</h2>

<div className="mt-6 space-y-3">

{tips.map((item,index)=>(

<p key={index}>

{item}

</p>

))}

</div>

</div>



{/* BUTTONS */}

<div className="flex flex-wrap justify-center gap-6 mt-10">

<button

onClick={()=>
setShowPacking(
!showPacking
)
}

className="bg-indigo-600 hover:bg-indigo-700 px-6 py-4 rounded-2xl"
>

See Packing Essentials 🎒

</button>


<button

onClick={()=>
setShowRules(
!showRules
)
}

className="bg-purple-600 hover:bg-purple-700 px-6 py-4 rounded-2xl"
>

See Do's & Don'ts 📋

</button>


<button

onClick={()=>
navigate("/")
}

className="bg-red-600 hover:bg-red-700 px-6 py-4 rounded-2xl"
>

Exit To Home 🏠

</button>

</div>



{/* PACKING */}

{showPacking && (

<div className="mt-10 bg-black rounded-3xl p-8">

<h2 className="text-3xl font-bold">

Packing Essentials 🎒

</h2>

<div className="mt-6 space-y-4">

{packing.map((item,index)=>(

<p key={index}>

{item}

</p>

))}

</div>

</div>

)}



{/* RULES */}

{showRules && (

<div className="mt-10 bg-black rounded-3xl p-8">

<h2 className="text-3xl font-bold">

Do's & Don'ts 📋

</h2>

<div className="mt-6 space-y-4">

{rules.map((item,index)=>(

<p key={index}>

{item}

</p>

))}

</div>

</div>

)}

</motion.div>

</div>

);

}

export default JourneyComplete;