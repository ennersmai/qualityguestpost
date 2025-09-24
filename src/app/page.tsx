import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/Carousel";
import { Ticket } from "lucide-react";
import Image from 'next/image';
import Navbar from "@/components/layout/Navbar";

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <div className="relative">
          {/* Hero Section */}
          <section
            className="relative text-white pt-20 md:pt-32 pb-80 bg-cover bg-center bg-no-repeat z-10"
            style={{ backgroundImage: "url('/ryse-bg.png')" }}
          >
            <div className="container mx-auto px-4 md:px-20 relative">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6 text-left pr-8">
                  <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                    Affordable Guest Post Service - #Blogger Outreach
                  </h1>
                  <p className="text-lg md:text-xl text-blue-100">
                    Choose the best guest posting service provider for white-hat, relevant, dofollow high DA and DR blog links that are permanent.
                  </p>
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-gray-200">
                    <Ticket className="mr-2 h-5 w-5" /> See Prices
                  </Button>
                </div>
                <div className="hidden md:flex justify-center items-center">
                  <Image
                    src="/ryse-image-new1_2381223ebddcbc05bf0fa9acee7969c9.png"
                    alt="Rocket Illustration"
                    width={600}
                    height={600}
                    className="object-contain"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Features & About Section */}
          <section className="pt-12 pb-20 relative z-20">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-2 gap-16 items-start">
                {/* Left Column: Feature Cards */}
                <div className="grid grid-cols-2 gap-8 relative">
                  <Card className="text-center p-6 relative -top-32 bg-white rounded-lg shadow-lg">
                    <Image src="/awesome-content.png" alt="Awesome Content" width={150} height={150} className="mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-black">Awesome Content</h3>
                  </Card>
                  <Card className="text-center p-6 relative -top-16 bg-white rounded-lg shadow-lg">
                    <Image src="/high-traffic.png" alt="High Traffic" width={150} height={150} className="mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-black">High Traffic</h3>
                  </Card>
                  <Card className="text-center p-6 relative -top-16 bg-white rounded-lg shadow-lg">
                    <Image src="/releavent-link.png" alt="Relevant Link" width={150} height={150} className="mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-black">Relevant Link</h3>
                  </Card>
                  <Card className="text-center p-6 bg-white rounded-lg shadow-lg">
                    <Image src="/high-ranking.png" alt="High Ranking" width={150} height={150} className="mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-black">High Ranking</h3>
                  </Card>
                </div>
                {/* Right Column: About Text */}
                <div className="text-left">
                  <p className="text-blue-600 font-semibold">Strong Backlinks, Strong You</p>
                  <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black">Quality Guest Post – Top Choice for Guest Post Service</h2>
                  <p className="mt-4 text-lg text-gray-700">
                    We&apos;ve earned the SEO industry&apos;s trust by boosting their clients&apos; ranking and ROI. Looking for high authority backlinks and outshine competitors? Our affordable guest posting service can help you achieve your business goals. Checkout our packages below or today for a free contact and learn how we can grow your business online.
                  </p>
                </div>
              </div>
            </div>
          </section>
  
          {/* Premium Services Section */}
          <section
            className="relative text-white py-20 bg-cover bg-center"
            style={{ backgroundImage: "url('/ryse-bg_1d68386a589ef8f9927ab74042f2b075.png')" }}
          >
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <p className="font-semibold">Why Choose QGP As Your Guest Post Agency</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Premium Guest Post Services</h2>
                <p className="mt-4 max-w-3xl mx-auto text-blue-100">
                  What makes QGP different is our quality and professionalism. We create high-quality content that attracts your target audience. We post on relevant blogs to reach the most potential customers and obtain niche-relevant links.
                </p>
              </div>
              <div className="grid md:grid-cols-3 gap-10 text-left mt-12">
                {/* Feature 1 */}
                <div className="flex gap-4 items-start">
                  <Image src="/publish-1_948d3574de6617f6f77398d31c7b4917.png" alt="High-Quality Blogs" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">High-Quality Blogs</h3>
                    <p className="text-blue-100 mt-2">At QGP, our guest blogging service is known for its on high-quality, relevant blogs. We avoid paid networks, focusing instead on manual outreach to secure posts on authoritative sites match with your website needs.</p>
                  </div>
                </div>
                {/* Feature 2 */}
                <div className="flex gap-4 items-start">
                  <Image src="/high-quality-1_b33e13a071eda47373a2585d484c949f.png" alt="Quality Content" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">Quality Content</h3>
                    <p className="text-blue-100 mt-2">At QGP, we write high-quality, original content that&apos;s error-free. Our research ensures engaging topics relevant to your audience.</p>
                  </div>
                </div>
                {/* Feature 3 */}
                <div className="flex gap-4 items-start">
                  <Image src="/rank_587efd9b620eb195529e02ee1a04e54e.png" alt="Boost SEO" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">Boost SEO</h3>
                    <p className="text-blue-100 mt-2">At QGP, our blogger outreach services get you targeted traffic and improve your web pages&apos; search engine rankings with relevant links.</p>
                  </div>
                </div>
                {/* Feature 4 */}
                <div className="flex gap-4 items-start">
                  <Image src="/blogging-1_ddceab40a61417f88ff3ae25c59fc34b.png" alt="High Authority Blogs" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">High Authority Blogs</h3>
                    <p className="text-blue-100 mt-2">The higher the domain authority, the more power it gives to your website. We select only high-authority blogs for publishing articles.</p>
                  </div>
                </div>
                {/* Feature 5 */}
                <div className="flex gap-4 items-start">
                  <Image src="/link-1_f72e51c4d26d3a667758ff81b528ba73.png" alt="Get Natural Links" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">Get Natural Links</h3>
                    <p className="text-blue-100 mt-2">We create a strategy that gets dofollow links to maximize results. We stay updated on SEO trends and use ethical techniques for lasting success.</p>
                  </div>
                </div>
                {/* Feature 6 */}
                <div className="flex gap-4 items-start">
                  <Image src="/no-parking-1-1_4f79aa5a6d742ce055e43baadf4356d0.png" alt="No Private Blog Networks" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">No Private Blog Networks</h3>
                    <p className="text-blue-100 mt-2">Unlike other guest posting services that use paid PBNs, we at Quality Guest Post focus on ethical practices.</p>
                  </div>
                </div>
                {/* Feature 7 */}
                <div className="flex gap-4 items-start">
                  <Image src="/http-1_64b0cdb3d970fff872fcd8b253753970.png" alt="Permanent Links" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">Permanent Links</h3>
                    <p className="text-blue-100 mt-2">Yes, they will be permanent, we offer replacement guarantee if a post or link gets removed. This one-time investment can drive quality traffic for years.</p>
                  </div>
                </div>
                {/* Feature 8 */}
                <div className="flex gap-4 items-start">
                  <Image src="/internet-1.png" alt="Zero Spam - 100% Safe" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">Zero Spam - 100% Safe</h3>
                    <p className="text-blue-100 mt-2">We prioritize trust and credibility by strictly avoiding unethical practices. Our content aims to genuinely engage your customers, not made for search engines.</p>
                  </div>
                </div>
                {/* Feature 9 */}
                <div className="flex gap-4 items-start">
                  <Image src="/calendar-1_6e0154bdec0e9c7f187e5650545f8920.png" alt="Meeting Deadlines" width={64} height={64} />
                  <div>
                    <h3 className="text-xl font-semibold">Meeting Deadlines</h3>
                    <p className="text-blue-100 mt-2">At QGP, we prioritize the timely delivery of all our guest post orders. Whether it&apos;s a bulk order or a small one, we ensure deadlines are met.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Guest Post Service - How Does It Work?</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
              Choose from our range of guest posting packages to suit your needs. Provide your keywords, anchor texts, and the webpage link during checkout or by email. Our experts will handle the rest while you sit back and relax.
            </p>
            <div className="grid md:grid-cols-3 gap-12 mt-16">
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600">Step 1</h3>
                <h4 className="text-2xl font-semibold mt-2">Choose Your Package</h4>
                <p className="text-gray-600 mt-4">We serve businesses of all sizes and niches with our guest posting services. Select a package that fits your needs and budget. For a customized order, contact us for personalized assistance.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600">Step 2</h3>
                <h4 className="text-2xl font-semibold mt-2">Provide Link Details</h4>
                <p className="text-gray-600 mt-4">Submit your link and anchor text at checkout or via email. Our team manages everything from topic research to content creation, proofreading, and publishing.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-blue-600">Step 3</h3>
                <h4 className="text-2xl font-semibold mt-2">White Label Reporting</h4>
                <p className="text-gray-600 mt-4">Once the publication is completed, we will send a report without any branding, with all the live links and their statistics. You can verify each link and content. You retain full ownership rights to published content.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <p className="text-lg font-semibold text-blue-600">Affordable Guest Post Packages for Every Business!</p>
            <h2 className="text-3xl md:text-4xl font-bold mt-2">Our Guest Posting Prices</h2>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-700">
              Our guest blogging service costs 30 USD each, much lower than competitors. Get a 10% discount on subscriptions or large orders by discussing with our team.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 group">
              {/* Pricing Card 1 */}
              <Card className="flex flex-col bg-white rounded-lg shadow-lg p-8 text-left transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-white">QGP STANDARD</h3>
                <p className="text-5xl font-bold my-4">$150</p>
                <p className="font-semibold">5 Guest Posts</p>
                <ul className="space-y-3 text-gray-600 mt-4 flex-1 group-hover:text-blue-100">
                  <li>Niche Relevant Links</li>
                  <li>Contextual Dofollow Link</li>
                  <li>DA 20 to 70</li>
                  <li>1-3 Links/Posts</li>
                  <li>1 Free Stock Image</li>
                  <li>550+ Words Content</li>
                  <li>Google Indexed</li>
                  <li>Turnaround Time – 1 Week</li>
                </ul>
                <Button className="mt-6 w-full bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">Select Plan</Button>
              </Card>
              {/* Pricing Card 2 (Most Popular) */}
              <Card className="flex flex-col bg-blue-600 text-white rounded-lg shadow-lg p-8 text-left transition-all duration-300 -translate-y-4">
                <h3 className="text-lg font-semibold">QGP MOST POPULAR</h3>
                <p className="text-5xl font-bold my-4">$299</p>
                <p className="font-semibold">10 Guest Posts</p>
                <ul className="space-y-3 text-blue-100 mt-4 flex-1">
                  <li>Niche Relevant Links</li>
                  <li>Contextual Dofollow Link</li>
                  <li>DA 20 to 70</li>
                  <li>1-3 Links/Posts</li>
                  <li>1 Free Stock Image</li>
                  <li>550+ Words Content</li>
                  <li>Google Indexed</li>
                  <li>Turnaround Time – 1 Week</li>
                </ul>
                <Button className="mt-6 w-full bg-white text-blue-600">Select Plan</Button>
              </Card>
              {/* Pricing Card 3 */}
              <Card className="flex flex-col bg-white rounded-lg shadow-lg p-8 text-left transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-white">QGP EXPRESS</h3>
                <p className="text-5xl font-bold my-4">$599</p>
                <p className="font-semibold">20 Guest Posts</p>
                <ul className="space-y-3 text-gray-600 mt-4 flex-1 group-hover:text-blue-100">
                  <li>Niche Relevant Links</li>
                  <li>Contextual Dofollow Link</li>
                  <li>DA 20 to 70</li>
                  <li>1-3 Links/Posts</li>
                  <li>1 Free Stock Image</li>
                  <li>550+ Words Content</li>
                  <li>Google Indexed</li>
                  <li>Turnaround Time – 2 Weeks</li>
                </ul>
                <Button className="mt-6 w-full bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">Select Plan</Button>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8 group">
              {/* Pricing Card 4 */}
              <Card className="flex flex-col bg-white rounded-lg shadow-lg p-8 text-left transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-white">QGP SMALL BUSINESS</h3>
                <p className="text-5xl font-bold my-4">$899</p>
                <p className="font-semibold">30 Guest Posts</p>
                <ul className="space-y-3 text-gray-600 mt-4 flex-1 group-hover:text-blue-100">
                  <li>Niche Relevant Links</li>
                  <li>Contextual Dofollow Link</li>
                  <li>DA 20 to 70</li>
                  <li>1-3 Links/Posts</li>
                  <li>1 Free Stock Image</li>
                  <li>550+ Words Content</li>
                  <li>Google Indexed</li>
                  <li>Turnaround Time – 2 Week</li>
                </ul>
                <Button className="mt-6 w-full bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">Select Plan</Button>
              </Card>
              {/* Pricing Card 5 */}
              <Card className="flex flex-col bg-white rounded-lg shadow-lg p-8 text-left transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-white">QGP LARGE BUSINESS</h3>
                <p className="text-5xl font-bold my-4">$1499</p>
                <p className="font-semibold">50 Guest Posts</p>
                <ul className="space-y-3 text-gray-600 mt-4 flex-1 group-hover:text-blue-100">
                  <li>Niche Relevant Links</li>
                  <li>Contextual Dofollow Link</li>
                  <li>DA 20 to 70</li>
                  <li>1-3 Links/Posts</li>
                  <li>1 Free Stock Image</li>
                  <li>550+ Words Content</li>
                  <li>Google Indexed</li>
                  <li>Turnaround Time – 3 Week</li>
                </ul>
                <Button className="mt-6 w-full bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">Select Plan</Button>
              </Card>
              {/* Pricing Card 6 */}
              <Card className="flex flex-col bg-white rounded-lg shadow-lg p-8 text-left transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-2">
                <h3 className="text-lg font-semibold text-blue-600 group-hover:text-white">QGP AGENCIES</h3>
                <p className="text-5xl font-bold my-4">$2999</p>
                <p className="font-semibold">100 Guest Posts</p>
                <ul className="space-y-3 text-gray-600 mt-4 flex-1 group-hover:text-blue-100">
                  <li>Niche Relevant Links</li>
                  <li>Contextual Dofollow Link</li>
                  <li>DA 20 to 70</li>
                  <li>1-3 Links/Posts</li>
                  <li>1 Free Stock Image</li>
                  <li>550+ Words Content</li>
                  <li>Google Indexed</li>
                  <li>Turnaround Time – 4 Weeks</li>
                </ul>
                <Button className="mt-6 w-full bg-blue-600 text-white group-hover:bg-white group-hover:text-blue-600">Select Plan</Button>
              </Card>
            </div>
            <Card className="mt-16 max-w-3xl mx-auto text-center p-8 bg-white rounded-lg shadow-lg">
              <h3 className="text-3xl font-bold text-black">Do you require something more powerful?</h3>
              <p className="mt-4 text-lg text-gray-700">
                Check out our premium blogs to position your business ahead of competitors. Gain featured, dofollow backlinks on some of the internet&apos;s most popular high-authority websites!
              </p>
              <Button size="lg" className="mt-6 bg-pink-500 hover:bg-pink-600 text-white">Premium Shop</Button>
            </Card>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">F.A.Q.</h2>
            </div>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>What Is Guest Posting, And How Does It Work?</AccordionTrigger>
                  <AccordionContent>
                    <p>Guest posting is when you write an article and publish it on someone else’s website. It’s a way to share your knowledge, reach more people, and get backlinks. The main goals of guest posting are to build relationships, drive traffic to a website, gain strong backlinks and establish authority and credibility in a specific niche.</p>
                    <h4 className="font-semibold mt-4">How do we do this:</h4>
                    <ul className="list-disc list-inside mt-2 space-y-2">
                      <li><strong>Find Websites:</strong> We look for blogs in your field that accept guest posts.</li>
                      <li><strong>Create Content:</strong> We write articles that will be helpful and interesting to their readers adding your SEO keywords and link to your website/service pages.</li>
                      <li><strong>Reach Out:</strong> We contact the blog owners to ask if you can submit your guest post and we get them published with dofollow links to your website.</li>
                    </ul>
                    <p className="mt-4">This link will raise your website’s search engine rating and increase traffic to it.</p>
                    <p className="mt-4">In general, guest writing is a fantastic method to build your internet profile and market your brand. Just be careful to approach it professionally and strategically.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is Guest Posting Beneficial For My Business?</AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, you will get high quality dofollow backlinks, which will help improve your ranking on search engines. This will also help build reputation, branding, and increase traffic.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>What Is Domain Authority (DA)?</AccordionTrigger>
                  <AccordionContent>
                    <p>A Moz score that goes from 1 to 100 is called Domain Authority (DA). In search engine results, it forecasts a website’s likelihood of ranking. The score helps you understand how well your website might do in search rankings. We make guest post on high DA blogs for a reason.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>How Do You Choose The Blogs For Guest Posts?</AccordionTrigger>
                  <AccordionContent>
                    <p>We check for high DA, indexed blogs while selected them for publication, we can also send you the blog list and you decide where your guest posts go. We look for websites with high Domain Authority or use our own blog. We also consider your target audience, keywords, competition, and the spam score of the blogs.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>What Details Do You Need From Me?</AccordionTrigger>
                  <AccordionContent>
                    <p>Just the list of the keywords and their landing pages. If you wish, you can provide the topics; otherwise, our writers can handle them as well. You can use different website keywords and links for different guest posts. For instance, if you acquire a 20-guest post package, you are permitted to utilize up to 20 distinct keywords and link details, which may originate from distinct domains.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>What Are the Best Keywords for My Business?</AccordionTrigger>
                  <AccordionContent>
                    <p>Your ideal keywords depend on several variables, including what your business sells, who its target audience is and its competitors. Here is how to select appropriate keywords:</p>
                    <ol className="list-decimal list-inside mt-2 space-y-2">
                      <li><strong>Do Keyword Research:</strong> Use tools like Google AdWords or Ahrefs to find keywords related to your business.</li>
                      <li><strong>Pick Relevant Keywords:</strong> Choose relevant keywords that match your business and what your customers might search for.</li>
                      <li><strong>Use Keywords in Your Content:</strong> Add these keywords to your website content to help people find you online. We use these keywords as anchor text for better ranking.</li>
                    </ol>
                    <p className="mt-4">If you need help, we can audit your website and suggest keywords that our writers can embed in the articles.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>Who Writes The Content?</AccordionTrigger>
                  <AccordionContent>
                    <p>We do. Our team of skilled writers will create the content for you using the information provided by you. We have writers with expertise in various fields, so your content will be high-quality and accurate. You will receive them for approval before we use them.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>What Happens If The Links No Longer Work?</AccordionTrigger>
                  <AccordionContent>
                    <p>If a link is found broken within 90 days of purchase, please contact us, and we will replace them. For more information on our policies, refer to our refund policy.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-9">
                  <AccordionTrigger>Will Guest Posting Hurt My SEO?</AccordionTrigger>
                  <AccordionContent>
                    <p>No, our guest posting will not harm your SEO/website. It enhances your SEO efforts. Partnering with us will guarantee that your articles are premium quality and being published on quality blogs.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-10">
                  <AccordionTrigger>How Will I Receive My Order?</AccordionTrigger>
                  <AccordionContent>
                    <p>Once the publication are done, you will get a report in an excel file via email including live guest posts, their DA and other statics</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-11">
                  <AccordionTrigger>How Quickly Does Google Index a Guest Post?</AccordionTrigger>
                  <AccordionContent>
                    <p>Google usually indexes a new post within 48 hours, though this can vary depending on how often the website is crawled and other factors. In some cases, it might take as long as a month.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-12">
                  <AccordionTrigger>Why Aren&apos;t My Links Showing in Google Search Console or Ahrefs?</AccordionTrigger>
                  <AccordionContent>
                    <p>If the links are not showing in Ahrefs or Google Search Console, there could be a number of reasons. Google hasn’t yet indexed the website or blog post, which is the most frequent explanation. It just needs to wait for Google to crawl the website once more in this instance. Reach out to us and we’ll look into the matter more if the links are still not visible after many weeks. Do not worry about this, we guarantee for indexing.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-13">
                  <AccordionTrigger>How Can I Pay for Your Services?</AccordionTrigger>
                  <AccordionContent>
                    <p>You can pay for our services using any major credit card or through PayPal, whichever you prefer.</p>
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-14">
                  <AccordionTrigger>Do You Offer Discounts for Large Orders?</AccordionTrigger>
                  <AccordionContent>
                    <p>Yes, we do offer discounts for bulk orders. If you are interested in placing one or more large orders of posts with us, contact us, and we’ll provide a quote.</p>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>

        {/* Guest Posting Samples Section */}
        <section className="py-20 bg-blue-700 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold">Check Out Some Guest Posting Samples</h2>
            <p className="mt-4 max-w-3xl mx-auto text-blue-100">
              Quality Guest Post provides excellent guest post service in a variety of niche, such as travel, fashion, health, finance, CBD, technology, and more. With our blog post service we are helping clients for over 12 years. Please check out the samples mentioned below.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              <Button variant="secondary" className="bg-pink-500 hover:bg-pink-600">Travel Guest Post</Button>
              <Button variant="secondary" className="bg-purple-500 hover:bg-purple-600">Technology Guest Post</Button>
              <Button variant="secondary" className="bg-indigo-500 hover:bg-indigo-600">Finance Guest Post</Button>
              <Button variant="secondary" className="bg-green-500 hover:bg-green-600">Health Guest Post</Button>
            </div>
          </div>
        </section>

        {/* Boost Your Business Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image src="/seo-growth-img.png" alt="SEO Growth" width={500} height={400} className="object-contain" />
              </div>
              <div>
                <p className="text-blue-600 font-semibold">Why Choose Quality Guest Post?</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black">Boost Your Online Business</h2>
                <p className="mt-4 text-gray-700 text-lg">
                  We have skilled experts, tools, connections, and years of experience to manage guest posting projects of any size. Enhance your business&apos;s growth potential by using our guest blog posting service. Get started by selecting the best package, today!
                </p>
                <div className="grid grid-cols-2 gap-4 mt-6 text-center">
                  <Card className="bg-white rounded-lg shadow-lg p-4"><p className="text-4xl font-bold text-blue-600">380</p><p>Client Feedback</p></Card>
                  <Card className="bg-white rounded-lg shadow-lg p-4"><p className="text-4xl font-bold text-blue-600">30$</p><p>Average Cost Per Post</p></Card>
                  <Card className="bg-white rounded-lg shadow-lg p-4"><p className="text-4xl font-bold text-blue-600">20,000</p><p>+ Quality Guest Posts</p></Card>
                  <Card className="bg-white rounded-lg shadow-lg p-4"><p className="text-4xl font-bold text-blue-600">12</p><p>Years of Experience</p></Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Our Guest Posting Process</h2>
              <p className="mt-4 max-w-2xl mx-auto text-gray-600">
                It has been more than 12 years in this industry, and we have good enough experience to running guest post campaigns effectively.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <Image src="/section_01_3c5049ea8845be08ec34e351e993709e.png" alt="Guest Posting Process" width={500} height={500} className="object-contain" />
              </div>
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 top-0 h-full w-0.5 bg-gray-200" aria-hidden="true"></div>
                <div className="space-y-12">
                  {/* Step 1 */}
                  <div className="pl-8 relative">
                    <div className="absolute left-0 top-0 -translate-x-1/2 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold z-10">1</div>
                    <h3 className="text-xl font-semibold">Step 1: Blogger Outreach and Pitching</h3>
                    <p className="text-gray-600 mt-2">It’s a process of contacting blog owners to request permission for your content and links to be published on their site. We don’t use private blogging networks; instead, we have built great relationships with thousands of real bloggers and influencers.</p>
                  </div>
                  {/* Step 2 */}
                  <div className="pl-8 relative">
                    <div className="absolute left-0 top-0 -translate-x-1/2 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold z-10">2</div>
                    <h3 className="text-xl font-semibold">Step 2: Writing and Proofreading</h3>
                    <p className="text-gray-600 mt-2">Meanwhile, our content writing team do the relevant topics research. They write unique and engaging content, and the proofreaders proofread it for grammar and accuracy. All the posts are written in such a way that they help your target audience, they are not made for search engine only.</p>
                  </div>
                  {/* Step 3 */}
                  <div className="pl-8 relative">
                    <div className="absolute left-0 top-0 -translate-x-1/2 bg-blue-600 text-white rounded-full h-8 w-8 flex items-center justify-center font-bold z-10">3</div>
                    <h3 className="text-xl font-semibold">Step 3: Publishing</h3>
                    <p className="text-gray-600 mt-2">After your approval, our team publishes the articles on selected blogs with relevant images and links. Your guest blog is now live. We provide a comprehensive report containing all the live links upon completion for your convenience.</p>
                    <p className="text-gray-600 mt-2">Fasten your seat belt and get ready to handle the jump in traffic coming to your web pages.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          className="py-32 bg-cover bg-center"
          style={{ backgroundImage: "url('/background.jpg')" }}
        >
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-left md:max-w-md">
                <p className="text-blue-600 font-semibold">What Clients Speak</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2 text-black">What Do Clients Say About QGP</h2>
                <p className="mt-4 text-lg text-gray-700">
                  We appreciate kind words and testimonials from our clients and use this information. With a principal goal of continuous improvement to provide quality guest posting services, associate with us today to enhance your online business! <a href="#" className="text-blue-600 hover:underline">Contact us now!</a>
                </p>
              </div>
              <div>
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                    dragFree: true,
                  }}
                  className="w-full cursor-grab"
                >
                  <CarouselContent>
                    <CarouselItem className="md:basis-1/2">
                      <Card className="bg-white p-6 rounded-lg shadow-lg relative">
                        <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
                        <p className="text-gray-600">&quot;Working with Quality Guest post has been a pleasure. Great team effort, superb quality content, and thank you for posting the guest blogs on some of the top-ranking sites.&quot;</p>
                        <div className="mt-4">
                          <p className="font-semibold text-black">Firas Kittaneh</p>
                          <p className="text-sm text-gray-500">CEO - OCLU</p>
                        </div>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2">
                      <Card className="bg-white p-6 rounded-lg shadow-lg relative">
                        <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
                        <p className="text-gray-600">&quot;It feels great to write a testimonial for Quality Guest Post. I am delighted with their service and have availed their service 15 times to date.&quot;</p>
                        <div className="mt-4">
                          <p className="font-semibold text-black">Ekim Saribardak</p>
                          <p className="text-sm text-gray-500">RewireSecurity.co.uk</p>
                        </div>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2">
                      <Card className="bg-white p-6 rounded-lg shadow-lg relative">
                        <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
                        <p className="text-gray-600">&quot;I have had the opportunity to work with so many different guest posting service providers, but no one was even close to Quality Guest Post.&quot;</p>
                        <div className="mt-4">
                          <p className="font-semibold text-black">Jeremy Lindy</p>
                          <p className="text-sm text-gray-500">Taniusa.com</p>
                        </div>
                      </Card>
                    </CarouselItem>
                    <CarouselItem className="md:basis-1/2">
                      <Card className="bg-white p-6 rounded-lg shadow-lg relative">
                        <div className="absolute bottom-0 left-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white transform translate-y-full"></div>
                        <p className="text-gray-600">&quot;Thank you for your endless support and for being so professional. You guys are exactly what I expected to be. I give Quality Guest Post 10 on 10.&quot;</p>
                        <div className="mt-4">
                          <p className="font-semibold text-black">Client Name</p>
                          <p className="text-sm text-gray-500">ClientCompany.com</p>
                        </div>
                      </Card>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </section>
        </div>
      </main>
    </div>
  );
}
