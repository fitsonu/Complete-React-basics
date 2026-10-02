import './App.css'
import AmazonCard from './Component/AmazonCard.jsx'



function App() {
 const jobs = [
  {
    company: "Google",
    logo: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    post: "Frontend Developer",
    posted: "2 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    stipend: "$1,500",
    location: "Bangalore, India"
  },
  {
    company: "Microsoft",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    post: "Backend Developer",
    posted: "1 week ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$2,000",
    location: "Hyderabad, India"
  },
  {
    company: "Amazon",
    logo: "https://images.seeklogo.com/logo-png/40/2/amazon-icon-logo-png_seeklogo-405254.png",
    post: "Data Analyst",
    posted: "3 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    stipend: "$1,200",
    location: "Mumbai, India"
  },
  {
    company: "Meta",
    logo: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIyLTA0L3YxMDkxLTAzLXhfMS5qcGc.jpg",
    post: "Software Engineer",
    posted: "5 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$2,500",
    location: "Bangalore, India"
  },
  {
    company: "Apple",
    logo: "https://images.stockcake.com/public/1/c/5/1c5f326a-d867-4ac6-ba64-47b3edb9f752_large/illuminated-apple-logo-stockcake.jpg",
    post: "UI/UX Designer",
    posted: "1 day ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    stipend: "$2,200",
    location: "Delhi, India"
  },
  {
    company: "Netflix",
    logo: "https://images.ctfassets.net/4cd45et68cgf/Rx83JoRDMkYNlMC9MKzcB/2b14d5a59fc3937afd3f03191e19502d/Netflix-Symbol.png?w=700&h=456",
    post: "Data Scientist",
    posted: "2 weeks ago",
    tag1: "Part Time",
    tag2: "Senior Level",
    stipend: "$1,800",
    location: "Mumbai, India"
  },
  {
    company: "Adobe",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5axCeBXeBX0nAokB0m4gmX1dxMOnjrNyDAl7WX_cBtA&s",
    post: "React Developer",
    posted: "4 days ago",
    tag1: "Full Time",
    tag2: "Junior Level",
    stipend: "$1,300",
    location: "Noida, India"
  },
  {
    company: "IBM",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS70jfIsxYhk5ldXUYdGPhIB_-YY8eqoN1Mxt_N_P0Ps0UpeSx3",
    post: "Cloud Engineer",
    posted: "1 week ago",
    tag1: "Full Time",
    tag2: "Mid Level",
    stipend: "$1,600",
    location: "Bangalore, India"
  },
  {
    company: "Tesla",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Tesla_Motors.svg/1280px-Tesla_Motors.svg.png?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail",
    post: "Machine Learning Engineer",
    posted: "3 days ago",
    tag1: "Part Time",
    tag2: "Junior Level",
    stipend: "$1,400",
    location: "Delhi, India"
  },
  {
    company: "NVIDIA",
    logo: "https://iprsoftwaremedia.com/219/files/202512/692f50633d6332b6efbbc605_nvidia-logo-vert-wht/nvidia-logo-vert-wht_prv.png?v=0a06dca9-ab55-462d-97ea-f90ed9844e39",
    post: "AI Engineer",
    posted: "6 days ago",
    tag1: "Full Time",
    tag2: "Senior Level",
    stipend: "$2,400",
    location: "Bangalore, India"
  }
];
  return (
  <div className="Parent">

   {jobs.map(function(elem,index){
       return <div key={index}> 
      
       
        <AmazonCard 
        company={elem.company}
        post={elem.post}
        posted={elem.posted}
        tag1={elem.tag1}
        tag2={elem.tag2}
        logo={elem.logo}
        stipend={elem.stipend}
        location={elem.location}
        /> 
        </div>
   })}

   </div>  
  )}

export default App
