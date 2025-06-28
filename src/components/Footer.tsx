
function Footer() {


  return (
    <div id="contact" className="mt-8 font-inter flex flex-col items-center justify-center gap-4 bg-cards border-2 border-textDark/20 ">
        <h2 className="m-2 p-2 text-lg hover:underline">mayaFittness@gmail.com</h2>
        <div className="space-x-4 ">
           <i className="fa-brands fa-facebook text-blue-600 text-2xl cursor-pointer"></i>
           <i className="fa-brands fa-instagram text-pink-600 text-2xl cursor-pointer"></i>
           <i className="fa-brands fa-x-twitter text-2xl cursor-pointer"></i>
           
        </div>
        <p className="text-textLight"> © 2025. All rights reserved.</p>
    </div>  
  )
}

export default Footer;
 