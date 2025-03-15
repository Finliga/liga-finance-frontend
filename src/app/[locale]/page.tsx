import About from "@/components/homepage/about/About";
import Benefits from "@/components/homepage/benefits/Benefits";
import Calculator from "@/components/homepage/calculator/Calculator";
import Clients from "@/components/homepage/clients/Clients";
import Disadvantages from "@/components/homepage/disadvantages/Disadvantages";
import GetCalculation from "@/components/homepage/getCalculation/GetCalculation";
import GetConsultation from "@/components/homepage/getConsultation/GetConsultation";
import GetSuccess from "@/components/homepage/getSuccess/GetSuccess";
import Hero from "@/components/homepage/hero/Hero";
import Industries from "@/components/homepage/industries/Industries";
import Services from "@/components/homepage/services/Services";
import Statistics from "@/components/homepage/statistics/Statistics";
import Steps from "@/components/homepage/steps/Steps";
import Team from "@/components/homepage/team/Team";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <GetCalculation />
      <Industries />
      <Statistics />
      <Clients />
      <Calculator />
      <GetSuccess />
      <Disadvantages />
      <Benefits />
      <Steps />
      <Team />
      <GetConsultation />
    </>
  );
}
