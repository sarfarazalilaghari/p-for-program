import Image from "next/image";
import styles from "./page.module.css";
import Nav from "./components/ui/nav-bar/Nav";
import "./globals.css"
import HeroBtn from "./client-comp/HeroBtn";
import Login from "./auth/login/page";


export default function Home() {

  return (
    <>
<section className="hero hero-section">
<div className="overlay">
<div className="hero-content">
<h1>You are at right place</h1>
<h3>Tech & Professional Skills Focus</h3>
<p>Your coding, design, and data journey starts here-future-proof your career with courses built by industry pros</p>
<HeroBtn/>
</div>
</div>
</section>
</>
  );
}
