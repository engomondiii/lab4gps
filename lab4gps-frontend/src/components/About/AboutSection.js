import React, { useState } from "react";
import "../../styles/AboutSection.css"; // Import your CSS file for styling

const AboutSection = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState("why");

  // Content for the tabs
  const content = {
    why: (
      <div className="why-content">
        <h3>Purpose: Solving Global Problems through Education, Research, and Practice</h3>
        <p>
        Problem Solving through Education, Research, and Practice

        </p>
        <p>
        Lab4GPS is a community dedicated to bringing innovation to local and global communities  through education, research, and practical application. Lab4GPS plays a pivotal role in transforming  the resolution of global problems into a scalable and sustainable business model, enabling  individuals to joyfully engage in altruistic endeavors. 

We refer to individuals who dedicate their  lives to solving specific issues as Global Problem Solvers (GPS).
        </p>
        
        <p>
        Lab4GPS is responsible for helping people happily perform good deeds that solve the world's problems .
People who have set solving a specific problem as their life's purpose are called Global Problem Solvers (abbreviated as GPS). 

GPS discovers the secrets to solving the world's problems and creates products or services based on them.
        </p>
        <h4>Slogan</h4>
        <p>
          <strong>We Solve Global Problems for Others:</strong> Under the slogan "We solve global problems for others," Lab4GPS is dedicated to addressing various global issues. 

Our goal is not just to solve problems but to contribute to creating a better world.
        </p>
        <p>
        Our goal is not simply to solve problems, but to contribute to creating a better world.


        </p>
        <h4>Love in Action</h4>
        <p>
          <em>“Love in action”</em> is the principle at the heart of all activities at Lab4GPS. 

We practice love as concrete actions, not just emotions.


        </p>
        <p>Love is not just a feeling, but is practiced through concrete actions.

</p>
        <h4>Business as Love</h4>
        <p>
          <em>“Business as love”</em> summarizes the business philosophy of Lab4GPS. 

We view business not just as a pursuit of profit but as a means of practicing love.


        </p>
        <p>We see business as a means of practicing love, rather than simply pursuing profit.

</p>
      </div>
    ),
    who: (
      <div className="who-content">
        <h3>Who We Are</h3>
        <p>
        We are a community focused on solving global issues through education, research, and practice. 

We firmly believe that 'Solving others' problems is an love in action.'
         </p>
        <p>
        To pursue this mission, we amalgamate the specialized knowledge and strengths of each individual to  form a community, tackling challenging tasks that are impossible to achieve alone. 
          </p>
        <blockquote>
        Lab4GPS is a research institute that aims to solve world problems under the slogan of 'Love in Action' .  We believe that 'solving other people's problems is the practice of love'.        </blockquote>
        <h4>Our Team</h4>
        <p><strong>IWL Partners:</strong> As the primary sponsors of Lab4GPS, they provide the financial support necessary for our research and innovation projects. They support GPS in developing sustainable solutions and offer strategic direction for global problem-solving.



Supporting GPSs that develop sustainable solutions, 

Provides strategic direction for solving global problems.</p>
        <p><strong>GPS Startups:</strong> Purpose-driven companies founded by GPS who discover the secrets to solving the world's problems and transform them into business models. They lead the way in developing innovative and sustainable solutions to address social issues.


GPSs are discovering the secret to solving the world's problems, 

This is a company that was founded by sublimating this into a business model. </p>
        <p><strong>GPS PD (Program Development):</strong>A team of experts who develop GPS programs and train GPS. They design educational programs and training courses to help GPS acquire the necessary skills and knowledge.



We design GPS training programs and courses  to help GPS personnel acquire the skills and knowledge they need. 



</p>
        <p><strong>GPS Specialists:</strong>Experts who assist GPS Startups and Lab4GPS members by leveraging their Purpose-Specific Skill Sets. They provide technical and strategic support needed for GPS to achieve their goals, based on diverse expertise.


They are based on their expertise in various fields and GPS 

We provide technical and strategic support needed to achieve your goals.</p>
        <p><strong>Lab4GPS Operations Team:</strong>Individuals who manage Lab4GPS through tasks such as organizational operations, human resources, space provision, channel expansion, toolbox installation, and digital transformation. They create an efficient work environment to ensure optimal performance from all team members.



We create an efficient work environment  to support all team members to perform at their best.</p>
        <p><strong>Shared Service Center:</strong>A future center that will provide specialized services such as startup incubation, legal services, and accounting services to Lab4GPS members. By offering highly specialized services, it helps GPS grow and make a greater impact.



We accelerate the growth of GPSs and help them make a bigger impact through highly specialized services  .</p>
        <h4>Our Network</h4>
        <p><strong>GPS All Over the World:</strong>Lab4GPS collaborates closely with GPS around the world who aims to solve global issues. 

This network consists of individuals with diverse backgrounds and expertise, developing innovative and sustainable  solutions in various regions. The GPS network shares knowledge and resources, striving for greater impact through collaboration and solidarity.



We are comprised of people with diverse backgrounds and expertise, developing innovative and sustainable solutions in different regions.

</p>
        <p><strong>Global Christian Network:</strong>Lab4GPS is supported by the prayers and backing of the global Christian network. 

This network shares our mission and vision, providing spiritual and financial support for our activities.



A global network of Christians share our mission and vision and support our work through spiritual and financial support.

</p>
        <h4>Who We Serve</h4>
        <p>
          <strong>Global Community:</strong>The ultimate beneficiaries of the positive changes brought about by purpose-driven business. Thanks to the innovative and sustainable solutions developed by GPS and GPS Startup Teams supported by Lab4GPS, their quality of life is improved, and various social problems are addressed, with love put into action.



You are the ultimate beneficiary of the positive change that purpose-driven businesses create. 

Thanks to innovative and sustainable solutions, they improve the quality of life, solve various social problems and put love into practice.
        </p>
        <p>
          <strong>Individuals Aiming to Solve Problems (GPS/GPS Startups):</strong>GPS and GPS Startup Teams are individuals passionate about dedicating their lives to solving the world's problems, and we support them in realizing their vision and goals.



As people with a passion for solving the world's problems , we support them to realize their vision and goals.
        </p>
        <p>
          <strong>Stakeholders and Investors:</strong>We serve and stakeholders who resonate with our vision and goals and wish to invest their time and resources with love. They not only provide financial support but also strategic advice and networks to ensure successful global problem-solving.



As stakeholders and investors willing to invest time and resources with love , 

They provide financial support as well as advice and networks to help problem-solving efforts be successful.
        </p>
      </div>
    ),
    
    what: (
      <div className="what-content">
        <h3>Mission: Empowering GPS through Education, Research, and Practice</h3>
        <p>
        Supporting GPS through education, research and practice
        </p>
        
        
        <h4>Development of GPS Programs</h4>
        <p>
        The GPS program combines Christian values ​​with entrepreneurial spirit to train the next generation of global leaders (GPS) to address global issues.



The GPS program combines Christian values ​​and entrepreneurship  to train the next generation of Global Leadership (GPS) leaders to solve global problems.

Students from different academic disciplines collaborate to solve problems,

We combine knowledge and skills from various fields to create more effective solutions.

Based on the principle that "solving other people's problems is an act of love" 

Solve complex global problems involving cultural, religious, political and economic factors.

Beyond theoretical education, it emphasizes real-world problem-solving experiences. Students real global issues, applying the theories they have learned through practical projects. This prepares them to make a tangible impact even after graduation. 



Beyond theoretical education, we emphasize real-world problem-solving experiences. Students tackle real-world global problems and apply theories learned through hands-on projects. 

By working with people from diverse backgrounds, students understand their role as members of a global community and broaden their understanding of international issues.


        </p>
        <h4>Training GPS Through the GPS Program</h4>
        <p>
        Lab4GPS trains the next generation of Global Problem Solvers (GPS) through its education programs.

These programs support students in finding their identity and life purpose, building their roadmap to success. 

Emphasizing 'Learning by doing,' students learn through actual experiences, applying their knowledge to real-world problems. 


        </p>
        <p>
        Lab4GPS trains the next generation of global problem solvers (GPS) through educational programs .
The GPS program helps students discover their identity and life purpose and build a roadmap for success.

Emphasizing 'learning through practice', students apply the knowledge they have learned to real-world problems through real-world experiences.
Upon successful completion of the program, the GPS certification will help them grow into trusted leaders in solving global problems.


        </p>
        <h4>Supporting GPS to Found Purpose-Driven Enterprises</h4>
        <p>
        Lab4GPS serves as an incubator, supporting GPS in founding purpose-driven enterprises aimed at solving global problems. 

By emphasizing innovative approaches such as Global Value Chain innovation, Systems Thinking, and Design Thinking, 

we help GPS create products and services that resonate with consumers. 

Additionally, we assist GPS in generating Joy, Money, and Love through problem-solving.


        </p>
        <p>
        Lab4GPS acts as an incubator to support the creation of purpose-driven companies that aim to solve global problems .
We emphasize innovative approaches such as global value chain innovation, systems thinking, and design thinking to help GPS create products and services that resonate with consumers. 

Helping you create joy, money and love through problem solving. 

        </p>
        <h4>Current State</h4>
        <p>
          <strong>Chakancha:</strong> Chakancha is the first startup created by Lab4GPS, and aims to improve the working conditions of Kenyan tea pickers and respect their living standards. The company aims to create a sustainable future by transforming the value chain of the tea industry in the traditional global market and establishing a system that enables economic self-sufficiency of the local tea industry.
          </p>
        <p>
          <strong>Momma:</strong>Mamma is a startup team that helps foreigners easily learn about the Korean language, culture, and work environment, and helps them achieve effective economic independence by arranging employment through building relationships with foreign-Korean sponsors and collaboration with Korean employers.
        </p>
        <p>
          <strong>Wow (WAH):</strong> The WAH team has a vision to help people who are wandering without finding their purpose in life to live a purpose-driven life. We support people around the world to find their purpose in life and move forward to a better future.
        </p>
        <p>
          <strong>Chakan Cashmere:</strong>Chakan Cashmere aims to improve working conditions in Mongolia and pursue sustainable practices. To achieve this, we create eco-friendly products from recycled cashmere and provide fair wages and reasonable prices through transparent transactions and direct transaction systems. We enrich the lifestyles of both Mongolia and consumers through sustainable approaches.
        </p>
      </div>
    ),
    where: (
      <div className="where-content">
        <h3>Vision: Pioneering the Path to a Better World through Education, Innovation, and Collaboration</h3>
        <p>
        Leading a better world through education, innovation and collaboration

        </p>
        <p>
        Lab4GPS envisions a future where education, innovation, and collaboration converge to solve the world's problems. 

We aim to establish an  online university and  a platform that connects those with problems to those who can solve them ,  creating a comprehensive problem-solving ecosystem that supports global problem-solving.
        </p>
        <p>
        Lab4GPS envisions a future where the world’s problems are solved through education, innovation, and collaboration.
We aim to create a comprehensive ecosystem that supports global problem solving by establishing a platform and an online university that connects people with problems with people who can solve them .


        </p>
        <h4>Univ 4.0</h4>
        <p>
        Univ 4.0 expands the GPS program online, making it accessible to students worldwide. This platform offers the GPS curriculum, equipping students with the skills and knowledge necessary to address global issues. By providing a robust educational foundation, Univ 4.0 empowers the next generation of global leaders to develop innovative solutions and drive sustainable change.


        </p>
        <p>
        Univ 4.0 extends the GPS program online, making it accessible to students around the world.
The platform provides the GPS curriculum with the skills and knowledge needed to solve global problems.
By providing a strong educational foundation, Univ 4.0 enables the next generation of global leaders to develop innovative solutions and drive sustainable change.        </p>
        <h4>SNS 4.0</h4>
        <p>
        SNS 4.0 is an online hub where people with problems can meet people who can solve them.
The platform promotes collaboration by sharing ideas and solutions to solve global problems and promoting collaborative projects. 

Each stage is gamified, providing clear goals and rewards, and participants gradually gain knowledge and skills by solving real-world problems. 

You can acquire and challenge yourself with increasingly complex problems.        </p>
        <p>
        SNS 4.0 is an online hub where people with problems can meet people who can solve them.
The platform promotes collaboration by sharing ideas and solutions to solve global problems and promoting collaborative projects. 

Each stage is gamified, providing clear goals and rewards, and participants gradually gain knowledge and skills by solving real-world problems. 

You can acquire and challenge yourself with increasingly complex problems.



        </p>
        
        <h4>Our Vision</h4>
        <p>
        Our vision includes training the next generation of global leaders essential for addressing these issues and establishing companies focused on problem-solving. We aspire to play a leading role in creating a better world with global consumers. 

Through our programs and support, the GPS we nurture will solve global problems and generate Joy, Money, and Love, positively impacting the world. They will lead research and innovation to address various global issues, collaborating with the global community to seek sustainable solutions. We will continuously support them in contributing to a better future by solving diverse world problems.


        </p>
        <p>
        We aim to build a company focused on problem solving and to develop the next generation of global leaders who are essential to solving the world's problems.
Through our programs and support, GPS will solve the world's problems, create joy, money, love, and make a positive impact on the world.


        </p>
      </div>
    ),
    how: (
      <div className="how-content">
        <h3>Core Values: Love, Courage, and Wisdom</h3>
        <p>Love, Courage, and Wisdom
        </p>
        <h4>Love</h4>
        <p>
        At Lab4GPS, love equates to solving problems for others with genuine care and compassion. Inspired by the teachings of Jesus Christ, this principle drives our commitment to addressing societal needs through innovation, emphasizing unconditional and sacrificial love, empathy, and forgiveness.
        </p>
        <p>
        Love is true concern and compassion. 

It means solving other people's problems  .

        </p>
    
        <h4>Courage</h4>
        <p>
        Courage signifies a commitment to pioneering new frontiers despite uncertainties and risks. Inspired by Jesus' bravery in confronting oppositions and making sacrifices, we invest profoundly in the dreams of innovators, enabling impactful transformations that extend beyond technical metrics.
        </p>
        <p>
        Courage is the ability to endure uncertainty and risk. 

It signifies a commitment to pioneering new territories.
        </p>
    
        <h4>Wisdom</h4>
        <p>
        Leveraging collective knowledge and experience to foster sustainable and ethical advancements. Inspired by the teachings and discernment of Jesus, we navigate complex challenges with insight and understanding, making balanced decisions for the greater good.
          </p>
        <p>
        Wisdom is having insight and understanding of complex problems. 

and  make balanced decisions.
        </p>
    
        <p>
        At Lab4GPS, our Core Values ​​Love, Courage, and Wisdom compose the framework of our purpose.  These values ​​guide us in nurturing innovative enterprises, transforming technologies into thriving solutions, and fostering lasting positive change. 

Through Love, Courage, and Wisdom, Lab4GPS is committed to empowering innovators to address global challenges and contribute to a better world.
        </p>
        <p>
        At Lab4GPS, our core values ​​of Love, Courage, and Wisdom frame our purpose.
These values ​​guide us as we foster innovative companies, transform technology into thriving solutions, and foster lasting positive change.
Lab4GPS is committed to helping GPS solve global problems and contribute to a better world.


        </p>
    
        <h4>Scripture Verses</h4>
        <blockquote>
          <strong>John 13:34</strong><br />
          “A new command I give you: Love one another.  As I have loved you, so you must love one another.”        </blockquote>
        <p>
        A new commandment I give to you, that you love one another; just as I have loved you, that you also love one another.


        </p>
        <p>
        This verse embodies the core spirit of Lab4GPS. Following Jesus' teachings, we practice love and dedicate ourselves to solving others' problems.
        </p>

        <p>
        We follow the teachings of Jesus and practice love, dedicating ourselves to solving other people's problems.
        </p>
    
        <blockquote>
          <strong>Romans 8:28</strong><br />
          “And we know that in all things God works for the good of those  who love him, who have been called according to his purpose.”
        </blockquote>
        <p>
        And we know that all things work together for good to those who love God, to those who are the called according to his purpose.

</p>
<p>
This verse inspires the vision and mission of Lab4GPS. As those who love God and are called according to His purpose, we believe that all our efforts will work together for good.


</p>
<p>
We believe that as people who love God and are called according to His purpose, all our efforts will be for good.


</p>
      </div>
    ),
    team: [
      {
        name: "IWL Partners",
        role: "Primary Sponsors",
        bio: "As the primary sponsors of Lab4GPS, they provide the financial support necessary for our research and innovation projects. They support GPS in developing sustainable solutions and offer strategic direction for global problem-solving.",
      },
      {
        name: "GPS Startups",
        role: "Purpose-Driven Enterprises",
        bio: "Founded by GPS who discover the secrets to solving the world's problems and transform them into business models. They lead the way in developing innovative and sustainable solutions to address social issues.",
      },
      {
        name: "GPS PD (Program Development)",
        role: "Program Development Team",
        bio: "A team of experts who develop GPS programs and train GPS. They design educational programs and training courses to help GPS acquire the necessary skills and knowledge.",
      },
      {
        name: "GPS Specialists",
        role: "Expert Advisors",
        bio: "Experts who assist GPS Startups and Lab4GPS members by leveraging their purpose-specific skill sets. They provide technical and strategic support needed for GPS to achieve their goals.",
      },
      {
        name: "Lab4GPS Operations Team",
        role: "Operations Management",
        bio: "Individuals who manage Lab4GPS through tasks such as organizational operations, human resources, space provision, channel expansion, toolbox installation, and digital transformation. They create an efficient work environment to ensure optimal performance from all team members.",
      },
      {
        name: "Shared Service Center",
        role: "Future Specialized Services",
        bio: "A center that will provide specialized services such as startup incubation, legal services, and accounting services to Lab4GPS members. By offering highly specialized services, it helps GPS grow and make a greater impact.",
      },
    ],
    
    timeline: [
      {
        title: "Founding of Lab4GPS",
        date: "2020",
        description: "Lab4GPS was established to pioneer global problem-solving through education, research, and collaboration.",
      },
      {
        title: "Launch of GPS Program",
        date: "2021",
        description: "Introduced the first GPS program, combining Christian values and entrepreneurial training for aspiring global leaders.",
      },
      {
        title: "First Global Impact Project",
        date: "2022",
        description: "Successfully executed our first large-scale project, improving the lives of underprivileged communities in Kenya.",
      },
      {
        title: "Establishment of Univ 4.0",
        date: "2023",
        description: "Launched an online university platform to provide the GPS curriculum to students worldwide.",
      },
      {
        title: "Introduction of SNS 4.0",
        date: "2024",
        description: "Created an online hub for connecting problem-solvers with those in need, fostering global collaboration.",
      },
      {
        title: "Expansion of GPS Network",
        date: "2025",
        description: "Collaborated with over 50 GPS startups globally, addressing diverse issues with innovative and sustainable solutions.",
      },
      {
        title: "Future Vision",
        date: "Ongoing",
        description: "Continuing to empower GPS, develop innovative solutions, and create a better world through love, courage, and wisdom.",
      },
    ],
    
    testimonials: [
      {
        name: "Fidel Omondi Otieno",
        organization: "IWL",
        testimonial: "As a Software Engineer at IWL working on Lab4GPS, I am deeply inspired by the project's vision of empowering global problem solvers. It has been an incredible journey to create a platform that connects people with problems to those with the solutions."
      },
      {
        name: "Ishmael Chepsoi",
        organization: "IWL",
        testimonial: "Working on Lab4GPS as a Software Engineer at IWL has been an enriching experience. I believe this platform will revolutionize global problem-solving through its innovative and collaborative approach."
      },
      {
        name: "Alice Johnson",
        organization: "Global Partnerships",
        testimonial: "Lab4GPS is a game-changer in addressing global challenges. The dedication and vision of the GPS team inspire confidence and hope for a better future."
      },
      {
        name: "Michael Lee",
        organization: "Startup Founder",
        testimonial: "Thanks to Lab4GPS, our startup found the support and resources needed to bring our ideas to life. The network and collaboration have been invaluable in creating impactful solutions."
      },
      {
        name: "Sarah Kim",
        organization: "Education Advocate",
        testimonial: "Lab4GPS's education programs are truly transformative. They equip students with the tools they need to become global leaders who drive positive change."
      }
    ],
    
    socialMedia: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/company/lab4gps" },
      { platform: "Facebook", url: "https://www.facebook.com/lab4gps" },
      { platform: "X", url: "https://twitter.com/lab4gps" },
      { platform: "Instagram", url: "https://www.instagram.com/lab4gps" },
      { platform: "KakaoTalk", url: "https://pf.kakao.com/lab4gps" }
    ],
  };

  // Render content for each tab
  const renderTabContent = () => {
    switch (activeTab) {
      case "why":
        return content.why;
      case "who":
        return <p>{content.who}</p>;
      case "what":
        return <p>{content.what}</p>;
      case "where":
        return <p>{content.where}</p>;
      case "how":
        return <p>{content.how}</p>;
      case "team":
        return (
          <div className="team-section">
            {content.team.map((member, index) => (
              <div key={index} className="team-card">
                <h4>{member.name}</h4>
                <p><strong>{member.role}</strong></p>
                <p>{member.bio}</p>
              </div>
            ))}
          </div>
        );
      case "timeline":
        return (
          <div className="timeline-section">
            {content.timeline.map((event, index) => (
              <div key={index} className="timeline-card">
                <h4>{event.title}</h4>
                <p>{event.date}</p>
                <p>{event.description}</p>
              </div>
            ))}
          </div>
        );
      case "testimonials":
        return (
          <div className="testimonial-section">
            {content.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <p><strong>{testimonial.name}</strong> ({testimonial.organization})</p>
                <blockquote>{testimonial.testimonial}</blockquote>
              </div>
            ))}
          </div>
        );
      case "socialMedia":
        return (
          <div className="social-media-section">
            {content.socialMedia.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer">
                {link.platform}
              </a>
            ))}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="about-container">
      {/* Description */}
      <div className="about-description">
        <h2>About Lab4GPS</h2>
        <p>
          Lab4GPS is committed to solving global challenges through practical love, collaboration,
          and innovative solutions. Discover our mission, vision, purpose, and the core values that guide us.
        </p>
      </div>

      {/* Tab Navigation */}
      <div className="tabs">
        {["why", "who", "what", "where", "how", "team", "timeline", "testimonials", "socialMedia"].map((tab) => (
          <button
            key={tab}
            className={`tab-button ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">{renderTabContent()}</div>
    </div>
  );
};

export default AboutSection;
