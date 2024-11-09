import React from "react";

function Footer() {
  return (
    <footer className="bg-background_sec py-10 lg:py-20 text-white rounded-t-3xl flex flex-col md:flex-row px-10 lg:px-32 justify-between">
      <div className="max-w-xl md:mr-10">
        <h4 className="text-xl font-semibold mb-3">Darul Najah</h4>
        <p className="text-sm font-thin md:w-64 lg:w-auto">
          Empowering learners through accessible and engaging online education.
        </p>
        <p className="text-sm font-thin hidden lg:block">
          Byway is a leading online learning platform dedicated to providing
          high-quality, flexible, and affordable educational experiences.
        </p>
      </div>
      <div className="my-3 md:my-0 md:mr-10">
        <h5 className="text-base font-semibold mb-3">Get Help</h5>
        <ul className="text-sm font-thin">
          <li className="mb-1">Contact Us</li>
          <li className="mb-1">Latest Articles</li>
          <li>FAQ</li>
        </ul>
      </div>
      <div className="my-3 md:my-0 md:mr-10">
        <h5 className="text-base font-semibold mb-3">Programs</h5>
        <ul className="text-sm font-thin">
          <li className="mb-1">Publications</li>
          <li className="mb-1">Books</li>
          <li>Seminars</li>
        </ul>
      </div>
      <div className="my-3 md:my-0 md:mr-10">
        <h5 className="text-base font-semibold mb-3">Contact Us</h5>
        <ul className="text-sm font-thin">
          <li className="mb-1">Address: 123 Main Street, Anytown, CA 12345</li>
          <li className="mb-1">Tel: +(123) 456-7890</li>
          <li className="mb-1">Mail: bywayedu@webkul.in</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
