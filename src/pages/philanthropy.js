import React from "react"
import { Link } from "gatsby"
import '../styles/main.css'
import {
    Segment,
    Header,
    Label,
    Container,
    Icon
  } from 'semantic-ui-react'
  import 'semantic-ui-less/semantic.less'

import SEOComponent from "../components/SEOComponent"
import HomepageLayout from "../layouts/HomepageLayout"

const Philanthropy = (props) => {
    return(
        <HomepageLayout>
            <SEOComponent title="Philanthropy" />
            <div className='media__hero'></div>
            <p className='hero__overlay'>Philanthropy</p>
            <Container style={{padding:'100px 0'}}>
                <Segment className='page__segment'>
                    <p className='segment__txt--phil clearfix'>
                    <img className="phil-left" src={require("../images/_phil1.jpg")}/><br/>Tara has always had a love of travel. She has been visiting other countries since she could barely walk. Her family is from the Midwest and she was born in Nebraska. However, they had the desire to explore new cultures and thus the seed was planted. Ms. Richter has traveled to 35 other countries in her lifetime. In 2019 she embarked on a journey to live in Asia with 17 strangers. The four countries on the list were Vietnam, Thailand, Japan and Singapore. During their time they volunteered at different nonprofits while working and exploring the lands.
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    <img className="phil-right" src={require("../images/_phil2.jpg")}/>The first stop was in Hanoi, Vietnam. They volunteered their sweat and muscle working on the farms that were donated to the Blue Dragon Children’s Foundation. The group worked clearing the land to prepare it to grow crops later. Blue Dragon relies on the many amazing volunteers who commit their time, energy and expertise to working with them in Vietnam and around the world. Blue Dragon Children’s Foundation provides exceptional care to Vietnamese children and families in crisis while creating long-term change for a better world.
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    <img className="phil-left" src={require("../images/_phil3.jpg")}/>
                    Second stop was in Chiang Mai, Thailand. The Wildflower Home is a temporary shelter for women and children who are coming out of situations such as sex trafficking, domestic violence and sever poverty. The grounds are self-sufficient, so the women work to grow their own food and do daily chores in the homes the live in. They have a mushroom farm that now is their source of income to sustain the non-profit. However they are in need of donations such as clothes and diapers. Ms. Richter and some of the group bought clothes in Vietnam to donate for the children once they arrived. They spent time playing with the children and working alongside the women.
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    <img className="phil-right" src={require("../images/_phil4.jpg")}/>
                    Also in Thailand they took a day to help out at the Elephant Freedom Project. Located in Northern Thailand, near Chiang Mai city, this project was formed in cooperation with a Lanna Thai family who has lived and worked with elephants for two generations. The family is glad for the opportunity to transition from elephant riding to a more evolved form of elephant tourism that provides a better life for the elephants, where they will be treated with the love and respect they deserve. The herd includes elephants who were used for labor in the dangerous logging industry and were later used for elephant riding.
                    </p>
                    <p className='segment__txt--phil'>
                    <img className="phil-left" src={require("../images/_phil5.jpg")}/>
                    When Tara is not exploring the world, she also loves helping her community in Tampa Bay, Florida. She sponsored a child in Franklin Elementary School from her hometown in Omaha, Nebraska for the 2019 school year. This school consists of most students coming from low-income households. Many students are learning English for the first time or might even be new to the country after living in a refugee camp. Some students are being raised by a grandparent or other family member. We all come from someplace different, but the students look forward to coming to school every day. They want to be in a safe environment for them to learn and to be successful! This sponsorship allowed one student to have new books for that year and other learning materials.
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    In 2016 Richter Publishing donated around 300 some books to the Joshua House in Lutz. Founded in 1992, Joshua House, a program of Children’s Home Society of Florida, is a safe haven for abused, neglected and abandoned children in Tampa Bay. With five homes across eleven acres, the program offers healing and care in a nurturing and family-like environment for children aged 6-17 who have been removed from their homes due to crises.
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    Ms. Richter also enjoys attending and volunteered at local nonprofits that are making a difference in the community. She donated about $500 to Visions of Hope Gala though auctions and cake raffle. Volunteered at Hands Across the Bay, Dancing with the Stars at the jewelry auction via the Kind Mouse. She has donated money and dog food to Love from Luke Nonprofit that helps find forever homes for abused animals. Richter Publishing has donated tons of books to various nonprofit events to auction off throughout the years in Tampa bay including but not limited to, The Kind Mouse & Fulfill Your Destiny Nonprofits.
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    Richter Publishing has an annual manuscript contests and awards free editing and publishing contracts to those who are impacting the community in a positive way. Each year aspiring authors submit their manuscript of at least 20,000 words to win a free publishing package. The package consists of three rounds of professional edits, formatting and publishing with global distribution. The winners story must not only be well written, it also has to have a positive message. The story’s mission must help a cause in order to win. (Each package is a cash value of $6,000)
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    <img className="phil-left" src={require("../images/_phil06.jpg")}/>
                    <strong>2017 Winner Alder Allensworth, “Prevail: Celebrate the Journey.”</strong> After being diagnosed with a rare, usually fatal cancer, Alder Allensworth made a miraculous recovery and took on a sailing journey most would only dream of. Having lost one eye to cancer, Alder dedicated herself to this 1,200-mile trip to raise money and awareness for sailors with disabilities, and quickly realized that sailing the 12-foot Prevail from Florida to Maine presented a whole new set of challenges that she had never encountered before, even on the water. “Prevail: Celebrate the Journey” follows Alder’s story from her diagnosis through her sailing expedition, and finally to the creation of a nonprofit sailing organization that provides instruction and recreation to people of all ages and abilities, Sailability Greater Tampa Bay. Find her book on Amazon: <a href='https://www.amazon.com/Prevail-Celebrate-Journey-Alder-Allensworth/dp/1945812346'>https://www.amazon.com/Prevail-Celebrate-Journey-Alder-Allensworth/dp/1945812346</a>
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    <img className="phil-right" src={require("../images/_phil07.jpg")}/>
                    <strong>2018 Winner Ruth Brunson, “Ruthfulness: A Mother’s Guide to Accepting Autism.”</strong> A heart wrenching story of what it is really like to raise a child with Autism. Ruth leads us through the day to day struggles that many families are dealing with in this new era of children on the spectrum. It gives any family hope and laughter, that they too and overcome this disease. To be published soon.
                    </p>
                    <p className='segment__txt--phil clearfix'>
                    Ms. Richter also served as a Director of the Board for the non-profit Tampa Bay Technology Center located in
                    Clearwater, Florida in 2017 & 2018. The Tampa Bay Technology Center has been helping the community for 37 years fix
                    and repair computers and teach classes about new technologies. Twice a year they hold events called "Random Acts of
                    Kindness." Anyone can bring in their computers and get them repaired for FREE while enjoying donuts, coffee and
                    presentations from experts in their industry. Tara also donated $500 that she won from the GIFF (<i>Gasparilla
                    International Film Festival</i>) to the non-profit.
                    </p>
                </Segment>
            </Container>
        </HomepageLayout>
)}

export default Philanthropy