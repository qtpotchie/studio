export type Term = {
  id: string;
  term: string;
  slug: string;
  definition: string;
  example: string;
};

export const terms: Term[] = [
  {
    id: 'api',
    term: 'API',
    slug: 'api',
    definition: 'An Application Programming Interface (API) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.',
    example: 'When you use an app like Uber, it uses Google Maps\' API to show you the map and calculate routes, rather than building its own mapping service from scratch.',
  },
  {
    id: 'cdn',
    term: 'CDN',
    slug: 'cdn',
    definition: 'A Content Delivery Network (CDN) is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end-users.',
    example: 'Netflix uses a CDN to store copies of its movies and shows on servers all around the world, so when you stream a video, it comes from a server near you, reducing buffering and improving quality.',
  },
  {
    id: 'dns',
    term: 'DNS',
    slug: 'dns',
    definition: 'The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.',
    example: 'When you type "google.com" into your browser, DNS servers find the correct IP address for Google, like 172.217.9.142, allowing your computer to connect to it.',
  },
  {
    id: 'firewall',
    term: 'Firewall',
    slug: 'firewall',
    definition: 'A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.',
    example: 'Your home internet router has a built-in firewall that acts like a security guard, preventing unauthorized access to your home network from the internet.',
  },
  {
    id: 'git',
    term: 'Git',
    slug: 'git',
    definition: 'Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It is used for tracking changes in source code during software development.',
    example: 'A team of developers uses Git to work on the same project. Each developer can work on their own "branch" and then merge their changes back into the main project, while Git keeps track of every change made.',
  },
  {
    id: 'html',
    term: 'HTML',
    slug: 'html',
    definition: 'HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
    example: 'HTML provides the basic structure of a webpage, like creating headings, paragraphs, and links, much like a skeleton provides the frame for a body.',
  },
  {
    id: 'ip-address',
    term: 'IP Address',
    slug: 'ip-address',
    definition: 'An Internet Protocol (IP) address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. An IP address serves two main functions: host or network interface identification and location addressing.',
    example: 'An IP address is like the mailing address for your computer on the internet, allowing it to send and receive data from other computers.',
  },
  {
    id: 'json',
    term: 'JSON',
    slug: 'json',
    definition: 'JavaScript Object Notation (JSON) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language.',
    example: 'When a weather app gets forecast data from a server, the server often sends it in JSON format, like {"city": "New York", "temperature": 75}, which the app can easily understand and display.',
  },
  {
    id: 'kubernetes',
    term: 'Kubernetes',
    slug: 'kubernetes',
    definition: 'Kubernetes, also known as K8s, is an open-source system for automating deployment, scaling, and management of containerized applications.',
    example: 'A large e-commerce site uses Kubernetes to manage its thousands of microservices. If one service fails, Kubernetes automatically restarts it. If traffic surges during a sale, it automatically scales up the necessary services.',
  },
  {
    id: 'lan',
    term: 'LAN',
    slug: 'lan',
    definition: 'A Local Area Network (LAN) is a collection of devices connected together in one physical location, such as a building, office, or home. A LAN can be small or large, ranging from a home network with one user to an enterprise network with thousands of users and devices in an office or school.',
    example: 'The computers, printers, and smart devices connected to your home Wi-Fi network form a LAN.',
  },
  {
    id: 'machine-learning',
    term: 'Machine Learning',
    slug: 'machine-learning',
    definition: 'Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.',
    example: 'Your email service uses machine learning to identify spam by learning from the emails you and other users mark as junk.',
  },
  {
    id: 'oauth',
    term: 'OAuth',
    slug: 'oauth',
    definition: 'OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.',
    example: 'When you see a "Log in with Google" button on a website, it uses OAuth. You grant that site access to your basic Google profile information without ever giving it your Google password.',
  },
  {
    id: 'saas',
    term: 'SaaS',
    slug: 'saas',
    definition: 'Software as a Service (SaaS) is a software distribution model in which a third-party provider hosts applications and makes them available to customers over the Internet. SaaS is one of three main categories of cloud computing, alongside infrastructure as a service (IaaS) and platform as a service (PaaS).',
    example: 'Web-based email services like Gmail, office tools like Google Docs, or customer relationship management software like Salesforce are all examples of SaaS.',
  },
  {
    id: 'ssl-tls',
    term: 'SSL/TLS',
    slug: 'ssl-tls',
    definition: 'Transport Layer Security (TLS), and its now-deprecated predecessor, Secure Sockets Layer (SSL), are cryptographic protocols designed to provide communications security over a computer network. They are used in applications such as web browsing, email, and instant messaging.',
    example: 'The "https" and padlock icon in your browser\'s address bar indicate that your connection to the website is secured by SSL/TLS, encrypting the data between you and the server.',
  },
  {
    id: 'virtual-machine',
    term: 'Virtual Machine',
    slug: 'virtual-machine',
    definition: 'A Virtual Machine (VM) is a digital version of a physical computer. A VM is a computer file, typically called an image, that behaves like an actual computer. It can run in a window as a separate computing environment, often to run a different operating system.',
    example: 'A developer might use a virtual machine on their Mac to run a full version of Windows, allowing them to test their software on both operating systems without needing a second computer.',
  },
];
