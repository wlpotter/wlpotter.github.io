---
layout: home
---

<p id="headline">Hi, my name is Will. I'm a Digital Archivist building accessible cultural heritage repositories for diverse user groups.</p>

<img src="{{ site.url }}/assets/images/headshot2020.JPG" class="headshot" alt="William L. Potter, headshot"/>{:height="30%" width="30%"}<!--need to add this css-->

<section id="about-me">
<p class="about-me">I believe libraries and archives are fundamental to human knowledge systems, and I strive with my <a href="#projects">archival work</a> to make things that are usable by diverse groups: scholars, students,
heritage communities, and the wider public. My own <a href="{{ site.url }}/research/index.html">research</a> seeks to understand Mediterranean and west Asian cultural interchanges in late antiquity and the early middle ages.</p>


<p class="about-me">While previous graduate training has made me appreciate the vital role of archives and libraries in scholarship, my work on Syriac cultural heritage archives has shown me how essential such resources are for minority heritage communities and has given me a passion for building accessible and usable archives, especially in the digital domain.</p>

<p class="about-me">As I've grown as an archivist and developer, I've learned that usability stems from clear, maintainable information architecture and design.</p>
</section>

<section id="skills">
<h2 class="section-title">Skills</h2>

<p class="skills-narrative">I have been working with XML technologies for 4 years. I learned TEI for my <a href="https://ir.vanderbilt.edu/handle/1803/9601" id="mts-thesis-url">Master's thesis</a>, and XQuery while working as Research Assistant for Digital Cultural Heritage at Vanderbilt University. Since then, I've been learning front end web development technologies at <a href="" id="free-code-camp-certificates">Free Code Camp</a> and establishing good development practices, like unit testing.<!--maybe link to mss refactoring project once that page is up?--></p>
<!-- narr of how got skills? -->

<ul id="skill-list"> <!-- style this as grid; style ea li with box and margins and such -->
<!-- also could be an include? Pull from a data list -->
<!-- data list should have following
- name
- link (e.g. to the tech or lang home page)-->
  <li class="skill">TEI XML</li>
  <li class="skill">XQuery</li>
  <li class="skill">CSS3</li>
  <li class="skill">HTML5</li>
  <li class="skill">Python</li>
  <li class="skill">oXygen XML Author Mode Forms</li>
</ul>
</section>

<section id="projects">
<h2 class="section-title">What I've been working on</h2>


<!-- this can be made into an include I believe. We need a data page that lists the following for ea project:

- name
- page-url (url of the project page) - if these are treated as URIs you could use the numeric portion as the id attribute on the div
- thumbnail (path-to-thumbnail)
- feature (yes/no -- this will toggle it on the homepage or not)
- codebase-url
- live-demo-url
- description (a one-two sentence blurb; this is in place of the bulleted list onc eyou have pages for ea)
- tags (this would be an array of key words, eventually...)
-->
<div class="project-container">
  <h3 class="project-name">A Digital Catalogue of Syriac Manuscripts in the British Library</h3>

  <img class="project-thumbnail" src="{{ site.url }}/assets/images/syriac-mss-catalogue.jpg" alt="A Digital Catalogue of Syriac Manuscripts in the British Library"/>{:height="40%" width="40%"}

  <ul class="project-links">
    <li><a href="https://github.com/srophe/wright-catalogue" class="project-codebase-url">Codebase</a></li>
    <li><a href="https://syriaca.org/bl" class="project-live-demo-url">Live project</a></li>
  </ul>

  <ul class="project-highlights">
    <li class="project-detail">Developing a digital database (TEI XML) of more than 1,200 Syriac manuscript catalogue entries</li>
    <li class="project-detail">Supervising a team of researchers to create, edit, and proofread almost 200 new TEI XML records</li>
    <li class="project-detail">Designed, implemented, and iterated a data pipeline that decreased the workload and increased the efficiency of catalogue record creation</li>
  </ul>
</div>
<div class="project-container">
  <h3 class="project-name">The Syriac Gazetteer</h3>

  <img class="project-thumbnail" src="{{ site.url }}/assets/images/syriac-gazetteer-preview-temp.jpg" alt="The Syriac Gazetteer"/>{:height="40%" width="40%"}

  <ul class="project-links">
    <li><a href="https://github.com/srophe/srophe-app-data/tree/master/data/places/tei" class="project-codebase-url">Codebase</a></li>
    <li><a href="https://syriaca.org/geo" class="project-live-demo-url">Live project</a></li>
  </ul>
  <ul class="project-highlights">
    <li class="project-detail">Geographical reference database with over 2,000 entries</li>
    <li class="project-detail">Integrated 450 new data records and updated 270 existing records</li>
    <li class="project-detail">Maintain all data in conformance with custom TEI XML schema</li>
  </ul>
</div>

<div class="project-container">
  <h3 class="project-name">Caesarea-Maritima.org: A Digital Archive</h3>

  <img class="project-thumbnail" src="{{ site.url }}/assets/images/caeasraea-maritima.JPG" alt="Caesarea-Maritima.org: A Digital Archive"/>{:height="40%" width="40%"}

  <ul class="project-links">
    <li><a href="https://github.com/srophe/caesarea-data/" class="project-codebase-url">Codebase</a></li>
    <li>Live project under development</li>
  </ul>
  <ul class="project-highlights">
    <li class="project-detail">Designed and implemented a TEI XML data model for pre-modern written references to Caesarea-Maritima</li>
    <li class="project-detail">Maintained the 1,000 entry Zotero library for _Caesarea Maritima: A Comprehensive Bibliography_</li>
    <li class="project-detail">Built an oXygen XML Author form using CSS for data input</li>
  </ul>
</div>

<div class="project-container">
  <h3 class="project-name">The Beth Qatraye Gazetteer</h3>

  <img class="project-thumbnail" src="{{ site.url }}/assets/images/beth-qatraye-gazetteer.JPG" alt="Beth Qatraye Gazetteer"/>{:height="40%" width="40%"}

  <ul class="project-links">
    <li><a href="https://github.com/srophe/bethqatraye-data/" class="project-codebase-url">Codebase</a></li>
    <li>Live project under development</li>
  </ul>
  <ul class="project-highlights">
    <li class="project-detail">Created a TEI XML database of medieval places related to Qatar and its surrounding region</li>
    <li class="project-detail">Performed XML record creation and merging from CSV data tables</li>
    <li class="project-detail">Developed and deployed a Python web scraper to integrate linked data from the online <a href="https://referenceworks.brillonline.com/browse/encyclopaedia-of-islam-2">Brill Encylopedia of Islam, Second Edition</a></li>
    <li class="project-detail">Integrated coordinate data from various geographic datasource APIs via Python script</li>
  </ul>
  </div>
</section>

<section id="call-to-action">

<h2 class="section-title">Let's Connect!</h2>

<p>Feel free to <a id="email-me" class="mail-to-link" href="mailto:{{ site.email }}">reach out</a> if you're looking for a digital archivist, have a question, or just want to connect.</p>

</section>
