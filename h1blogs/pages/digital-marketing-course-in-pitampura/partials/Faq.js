import React from "react";
import { SectionTitle } from "../../../components/SectionTitle";
import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Container,
  Text,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const Faq = () => {
  return (
    <Container maxW={"8xl"}>
      <Box my={[0, 10]}>
        <SectionTitle mb={10} as="h3">
          Digital Marketing Course in Pitampura FAQ’S
        </SectionTitle>
        <Accordion allowMultiple mx={[0, 10, 60]}>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      where is h1tags located in pitampura?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  <strong> H1Tags Pitampura</strong> is located in the hub of
                  educational institute area at Pearls Omaxe Tower, FF 18, First
                  Floor, Netaji Subhash Place, Delhi, 110034
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Why choose H1Tags Institute in Pitampura?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  H1Tags is the top{" "}
                  <strong>digital marketing institute in Pitampura,</strong> and
                  it offers offline live sessions, so you may learn digital
                  marketing on your own time. You can evaluate our online
                  digital marketing course by enrolling in a digital marketing
                  career workshop.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      what is the starting salary package in digital marketing?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  A digital marketer's pay starts at 3 lacs. It is dependent on
                  the candidate's position, knowledge, and experience.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      what types of work opportunities are available after
                      taking a digital marketing course?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  There are a number of digital marketing job opportunities
                  available for both job seekers and working professionals,
                  including Digital
                  <strong>
                    {" "}
                    Marketing Manager, Digital Marketer Coordinator, Digital
                    Marketing Specialist, Customer Success Manager, Digital
                    Marketing Assistant, Digital Marketing Director, Digital
                    Marketing Trainer, Marketing and Digital Assistant, Jr. SEO
                    Executive, Sr. SEO Executive, SEO Consultant, SEO Project
                    Manager, SEO Trainer.
                  </strong>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      What are the fees of the digital marketing course in H1
                      tags in Pitampura?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  The cost of a digital marketing course in Pitampura is
                  determined by the training programme that you select.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      What are the advantages of the Pitampura digital marketing
                      programme?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  There are many chances in the sector of digital marketing in
                  Delhi-NCR. Many global corporations want qualified expertise
                  in fields such as SEO, SMO, AdWords, Email Marketing, and so
                  on. Job portals such as Naukri.com and Monster.com are
                  saturated with Digital Marketing job vacancies for the
                  Pitampura Region.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      What are the advantages of the Pitampura digital marketing
                      programme?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  There are many chances in the sector of digital marketing in
                  Delhi-NCR. Many global corporations want qualified expertise
                  in fields such as SEO, SMO, AdWords, Email Marketing, and so
                  on. Job portals such as Naukri.com and Monster.com are
                  saturated with Digital Marketing job vacancies for the
                  Pitampura Region.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Can I get a job after finishing the digital marketing
                      course from H1 Tags?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  yes, you can get a job after completing a digital marketing
                  course in Pitampura. H1Tags provides you with 100% job because
                  we work with numerous organisations for job placements.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Why is digital marketing good for your career?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  Digital marketing allows them to reach a larger audience,
                  expand their business, and create more revenue. Learning an
                  in-demand skill never hurts. It simply implies that you will
                  be able to obtain employment that pays more with greater
                  security as the demand for such skills grows.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Can a New Graduate Work in Digital Marketing?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  A degree is not required to work as a digital marketer.
                  Starting a small business or working at a startup might
                  provide you with valuable expertise in digital marketing.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Can I become a digital marketer in 3 months?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  If you enroll in{" "}
                  <strong> H1Tags to learn digital marketing, </strong> you can
                  learn it in 3 months. Even if you go for advanced learning, it
                  will take 4 months on average. However, your zeal, area of
                  interest, and learning capability will decide how many months
                  you take to become a digital marketing expert.
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Which is the best digital marketing course?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  <Text>
                    Most students struggle to choose the ideal course for
                    digital marketing. During the past two to three years,
                    digital marketing courses and institutes have mushroomed.
                    Because there are so many options in marketing these days,
                    there is a huge need for
                    <strong> digital marketing courses</strong>. Regardless of
                    whether they have any real-world experience or not, everyone
                    is attempting to seize this chance to market this course and
                    increase their income. The most excellent digital marketing
                    course can be challenging with many schools and available
                    options. I'm going to keep this basic.
                  </Text>
                  <Text>
                    Examine their social media accounts to observe how engaged
                    their posts are. Examine the trainer's social media sites to
                    see how much experience they have in{" "}
                    <strong>digital marketing courses in Pitampura</strong>.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Which is the best digital marketing institute in
                      Pitampura, Delhi?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  <Text>
                    Are you looking for a leading institute for digital
                    marketing courses in Pitampura, Delhi? You have landed at
                    the right place. There are several reasons to join{" "}
                    <strong>H1Tags</strong> .
                  </Text>
                  <Text>
                    These days, many institutions offer{" "}
                    <strong>
                      {" "}
                      the Best digital marketing Course courses in Pitampura, so
                    </strong>{" "}
                    you need to decide which is ideal for you. To begin with,
                    check out the faculty's experience by going to the center
                    and signing up for a free class between the breaks in the
                    batch. After the class, try to engage with the students by
                    asking them about their current experiences and any comments
                    they may have about that particular institute.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      How to reach H1Tags- Digital Marketing Institute in
                      Pitampura?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  <Text>
                    Enroll in the
                    <strong>
                      advanced digital marketing course in Pitampura
                    </strong>{" "}
                    {""}
                    to learn 100% Practical on Live Project and Freedom to work
                    on your project.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
          <AccordionItem>
            {({ isExpanded }) => (
              <>
                <h3>
                  <AccordionButton>
                    <Box as="span" flex="1" textAlign="left">
                      Why H1Tags Digital Marketing Training Institute Near
                      Pitampura Rohini is the best Option to Choose?
                    </Box>
                    {isExpanded ? (
                      <MinusIcon fontSize="12px" />
                    ) : (
                      <AddIcon fontSize="12px" />
                    )}
                  </AccordionButton>
                </h3>
                <AccordionPanel pb={4}>
                  <Text>
                    H1tags Digital Marketing Institute provides a full-time
                    intensive digital marketing course. We are located at Netaji
                    Subhash Place (NSP) in the heart of the Nearest Metro
                    Station, Netaji Subhash Place, Pitampura. 5. What are the
                    benefits of enrolling in a digital marketing course?
                  </Text>
                  <Text>
                    Ans Gaining skills that are in demand, keeping up with
                    industry changes, increasing employment possibilities, and
                    having the opportunity to work in various industries are
                    some advantages. Small business owners and entrepreneurs may
                    also find it helpful.
                  </Text>
                </AccordionPanel>
              </>
            )}
          </AccordionItem>
        </Accordion>
      </Box>
    </Container>
  );
};

export default Faq;
