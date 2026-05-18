import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  useNavigate,
  useParams,
  useLocation
} from "react-router-dom";

function TempleDetails() {

  const { id } = useParams();

  const navigate = useNavigate();

  const location = useLocation();

  const place =
    location.state?.place;


  // REVIEWS
  const [reviews,setReviews]=
  useState([

    {
      name:"Rahul",
      rating:5,
      comment:
      "Morning aarti was beautiful and peaceful 🙏"
    },

    {
      name:"Priya",
      rating:4,
      comment:
      "Amazing spiritual atmosphere."
    }

  ]);


  const [newReview,setNewReview]=
  useState({

    name:"",
    rating:5,
    comment:""

  });


  // AI ASSISTANT
  const [showBot,setShowBot]=
  useState(false);

  const [question,setQuestion]=
  useState("");

  const [messages,setMessages]=
  useState([

    {
      sender:"bot",
      text:
      "🙏 Welcome to DivinePath Assistant"
    }

  ]);


  useEffect(()=>{

    window.scrollTo(
      0,
      0
    );

  },[]);


  // REVIEW FUNCTION
  const addReview=()=>{

    if(
      !newReview.name ||
      !newReview.comment
    ){

      alert(
        "Please fill all fields"
      );

      return;

    }

    setReviews([

      ...reviews,

      newReview

    ]);

    setNewReview({

      name:"",
      rating:5,
      comment:""

    });

  };


  // AI FUNCTION
  const askAssistant=()=>{

    if(!question){

      return;

    }

    const userMessage={

      sender:"user",

      text:question

    };

    let botReply=
    "🙏 I couldn't understand.";

    const q=
    question.toLowerCase();

    if(
      q.includes("weather")
    ){

      botReply=
      "🌦️ Summer is usually best.";

    }

    else if(
      q.includes("darshan")
    ){

      botReply=
      "🙏 Morning darshan usually has shorter queues.";

    }

    else if(
      q.includes("trek")
    ){

      botReply=
      "🥾 Trek depends on temple route.";

    }

    else if(
      q.includes("hotel")
    ){

      botReply=
      "🏨 Nearby stays are available.";

    }

    setMessages([

      ...messages,

      userMessage,

      {
        sender:"bot",
        text:botReply
      }

    ]);

    setQuestion("");

  };


  const temple={

    name:
    place?.name ||
    "Temple",

    state:
    place?.state ||
    "India",

    description:
    place?.description ||
    "Ancient spiritual place.",

    deity:
    place?.famousFor ||
    "Unknown",

    architecture:
    place?.category ||
    "Traditional",

    history:
    place?.description ||
    "Ancient history unavailable.",

    weather:[

      "☀️ Summer : 10°C - 20°C",

      "❄️ Winter : Heavy Snowfall",

      "🌧️ Monsoon : Moderate Rainfall"

    ],

    pujas:[

      "Maha Abhishek",

      "Rudrabhishek",

      "Shiv Sahasranama",

      "Evening Aarti"

    ],

    facilities:[

      "Parking",

      "Medical Services",

      "Food Court",

      "Restrooms"

    ]

  };


const aartiImages=[

"https://images.unsplash.com/photo-1576487248805-cf45f6bcc67f?q=80&w=1200",

"https://images.unsplash.com/photo-1604608672516-f1b9b5f4d8c8?q=80&w=1200",

"https://images.unsplash.com/photo-1593696954577-ab3d39317b97?q=80&w=1200"

];


return(

<div className="bg-black text-white min-h-screen">

<section className="relative h-screen">

<div
className="absolute inset-0 bg-cover bg-center"
style={{
backgroundImage:
`url(https://picsum.photos/1600/900?random=${id})`
}}
/>

<div className="absolute inset-0 bg-black/70"/>

<div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6">

<motion.h1
  className="text-6xl font-bold"
  initial={{ opacity: 0, y: -20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  {temple.name}
</motion.h1>

<p className="mt-8 text-2xl max-w-4xl">
{temple.description}
</p>

</div>

</section>


<div className="max-w-7xl mx-auto py-20 px-6">

<div className="bg-gray-900 rounded-3xl p-10 mb-10">

<h2 className="text-4xl font-bold">

Overview ✨

</h2>

<p className="mt-6">

{temple.description}

</p>

</div>


<div className="bg-gray-900 rounded-3xl p-10 mb-10">

<h2 className="text-4xl font-bold">

History 📖

</h2>

<p className="mt-6">

{temple.history}

</p>

</div>


<div className="bg-gray-900 rounded-3xl p-10 mb-10">

<h2 className="text-4xl font-bold">

Weather 🌦️

</h2>

{temple.weather.map((item,index)=>(

<p key={index} className="mt-4">

{item}

</p>

))}

</div>


<h2 className="text-5xl text-center mt-20">

Aarti Gallery 🪔

</h2>

<div className="grid md:grid-cols-3 gap-8 mt-10">

{aartiImages.map((img,index)=>(

<img
key={index}
src={img}
alt=""
className="rounded-3xl h-[300px] object-cover"
/>

))}

</div>


<div className="mt-20 bg-gray-900 p-10 rounded-3xl">

<h2 className="text-4xl font-bold">

Devotee Reviews ⭐

</h2>

<div className="grid md:grid-cols-2 gap-6 mt-8">

{reviews.map((review,index)=>(

<div
key={index}
className="bg-black p-6 rounded-2xl"
>

<h3>

👤 {review.name}

</h3>

<p>

{"⭐".repeat(review.rating)}

</p>

<p>

{review.comment}

</p>

</div>

))}

</div>

<input
type="text"
placeholder="Name"
value={newReview.name}
onChange={(e)=>

setNewReview({

...newReview,
name:e.target.value

})

}
className="w-full mt-5 p-4 rounded-xl bg-black"
/>

<textarea
placeholder="Write review..."
value={newReview.comment}
onChange={(e)=>

setNewReview({

...newReview,
comment:e.target.value

})

}
className="w-full mt-5 p-4 rounded-xl bg-black"
/>

<button
onClick={addReview}
className="mt-5 bg-indigo-600 px-8 py-4 rounded-xl"
>

Submit Review

</button>

</div>


<div className="text-center mt-20">

<button
onClick={()=>
navigate(`/journey/${id}`)
}
className="bg-indigo-600 px-10 py-5 rounded-2xl text-2xl"
>

Let's Plan Journey ✨

</button>

</div>

</div>


<button
onClick={()=>
setShowBot(!showBot)
}
className="fixed bottom-8 right-8 bg-indigo-600 w-16 h-16 rounded-full text-3xl z-50"
>

🙏

</button>


{showBot && (

<div className="fixed bottom-28 right-8 w-[350px] bg-gray-900 rounded-3xl p-6 z-50">

<h2>

DivinePath Assistant 🤖

</h2>

<div className="h-[300px] overflow-y-auto mt-5">

{messages.map((msg,index)=>(

<div
key={index}
className="bg-black p-3 rounded-xl mt-3"
>

{msg.text}

</div>

))}

</div>

<input
value={question}
onChange={(e)=>
setQuestion(
e.target.value
)
}
placeholder="Ask..."
className="w-full mt-5 p-4 rounded-xl bg-black"
/>

<button
onClick={askAssistant}
className="w-full mt-4 bg-indigo-600 py-3 rounded-xl"
>

Ask 🙏

</button>

</div>

)}

</div>

);

}

export default TempleDetails;