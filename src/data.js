import AboutImg from "../src/assets/img/deliveryMap.png";
import Feature1Img from "../src/assets/img/adebanke1.png";
import Feature2Img from "../src/assets/img/adebanke2.png";
import Feature3Img from "../src/assets/img/adebanke3.png";
import Feature4Img from "../src/assets/img/adebanke4.png";
import HeroImage from "../src/assets/img/diliveryMapRed.png";
import Feature1BgImg from "../src/assets/img/box.png";
import Feature2BgImg from "../src/assets/img/box.png";
import Feature3BgImg from "../src/assets/img/box.png";

export {
  AboutImg,
  Feature1Img,
  Feature2Img,
  Feature3Img,
  Feature4Img,
  HeroImage,
  Feature1BgImg,
  Feature2BgImg,
  Feature3BgImg,
};

export const navigationData = [
  {
    name: "Deliver",
    href: "deliver",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Features",
    href: "features",
  },
  {
    name: "Sign Up",
    href: "signUp",
  },
];

export const heroData = {
  title: "Order Products faster and easier",
  subtitle:
    "Order your favorite bags at any time and we will deliver them right to where you are.",
  btnText: "Get Started",
  image: HeroImage,
};

export const aboutData = {
  image: AboutImg,
  title: "Find out a little more about Us",
  subtitle:
    "We are a company dedicated to the distribution of profuct by delivery to your home or to the place where exactly you are, with the best quality of delivery.",
};

export const featuresData = {
  title: "Some services we offer",
  subtitle:
    "With our app you can view the route of ypour orther, from our local headquarters, to the place where you are. Look for the app in Playstore or Apple Store",
  list: [
    {
      image: Feature1Img,
      bgImage: Feature1BgImg,
      title: "Payment Done",
      description: "Pay with a verve or Opay card and witut much ado",
      linkText: "Learn more",
      delay: "400",
    },
    {
      image: Feature2Img,
      bgImage: Feature2BgImg,
      title: "Print out",
      description:
        "Print out service gives convenience if someday you need print data",
      linkText: "Learn more",
      delay: "1000",
    },
    {
      image: Feature3Img,
      bgImage: Feature3BgImg,
      title: "Product Recieved",
      description: "In our app you can see the delay time of your order",
      linkText: "Learn more",
      delay: "1300",
    },
    {
      image: Feature4Img,
      bgImage: Feature3BgImg,
      title: "Product Recieved",
      description: "In our app you can see the delay time of your order",
      linkText: "Learn more",
      delay: "1300",
    },
  ],
};


export const ctaData = {
  title: "Contact Us Here",
  subtitle: "Get limited 1 week free try our features!",
  btnText1: "Learn More",
  btnText2: "Request Demo",
};
