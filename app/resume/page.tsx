export default function Resume() {
    return (
        <iframe className="absolute w-full h-full" src='/resume.pdf'/>

        // Below methods do not work on mobile (safari)
        // <embed src='/resume.pdf' type="application/pdf" width="100%" height="100%" className="absolute w-full h-full" />
        // <object data="/resume.pdf" type="application/pdf" width="100%" height="100%" className="absolute w-full h-full">
        //     <p>Alternative text - include a link <a href="https://drive.google.com/file/d/1c04kDYCC_Ggf7gSFy-_SuzEDglEmaFnk/view?usp=sharing">to the PDF!</a></p>
        // </object>
    );
  }
  