import React from 'react'
import { CommonSEO } from "@/components/SEO";
import BlankTemplate from "@/components/templates/BlankTemplate";
import PrimaryNavigation from "@/components/molecules/PrimaryNavigation";
import Footer2 from "@/components/molecules/Footer2";
import Footer from "@/components/molecules/Footer";


const index = () => {
  return (
    <BlankTemplate>
    <CommonSEO title="Home" description="Description of Create Next Page by hehe" />
    <PrimaryNavigation />
    <Footer2 />
    <Footer />
</BlankTemplate>
  )
}

export default index