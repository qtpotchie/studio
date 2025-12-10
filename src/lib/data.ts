
export type Term = {
  id: string;
  term: string;
  slug: string;
  definition: string;
  example: string;
};

export const terms: Term[] = [
  {
    id: 'acl',
    term: 'ACL',
    slug: 'acl',
    definition: 'An Access Control List (ACL) is a list of permissions attached to an object, specifying which users or systems are granted access to it, as well as what operations are allowed.',
    example: 'The network administrator configured the router\'s ACL to block all traffic from unknown IP addresses to enhance security.'
  },
  {
    id: 'acpi',
    term: 'ACPI',
    slug: 'acpi',
    definition: 'Advanced Configuration and Power Interface (ACPI) is a standard for device configuration and power management by the operating system.',
    example: 'Modern laptops use ACPI to manage power states, like sleeping and hibernating, to conserve battery life.'
  },
  {
    id: 'adb',
    term: 'ADB',
    slug: 'adb',
    definition: 'Android Debug Bridge (ADB) is a command-line tool that lets you communicate with an Android device to install and debug apps.',
    example: 'The developer used ADB to push the new APK to the test phone and view the application logs in real-time.'
  },
  {
    id: 'aes',
    term: 'AES',
    slug: 'aes',
    definition: 'Advanced Encryption Standard (AES) is a widely used symmetric encryption algorithm to secure data.',
    example: 'Wi-Fi networks use WPA2 security, which relies on AES to encrypt the data transmitted between your device and the router.'
  },
  {
    id: 'agp',
    term: 'AGP',
    slug: 'agp',
    definition: 'Accelerated Graphics Port (AGP) is a high-speed point-to-point channel for attaching a video card to a computer\'s motherboard, primarily to assist in the acceleration of 3D computer graphics. It is a legacy standard.',
    example: 'Before PCIe became the standard, high-end video cards used the AGP slot for the best graphics performance.'
  },
  {
    id: 'aio',
    term: 'AIO',
    slug: 'aio',
    definition: 'An All-in-One (AIO) is a computer or device that integrates the internal components into the same case as the display, eliminating the need for a separate computer tower.',
    example: 'The office purchased AIO desktops to save space and reduce cable clutter at each workstation.'
  },
  {
    id: 'aix',
    term: 'AIX',
    slug: 'aix',
    definition: 'AIX is a series of proprietary Unix operating systems developed and sold by IBM for several of its computer platforms.',
    example: 'Many large enterprise systems in finance and banking run on servers powered by the AIX operating system due to its stability.'
  },
  {
    id: 'ajax',
    term: 'AJAX',
    slug: 'ajax',
    definition: 'Asynchronous JavaScript and XML (AJAX) is a technique for creating fast and dynamic web pages by allowing the web page to update parts of its content without reloading the whole page.',
    example: 'When you type in a search bar and see suggestions appear instantly, that is often accomplished using AJAX requests.'
  },
  {
    id: 'alu',
    term: 'ALU',
    slug: 'alu',
    definition: 'An Arithmetic Logic Unit (ALU) is a digital circuit within a CPU that performs arithmetic and bitwise logic operations on integer binary numbers.',
    example: 'The CPU\'s ALU is responsible for carrying out all the mathematical calculations, like addition and subtraction.'
  },
  {
    id: 'amd-v',
    term: 'AMD-V',
    slug: 'amd-v',
    definition: 'AMD Virtualization (AMD-V) is the name for AMD\'s hardware virtualization extensions for the x86 architecture, which enables running multiple operating systems on a single machine.',
    example: 'To run a virtual machine efficiently on his AMD-powered PC, he had to first enable AMD-V in the BIOS settings.'
  },
  {
    id: 'ami-bios',
    term: 'AMI BIOS',
    slug: 'ami-bios',
    definition: 'American Megatrends Inc. BIOS (AMI BIOS) is a type of firmware used to perform hardware initialization during the booting process on many PC motherboards.',
    example: 'When the computer started, he pressed the DEL key to enter the AMI BIOS setup screen and change the boot order.'
  },
  {
    id: 'amp',
    term: 'AMP',
    slug: 'amp',
    definition: 'Accelerated Mobile Pages (AMP) is an open-source HTML framework developed by Google to optimize web pages for mobile browsing, making them load faster.',
    example: 'News articles with a lightning bolt symbol in Google search results are often AMP pages, designed for a quick reading experience on mobile.'
  },
  {
    id: 'ansible',
    term: 'Ansible',
    slug: 'ansible',
    definition: 'Ansible is an open-source software provisioning, configuration management, and application-deployment tool.',
    example: 'The DevOps team used an Ansible playbook to automate the configuration of 100 new web servers simultaneously.'
  },
  {
    id: 'ansi',
    term: 'ANSI',
    slug: 'ansi',
    definition: 'The American National Standards Institute (ANSI) is a private non-profit organization that oversees the development of voluntary consensus standards for products, services, processes, systems, and personnel in the United States.',
    example: 'The ANSI SQL standard ensures that basic SQL commands work consistently across different database systems.'
  },
  {
    id: 'api-gateway',
    term: 'API Gateway',
    slug: 'api-gateway',
    definition: 'An API Gateway is a server that acts as a single entry point for a group of microservices, handling requests by routing them to the appropriate service.',
    example: 'Instead of having clients call a dozen different microservices, they all go through the API Gateway, which simplifies authentication and logging.'
  },
  {
    id: 'apipa',
    term: 'APIPA',
    slug: 'apipa',
    definition: 'Automatic Private IP Addressing (APIPA) is a feature in operating systems that automatically assigns an IP address to a device when a DHCP server is not available.',
    example: 'My computer couldn\'t connect to the Wi-Fi router, so it got an APIPA address starting with 169.254.x.x.'
  },
  {
    id: 'apk',
    term: 'APK',
    slug: 'apk',
    definition: 'Android Package Kit (APK) is the file format used by the Android operating system for the distribution and installation of mobile apps.',
    example: 'To install the beta version of the app, he had to download the APK file directly from the developer\'s website.'
  },
  {
    id: 'apm',
    term: 'APM',
    slug: 'apm',
    definition: 'Application Performance Monitoring (APM) is the practice of monitoring and managing the performance, availability, and user experience of software applications.',
    example: 'The team used an APM tool to identify that a slow database query was causing the entire application to lag.'
  },
  {
    id: 'apt',
    term: 'APT',
    slug: 'apt',
    definition: 'Advanced Package Tool (APT) is the command-line package manager used by Debian and its derivatives like Ubuntu to handle the installation and removal of software.',
    example: 'He opened the terminal and typed `sudo apt update` to refresh the list of available software packages.'
  },
  {
    id: 'arp',
    term: 'ARP',
    slug: 'arp',
    definition: 'Address Resolution Protocol (ARP) is a communication protocol used for discovering the hardware address (MAC address) associated with a given internet layer address (IP address).',
    example: 'When your computer wants to send data to another device on the local network, it first sends out an ARP request to find its MAC address.'
  },
  {
    id: 'aslr',
    term: 'ASLR',
    slug: 'aslr',
    definition: 'Address Space Layout Randomization (ASLR) is a computer security technique which involves randomly arranging the positions of key data areas in a process\'s memory space.',
    example: 'Modern operating systems use ASLR to make it much harder for attackers to execute buffer overflow attacks successfully.'
  },
  {
    id: 'ata',
    term: 'ATA',
    slug: 'ata',
    definition: 'Advanced Technology Attachment (ATA) is a standard interface for connecting storage devices such as hard disk drives, and CD-ROM drives inside personal computers.',
    example: 'The older computer had two hard drives connected to the motherboard using wide, flat ATA ribbon cables.'
  },
  {
    id: 'atx',
    term: 'ATX',
    slug: 'atx',
    definition: 'Advanced Technology eXtended (ATX) is a motherboard and power supply configuration specification developed by Intel to improve on previous standards.',
    example: 'He built his new gaming PC using a standard ATX motherboard, which offered plenty of slots for expansion.'
  },
  {
    id: 'autosar',
    term: 'AUTOSAR',
    slug: 'autosar',
    definition: 'AUTomotive Open System ARchitecture (AUTOSAR) is a global development partnership of automotive interested parties working on an open and standardized software architecture for automotive ECUs.',
    example: 'Modern cars rely on the AUTOSAR standard to ensure that software from different suppliers can work together seamlessly.'
  },
  {
    id: 'awk',
    term: 'awk',
    slug: 'awk',
    definition: 'awk is a domain-specific language designed for text processing and typically used as a data extraction and reporting tool on Unix-like operating systems.',
    example: 'She used a one-line `awk` script to parse the log file and print only the lines containing an error message.'
  },
  {
    id: 'b-tree',
    term: 'B-Tree',
    slug: 'b-tree',
    definition: 'A B-Tree is a self-balancing tree data structure that maintains sorted data and allows for searches, sequential access, insertions, and deletions in logarithmic time.',
    example: 'Databases and file systems use B-Tree indexes to quickly find data on disk without having to read the entire file.'
  },
  {
    id: 'b2b',
    term: 'B2B',
    slug: 'b2b',
    definition: 'Business-to-Business (B2B) refers to transactions or business conducted between two businesses, such as a wholesaler and a retailer.',
    example: 'The software company focused on the B2B market, selling their accounting software directly to other companies.'
  },
  {
    id: 'b2c',
    term: 'B2C',
    slug: 'b2c',
    definition: 'Business-to-Consumer (B2C) refers to the process of selling products and services directly between a business and consumers who are the end-users of its products or services.',
    example: 'Amazon is a prime example of a B2C company, selling a vast range of products directly to individual customers.'
  },
  {
    id: 'bash',
    term: 'BASH',
    slug: 'bash',
    definition: 'Bourne Again SHell (BASH) is a Unix shell and command language, and it is the default shell for many Linux distributions and macOS.',
    example: 'He wrote a simple BASH script to automate the process of backing up his files every night.'
  },
  {
    id: 'bgp',
    term: 'BGP',
    slug: 'bgp',
    definition: 'Border Gateway Protocol (BGP) is the routing protocol used to exchange routing and reachability information among autonomous systems (AS) on the Internet.',
    example: 'Large internet service providers use BGP to determine the most efficient paths for data to travel across the global internet.'
  },
  {
    id: 'bind',
    term: 'BIND',
    slug: 'bind',
    definition: 'Berkeley Internet Name Domain (BIND) is the most widely used Domain Name System (DNS) software on the Internet.',
    example: 'The systems administrator configured the BIND server to resolve the company\'s domain names to their correct IP addresses.'
  },
  {
    id: 'bios',
    term: 'BIOS',
    slug: 'bios',
    definition: 'Basic Input/Output System (BIOS) is firmware used to perform hardware initialization during the booting process and to provide runtime services for operating systems and programs.',
    example: 'He entered the BIOS to change the boot order so the computer would start from the USB drive instead of the hard drive.'
  },
  {
    id: 'blob',
    term: 'BLOB',
    slug: 'blob',
    definition: 'A Binary Large Object (BLOB) is a collection of binary data stored as a single entity in a database, such as an image or audio file.',
    example: 'The user\'s profile picture was stored as a BLOB in the database, linked to their user ID.'
  },
  {
    id: 'blockchain',
    term: 'Blockchain',
    slug: 'blockchain',
    definition: 'A Blockchain is a distributed, immutable ledger that is used to record transactions and track assets in a business network.',
    example: 'Bitcoin transactions are recorded on a public blockchain, making them secure and transparent.'
  },
  {
    id: 'bluetooth-le',
    term: 'Bluetooth LE',
    slug: 'bluetooth-le',
    definition: 'Bluetooth Low Energy (Bluetooth LE) is a power-conserving version of Bluetooth, designed for low-power devices that transmit small amounts of data infrequently.',
    example: 'My fitness tracker uses Bluetooth LE to sync data with my phone without draining its small battery.'
  },
  {
    id: 'bnf',
    term: 'BNF',
    slug: 'bnf',
    definition: 'Backus-Naur Form (BNF) is a notation technique for context-free grammars, often used to describe the syntax of programming languages.',
    example: 'The compiler developer first wrote the language\'s grammar in BNF to define what constitutes a valid program.'
  },
  {
    id: 'bootloader',
    term: 'Bootloader',
    slug: 'bootloader',
    definition: 'A Bootloader is a small program that loads the main operating system for the computer when it is turned on.',
    example: 'Unlocking the bootloader on his Android phone allowed him to install a custom operating system.'
  },
  {
    id: 'bottleneck',
    term: 'Bottleneck',
    slug: 'bottleneck',
    definition: 'A Bottleneck is a point of congestion in a system that limits its overall performance. The system can only perform as fast as its slowest component.',
    example: 'The old hard drive was the bottleneck in his new PC; despite a fast CPU, applications loaded slowly.'
  },
  {
    id: 'brb',
    term: 'BRB',
    slug: 'brb',
    definition: 'A Binary Rate Breakpoint (BRB) is a term used in adaptive streaming where the video player switches between different quality levels (bitrates) based on network conditions.',
    example: 'The video player hit a BRB and switched to a lower quality stream when my internet connection slowed down.'
  },
  {
    id: 'breadcrumbs',
    term: 'Breadcrumbs',
    slug: 'breadcrumbs',
    definition: 'Breadcrumbs are a type of secondary navigation scheme that reveals the user\'s location in a website or web app.',
    example: 'The breadcrumb trail at the top of the page showed: Home > Products > Laptops, helping me navigate back easily.'
  },
  {
    id: 'bruteforce',
    term: 'BRUTEFORCE',
    slug: 'bruteforce',
    definition: 'A BRUTEFORCE is a trial-and-error method used to obtain information such as a user password by trying all possible combinations.',
    example: 'The login server detected a brute-force attack when it received thousands of failed password attempts from a single IP address.'
  },
  {
    id: 'buffer-overflow',
    term: 'Buffer Overflow',
    slug: 'buffer-overflow',
    definition: 'A Buffer Overflow is a type of software vulnerability that occurs when a program writes data beyond the boundary of a buffer, overwriting adjacent memory.',
    example: 'Exploiting the buffer overflow vulnerability, the attacker was able to execute malicious code on the server.'
  },
  {
    id: 'build-pipeline',
    term: 'Build Pipeline',
    slug: 'build-pipeline',
    definition: 'A Build Pipeline is a set of automated processes that compile, test, and package code into a deployable software artifact.',
    example: 'Every time a developer commits new code, the build pipeline automatically runs tests and creates a new version of the application.'
  },
  {
    id: 'byod',
    term: 'BYOD',
    slug: 'byod',
    definition: 'Bring Your Own Device (BYOD) is a policy that allows employees to use their personal devices, like smartphones or laptops, for work purposes.',
    example: 'The company implemented a BYOD policy to save on hardware costs, but had to invest in mobile device management software.'
  },
  {
    id: 'cname',
    term: 'CNAME',
    slug: 'cname',
    definition: 'A Canonical Name (CNAME) is a type of DNS record that maps an alias name to a true or canonical domain name.',
    example: 'They set up a CNAME record so that `\'\'\'www.example.com\'\'\'` would point to `\'\'\'example.com\'\'\'`.'
  },
  {
    id: 'cdn',
    term: 'CDN',
    slug: 'cdn',
    definition: 'A Content Delivery Network (CDN) is a geographically distributed network of proxy servers which cache content close to end-users for faster delivery.',
    example: 'The website uses a CDN to serve images and videos, which significantly reduces page load times for users around the world.'
  },
  {
    id: 'cgroup',
    term: 'CGroup',
    slug: 'cgroup',
    definition: 'Control Groups (CGroup) is a Linux kernel feature that allows you to allocate and limit resources—like CPU, memory, and network I/O—among a collection of processes.',
    example: 'Docker uses cgroups to ensure that a single container cannot consume all of the host machine\'s CPU resources.'
  },
  {
    id: 'cidr',
    term: 'CIDR',
    slug: 'cidr',
    definition: 'Classless Inter-Domain Routing (CIDR) is a method for allocating IP addresses and IP routing. The CIDR notation specifies an IP address and its associated routing prefix.',
    example: 'The firewall rule was configured with a CIDR block of 192.168.1.0/24 to apply to all devices on that subnet.'
  },
  {
    id: 'cim',
    term: 'CIM',
    slug: 'cim',
    definition: 'The Common Information Model (CIM) is an open standard that defines how managed elements in an IT environment are represented as a common set of objects and relationships between them.',
    example: 'System management tools use CIM to get standardized hardware and software information from different types of servers.'
  },
  {
    id: 'cli',
    term: 'CLI',
    slug: 'cli',
    definition: 'A Command-Line Interface (CLI) is a text-based interface used to view and manage computer files and run programs.',
    example: 'While the GUI is easier for beginners, many developers prefer the power and speed of a CLI for tasks like managing Git repositories.'
  },
  {
    id: 'clojure',
    term: 'Clojure',
    slug: 'clojure',
    definition: 'Clojure is a dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming.',
    example: 'The team chose Clojure for their data processing application because of its strong support for concurrency and immutable data structures.'
  },
  {
    id: 'cmos',
    term: 'CMOS',
    slug: 'cmos',
    definition: 'Complementary Metal-Oxide-Semiconductor (CMOS) is a technology for constructing integrated circuits. It\'s also used to refer to the battery-powered memory on a motherboard that stores BIOS settings.',
    example: 'He had to reset the CMOS to restore the motherboard\'s default settings after a failed overclock.'
  },
  {
    id: 'cors',
    term: 'CORS',
    slug: 'cors',
    definition: 'Cross-Origin Resource Sharing (CORS) is a browser security feature that restricts how a web page can request resources from a domain different from the one which served the initial page.',
    example: 'The web app failed to load data from the API because of a CORS error, which the server needed to be configured to allow.'
  },
  {
    id: 'cpu-throttling',
    term: 'CPU Throttling',
    slug: 'cpu-throttling',
    definition: 'CPU Throttling is a technique where the clock speed of a CPU is intentionally reduced to conserve power or decrease the amount of heat it generates.',
    example: 'His laptop started running slow under heavy load because CPU throttling kicked in to prevent overheating.'
  },
  {
    id: 'crc',
    term: 'CRC',
    slug: 'crc',
    definition: 'A Cyclic Redundancy Check (CRC) is an error-detecting code commonly used in digital networks and storage devices to detect accidental changes to raw data.',
    example: 'When you unzip a file, the software performs a CRC to ensure the data wasn\'t corrupted during download.'
  },
  {
    id: 'crud',
    term: 'CRUD',
    slug: 'crud',
    definition: 'CRUD (Create, Read, Update, and Delete) are the four basic operations of persistent storage.',
    example: 'The developer implemented the CRUD endpoints for the user profile, allowing the frontend to create, read, update, and delete user data.'
  },
  {
    id: 'cryptomining',
    term: 'Cryptomining',
    slug: 'cryptomining',
    definition: 'Cryptomining is the process of verifying and adding transactions to a blockchain, for which miners are rewarded with cryptocurrency.',
    example: 'His electricity bill skyrocketed because he was using his gaming PC for cryptomining 24/7.'
  },
  {
    id: 'csrf',
    term: 'CSRF',
    slug: 'csrf',
    definition: 'Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they\'re currently authenticated.',
    example: 'The application uses anti-CSRF tokens in its forms to prevent attackers from tricking users into submitting malicious requests.'
  },
  {
    id: 'ctos',
    term: 'CTOS',
    slug: 'ctos',
    definition: 'Convergent Technology Operating System (CTOS) is a modular, message-passing, multiprocessing operating system.',
    example: 'In the 1980s, CTOS was an innovative OS known for its networking capabilities and was used in many business machines.'
  },
  {
    id: 'cuda',
    term: 'CUDA',
    slug: 'cuda',
    definition: 'Compute Unified Device Architecture (CUDA) is a parallel computing platform and programming model developed by Nvidia for general computing on its own GPUs.',
    example: 'Scientists use CUDA to accelerate complex simulations by running calculations on powerful Nvidia graphics cards.'
  },
  {
    id: 'cve',
    term: 'CVE',
    slug: 'cve',
    definition: 'Common Vulnerabilities and Exposures (CVE) is a list of publicly disclosed computer security flaws. Each CVE has a unique ID number.',
    example: 'The security team is patching the server to protect against the new vulnerability identified as CVE-2023-12345.'
  },
  {
    id: 'daemon',
    term: 'Daemon',
    slug: 'daemon',
    definition: 'A Daemon is a computer program that runs as a background process, rather than being under the direct control of an interactive user.',
    example: 'The `\'\'\'sshd\'\'\'` daemon on a Linux server is always running in the background, listening for incoming SSH connections.'
  },
  {
    id: 'dag',
    term: 'DAG',
    slug: 'dag',
    definition: 'A Directed Acyclic Graph (DAG) is a graph data structure with directed edges (arrows) and no cycles.',
    example: 'Build systems and task schedulers often use a DAG to represent dependencies, ensuring tasks are executed in the correct order.'
  },
  {
    id: 'dapps',
    term: 'DApps',
    slug: 'dapps',
    definition: 'Decentralized Applications (DApps) are applications that run on a peer-to-peer network of computers rather than a single central server.',
    example: 'Many cryptocurrency wallets are DApps that interact directly with the blockchain without a central intermediary.'
  },
  {
    id: 'data-lake',
    term: 'Data Lake',
    slug: 'data-lake',
    definition: 'A Data Lake is a centralized repository that allows you to store all your structured and unstructured data at any scale.',
    example: 'The company dumped all its raw log files, user data, and transaction records into a data lake for future analysis.'
  },
  {
    id: 'dbaas',
    term: 'DBaaS',
    slug: 'dbaas',
    definition: 'Database-as-a-Service (DBaaS) is a cloud computing service that lets users access and use a database system without purchasing and setting up their own hardware.',
    example: 'Instead of managing their own PostgreSQL server, the startup opted for a DBaaS provider to handle backups and scaling.'
  },
  {
    id: 'ddos',
    term: 'DDoS',
    slug: 'ddos',
    definition: 'A Distributed Denial-of-Service (DDoS) is a malicious attempt to disrupt the normal traffic of a targeted server or network by overwhelming it with a flood of Internet traffic.',
    example: 'The gaming servers went offline due to a massive DDoS attack launched from a botnet of thousands of compromised devices.'
  },
  {
    id: 'ddr3-ddr4-ddr5',
    term: 'DDR3/DDR4/DDR5',
    slug: 'ddr3-ddr4-ddr5',
    definition: 'Double Data Rate Synchronous Dynamic Random-Access Memory (DDR3/DDR4/DDR5) are generations of memory (RAM) used in computers, with each new version offering higher speeds and more efficiency.',
    example: 'He upgraded his PC from 16GB of DDR4 RAM to 32GB of DDR5 RAM to improve performance in video editing.'
  },
  {
    id: 'deadlock',
    term: 'Deadlock',
    slug: 'deadlock',
    definition: 'A Deadlock is a situation in concurrent programming where two or more processes are blocked forever, each waiting for the other to release a resource.',
    example: 'The database transaction failed because of a deadlock; two processes were trying to update the same two tables in a different order.'
  },
  {
    id: 'deep-packet-inspection',
    term: 'Deep Packet Inspection',
    slug: 'deep-packet-inspection',
    definition: 'Deep Packet Inspection is an advanced method of examining network traffic, where the content of data packets is inspected in detail.',
    example: 'Corporate firewalls use deep packet inspection to block specific applications or prevent sensitive data from leaving the network.'
  },
  {
    id: 'devsecops',
    term: 'DevSecOps',
    slug: 'devsecops',
    definition: 'DevSecOps is a mindset or culture that integrates security practices within the DevOps process, making security a shared responsibility.',
    example: 'By adopting a DevSecOps approach, they started running security scans automatically in their CI/CD pipeline.'
  },
  {
    id: 'dhcp',
    term: 'DHCP',
    slug: 'dhcp',
    definition: 'Dynamic Host Configuration Protocol (DHCP) is a network management protocol used to automatically assign IP addresses and other communication parameters to devices on a network.',
    example: 'When you connect your phone to a Wi-Fi network, a DHCP server on the router assigns it an IP address.'
  },
  {
    id: 'diff-tool',
    term: 'Diff Tool',
    slug: 'diff-tool',
    definition: 'A Diff Tool is a software utility that compares two files or directories and shows the differences between them.',
    example: 'The programmer used a diff tool to see exactly which lines of code he had changed before committing his work.'
  },
  {
    id: 'dimm',
    term: 'DIMM',
    slug: 'dimm',
    definition: 'A Dual In-Line Memory Module (DIMM) is a small circuit board that holds memory chips and is installed on a computer\'s motherboard.',
    example: 'To upgrade the RAM, she purchased two 16GB DIMM sticks and installed them in the available slots.'
  },
  {
    id: 'disk-io',
    term: 'Disk I/O',
    slug: 'disk-io',
    definition: 'Disk Input/Output (Disk I/O) refers to the read and write operations on a physical disk (hard drive or SSD).',
    example: 'The application was slow because of high disk I/O; it was constantly reading and writing large files to the slow hard drive.'
  },
  {
    id: 'django',
    term: 'Django',
    slug: 'django',
    definition: 'Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    example: 'He built his blog using Django, which provided a built-in admin panel for managing posts.'
  },
  {
    id: 'dns',
    term: 'DNS',
    slug: 'dns',
    definition: 'The Domain Name System (DNS) is the Internet\'s phonebook. It translates human-readable domain names (like `\'\'\'www.google.com\'\'\'`) into machine-readable IP addresses (like `172.217.14.228`).',
    example: 'When you type a website address into your browser, your computer performs a DNS lookup to find the correct server to connect to.'
  },
  {
    id: 'docker',
    term: 'Docker',
    slug: 'docker',
    definition: 'Docker is a platform that uses OS-level virtualization to deliver software in packages called containers.',
    example: 'She packaged her web application and its database into Docker containers, so it could be easily run on any server.'
  },
  {
    id: 'dom',
    term: 'DOM',
    slug: 'dom',
    definition: 'The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.',
    example: 'JavaScript interacts with the DOM to do things like change the text of a button or show a hidden menu.'
  },
  {
    id: 'dotfile',
    term: 'Dotfile',
    slug: 'dotfile',
    definition: 'A Dotfile is a configuration file on Unix-like systems, named with a dot at the beginning, which makes it hidden from normal directory listings.',
    example: 'He customized his shell prompt by editing the `.bashrc` dotfile in his home directory.'
  },
  {
    id: 'dpi-network',
    term: 'DPI (Network)',
    slug: 'dpi-network',
    definition: 'Deep Packet Inspection (DPI (Network)) in networking, it is the process of examining the data part of a packet as it passes an inspection point, filtering for non-protocol-compliant traffic or specific content.',
    example: 'The ISP uses DPI to identify and prioritize video streaming traffic to ensure a smooth viewing experience for customers.'
  },
  {
    id: 'dram',
    term: 'DRAM',
    slug: 'dram',
    definition: 'Dynamic Random-Access Memory (DRAM) is a type of semiconductor memory that is typically used for the data or program code needed by a computer processor to function.',
    example: 'Most of the RAM in a modern PC is a type of DRAM, which needs to be constantly refreshed to retain its data.'
  },
  {
    id: 'dual-boot',
    term: 'Dual-boot',
    slug: 'dual-boot',
    definition: 'Dual-boot is the act of installing two operating systems on a single computer, and being able to choose which one to boot into when the computer starts.',
    example: 'He set up his laptop to dual-boot Windows for gaming and Linux for programming.'
  },
  {
    id: 'dump-file',
    term: 'Dump File',
    slug: 'dump-file',
    definition: 'A Dump File is a file containing a record of the state of a program\'s memory at a specific time, generally when the program has crashed.',
    example: 'The system automatically generated a memory dump file when the application crashed, which the developers analyzed to find the bug.'
  },
  {
    id: 'dxdiag',
    term: 'DXDiag',
    slug: 'dxdiag',
    definition: 'DirectX Diagnostic Tool (DXDiag) is a diagnostics tool used to test DirectX functionality and troubleshoot video- or sound-related hardware problems on Windows.',
    example: 'Support asked him to run `dxdiag` and send them the report to check his graphics card and driver information.'
  },
  {
    id: 'ecdsa',
    term: 'ECDSA',
    slug: 'ecdsa',
    definition: 'Elliptic Curve Digital Signature Algorithm (ECDSA) is a cryptographic algorithm used to create a digital signature of data to verify its authenticity and integrity.',
    example: 'Bitcoin and other cryptocurrencies use ECDSA to ensure that only the owner of a wallet can spend the funds within it.'
  },
  {
    id: 'edge-computing',
    term: 'Edge Computing',
    slug: 'edge-computing',
    definition: 'Edge Computing is a distributed computing paradigm that brings computation and data storage closer to the sources of data, rather than relying on a central server.',
    example: 'A self-driving car uses edge computing to process sensor data instantly, as sending it to the cloud would be too slow.'
  },
  {
    id: 'eeprom',
    term: 'EEPROM',
    slug: 'eeprom',
    definition: 'Electrically Erasable Programmable Read-Only Memory (EEPROM) is a type of non-volatile memory used in computers and other electronic devices to store small amounts of data that must be saved when power is removed.',
    example: 'The configuration settings for the router are stored in an EEPROM so they are not lost when it is unplugged.'
  },
  {
    id: 'eigrp',
    term: 'EIGRP',
    slug: 'eigrp',
    definition: 'Enhanced Interior Gateway Routing Protocol (EIGRP) is an advanced distance-vector routing protocol developed by Cisco Systems.',
    example: 'The network engineer chose EIGRP for the internal company network because of its fast convergence time.'
  },
  {
    id: 'elastic-cluster',
    term: 'Elastic Cluster',
    slug: 'elastic-cluster',
    definition: 'An Elastic Cluster is a group of servers or resources that can automatically scale up (add resources) or scale down (remove resources) based on demand.',
    example: 'The website runs on an elastic cluster that adds more web servers during traffic spikes and removes them when traffic is low.'
  },
  {
    id: 'electron',
    term: 'Electron',
    slug: 'electron',
    definition: 'Electron is a framework for building desktop applications using web technologies like HTML, CSS, and JavaScript.',
    example: 'Popular apps like Slack and Visual Studio Code are built with Electron, which is why they look and feel similar on different operating systems.'
  },
  {
    id: 'endianness',
    term: 'Endianness',
    slug: 'endianness',
    definition: 'Endianness refers to the order in which a sequence of bytes is stored in computer memory. The two main types are big-endian and little-endian.',
    example: 'When transferring binary data between different systems, developers must be careful about endianness to avoid data corruption.'
  },
  {
    id: 'env-variable',
    term: 'Env Variable',
    slug: 'env-variable',
    definition: 'An Env Variable is an environment variable is a dynamic-named value that can affect the way running processes will behave on a computer.',
    example: 'He set the `PATH` environment variable so he could run his favorite command-line tools from any directory.'
  },
  {
    id: 'eprom',
    term: 'EPROM',
    slug: 'eprom',
    definition: 'Erasable Programmable Read-Only Memory (EPROM) is a type of memory chip that retains its data when its power supply is switched off but can be erased by exposing it to strong ultraviolet light.',
    example: 'In older computers, the BIOS was often stored on an EPROM chip, which had a small quartz window for erasure.'
  },
  {
    id: 'ethernet',
    term: 'Ethernet',
    slug: 'ethernet',
    definition: 'Ethernet is the standard technology for wired local area networks (LANs). It defines how devices format and transmit data so other devices on the same network can recognize, receive, and process them.',
    example: 'For a faster and more stable internet connection, he connected his gaming console directly to the router with an Ethernet cable.'
  },
  {
    id: 'etl',
    term: 'ETL',
    slug: 'etl',
    definition: 'Extract, Transform, Load (ETL) is a data integration process that involves extracting data from a source, transforming it into a proper format, and loading it into a destination like a data warehouse.',
    example: 'The nightly ETL job pulls sales data from the production database, reformats it, and loads it into the data warehouse for analysis.'
  },

  {
    id: 'event-loop',
    term: 'Event Loop',
    slug: 'event-loop',
    definition: 'An Event Loop is a programming construct that waits for and dispatches events or messages in a program. It\'s fundamental to non-blocking I/O in environments like Node.js and web browsers.',
    example: 'JavaScript in the browser uses an event loop to handle user interactions like clicks and key presses without freezing the UI.'
  },
  {
    id: 'exif',
    term: 'EXIF',
    slug: 'exif',
    definition: 'Exchangeable Image File Format (EXIF) is a standard that specifies the formats for images, sound, and ancillary tags used by digital cameras.',
    example: 'By viewing the EXIF data of the photo, he could see the exact camera model, shutter speed, and GPS coordinates of where it was taken.'
  },
  {
    id: 'ext4',
    term: 'EXT4',
    slug: 'ext4',
    definition: 'Fourth Extended Filesystem (EXT4) is a journaling file system for Linux, developed as the successor to ext3.',
    example: 'Most modern Linux distributions use the ext4 filesystem by default because of its performance and reliability.'
  },
  {
    id: 'etag',
    term: 'ETag',
    slug: 'etag',
    definition: 'An Entity Tag (ETag) is an HTTP header used for web cache validation. It allows a server to indicate whether a resource has changed, enabling browsers to use a cached version instead of re-downloading it.',
    example: 'The server sent an ETag with the image, so the next time the browser requested it, it could send the ETag to check if the image was still fresh.'
  },
  {
    id: 'faas',
    term: 'FaaS',
    slug: 'faas',
    definition: 'Function as a Service (FaaS) is a category of cloud computing services that provides a platform allowing customers to develop, run, and manage application functionalities without the complexity of building and maintaining the infrastructure.',
    example: 'They used a FaaS provider like AWS Lambda to run a function that resizes images whenever a new one is uploaded, without needing a dedicated server.'
  },
  {
    id: 'failover',
    term: 'Failover',
    slug: 'failover',
    definition: 'Failover is the process of automatically switching to a standby computer, system, or network upon the failure or abnormal termination of the previously active one.',
    example: 'The database was configured with automatic failover, so if the primary server goes down, the backup server takes over instantly.'
  },
  {
    id: 'fde',
    term: 'FDE',
    slug: 'fde',
    definition: 'Full Disk Encryption (FDE) is a security measure that encrypts an entire hard drive, including the operating system and all user files.',
    example: 'He enabled FDE on his laptop using BitLocker to protect his data in case the device was lost or stolen.'
  },
  {
    id: 'fedora',
    term: 'Fedora',
    slug: 'fedora',
    definition: 'Fedora is a Linux distribution developed by the community-supported Fedora Project and sponsored by Red Hat. It is known for its focus on innovation and integrating new technologies.',
    example: 'Developers often use Fedora to get early access to the latest open-source software and kernel features.'
  },
  {
    id: 'fiber-channel',
    term: 'Fiber Channel',
    slug: 'fiber-channel',
    definition: 'Fiber Channel is a high-speed data transfer protocol providing in-order, lossless delivery of raw block data, primarily used to connect computer data storage to servers in storage area networks (SAN).',
    example: 'The enterprise data center used a Fibre Channel SAN to provide fast and reliable block storage to all its application servers.'
  },
  {
    id: 'fips',
    term: 'FIPS',
    slug: 'fips',
    definition: 'Federal Information Processing Standards (FIPS) are publicly announced standards developed by the United States federal government for use in computer systems by non-military government agencies and government contractors.',
    example: 'The software had to be run in FIPS-compliant mode to be used in the government agency, which meant only using approved cryptographic algorithms.'
  },
  {
    id: 'firewall-ruleset',
    term: 'Firewall Ruleset',
    slug: 'firewall-ruleset',
    definition: 'The Firewall Ruleset is the collection of rules configured on a firewall that determines whether network traffic should be allowed or blocked.',
    example: 'The administrator updated the firewall ruleset to allow employees to access the new cloud application on port 443.'
  },
  {
    id: 'firmware',
    term: 'Firmware',
    slug: 'firmware',
    definition: 'Firmware is a specific class of computer software that provides low-level control for a device\'s specific hardware.',
    example: 'He had to update the router\'s firmware to patch a security vulnerability and get new features.'
  },
  {
    id: 'flapping-network',
    term: 'Flapping (Network)',
    slug: 'flapping-network',
    definition: 'In networking, Flapping (Network) refers to a condition where a network link or interface repeatedly goes up and down, causing routing instability.',
    example: 'The network was unstable because the connection to the remote office was flapping, causing frequent outages.'
  },
  {
    id: 'flask',
    term: 'Flask',
    slug: 'flask',
    definition: 'Flask is a micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.',
    example: 'She built a simple REST API for her project using Flask because it was lightweight and easy to get started with.'
  },
  {
    id: 'floc',
    term: 'FLoC',
    slug: 'floc',
    definition: 'Federated Learning of Cohorts (FLoC) is a privacy-focused web standard proposal by Google for interest-based advertising, intended as a replacement for third-party cookies.',
    example: 'Advertisers were interested in FLoC as a way to show relevant ads without tracking individual users across websites.'
  },
  {
    id: 'foss',
    term: 'FOSS',
    slug: 'foss',
    definition: 'Free and Open-Source Software (FOSS) is software that is both free software (freedom to use, study, and modify) and open-source software (source code is publicly available).',
    example: 'Linux is a prime example of FOSS, with a global community of developers contributing to its source code.'
  },
  {
    id: 'fqdn',
    term: 'FQDN',
    slug: 'fqdn',
    definition: 'A Fully Qualified Domain Name (FQDN) is the complete domain name for a specific computer, or host, on the internet.',
    example: 'While `\'\'\'mail\'\'\'` might be the hostname, `\'\'\'mail.example.com\'\'\'` is the FQDN.'
  },
  {
    id: 'fragmentation',
    term: 'Fragmentation',
    slug: 'fragmentation',
    definition: 'Disk Fragmentation occurs when a file is stored in separate, non-contiguous areas on a hard disk drive, which can slow down data access.',
    example: 'He ran a defragmentation utility on his old hard drive to consolidate files and improve performance.'
  },
  {
    id: 'framework',
    term: 'Framework',
    slug: 'framework',
    definition: 'A software Framework is a reusable set of libraries or classes for a software system or subsystem, providing a structure to build an application.',
    example: 'Instead of writing everything from scratch, he used the Ruby on Rails framework to build his web application more quickly.'
  },
  {
    id: 'freebsd',
    term: 'FreeBSD',
    slug: 'freebsd',
    definition: 'FreeBSD is a free and open-source Unix-like operating system descended from the Berkeley Software Distribution (BSD), known for its stability and performance.',
    example: 'Many high-traffic websites and appliances use FreeBSD under the hood because of its robust networking stack.'
  },
  {
    id: 'frontend-build',
    term: 'Frontend Build',
    slug: 'frontend-build',
    definition: 'The Frontend Build is the process of compiling, transforming, and bundling web assets (like JavaScript, CSS, and images) into optimized files for a web browser.',
    example: 'The frontend build process uses Webpack to transpile modern JavaScript and minify the CSS files.'
  },
  {
    id: 'ftp-passive-mode',
    term: 'FTP Passive Mode',
    slug: 'ftp-passive-mode',
    definition: 'FTP Passive Mode is a mode for FTP connections where the client, rather than the server, initiates the data connection, which helps bypass firewalls on the client side.',
    example: 'He couldn\'t connect to the FTP server until he configured his client to use passive mode.'
  },
  {
    id: 'full-duplex',
    term: 'Full-Duplex',
    slug: 'full-duplex',
    definition: 'Full-Duplex is the transmission of data in two directions simultaneously. An example is a telephone call, where both parties can speak and be heard at the same time.',
    example: 'Modern Ethernet networks operate in full-duplex mode, allowing devices to send and receive data at the same time.'
  },
  {
    id: 'garbage-collector',
    term: 'Garbage Collector',
    slug: 'garbage-collector',
    definition: 'A Garbage Collector is a form of automatic memory management that attempts to reclaim memory occupied by objects that are no longer in use by the program.',
    example: 'Programming languages like Java and C# have a garbage collector, which frees developers from manually managing memory allocation.'
  },
  {
    id: 'gcc',
    term: 'GCC',
    slug: 'gcc',
    definition: 'GNU Compiler Collection (GCC) is a compiler system produced by the GNU Project supporting various programming languages.',
    example: 'He compiled his C++ program from the command line using `g++`, which is part of the GCC toolkit.'
  },
  {
    id: 'gdb',
    term: 'GDB',
    slug: 'gdb',
    definition: 'GNU Debugger (GDB) is a portable debugger that runs on many Unix-like systems and works for many programming languages, including C, C++, and Go.',
    example: 'The programmer used GDB to step through his code line by line and inspect the value of variables to find the source of the crash.'
  },
  {
    id: 'geofencing',
    term: 'Geofencing',
    slug: 'geofencing',
    definition: 'Geofencing is a location-based service in which an app or other software uses GPS, RFID, Wi-Fi or cellular data to trigger a pre-programmed action when a mobile device enters or exits a virtual boundary.',
    example: 'The app used geofencing to send a "Welcome home!" notification when the user\'s phone entered the virtual boundary around their house.'
  },
  {
    id: 'geth-ethereum',
    term: 'Geth (Ethereum)',
    slug: 'geth-ethereum',
    definition: 'Go Ethereum (Geth (Ethereum)) is one of the original and most popular command-line clients for the Ethereum blockchain, written in the Go programming language.',
    example: 'To interact with the Ethereum network directly, he installed Geth and synchronized a full node on his server.'
  },
  {
    id: 'git-merge',
    term: 'Git Merge',
    slug: 'git-merge',
    definition: 'In Git, Git Merge is the process of taking the changes from one branch and integrating them into another branch.',
    example: 'After his feature was complete, he performed a Git merge to combine his `feature-branch` back into the `main` branch.'
  },
  {
    id: 'git-rebase',
    term: 'Git Rebase',
    slug: 'git-rebase',
    definition: 'In Git, Git Rebase is the process of moving or combining a sequence of commits to a new base commit, often to create a cleaner, more linear project history.',
    example: 'Instead of merging, she used `git rebase` to update her feature branch with the latest changes from the main branch, avoiding a merge commit.'
  },
  {
    id: 'git-stash',
    term: 'Git Stash',
    slug: 'git-stash',
    definition: 'A Git Stash is a command that temporarily shelves (or stashes) changes you\'ve made to your working copy so you can work on something else, and then come back and re-apply them later on.',
    example: 'He used `git stash` to save his unfinished changes so he could quickly switch to another branch to fix an urgent bug.'
  },
  {
    id: 'gitlab-runner',
    term: 'GitLab Runner',
    slug: 'gitlab-runner',
    definition: 'A GitLab Runner is an application that works with GitLab CI/CD to run jobs in a pipeline.',
    example: 'They set up a GitLab Runner on their own server to run the automated tests for their project whenever new code was pushed.'
  },
  {
    id: 'gke',
    term: 'GKE',
    slug: 'gke',
    definition: 'Google Kubernetes Engine (GKE) is a managed environment for deploying, managing, and scaling containerized applications using Google infrastructure.',
    example: 'The company migrated its microservices from on-premise servers to GKE to take advantage of automatic scaling and management.'
  },
  {
    id: 'gpg',
    term: 'GPG',
    slug: 'gpg',
    definition: 'GNU Privacy Guard (GPG) is a free software replacement for Symantec\'s PGP cryptographic software suite, used for encrypting and signing data and communications.',
    example: 'He used GPG to encrypt the sensitive file before emailing it to ensure only the intended recipient could open it.'
  },
  {
    id: 'gpu-passthrough',
    term: 'GPU Passthrough',
    slug: 'gpu-passthrough',
    definition: 'GPU Passthrough is a technology that allows a virtual machine (VM) to have direct access to a physical GPU, providing near-native graphics performance.',
    example: 'He configured GPU passthrough on his server to give his Windows VM direct control of the Nvidia card for gaming.'
  },
  {
    id: 'grub',
    term: 'GRUB',
    slug: 'grub',
    definition: 'GRand Unified Bootloader (GRUB) is a popular bootloader from the GNU Project that is used to start one of multiple operating systems installed on a computer.',
    example: 'When he started his dual-boot machine, the GRUB menu appeared, asking him to choose between Linux and Windows.'
  },
  {
    id: 'grpc',
    term: 'gRPC',
    slug: 'grpc',
    definition: 'gRPC is a high-performance, open-source universal RPC (Remote Procedure Call) framework developed by Google, often used for communication between microservices.',
    example: 'The backend services communicate with each other using gRPC because it\'s faster and more efficient than traditional REST APIs.'
  },
  {
    id: 'gui-thread',
    term: 'GUI Thread',
    slug: 'gui-thread',
    definition: 'The GUI Thread is the main thread in a graphical application responsible for handling user input and drawing the user interface.',
    example: 'Running a long-lasting task on the GUI thread will freeze the application, so it should be moved to a separate background thread.'
  },
  {
    id: 'hackintosh',
    term: 'Hackintosh',
    slug: 'hackintosh',
    definition: 'A Hackintosh is a non-Apple computer that is modified to run Apple\'s macOS operating system.',
    example: 'He built a powerful Hackintosh with custom PC parts for video editing, which was much cheaper than buying a real Mac Pro.'
  },
  {
    id: 'handshake-protocol',
    term: 'Handshake Protocol',
    slug: 'handshake-protocol',
    definition: 'A Handshake Protocol is a process in networking where two communicating devices agree on protocols and parameters for communication before any data is transferred. An example is the TCP three-way handshake.',
    example: 'The SSL/TLS handshake protocol securely negotiates the encryption keys that will be used to protect the web traffic.'
  },
  {
    id: 'hard-fork',
    term: 'Hard Fork',
    slug: 'hard-fork',
    definition: 'In blockchain, a Hard Fork is a radical change to a network\'s protocol that makes previously invalid blocks/transactions valid—or vice-versa. All nodes or users must upgrade to the latest version of the protocol software.',
    example: 'The Ethereum hard fork was necessary to implement a major upgrade, but it created a new version of the blockchain that was not backward-compatible.'
  },
  {
    id: 'hash-collision',
    term: 'Hash Collision',
    slug: 'hash-collision',
    definition: 'A Hash Collision occurs when two different pieces of data produce the exact same output from a hash function.',
    example: 'Although rare for good algorithms, a hash collision can be a security risk if an attacker can create a malicious file with the same hash as a legitimate one.'
  },
  {
    id: 'hashing-algorithm',
    term: 'Hashing Algorithm',
    slug: 'hashing-algorithm',
    definition: 'A Hashing Algorithm is a function that converts an input of any size into a fixed-size string of text, called a hash. Examples include MD5, SHA-1, and SHA-256.',
    example: 'When you download a file, you can verify its integrity by comparing its checksum with the one generated by a hashing algorithm like SHA-256.'
  },
  {
    id: 'hci',
    term: 'HCI',
    slug: 'hci',
    definition: 'Hyper-Converged Infrastructure (HCI) is a software-defined IT infrastructure that virtualizes all of the elements of conventional "hardware-defined" systems, including compute, storage, and networking.',
    example: 'The company replaced its separate server, storage, and networking hardware with a single HCI solution to simplify management.'
  },
  {
    id: 'headless-mode',
    term: 'Headless Mode',
    slug: 'headless-mode',
    definition: 'Headless Mode refers to running a program without a graphical user interface (GUI). This is common for servers and automated tasks.',
    example: 'He ran a headless version of the Chrome browser on his server to automate taking screenshots of websites.'
  },
  {
    id: 'heap-memory',
    term: 'Heap Memory',
    slug: 'heap-memory',
    definition: 'A Heap Memory is a region of a computer\'s memory used for dynamic memory allocation, where objects are stored when a program is running.',
    example: 'In C++, objects created with the `new` keyword are allocated on the heap, and must be manually deleted to avoid memory leaks.'
  },
  {
    id: 'hf-radio',
    term: 'HF Radio',
    slug: 'hf-radio',
    definition: 'High Frequency (HF Radio) refers to the range of radio frequencies between 3 and 30 megahertz, often used for long-distance communication.',
    example: 'Amateur radio operators use HF radio to talk to people all over the world by bouncing signals off the ionosphere.'
  },
  {
    id: 'hibernate-os',
    term: 'Hibernate (OS)',
    slug: 'hibernate-os',
    definition: 'Hibernate (OS) is a power-saving state that saves the contents of your computer\'s RAM to the hard disk and then completely powers off the computer.',
    example: 'He used hibernate instead of sleep mode for his laptop because it uses zero power while preserving his open applications.'
  },
  {
    id: 'hmac',
    term: 'HMAC',
    slug: 'hmac',
    definition: 'A Hash-based Message Authentication Code (HMAC) is a type of message authentication code involving a cryptographic hash function and a secret key, used to verify both the data integrity and authenticity of a message.',
    example: 'The API uses HMAC to sign requests, ensuring they haven\'t been tampered with and are coming from a trusted client.'
  },
  {
    id: 'homebrew',
    term: 'Homebrew',
    slug: 'homebrew',
    definition: 'Homebrew is a free and open-source software package management system that simplifies the installation of software on Apple\'s macOS operating system.',
    example: 'He installed the latest version of Python on his Mac using the Homebrew command: `brew install python`.'
  },
  {
    id: 'hook-programming',
    term: 'Hook (Programming)',
    slug: 'hook-programming',
    definition: 'A Hook (Programming) is a mechanism in programming that allows a developer to intercept or augment the behavior of a program or framework at specific points in its execution.',
    example: 'He used a webhook to receive a notification in Slack every time a new commit was pushed to the Git repository.'
  },
  {
    id: 'hotfix',
    term: 'Hotfix',
    slug: 'hotfix',
    definition: 'A Hotfix is a small piece of code created to address a specific bug or critical issue in a live production environment, often released outside of the normal update cycle.',
    example: 'The team had to deploy a hotfix over the weekend to patch a major security vulnerability on their website.'
  },
  {
    id: 'hsm',
    term: 'HSM',
    slug: 'hsm',
    definition: 'A Hardware Security Module (HSM) is a physical computing device that safeguards and manages digital keys and performs encryption and decryption functions.',
    example: 'The bank stores its most critical cryptographic keys in an HSM to prevent them from ever being accessed in software.'
  },
  {
    id: 'html5-canvas',
    term: 'HTML5 Canvas',
    slug: 'html5-canvas',
    definition: 'The HTML5 Canvas element is used to draw graphics, on the fly, via scripting (usually JavaScript).',
    example: 'He created an interactive browser-based game using the HTML5 Canvas to render all the graphics and animations.'
  },
  {
    id: 'http-2',
    term: 'HTTP/2',
    slug: 'http-2',
    definition: 'HTTP/2 is a major revision of the HTTP network protocol used by the World Wide Web. It enables a more efficient connection between web servers and browsers through features like multiplexing and server push.',
    example: 'After upgrading their server to support HTTP/2, their website loaded much faster because the browser could download multiple files over a single connection.'
  },
  {
    id: 'hyperthreading',
    term: 'HyperThreading',
    slug: 'hyperthreading',
    definition: 'HyperThreading is Intel\'s proprietary technology for simultaneous multithreading (SMT), which allows a single physical CPU core to appear as two logical cores to the operating system.',
    example: 'His 4-core CPU with Hyper-Threading showed up as 8 cores in the Task Manager, improving multitasking performance.'
  },
  {
    id: 'io-wait',
    term: 'I/O Wait',
    slug: 'io-wait',
    definition: 'I/O Wait is a measurement of the time the CPU is idle because it is waiting for an Input/Output operation (like reading from a disk or network) to complete.',
    example: 'The server\'s CPU usage was low, but the I/O Wait was very high, indicating a bottleneck with the slow storage system.'
  },
  {
    id: 'iam',
    term: 'IAM',
    slug: 'iam',
    definition: 'Identity and Access Management (IAM) is a framework of policies and technologies for ensuring that the right users have the appropriate access to technology resources.',
    example: 'He configured an IAM policy in AWS to grant the developer read-only access to the S3 bucket.'
  },
  {
    id: 'icmp',
    term: 'ICMP',
    slug: 'icmp',
    definition: 'Internet Control Message Protocol (ICMP) is a network protocol used by network devices to send error messages and operational information indicating, for example, that a requested service is not available or that a host or router could not be reached.',
    example: 'The `ping` command uses ICMP echo request and echo reply packets to check if a host is reachable on a network.'
  },
  {
    id: 'ide-cable',
    term: 'IDE Cable',
    slug: 'ide-cable',
    definition: 'An Integrated Drive Electronics (IDE Cable) is a wide, flat ribbon cable used to connect older hard drives and optical drives to the motherboard.',
    example: 'He found an old IDE cable in his box of computer parts, a relic from before SATA became the standard.'
  },
  {
    id: 'idrac',
    term: 'iDRAC',
    slug: 'idrac',
    definition: 'Integrated Dell Remote Access Controller (iDRAC) is a management platform embedded on Dell servers that allows for remote, out-of-band management of the server.',
    example: 'The server wouldn\'t boot, so the admin used iDRAC to remotely access its console and diagnose the problem without being physically present.'
  },
  {
    id: 'ilp32',
    term: 'ILP32',
    slug: 'ilp32',
    definition: 'ILP32 is a data model where `int`, `long`, and pointers are 32 bits wide. It\'s a common data model for 32-bit Unix-like systems.',
    example: 'The legacy application was compiled for an ILP32 architecture, which caused issues when they tried to run it on a modern 64-bit system.'
  },
  {
    id: 'immutable-file',
    term: 'Immutable File',
    slug: 'immutable-file',
    definition: 'An Immutable File is a file that cannot be changed or deleted once it has been created. This is often used for security and data integrity.',
    example: 'He set the immutable flag on the critical configuration file to prevent anyone, even the root user, from accidentally modifying it.'
  },
  {
    id: 'import-map',
    term: 'Import Map',
    slug: 'import-map',
    definition: 'An Import Map is a web platform feature that allows developers to control the behavior of JavaScript imports, mapping module specifiers to different URLs.',
    example: 'Using an import map, he could write `import "react"` in his code, and the browser would know to fetch it from a specific CDN URL.'
  },
  {
    id: 'infix-expression',
    term: 'Infix Expression',
    slug: 'infix-expression',
    definition: 'An Infix Expression is an expression where operators are written in-between their operands, which is the standard way humans write mathematical expressions.',
    example: 'The expression `3 + 4` is an infix expression, whereas its postfix equivalent is `3 4 +`.'
  },
  {
    id: 'ingress',
    term: 'Ingress',
    slug: 'ingress',
    definition: 'In networking, Ingress refers to traffic that enters a network. In Kubernetes, an Ingress is an API object that manages external access to the services in a cluster, typically HTTP.',
    example: 'He configured an Ingress controller to route traffic from `example.com` to the web server service running inside the Kubernetes cluster.'
  },
  {
    id: 'init-system',
    term: 'Init System',
    slug: 'init-system',
    definition: 'The Init System is the first process started by the kernel during the booting of a computer. It is responsible for starting all other processes.',
    example: 'Modern Linux distributions like Ubuntu use `systemd` as their init system, while older ones used `SysVinit`.'
  },
  {
    id: 'inode',
    term: 'Inode',
    slug: 'inode',
    definition: 'An Inode is a data structure on a Unix-style filesystem that stores all the information about a file or directory, except its name and actual data.',
    example: 'The `ls -i` command displays the inode number for each file, showing the underlying data structure that points to the file\'s content.'
  },
  {
    id: 'instancing',
    term: 'Instancing',
    slug: 'instancing',
    definition: 'In computer graphics, Instancing is the practice of rendering multiple copies of the same object in a scene at once using a single draw call, which is much more efficient.',
    example: 'The game engine used instancing to render the entire forest of thousands of trees with high performance.'
  },
  {
    id: 'interrupt-request-irq',
    term: 'Interrupt Request (IRQ)',
    slug: 'interrupt-request-irq',
    definition: 'An Interrupt Request (IRQ) is a signal sent from a hardware device to the CPU to get its attention, temporarily stopping the CPU\'s current task to handle the request.',
    example: 'When you press a key on your keyboard, it sends an IRQ to the processor to signal that there is new input to be processed.'
  },
  {
    id: 'iot-hub',
    term: 'IoT Hub',
    slug: 'iot-hub',
    definition: 'An IoT Hub is a managed cloud service that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages.',
    example: 'All the smart temperature sensors in the factory send their data to the Azure IoT Hub for processing and monitoring.'
  },
  {
    id: 'ip-spoofing',
    term: 'IP Spoofing',
    slug: 'ip-spoofing',
    definition: 'IP Spoofing is the creation of Internet Protocol (IP) packets with a forged source IP address, for the purpose of hiding the identity of the sender or impersonating another computing system.',
    example: 'DDoS attacks often use IP spoofing to hide the true origin of the malicious traffic.'
  },
  {
    id: 'ipsec',
    term: 'IPSec',
    slug: 'ipsec',
    definition: 'Internet Protocol Security (IPSec) is a secure network protocol suite that authenticates and encrypts the packets of data sent over an Internet Protocol network. It is often used in VPNs.',
    example: 'The company VPN uses IPSec to create a secure, encrypted tunnel from the employee\'s laptop to the corporate network.'
  },
  {
    id: 'ipvs',
    term: 'IPVS',
    slug: 'ipvs',
    definition: 'IP Virtual Server (IPVS) is built on top of the Netfilter framework, it implements transport-layer load balancing as part of the Linux kernel.',
    example: 'Kubernetes can use IPVS mode for its services to provide high-performance load balancing for network traffic.'
  },
  {
    id: 'iscsi',
    term: 'iSCSI',
    slug: 'iscsi',
    definition: 'Internet Small Computer Systems Interface (iSCSI) is a protocol that allows clients to send SCSI commands over TCP/IP networks, enabling storage devices to be accessed over a standard Ethernet network.',
    example: 'The server connected to its storage array using iSCSI, which made the remote storage appear as a local disk.'
  },
  {
    id: 'iso-image',
    term: 'ISO Image',
    slug: 'iso-image',
    definition: 'An ISO Image is an archive file of an optical disc, a type of disk image composed of the data contents from every written sector on an optical disc, including the file system.',
    example: 'He downloaded the Ubuntu ISO image and used it to create a bootable USB drive to install the operating system.'
  },
  {
    id: 'iterables',
    term: 'Iterables',
    slug: 'iterables',
    definition: 'In programming, an Iterables is an object that can be "iterated" over, meaning you can traverse through all the values. Examples include arrays, strings, and maps.',
    example: 'In Python, you can use a `for` loop to go through any iterable, like a list or a tuple.'
  },
  {
    id: 'iterm',
    term: 'iTerm',
    slug: 'iterm',
    definition: 'iTerm2 is a popular replacement for Apple\'s Terminal and the successor to iTerm. It offers features like split panes, search, and autocomplete.',
    example: 'Many macOS developers prefer iTerm over the default terminal because of its advanced customization and features.'
  },
  {
    id: 'jar',
    term: 'JAR',
    slug: 'jar',
    definition: 'A Java Archive (JAR) is a package file format typically used to aggregate many Java class files and associated metadata and resources into one file for distribution.',
    example: 'He deployed the web application by simply copying the executable JAR file to the server and running it.'
  },
  {
    id: 'jdk',
    term: 'JDK',
    slug: 'jdk',
    definition: 'The Java Development Kit (JDK) is an implementation of the Java Platform that provides a compiler, a JVM, and other tools necessary for developing Java applications.',
    example: 'To compile the Java code, he first had to install the latest version of the JDK on his machine.'
  },
  {
    id: 'jitter',
    term: 'Jitter',
    slug: 'jitter',
    definition: 'In networking, Jitter is the variation in the time delay of received packets. High jitter can cause problems for real-time applications like voice calls and video streaming.',
    example: 'The video conference was choppy because of high network jitter, causing the audio and video to arrive out of sync.'
  },
  {
    id: 'json-schema',
    term: 'JSON Schema',
    slug: 'json-schema',
    definition: 'A JSON Schema is a vocabulary that allows you to annotate and validate JSON documents, ensuring the data is in the correct format.',
    example: 'The API used a JSON Schema to validate incoming requests, automatically rejecting any that were missing required fields.'
  },
  {
    id: 'jwt',
    term: 'JWT',
    slug: 'jwt',
    definition: 'A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties. It is often used for authentication and information exchange.',
    example: 'After logging in, the server gave the client a JWT, which the client then included in the header of all subsequent requests to prove it was authenticated.'
  },
  {
    id: 'jupyter-kernel',
    term: 'Jupyter Kernel',
    slug: 'jupyter-kernel',
    definition: 'A Jupyter Kernel is a "computational engine" that runs code in a specific programming language and returns output to be displayed in a Jupyter Notebook.',
    example: 'He switched the Jupyter kernel from Python to R to run some statistical analysis in the same notebook.'
  },
  {
    id: 'kafka-broker',
    term: 'Kafka Broker',
    slug: 'kafka-broker',
    definition: 'A Kafka Broker is a server in an Apache Kafka cluster that stores data in topics and serves client requests for producing and consuming that data.',
    example: 'Their Kafka cluster consisted of three brokers to ensure high availability and load distribution.'
  },
  {
    id: 'kali-linux',
    term: 'Kali Linux',
    slug: 'kali-linux',
    definition: 'Kali Linux is a Debian-derived Linux distribution designed for digital forensics and penetration testing.',
    example: 'The cybersecurity analyst booted into Kali Linux to use its pre-installed tools for the network penetration test.'
  },
  {
    id: 'kernel-panic',
    term: 'Kernel Panic',
    slug: 'kernel-panic',
    definition: 'A Kernel Panic is a safety measure taken by an operating system\'s kernel upon detecting an internal fatal error from which it cannot safely recover. It is the equivalent of a Blue Screen of Death in Windows.',
    example: 'The system experienced a kernel panic and crashed after he installed the faulty hardware driver.'
  },
  {
    id: 'kernel-space',
    term: 'Kernel Space',
    slug: 'kernel-space',
    definition: 'The Kernel Space is the memory area where the core of the operating system (the kernel) resides and has unrestricted access to all hardware.',
    example: 'Device drivers run in kernel space, which is why a buggy driver can crash the entire operating system.'
  },
  {
    id: 'key-derivation-function',
    term: 'Key Derivation Function',
    slug: 'key-derivation-function',
    definition: 'A Key Derivation Function is a cryptographic function that derives one or more secret keys from a secret value such as a master key or a password.',
    example: 'The application uses a KDF like PBKDF2 to turn the user\'s password into a strong encryption key, making it resistant to brute-force attacks.'
  },
  {
    id: 'kms-key-management-service',
    term: 'KMS',
    slug: 'kms-key-management-service',
    definition: 'A Key Management Service (KMS) is a managed service that makes it easy for you to create and control the encryption keys used to encrypt your data. AWS KMS is a popular example.',
    example: 'They stored their database encryption keys in a KMS to securely manage their lifecycle, including creation, rotation, and deletion.'
  },
  {
    id: 'kubernetes-pod',
    term: 'Kubernetes Pod',
    slug: 'kubernetes-pod',
    definition: 'The Kubernetes Pod is the smallest and simplest unit in the Kubernetes object model that you create or deploy. A Pod represents a running process on your cluster and can contain one or more containers.',
    example: 'The web application was deployed as a Pod containing both the main web server container and a logging sidecar container.'
  },
  {
    id: 'l2-l3-switch',
    term: 'L2/L3 Switch',
    slug: 'l2-l3-switch',
    definition: 'A Layer 2 (L2) switch operates at the data link layer of the OSI model, forwarding traffic based on MAC addresses. A Layer 3 (L3) switch adds routing capabilities, forwarding traffic based on IP addresses.',
    example: 'They used an L2 switch for basic device connectivity within the same subnet, but a more expensive L3 switch to route traffic between different VLANs.'
  },
  {
    id: 'lamp-stack',
    term: 'LAMP Stack',
    slug: 'lamp-stack',
    definition: 'A LAMP Stack (Linux, Apache, MySQL, and PHP/Python/Perl) is a popular open-source web development stack.',
    example: 'WordPress, a popular content management system, is traditionally run on a LAMP stack.'
  },
  {
    id: 'latency-spikes',
    term: 'Latency Spikes',
    slug: 'latency-spikes',
    definition: 'Latency Spikes are sudden, temporary increases in the time it takes for a data packet to travel from its source to its destination.',
    example: 'Online gaming is unplayable with latency spikes, as the game will appear to freeze and then suddenly jump forward in time.'
  },
  {
    id: 'ldap',
    term: 'LDAP',
    slug: 'ldap',
    definition: 'Lightweight Directory Access Protocol (LDAP) is an open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an IP network.',
    example: 'The company uses LDAP to centralize user authentication, allowing employees to use the same username and password for multiple applications.'
  },
  {
    id: 'led-pointer',
    term: 'LED Pointer',
    slug: 'led-pointer',
    definition: 'In C programming, this term is slang for a pointer that has been set to a nonsensical or "glowing" value for debugging, rather than a valid memory address.',
    example: 'He set the pointer to `0xDEADBEEF`, a classic LED pointer value, to easily spot it in the debugger.'
  },
  {
    id: 'lfs-large-file-storage',
    term: 'LFS',
    slug: 'lfs-large-file-storage',
    definition: 'Large File Storage (LFS) is a Git extension that replaces large files such as audio samples, videos, and datasets with text pointers inside Git, while storing the file contents on a remote server.',
    example: 'The game developers used Git LFS to version their large 3D models and textures without bloating the main Git repository.'
  },
  {
    id: 'lifo',
    term: 'LIFO',
    slug: 'lifo',
    definition: 'Last-In, First-Out (LIFO) is a method for handling data structures where the last element added is the first one to be removed. A stack is a LIFO data structure.',
    example: 'The browser\'s back button works like a LIFO stack; the last page you visited is the first one you return to.'
  },
  {
    id: 'linter',
    term: 'Linter',
    slug: 'linter',
    definition: 'A Linter is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.',
    example: 'The development team configured a linter to enforce a consistent coding style across the entire codebase.'
  },
  {
    id: 'llvm',
    term: 'LLVM',
    slug: 'llvm',
    definition: 'LLVM is a collection of modular and reusable compiler and toolchain technologies used to build compilers, debuggers, and other programming tools.',
    example: 'Apple\'s Swift programming language uses the LLVM compiler infrastructure to generate optimized machine code.'
  },
  {
    id: 'load-balancer',
    term: 'Load Balancer',
    slug: 'load-balancer',
    definition: 'A Load Balancer is a device or software that distributes network or application traffic across a number of servers to improve responsiveness and availability.',
    example: 'The website handled the traffic spike by using a load balancer to distribute requests evenly across three web servers.'
  },
  {
    id: 'localhost',
    term: 'Localhost',
    slug: 'localhost',
    definition: 'Localhost refers to the current computer. It has the default IP address 127.0.0.1 and is used to access network services that are running on the host itself.',
    example: 'A web developer typically tests their website by accessing `http://localhost:3000` in their browser.'
  },
  {
    id: 'logic-gate',
    term: 'Logic Gate',
    slug: 'logic-gate',
    definition: 'A Logic Gate is a basic building block of a digital circuit. Most logic gates have two inputs and one output, and they perform a basic logical function like AND, OR, or NOT.',
    example: 'CPUs are made up of billions of tiny transistors that form logic gates to perform calculations.'
  },
  {
    id: 'logrotate',
    term: 'Logrotate',
    slug: 'logrotate',
    definition: 'Logrotate is a system utility that automates the management of log files, including rotation, compression, removal, and mailing of log files.',
    example: 'He configured `logrotate` to archive the server\'s access logs every week and delete any logs older than a month.'
  },
  {
    id: 'lru-cache',
    term: 'LRU Cache',
    slug: 'lru-cache',
    definition: 'Least Recently Used (LRU Cache) is a cache replacement algorithm that discards the least recently used items first when the cache is full.',
    example: 'The web browser uses an LRU cache for images; when it gets full, it removes the images from websites you haven\'t visited in a while.'
  },
  {
    id: 'lvm',
    term: 'LVM',
    slug: 'lvm',
    definition: 'Logical Volume Management (LVM) is a framework for managing storage devices in a flexible way on Linux. It allows for creating, resizing, and merging partitions.',
    example: 'He used LVM to combine two physical hard drives into a single, larger logical volume.'
  },
  {
    id: 'machine-image',
    term: 'Machine Image',
    slug: 'machine-image',
    definition: 'A Machine Image is a single file that contains a complete copy of a computer\'s storage, including the operating system, applications, and all data.',
    example: 'In AWS, an Amazon Machine Image (AMI) is used as a template to launch new virtual server instances.'
  },
  {
    id: 'mac-table',
    term: 'MAC Table',
    slug: 'mac-table',
    definition: 'A MAC address table, or CAM table, is used by network switches to map the hardware MAC addresses of devices to the physical ports on the switch.',
    example: 'The switch learns which devices are connected to which ports by inspecting incoming frames and building its MAC table.'
  },
  {
    id: 'macro-assembler',
    term: 'Macro (Assembler)',
    slug: 'macro-assembler',
    definition: 'In assembly language, a Macro (Assembler) is a named block of code that can be inserted into a program. It\'s a way to reuse common sequences of instructions.',
    example: 'He wrote a macro to handle the standard function entry and exit code, which simplified his assembly program.'
  },
  {
    id: 'mainframe',
    term: 'Mainframe',
    slug: 'mainframe',
    definition: 'A Mainframe is a large, powerful computer, typically used by large organizations for critical applications, bulk data processing, such as census, industry and consumer statistics, and financial transaction processing.',
    example: 'Banks still rely on mainframes for their core transaction processing systems because of their high reliability and throughput.'
  },
  {
    id: 'makefile',
    term: 'Makefile',
    slug: 'makefile',
    definition: 'A Makefile is a special file containing a set of directives used by the `make` build automation tool to compile and build a software project.',
    example: 'By simply typing `make` in the terminal, the Makefile provided all the necessary commands to compile the C++ source code into an executable.'
  },
  {
    id: 'man-in-the-middle',
    term: 'Man-in-the-Middle',
    slug: 'man-in-the-middle',
    definition: 'A Man-in-the-Middle is a cyberattack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other.',
    example: 'An attacker on a public Wi-Fi network performed a MITM attack to intercept unencrypted login credentials.'
  },
  {
    id: 'mariadb',
    term: 'MariaDB',
    slug: 'mariadb',
    definition: 'MariaDB is a community-developed, commercially supported fork of the MySQL relational database management system, intended to remain free and open-source.',
    example: 'After Oracle acquired MySQL, many developers switched to MariaDB as a drop-in replacement.'
  },
  {
    id: 'markup',
    term: 'Markup',
    slug: 'markup',
    definition: 'Markup is a system for annotating a document in a way that is syntactically distinguishable from the text, such as HTML for web pages.',
    example: 'HTML is a markup language that uses tags like `<p>` and `<h1>` to define the structure of a web page.'
  },
  {
    id: 'mbr-vs-gpt',
    term: 'MBR vs GPT',
    slug: 'mbr-vs-gpt',
    definition: 'Master Boot Record vs GUID Partition Table (MBR vs GPT) are two different ways of storing the partitioning information on a drive. GPT is the modern standard, supporting larger drives and more partitions.',
    example: 'He converted the disk from MBR to GPT so he could install Windows on a drive larger than 2TB.'
  },
  {
    id: 'mdc-hash',
    term: 'MDC Hash',
    slug: 'mdc-hash',
    definition: 'A Modification Detection Code (MDC Hash) is a type of message digest or cryptographic hash function used to verify the integrity of a message.',
    example: 'The system calculated an MDC hash of the file to ensure it had not been tampered with during transit.'
  },
  {
    id: 'memory-leak',
    term: 'Memory Leak',
    slug: 'memory-leak',
    definition: 'A Memory Leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in such a way that memory which is no longer needed is not released.',
    example: 'The server application had a memory leak; its RAM usage would slowly increase over time until it eventually crashed.'
  },
  {
    id: 'microcode',
    term: 'Microcode',
    slug: 'microcode',
    definition: 'Microcode is a layer of hardware-level instructions that implement higher-level machine code instructions in a CPU.',
    example: 'Intel released a microcode update to patch the "Spectre" CPU vulnerability at the hardware level.'
  },
  {
    id: 'microfrontend',
    term: 'Microfrontend',
    slug: 'microfrontend',
    definition: 'A Microfrontend is an architectural style where a single web application is composed of multiple smaller, independent frontend applications.',
    example: 'The e-commerce site was built using microfrontends, with separate teams managing the search, cart, and checkout applications.'
  },
  {
    id: 'middleware',
    term: 'Middleware',
    slug: 'middleware',
    definition: 'Middleware is software that lies between an operating system and the applications running on it. It enables communication and data management for distributed applications.',
    example: 'In the web application, a piece of middleware checks if a user is authenticated before allowing them to access a protected route.'
  },
  {
    id: 'mig-nvidia',
    term: 'MIG (Nvidia)',
    slug: 'mig-nvidia',
    definition: 'Multi-Instance GPU (MIG (Nvidia)) is a technology from Nvidia that allows a single GPU to be partitioned into multiple, isolated GPU instances, each with its own memory and compute resources.',
    example: 'They used MIG to partition a powerful A100 GPU into seven smaller instances, allowing multiple data scientists to work on it simultaneously.'
  },
  {
    id: 'mingw',
    term: 'MinGW',
    slug: 'mingw',
    definition: 'Minimalist GNU for Windows (MinGW) is a development environment that provides a port of the GNU Compiler Collection (GCC) and other tools for creating native Windows applications.',
    example: 'He used MinGW to compile his C++ application on Windows without needing to install the full Visual Studio IDE.'
  },
  {
    id: 'mint-linux',
    term: 'Mint Linux',
    slug: 'mint-linux',
    definition: 'Mint Linux is a community-driven Linux distribution based on Ubuntu, known for its user-friendliness and traditional desktop experience.',
    example: 'He installed Linux Mint on his parents\' old laptop because its Cinnamon desktop was easy for them to learn.'
  },
  {
    id: 'mirroring',
    term: 'Mirroring',
    slug: 'mirroring',
    definition: 'In data storage, Mirroring is the replication of data to a separate disk or server in real-time to ensure continuous availability and redundancy. RAID 1 is a common example.',
    example: 'The server used disk mirroring, so if one hard drive failed, the other would have an identical copy of the data.'
  },
  {
    id: 'ml-model-weights',
    term: 'ML Model Weights',
    slug: 'ml-model-weights',
    definition: 'In machine learning, ML Model Weights are the parameters within a model that are learned from data during the training process. They determine the strength of the connection between neurons.',
    example: 'After training the neural network for days, the final ML model weights were saved to a file for later use in making predictions.'
  },
  {
    id: 'mongo-replica-set',
    term: 'Mongo Replica Set',
    slug: 'mongo-replica-set',
    definition: 'A Mongo Replica Set is a group of `mongod` processes that maintain the same data set, providing redundancy and high availability.',
    example: 'Their production MongoDB database was configured as a three-member replica set to handle failures automatically.'
  },
  {
    id: 'monolith',
    term: 'Monolith',
    slug: 'monolith',
    definition: 'A Monolith is a traditional software design model where an application is built as a single, indivisible unit. The opposite of a microservices architecture.',
    example: 'The old application was a monolith, making it difficult to update one part without having to redeploy the entire thing.'
  },
  {
    id: 'mqtt',
    term: 'MQTT',
    slug: 'mqtt',
    definition: 'Message Queuing Telemetry Transport (MQTT) is a lightweight, publish-subscribe network protocol that transports messages between devices, often used for IoT applications.',
    example: 'The smart home sensors use MQTT to publish their temperature readings to a central broker, which then notifies the control panel.'
  },
  {
    id: 'multicast',
    term: 'Multicast',
    slug: 'multicast',
    definition: 'Multicast is a communication method where a piece of information is sent from one or more points to a set of other points. It allows a source to send a single packet to multiple destinations simultaneously.',
    example: 'IPTV services use multicast to efficiently stream live television channels to many subscribers at once without sending individual streams to each one.'
  },
  {
    id: 'multipath-routing',
    term: 'Multipath Routing',
    slug: 'multipath-routing',
    definition: 'Multipath Routing is the practice of using multiple alternative paths through a network, which can increase bandwidth and provide redundancy.',
    example: 'The storage network used multipath routing to ensure that if one connection failed, data could still flow through another path.'
  },
  {
    id: 'mux',
    term: 'MUX',
    slug: 'mux',
    definition: 'A Multiplexer (MUX) is a device that selects one of several analog or digital input signals and forwards the selected input into a single line.',
    example: 'A MUX was used to allow the single ADC to read data from eight different sensors by switching between them rapidly.'
  },
  {
    id: 'mysql-dump',
    term: 'MySQL Dump',
    slug: 'mysql-dump',
    definition: 'A MySQL Dump is a command-line utility used to create a logical backup of a MySQL or MariaDB database, generating a SQL file with `CREATE TABLE` and `INSERT` statements.',
    example: 'He created a MySQL dump of the production database before performing a major software upgrade.'
  },
  {
    id: 'nas',
    term: 'NAS',
    slug: 'nas',
    definition: 'A Network-Attached Storage (NAS) is a dedicated file storage server that provides local-area network nodes with file-based shared storage through a standard Ethernet connection.',
    example: 'He set up a NAS in his home to store all his movies and music, which he could then access from any device on his network.'
  },
  {
    id: 'nat',
    term: 'NAT',
    slug: 'nat',
    definition: 'Network Address Translation (NAT) is a method of remapping one IP address space into another by modifying network address information in the IP header of packets while they are in transit.',
    example: 'Your home router uses NAT to allow multiple devices on your private network to share a single public IP address from your ISP.'
  },
  {
    id: 'nacl-networking-library',
    term: 'NaCl',
    slug: 'nacl-networking-library',
    definition: 'Networking and Cryptography library (NaCl) is a high-speed software library for network communication, encryption, decryption, signatures, etc. Its goal is to provide a simple, high-level API for cryptography.',
    example: 'The chat application used the NaCl library to implement end-to-end encryption for all messages.'
  },
  {
    id: 'ndjson',
    term: 'NDJSON',
    slug: 'ndjson',
    definition: 'Newline Delimited JSON (NDJSON) is a format for storing structured data that allows you to process one record at a time, where each line is a valid JSON value.',
    example: 'The logging service outputs events in NDJSON format, making it easy to stream and process millions of records without loading the entire file into memory.'
  },
  {
    id: 'ner',
    term: 'NER',
    slug: 'ner',
    definition: 'Named-Entity Recognition (NER) is a subtask of information extraction that seeks to locate and classify named entities mentioned in unstructured text into pre-defined categories such as person names, organizations, and locations.',
    example: 'The NLP model used NER to identify all the company names and people mentioned in the news article.'
  },
  {
    id: 'netcat',
    term: 'Netcat',
    slug: 'netcat',
    definition: 'Netcat is a versatile command-line networking utility for reading from and writing to network connections using TCP or UDP.',
    example: 'He used `netcat` to quickly test if the firewall was blocking port 8080 on the server.'
  },
  {
    id: 'netfilter',
    term: 'Netfilter',
    slug: 'netfilter',
    definition: 'Netfilter is a framework provided by the Linux kernel that allows various networking-related operations to be implemented in the form of customized handlers. It is the basis for `iptables` and `nftables`.',
    example: 'The `iptables` firewall utility is actually a user-space tool for configuring the tables provided by the Netfilter framework in the kernel.'
  },
  {
    id: 'nfs',
    term: 'NFS',
    slug: 'nfs',
    definition: 'Network File System (NFS) is a distributed file system protocol that allows a user on a client computer to access files over a computer network much like local storage is accessed.',
    example: 'All the lab computers mounted the shared software directory via NFS from a central server.'
  },
  {
    id: 'nginx-reverse-proxy',
    term: 'nginx Reverse Proxy',
    slug: 'nginx-reverse-proxy',
    definition: 'An nginx Reverse Proxy is a server that sits in front of one or more web servers, forwarding client requests to them. This is useful for load balancing, caching, and SSL termination.',
    example: 'They used nginx as a reverse proxy to handle incoming SSL traffic and distribute requests to several backend application servers.'
  },
  {
    id: 'nim-language',
    term: 'Nim Language',
    slug: 'nim-language',
    definition: 'The Nim Language is a statically typed, compiled systems programming language that is known for its performance, expressive syntax, and ability to compile to C, C++, or JavaScript.',
    example: 'He chose the Nim language for his project because he wanted the performance of C with a more modern and readable syntax.'
  },
  {
    id: 'node-modules',
    term: 'Node Modules',
    slug: 'node-modules',
    definition: 'In a Node.js project, the `node_modules` directory is where all the external dependencies (packages) are stored.',
    example: 'After running `npm install`, the `node_modules` folder was created and filled with all the libraries the project needed.'
  },
  {
    id: 'nonce',
    term: 'Nonce',
    slug: 'nonce',
    definition: 'A Number used once (Nonce) is an arbitrary number that can be used just once in a cryptographic communication. It helps prevent replay attacks.',
    example: 'The server included a nonce in its authentication challenge to ensure the response wasn\'t a captured and replayed old response.'
  },
  {
    id: 'nosql',
    term: 'NoSQL',
    slug: 'nosql',
    definition: 'A NoSQL database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. Examples include document, key-value, and graph databases.',
    example: 'The social media app used a NoSQL database like MongoDB because its flexible schema was better for handling user profile data.'
  },
  {
    id: 'ntfs',
    term: 'NTFS',
    slug: 'ntfs',
    definition: 'New Technology File System (NTFS) is the primary file system used by Microsoft Windows operating systems. It offers improvements over FAT like better security and support for larger files.',
    example: 'He formatted the external hard drive as NTFS so he could store large video files that were over 4GB in size.'
  },
  {
    id: 'ntp',
    term: 'NTP',
    slug: 'ntp',
    definition: 'Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks.',
    example: 'All servers in the cluster were configured to sync their time with an NTP server to prevent issues with logging and distributed transactions.'
  },
  {
    id: 'null-pointer',
    term: 'Null Pointer',
    slug: 'null-pointer',
    definition: 'A Null Pointer is a pointer that does not point to any object or function. Attempting to access the memory location it represents (dereferencing) will usually cause a program to crash.',
    example: 'The program crashed with a "null pointer exception" because he tried to use an object that hadn\'t been initialized.'
  },
  {
    id: 'oauth',
    term: 'OAuth',
    slug: 'oauth',
    definition: 'OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.',
    example: 'She used OAuth to sign in to the new app with her Google account, granting it permission to access her name and email address.'
  },
  {
    id: 'object-storage',
    term: 'Object Storage',
    slug: 'object-storage',
    definition: 'Object Storage is a data storage architecture that manages data as objects, as opposed to other storage architectures like file systems or block storage. Amazon S3 is a popular example.',
    example: 'The web application stored all user-uploaded images and videos in an object storage service for scalability and durability.'
  },
  {
    id: 'ocsp',
    term: 'OCSP',
    slug: 'ocsp',
    definition: 'Online Certificate Status Protocol (OCSP) is an Internet protocol used for obtaining the revocation status of an X.509 digital certificate.',
    example: 'When you visit a secure website, your browser may use OCSP to check if the site\'s SSL certificate has been revoked.'
  },
  {
    id: 'oidc',
    term: 'OIDC',
    slug: 'oidc',
    definition: 'OpenID Connect (OIDC) is an authentication layer on top of OAuth 2.0. It allows clients to verify the identity of the end-user based on the authentication performed by an authorization server.',
    example: 'The application used OIDC to handle user login, which provided a standard way to get the user\'s profile information after they authenticated with Google.'
  },
  {
    id: 'on-prem',
    term: 'On-Prem',
    slug: 'on-prem',
    definition: 'On-premises (On-Prem) software that is installed and runs on computers on the premises of the person or organization using the software, rather than at a remote facility such as a cloud provider\'s data center.',
    example: 'Due to security regulations, the bank had to keep all its data in an on-prem data center instead of using the public cloud.'
  },
  {
    id: 'opcode',
    term: 'Opcode',
    slug: 'opcode',
    definition: 'The Operation Code (Opcode) is the portion of a machine language instruction that specifies the operation to be performed.',
    example: 'The debugger showed the raw assembly, where each line consisted of an opcode like `MOV` or `ADD` and its operands.'
  },
  {
    id: 'opengl-shader',
    term: 'OpenGL Shader',
    slug: 'opengl-shader',
    definition: 'An OpenGL Shader is a small program written in a C-like language (GLSL) that runs on the GPU and controls how pixels, vertices, and other graphics primitives are rendered.',
    example: 'He wrote a custom fragment shader in OpenGL to create a special water reflection effect in his game.'
  },
  {
    id: 'openshift',
    term: 'OpenShift',
    slug: 'openshift',
    definition: 'OpenShift is a family of containerization software products from Red Hat, centered on a Kubernetes distribution packaged with additional tools for developers.',
    example: 'The enterprise chose OpenShift over plain Kubernetes because it provided a more complete and supported platform for their developers.'
  },
  {
    id: 'openssl',
    term: 'OpenSSL',
    slug: 'openssl',
    definition: 'OpenSSL is a software library for applications that secure communications over computer networks against eavesdropping or need to identify the party at the other end. It is widely used to implement SSL/TLS.',
    example: 'He used the OpenSSL command-line tool to generate a self-signed certificate for his local development server.'
  },
  {
    id: 'orb-robotics',
    term: 'ORB (Robotics)',
    slug: 'orb-robotics',
    definition: 'Oriented FAST and Rotated BRIEF (ORB (Robotics)) is a feature detection algorithm in computer vision used for tasks like object recognition and 3D reconstruction in robotics.',
    example: 'The robot used the ORB algorithm to identify key feature points in its camera feed to map its environment.'
  },
  {
    id: 'orm',
    term: 'ORM',
    slug: 'orm',
    definition: 'Object-Relational Mapping (ORM) is a programming technique for converting data between incompatible type systems using object-oriented programming languages. It lets you interact with your database, like SQL, from your preferred language.',
    example: 'He used an ORM like Prisma so he could write TypeScript code to query the database instead of writing raw SQL statements.'
  },
  {
    id: 'os-hardening',
    term: 'OS Hardening',
    slug: 'os-hardening',
    definition: 'OS Hardening is the process of securing a system by reducing its surface of vulnerability. This typically includes removing unnecessary software, disabling unused services, and configuring security settings.',
    example: 'The security policy required OS hardening on all production servers, which involved closing unused ports and applying strict access controls.'
  },
  {
    id: 'overlay-network',
    term: 'Overlay Network',
    slug: 'overlay-network',
    definition: 'An Overlay Network is a virtual computer network that is built on top of another network. Nodes in the overlay can be thought of as being connected by virtual or logical links.',
    example: 'Docker Swarm and Kubernetes use an overlay network to allow containers on different host machines to communicate as if they were on the same private network.'
  },
  {
    id: 'overprovisioning',
    term: 'Overprovisioning',
    slug: 'overprovisioning',
    definition: 'Overprovisioning is the practice of allocating more resources (like storage or compute power) to a system than are strictly necessary, to ensure performance during peak loads or to improve longevity (in the case of SSDs).',
    example: 'The SSD manufacturer uses overprovisioning, setting aside a portion of the drive\'s storage to help with wear leveling and performance.'
  },
  {
    id: 'paas',
    term: 'PaaS',
    slug: 'paas',
    definition: 'Platform as a Service (PaaS) is a cloud computing model where a third-party provider delivers hardware and software tools to users over the internet, allowing them to develop, run, and manage applications without building and maintaining the underlying infrastructure.',
    example: 'Heroku is a popular PaaS that allows developers to deploy web applications without worrying about managing servers or operating systems.'
  },
  {
    id: 'packet-sniffer',
    term: 'Packet Sniffer',
    slug: 'packet-sniffer',
    definition: 'A Packet Sniffer is a tool used to capture and analyze data packets traveling over a network. It can be used for network troubleshooting or for malicious purposes.',
    example: 'The network administrator used a packet sniffer like Wireshark to diagnose why the client couldn\'t connect to the server.'
  },
  {
    id: 'pam',
    term: 'PAM',
    slug: 'pam',
    definition: 'Pluggable Authentication Modules (PAM) is a framework of libraries that provides a flexible, modular system for handling authentication tasks on Unix-like systems.',
    example: 'He configured the system\'s PAM modules to require two-factor authentication for all SSH logins.'
  },
  {
    id: 'pan-network',
    term: 'PAN Network',
    slug: 'pan-network',
    definition: 'A Personal Area Network (PAN Network) is a computer network for interconnecting electronic devices within an individual person\'s workspace.',
    example: 'Connecting your smartphone to your Bluetooth headphones creates a simple PAN.'
  },
  {
    id: 'patch-panel',
    term: 'Patch Panel',
    slug: 'patch-panel',
    definition: 'A Patch Panel is a mounted hardware assembly that contains ports to connect and manage incoming and outgoing LAN cables in a communication closet or data center.',
    example: 'The technician neatly organized all the office Ethernet runs by terminating them at the patch panel in the server rack.'
  },
  {
    id: 'pcie-lane',
    term: 'PCIe Lane',
    slug: 'pcie-lane',
    definition: 'A PCI Express Lane (PCIe Lane) consists of two differential signaling pairs, one for receiving and one for transmitting. The more lanes a PCIe slot has (e.g., x16), the more bandwidth it can provide.',
    example: 'For maximum performance, the graphics card was installed in the top PCIe x16 slot, which connects directly to the CPU and offers the most lanes.'
  },
  {
    id: 'pem-file',
    term: 'PEM File',
    slug: 'pem-file',
    definition: 'Privacy-Enhanced Mail (PEM File) is a Base64 encoded file format for storing cryptographic keys and certificates. It\'s a common format for SSL certificates.',
    example: 'To connect to the server via SSH, he had to provide his private key, which was stored in a `.pem` file.'
  },
  {
    id: 'pentest',
    term: 'Pentest',
    slug: 'pentest',
    definition: 'A Penetration Test (Pentest) is an authorized simulated cyberattack on a computer system, performed to evaluate the security of the system.',
    example: 'The company hired a third-party firm to conduct a pentest on their new web application before it went live.'
  },
  {
    id: 'pfsense',
    term: 'pfSense',
    slug: 'pfsense',
    definition: 'pfSense is a free and open source firewall and router that also features a unified threat management system, load balancing, and more.',
    example: 'The small business used a dedicated machine running pfSense as their powerful, low-cost network firewall.'
  },
  {
    id: 'pgp',
    term: 'PGP',
    slug: 'pgp',
    definition: 'Pretty Good Privacy (PGP) is an encryption program that provides cryptographic privacy and authentication for data communication. It is used for signing, encrypting, and decrypting texts, e-mails, files, directories, and whole disk partitions.',
    example: 'Journalists often use PGP to encrypt their communications with sources to protect their identity.'
  },
  {
    id: 'phishing-kit',
    term: 'Phishing Kit',
    slug: 'phishing-kit',
    definition: 'A Phishing Kit is a collection of software tools and website templates that makes it easy for attackers to create and launch phishing campaigns.',
    example: 'The attacker purchased a phishing kit on the dark web that included a convincing replica of a major bank\'s login page.'
  },
  {
    id: 'pid-controller',
    term: 'PID Controller',
    slug: 'pid-controller',
    definition: 'A Proportional-Integral-Derivative Controller (PID Controller) is a control loop mechanism employing feedback that is widely used in industrial control systems and a variety of other applications requiring continuously modulated control.',
    example: 'The drone uses a PID controller to constantly adjust its motor speeds to remain stable in the air.'
  },
  {
    id: 'ping-flood',
    term: 'Ping Flood',
    slug: 'ping-flood',
    definition: 'A Ping Flood is a simple denial-of-service attack where the attacker overwhelms the victim with ICMP "echo request" (ping) packets.',
    example: 'The server became unresponsive after it was targeted by a ping flood, as it spent all its resources trying to reply to the bogus requests.'
  },
  {
    id: 'pipeline-cache',
    term: 'Pipeline Cache',
    slug: 'pipeline-cache',
    definition: 'In CI/CD, a Pipeline Cache is a cache used to store dependencies or other files that don\'t change often between runs, speeding up the build process.',
    example: 'The build was much faster the second time because the pipeline cache had saved all the downloaded Node.js modules.'
  },
  {
    id: 'pki',
    term: 'PKI',
    slug: 'pki',
    definition: 'Public Key Infrastructure (PKI) is a set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store, and revoke digital certificates.',
    example: 'The entire system of SSL/TLS on the web relies on a global PKI to establish trust between browsers and web servers.'
  },
  {
    id: 'plasma-desktop',
    term: 'Plasma Desktop',
    slug: 'plasma-desktop',
    definition: 'Plasma Desktop is a popular desktop environment from KDE for Linux systems, known for its modern appearance and extensive customizability.',
    example: 'He chose the Kubuntu distribution because he preferred the look and feel of the Plasma Desktop environment.'
  },
  {
    id: 'pm2',
    term: 'PM2',
    slug: 'pm2',
    definition: 'PM2 is a popular process manager for Node.js applications that helps keep applications alive forever, reload them without downtime, and manage application logging.',
    example: 'He used PM2 to run his Node.js API in cluster mode, allowing it to take advantage of all CPU cores and automatically restart if it crashed.'
  },
  {
    id: 'poc-proof-of-concept',
    term: 'PoC',
    slug: 'poc-proof-of-concept',
    definition: 'A Proof of Concept (PoC) is a small exercise to test a design idea or assumption. The main purpose is to demonstrate functionality and verify a certain concept or theory has potential for real-world application.',
    example: 'Before building the full application, they created a small PoC to verify that the new machine learning algorithm would work as expected.'
  },
  {
    id: 'poe-injector',
    term: 'PoE Injector',
    slug: 'poe-injector',
    definition: 'A Power over Ethernet (PoE Injector) is a device that adds electrical power into an Ethernet cable, allowing a single cable to provide both a data connection and electric power to devices like security cameras or wireless access points.',
    example: 'Since there was no power outlet near the security camera, he used a PoE injector to power it through the Ethernet cable.'
  },
  {
    id: 'pointer-arithmetic',
    term: 'Pointer Arithmetic',
    slug: 'pointer-arithmetic',
    definition: 'In languages like C and C++, Pointer Arithmetic allows for performing arithmetic operations (like addition and subtraction) on pointers, which is used to navigate through arrays or blocks of memory.',
    example: 'He iterated through the array by using pointer arithmetic to increment the pointer to the next element in memory.'
  },
  {
    id: 'polynomial-hash',
    term: 'Polynomial Hash',
    slug: 'polynomial-hash',
    definition: 'A Polynomial Hash is a type of hash function that is particularly useful for efficiently calculating the hash of substrings of a larger string, often used in string searching algorithms.',
    example: 'The Rabin-Karp algorithm uses polynomial hashing to quickly find occurrences of a pattern within a text.'
  },
  {
    id: 'port-forwarding',
    term: 'Port Forwarding',
    slug: 'port-forwarding',
    definition: 'Port Forwarding is a networking technique that redirects a communication request from one address and port number combination to another while the packets are traversing a network gateway, such as a router or firewall.',
    example: 'He set up port forwarding on his router to make his home media server accessible from the internet.'
  },
  {
    id: 'postfix',
    term: 'Postfix',
    slug: 'postfix',
    definition: 'Postfix is a free and open-source mail transfer agent (MTA) that routes and delivers electronic mail. It is a popular alternative to Sendmail.',
    example: 'The company\'s email server runs on Postfix to handle all incoming and outgoing mail.'
  },
  {
    id: 'postman',
    term: 'Postman',
    slug: 'postman',
    definition: 'Postman is a popular application used for API testing. It provides a graphical interface for making HTTP requests and viewing the responses.',
    example: 'The developer used Postman to test the new API endpoints and ensure they were returning the correct data and status codes.'
  },
  {
    id: 'pptp',
    term: 'PPTP',
    slug: 'pptp',
    definition: 'Point-to-Point Tunneling Protocol (PPTP) is an older VPN protocol for implementing virtual private networks. It is now considered insecure and has been largely replaced by protocols like OpenVPN and IPSec.',
    example: 'The IT department advised against using PPTP for the VPN connection due to its known security vulnerabilities.'
  },
  {
    id: 'prisma-orm',
    term: 'Prisma ORM',
    slug: 'prisma-orm',
    definition: 'Prisma ORM is a modern, open-source database toolkit and ORM (Object-Relational Mapper) for Node.js and TypeScript. It helps developers build applications faster and make fewer errors.',
    example: 'She chose Prisma ORM for her project because its auto-generated, type-safe client made database interactions much easier and safer.'
  },
  {
    id: 'process-fork',
    term: 'Process Fork',
    slug: 'process-fork',
    definition: 'A Process Fork is an operation whereby a process creates a copy of itself. It is the primary method of process creation on Unix-like operating systems.',
    example: 'The web server would fork a new process to handle each incoming client connection, isolating them from each other.'
  },
  {
    id: 'prometheus',
    term: 'Prometheus',
    slug: 'prometheus',
    definition: 'Prometheus is a free and open-source systems monitoring and alerting toolkit originally built at SoundCloud.',
    example: 'The DevOps team set up Prometheus to scrape metrics from all their servers and Grafana to visualize the data in dashboards.'
  },
  {
    id: 'protocol-buffers',
    term: 'Protocol Buffers',
    slug: 'protocol-buffers',
    definition: 'Protocol Buffers are a free and open-source cross-platform data format used to serialize structured data. It is useful in developing programs to communicate with each other over a network or for storing data.',
    example: 'Instead of using JSON, the microservices communicated using Protocol Buffers because it was faster to serialize and produced smaller payloads.'
  },
  {
    id: 'proxy-arp',
    term: 'Proxy ARP',
    slug: 'proxy-arp',
    definition: 'Proxy ARP is a technique by which a device on a given network answers the ARP queries for an IP address that is not on that network. The device is acting on behalf of another device.',
    example: 'The router used Proxy ARP to allow devices on the 192.168.1.0/24 subnet to reach a device on the 10.0.0.0/8 subnet without a default gateway.'
  },
  {
    id: 'pseudocode',
    term: 'Pseudocode',
    slug: 'pseudocode',
    definition: 'Pseudocode is a detailed yet readable description of what a computer program or algorithm must do, expressed in a formally-styled natural language rather than in a programming language.',
    example: 'Before writing the actual function, the programmer first sketched it out in pseudocode to plan the logic.'
  },
  {
    id: 'pua-potentially-unwanted-app',
    term: 'PUA',
    slug: 'pua-potentially-unwanted-app',
    definition: 'A Potentially Unwanted Application (PUA) is a program that may not be overtly malicious but can degrade system performance, display intrusive advertising, or have other undesirable effects. They are often bundled with free software.',
    example: 'His antivirus software flagged the free PDF converter as a PUA because it tried to install a browser toolbar without his permission.'
  },
  {
    id: 'qemu',
    term: 'QEMU',
    slug: 'qemu',
    definition: 'QEMU is a free and open-source emulator and virtualizer that can perform hardware virtualization, running operating systems and programs made for one machine on a different machine.',
    example: 'He used QEMU to emulate an ARM-based Raspberry Pi on his x86 laptop to test his software.'
  },
  {
    id: 'qos-profile',
    term: 'QoS Profile',
    slug: 'qos-profile',
    definition: 'A Quality of Service (QoS Profile) is a set of rules that prioritizes network traffic to ensure that critical applications receive the necessary bandwidth and have lower latency.',
    example: 'The router applied a QoS profile that gave video conferencing traffic higher priority than large file downloads.'
  },
  {
    id: 'quantum-key-exchange',
    term: 'Quantum Key Exchange',
    slug: 'quantum-key-exchange',
    definition: 'Quantum Key Distribution (QKD) (Quantum Key Exchange) is a secure communication method which implements a cryptographic protocol involving components of quantum mechanics. It allows two parties to produce a shared random secret key known only to them, which can then be used to encrypt and decrypt messages.',
    example: 'Researchers are developing QKD systems that are theoretically impossible to eavesdrop on without the communicating parties knowing.'
  },
  {
    id: 'query-planner',
    term: 'Query Planner',
    slug: 'query-planner',
    definition: 'A Query Planner is a component of a database management system that determines the most efficient way to execute a given query by considering various possible execution plans.',
    example: 'The database\'s query planner decided to use an index to speed up the `SELECT` statement instead of scanning the entire table.'
  },
  {
    id: 'quicksync',
    term: 'QuickSync',
    slug: 'quicksync',
    definition: 'Intel\'s brand for its dedicated video encoding and decoding hardware core. It is used to accelerate video processing tasks.',
    example: 'His video editing software ran much faster on his Intel CPU because it could use QuickSync for hardware-accelerated H.264 encoding.'
  },
  {
    id: 'qwertz-layout',
    term: 'QWERTZ Layout',
    slug: 'qwertz-layout',
    definition: 'A QWERTZ Layout is a keyboard layout widely used in Central Europe. The main difference from QWERTY is that the Z and Y keys are swapped.',
    example: 'He was confused when typing on his German friend\'s laptop because it had a QWERTZ layout.'
  },
  {
    id: 'rabbitmq',
    term: 'RabbitMQ',
    slug: 'rabbitmq',
    definition: 'RabbitMQ is a popular open-source message broker that accepts and forwards messages. It acts as an intermediary for applications, allowing them to communicate with each other without being directly connected.',
    example: 'The application used a RabbitMQ queue to handle background jobs, ensuring that tasks were processed reliably even if the worker process restarted.'
  },
  {
    id: 'raid-0-1-5-10',
    term: 'RAID 0/1/5/10',
    slug: 'raid-0-1-5-10',
    definition: 'A Redundant Array of Independent Disks (RAID 0/1/5/10) is a data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both. Common levels include RAID 0 (striping), RAID 1 (mirroring), RAID 5 (striping with parity), and RAID 10 (a combination of 1 and 0).',
    example: 'He configured his NAS with a RAID 5 array, which provided a balance of storage capacity and protection against a single drive failure.'
  },
  {
    id: 'ramdisk',
    term: 'RAMDISK',
    slug: 'ramdisk',
    definition: 'A RAMDISK is a block of RAM that a computer\'s software is treating as if the memory were a disk drive. It offers extremely fast access times.',
    example: 'To speed up the compilation process, he created a RAM disk to store the temporary build files.'
  },
  {
    id: 'ransomware',
    term: 'Ransomware',
    slug: 'ransomware',
    definition: 'Ransomware is a type of malicious software that threatens to publish the victim\'s data or perpetually block access to it unless a ransom is paid.',
    example: 'The hospital\'s systems were taken offline by a ransomware attack that encrypted all their patient records.'
  },
  {
    id: 'raspberry-pi-os',
    term: 'Raspberry Pi OS',
    slug: 'raspberry-pi-os',
    definition: 'Raspberry Pi OS is a Debian-based operating system specifically optimized for the Raspberry Pi hardware.',
    example: 'He installed Raspberry Pi OS on his new device to start his home automation project.'
  },
  {
    id: 'raster-image',
    term: 'Raster Image',
    slug: 'raster-image',
    definition: 'A Raster Image is a data structure (or bitmap) representing a grid of pixels. Common raster image formats include JPEG, PNG, and GIF.',
    example: 'When you zoom in too far on a raster image, you can see the individual square pixels it\'s made of.'
  },
  {
    id: 'rdp',
    term: 'RDP',
    slug: 'rdp',
    definition: 'Remote Desktop Protocol (RDP) is a proprietary protocol developed by Microsoft, which provides a user with a graphical interface to connect to another computer over a network connection.',
    example: 'From his home computer, he used RDP to connect to his work desktop and access his files.'
  },
  {
    id: 'rebase',
    term: 'Rebase',
    slug: 'rebase',
    definition: 'In version control systems like Git, to Rebase is to move or combine a sequence of commits to a new base commit, often to create a cleaner, linear project history.',
    example: 'She chose to rebase her feature branch on top of the latest `main` branch to avoid creating an extra merge commit.'
  },
  {
    id: 'recursion',
    term: 'Recursion',
    slug: 'recursion',
    definition: 'In programming, Recursion is a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. A function that calls itself is recursive.',
    example: 'Calculating a factorial is a classic example of a problem that can be solved elegantly with recursion.'
  },

  {
    id: 'redis-sentinel',
    term: 'Redis Sentinel',
    slug: 'redis-sentinel',
    definition: 'Redis Sentinel is a system that provides high availability for Redis. It is a monitoring and failover system that automatically handles the process of promoting a replica to a master when the current master is down.',
    example: 'They deployed a Redis Sentinel cluster to ensure their caching layer would remain available even if one of the Redis nodes failed.'
  },
  {
    id: 'redundant-routing',
    term: 'Redundant Routing',
    slug: 'redundant-routing',
    definition: 'Redundant Routing is the practice of having multiple network paths to a destination to ensure connectivity is maintained if one path fails.',
    example: 'The data center had redundant routing through two different ISPs, so an outage with one provider wouldn\'t take their services offline.'
  },
  {
    id: 'refactor',
    term: 'Refactor',
    slug: 'refactor',
    definition: 'Refactor is the process of restructuring existing computer code—changing the factoring—without changing its external behavior. It is done to improve nonfunctional attributes of the software.',
    example: 'The code worked, but it was messy, so he decided to refactor it to make it more readable and easier to maintain.'
  },
  {
    id: 'regex',
    term: 'Regex',
    slug: 'regex',
    definition: 'A Regular Expression (Regex) is a sequence of characters that specifies a search pattern. They are widely used for string searching and manipulation.',
    example: 'He used a regex to validate that the user\'s input was a valid email address format.'
  },
  {
    id: 'registry-hive',
    term: 'Registry Hive',
    slug: 'registry-hive',
    definition: 'A Registry Hive is a logical group of keys, subkeys, and values in the Windows Registry. Each hive is a file on the disk that contains a portion of the registry.',
    example: 'He had to edit a value in the `HKEY_LOCAL_MACHINE` registry hive to fix a software issue.'
  },
  {
    id: 'remote-shell',
    term: 'Remote Shell',
    slug: 'remote-shell',
    definition: 'A Remote Shell is a command-line interface that allows a user to control a computer from a remote location. SSH is the most common tool for this.',
    example: 'The sysadmin used a remote shell to log into the server in another country and restart a failed service.'
  },
  {
    id: 'replication-controller',
    term: 'Replication Controller',
    slug: 'replication-controller',
    definition: 'In Kubernetes, a Replication Controller is a component that ensures a specified number of pod replicas are running at any one time.',
    example: 'The ReplicationController was configured to maintain three instances of the web server pod, so if one crashed, it would automatically start a new one.'
  },
  {
    id: 'restful-api',
    term: 'RESTful API',
    slug: 'restful-api',
    definition: 'A Representational State Transfer (RESTful API) is an application programming interface that uses HTTP requests to GET, PUT, POST, and DELETE data, following the principles of REST.',
    example: 'The mobile app communicated with the backend server by making calls to its RESTful API.'
  },
  {
    id: 'reverse-shell',
    term: 'Reverse Shell',
    slug: 'reverse-shell',
    definition: 'A Reverse Shell is a type of shell in which the target machine communicates back to the attacking machine. The attacking machine has a listener port on which it receives the connection.',
    example: 'After exploiting a vulnerability, the hacker opened a reverse shell from the compromised server back to their own machine to gain control.'
  },
  {
    id: 'rgb-header',
    term: 'RGB Header',
    slug: 'rgb-header',
    definition: 'An RGB Header is a connector on a PC motherboard that allows users to connect and control RGB LED strips and other lighting components.',
    example: 'He connected his RGB case fans to the 4-pin RGB header on his motherboard to synchronize all the lighting effects.'
  },
  {
    id: 'rootkit',
    term: 'Rootkit',
    slug: 'rootkit',
    definition: 'A Rootkit is a collection of malicious software tools that enable an unauthorized user to gain control of a computer system without being detected.',
    example: 'The antivirus software had trouble detecting the infection because a rootkit was actively hiding the malicious files from the operating system.'
  },
  {
    id: 'rpc',
    term: 'RPC',
    slug: 'rpc',
    definition: 'Remote Procedure Call (RPC) is when a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network) without the programmer needing to explicitly code the details for the remote interaction.',
    example: 'The microservices used an RPC framework to call functions on each other as if they were just local functions in the same program.'
  },
  {
    id: 'rpm-package',
    term: 'RPM Package',
    slug: 'rpm-package',
    definition: 'An RPM Package is a file format used by Red Hat and its derivatives (like CentOS and Fedora) to distribute, install, and manage software.',
    example: 'He downloaded the `.rpm` package and used the `yum` command to install the software on his CentOS server.'
  },
  {
    id: 'rtos',
    term: 'RTOS',
    slug: 'rtos',
    definition: 'A Real-Time Operating System (RTOS) is an operating system intended to serve real-time applications that process data as it comes in, typically without buffer delays.',
    example: 'The car\'s braking system is controlled by a microprocessor running an RTOS to ensure it responds instantly and predictably.'
  },
  {
    id: 'rtt-round-trip-time',
    term: 'RTT',
    slug: 'rtt-round-trip-time',
    definition: 'Round Trip Time (RTT) is the length of time it takes for a signal to be sent plus the length of time it takes for an acknowledgment of that signal to be received.',
    example: 'His RTT to the game server was 150ms, which resulted in noticeable input lag.'
  },
  {
    id: 'saas',
    term: 'SaaS',
    slug: 'saas',
    definition: 'Software as a Service (SaaS) is a software distribution model in which a third-party provider hosts applications and makes them available to customers over the Internet.',
    example: 'Office 365 and Google Workspace are popular SaaS products, where you pay a subscription instead of buying the software outright.'
  },
  {
    id: 'saltstack',
    term: 'SaltStack',
    slug: 'saltstack',
    definition: 'SaltStack is an open-source configuration management and remote execution tool. It is used to automate the management and configuration of servers.',
    example: 'The sysadmin used SaltStack to push a security update to all 500 servers in the data center simultaneously.'
  },
  {
    id: 'sandbox-escape',
    term: 'Sandbox Escape',
    slug: 'sandbox-escape',
    definition: 'A Sandbox Escape is a type of security exploit where an attacker breaks out of the restricted environment of a sandbox and gains access to the host operating system.',
    example: 'The browser vulnerability allowed for a sandbox escape, letting malicious JavaScript code read files directly from the user\'s computer.'
  },
  {
    id: 'sata-port',
    term: 'SATA Port',
    slug: 'sata-port',
    definition: 'A Serial ATA (SATA Port) is an interface on a computer\'s motherboard used to connect storage devices like hard drives and SSDs.',
    example: 'He connected his new SSD to one of the empty SATA ports on the motherboard to increase his storage capacity.'
  },
  {
    id: 'sbom',
    term: 'SBOM',
    slug: 'sbom',
    definition: 'A Software Bill of Materials (SBOM) is a formal, machine-readable inventory of software components and dependencies, information about those components, and their hierarchical relationships.',
    example: 'The company required an SBOM for all third-party software to better track vulnerabilities in their supply chain.'
  },
  {
    id: 'scalability',
    term: 'Scalability',
    slug: 'scalability',
    definition: 'Scalability is the property of a system to handle a growing amount of work by adding resources to the system. This can be "scaling up" (adding resources to a single node) or "scaling out" (adding more nodes).',
    example: 'The cloud-based application was designed for scalability, allowing it to handle millions of users by automatically adding more servers as needed.'
  },
  {
    id: 'schema-migration',
    term: 'Schema Migration',
    slug: 'schema-migration',
    definition: 'Schema Migration is the process of making incremental, reversible changes to a database schema, such as adding a new table or column, in a structured and version-controlled way.',
    example: 'The developer wrote a new schema migration script to add an `email` column to the `users` table.'
  },
  {
    id: 'scp-protocol',
    term: 'SCP Protocol',
    slug: 'scp-protocol',
    definition: 'Secure Copy Protocol (SCP Protocol) is a means of securely transferring computer files between a local host and a remote host or between two remote hosts. It is based on the SSH protocol.',
    example: 'He used the `scp` command to securely copy the backup file from his local machine to the remote server.'
  },
  {
    id: 'sdram',
    term: 'SDRAM',
    slug: 'sdram',
    definition: 'Synchronous Dynamic Random-Access Memory (SDRAM) is a type of DRAM that is synchronized with the system bus, allowing for faster data transfer rates.',
    example: 'Modern RAM like DDR4 and DDR5 are types of SDRAM, a major improvement over older asynchronous RAM.'
  },
  {
    id: 'secure-boot',
    term: 'Secure Boot',
    slug: 'secure-boot',
    definition: 'Secure Boot is a security standard developed by members of the PC industry to help make sure that a device boots using only software that is trusted by the Original Equipment Manufacturer (OEM).',
    example: 'He had to disable Secure Boot in the BIOS to install an unsigned operating system like Linux.'
  },
  {
    id: 'selinux',
    term: 'SELinux',
    slug: 'selinux',
    definition: 'Security-Enhanced Linux (SELinux) is a Linux kernel security module that provides a mechanism for supporting access control security policies, including mandatory access controls (MAC).',
    example: 'The application couldn\'t write to the log file because an SELinux policy was preventing it from accessing that directory.'
  },
  {
    id: 'semantic-versioning',
    term: 'Semantic Versioning',
    slug: 'semantic-versioning',
    definition: 'Semantic Versioning is a versioning scheme for software that uses a three-part version number (MAJOR.MINOR.PATCH) to convey the nature of changes.',
    example: 'They released version 2.0.0 of their library, indicating a major version with breaking changes.'
  },
  {
    id: 'sensor-fusion',
    term: 'Sensor Fusion',
    slug: 'sensor-fusion',
    definition: 'Sensor Fusion is the process of combining sensor data from disparate sources such that the resulting information has less uncertainty than would be possible when these sources were used individually.',
    example: 'A self-driving car uses sensor fusion to combine data from its cameras, radar, and LiDAR to get an accurate picture of its surroundings.'
  },
  {
    id: 'serial-console',
    term: 'Serial Console',
    slug: 'serial-console',
    definition: 'A Serial Console is a connection over a serial port (like RS-232) that provides a text-based interface to a device\'s operating system, often used for initial configuration or recovery of network devices and servers.',
    example: 'The router was not accessible over the network, so the engineer had to connect his laptop to its serial console port to fix it.'
  },
  {
    id: 'serverless',
    term: 'Serverless',
    slug: 'serverless',
    definition: 'Serverless is a cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed.',
    example: 'He built his application using serverless functions, so he only paid for the compute time when his code was actually running.'
  },
  {
    id: 'session-hijacking',
    term: 'Session Hijacking',
    slug: 'session-hijacking',
    definition: 'Session Hijacking is a security attack where an attacker takes control of a user\'s session with a server, often by stealing their session cookie.',
    example: 'By stealing the session cookie, the attacker could perform session hijacking and access the user\'s online banking account.'
  },
  {
    id: 'sha-256',
    term: 'SHA-256',
    slug: 'sha-256',
    definition: 'Secure Hash Algorithm 256-bit (SHA-256) is a cryptographic hash function that produces a 256-bit (32-byte) hash value. It is widely used in security applications and cryptocurrencies like Bitcoin.',
    example: 'The download page listed the SHA-256 hash of the file so users could verify its integrity after downloading.'
  },
  {
    id: 'shebang',
    term: 'Shebang',
    slug: 'shebang',
    definition: 'The Shebang is the character sequence (`#!`) at the beginning of a script file on Unix-like systems. It specifies the interpreter that should be used to execute the script.',
    example: 'The Python script started with the shebang `#!/usr/bin/env python3` to ensure it was executed with the correct interpreter.'
  },
  {
    id: 'sharding',
    term: 'Sharding',
    slug: 'sharding',
    definition: 'Sharding is a type of database partitioning that separates one large database into many smaller, faster, more easily managed parts called data shards.',
    example: 'The database was sharded by user ID, with users A-M on one server and users N-Z on another, to distribute the load.'
  },
  {
    id: 'shell-script',
    term: 'Shell Script',
    slug: 'shell-script',
    definition: 'A Shell Script is a computer program designed to be run by a Unix shell, a command-line interpreter.',
    example: 'He wrote a simple shell script to automate the process of backing up his files and compressing them into a zip archive.'
  },
  {
    id: 'side-channel-attack',
    term: 'Side-Channel Attack',
    slug: 'side-channel-attack',
    definition: 'A Side-Channel Attack is a security attack that is based on information gained from the physical implementation of a cryptosystem, rather than brute force or theoretical weaknesses in the algorithms. Examples include analyzing power consumption or timing information.',
    example: 'Researchers were able to extract an encryption key from the CPU by analyzing the precise timing of its cache hits and misses, a type of side-channel attack.'
  },
  {
    id: 'simd',
    term: 'SIMD',
    slug: 'simd',
    definition: 'Single Instruction, Multiple Data (SIMD) is a class of parallel computers in which a single instruction operates on multiple data points simultaneously. Modern CPUs use SIMD instructions to accelerate tasks like video encoding and scientific computing.',
    example: 'The video processing library used SIMD instructions to apply the same brightness filter to multiple pixels at once, dramatically speeding up the operation.'
  },
  {
    id: 'singleton-pattern',
    term: 'Singleton Pattern',
    slug: 'singleton-pattern',
    definition: 'A Singleton Pattern is a software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.',
    example: 'The application used a singleton pattern for its database connection object to ensure that only one connection was open at a time.'
  },
  {
    id: 'sip-trunk',
    term: 'SIP Trunk',
    slug: 'sip-trunk',
    definition: 'A Session Initiation Protocol Trunk (SIP Trunk) is a virtual version of an analog phone line that uses SIP to connect a private branch exchange (PBX) to the internet, allowing for VoIP calls.',
    example: 'The company replaced its old, expensive phone lines with a SIP trunk to make calls over their existing internet connection.'
  },
  {
    id: 'sla',
    term: 'SLA',
    slug: 'sla',
    definition: 'A Service-Level Agreement (SLA) is a commitment between a service provider and a client. Particular aspects of the service – quality, availability, responsibilities – are agreed upon between the service provider and the service user.',
    example: 'The cloud provider\'s SLA guaranteed 99.99% uptime, and they would issue a credit if they failed to meet that promise.'
  },
  {
    id: 'smb-share',
    term: 'SMB Share',
    slug: 'smb-share',
    definition: 'A Server Message Block (SMB Share) is a shared resource (like a folder or printer) on a network that is made available using the SMB protocol, common in Windows networking.',
    example: 'He mapped the SMB share from the file server to his computer so it appeared as the Z: drive.'
  },
  {
    id: 'smtp-relay',
    term: 'SMTP Relay',
    slug: 'smtp-relay',
    definition: 'A Simple Mail Transfer Protocol (SMTP Relay) is a service that routes email through a trusted third-party to send it to the recipient. This is often used to improve deliverability and avoid being marked as spam.',
    example: 'The application used a service like SendGrid as an SMTP relay to ensure the password reset emails were reliably delivered to users.'
  },
  {
    id: 'snapshot',
    term: 'Snapshot',
    slug: 'snapshot',
    definition: 'In computing, a Snapshot is the state of a system at a particular point in time. It is often used for backups and virtualization, allowing a system to be reverted to a previous state.',
    example: 'Before applying the risky software update, the administrator took a snapshot of the virtual machine so he could easily roll back if something went wrong.'
  },
  {
    id: 'soa-record',
    term: 'SOA Record',
    slug: 'soa-record',
    definition: 'A Start of Authority (SOA Record) is a type of DNS record that contains administrative information about the zone, especially regarding zone transfers.',
    example: 'The SOA record for the domain specified the primary name server and the email address of the domain administrator.'
  },
  {
    id: 'socket-timeout',
    term: 'Socket Timeout',
    slug: 'socket-timeout',
    definition: 'A Socket Timeout is a limit on how long a program will wait for a response when communicating over a network socket before giving up.',
    example: 'The program threw a socket timeout error because the remote server did not respond within the 5-second limit.'
  },
  {
    id: 'software-raid',
    term: 'Software RAID',
    slug: 'software-raid',
    definition: 'Software RAID is a form of RAID that is implemented entirely within the operating system, without requiring a dedicated hardware RAID controller.',
    example: 'He used Windows Storage Spaces to create a mirrored array (Software RAID 1) from two spare hard drives.'
  },
  {
    id: 'solaris',
    term: 'Solaris',
    slug: 'solaris',
    definition: 'Solaris is a Unix operating system originally developed by Sun Microsystems. It was known for its scalability and innovative features like DTrace and ZFS.',
    example: 'Before Linux became dominant in the data center, many enterprise systems ran on powerful SPARC servers using the Solaris OS.'
  },
  {
    id: 'source-mapping',
    term: 'Source Mapping',
    slug: 'source-mapping',
    definition: 'A Source Mapping is a file that maps from the transformed source code back to the original source code. This is essential for debugging code that has been minified or transpiled.',
    example: 'Thanks to the source map, when an error occurred in the minified JavaScript file, the browser\'s developer tools showed him the exact line in his original, readable code.'
  },
  {
    id: 'spa-single-page-app',
    term: 'SPA',
    slug: 'spa-single-page-app',
    definition: 'A Single-Page Application (SPA) is a web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.',
    example: 'Gmail is a classic example of a SPA; you can navigate between emails and folders without the entire page ever reloading.'
  },
  {
    id: 'spooling',
    term: 'Spooling',
    slug: 'spooling',
    definition: 'Spooling is a process where data is temporarily held to be used and executed by a device, program or the system. It is most often used for printing.',
    example: 'When you print a document, the data is first sent to a print spooler, which feeds it to the printer at a pace it can handle.'
  },
  {
    id: 'ssh-agent',
    term: 'SSH Agent',
    slug: 'ssh-agent',
    definition: 'An SSH Agent is a background program that handles passwords for SSH private keys. It stores your decrypted key in memory and uses it to authenticate you to remote servers without you having to re-enter your passphrase.',
    example: 'He added his SSH key to the SSH agent so he could connect to multiple GitHub repositories without typing his passphrase each time.'
  },
  {
    id: 'ssl-handshake',
    term: 'SSL Handshake',
    slug: 'ssl-handshake',
    definition: 'The SSL Handshake is the process where a client and server establish a secure communication channel. They agree on encryption protocols, exchange certificates, and generate session keys.',
    example: 'The "lock" icon in your browser appears after a successful SSL handshake with the web server.'
  },
  {
    id: 'stack-frame',
    term: 'Stack Frame',
    slug: 'stack-frame',
    definition: 'A Stack Frame is a memory location on the call stack that stores information about a function call, including its parameters, local variables, and the return address.',
    example: 'When a function is called, a new stack frame is pushed onto the stack. When the function returns, its frame is popped off.'
  },
  {
    id: 'static-route',
    term: 'Static Route',
    slug: 'static-route',
    definition: 'A Static Route is a manually configured routing entry, as opposed to a route learned through a dynamic routing protocol.',
    example: 'The network administrator added a static route to the router to ensure traffic destined for the 10.0.1.0/24 network always went through the correct interface.'
  },
  {
    id: 'steganography',
    term: 'Steganography',
    slug: 'steganography',
    definition: 'Steganography is the practice of concealing a file, message, image, or video within another file, message, image, or video.',
    example: 'He used steganography to hide a secret text file inside an innocuous-looking JPEG image.'
  },
  {
    id: 'sticky-bit',
    term: 'Sticky Bit',
    slug: 'sticky-bit',
    definition: 'The Sticky Bit is a user ownership permission mode bit that can be assigned to files and directories on Unix-like systems. When set on a directory, it allows only the file\'s owner, the directory\'s owner, or the root user to rename or delete the files within it.',
    example: 'The `/tmp` directory has the sticky bit set to prevent one user from deleting another user\'s temporary files.'
  },
  {
    id: 'stp-cable',
    term: 'STP Cable',
    slug: 'stp-cable',
    definition: 'A Shielded Twisted Pair (STP Cable) is a type of copper telephone wiring in which the wires are twisted together and surrounded by a shielding material to protect them from electromagnetic interference.',
    example: 'They used more expensive STP cable in the factory to prevent interference from the heavy machinery.'
  },
  {
    id: 'subnetting',
    term: 'Subnetting',
    slug: 'subnetting',
    definition: 'Subnetting is the process of dividing a single large IP network into smaller sub-networks (subnets). This is done for security and performance reasons.',
    example: 'He practiced subnetting to calculate the correct subnet masks for dividing the company\'s Class C network into smaller departmental networks.'
  },
  {
    id: 'sudoers',
    term: 'sudoers',
    slug: 'sudoers',
    definition: 'The sudoers file, typically at `/etc/sudoers`, on Unix-like systems that controls which users can execute commands with superuser privileges using the `sudo` command.',
    example: 'The sysadmin carefully edited the `sudoers` file to grant the new developer permission to restart the web server service.'
  },
  {
    id: 'swap-memory',
    term: 'Swap Memory',
    slug: 'swap-memory',
    definition: 'Swap Memory is a space on a hard disk that is used as virtual memory when the amount of physical RAM is full.',
    example: 'The system started using swap memory when RAM ran out, which made it very slow because disk is much slower than RAM.'
  },
  {
    id: 'swift-package',
    term: 'Swift Package',
    slug: 'swift-package',
    definition: 'A Swift Package is a reusable piece of code, written in Swift, that can be easily shared and integrated into multiple apps or projects using the Swift Package Manager.',
    example: 'He added the Alamofire Swift package to his Xcode project to simplify making network requests.'
  },
  {
    id: 'symbolic-link',
    term: 'Symbolic Link',
    slug: 'symbolic-link',
    definition: 'A Symbolic Link is a type of file on Unix-like systems that serves as a reference to another file or directory.',
    example: 'He created a symbolic link from `/usr/local/bin/node` to the actual Node.js executable so it would be in his `PATH`.'
  },
  {
    id: 'syscall',
    term: 'Syscall',
    slug: 'syscall',
    definition: 'A System Call (Syscall) is the programmatic way in which a computer program requests a service from the kernel of the operating system it is executed on.',
    example: 'When a program wants to read a file, it makes a `read` syscall to ask the operating system kernel to perform the operation.'
  },
  {
    id: 'sysctl',
    term: 'Sysctl',
    slug: 'sysctl',
    definition: 'Sysctl is a utility in Unix-like systems used to read and modify the attributes of the system kernel such as network settings and memory management.',
    example: 'He used `sysctl` to increase the maximum number of open file descriptors allowed by the kernel.'
  },
  {
    id: 'syslog',
    term: 'Syslog',
    slug: 'syslog',
    definition: 'Syslog is a standard for message logging. It allows separation of the software that generates messages, the system that stores them, and the software that reports and analyzes them.',
    example: 'All network devices were configured to send their logs to a central syslog server for easier monitoring and analysis.'
  },
  {
    id: 'systemd',
    term: 'Systemd',
    slug: 'systemd',
    definition: 'Systemd is a software suite that provides an array of system components for Linux operating systems, including an init system that is responsible for starting and managing services.',
    example: 'He used `systemctl`, the command for controlling systemd, to start the `apache2` service.'
  },
  {
    id: 'taint-node',
    term: 'Taint Node',
    slug: 'taint-node',
    definition: 'In Kubernetes, a Taint Node is a taint is applied to a node to repel a set of pods. A pod must have a "toleration" for the taint to be scheduled on that node.',
    example: 'They applied a taint to the GPU-enabled nodes to ensure that only pods specifically requesting a GPU would be scheduled there.'
  },
  {
    id: 'tdp-cpu',
    term: 'TDP (CPU)',
    slug: 'tdp-cpu',
    definition: 'Thermal Design Power (TDP (CPU)) is the maximum amount of heat generated by a computer chip or component (e.g. a CPU or GPU) that the cooling system is designed to dissipate under any workload.',
    example: 'The CPU had a TDP of 125 watts, so he needed to buy a powerful air cooler to keep it from overheating.'
  },
  {
    id: 'telnet',
    term: 'Telnet',
    slug: 'telnet',
    definition: 'Telnet is an application protocol used on the Internet or local area networks to provide a bidirectional interactive text-oriented communication facility using a virtual terminal connection. It is now considered insecure because it transmits data in cleartext.',
    example: 'For security reasons, access to the server was only allowed via SSH; Telnet was disabled.'
  },
  {
    id: 'tensor',
    term: 'Tensor',
    slug: 'tensor',
    definition: 'In machine learning, a Tensor is a multi-dimensional array of numbers. It is a generalization of vectors (1D tensor) and matrices (2D tensor).',
    example: 'The machine learning model processed the input image as a 3D tensor representing its height, width, and color channels.'
  },
  {
    id: 'terraform',
    term: 'Terraform',
    slug: 'terraform',
    definition: 'Terraform is an open-source infrastructure as code (IaC) software tool that enables users to define and provision a datacenter infrastructure using a high-level configuration language.',
    example: 'The DevOps team used Terraform to define their entire AWS cloud infrastructure in code, making it reproducible and version-controlled.'
  },
  {
    id: 'thread-pool',
    term: 'Thread Pool',
    slug: 'thread-pool',
    definition: 'A Thread Pool is a software design pattern for achieving concurrency. It maintains a number of threads that are waiting for tasks to be allocated to them for concurrent execution.',
    example: 'The web server used a thread pool to handle incoming requests, avoiding the overhead of creating a new thread for every single request.'
  },
  {
    id: 'throughput',
    term: 'Throughput',
    slug: 'throughput',
    definition: 'Throughput is the amount of material or items passing through a system or process. In networking, it refers to the rate of successful data delivery over a communication channel.',
    example: 'The network switch had a total throughput of 10 Gbps, which was more than enough for the office\'s needs.'
  },
  {
    id: 'token-bucket',
    term: 'Token Bucket',
    slug: 'token-bucket',
    definition: 'A Token Bucket is an algorithm used in packet switched computer networks and telecommunications networks to control the rate at which data is sent, allowing for bursts of traffic.',
    example: 'The API used a token bucket algorithm for rate limiting, allowing a client to make a burst of 100 requests before being throttled.'
  },
  {
    id: 'totp',
    term: 'TOTP',
    slug: 'totp',
    definition: 'A Time-based One-Time Password (TOTP) is an algorithm that computes a one-time password from a shared secret key and the current time. It is a common method for two-factor authentication.',
    example: 'He enabled two-factor authentication on his account, which required him to enter a TOTP from his authenticator app after his password.'
  },
  {
    id: 'tpm-2-0',
    term: 'TPM 2.0',
    slug: 'tpm-2-0',
    definition: 'Trusted Platform Module (TPM 2.0) is a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. Version 2.0 is a modern standard.',
    example: 'Windows 11 requires a TPM 2.0 chip to be present and enabled for enhanced security features like disk encryption.'
  },
  {
    id: 'trace-route',
    term: 'Trace Route',
    slug: 'trace-route',
    definition: 'A Trace Route is a network diagnostic command for displaying possible routes (paths) and measuring transit delays of packets across an Internet Protocol (IP) network.',
    example: 'He ran a traceroute to the google.com server to see the path the data packets were taking and identify any bottlenecks.'
  },
  {
    id: 'transaction-log',
    term: 'Transaction Log',
    slug: 'transaction-log',
    definition: 'A Transaction Log is a file in a database system that records all transactions and the database modifications made by each transaction. It is crucial for disaster recovery.',
    example: 'To restore the database to a specific point in time, the administrator restored the last full backup and then applied the subsequent transaction logs.'
  },
  {
    id: 'turing-complete',
    term: 'Turing Complete',
    slug: 'turing-complete',
    definition: 'A system is said to be Turing Complete if it can be used to simulate any single-taped Turing machine. Essentially, it means the system can perform any computation that any other programmable computer can.',
    example: 'Surprisingly, games like Minecraft and even some CSS features are technically Turing complete, meaning you could (theoretically) build a computer inside them.'
  },
  {
    id: 'tmux',
    term: 'Tmux',
    slug: 'tmux',
    definition: 'Tmux is a terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal.',
    example: 'He used tmux to keep his long-running script active on the remote server even after he disconnected his SSH session.'
  },
  {
    id: 'ttl-dns',
    term: 'TTL (DNS)',
    slug: 'ttl-dns',
    definition: 'Time to Live (TTL (DNS)) is a setting that tells the DNS resolver how long to cache a query before it should request a new one from the authoritative name server.',
    example: 'He set a low TTL of 60 seconds on the DNS record before the migration so the IP address change would propagate quickly.'
  },
  {
    id: 'tty',
    term: 'TTY',
    slug: 'tty',
    definition: 'Teletypewriter (TTY) is a command in Unix and Unix-like operating systems to print the file name of the terminal connected to standard input.',
    example: 'A program might use the `tty` command to check if it is being run in an interactive terminal session.'
  },
  {
    id: 'tun-tap-adapter',
    term: 'Tun/Tap Adapter',
    slug: 'tun-tap-adapter',
    definition: 'Tun/Tap Adapter are virtual network kernel drivers. TUN simulates a layer 3 (network) device and TAP simulates a layer 2 (Ethernet) device. They are often used by VPN software.',
    example: 'The OpenVPN client created a virtual TUN adapter on his computer to tunnel all his network traffic securely to the VPN server.'
  },
  {
    id: 'two-factor-auth',
    term: 'Two-Factor Auth',
    slug: 'two-factor-auth',
    definition: 'Two-Factor Authentication (2FA) (Two-Factor Auth) is a security method that requires the user to provide two different authentication factors to verify themselves, such as a password and a code from their phone.',
    example: 'He secured his email account by enabling two-factor authentication, making it much harder for an attacker to gain access.'
  },
  {
    id: 'type-erasure',
    term: 'Type Erasure',
    slug: 'type-erasure',
    definition: 'In programming languages with generics, Type Erasure is the process by which generic type information is removed by the compiler at compile-time. Java is a well-known example.',
    example: 'Because of type erasure in Java, you cannot check at runtime if a `List` was a `List<String>` or a `List<Integer>`.'
  },
  {
    id: 'typescript',
    term: 'TypoScript',
    slug: 'typescript',
    definition: 'TypoScript is a configuration language used in the TYPO3 content management system. Despite its name, it is not related to TypeScript.',
    example: 'The TYPO3 developer wrote some TypoScript to configure the rendering of the content elements on the page.'
  },
  {
    id: 'ubuntu-server',
    term: 'Ubuntu Server',
    slug: 'ubuntu-server',
    definition: 'Ubuntu Server is a server-oriented version of the Ubuntu Linux distribution, known for its ease of use and strong community support.',
    example: 'He deployed his new web application on a cloud VM running Ubuntu Server.'
  },
  {
    id: 'udp-hole-punching',
    term: 'UDP Hole Punching',
    slug: 'udp-hole-punching',
    definition: 'UDP Hole Punching is a technique used in computer networking for establishing a direct UDP connection between two parties in private networks behind NATs.',
    example: 'Peer-to-peer games often use UDP hole punching to allow players to connect directly to each other for lower latency.'
  },
  {
    id: 'ui-virtualization',
    term: 'UI Virtualization',
    slug: 'ui-virtualization',
    definition: 'UI Virtualization is a technique where only the visible UI elements are created and rendered, improving performance when displaying very large lists of items.',
    example: 'The chat application used UI virtualization to smoothly display a history of thousands of messages without creating a UI element for every single one.'
  },
  {
    id: 'ulid',
    term: 'ULID',
    slug: 'ulid',
    definition: 'A Universally Unique Lexicographically Sortable Identifier (ULID) is a 128-bit identifier that is sortable by creation time.',
    example: 'They used ULIDs for their database primary keys because they are unique like UUIDs but can be sorted chronologically.'
  },
  {
    id: 'uma-unified-memory-arch',
    term: 'UMA',
    slug: 'uma-unified-memory-arch',
    definition: 'A Unified Memory Architecture (UMA) is a computer memory architecture where the CPU and GPU share the same system RAM, as opposed to the GPU having its own dedicated VRAM.',
    example: 'Laptops with integrated graphics typically use a UMA design, which is more power-efficient but offers lower performance than a dedicated GPU.'
  },
  {
    id: 'uma-fabric',
    term: 'UMA Fabric',
    slug: 'uma-fabric',
    definition: 'In hardware, a UMA Fabric refers to the high-speed interconnect that connects the CPU, GPU, and other processors to a shared pool of memory in a Unified Memory Architecture system.',
    example: 'Apple\'s M-series chips feature a UMA fabric that allows the CPU and GPU to access the same memory with very low latency.'
  },
  {
    id: 'ump-microkernel',
    term: 'UMP (Microkernel)',
    slug: 'ump-microkernel',
    definition: 'A type of operating system kernel (µ-kernel) that provides only the minimal mechanisms needed to implement an OS, such as address space management and inter-process communication.',
    example: 'The QNX operating system, used in many embedded systems, is based on a microkernel design for high reliability.'
  },
  {
    id: 'underclock',
    term: 'Underclock',
    slug: 'underclock',
    definition: 'Underclock is the practice of running a computer processor at a lower clock speed than it is rated for, to reduce power consumption and heat.',
    example: 'He decided to underclock the CPU in his silent home server to make the fans run slower and quieter.'
  },
  {
    id: 'unicode-escape',
    term: 'Unicode Escape',
    slug: 'unicode-escape',
    definition: 'A Unicode Escape is a way of representing a Unicode character using its code point in ASCII text, such as `\\u20AC` for the Euro symbol.',
    example: 'The JSON file used a Unicode escape sequence to represent a special character that couldn\'t be typed directly.'
  },
  {
    id: 'unmarshalling',
    term: 'Unmarshalling',
    slug: 'unmarshalling',
    definition: 'Unmarshalling is the process of transforming a representation of an object from a serialized format (like a string) back into a live object in memory. Also known as deserialization.',
    example: 'The program received a JSON string from the API and then performed unmarshalling to convert it into a user object.'
  },
  {
    id: 'unmount',
    term: 'Unmount',
    slug: 'unmount',
    definition: 'In computing, to Unmount is to make a disk or device inaccessible to the file system. It is the opposite of mounting.',
    example: 'It\'s important to properly "eject" or unmount a USB drive before physically removing it to prevent data corruption.'
  },
  {
    id: 'upstream-branch',
    term: 'Upstream Branch',
    slug: 'upstream-branch',
    definition: 'In Git, the Upstream Branch is the remote branch that a local branch is tracking. It is the branch you fetch from and push to.',
    example: 'He configured his local `main` branch to track the `origin/main` upstream branch.'
  },
  {
    id: 'uptime',
    term: 'Uptime',
    slug: 'uptime',
    definition: 'Uptime is a measure of the time a computer or system has been "up" and running without a restart or crash.',
    example: 'The Linux server had an uptime of 365 days, showcasing its stability.'
  },
  {
    id: 'url-encoding',
    term: 'URL Encoding',
    slug: 'url-encoding',
    definition: 'URL Encoding is a mechanism for encoding information in a Uniform Resource Identifier (URI) under certain circumstances. It replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.',
    example: 'The space character in the search query was converted to `%20` through URL encoding before being sent to the server.'
  },
  {
    id: 'usb-debugging',
    term: 'USB Debugging',
    slug: 'usb-debugging',
    definition: 'USB Debugging is a mode on Android devices that allows a developer to communicate with the device over a USB connection, using tools like ADB.',
    example: 'To install the custom app on his phone, he first had to enable USB Debugging in the developer options.'
  },
  {
    id: 'userland',
    term: 'Userland',
    slug: 'userland',
    definition: 'Userland is the part of a computer\'s memory (or user space) where user applications run. It is separate from the kernel space, which is reserved for the operating system.',
    example: 'A crash in a userland application will typically not bring down the entire operating system, unlike a crash in kernel space.'
  },
  {
    id: 'utm-machine',
    term: 'UTM Machine',
    slug: 'utm-machine',
    definition: 'A Universal Turing Machine (UTM Machine) is a theoretical Turing machine that can simulate an arbitrary Turing machine on arbitrary input. The UTM proves that it is possible to build a single, general-purpose computer.',
    example: 'The concept of the UTM is the theoretical foundation for all modern, general-purpose computers.'
  },
  {
    id: 'uuid',
    term: 'UUID',
    slug: 'uuid',
    definition: 'A Universally Unique Identifier (UUID) is a 128-bit number used to identify information in computer systems. The probability of two UUIDs being the same is virtually zero.',
    example: 'The database used UUIDs as the primary key for the `products` table to ensure every product had a globally unique ID.'
  },
  {
    id: 'vagrant',
    term: 'Vagrant',
    slug: 'vagrant',
    definition: 'Vagrant is an open-source software product for building and maintaining portable virtual software development environments.',
    example: 'He used Vagrant to define a reproducible development environment in a single file, which his teammates could then spin up with a single command.'
  },
  {
    id: 'validation-schema',
    term: 'Validation Schema',
    slug: 'validation-schema',
    definition: 'A Validation Schema is a formal definition of the structure and rules that data must adhere to. It is used to check if the data is valid.',
    example: 'The application used a validation schema to ensure that the user\'s age was a positive number and their email was in a valid format before saving it.'
  },
  {
    id: 'vanilla-js',
    term: 'Vanilla JS',
    slug: 'vanilla-js',
    definition: 'Vanilla JS is a slang term for plain, standard JavaScript without any additional libraries or frameworks like React or jQuery.',
    example: 'For the simple landing page, he decided to use Vanilla JS instead of including a large framework.'
  },
  {
    id: 'vdsl',
    term: 'VDSL',
    slug: 'vdsl',
    definition: 'Very-high-bit-rate Digital Subscriber Line (VDSL) is a DSL technology providing faster data transmission over a single flat untwisted or twisted pair of copper wires.',
    example: 'He upgraded from ADSL to VDSL to get faster internet speeds over his existing phone line.'
  },
  {
    id: 'vectorization',
    term: 'Vectorization',
    slug: 'vectorization',
    definition: 'Vectorization is the process of converting an algorithm from a scalar implementation, which operates on a single pair of operands at a time, to a vector implementation, which operates on a set of operands at once. This is often done using SIMD instructions.',
    example: 'The programmer used vectorization to significantly speed up the image processing code by operating on multiple pixels simultaneously.'
  },
  {
    id: 'version-control',
    term: 'Version Control',
    slug: 'version-control',
    definition: 'Version Control is a system that records changes to a file or set of files over time so that you can recall specific versions later. Git is the most popular version control system.',
    example: 'The software team used a version control system to collaborate on code and track every change made to the project.'
  },
  {
    id: 'vesa-mount',
    term: 'VESA Mount',
    slug: 'vesa-mount',
    definition: 'A VESA Mount is a standard for mounting flat panel monitors, TVs, and other displays to stands or wall mounts.',
    example: 'He bought a monitor arm with a standard VESA mount to attach his monitor and free up desk space.'
  },
  {
    id: 'vfio',
    term: 'VFIO',
    slug: 'vfio',
    definition: 'Virtual Function I/O (VFIO) is a framework that allows a user-space driver to have direct, secure access to hardware devices. It is commonly used for GPU passthrough to virtual machines.',
    example: 'He configured VFIO to pass through his Nvidia GPU to a Windows VM, allowing him to play games with near-native performance.'
  },
  {
    id: 'vlan',
    term: 'VLAN',
    slug: 'vlan',
    definition: 'A Virtual Local Area Network (VLAN) is any broadcast domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2). It allows you to group devices into separate logical networks on the same physical switch.',
    example: 'The company put the guest Wi-Fi on a separate VLAN to isolate it from the internal corporate network for security.'
  },
  {
    id: 'vm-snapshot',
    term: 'VM Snapshot',
    slug: 'vm-snapshot',
    definition: 'A VM Snapshot is a copy of a virtual machine\'s state (including its memory, settings, and disks) at a given point in time.',
    example: 'Before installing the risky software, he took a VM snapshot so he could instantly revert the machine to its previous state if anything went wrong.'
  },
  {
    id: 'vnc',
    term: 'VNC',
    slug: 'vnc',
    definition: 'Virtual Network Computing (VNC) is a graphical desktop-sharing system that uses the Remote Frame Buffer protocol (RFB) to remotely control another computer.',
    example: 'He used a VNC client to remotely view and control the desktop of his Linux server, which didn\'t have a physical monitor attached.'
  },
  {
    id: 'voice-vlan',
    term: 'Voice VLAN',
    slug: 'voice-vlan',
    definition: 'A Voice VLAN is a special VLAN dedicated to carrying voice traffic from IP phones. This allows voice traffic to be prioritized and separated from data traffic.',
    example: 'The network switch was configured with a voice VLAN to ensure that VoIP calls would have clear audio quality even when the network was busy.'
  },
  {
    id: 'vpc',
    term: 'VPC',
    slug: 'vpc',
    definition: 'A Virtual Private Cloud (VPC) is an on-demand configurable pool of shared computing resources allocated within a public cloud environment, providing a certain level of isolation between the different organizations using the resources.',
    example: 'He launched his new application servers inside a VPC in AWS to create a logically isolated section of the cloud that he could control.'
  },
  {
    id: 'vram',
    term: 'VRAM',
    slug: 'vram',
    definition: 'Video RAM (VRAM) is a type of RAM used to store image data for a computer display. It acts as a buffer between the CPU and the video card.',
    example: 'The new graphics card had 12GB of VRAM, which was essential for playing modern games at high resolutions.'
  },
  {
    id: 'vpn-tunnel',
    term: 'VPN Tunnel',
    slug: 'vpn-tunnel',
    definition: 'A VPN Tunnel is an encrypted connection over a public network (like the internet) that allows for the secure transmission of data as if it were on a private network.',
    example: 'When working from the coffee shop, he connected to the company\'s VPN tunnel to securely access internal files.'
  },
  {
    id: 'vps',
    term: 'VPS',
    slug: 'vps',
    definition: 'A Virtual Private Server (VPS) is a virtual machine sold as a service by an Internet hosting service. It runs its own copy of an operating system, and customers have superuser-level access to that OS instance.',
    example: 'Instead of expensive dedicated hardware, he ran his website on a small VPS that cost only $5 a month.'
  },
  {
    id: 'vsync',
    term: 'Vsync',
    slug: 'vsync',
    definition: 'Vertical Sync (Vsync) is a graphics technology that synchronizes the frame rate of a game with a monitor\'s refresh rate to prevent screen tearing.',
    example: 'He enabled Vsync in the game settings to fix the distracting screen tearing, but it introduced a small amount of input lag.'
  },
  {
    id: 'wake-on-lan',
    term: 'Wake-on-LAN',
    slug: 'wake-on-lan',
    definition: 'Wake-on-LAN is an Ethernet or Token Ring computer networking standard that allows a computer to be turned on or awakened by a network message.',
    example: 'He used a mobile app to send a Wake-on-LAN "magic packet" to turn on his home PC remotely.'
  },
  {
    id: 'wan-optimization',
    term: 'WAN Optimization',
    slug: 'wan-optimization',
    definition: 'WAN Optimization is a collection of techniques for increasing data-transfer efficiencies across a wide-area network (WAN).',
    example: 'The company installed a WAN optimization appliance in each branch office to speed up file transfers and reduce bandwidth usage.'
  },
  {
    id: 'wasm',
    term: 'WASM',
    slug: 'wasm',
    definition: 'WebAssembly (WASM) is an open standard that defines a portable binary-code format for executable programs, enabling high-performance applications on web pages.',
    example: 'They compiled their C++ video editing application to WASM to run it directly in the web browser with near-native speed.'
  },
  {
    id: 'watchdog-timer',
    term: 'Watchdog Timer',
    slug: 'watchdog-timer',
    definition: 'A Watchdog Timer is an electronic timer that is used to detect and recover from computer malfunctions. If the timer is not reset periodically (a process called "kicking the watchdog"), it will trigger a system reset.',
    example: 'The embedded system in the Mars rover uses a watchdog timer to automatically reboot itself if the software ever freezes.'
  },
  {
    id: 'webrtc',
    term: 'WebRTC',
    slug: 'webrtc',
    definition: 'Web Real-Time Communication (WebRTC) is a free, open-source project providing web browsers and mobile applications with real-time communication (RTC) via simple APIs.',
    example: 'Browser-based video chat applications like Google Meet use WebRTC to establish direct peer-to-peer connections for streaming audio and video.'
  },
  {
    id: 'websocket',
    term: 'WebSocket',
    slug: 'websocket',
    definition: 'A WebSocket is a computer communications protocol, providing full-duplex communication channels over a single TCP connection. It is used for real-time applications like live chat and online gaming.',
    example: 'The live stock ticker on the website used a WebSocket to receive real-time price updates from the server without constantly polling it.'
  },
  {
    id: 'whitelisting',
    term: 'Whitelisting',
    slug: 'whitelisting',
    definition: 'Whitelisting is the practice of specifying an index of approved software applications that are permitted to be present and active on a computer system. It is the opposite of blacklisting.',
    example: 'The high-security server used application whitelisting, where only a few pre-approved programs were allowed to run, and all others were blocked.'
  },
  {
    id: 'wireshark',
    term: 'Wireshark',
    slug: 'wireshark',
    definition: 'Wireshark is a free and open-source packet analyzer. It is used for network troubleshooting, analysis, software and communications protocol development, and education.',
    example: 'The network engineer used Wireshark to capture the network traffic and figure out why the application was failing to connect to the database.'
  },
  {
    id: 'wmi',
    term: 'WMI',
    slug: 'wmi',
    definition: 'Windows Management Instrumentation (WMI) is a set of extensions to the Windows Driver Model that provides an operating system interface through which instrumented components provide information and notification.',
    example: 'The system administrator wrote a script that used WMI to query the amount of free disk space on all the servers in the network.'
  },
  {
    id: 'wsl',
    term: 'WSL',
    slug: 'wsl',
    definition: 'Windows Subsystem for Linux (WSL) is a compatibility layer for running Linux binary executables natively on Windows 10 and Windows Server 2019.',
    example: 'He used WSL to run his favorite Linux command-line tools like `grep` and `awk` directly within his Windows environment.'
  },
  {
    id: 'write-back-cache',
    term: 'Write-Back Cache',
    slug: 'write-back-cache',
    definition: 'A Write-Back Cache is a caching method where modifications to data in the cache are not immediately written to the main memory. Instead, they are written back at a later time.',
    example: 'The storage controller used a write-back cache with a battery backup to speed up write operations without risking data loss on power failure.'
  },
  {
    id: 'write-ahead-log',
    term: 'Write-Ahead Log',
    slug: 'write-ahead-log',
    definition: 'A Write-Ahead Log is a standard method for ensuring data integrity in database systems. All modifications are written to a log before they are applied to the database itself.',
    example: 'The database uses a write-ahead log so that in the event of a crash, it can recover by replaying the committed transactions from the log.'
  },
  {
    id: 'x-509-certificate',
    term: 'X.509 Certificate',
    slug: 'x-509-certificate',
    definition: 'An X.509 Certificate is a digital certificate that uses the widely accepted X.509 public key infrastructure (PKI) standard to verify that a public key belongs to the user, computer or service identity contained within the certificate.',
    example: 'The SSL certificate used by the web server was an X.509 certificate signed by a trusted Certificate Authority.'
  },
  {
    id: 'xamp-stack',
    term: 'XAMP Stack',
    slug: 'xamp-stack',
    definition: 'A XAMP Stack is a free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages.',
    example: 'As a beginner, he installed XAMPP to easily set up a local PHP and MySQL development environment on his Windows machine.'
  },
  {
    id: 'x86_64',
    term: 'x86_64',
    slug: 'x86_64',
    definition: 'x86_64 is the 64-bit version of the x86 instruction set, the instruction set architecture for most modern desktop and laptop computers.',
    example: 'He downloaded the x86_64 version of the software, as he was running a 64-bit Windows operating system.'
  },
  {
    id: 'xcode',
    term: 'Xcode',
    slug: 'xcode',
    definition: 'Xcode is Apple\'s integrated development environment (IDE) for macOS, used to develop software for macOS, iOS, iPadOS, watchOS, and tvOS.',
    example: 'To build his new iPhone app, he had to download and install Xcode from the Mac App Store.'
  },
  {
    id: 'xfce',
    term: 'XFCE',
    slug: 'xfce',
    definition: 'XFCE is a lightweight desktop environment for Unix-like operating systems. It aims to be fast and low on system resources, while still being visually appealing and user friendly.',
    example: 'He installed XFCE on his old laptop to give it a fast and responsive desktop experience without consuming too much RAM.'
  },
  {
    id: 'xml-rpc',
    term: 'XML-RPC',
    slug: 'xml-rpc',
    definition: 'XML Remote Procedure Call (XML-RPC) is a remote procedure call (RPC) protocol which uses XML to encode its calls and HTTP as a transport mechanism. It\'s a simpler predecessor to SOAP.',
    example: 'The legacy system had an API that used XML-RPC, which was more complex to work with than modern JSON-based REST APIs.'
  },
  {
    id: 'xor-encryption',
    term: 'XOR Encryption',
    slug: 'xor-encryption',
    definition: 'XOR Encryption is a simple type of encryption where the original text is combined with a key using the bitwise XOR operation. Applying the same key again decrypts the message.',
    example: 'While not secure for serious use, simple malware sometimes uses XOR encryption to weakly obfuscate its network traffic.'
  },
  {
    id: 'yarn',
    term: 'Yarn',
    slug: 'yarn',
    definition: 'Yarn is a package manager for your code. It allows you to use and share code with other developers. It is a popular alternative to npm for JavaScript projects.',
    example: 'He ran `yarn install` to download all the dependencies listed in his `package.json` file.'
  },
  {
    id: 'yarn-resource-manager',
    term: 'YARN',
    slug: 'yarn-resource-manager',
    definition: 'Yet Another Resource Negotiator (YARN) is a core component of Apache Hadoop that is responsible for resource management and job scheduling.',
    example: 'The YARN Resource Manager allocated containers on the cluster nodes to run the MapReduce job.'
  },
  {
    id: 'yubikey',
    term: 'YubiKey',
    slug: 'yubikey',
    definition: 'A YubiKey is a hardware authentication device that provides a strong, second factor of authentication. It plugs into a USB port and generates one-time passwords or uses public-key cryptography.',
    example: 'For maximum security, he protected his email account with a YubiKey, requiring the physical key to be present to log in.'
  },
  {
    id: 'z-buffer',
    term: 'Z-buffer',
    slug: 'z-buffer',
    definition: 'In 3D computer graphics, a Z-buffer (or depth buffer) is used to determine which objects are visible and which are hidden from view. It stores the depth of each pixel.',
    example: 'Without a Z-buffer, objects in the 3D scene would not render correctly, with distant objects sometimes appearing in front of closer ones.'
  },
  {
    id: 'zfs',
    term: 'ZFS',
    slug: 'zfs',
    definition: 'ZFS is a combined file system and logical volume manager known for its high data integrity, support for large storage capacities, and features like snapshots and copy-on-write.',
    example: 'He built his home NAS using ZFS to protect his data from silent corruption and to easily create snapshots before making changes.'
  },
  {
    id: 'zig-programming-language',
    term: 'Zig',
    slug: 'zig-programming-language',
    definition: 'Zig is a general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software. It is a modern alternative to C.',
    example: 'The developer chose Zig for the embedded project because it gave him low-level control over memory without the manual memory management of C.'
  },
  {
    id: 'zram',
    term: 'ZRAM',
    slug: 'zram',
    definition: 'ZRAM is a Linux kernel module that creates a compressed block device in RAM. This can be used for swap space, effectively increasing the amount of usable memory in the system.',
    example: 'He enabled zram on his Raspberry Pi to create a compressed swap space in RAM, which was much faster than using the slow SD card for swap.'
  },
  {
    id: 'zsh',
    term: 'Zsh',
    slug: 'zsh',
    definition: 'Z shell (Zsh) is a Unix shell that can be used as an interactive login shell and as a command interpreter for shell scripting. It is an extended Bourne shell with a large number of improvements.',
    example: 'He switched from Bash to Zsh and installed "Oh My Zsh" to get powerful plugin support and better autocompletion.'
  },
  {
    id: 'ztp-zero-touch-provisioning',
    term: 'ZTP',
    slug: 'ztp-zero-touch-provisioning',
    definition: 'Zero Touch Provisioning (ZTP) is a feature that allows network devices to be configured and deployed automatically without manual intervention.',
    example: 'With ZTP, the technician could simply plug in the new network switch, and it would automatically download its configuration from a central server.'
  },
  {
    id: 'z-wave',
    term: 'Z-Wave',
    slug: 'z-wave',
    definition: 'Z-Wave is a wireless communications protocol used primarily for home automation. It creates a mesh network where devices can relay signals to each other.',
    example: 'He built his smart home system using Z-Wave devices because of their reliability and low power consumption.'
  },
  {
    id: 'zero-day',
    term: 'Zero-Day',
    slug: 'zero-day',
    definition: 'A Zero-Day is a software security flaw that is known to the software vendor but doesn\'t have a patch in place to fix it. An attack using a zero-day vulnerability is a zero-day attack.',
    example: 'The hackers were able to breach the company\'s network by exploiting a zero-day vulnerability in their web browser.'
  },
  {
    id: 'zero-trust',
    term: 'Zero-Trust',
    slug: 'zero-trust',
    definition: 'A Zero-Trust security model which is a strategic approach to cybersecurity that secures an organization by eliminating implicit trust and continuously validating every stage of a digital interaction.',
    example: 'The company moved to a Zero Trust model, where every user and device must be authenticated and authorized before accessing any resource, regardless of their location.'
  },
  {
    id: 'zombie-process',
    term: 'Zombie Process',
    slug: 'zombie-process',
    definition: 'A Zombie Process is a process on a Unix-like operating system that has completed execution but still has an entry in the process table. It occurs when the parent process fails to "reap" its child process.',
    example: 'The `ps` command showed several zombie processes, which indicated a bug in the parent application that wasn\'t cleaning up its children correctly.'
  },
  {
    id: 'zonal-dns',
    term: 'Zonal DNS',
    slug: 'zonal-dns',
    definition: 'Zonal DNS refers to managing DNS records within a specific zone. A zone is a portion of the domain name space that is managed by a specific organization or administrator.',
    example: 'Changes to the company\'s website records were made in their specific zonal DNS file, without affecting the parent domain.'
  },
  {
    id: 'zookeeper-apache',
    term: 'Zookeeper (Apache)',
    slug: 'zookeeper-apache',
    definition: 'Zookeeper (Apache) is a centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services for large distributed systems.',
    example: 'Distributed systems like Kafka and Hadoop use ZooKeeper for cluster coordination and leader election.'
  },
  {
    id: 'mobo',
    term: 'Mobo',
    slug: 'mobo',
    definition: 'Slang for Motherboard, the main printed circuit board in a computer.',
    example: 'I need to upgrade my mobo to support the new CPU.'
  },
  {
    id: 'proc',
    term: 'Proc',
    slug: 'proc',
    definition: 'Slang for Processor or CPU (Central Processing Unit).',
    example: 'What proc are you running in that gaming rig?'
  },
  {
    id: 'vidcard-vgpu',
    term: 'Vidcard / vGPU',
    slug: 'vidcard-vgpu',
    definition: 'Slang for Video Card or Graphics Processing Unit (GPU).',
    example: 'I need a better vidcard to play this game on ultra settings.'
  },
  {
    id: 'thermal-paste-tim',
    term: 'Thermal Paste (TIM)',
    slug: 'thermal-paste-tim',
    definition: 'A Thermal Interface Material is a substance applied between a CPU/GPU and its heatsink to improve heat transfer.',
    example: 'My CPU was overheating, so I had to reapply some fresh thermal paste.'
  },
  {
    id: 'speccing',
    term: 'Speccing',
    slug: 'speccing',
    definition: 'The act of choosing the specifications (specs) for a new computer or server.',
    example: 'He spent all week speccing out his new PC build.'
  },
  {
    id: 'hard-reset',
    term: 'Hard Reset',
    slug: 'hard-reset',
    definition: 'Restarting a device by cutting and reapplying power, such as holding down the power button or unplugging it. It does not erase data.',
    example: 'The router was frozen, so I had to perform a hard reset by pulling the power cord.'
  },
  {
    id: 'soft-reset',
    term: 'Soft Reset',
    slug: 'soft-reset',
    definition: 'Restarting a device through the operating system\'s restart function, allowing for a graceful shutdown of programs.',
    example: 'A simple soft reset fixed the minor software glitch on my phone.'
  },
  {
    id: 'qol-patch',
    term: 'QoL Patch',
    slug: 'qol-patch',
    definition: 'A Quality of Life Patch is a software update that doesn\'t add major new features, but instead focuses on improving usability and user experience.',
    example: 'The latest game update was just a QoL patch that improved the inventory management system.'
  },
  {
    id: 'bricked',
    term: 'Bricked',
    slug: 'bricked',
    definition: 'A slang term for an electronic device that has been rendered completely unusable, usually due to a failed firmware update or hardware damage.',
    example: 'The power went out during the BIOS update and now my motherboard is completely bricked.'
  },
  {
    id: 'overclock',
    term: 'Overclock',
    slug: 'overclock',
    definition: 'The practice of increasing a component\'s clock rate, running it at a higher speed than it was designed to run.',
    example: 'He was able to overclock his CPU from 3.6 GHz to 4.2 GHz to get better gaming performance.'
  },
  {
    id: 'undervolt',
    term: 'Undervolt',
    slug: 'undervolt',
    definition: 'The process of reducing the voltage supplied to a component (like a CPU or GPU) to decrease heat output and power consumption, often without losing performance.',
    example: 'He decided to undervolt his laptop\'s CPU to make it run cooler and extend its battery life.'
  },
  {
    id: 'silicon-lottery',
    term: 'Silicon Lottery',
    slug: 'silicon-lottery',
    definition: 'A slang term referring to the random variation in quality between individual microchips. A "good" chip can overclock much higher than a "bad" one from the exact same batch.',
    example: 'He won the silicon lottery; his new CPU could run at a much higher clock speed than his friend\'s identical model.'
  },
  {
    id: 'fork-bomb',
    term: 'Fork Bomb',
    slug: 'fork-bomb',
    definition: 'A denial-of-service attack wherein a process continually replicates itself to deplete available system resources, slowing down or crashing the system.',
    example: 'He accidentally ran a fork bomb script on the server, which quickly consumed all the RAM and forced a reboot.'
  },
  {
    id: 'kernel-dump',
    term: 'Kernel Dump',
    slug: 'kernel-dump',
    definition: 'A file containing the contents of the kernel\'s memory space at the time of a system crash, used for debugging the cause of the crash.',
    example: 'After the server experienced a kernel panic, it saved a kernel dump file for the engineers to analyze.'
  },
  {
    id: 'bottlenecking',
    term: 'Bottlenecking',
    slug: 'bottlenecking',
    definition: 'The act of a system\'s performance being limited by a single component (the bottleneck).',
    example: 'My new graphics card isn\'t reaching its full potential because my old CPU is bottlenecking it.'
  },
  {
    id: 'code-smell',
    term: 'Code Smell',
    slug: 'code-smell',
    definition: 'Any characteristic in the source code of a program that possibly indicates a deeper problem. It is not a bug itself, but a hint that something might be wrong with the design.',
    example: 'A very long function with many responsibilities is a common code smell that suggests it should be broken up into smaller functions.'
  },
  {
    id: 'boilerplate',
    term: 'Boilerplate',
    slug: 'boilerplate',
    definition: 'Sections of code that have to be included in many places with little or no alteration. It is often seen as "fluff" that is required by the language or framework.',
    example: 'He created a project template with all the necessary boilerplate code so he could start new projects more quickly.'
  },
  {
    id: 'shitcode-slang',
    term: 'Shitcode (slang)',
    slug: 'shitcode-slang',
    definition: 'A vulgar slang term for extremely poorly written, confusing, or non-functional source code.',
    example: 'The new developer had to spend a week rewriting the shitcode he inherited from the previous programmer.'
  },
  {
    id: 'tech-debt',
    term: 'Tech Debt',
    slug: 'tech-debt',
    definition: 'A concept in software development that reflects the implied cost of rework caused by choosing an easy (limited) solution now instead of using a better approach that would take longer.',
    example: 'They decided to take on some tech debt by using a quick hack to meet the deadline, but they knew they would have to refactor it properly later.'
  },
  {
    id: 'zombie-thread',
    term: 'Zombie Thread',
    slug: 'zombie-thread',
    definition: 'A thread of execution that has completed its work but has not been properly cleaned up by the parent process, consuming system resources.',
    example: 'The application became unstable as more and more zombie threads accumulated over time.'
  },
  {
    id: 'garbage-values',
    term: 'Garbage Values',
    slug: 'garbage-values',
    definition: 'Unintended, meaningless data that may be present in a variable or memory location that has been declared but not yet initialized.',
    example: 'The program produced an incorrect result because it was reading from a variable that contained a garbage value.'
  },
  {
    id: 'bitbanging',
    term: 'Bitbanging',
    slug: 'bitbanging',
    definition: 'A technique for serial communications using software instead of dedicated hardware. A programmer rapidly toggles the state of a GPIO pin to manually generate the signal waveform.',
    example: 'To save money on the hardware, he used bit-banging to implement the I2C protocol in software.'
  },
  {
    id: 'memory-thrash',
    term: 'Memory Thrash',
    slug: 'memory-thrash',
    definition: 'Occurs when a system spends an excessive amount of time swapping data between RAM and virtual memory on disk, leading to severe performance degradation.',
    example: 'Opening too many applications on the old computer with only 4GB of RAM caused constant memory thrashing.'
  },
  {
    id: 'disk-thrash',
    term: 'Disk Thrash',
    slug: 'disk-thrash',
    definition: 'A condition where a hard drive is being overworked by excessive read/write operations, causing a grinding or clicking noise and very slow performance.',
    example: 'The database server was experiencing severe disk thrashing as it tried to handle thousands of concurrent queries.'
  },
  {
    id: 'headcrash',
    term: 'Headcrash',
    slug: 'headcrash',
    definition: 'A catastrophic failure of a hard disk drive where the read-write head comes into contact with the spinning platters, physically destroying the drive and the data on it.',
    example: 'He dropped his laptop, and the sound of clicking indicated a headcrash, resulting in total data loss.'
  },
  {
    id: 'packet-loss-burst',
    term: 'Packet Loss Burst',
    slug: 'packet-loss-burst',
    definition: 'A situation where a large number of consecutive data packets are lost in transit over a network, often causing a noticeable disruption.',
    example: 'The online game became unplayable due to a sudden packet loss burst that lasted for several seconds.'
  },
  {
    id: 'shadow-it',
    term: 'Shadow IT',
    slug: 'shadow-it',
    definition: 'Information-technology systems and solutions built and used inside organizations without explicit organizational approval.',
    example: 'The marketing team started using a cloud file-sharing service without telling the IT department, an example of Shadow IT that created a security risk.'
  },
  {
    id: 'snowflake-server',
    term: 'Snowflake Server',
    slug: 'snowflake-server',
    definition: 'A server that has been configured manually and uniquely, making it difficult to reproduce or replace automatically. It\'s the opposite of an infrastructure-as-code approach.',
    example: 'They couldn\'t easily replace the failed server because it was a snowflake server with years of manual tweaks that were never documented.'
  },
  {
    id: 'duct-tape-code',
    term: 'Duct Tape Code',
    slug: 'duct-tape-code',
    definition: 'A slang term for code that is a quick and dirty fix, holding a system together but likely to fail or cause problems in the future.',
    example: 'The temporary fix was just some duct tape code to get the site back online; they would need to properly engineer a solution later.'
  },
  {
    id: 'cloud-bursting',
    term: 'Cloud Bursting',
    slug: 'cloud-bursting',
    definition: 'An application deployment model in which an application runs in a private cloud or data center and "bursts" to a public cloud when the demand for computing capacity spikes.',
    example: 'The retail site used cloud bursting to handle the massive traffic spike on Black Friday by offloading extra requests to AWS.'
  },
  {
    id: 'rage-click',
    term: 'Rage Click',
    slug: 'rage-click',
    definition: 'When a user repeatedly and rapidly clicks on a button or link in frustration because the application is not responding.',
    example: 'Analytics showed a lot of users were rage clicking the "Submit" button, indicating a performance issue with the form submission process.'
  },
  {
    id: 'heisenbug',
    term: 'Heisenbug',
    slug: 'heisenbug',
    definition: 'A software bug that seems to disappear or alter its behavior when one attempts to study it. The term is a pun on the Heisenberg uncertainty principle.',
    example: 'It was a classic Heisenbug; the error only occurred in the production environment and vanished whenever the developer tried to attach a debugger.'
  },
  {
    id: 'off-by-one-error',
    term: 'Off-by-One Error',
    slug: 'off-by-one-error',
    definition: 'A logic error involving the discrete equivalent of a boundary condition. It often occurs in computer programming when an iterative loop iterates one time too many or too few.',
    example: 'The loop was supposed to run 10 times, but an off-by-one error caused it to run only 9 times, resulting in incorrect output.'
  },
  {
    id: 'rubber-duck-debugging',
    term: 'Rubber Duck Debugging',
    slug: 'rubber-duck-debugging',
    definition: 'A method of debugging code where a programmer explains their code, line-by-line, to an inanimate object, such as a rubber duck. The act of explaining often helps them find the solution.',
    example: 'After being stuck for an hour, he tried rubber duck debugging and found the bug in his code just by explaining it out loud.'
  },
  {
    id: 'yak-shaving',
    term: 'Yak Shaving',
    slug: 'yak-shaving',
    definition: 'A programming slang term for the long series of tasks that must be performed before a primary task can be accomplished. It refers to getting sidetracked by a cascade of preliminary steps.',
    example: 'He just wanted to change the button color, but he ended up yak shaving for three hours, which involved upgrading the build system and three other libraries.'
  },
  {
    id: 'ghost-process',
    term: 'Ghost Process',
    slug: 'ghost-process',
    definition: 'A process that has terminated but remains visible in the system\'s process list because its parent process has not yet "reaped" it. Similar to a zombie process.',
    example: 'The system monitor showed several ghost processes left over from the crashed application.'
  },
  {
    id: 'race-condition',
    term: 'Race Condition',
    slug: 'race-condition',
    definition: 'An undesirable situation that occurs when a device or system attempts to perform two or more operations at the same time, but because of the nature of the device or system, the operations must be done in the proper sequence to be done correctly.',
    example: 'A race condition in the code allowed two users to book the last available seat at the same time.'
  },
  {
    id: 'bus-error',
    term: 'Bus Error',
    slug: 'bus-error',
    definition: 'A fatal error raised by a program when it attempts to access memory that the CPU cannot physically address, often due to an unaligned memory access.',
    example: 'The program crashed with a bus error because it tried to read a 32-bit integer from an address that was not a multiple of four.'
  },
  {
    id: 'null-byte-injection',
    term: 'Null Byte Injection',
    slug: 'null-byte-injection',
    definition: 'A security exploit where an attacker injects a null byte character (`%00`) into user-provided data to bypass security checks and manipulate strings in languages like C/C++.',
    example: 'The attacker used a null byte injection vulnerability to trick the application into accessing a file outside of its intended directory.'
  },
  {
    id: 'cooler-aio',
    term: 'Cooler / AIO',
    slug: 'cooler-aio',
    definition: 'Slang for a CPU cooler. AIO stands for "All-In-One" liquid cooler, a self-contained liquid cooling unit.',
    example: 'My proc was running hot, so I upgraded from the stock cooler to a much beefier AIO.'
  },
  {
    id: 'vid-card-gfx-card',
    term: 'Vid Card / GFX Card',
    slug: 'vid-card-gfx-card',
    definition: 'Slang for Video Card or Graphics Card, the component that renders images to the display.',
    example: 'I need a new GFX card if I want to play the latest games on ultra settings.'
  },
  {
    id: 'mem-sticks',
    term: 'Mem Sticks',
    slug: 'mem-sticks',
    definition: 'Slang for RAM (Random Access Memory) modules.',
    example: 'I added two more mem sticks to my mobo, upgrading my system to 32 gigs of RAM.'
  },
  {
    id: 'power-brick-juice-box',
    term: 'Power Brick / Juice Box',
    slug: 'power-brick-juice-box',
    definition: 'Slang for the PSU (Power Supply Unit) of a computer.',
    example: 'Make sure your juice box has enough wattage to handle that new video card.'
  },
  {
    id: 'throttling',
    term: 'Throttling',
    slug: 'throttling',
    definition: 'Short for Thermal Throttling, a safety mechanism where a component reduces its performance to lower its temperature.',
    example: 'My laptop gets slow when I game for too long due to thermal throttling.'
  },
  {
    id: 'solid-state-solid',
    term: 'Solid State / Solid',
    slug: 'solid-state-solid',
    definition: 'Slang for an SSD (Solid-State Drive), a type of storage device with no moving parts.',
    example: 'I installed the OS on my new solid state for lightning-fast boot times.'
  },
  {
    id: 'spinners-mechs',
    term: 'Spinners / Mechs',
    slug: 'spinners-mechs',
    definition: 'Slang for traditional HDDs (Hard Disk Drives) with spinning platters.',
    example: 'I use an SSD for my OS and keep all my large media files on the old spinners.'
  },
  {
    id: 'chassis-fans',
    term: 'Chassis Fans',
    slug: 'chassis-fans',
    definition: 'A more technical term for case fans, the fans that cool the inside of the computer case.',
    example: 'I installed three new chassis fans to improve the airflow in my PC case.'
  },
  {
    id: 'sink',
    term: 'Sink',
    slug: 'sink',
    definition: 'Short for heatsink, a component designed to dissipate heat from a processor.',
    example: 'That massive sink on the CPU cooler is doing a great job keeping temps down.'
  },
  {
    id: 'pcie-lead',
    term: 'PCIe Lead',
    slug: 'pcie-lead',
    definition: 'Slang for a PCIe power cable, used to provide extra power to high-end graphics cards.',
    example: 'Don\'t forget to plug in both PCIe leads, or the GFX card won\'t turn on.'
  },
  {
    id: 'sata-lead',
    term: 'SATA Lead',
    slug: 'sata-lead',
    definition: 'Slang for a SATA cable, used to connect storage drives to the motherboard.',
    example: 'I need another SATA lead to connect this new SSD.'
  },
  {
    id: 'debug-buzzer',
    term: 'Debug Buzzer',
    slug: 'debug-buzzer',
    definition: 'Slang for the small internal speaker that connects to the motherboard to provide audible error codes (beeps) during startup.',
    example: 'The PC wouldn\'t boot, but the debug buzzer gave me three short beeps, which means a RAM issue.'
  },
  {
    id: 'app',
    term: 'App',
    slug: 'app',
    definition: 'Short form for Application, a computer program designed for a specific task.',
    example: 'Have you tried the new photo editing app?'
  },
  {
    id: 'deps',
    term: 'Deps',
    slug: 'deps',
    definition: 'Short for Dependencies, the external libraries or packages a program needs to run.',
    example: 'Just run `npm install` to download all the project deps.'
  },
  {
    id: 'config',
    term: 'Config',
    slug: 'config',
    definition: 'Short for Configuration, the settings or parameters for a piece of software or hardware.',
    example: 'I had to edit the config file to change the database connection string.'
  },
  {
    id: 'repo',
    term: 'Repo',
    slug: 'repo',
    definition: 'Short for Repository, a central location where code is stored and managed, usually with version control like Git.',
    example: 'Just push your latest changes to the main repo.'
  },
  {
    id: 'docs',
    term: 'Docs',
    slug: 'docs',
    definition: 'Short for Documentation, the explanatory material that comes with a piece of software.',
    example: 'When in doubt, read the docs.'
  },
  {
    id: 'admin',
    term: 'Admin',
    slug: 'admin',
    definition: 'Short for Administrator, a user with elevated privileges to manage a system.',
    example: 'You\'ll need admin rights to install that software.'
  },
  {
    id: 'perms',
    term: 'Perms',
    slug: 'perms',
    definition: 'Short for Permissions, the access rights granted to users or files on a system.',
    example: 'The script failed because I didn\'t have write perms on that directory.'
  },
  {
    id: 'init',
    term: 'Init',
    slug: 'init',
    definition: 'Short for Initialization, the process of preparing a system or object for use.',
    example: 'The init script runs every time the server boots up.'
  },
  {
    id: 'temp-files',
    term: 'Temp Files / Temps',
    slug: 'temp-files',
    definition: 'Short for Temporary Files, files created by a program that are only needed for a short period.',
    example: 'You can clear out your temp files to free up some disk space.'
  },
  {
    id: 'js',
    term: 'JS',
    slug: 'js',
    definition: 'Abbreviation for JavaScript, a high-level programming language used for web development.',
    example: 'The entire front end is built with JS, HTML, and CSS.'
  },
  {
    id: 'ts',
    term: 'TS',
    slug: 'ts',
    definition: 'Abbreviation for TypeScript, a statically typed superset of JavaScript.',
    example: 'We use TS in our project to catch type errors at compile time.'
  },
  {
    id: 'exe',
    term: 'Exe',
    slug: 'exe',
    definition: 'Short for Executable, a file that contains a program that can be run by a computer.',
    example: 'Just double-click the setup.exe to start the installation.'
  },
  {
    id: 'comp-errors',
    term: 'Comp Errors',
    slug: 'comp-errors',
    definition: 'Short for Compilation Errors, errors that occur when a compiler tries to convert source code into machine code.',
    example: 'I spent an hour fixing comp errors because I missed a semicolon.'
  },
  {
    id: 'rt',
    term: 'RT',
    slug: 'rt',
    definition: 'Abbreviation for Router, a device that forwards data packets between computer networks.',
    example: 'I had to reboot the RT to get the internet working again.'
  },
  {
    id: 'ap',
    term: 'AP',
    slug: 'ap',
    definition: 'Abbreviation for Access Point, a networking hardware device that allows other Wi-Fi devices to connect to a wired network.',
    example: 'We need to install another AP on the third floor to improve the Wi-Fi signal.'
  },
  {
    id: 'pcap',
    term: 'pcap',
    slug: 'pcap',
    definition: 'Short for Packet Capture, a file containing data packets intercepted from a network.',
    example: 'I used Wireshark to analyze the pcap and diagnose the network issue.'
  },
  {
    id: 'fw',
    term: 'FW',
    slug: 'fw',
    definition: 'Abbreviation for Firewall, a network security system that monitors and controls incoming and outgoing network traffic.',
    example: 'We need to open port 8080 on the FW for the new web service.'
  },
  {
    id: 'config-dump',
    term: 'Config Dump',
    slug: 'config-dump',
    definition: 'Slang for a configuration backup, a file containing the complete configuration of a device.',
    example: 'I always take a config dump of the router before making any changes.'
  },
  {
    id: 'bw',
    term: 'BW',
    slug: 'bw',
    definition: 'Abbreviation for Bandwidth, the maximum rate of data transfer across a given path.',
    example: 'The video stream is lagging; we must be running out of BW.'
  },
  {
    id: 'ping-delay',
    term: 'Ping / Delay',
    slug: 'ping-delay',
    definition: 'Slang for Latency, the time it takes for a data packet to travel from the source to the destination.',
    example: 'My ping to the game server is over 200ms, it\'s unplayable.'
  },
  {
    id: 'switch-stack',
    term: 'Stack',
    slug: 'switch-stack',
    definition: 'A switch stack is a set of network switches that have been configured to operate together as a single logical switch.',
    example: 'We can increase our port capacity by adding another switch to the stack.'
  },
  {
    id: 'lb',
    term: 'LB',
    slug: 'lb',
    definition: 'Abbreviation for Load Balancer, a device that distributes network or application traffic across a number of servers.',
    example: 'The traffic is routed through the LB to ensure no single server gets overloaded.'
  },
  {
    id: 'nic',
    term: 'NIC',
    slug: 'nic',
    definition: 'Abbreviation for Network Interface Card, the hardware that connects a computer to a computer network.',
    example: 'The server has a 10 gigabit NIC for faster network performance.'
  },
  {
    id: 'vm',
    term: 'VM',
    slug: 'vm',
    definition: 'Abbreviation for Virtual Machine, an emulation of a computer system.',
    example: 'I\'m running a Linux VM on my Windows laptop to test the application.'
  },
  {
    id: 'image',
    term: 'Image',
    slug: 'image',
    definition: 'Short for Container Image, a lightweight, standalone, executable package of software that includes everything needed to run it.',
    example: 'He pushed the latest Docker image to the container registry.'
  },
  {
    id: 'env-vars',
    term: 'Env Vars',
    slug: 'env-vars',
    definition: 'Short for Environment Variables, a dynamic-named value that can affect the way running processes will behave on a computer.',
    example: 'The database password is not hardcoded; it\'s passed in through env vars.'
  },
  {
    id: 'config-mgmt',
    term: 'Config Mgmt',
    slug: 'config-mgmt',
    definition: 'Short for Configuration Management, the process for maintaining computer systems and software in a desired, consistent state.',
    example: 'We use Ansible for our config mgmt to automate server setup.'
  },
  {
    id: 'reboot-bounce',
    term: 'Reboot / Bounce',
    slug: 'reboot-bounce',
    definition: 'Slang for restarting a server or service.',
    example: 'The service is frozen, can you give it a bounce?'
  },
  {
    id: 'debug',
    term: 'Debug',
    slug: 'debug',
    definition: 'Short for Debugging, the process of finding and resolving defects or problems within a computer program.',
    example: 'I have to debug this function to figure out why it\'s returning the wrong value.'
  },
  {
    id: 'deploy',
    term: 'Deploy',
    slug: 'deploy',
    definition: 'Short for Deployment, the process of making an application or system available for use.',
    example: 'We\'re going to deploy the new version to production tonight.'
  },
  {
    id: 'prod',
    term: 'Prod',
    slug: 'prod',
    definition: 'Short for Production, the live environment where software is used by end-users.',
    example: 'Don\'t test new features in prod; use the dev environment.'
  },
  {
    id: 'dev',
    term: 'Dev',
    slug: 'dev',
    definition: 'Short for Development, the environment where developers build and test software.',
    example: 'The latest changes are on the dev server if you want to test them.'
  },
  {
    id: 'stage-stg',
    term: 'Stage / Stg',
    slug: 'stage-stg',
    definition: 'Short for Staging, an environment for testing that exactly resembles the production environment.',
    example: 'The feature has passed QA and is now deployed to stg for final review.'
  },
  {
    id: 'dt',
    term: 'DT',
    slug: 'dt',
    definition: 'Abbreviation for Downtime, a period when a system is unavailable.',
    example: 'The planned DT for the server maintenance is scheduled for Sunday at 2 AM.'
  },
  {
    id: 'svc-account',
    term: 'Svc Account',
    slug: 'svc-account',
    definition: 'Short for Service Account, a special type of account used by an application or service rather than a person.',
    example: 'The backup script runs under a svc account with limited permissions.'
  },
  {
    id: 'mal',
    term: 'Mal',
    slug: 'mal',
    definition: 'Short for Malware, software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.',
    example: 'The antivirus scan detected some mal on his computer.'
  },
  {
    id: 'sploit',
    term: 'Sploit',
    slug: 'sploit',
    definition: 'Slang for Exploit, a piece of code that takes advantage of a software vulnerability.',
    example: 'He wrote a sploit for the new browser vulnerability.'
  },
  {
    id: 'vuln',
    term: 'Vuln',
    slug: 'vuln',
    definition: 'Short for Vulnerability, a weakness which can be exploited by a threat actor.',
    example: 'They need to patch that server immediately to fix a critical RCE vuln.'
  },
  {
    id: 'creds',
    term: 'Creds',
    slug: 'creds',
    definition: 'Short for Credentials, such as a username and password, used to verify a user\'s identity.',
    example: 'Never share your login creds with anyone.'
  },
  {
    id: 'logger',
    term: 'Logger',
    slug: 'logger',
    definition: 'Short for Keylogger, a type of malware that records the keys struck on a keyboard.',
    example: 'The attacker installed a logger to steal the victim\'s passwords.'
  },
  {
    id: '2fa',
    term: '2FA',
    slug: '2fa',
    definition: 'Abbreviation for Two-Factor Authentication, a security process where users provide two different authentication factors to verify themselves.',
    example: 'You should enable 2FA on all your important accounts.'
  },
  {
    id: 'mitm',
    term: 'MITM',
    slug: 'mitm',
    definition: 'Abbreviation for Man-in-the-Middle, a cyberattack where the attacker secretly relays and possibly alters the communication between two parties.',
    example: 'Using public Wi-Fi without a VPN makes you vulnerable to MITM attacks.'
  },
  {
    id: '0-day',
    term: '0-Day',
    slug: '0-day',
    definition: 'Short for Zero-Day, a vulnerability that is unknown to those who should be interested in mitigating it (including the vendor of the target software).',
    example: 'The hackers used a 0-day exploit to breach the network.'
  },
  {
    id: 'bot-herd',
    term: 'Bot Herd',
    slug: 'bot-herd',
    definition: 'Slang for a botnet, a network of private computers infected with malicious software and controlled as a group without the owners\' knowledge.',
    example: 'The DDoS attack was launched from a massive bot herd of IoT devices.'
  },
  {
    id: 'brick',
    term: 'Brick',
    slug: 'brick',
    definition: 'Slang for a device that has been rendered completely non-functional.',
    example: 'A failed firmware update turned his expensive router into a brick.'
  },
  {
    id: 'lag',
    term: 'Lag',
    slug: 'lag',
    definition: 'A noticeable delay between the action of a user and the response of the application.',
    example: 'There\'s too much lag in this game, my character is moving a second after I press the key.'
  },
  {
    id: 'buggy-glitchy',
    term: 'Buggy / Glitchy',
    slug: 'buggy-glitchy',
    definition: 'Slang for software that has many bugs or glitches, causing it to behave unpredictably.',
    example: 'I can\'t use this new app, it\'s too buggy and crashes all the time.'
  },
  {
    id: 'thermal-issue-running-hot',
    term: 'Thermal Issue / Running Hot',
    slug: 'thermal-issue-running-hot',
    definition: 'Slang for a component that is overheating.',
    example: 'My laptop is running hot, I think the fans are clogged with dust.'
  },
  {
    id: 'oc',
    term: 'OC',
    slug: 'oc',
    definition: 'Abbreviation for Overclock, the practice of making a computer component run at a higher clock speed than its original rating.',
    example: 'I managed to get a stable OC on my CPU and gained a 10% performance boost.'
  },
  {
    id: 'uv',
    term: 'UV',
    slug: 'uv',
    definition: 'Abbreviation for Undervolt, the process of reducing the voltage to a component to lower heat and power consumption.',
    example: 'A slight UV on my GPU made it run much quieter.'
  },
  {
    id: 'borked',
    term: 'Borked',
    slug: 'borked',
    definition: 'Slang for something that is broken or not working correctly.',
    example: 'The latest update completely borked my audio drivers.'
  },
  {
    id: 'shortcut',
    term: 'Shortcut',
    slug: 'shortcut',
    definition: 'A more common term for a hotkey, a key or combination of keys providing quick access to a particular function.',
    example: 'The shortcut for copy is Ctrl+C.'
  },
  {
    id: 'cmd',
    term: 'Cmd',
    slug: 'cmd',
    definition: 'Short for Command, often used to refer to the command prompt or a command-line interface.',
    example: 'Just open cmd and type `ping google.com`.'
  },
  {
    id: 'ss',
    term: 'SS',
    slug: 'ss',
    definition: 'Short for Screenshot, an image taken of what is on a computer screen.',
    example: 'Can you send me a ss of the error message?'
  },
  {
    id: 'dimms',
    term: 'DIMMs',
    slug: 'dimms',
    definition: 'Dual In-Line Memory Modules are the physical sticks of RAM that plug into a motherboard.',
    example: 'To upgrade his memory, he bought two new 16GB DIMMs.'
  },
  {
    id: 'vrms',
    term: 'VRMs',
    slug: 'vrms',
    definition: 'Voltage Regulator Modules are components on a motherboard that provide a clean and stable power supply to the CPU.',
    example: 'A motherboard with high-quality VRMs is essential for stable overclocking.'
  },
  {
    id: 'qvl',
    term: 'QVL',
    slug: 'qvl',
    definition: 'The Qualified Vendor List is a list published by a motherboard manufacturer that details which RAM kits have been tested and are guaranteed to work.',
    example: 'He checked the QVL to make sure the RAM he wanted was compatible with his motherboard.'
  },
  {
    id: 'post',
    term: 'POST',
    slug: 'post',
    definition: 'The Power-On Self-Test is the initial set of diagnostic tests performed by the BIOS when a computer is turned on.',
    example: 'The computer failed to POST, so he checked the debug LEDs to see what was wrong.'
  },
  {
    id: 'cmos-reset',
    term: 'CMOS reset',
    slug: 'cmos-reset',
    definition: 'The act of clearing the CMOS memory on a motherboard to reset the BIOS settings to their factory defaults.',
    example: 'After a failed overclock, he had to perform a CMOS reset by shorting two pins on the motherboard.'
  },
  {
    id: 'debug-leds',
    term: 'Debug LEDs',
    slug: 'debug-leds',
    definition: 'A set of small lights on a motherboard that indicate the status of the CPU, RAM, GPU, and boot devices during the POST sequence.',
    example: 'The debug LEDs stopped at "DRAM," indicating a problem with the memory sticks.'
  },
  {
    id: 'soc',
    term: 'SoC',
    slug: 'soc',
    definition: 'A System on a Chip integrates all or most components of a computer or other electronic system into a single chip. Common in smartphones.',
    example: 'The new smartphone features a powerful SoC that combines the CPU, GPU, and AI accelerator.'
  },
  {
    id: 'ihs',
    term: 'IHS',
    slug: 'ihs',
    definition: 'The Integrated Heat Spreader is the metal "lid" on top of a CPU that protects the delicate die underneath and helps transfer heat to the cooler.',
    example: 'For extreme overclocking, some enthusiasts delid their CPU to replace the thermal material under the IHS.'
  },
  {
    id: 'lga-socket',
    term: 'LGA socket',
    slug: 'lga-socket',
    definition: 'A Land Grid Array socket is a type of CPU socket where the pins are on the motherboard, and the CPU has flat contacts.',
    example: 'Intel CPUs typically use an LGA socket, so you have to be careful not to bend the pins on the motherboard.'
  },
  {
    id: 'pga-socket',
    term: 'PGA socket',
    slug: 'pga-socket',
    definition: 'A Pin Grid Array socket is a type of CPU socket where the pins are on the CPU itself, which then fits into holes on the motherboard socket.',
    example: 'AMD\'s AM4 platform uses a PGA socket, making the CPU itself more fragile.'
  },
  {
    id: 'atx12v',
    term: 'ATX12V',
    slug: 'atx12v',
    definition: 'The standard power supply connector that provides 12-volt power to the motherboard, typically a 4-pin or 8-pin connector.',
    example: 'He made sure to plug in the 8-pin ATX12V connector to provide enough power for the high-end CPU.'
  },
  {
    id: 'eps-connector',
    term: 'EPS connector',
    slug: 'eps-connector',
    definition: 'An 8-pin power connector that provides additional 12V power to the CPU, required for high-performance or server motherboards.',
    example: 'The enthusiast motherboard had two EPS connectors for extreme overclocking stability.'
  },
  {
    id: 'fan-curve',
    term: 'Fan curve',
    slug: 'fan-curve',
    definition: 'A user-defined setting that determines how fast a fan should spin based on the temperature of a component.',
    example: 'He set a custom fan curve in the BIOS to keep his PC quiet at idle but ramp up the fans during gaming.'
  },
  {
    id: 'pwm-fan',
    term: 'PWM fan',
    slug: 'pwm-fan',
    definition: 'A fan with a 4-pin connector that allows for precise speed control via Pulse Width Modulation, enabling finer control over cooling and noise.',
    example: 'All his case fans were PWM fans, allowing the motherboard to control their speed automatically.'
  },
  {
    id: 'dc-fan',
    term: 'DC fan',
    slug: 'dc-fan',
    definition: 'A fan with a 3-pin connector where speed is controlled by adjusting the voltage. Less precise than PWM control.',
    example: 'The cheaper case came with DC fans, which ran at a constant speed unless he adjusted the voltage in the BIOS.'
  },
  {
    id: 'shroud',
    term: 'Shroud',
    slug: 'shroud',
    definition: 'The plastic or metal casing around a graphics card\'s heatsink and fans, designed to direct airflow.',
    example: 'He painted the GPU shroud white to match the theme of his PC build.'
  },
  {
    id: 'thermal-pad',
    term: 'Thermal pad',
    slug: 'thermal-pad',
    definition: 'A soft, squishy material used to transfer heat from electronic components like VRAM or VRMs to a heatsink.',
    example: 'He replaced the old, dried-out thermal pads on his graphics card to improve its cooling performance.'
  },
  {
    id: 'microatx',
    term: 'mATX',
    slug: 'microatx',
    definition: 'MicroATX is a smaller motherboard form factor than standard ATX, offering fewer expansion slots but fitting in smaller cases.',
    example: 'He chose an mATX board for his compact desktop build.'
  },
  {
    id: 'itx-board',
    term: 'ITX board',
    slug: 'itx-board',
    definition: 'Mini-ITX is a very small motherboard form factor, typically with only one expansion slot, designed for extremely compact PCs.',
    example: 'Building in an ITX case was challenging, but the tiny final result was worth it.'
  },
  {
    id: 'flex-atx',
    term: 'Flex ATX',
    slug: 'flex-atx',
    definition: 'A small motherboard form factor, even smaller than Mini-ITX, often used in industrial or embedded systems.',
    example: 'The custom server appliance used a Flex ATX board to fit inside the 1U rackmount chassis.'
  },
  {
    id: 'nvme-drive',
    term: 'NVMe drive',
    slug: 'nvme-drive',
    definition: 'A storage drive that uses the Non-Volatile Memory Express interface, offering significantly faster speeds than traditional SATA SSDs.',
    example: 'He installed his operating system on an NVMe drive for near-instant boot times.'
  },
  {
    id: 'qlc-ssd',
    term: 'QLC SSD',
    slug: 'qlc-ssd',
    definition: 'An SSD that uses Quad-Level Cell NAND flash memory, which offers high capacity at a lower cost but with lower endurance and performance than other types.',
    example: 'The 4TB QLC SSD was great for storing his game library, but not ideal for his OS drive.'
  },
  {
    id: 'tlc-ssd',
    term: 'TLC SSD',
    slug: 'tlc-ssd',
    definition: 'An SSD that uses Triple-Level Cell NAND flash memory, offering a good balance of price, performance, and endurance.',
    example: 'Most consumer SSDs today use TLC flash, which is a good all-around choice.'
  },
  {
    id: 'dram-less-ssd',
    term: 'DRAM-less SSD',
    slug: 'dram-less-ssd',
    definition: 'A cheaper type of SSD that lacks a dedicated DRAM cache, which can result in slower performance during sustained write operations.',
    example: 'The budget-friendly DRAM-less SSD was fine for light use, but it slowed down when transferring large files.'
  },
  {
    id: 'vram-chips',
    term: 'VRAM chips',
    slug: 'vram-chips',
    definition: 'The physical memory chips on a graphics card that store texture and frame data.',
    example: 'He put small heatsinks on the VRAM chips to keep them cool during overclocking.'
  },
  {
    id: 'gddr6x',
    term: 'GDDR6X',
    slug: 'gddr6x',
    definition: 'A very high-performance type of graphics memory (VRAM) known for its high bandwidth and also for running very hot.',
    example: 'The new high-end graphics card uses GDDR6X memory, which requires robust cooling.'
  },
  {
    id: 'hbm-memory',
    term: 'HBM memory',
    slug: 'hbm-memory',
    definition: 'High Bandwidth Memory is a type of stacked DRAM that offers extremely wide communication lanes for very high bandwidth, often used in high-end server and professional GPUs.',
    example: 'The data center GPU used HBM memory to process massive datasets quickly.'
  },
  {
    id: 'chiplet-design',
    term: 'Chiplet design',
    slug: 'chiplet-design',
    definition: 'A CPU design approach where a processor is made of multiple smaller dies (chiplets) connected together, rather than one single large die.',
    example: 'AMD\'s Ryzen CPUs use a chiplet design, which improves manufacturing yields and allows for more core counts.'
  },
  {
    id: 'power-phases',
    term: 'Power phases',
    slug: 'power-phases',
    definition: 'Refers to the number of individual voltage regulator circuits (part of the VRM) on a motherboard. More phases generally lead to cleaner, more stable power delivery.',
    example: 'The overclocking motherboard advertised a "16+2" power phase design for maximum CPU stability.'
  },
  {
    id: 'pcb-trace',
    term: 'PCB trace',
    slug: 'pcb-trace',
    definition: 'The conductive pathways, tracks, or signals etched from copper sheets laminated onto a non-conductive substrate in a Printed Circuit Board.',
    example: 'He accidentally scratched a PCB trace on the motherboard, which broke the connection to the USB port.'
  },
  {
    id: 'bios-flashback',
    term: 'BIOS flashback',
    slug: 'bios-flashback',
    definition: 'A feature on some motherboards that allows you to update the BIOS even without a compatible CPU or RAM installed.',
    example: 'He had to use BIOS flashback to update the motherboard so it would support the new CPU he bought.'
  },
  {
    id: 'q-flash',
    term: 'Q-Flash',
    slug: 'q-flash',
    definition: 'Gigabyte\'s branding for a feature that allows a user to update the BIOS from within the BIOS menu itself, typically from a USB drive.',
    example: 'Updating the firmware was easy; he just entered the BIOS and used the Q-Flash utility.'
  },
  {
    id: 'flash-rom',
    term: 'Flash ROM',
    slug: 'flash-rom',
    definition: 'A type of non-volatile memory that can be electrically erased and reprogrammed, used to store firmware like the BIOS.',
    example: 'The BIOS update process involves writing a new image to the motherboard\'s flash ROM chip.'
  },
  {
    id: 'bclk',
    term: 'BCLK',
    slug: 'bclk',
    definition: 'The Base Clock is the fundamental clock speed for a motherboard, from which other system clock speeds (like CPU and RAM) are derived.',
    example: 'Advanced overclockers can increase the BCLK to raise the speed of the entire system, but it can cause instability.'
  },
  {
    id: 'xmp-profile',
    term: 'XMP profile',
    slug: 'xmp-profile',
    definition: 'Extreme Memory Profile is an Intel specification that allows you to easily set your RAM to its advertised high-performance speeds and timings with a single BIOS setting.',
    example: 'He enabled the XMP profile in the BIOS to run his 3200MHz RAM at its full speed.'
  },
  {
    id: 'expo-profile',
    term: 'EXPO profile',
    slug: 'expo-profile',
    definition: 'AMD Extended Profiles for Overclocking is AMD\'s equivalent of XMP, allowing for one-click memory overclocking on AMD platforms.',
    example: 'For his new AMD build, he bought RAM with an EXPO profile for easy setup.'
  },
  {
    id: 'gpu-core-clock',
    term: 'GPU core clock',
    slug: 'gpu-core-clock',
    definition: 'The speed at which the main processor on a graphics card operates, measured in MHz or GHz.',
    example: 'He overclocked the GPU core clock by 150 MHz to get a few extra frames per second.'
  },
  {
    id: 'memory-clock',
    term: 'Memory clock',
    slug: 'memory-clock',
    definition: 'The speed at which the VRAM on a graphics card operates, which affects the card\'s memory bandwidth.',
    example: 'Increasing the memory clock is another way to overclock a GPU for better performance.'
  },
  {
    id: 'shader-units',
    term: 'Shader units',
    slug: 'shader-units',
    definition: 'Processing units within a GPU that are responsible for the complex calculations needed to render graphics, particularly how surfaces are lit and colored.',
    example: 'The more shader units a GPU has, the more powerful it generally is.'
  },
  {
    id: 'tensor-cores',
    term: 'Tensor cores',
    slug: 'tensor-cores',
    definition: 'Specialized processing cores in NVIDIA GPUs designed to accelerate the matrix multiplication operations used in AI and machine learning.',
    example: 'NVIDIA\'s DLSS technology relies on the GPU\'s Tensor Cores to upscale images with AI.'
  },
  {
    id: 'rt-cores',
    term: 'RT cores',
    slug: 'rt-cores',
    definition: 'Specialized processing cores in NVIDIA GPUs designed to accelerate the calculations for real-time ray tracing, which simulates how light behaves.',
    example: 'Enabling ray tracing in the game significantly drops performance unless you have a GPU with dedicated RT Cores.'
  },
  {
    id: 'sm-units',
    term: 'SM units',
    slug: 'sm-units',
    definition: 'Streaming Multiprocessors are the fundamental building blocks of an NVIDIA GPU, each containing a set of CUDA cores, Tensor cores, and RT cores.',
    example: 'The high-end GPU had 84 SM units, each capable of handling a large number of parallel threads.'
  },
  {
    id: 'tgp',
    term: 'TGP',
    slug: 'tgp',
    definition: 'Total Graphics Power is the maximum amount of power a graphics card is designed to consume, including the GPU, VRAM, and other components.',
    example: 'The new GPU has a TGP of 350 watts, so he needed to make sure his PSU could handle it.'
  },
  {
    id: 'tdp-headroom',
    term: 'TDP headroom',
    slug: 'tdp-headroom',
    definition: 'The difference between a component\'s actual power consumption and its maximum rated Thermal Design Power (TDP). More headroom allows for higher boost clocks.',
    example: 'Because of the excellent cooling, the CPU had plenty of TDP headroom and could maintain its max boost clock for longer.'
  },
  {
    id: 'die-shrink',
    term: 'Die shrink',
    slug: 'die-shrink',
    definition: 'The process of scaling down the size of a semiconductor chip by moving to a smaller manufacturing process (e.g., from 7nm to 5nm).',
    example: 'The die shrink allowed the company to fit more transistors on the chip, making it more powerful and efficient.'
  },
  {
    id: 'fab-node',
    term: 'Fab node',
    slug: 'fab-node',
    definition: 'Refers to a specific semiconductor manufacturing process generation, denoted by a size in nanometers (e.g., 5nm node).',
    example: 'TSMC\'s 5nm fab node is used to produce chips for many of the latest smartphones and computers.'
  },
  {
    id: 'capacitor-bank',
    term: 'Capacitor bank',
    slug: 'capacitor-bank',
    definition: 'A group of capacitors on a motherboard or graphics card used to smooth out the power delivery and handle sudden changes in load.',
    example: 'The back of the GPU PCB had a large capacitor bank to ensure stable power during transient loads.'
  },
  {
    id: 'vrm-heatsinks',
    term: 'VRM heatsinks',
    slug: 'vrm-heatsinks',
    definition: 'Heatsinks specifically designed to cool the Voltage Regulator Modules on a motherboard to prevent them from overheating and throttling.',
    example: 'A good motherboard for overclocking will have large, effective VRM heatsinks.'
  },
  {
    id: 'io-shield',
    term: 'I/O shield',
    slug: 'io-shield',
    definition: 'The metal plate that fits into the back of a PC case to cover the openings around the motherboard\'s rear ports.',
    example: 'He forgot to install the I/O shield before putting the motherboard in the case and had to take it all apart again.'
  },
  {
    id: 'backplate',
    term: 'Backplate',
    slug: 'backplate',
    definition: 'A metal plate attached to the back of a graphics card\'s PCB to provide structural rigidity and, in some cases, additional cooling.',
    example: 'The GPU backplate not only looks good, but it also helps prevent the heavy card from sagging.'
  },
  {
    id: 'hyperspeed-fan-mode',
    term: 'Hyperspeed fan mode',
    slug: 'hyperspeed-fan-mode',
    definition: 'A slang or marketing term for a BIOS setting that runs all connected fans at their maximum possible speed.',
    example: 'He enabled hyperspeed fan mode before running the benchmark; the PC sounded like a jet engine.'
  },
  {
    id: 'thermal-runway',
    term: 'Thermal runway',
    slug: 'thermal-runway',
    definition: 'A dangerous condition where a component gets hotter, which increases its electrical resistance, which in turn makes it even hotter, leading to a rapid and uncontrolled temperature rise.',
    example: 'Poor cooling on the VRMs led to a thermal runaway situation that damaged the motherboard.'
  },
  {
    id: 'vrm-throttling',
    term: 'VRM throttling',
    slug: 'vrm-throttling',
    definition: 'A condition where the CPU\'s performance is reduced not because the CPU itself is too hot, but because the motherboard\'s VRMs are overheating.',
    example: 'His CPU was throttling under load, and he realized it was VRM throttling because his cheap motherboard couldn\'t handle the power draw.'
  },
  {
    id: 'coil-whine',
    term: 'Coil whine',
    slug: 'coil-whine',
    definition: 'A high-pitched noise produced by an electronic component, typically an inductor or GPU, when it is under high load.',
    example: 'His new graphics card was powerful, but the coil whine was so loud it was distracting.'
  },
  {
    id: 'silicon-aging',
    term: 'Silicon aging',
    slug: 'silicon-aging',
    definition: 'The process by which a semiconductor chip\'s performance degrades over time, especially when run at high voltages and temperatures.',
    example: 'After years of heavy overclocking, silicon aging meant his CPU was no longer stable at its original overclocked speed.'
  },
  {
    id: 'binning',
    term: 'Binning',
    slug: 'binning',
    definition: 'The process of testing and sorting chips (like CPUs or GPUs) based on their quality and performance characteristics. The best chips are "binned" for high-end models.',
    example: 'The "KS" version of the Intel CPU is a specially binned chip that is guaranteed to reach a higher clock speed.'
  },
  {
    id: 'silicon-degradation',
    term: 'Silicon degradation',
    slug: 'silicon-degradation',
    definition: 'The physical breakdown of the transistors and pathways in a silicon chip over time, accelerated by high voltage and heat.',
    example: 'Pushing too much voltage through the CPU caused rapid silicon degradation, and it failed after only a year.'
  },
  {
    id: 'chip-lottery',
    term: 'Chip lottery',
    slug: 'chip-lottery',
    definition: 'A slang term referring to the luck involved in getting a CPU or GPU that overclocks well due to natural variations in manufacturing.',
    example: 'You can buy two identical CPUs, but winning the chip lottery means you get one that can overclock much higher.'
  },
  {
    id: 'memory-channels',
    term: 'Memory channels',
    slug: 'memory-channels',
    definition: 'The communication paths between the CPU and the RAM. Most consumer platforms have dual-channel memory, meaning two independent paths.',
    example: 'He installed two sticks of RAM to take advantage of the motherboard\'s dual memory channels for better performance.'
  },
  {
    id: 'ecc-memory',
    term: 'ECC memory',
    slug: 'ecc-memory',
    definition: 'Error-Correcting Code memory is a type of RAM that can detect and correct common kinds of internal data corruption. It is used in servers and workstations.',
    example: 'For the mission-critical server, they used ECC memory to prevent data errors that could lead to crashes.'
  },
  {
    id: 'registered-memory',
    term: 'Registered memory',
    slug: 'registered-memory',
    definition: 'Also known as buffered memory, it has a register between the DRAM modules and the system\'s memory controller, reducing electrical load and allowing for more memory modules.',
    example: 'Server motherboards often require registered memory to support their large RAM capacities.'
  },
  {
    id: 'q-code',
    term: 'Q-code',
    slug: 'q-code',
    definition: 'A two-digit display on some high-end motherboards that shows codes during the boot process to help diagnose problems.',
    example: 'The motherboard was stuck on Q-code "55," which the manual said meant a memory initialization error.'
  },
  {
    id: 'fan-hub',
    term: 'Fan hub',
    slug: 'fan-hub',
    definition: 'A small device that allows you to connect and control multiple fans from a single motherboard fan header.',
    example: 'Since his motherboard only had two fan headers, he used a fan hub to connect all six of his case fans.'
  },
  {
    id: 'usb-header',
    term: 'USB header',
    slug: 'usb-header',
    definition: 'A connector on a motherboard used to provide USB ports on the front or top of a PC case.',
    example: 'He plugged the cable from the front panel into the USB header on the motherboard to make the front USB ports work.'
  },
  {
    id: 'front-panel-header',
    term: 'Front panel header',
    slug: 'front-panel-header',
    definition: 'A group of small pins on a motherboard used to connect the power button, reset button, and status LEDs from the PC case.',
    example: 'Connecting the tiny wires to the front panel header is often the most tedious part of building a PC.'
  },
  {
    id: 'sata-hot-swap',
    term: 'SATA hot swap',
    slug: 'sata-hot-swap',
    definition: 'A feature that allows SATA drives to be removed and replaced while the computer is running.',
    example: 'The server\'s drive bays supported SATA hot swap, so he could replace a failed drive without any downtime.'
  },
  {
    id: 'raid-cache',
    term: 'RAID cache',
    slug: 'raid-cache',
    definition: 'A dedicated memory cache on a hardware RAID controller used to speed up disk I/O operations.',
    example: 'The RAID controller with a large, battery-backed cache significantly improved the storage array\'s write performance.'
  },
  {
    id: 'preboot',
    term: 'Preboot',
    slug: 'preboot',
    definition: 'The very first stage of the computer boot process, before the operating system begins to load.',
    example: 'The preboot environment is where the BIOS or UEFI firmware initializes hardware.'
  },
  {
    id: 'boot-table',
    term: 'Boot table',
    slug: 'boot-table',
    definition: 'A table in the master boot record or GUID partition table that lists the available bootable partitions.',
    example: 'The bootloader failed because the boot table was corrupted.'
  },
  {
    id: 'silent-bios-mode',
    term: 'Silent BIOS mode',
    slug: 'silent-bios-mode',
    definition: 'A BIOS/UEFI setting on some motherboards that prioritizes quiet operation by using a less aggressive fan curve.',
    example: 'He switched to the silent BIOS mode for everyday use to keep his PC from making noise.'
  },
  {
    id: 'vbios',
    term: 'VBIOS',
    slug: 'vbios',
    definition: 'The Video BIOS is the firmware on a graphics card that controls its basic operations before the full graphics driver is loaded by the OS.',
    example: 'He had to flash a new VBIOS onto his GPU to enable a new feature.'
  },
  {
    id: 'gpu-sag',
    term: 'GPU sag',
    slug: 'gpu-sag',
    definition: 'The bending or drooping of a long, heavy graphics card over time due to its own weight.',
    example: 'To prevent GPU sag, he bought a small support bracket to prop up the end of his video card.'
  },
  {
    id: 'gpu-retention-bracket',
    term: 'GPU retention bracket',
    slug: 'gpu-retention-bracket',
    definition: 'A mechanism or bracket that helps to secure a heavy GPU in place and prevent it from sagging or breaking the PCIe slot.',
    example: 'The high-end motherboard came with a reinforced GPU retention bracket.'
  },
  {
    id: 'daisy-chain-fans',
    term: 'Daisy chain fans',
    slug: 'daisy-chain-fans',
    definition: 'The practice of connecting multiple fans to each other in a series, allowing them to be controlled by a single motherboard header.',
    example: 'The new RGB fans could be daisy-chained, which made cable management much cleaner.'
  },
  {
    id: 'dual-bios',
    term: 'Dual BIOS',
    slug: 'dual-bios',
    definition: 'A feature on some motherboards that includes two separate BIOS chips, providing a backup in case one becomes corrupted during a failed update.',
    example: 'He wasn\'t afraid to try the beta firmware because his motherboard had a dual BIOS he could switch to if something went wrong.'
  },
  {
    id: 'power-cycling',
    term: 'Power cycling',
    slug: 'power-cycling',
    definition: 'The act of turning a piece of equipment off and then on again. A hard reset.',
    example: 'The first step in troubleshooting is always power cycling the device.'
  },
  {
    id: 'fan-rpm',
    term: 'Fan RPM',
    slug: 'fan-rpm',
    definition: 'The speed of a fan, measured in Revolutions Per Minute.',
    example: 'He set the fans to run at a constant 1200 RPM for a balance of cooling and noise.'
  },
  {
    id: 'nvlink',
    term: 'NVLink',
    slug: 'nvlink',
    definition: 'A high-speed interconnect developed by NVIDIA for connecting multiple GPUs together, allowing them to share memory and work on tasks jointly.',
    example: 'He connected two RTX 3090s with an NVLink bridge for his machine learning workstation.'
  },
  {
    id: 'gen4-lanes',
    term: 'Gen4 lanes',
    slug: 'gen4-lanes',
    definition: 'Refers to PCI Express 4.0 lanes, which offer double the bandwidth of the previous PCIe 3.0 generation.',
    example: 'The new motherboard supported 16 Gen4 lanes for the GPU and another 4 for the primary M.2 SSD.'
  },
  {
    id: 'gen5-ssd',
    term: 'Gen5 SSD',
    slug: 'gen5-ssd',
    definition: 'An SSD that uses the PCI Express 5.0 interface, offering theoretical speeds up to twice as fast as Gen4 SSDs.',
    example: 'A Gen5 SSD can reach read speeds of over 12,000 MB/s, but requires a modern motherboard to support it.'
  },
  {
    id: 'acpi-tables',
    term: 'ACPI tables',
    slug: 'acpi-tables',
    definition: 'Data tables in the system firmware that describe hardware devices, their power states, and other configuration information to the operating system.',
    example: 'To get macOS running on his PC, he had to create custom ACPI tables to make the hardware look like a real Mac.'
  },
  {
    id: 'i2c-bus',
    term: 'I2C bus',
    slug: 'i2c-bus',
    definition: 'A serial communication bus commonly used for attaching low-speed peripherals like sensors and RGB controllers to a motherboard or microcontroller.',
    example: 'The RGB lighting software communicated with the fan controller over the system\'s I2C bus.'
  },
  {
    id: 'spi-flash',
    term: 'SPI flash',
    slug: 'spi-flash',
    definition: 'A type of flash memory chip that uses the Serial Peripheral Interface, commonly used to store a device\'s BIOS or firmware.',
    example: 'He used a special clip and programmer to directly read the contents of the SPI flash chip.'
  },
  {
    id: 'thunderbolt-controller',
    term: 'Thunderbolt controller',
    slug: 'thunderbolt-controller',
    definition: 'The chip on a motherboard or add-in card that manages the high-speed Thunderbolt interface.',
    example: 'The new motherboard included an Intel Thunderbolt controller, enabling 40Gbps data transfer and display output through a single USB-C port.'
  },
  {
    id: 'pcie-bifurcation',
    term: 'PCIe bifurcation',
    slug: 'pcie-bifurcation',
    definition: 'A feature that allows a single PCIe x16 slot to be split into multiple smaller slots (e.g., x8/x8 or x4/x4/x4/x4) with an appropriate adapter card.',
    example: 'He used PCIe bifurcation to run four NVMe SSDs from a single PCIe slot.'
  },
  {
    id: 'memory-training',
    term: 'Memory training',
    slug: 'memory-training',
    definition: 'A process that occurs during boot where the motherboard\'s memory controller tests and calibrates the optimal settings for the installed RAM modules.',
    example: 'The PC took a long time to boot the first time after installing new RAM because it was performing memory training.'
  },
  {
    id: 'direct-die-cooling',
    term: 'Direct Die cooling',
    slug: 'direct-die-cooling',
    definition: 'An extreme cooling method where the CPU cooler makes direct contact with the CPU\'s silicon die, after the Integrated Heat Spreader (IHS) has been removed.',
    example: 'For the best possible temperatures, the overclocker used a direct die cooling water block on his delidded CPU.'
  },
  {
    id: 'top-flow-cooler',
    term: 'Top-flow cooler',
    slug: 'top-flow-cooler',
    definition: 'A type of CPU cooler where the fan blows air down towards the motherboard, which can help cool the surrounding VRMs and RAM.',
    example: 'In his small form factor case, he used a top-flow cooler because a large tower cooler wouldn\'t fit.'
  },
  {
    id: 'tower-cooler',
    term: 'Tower cooler',
    slug: 'tower-cooler',
    definition: 'A large CPU cooler with a vertical heatsink tower and one or more fans that blow air horizontally, parallel to the motherboard.',
    example: 'He installed a massive dual-tower cooler to tame his high-end, overclocked CPU.'
  },
  {
    id: 'heatpipe-array',
    term: 'Heatpipe array',
    slug: 'heatpipe-array',
    definition: 'A set of sealed copper tubes containing a fluid that transfers heat from the CPU base to the heatsink fins through evaporation and condensation.',
    example: 'The cooler\'s effectiveness is largely determined by the number and arrangement of its heatpipe array.'
  },
  {
    id: 'vertical-gpu-mount',
    term: 'Vertical GPU mount',
    slug: 'vertical-gpu-mount',
    definition: 'A bracket that allows a graphics card to be mounted vertically in a PC case, showing off its fans and shroud.',
    example: 'He bought a vertical GPU mount to better display his new, aesthetically pleasing graphics card.'
  },
  {
    id: 'riser-cable',
    term: 'Riser cable',
    slug: 'riser-cable',
    definition: 'A flexible extension cable for a PCIe slot, often used to mount a GPU in a non-standard position, such as vertically.',
    example: 'He needed a high-quality PCIe 4.0 riser cable to vertically mount his GPU without losing performance.'
  },
  {
    id: 'fan-splitter',
    term: 'Fan splitter',
    slug: 'fan-splitter',
    definition: 'A simple cable that splits one fan header into two or more, allowing multiple fans to be connected to a single header.',
    example: 'He used a fan splitter to connect both of his front intake fans to the same motherboard header.'
  },
  {
    id: 'bios-checksum',
    term: 'BIOS checksum',
    slug: 'bios-checksum',
    definition: 'A value calculated from the BIOS firmware that is used to verify its integrity. A mismatch indicates corruption.',
    example: 'The PC wouldn\'t boot and displayed a "BIOS checksum error," indicating the firmware was corrupted.'
  },
  {
    id: 'debug-code-00',
    term: 'Debug code 00',
    slug: 'debug-code-00',
    definition: 'A Q-code displayed on some motherboards that typically indicates the CPU is not detected or has failed.',
    example: 'After installing the new CPU, the motherboard showed debug code 00, meaning something was wrong with the installation.'
  },
  {
    id: 'tach-signal',
    term: 'Tach signal',
    slug: 'tach-signal',
    definition: 'The signal from a fan that reports its rotational speed (RPM) back to the motherboard.',
    example: 'The motherboard wasn\'t reading the fan speed because the tach signal wire was broken.'
  },
  {
    id: 'liquid-metal',
    term: 'Liquid metal',
    slug: 'liquid-metal',
    definition: 'A high-performance thermal interface material made of a metallic alloy that is liquid at room temperature, offering superior thermal conductivity to traditional paste.',
    example: 'He replaced the standard thermal paste with liquid metal to drop his CPU temperatures by another 10 degrees.'
  },
  {
    id: 'delidding',
    term: 'Delidding',
    slug: 'delidding',
    definition: 'The process of removing the Integrated Heat Spreader (IHS) from a CPU to replace the internal thermal material with a higher-performance one.',
    example: 'Delidding his CPU was a risky process, but it resulted in a significant drop in temperatures.'
  },
  {
    id: 'resizable-bar',
    term: 'Resizable BAR',
    slug: 'resizable-bar',
    definition: 'A PCIe technology that allows the CPU to access the entire GPU VRAM at once, rather than in small chunks, which can improve performance in some games.',
    example: 'He enabled Resizable BAR in his BIOS to get a small performance uplift in supported titles.'
  },
  {
    id: 'soc-voltage',
    term: 'SOC voltage',
    slug: 'soc-voltage',
    definition: 'The voltage supplied to the System on a Chip components of a CPU, such as the integrated memory controller and PCIe controller. Important for memory overclocking.',
    example: 'To get his high-speed RAM stable, he had to slightly increase the SOC voltage.'
  },
  {
    id: 'hot-reload',
    term: 'Hot reload',
    slug: 'hot-reload',
    definition: 'A development feature that allows code changes to be injected into a running application without restarting it, preserving its current state.',
    example: 'With hot reload, he could see his UI changes instantly without losing the data he had entered in the form.'
  },
  {
    id: 'cold-start',
    term: 'Cold start',
    slug: 'cold-start',
    definition: 'In serverless computing, a cold start is the delay that occurs when an inactive function is invoked for the first time and the cloud provider needs to provision resources for it.',
    example: 'The first API request was slow due to a cold start, but subsequent requests were fast.'
  },
  {
    id: 'tech-stack',
    term: 'Tech stack',
    slug: 'tech-stack',
    definition: 'The combination of programming languages, frameworks, databases, and other technologies used to build an application.',
    example: 'Their web application\'s tech stack consists of React for the frontend, Node.js for the backend, and a PostgreSQL database.'
  },
  {
    id: 'runtime-engine',
    term: 'Runtime engine',
    slug: 'runtime-engine',
    definition: 'The environment in which a program is executed. It provides core services like memory management and program execution.',
    example: 'Node.js is a runtime engine that allows you to run JavaScript code on a server.'
  },
  {
    id: 'interpreter',
    term: 'Interpreter',
    slug: 'interpreter',
    definition: 'A program that directly executes instructions written in a programming language, without requiring them to have been compiled into machine code.',
    example: 'Python is an interpreted language, meaning an interpreter reads and executes the code line by line.'
  },
  {
    id: 'tokenizer',
    term: 'Tokenizer',
    slug: 'tokenizer',
    definition: 'The first stage of a compiler or interpreter, which breaks a stream of source code text into a series of individual tokens (like keywords, identifiers, and operators).',
    example: 'The tokenizer converted the string "let x = 10;" into a series of tokens: LET, IDENTIFIER(x), EQUALS, NUMBER(10), SEMICOLON.'
  },
  {
    id: 'transpiler',
    term: 'Transpiler',
    slug: 'transpiler',
    definition: 'A tool that reads source code written in one programming language and produces the equivalent code in another language. For example, converting TypeScript to JavaScript.',
    example: 'Babel is a popular transpiler used to convert modern JavaScript into an older version that more browsers can understand.'
  },
  {
    id: 'minification',
    term: 'Minification',
    slug: 'minification',
    definition: 'The process of removing all unnecessary characters from source code (like whitespace, comments, and new lines) to reduce its file size.',
    example: 'The build process includes a minification step to make the JavaScript files smaller and faster to download.'
  },
  {
    id: 'bundler',
    term: 'Bundler',
    slug: 'bundler',
    definition: 'A tool that takes multiple JavaScript modules and their dependencies and combines them into one or more optimized files for the browser.',
    example: 'They used Webpack as their bundler to manage all the different JavaScript files and assets in their project.'
  },
  {
    id: 'tree-shaking',
    term: 'Tree-shaking',
    slug: 'tree-shaking',
    definition: 'A process in modern JavaScript bundlers that eliminates unused code from the final bundle, resulting in a smaller file size.',
    example: 'Tree-shaking removed the unused functions from the library, reducing the app\'s initial load time.'
  },
  {
    id: 'code-splitting',
    term: 'Code splitting',
    slug: 'code-splitting',
    definition: 'The practice of splitting the code for a large web application into smaller bundles that can be loaded on demand.',
    example: 'They used code splitting to load the code for the admin panel only when a user navigates to that page.'
  },
  {
    id: 'shadow-dom',
    term: 'Shadow DOM',
    slug: 'shadow-dom',
    definition: 'A web browser technology that allows for encapsulated DOM and CSS within a web component, preventing styles from leaking in or out.',
    example: 'Web Components use the Shadow DOM to keep their structure and styles separate from the rest of the page.'
  },
  {
    id: 'virtual-dom',
    term: 'Virtual DOM',
    slug: 'virtual-dom',
    definition: 'A programming concept where a virtual representation of a UI is kept in memory and synced with the "real" DOM. Used by frameworks like React to optimize updates.',
    example: 'React uses a Virtual DOM to figure out the most efficient way to update the actual DOM, improving performance.'
  },
  {
    id: 'event-bubbling',
    term: 'Event bubbling',
    slug: 'event-bubbling',
    definition: 'In the DOM, it is the process where an event triggered on a nested element will also trigger on all of its parent elements, from the inside out.',
    example: 'He used event bubbling to attach a single click listener to the container instead of to each individual button inside it.'
  },
  {
    id: 'event-capturing',
    term: 'Event capturing',
    slug: 'event-capturing',
    definition: 'The opposite of event bubbling, where an event is first captured by the outermost element and then triggers on successively deeper nested elements.',
    example: 'Event capturing is used less often than bubbling, but it can be useful for intercepting events at a higher level.'
  },
  {
    id: 'memoization',
    term: 'Memoization',
    slug: 'memoization',
    definition: 'An optimization technique used to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.',
    example: 'He used memoization to cache the result of the complex calculation, so it wouldn\'t need to be recomputed on every render.'
  },
  {
    id: 'dead-code',
    term: 'Dead code',
    slug: 'dead-code',
    definition: 'Code in a program that is never executed. It is often removed by optimization processes like tree-shaking.',
    example: 'The linter warned him about a function that was never called, which was considered dead code.'
  },
  {
    id: 'async-pipeline',
    term: 'Async pipeline',
    slug: 'async-pipeline',
    definition: 'A series of asynchronous operations that are executed in sequence, where the output of one operation becomes the input for the next.',
    example: 'He created an async pipeline to first fetch user data, then their posts, and finally their comments.'
  },
  {
    id: 'callback-hell',
    term: 'Callback hell',
    slug: 'callback-hell',
    definition: 'A situation in asynchronous programming where multiple nested callbacks create a deeply indented, hard-to-read structure.',
    example: 'The code descended into callback hell, with callbacks nested five levels deep. He refactored it to use Promises instead.'
  },
  {
    id: 'promise-chain',
    term: 'Promise chain',
    slug: 'promise-chain',
    definition: 'A sequence of asynchronous operations linked together using the `.then()` method of Promises, which avoids callback hell.',
    example: 'The promise chain made the asynchronous code much cleaner and easier to follow.'
  },
  {
    id: 'stale-state',
    term: 'Stale state',
    slug: 'stale-state',
    definition: 'A common issue in UI programming where the data displayed to the user is out of sync with the actual current state of the application.',
    example: 'The user saw a stale state of their shopping cart because the UI didn\'t update after they removed an item.'
  },
  {
    id: 'merge-conflict',
    term: 'Merge conflict',
    slug: 'merge-conflict',
    definition: 'An event that occurs in version control when two developers make conflicting changes to the same line in a file.',
    example: 'He had to resolve a merge conflict before he could combine his feature branch with the main branch.'
  },
  {
    id: 'semantic-tokens',
    term: 'Semantic tokens',
    slug: 'semantic-tokens',
    definition: 'A feature in code editors that provides more detailed and accurate syntax highlighting based on the language server\'s understanding of the code.',
    example: 'The new theme used semantic tokens to color variables differently based on whether they were local variables or class properties.'
  },
  {
    id: 'patch-version',
    term: 'Patch version',
    slug: 'patch-version',
    definition: 'In semantic versioning (MAJOR.MINOR.PATCH), the patch version is incremented for backward-compatible bug fixes.',
    example: 'They released version 1.2.1, which was just a patch version to fix a small bug.'
  },
  {
    id: 'rolling-release',
    term: 'Rolling release',
    slug: 'rolling-release',
    definition: 'A software development model where updates are delivered continuously, rather than in large, discrete versions. Arch Linux is a classic example.',
    example: 'He preferred a rolling release distribution so he would always have the latest software without having to do major system upgrades.'
  },
  {
    id: 'compiler-flags',
    term: 'Compiler flags',
    slug: 'compiler-flags',
    definition: 'Command-line options passed to a compiler to change its behavior, such as enabling optimizations or showing warnings.',
    example: 'He used the `-O3` compiler flag to enable the highest level of optimization.'
  },
  {
    id: 'hot-module-swap',
    term: 'Hot module swap',
    slug: 'hot-module-swap',
    definition: 'Similar to hot reload, this feature allows modules to be replaced in a running application without a full reload.',
    example: 'The development server was configured for hot module swapping, making the development feedback loop incredibly fast.'
  },
  {
    id: 'build-artifacts',
    term: 'Build artifacts',
    slug: 'build-artifacts',
    definition: 'The files produced by a software build process, such as compiled executables, libraries, and bundled assets.',
    example: 'The CI/CD pipeline stored the build artifacts in a repository for later deployment.'
  },
  {
    id: 'code-injection',
    term: 'Code injection',
    slug: 'code-injection',
    definition: 'A security vulnerability where an attacker can introduce (or "inject") malicious code into a program, which is then executed.',
    example: 'An SQL injection is a type of code injection where an attacker injects malicious SQL into a database query.'
  },
  {
    id: 'template-literal',
    term: 'Template literal',
    slug: 'template-literal',
    definition: 'A feature in modern JavaScript that allows for embedding expressions inside string literals, using backticks (`` ` ``).',
    example: 'He used a template literal to easily construct the welcome message: `Hello, ${userName}!`.'
  },
  {
    id: 'dsl-domain-specific-language',
    term: 'DSL',
    slug: 'dsl-domain-specific-language',
    definition: 'A Domain-Specific Language is a computer language specialized to a particular application domain.',
    example: 'SQL is a DSL for managing and querying databases.'
  },
  {
    id: 'pointer-dereference',
    term: 'Pointer dereference',
    slug: 'pointer-dereference',
    definition: 'In languages like C, it is the act of accessing the data that a pointer is pointing to.',
    example: 'A null pointer dereference is a common cause of program crashes.'
  },
  {
    id: 'memory-fragmentation',
    term: 'Memory fragmentation',
    slug: 'memory-fragmentation',
    definition: 'A problem where the free memory in a system is divided into many small, non-contiguous blocks, which can make it impossible to allocate a large block of memory even if the total free memory is sufficient.',
    example: 'The long-running server process suffered from memory fragmentation, eventually leading to allocation failures.'
  },
  {
    id: 'monkey-patching',
    term: 'Monkey patching',
    slug: 'monkey-patching',
    definition: 'The practice of extending or modifying the runtime code of dynamic languages without altering the original source code.',
    example: 'He used monkey patching to add a new method to a built-in class for a quick fix, though it\'s generally not a recommended practice.'
  },
  {
    id: 'duck-typing',
    term: 'Duck typing',
    slug: 'duck-typing',
    definition: 'A concept in dynamic typing where an object\'s suitability for a certain purpose is determined by the presence of certain methods and properties, rather than its explicit type.',
    example: '"If it walks like a duck and it quacks like a duck, then it must be a duck." That\'s the principle of duck typing.'
  },
  {
    id: 'static-typing',
    term: 'Static typing',
    slug: 'static-typing',
    definition: 'A type system where variable types are checked at compile-time. Languages like Java and C++ are statically typed.',
    example: 'Static typing helps catch many common errors before the program is even run.'
  },
  {
    id: 'dynamic-typing',
    term: 'Dynamic typing',
    slug: 'dynamic-typing',
    definition: 'A type system where variable types are checked at run-time. Languages like Python and JavaScript are dynamically typed.',
    example: 'Dynamic typing offers more flexibility, but you lose the safety of compile-time checks.'
  },
  {
    id: 'pure-function',
    term: 'Pure function',
    slug: 'pure-function',
    definition: 'A function whose return value is only determined by its input values, without observable side effects.',
    example: 'In functional programming, it\'s best to use pure functions whenever possible to make code more predictable.'
  },
  {
    id: 'side-effects',
    term: 'Side effects',
    slug: 'side-effects',
    definition: 'A function has side effects if it modifies some state outside its local environment, such as changing a global variable or writing to a file.',
    example: 'A function that logs a message to the console has a side effect.'
  },
  {
    id: 'immutable-state',
    term: 'Immutable state',
    slug: 'immutable-state',
    definition: 'A practice where application state is never modified directly. Instead, a new state object is created whenever a change is needed.',
    example: 'Frameworks like React encourage using immutable state to make state changes more explicit and easier to track.'
  },
  {
    id: 'oop-design',
    term: 'OOP design',
    slug: 'oop-design',
    definition: 'Object-Oriented Programming design is a programming paradigm based on the concept of "objects", which can contain data and code.',
    example: 'He used an OOP design, creating classes for `User`, `Product`, and `Order`.'
  },
  {
    id: 'fsm-finite-state-machine',
    term: 'FSM',
    slug: 'fsm-finite-state-machine',
    definition: 'A Finite State Machine is a mathematical model of computation that can be in exactly one of a finite number of states at any given time.',
    example: 'A traffic light is a simple example of a finite state machine, with states for red, yellow, and green.'
  },
  {
    id: 'ast-abstract-syntax-tree',
    term: 'AST',
    slug: 'ast-abstract-syntax-tree',
    definition: 'An Abstract Syntax Tree is a tree representation of the abstract syntactic structure of source code written in a programming language.',
    example: 'Linters and transpilers work by first parsing the code into an AST and then analyzing or transforming it.'
  },
  {
    id: 'cli-flags',
    term: 'CLI flags',
    slug: 'cli-flags',
    definition: 'Options passed to a command-line program to modify its behavior, typically prefixed with a hyphen (-) or double hyphen (--).',
    example: 'He used the `--verbose` CLI flag to get more detailed output from the script.'
  },
  {
    id: 'graceful-shutdown',
    term: 'Graceful shutdown',
    slug: 'graceful-shutdown',
    definition: 'The process of shutting down a program or service in an orderly way, allowing it to finish current tasks and save its state before exiting.',
    example: 'The server was configured for a graceful shutdown, ensuring no data was lost when it was restarted.'
  },
  {
    id: 'staging-area',
    term: 'Staging area',
    slug: 'staging-area',
    definition: 'In Git, the staging area (or index) is an intermediate area where you can prepare commits. You add changes to the staging area before committing them.',
    example: 'He added the two files he wanted to the staging area, then created a commit.'
  },
  {
    id: 'git-hooks',
    term: 'Git hooks',
    slug: 'git-hooks',
    definition: 'Scripts that run automatically every time a particular event occurs in a Git repository, such as before a commit or after a push.',
    example: 'They used a pre-commit Git hook to run the linter and prevent committing code with style errors.'
  },
  {
    id: 'soft-delete',
    term: 'Soft delete',
    slug: 'soft-delete',
    definition: 'A method where a record is not actually deleted from a database, but instead marked as deleted with a flag (e.g., an `is_deleted` column).',
    example: 'The application uses soft delete so that users can restore their deleted posts.'
  },
  {
    id: 'hard-delete',
    term: 'Hard delete',
    slug: 'hard-delete',
    definition: 'The process of permanently removing a record from a database.',
    example: 'Due to privacy regulations, user data must be hard deleted upon account closure.'
  },
  {
    id: 'error-bubbling',
    term: 'Error bubbling',
    slug: 'error-bubbling',
    definition: 'The process where an unhandled error in a nested component or function propagates up to its parent components or callers until it is caught.',
    example: 'The error bubbled all the way up to the root of the application, causing it to crash.'
  },
  {
    id: 'lsp-language-server-protocol',
    term: 'LSP',
    slug: 'lsp-language-server-protocol',
    definition: 'A protocol that provides code editors with language-specific features like autocomplete, go to definition, and diagnostics.',
    example: 'His code editor used the LSP to communicate with the TypeScript language server for rich intellisense.'
  },
  {
    id: 'compiler-pipeline',
    term: 'Compiler pipeline',
    slug: 'compiler-pipeline',
    definition: 'The sequence of stages a compiler goes through to transform source code into executable code, including tokenizing, parsing, optimization, and code generation.',
    example: 'Understanding the compiler pipeline can help you write more performant code.'
  },
  {
    id: 'modularization',
    term: 'Modularization',
    slug: 'modularization',
    definition: 'The process of breaking down a large software system into smaller, independent, and interchangeable modules.',
    example: 'The modularization of the codebase made it much easier for different teams to work on it simultaneously.'
  },
  {
    id: 'weakmap',
    term: 'WeakMap',
    slug: 'weakmap',
    definition: 'A collection of key/value pairs in JavaScript where the keys are objects and are held "weakly," meaning they do not prevent garbage collection if they are the only reference.',
    example: 'He used a WeakMap to associate metadata with an object without causing a memory leak.'
  },
  {
    id: 'hash-table',
    term: 'Hash table',
    slug: 'hash-table',
    definition: 'A data structure that implements an associative array abstract data type, a structure that can map keys to values.',
    example: 'Hash tables offer fast lookups, insertions, and deletions on average.'
  },
  {
    id: 'trie-structure',
    term: 'Trie structure',
    slug: 'trie-structure',
    definition: 'A tree-like data structure used for storing a dynamic set of strings, often used for implementing autocomplete features.',
    example: 'The search engine used a trie to quickly find all words starting with the user\'s query.'
  },
  {
    id: 'linked-list',
    term: 'Linked list',
    slug: 'linked-list',
    definition: 'A linear data structure where elements are not stored at contiguous memory locations, but are linked using pointers.',
    example: 'A linked list is efficient for insertions and deletions, but slow for random access.'
  },
  {
    id: 'circular-buffer',
    term: 'Circular buffer',
    slug: 'circular-buffer',
    definition: 'A fixed-size data structure that works as if it were connected end-to-end, often used for streaming data.',
    example: 'The audio player used a circular buffer to store the incoming audio stream.'
  },
  {
    id: 'priority-queue',
    term: 'Priority queue',
    slug: 'priority-queue',
    definition: 'An abstract data type where each element has a "priority" associated with it. Elements with higher priority are served before elements with lower priority.',
    example: 'The task scheduler used a priority queue to ensure that urgent tasks were executed first.'
  },
  {
    id: 'mutex-lock',
    term: 'Mutex lock',
    slug: 'mutex-lock',
    definition: 'A synchronization primitive that prevents multiple threads from concurrently accessing a shared resource.',
    example: 'He used a mutex lock to protect the shared variable from being corrupted by simultaneous writes from different threads.'
  },
  {
    id: 'semaphore',
    term: 'Semaphore',
    slug: 'semaphore',
    definition: 'A variable or abstract data type used to control access to a common resource by multiple processes in a concurrent system.',
    example: 'A semaphore was used to limit the number of threads that could access the database connection pool at the same time.'
  },
  {
    id: 'dead-mutex',
    term: 'Dead mutex',
    slug: 'dead-mutex',
    definition: 'A situation where a thread holding a mutex terminates without releasing it, potentially causing other threads to block indefinitely.',
    example: 'The application froze because a worker thread crashed and created a dead mutex.'
  },
  {
    id: 'critical-section',
    term: 'Critical section',
    slug: 'critical-section',
    definition: 'A part of a program that accesses a shared resource and must not be concurrently accessed by more than one thread of execution.',
    example: 'He wrapped the code that modified the shared counter in a critical section using a mutex.'
  },
  {
    id: 'event-emitter',
    term: 'Event emitter',
    slug: 'event-emitter',
    definition: 'A design pattern where an object (the emitter) can emit named events that cause previously registered "listeners" to be called.',
    example: 'Node.js\'s `EventEmitter` class is a core part of its asynchronous event-driven architecture.'
  },
  {
    id: 'type-guard',
    term: 'Type guard',
    slug: 'type-guard',
    definition: 'In TypeScript, a type guard is a runtime check that guarantees the type of a variable within a certain scope.',
    example: 'He wrote a type guard to check if the object was a `User` before trying to access its `name` property.'
  },
  {
    id: 'dev-dependency',
    term: 'Dev dependency',
    slug: 'dev-dependency',
    definition: 'A software dependency that is only needed for local development and testing, not for the application to run in production.',
    example: 'Testing libraries and linters are usually installed as dev dependencies.'
  },
  {
    id: 'runtime-error',
    term: 'Runtime error',
    slug: 'runtime-error',
    definition: 'An error that occurs during the execution of a program.',
    example: 'A "division by zero" is a classic example of a runtime error.'
  },
  {
    id: 'build-error',
    term: 'Build error',
    slug: 'build-error',
    definition: 'An error that occurs during the compilation or bundling process, preventing the application from being built.',
    example: 'A simple typo in the code caused a build error, and the CI pipeline failed.'
  },
  {
    id: 'entry-point',
    term: 'Entry point',
    slug: 'entry-point',
    definition: 'The location in a program where execution begins.',
    example: 'In a C program, the `main` function is the entry point.'
  },
  {
    id: 'polyfill',
    term: 'Polyfill',
    slug: 'polyfill',
    definition: 'A piece of code (usually JavaScript on the Web) used to provide modern functionality on older browsers that do not natively support it.',
    example: 'He included a polyfill for the `fetch` API so his code would work on older versions of Internet Explorer.'
  },
  {
    id: 'watch-mode',
    term: 'Watch mode',
    slug: 'watch-mode',
    definition: 'A feature in development tools that automatically re-runs a task (like compiling or running tests) whenever a file change is detected.',
    example: 'He ran the test runner in watch mode so he could get instant feedback as he was coding.'
  },
  {
    id: 'rollup-config',
    term: 'Rollup config',
    slug: 'rollup-config',
    definition: 'The configuration file for Rollup, a popular JavaScript module bundler.',
    example: 'He edited the rollup.config.js file to add a new plugin to the build process.'
  },
  {
    id: 'ci-runner',
    term: 'CI runner',
    slug: 'ci-runner',
    definition: 'A machine or container that executes the jobs (like building and testing) defined in a Continuous Integration pipeline.',
    example: 'They set up their own CI runner on a powerful server to speed up their build times.'
  },
  {
    id: 'dependency-injection',
    term: 'Dependency injection',
    slug: 'dependency-injection',
    definition: 'A design pattern in which an object or function receives other objects or functions that it depends on, rather than creating them itself.',
    example: 'Using dependency injection made their components more modular and easier to test in isolation.'
  },
  {
    id: 'microservice-mesh',
    term: 'Microservice mesh',
    slug: 'microservice-mesh',
    definition: 'A dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable in a microservices architecture. Also known as a service mesh.',
    example: 'They used Istio as a microservice mesh to handle traffic management, security, and observability between their services.'
  },
  {
    id: 'lambda-function',
    term: 'Lambda function',
    slug: 'lambda-function',
    definition: 'An anonymous function that can be defined without being bound to an identifier. Also refers to functions run on serverless platforms like AWS Lambda.',
    example: 'He wrote a simple lambda function in Python to sort the list.'
  },
  {
    id: 'version-bump',
    term: 'Version bump',
    slug: 'version-bump',
    definition: 'The act of incrementing the version number of a software package before a new release.',
    example: 'After fixing the bug, he did a patch version bump from 1.2.3 to 1.2.4.'
  },
  {
    id: 'orphan-branch',
    term: 'Orphan branch',
    slug: 'orphan-branch',
    definition: 'In Git, a branch that starts from a clean slate, with no commit history.',
    example: 'He created an orphan branch to host the documentation, completely separate from the main codebase.'
  },
  {
    id: 'detached-head',
    term: 'Detached HEAD',
    slug: 'detached-head',
    definition: 'A state in Git where you are not on any local branch. This happens when you check out a specific commit, tag, or remote branch.',
    example: 'He entered a detached HEAD state when he checked out an old commit to inspect the code.'
  },
  {
    id: 'upstream-repo',
    term: 'Upstream repo',
    slug: 'upstream-repo',
    definition: 'In a forked Git repository, the upstream repo is the original repository that was forked.',
    example: 'He fetched the latest changes from the upstream repo to keep his fork up to date.'
  },
  {
    id: 'fork-sync',
    term: 'Fork sync',
    slug: 'fork-sync',
    definition: 'The process of updating a forked Git repository with the latest changes from the original (upstream) repository.',
    example: 'He performed a fork sync every morning to make sure he was working with the latest code.'
  },
  {
    id: 'git-diff',
    term: 'Git diff',
    slug: 'git-diff',
    definition: 'A Git command that shows the differences between commits, branches, or files.',
    example: 'He used `git diff` to review his changes before creating a commit.'
  },
  {
    id: 'diff-merge',
    term: 'Diff merge',
    slug: 'diff-merge',
    definition: 'The process of manually resolving differences between two versions of a file during a version control merge.',
    example: 'The automatic merge failed, so he had to use a diff merge tool to resolve the conflicts.'
  },
  {
    id: 'patch-file',
    term: 'Patch file',
    slug: 'patch-file',
    definition: 'A file that contains a list of differences between two versions of a file or set of files, which can be used to apply those changes to another copy.',
    example: 'He created a patch file of his changes to send to a collaborator who didn\'t have access to the repository.'
  },
  {
    id: 'ssr-server-side-rendering',
    term: 'SSR',
    slug: 'ssr-server-side-rendering',
    definition: 'Server-Side Rendering is the process of rendering a web page on the server and sending the fully rendered HTML to the browser.',
    example: 'They used SSR for their public-facing pages to improve SEO and initial load performance.'
  },
  {
    id: 'csr-client-side-rendering',
    term: 'CSR',
    slug: 'csr-client-side-rendering',
    definition: 'Client-Side Rendering is the process where a web page is rendered in the browser using JavaScript, after the initial HTML is loaded.',
    example: 'The dashboard was built as a single-page application using CSR, as SEO was not a concern.'
  },
  {
    id: 'hydration',
    term: 'Hydration',
    slug: 'hydration',
    definition: 'In web development, hydration is the process of making a server-rendered HTML page interactive by attaching JavaScript event listeners to the DOM.',
    example: 'After the initial page load, the JavaScript framework began the hydration process to make the buttons clickable.'
  },
  {
    id: 'hotfix-patch',
    term: 'Hotfix patch',
    slug: 'hotfix-patch',
    definition: 'A small, urgent update released to fix a critical issue in a production environment.',
    example: 'They had to roll out a hotfix patch to close a major security hole.'
  },
  {
    id: 'api-schema',
    term: 'API schema',
    slug: 'api-schema',
    definition: 'A formal definition of the structure of data that an API expects in requests and sends in responses.',
    example: 'The API schema, defined using OpenAPI, served as the contract between the frontend and backend teams.'
  },
  {
    id: 'rate-limiter',
    term: 'Rate limiter',
    slug: 'rate-limiter',
    definition: 'A mechanism that controls the rate of traffic or requests sent or received by a network interface or application.',
    example: 'The public API used a rate limiter to prevent abuse, allowing only 100 requests per minute per user.'
  },
  {
    id: 'jwt-token',
    term: 'JWT token',
    slug: 'jwt-token',
    definition: 'A JSON Web Token is a compact, URL-safe means of representing claims to be transferred between two parties, often used for authentication.',
    example: 'After logging in, the user was issued a JWT token to use for authenticating subsequent requests.'
  },
  {
    id: 'secret-rotation',
    term: 'Secret rotation',
    slug: 'secret-rotation',
    definition: 'The security practice of regularly changing sensitive information like API keys, passwords, and encryption keys.',
    example: 'The company policy required a mandatory secret rotation for all database credentials every 90 days.'
  },
  {
    id: 'replay-attack',
    term: 'Replay attack',
    slug: 'replay-attack',
    definition: 'A network attack where a valid data transmission is maliciously or fraudulently repeated or delayed.',
    example: 'Using a nonce in the authentication request helps prevent replay attacks.'
  },
  {
    id: 'middleware-chain',
    term: 'Middleware chain',
    slug: 'middleware-chain',
    definition: 'In a web server, it is a series of middleware functions that are executed in order for an incoming request.',
    example: 'The request passed through a middleware chain that first logged the request, then checked for authentication, and finally parsed the body.'
  },
  {
    id: 'webhook',
    term: 'Webhook',
    slug: 'webhook',
    definition: 'A method of augmenting or altering the behavior of a web page or web application with custom callbacks. An HTTP POST that is triggered by an event.',
    example: 'He set up a webhook so that every time he pushed to GitHub, it would automatically trigger a new build on his server.'
  },
  {
    id: 'endpoints',
    term: 'Endpoints',
    slug: 'endpoints',
    definition: 'The URLs of an API where requests can be sent to perform specific actions.',
    example: 'The API has endpoints for getting users, creating a user, and deleting a user.'
  },
  {
    id: 'code-freeze',
    term: 'Code freeze',
    slug: 'code-freeze',
    definition: 'A period during software development when no new code is added to a repository, usually in the final stages before a major release, to focus on testing and bug fixing.',
    example: 'The project is now in a code freeze; only critical bug fixes are allowed.'
  },
  {
    id: 'refactoring-sprint',
    term: 'Refactoring sprint',
    slug: 'refactoring-sprint',
    definition: 'A development sprint dedicated entirely to improving the internal structure and quality of existing code without adding new features.',
    example: 'The team dedicated the next two weeks to a refactoring sprint to pay down their accumulated tech debt.'
  },
  {
    id: 'static-routing',
    term: 'Static routing',
    slug: 'static-routing',
    definition: 'A form of routing where the path a packet takes is manually configured by a network administrator, rather than being determined by a dynamic routing protocol.',
    example: 'He added a static route to the router to ensure all traffic to the branch office went over the dedicated VPN link.'
  },
  {
    id: 'dynamic-routing',
    term: 'Dynamic routing',
    slug: 'dynamic-routing',
    definition: 'A networking technique where routers automatically learn about network paths from other routers and update their routing tables accordingly.',
    example: 'They used a dynamic routing protocol like OSPF so the network could automatically reroute traffic if a link went down.'
  },
  {
    id: 'ospf-area',
    term: 'OSPF area',
    slug: 'ospf-area',
    definition: 'In the OSPF routing protocol, an area is a logical grouping of routers that helps to simplify administration and optimize routing in large networks.',
    example: 'The large corporate network was divided into multiple OSPF areas to reduce the size of the routing tables on each router.'
  },
  {
    id: 'route-poisoning',
    term: 'Route poisoning',
    slug: 'route-poisoning',
    definition: 'A method used by distance-vector routing protocols to prevent routing loops by advertising a failed route with an infinite metric.',
    example: 'When the link failed, the router used route poisoning to immediately inform its neighbors that the path was no longer available.'
  },
  {
    id: 'packet-burst',
    term: 'Packet burst',
    slug: 'packet-burst',
    definition: 'A short, rapid transmission of a large number of data packets.',
    example: 'The traffic shaping algorithm allows for a small packet burst before it starts to throttle the connection.'
  },
  {
    id: 'packet-shaping',
    term: 'Packet shaping',
    slug: 'packet-shaping',
    definition: 'The practice of controlling the rate of network traffic to optimize performance, improve latency, and/or increase usable bandwidth.',
    example: 'The ISP uses packet shaping to de-prioritize peer-to-peer traffic during peak hours.'
  },
  {
    id: 'traffic-policing',
    term: 'Traffic policing',
    slug: 'traffic-policing',
    definition: 'A Quality of Service (QoS) mechanism that monitors network traffic for compliance with a defined traffic rate and drops or re-marks packets that exceed the limit.',
    example: 'The firewall used traffic policing to drop all traffic from the source IP that was exceeding the rate limit.'
  },
  {
    id: 'mtu-size',
    term: 'MTU size',
    slug: 'mtu-size',
    definition: 'The Maximum Transmission Unit is the largest size of a data packet that can be transmitted over a specific network. For Ethernet, it is typically 1500 bytes.',
    example: 'A mismatched MTU size between the client and server was causing fragmentation and performance issues.'
  },
  {
    id: 'jumbo-frames',
    term: 'Jumbo frames',
    slug: 'jumbo-frames',
    definition: 'Ethernet frames with a size larger than the standard 1500 bytes, used on some high-speed networks to increase efficiency.',
    example: 'They enabled jumbo frames on their storage network to improve the throughput of large file transfers.'
  },
  {
    id: 'lacp',
    term: 'LACP',
    slug: 'lacp',
    definition: 'Link Aggregation Control Protocol is a standard that allows for the bundling of several physical network ports together to form a single logical channel, increasing bandwidth and providing redundancy.',
    example: 'He configured LACP to bond two 1Gbps ports on the switch, creating a single 2Gbps link to the server.'
  },
  {
    id: 'port-channel',
    term: 'Port-channel',
    slug: 'port-channel',
    definition: 'A logical interface on a network switch that is created by bundling multiple physical ports together using a technology like LACP.',
    example: 'The server was connected to the port-channel, which provided both increased bandwidth and link redundancy.'
  },
  {
    id: 'etherchannel',
    term: 'EtherChannel',
    slug: 'etherchannel',
    definition: 'A Cisco-proprietary technology for bundling multiple physical Ethernet links into a single logical link.',
    example: 'Before LACP became the standard, many networks used Cisco\'s EtherChannel for link aggregation.'
  },
  {
    id: 'routing-table',
    term: 'Routing table',
    slug: 'routing-table',
    definition: 'A data table stored in a router or networked computer that lists the routes to particular network destinations.',
    example: 'He examined the routing table to see which path the packets would take to reach the remote network.'
  },
  {
    id: 'mac-aging',
    term: 'MAC aging',
    slug: 'mac-aging',
    definition: 'The process by which a network switch automatically removes old entries from its MAC address table after a certain period of inactivity.',
    example: 'The default MAC aging time on the switch was 300 seconds.'
  },
  {
    id: 'bpdu',
    term: 'BPDU',
    slug: 'bpdu',
    definition: 'Bridge Protocol Data Units are data messages exchanged between switches within a network that uses the Spanning Tree Protocol (STP) to prevent loops.',
    example: 'The switches exchanged BPDUs to elect a root bridge and determine the best path through the network.'
  },
  {
    id: 'root-bridge',
    term: 'Root bridge',
    slug: 'root-bridge',
    definition: 'In a Spanning Tree Protocol network, the root bridge is the master switch that serves as the central point for calculating network paths.',
    example: 'The administrator manually configured the core switch to be the root bridge to ensure a stable network topology.'
  },
  {
    id: 'stp-recalculation',
    term: 'STP recalculation',
    slug: 'stp-recalculation',
    definition: 'The process where the Spanning Tree Protocol recalculates the network topology after a change, such as a link failure or a new switch being added.',
    example: 'Plugging the cable into the wrong port caused a brief network outage while STP recalculation occurred.'
  },
  {
    id: 'vlan-trunk',
    term: 'VLAN trunk',
    slug: 'vlan-trunk',
    definition: 'A network link that carries traffic for multiple VLANs. Frames sent over a trunk link are "tagged" with a VLAN ID.',
    example: 'The link between the two switches was configured as a VLAN trunk to allow devices on all VLANs to communicate.'
  },
  {
    id: 'tagged-frame',
    term: 'Tagged frame',
    slug: 'tagged-frame',
    definition: 'An Ethernet frame that has a VLAN tag inserted into it, used for carrying traffic over a trunk link.',
    example: 'The switch added a VLAN tag to the frame before sending it across the trunk port.'
  },
  {
    id: 'untagged-frame',
    term: 'Untagged frame',
    slug: 'untagged-frame',
    definition: 'A standard Ethernet frame without a VLAN tag, typically used on access ports that belong to a single VLAN.',
    example: 'The switch removed the VLAN tag from the frame before sending it to the untagged access port where the user\'s PC was connected.'
  },
  {
    id: 'broadcast-storm',
    term: 'Broadcast storm',
    slug: 'broadcast-storm',
    definition: 'A condition where a network is flooded with an excessive number of broadcast packets, which can overwhelm network devices and cause the network to fail.',
    example: 'A network loop caused a broadcast storm that brought the entire office network to a halt.'
  },
  {
    id: 'dhcp-snooping',
    term: 'DHCP snooping',
    slug: 'dhcp-snooping',
    definition: 'A security feature on network switches that blocks untrusted DHCP messages to prevent rogue DHCP servers from being added to the network.',
    example: 'Enabling DHCP snooping on the switch prevented an employee from accidentally causing an outage by plugging in their home router.'
  },
  {
    id: 'arp-poisoning',
    term: 'ARP poisoning',
    slug: 'arp-poisoning',
    definition: 'A type of attack where an attacker sends forged ARP messages onto a local area network to associate their MAC address with the IP address of another host, allowing them to intercept traffic.',
    example: 'The attacker used ARP poisoning to carry out a man-in-the-middle attack.'
  },
  {
    id: 'evil-twin-ap',
    term: 'Evil twin AP',
    slug: 'evil-twin-ap',
    definition: 'A rogue Wi-Fi access point that appears to be a legitimate one, but is set up to eavesdrop on wireless communications.',
    example: 'The evil twin AP had the same name as the legitimate corporate Wi-Fi, tricking users into connecting to it.'
  },
  {
    id: 'rogue-ap',
    term: 'Rogue AP',
    slug: 'rogue-ap',
    definition: 'An unauthorized Wi-Fi access point connected to a wired network, which can create a security vulnerability.',
    example: 'The network scanner detected a rogue AP that an employee had set up under their desk.'
  },
  {
    id: 'wps-attack',
    term: 'WPS attack',
    slug: 'wps-attack',
    definition: 'An attack that exploits a vulnerability in Wi-Fi Protected Setup (WPS) to brute-force the PIN and gain access to a Wi-Fi network.',
    example: 'He disabled WPS on his router because it was vulnerable to a WPS attack.'
  },
  {
    id: 'packet-replay',
    term: 'Packet replay',
    slug: 'packet-replay',
    definition: 'A type of attack where a captured sequence of data packets is re-transmitted to the network.',
    example: 'The old authentication protocol was vulnerable to a packet replay attack, allowing an attacker to gain access by re-sending a captured login sequence.'
  },
  {
    id: 'beacon-frame',
    term: 'Beacon frame',
    slug: 'beacon-frame',
    definition: 'In Wi-Fi, a beacon frame is a type of management frame sent periodically by an access point to announce its presence and provide network information.',
    example: 'Your phone learns about nearby Wi-Fi networks by listening for their beacon frames.'
  },
  {
    id: 'probe-request',
    term: 'Probe request',
    slug: 'probe-request',
    definition: 'A type of Wi-Fi management frame sent by a client device to ask if a specific network is nearby.',
    example: 'Your laptop sends out probe requests for all your saved Wi-Fi networks to see if any are in range.'
  },
  {
    id: 'probe-response',
    term: 'Probe response',
    slug: 'probe-response',
    definition: 'A frame sent by a Wi-Fi access point in response to a probe request, confirming its presence.',
    example: 'The access point sent a probe response after receiving the client\'s request.'
  },
  {
    id: 'deauth-packet',
    term: 'Deauth packet',
    slug: 'deauth-packet',
    definition: 'A Wi-Fi management frame that is used to disconnect a client from an access point. It can be used maliciously in a denial-of-service attack.',
    example: 'The attacker sent a flood of deauth packets to kick all the users off the Wi-Fi network.'
  },
  {
    id: 'captive-portal',
    term: 'Captive portal',
    slug: 'captive-portal',
    definition: 'A web page that is displayed to newly connected users of a Wi-Fi network before they are granted broader access to network resources. Often used for authentication or accepting terms of service.',
    example: 'The hotel Wi-Fi made him go through a captive portal where he had to enter his room number to get internet access.'
  },
  {
    id: 'honeypot',
    term: 'Honeypot',
    slug: 'honeypot',
    definition: 'A security mechanism set to detect, deflect, or, in some manner, counteract attempts at unauthorized use of information systems. It is a decoy system designed to be attacked.',
    example: 'The security team set up a honeypot that looked like a vulnerable web server to study the techniques used by attackers.'
  },
  {
    id: 'port-knocking',
    term: 'Port knocking',
    slug: 'port-knocking',
    definition: 'A security method where an external client must attempt to connect to a specific sequence of closed ports before a real port is opened, as a way to hide services.',
    example: 'To open the SSH port, he had to perform a port knocking sequence by sending packets to ports 1000, 2000, and then 3000.'
  },
  {
    id: 'reverse-proxying',
    term: 'Reverse proxying',
    slug: 'reverse-proxying',
    definition: 'The process of using a reverse proxy server to forward requests from the internet to one or more servers on an internal network.',
    example: 'They used Nginx for reverse proxying to provide a single public entry point for their multiple backend microservices.'
  },
  {
    id: 'fail2ban',
    term: 'Fail2ban',
    slug: 'fail2ban',
    definition: 'An intrusion prevention software framework that protects computer servers from brute-force attacks by monitoring log files and banning IPs that show malicious signs.',
    example: 'He installed Fail2ban on his SSH server to automatically block IPs that had too many failed login attempts.'
  },
  {
    id: 'hash-poisoning',
    term: 'Hash poisoning',
    slug: 'hash-poisoning',
    definition: 'An attack that exploits hash table collisions to cause a denial-of-service by feeding a program carefully crafted data that results in many hash collisions.',
    example: 'The web application was vulnerable to a hash poisoning attack, allowing an attacker to crash the server with a malicious POST request.'
  },
  {
    id: 'key-escrow',
    term: 'Key escrow',
    slug: 'key-escrow',
    definition: 'A system where the keys needed to decrypt encrypted data are held in escrow so that, under certain circumstances, an authorized third party may gain access.',
    example: 'The corporation had a key escrow policy for all employee laptops to ensure the company could access the data if an employee left.'
  },
  {
    id: 'ransom-note',
    term: 'Ransom note',
    slug: 'ransom-note',
    definition: 'A file left on a computer system by ransomware that provides instructions on how to pay the ransom to get the encrypted files back.',
    example: 'After the attack, every folder contained a `readme.txt` file which was the ransom note.'
  },
  {
    id: 'botnet-c2',
    term: 'Botnet C2',
    slug: 'botnet-c2',
    definition: 'The Command and Control server used by an attacker to manage and issue commands to a network of compromised computers (a botnet).',
    example: 'The security team worked to identify and sinkhole the botnet C2 server to disrupt the attack.'
  },
  {
    id: 'command-injection',
    term: 'Command injection',
    slug: 'command-injection',
    definition: 'A type of security attack where an attacker is able to execute arbitrary commands on the host operating system through a vulnerable application.',
    example: 'The web form was vulnerable to command injection because it didn\'t properly sanitize user input before passing it to a system shell.'
  },
  {
    id: 'ssrf',
    term: 'SSRF',
    slug: 'ssrf',
    definition: 'A Server-Side Request Forgery attack where an attacker can coerce a web application to make HTTP requests to an arbitrary domain of the attacker\'s choosing.',
    example: 'The attacker used an SSRF vulnerability to make the server scan its own internal network.'
  },
  {
    id: 'csrf-token',
    term: 'CSRF token',
    slug: 'csrf-token',
    definition: 'A unique, secret, unpredictable value that is generated by the server-side application and transmitted to the client to prevent Cross-Site Request Forgery attacks.',
    example: 'The form submission failed because the CSRF token was invalid.'
  },
  {
    id: 'xss-payload',
    term: 'XSS payload',
    slug: 'xss-payload',
    definition: 'The malicious script that an attacker injects into a web page as part of a Cross-Site Scripting (XSS) attack.',
    example: 'His XSS payload was a simple script that stole the user\'s session cookie and sent it to his server.'
  },
  {
    id: 'shellcode',
    term: 'Shellcode',
    slug: 'shellcode',
    definition: 'A small piece of code used as the payload in the exploitation of a software vulnerability. It typically starts a command shell from which the attacker can control the compromised machine.',
    example: 'After exploiting the buffer overflow, the attacker injected and executed their shellcode.'
  },
  {
    id: 'root-privilege',
    term: 'Root privilege',
    slug: 'root-privilege',
    definition: 'The highest level of administrative access on a Unix-like operating system, allowing a user to do anything.',
    example: 'The goal of the exploit was to gain root privilege on the target server.'
  },
  {
    id: 'kernel-exploit',
    term: 'Kernel exploit',
    slug: 'kernel-exploit',
    definition: 'An exploit that targets a vulnerability in the operating system\'s kernel, often with the goal of privilege escalation.',
    example: 'A successful kernel exploit can give an attacker complete control over a system.'
  },
  {
    id: 'side-channel-exploit',
    term: 'Side-channel exploit',
    slug: 'side-channel-exploit',
    definition: 'An exploit that gathers information from the physical implementation of a system, such as its power consumption, timing, or electromagnetic emissions, rather than targeting a software bug.',
    example: 'The Spectre and Meltdown vulnerabilities were types of side-channel exploits that affected modern CPUs.'
  },
  {
    id: 'privilege-escalation',
    term: 'Privilege escalation',
    slug: 'privilege-escalation',
    definition: 'The act of exploiting a bug, design flaw, or configuration oversight in an operating system or software application to gain elevated access to resources that are normally protected from an application or user.',
    example: 'The attacker first gained a foothold as a low-privileged user, then used another exploit for privilege escalation to become root.'
  },
  {
    id: 'buffer-overrun',
    term: 'Buffer overrun',
    slug: 'buffer-overrun',
    definition: 'Another term for a buffer overflow, where a program writes data beyond the boundary of its intended buffer.',
    example: 'The legacy C code was full of potential buffer overrun vulnerabilities.'
  },
  {
    id: 'heap-spray',
    term: 'Heap spray',
    slug: 'heap-spray',
    definition: 'A technique used in exploits that involves filling a program\'s heap memory with a large amount of shellcode to increase the chances of a successful exploit.',
    example: 'The exploit used a heap spray to make it more likely that the corrupted function pointer would land on the attacker\'s malicious code.'
  },
  {
    id: 'shallow-scan',
    term: 'Shallow scan',
    slug: 'shallow-scan',
    definition: 'A quick security scan that only checks for the most common and easily identifiable vulnerabilities.',
    example: 'The nightly shallow scan found no issues, but the more thorough weekly deep scan found a hidden vulnerability.'
  },
  {
    id: 'deep-scan',
    term: 'Deep scan',
    slug: 'deep-scan',
    definition: 'A comprehensive and time-consuming security scan that thoroughly examines a system for a wide range of vulnerabilities.',
    example: 'He ran a deep scan of the system after the suspected breach.'
  },
  {
    id: 'packet-mirroring',
    term: 'Packet mirroring',
    slug: 'packet-mirroring',
    definition: 'The practice of copying network packets seen on one switch port to another port, often for analysis by a network monitoring tool.',
    example: 'The administrator configured packet mirroring to send a copy of all web traffic to the intrusion detection system.'
  },
  {
    id: 'gre-tunnel',
    term: 'GRE tunnel',
    slug: 'gre-tunnel',
    definition: 'A Generic Routing Encapsulation tunnel is a tunneling protocol that can encapsulate a wide variety of network layer protocols inside virtual point-to-point links over an IP network.',
    example: 'They used a GRE tunnel to extend their internal network between two different office locations over the internet.'
  },
  {
    id: 'ipsec-peer',
    term: 'IPsec peer',
    slug: 'ipsec-peer',
    definition: 'The remote endpoint of an IPsec VPN tunnel.',
    example: 'The firewall could not establish a connection because the IPsec peer was not responding.'
  },
  {
    id: 'ssl-offloading',
    term: 'SSL offloading',
    slug: 'ssl-offloading',
    definition: 'The process of removing the SSL-based encryption from incoming traffic to relieve a web server of the processing burden of encryption and decryption.',
    example: 'They used a dedicated load balancer for SSL offloading, allowing the web servers to focus on serving content.'
  },
  {
    id: 'dpi-firewall',
    term: 'DPI firewall',
    slug: 'dpi-firewall',
    definition: 'A firewall that uses Deep Packet Inspection to examine the content of data packets, allowing for more granular control over network traffic.',
    example: 'The DPI firewall was configured to block all BitTorrent traffic, regardless of which port it used.'
  },
  {
    id: 'acl-rule',
    term: 'ACL rule',
    slug: 'acl-rule',
    definition: 'A single entry in an Access Control List that specifies a permission or restriction for a particular user or system.',
    example: 'He added an ACL rule to deny all traffic from the malicious IP address.'
  },
  {
    id: 'nat-table',
    term: 'NAT table',
    slug: 'nat-table',
    definition: 'A table in a router or firewall that keeps track of the mapping between internal private IP addresses and the single public IP address.',
    example: 'The NAT table was full, preventing any new devices from accessing the internet.'
  },
  {
    id: 'socket-binding',
    term: 'Socket binding',
    slug: 'socket-binding',
    definition: 'The process of associating a network socket with a specific IP address and port number.',
    example: 'The web server failed to start because another process was already using the same socket binding on port 80.'
  },
  {
    id: 'port-exhaustion',
    term: 'Port exhaustion',
    slug: 'port-exhaustion',
    definition: 'A condition where a system runs out of available source ports for making new outgoing network connections, often a symptom of a misbehaving application or a denial-of-service attack.',
    example: 'The server crashed due to port exhaustion from too many outgoing connections in a TIME_WAIT state.'
  },
  {
    id: 'dns-leak',
    term: 'DNS leak',
    slug: 'dns-leak',
    definition: 'A security flaw where DNS requests are sent to the default ISP\'s DNS servers, even when using a VPN, potentially revealing a user\'s browsing habits.',
    example: 'He checked for a DNS leak to ensure his VPN was correctly routing all of his traffic, including DNS queries.'
  },
  {
    id: 'dns-filtering',
    term: 'DNS filtering',
    slug: 'dns-filtering',
    definition: 'A security practice where a DNS server blocks requests to known malicious or undesirable domains.',
    example: 'The company used DNS filtering to block access to social media and malware sites.'
  },
  {
    id: 'dnssec',
    term: 'DNSSEC',
    slug: 'dnssec',
    definition: 'Domain Name System Security Extensions is a suite of specifications for securing certain kinds of information provided by the DNS, such as by using digital signatures to ensure authenticity.',
    example: 'Enabling DNSSEC on their domain helped protect their users from DNS spoofing attacks.'
  },
  {
    id: 'mx-record',
    term: 'MX record',
    slug: 'mx-record',
    definition: 'A Mail Exchanger record is a type of DNS record that specifies the mail server responsible for accepting email messages on behalf of a domain.',
    example: 'He configured the MX record to point to Google\'s mail servers to use Google Workspace for his domain\'s email.'
  },
  {
    id: 'ptr-record',
    term: 'PTR record',
    slug: 'ptr-record',
    definition: 'A Pointer record is a type of DNS record used for reverse DNS lookups, mapping an IP address back to a domain name.',
    example: 'Many mail servers will reject email from an IP address that doesn\'t have a valid PTR record.'
  },
  {
    id: 'reverse-lookup',
    term: 'Reverse lookup',
    slug: 'reverse-lookup',
    definition: 'A DNS query that determines the domain name associated with a given IP address, using a PTR record.',
    example: 'He performed a reverse lookup on the IP address to see who it belonged to.'
  },
  {
    id: 'dhcp-pool',
    term: 'DHCP pool',
    slug: 'dhcp-pool',
    definition: 'A range of IP addresses that a DHCP server is configured to lease out to clients on a network.',
    example: 'The DHCP pool was almost full, so they needed to expand the subnet to accommodate more devices.'
  },
  {
    id: 'lease-time',
    term: 'Lease time',
    slug: 'lease-time',
    definition: 'The amount of time that a DHCP server grants an IP address to a client.',
    example: 'He set a short lease time on the public Wi-Fi network so that IP addresses would be recycled quickly.'
  },
  {
    id: 'connection-timeout',
    term: 'Connection timeout',
    slug: 'connection-timeout',
    definition: 'The amount of time a program will wait for a connection to be established before giving up.',
    example: 'The application failed with a connection timeout error because the database server was down.'
  },
  {
    id: 'syn-flood',
    term: 'SYN flood',
    slug: 'syn-flood',
    definition: 'A type of denial-of-service attack where an attacker sends a succession of SYN requests to a target\'s system in an attempt to consume enough server resources to make the system unresponsive.',
    example: 'The firewall detected and blocked a SYN flood attack that was attempting to overwhelm the web server.'
  },
  {
    id: 'ack-flood',
    term: 'ACK flood',
    slug: 'ack-flood',
    definition: 'A type of denial-of-service attack that aims to overwhelm a server with TCP ACK packets.',
    example: 'The server\'s CPU usage spiked due to an ACK flood, as it struggled to process all the bogus packets.'
  },
  {
    id: 'handshake-timeout',
    term: 'Handshake timeout',
    slug: 'handshake-timeout',
    definition: 'An error that occurs when the SSL/TLS handshake between a client and server does not complete within a certain time frame.',
    example: 'A poor network connection led to a handshake timeout when trying to access the secure website.'
  },
  {
    id: 'half-open-connection',
    term: 'Half-open connection',
    slug: 'half-open-connection',
    definition: 'A TCP connection where one end has closed or aborted the connection without the other end being aware of it. SYN floods create many half-open connections.',
    example: 'The server\'s connection table was filled with half-open connections from the SYN flood attack.'
  },
  {
    id: 'proxy-pass',
    term: 'Proxy pass',
    slug: 'proxy-pass',
    definition: 'A directive in web servers like Nginx that forwards a request to a backend server.',
    example: 'He configured a `proxy_pass` rule to send all requests for `/api` to the backend Node.js application.'
  },
  {
    id: 'traffic-mirror',
    term: 'Traffic mirror',
    slug: 'traffic-mirror',
    definition: 'Another term for packet mirroring, where network traffic is copied to another interface for monitoring or analysis.',
    example: 'The intrusion detection system analyzed the traffic mirror to look for malicious activity.'
  },
  {
    id: 'network-probe',
    term: 'Network probe',
    slug: 'network-probe',
    definition: 'A device or software agent used to monitor and collect data about a network\'s performance and health.',
    example: 'They deployed network probes throughout their WAN to monitor latency and packet loss.'
  },
  {
    id: 'route-flapping',
    term: 'Route flapping',
    slug: 'route-flapping',
    definition: 'A situation where a routing table entry for a particular network is repeatedly added and removed, often due to an unstable network link.',
    example: 'The constant route flapping was causing intermittent connectivity issues to the remote site.'
  },
  {
    id: 'icmp-block',
    term: 'ICMP block',
    slug: 'icmp-block',
    definition: 'A firewall rule that blocks Internet Control Message Protocol traffic, which can prevent tools like `ping` and `traceroute` from working.',
    example: 'The server appeared to be down, but it was just an ICMP block on the firewall preventing ping requests from getting through.'
  },
  {
    id: 'udp-relay',
    term: 'UDP relay',
    slug: 'udp-relay',
    definition: 'A server or service that forwards UDP packets between clients, often used to bypass NAT or firewalls.',
    example: 'The online game used a UDP relay to help players behind restrictive firewalls connect to each other.'
  },
  {
    id: 'wan-link',
    term: 'WAN link',
    slug: 'wan-link',
    definition: 'The network connection that links a local area network (LAN) to a wide area network (WAN), such as the internet.',
    example: 'The entire office lost internet access because the primary WAN link went down.'
  },
  {
    id: 'leo-satellite-link',
    term: 'LEO satellite link',
    slug: 'leo-satellite-link',
    definition: 'An internet connection provided by a constellation of satellites in Low Earth Orbit, such as Starlink.',
    example: 'In the remote area with no cable or fiber, a LEO satellite link was the only option for high-speed internet.'
  },
  {
    id: 'qoe-metrics',
    term: 'QoE metrics',
    slug: 'qoe-metrics',
    definition: 'Quality of Experience metrics are used to measure the overall satisfaction of a user with a service, going beyond technical metrics like latency and bandwidth.',
    example: 'The video streaming service tracked QoE metrics like buffering time and video start-up time.'
  },
  {
    id: 'siem-logs',
    term: 'SIEM logs',
    slug: 'siem-logs',
    definition: 'Logs collected and analyzed by a Security Information and Event Management system to detect security threats and suspicious activity.',
    example: 'The security analyst reviewed the SIEM logs to investigate the source of the breach.'
  },
  {
    id: 'ioc-indicator',
    term: 'IOC indicator',
    slug: 'ioc-indicator',
    definition: 'An Indicator of Compromise is a piece of digital forensic evidence, such as a file hash or IP address, that indicates a security breach has occurred.',
    example: 'The antivirus software flagged the file because its hash matched a known IOC for that piece of ransomware.'
  },
  {
    id: 'mitre-att-ck',
    term: 'MITRE ATT&CK',
    slug: 'mitre-att-ck',
    definition: 'A globally accessible knowledge base of adversary tactics and techniques based on real-world observations.',
    example: 'The security team used the MITRE ATT&CK framework to model the threat actor\'s likely next moves.'
  },
  {
    id: 'threat-model',
    term: 'Threat model',
    slug: 'threat-model',
    definition: 'A process for identifying, communicating, and understanding threats and mitigations within the context of protecting something of value.',
    example: 'They created a threat model for the new application to identify potential security risks before writing any code.'
  },
  {
    id: 'cyber-kill-chain',
    term: 'Cyber kill chain',
    slug: 'cyber-kill-chain',
    definition: 'A model developed by Lockheed Martin that identifies the steps an attacker must go through to carry out a successful cyberattack.',
    example: 'By disrupting the cyber kill chain at the delivery stage, they were able to prevent the malware from being executed.'
  },
  {
    id: 'air-gap',
    term: 'Air gap',
    slug: 'air-gap',
    definition: 'A security measure where a computer or network is physically isolated from other networks, such as the internet.',
    example: 'The classified network was protected by an air gap to prevent any possibility of remote access.'
  },
  {
    id: 'sandbox-execution',
    term: 'Sandbox execution',
    slug: 'sandbox-execution',
    definition: 'Running a program in a restricted, isolated environment (a sandbox) to prevent it from harming the host system.',
    example: 'The antivirus software used sandbox execution to safely run and analyze the suspicious file.'
  },
  {
    id: 'zero-trust-model',
    term: 'Zero-trust model',
    slug: 'zero-trust-model',
    definition: 'A security model based on the principle of "never trust, always verify," where no user or device is trusted by default, regardless of its location.',
    example: 'The company moved to a zero-trust model, requiring multi-factor authentication for access to all internal applications.'
  },
  {
    id: 'shadow-credentials',
    term: 'Shadow credentials',
    slug: 'shadow-credentials',
    definition: 'Unauthorized or undocumented user accounts and credentials that exist within an organization\'s IT environment, often creating a security risk.',
    example: 'The audit found several shadow credentials left over from old service accounts.'
  },
  {
    id: 'session-replay',
    term: 'Session replay',
    slug: 'session-replay',
    definition: 'The ability to replay a user\'s journey on a web site or web application. It can be used for debugging or, maliciously, for stealing information.',
    example: 'The support team used a session replay tool to see exactly what the user did before the error occurred.'
  },
  {
    id: 'token-expiration',
    term: 'Token expiration',
    slug: 'token-expiration',
    definition: 'The time at which an authentication token (like a JWT or OAuth token) becomes invalid.',
    example: 'He set a short token expiration time for the session tokens to reduce the risk if one was stolen.'
  },
  {
    id: 'broken-auth',
    term: 'Broken auth',
    slug: 'broken-auth',
    definition: 'Short for Broken Authentication, a common category of web application vulnerabilities where authentication mechanisms are implemented incorrectly.',
    example: 'The application was vulnerable to broken auth because it allowed users to set weak passwords.'
  },
  {
    id: 'key-rotation',
    term: 'Key rotation',
    slug: 'key-rotation',
    definition: 'The security practice of periodically changing cryptographic keys to limit the amount of data that could be compromised if a key is stolen.',
    example: 'The KMS was configured to perform automatic key rotation every year.'
  },
  {
    id: 'ssh-fingerprint',
    term: 'SSH fingerprint',
    slug: 'ssh-fingerprint',
    definition: 'A short sequence of bytes used to authenticate or identify a longer public key. It is shown to the user on first connect to verify the server\'s identity.',
    example: 'He verified the SSH fingerprint matched the one provided by the server admin before connecting for the first time.'
  },
  {
    id: 'mfa-fatigue',
    term: 'MFA fatigue',
    slug: 'mfa-fatigue',
    definition: 'An attack where an attacker who has a user\'s password spams them with multi-factor authentication push notifications until the user gets annoyed and approves one.',
    example: 'The attacker gained access through an MFA fatigue attack after sending the user over 100 push notifications in a minute.'
  },
  {
    id: 'blue-green-deploy',
    term: 'Blue-green deploy',
    slug: 'blue-green-deploy',
    definition: 'A deployment strategy where two identical production environments ("blue" and "green") are maintained. The new version is deployed to the inactive environment, and traffic is switched over once it\'s verified.',
    example: 'They used a blue-green deployment to ensure zero downtime and instant rollback capabilities.'
  },
  {
    id: 'canary-deploy',
    term: 'Canary deploy',
    slug: 'canary-deploy',
    definition: 'A deployment strategy where the new version is gradually rolled out to a small subset of users before being rolled out to the entire user base.',
    example: 'They did a canary deploy, releasing the new feature to 5% of users first to monitor for any issues.'
  },
  {
    id: 'rolling-deploy',
    term: 'Rolling deploy',
    slug: 'rolling-deploy',
    definition: 'A deployment strategy where the new version is slowly deployed across the production servers one by one or in batches, without taking the entire service down.',
    example: 'A rolling deploy updated the servers over a period of 10 minutes, ensuring the service remained available throughout.'
  },
  {
    id: 'immutable-deploy',
    term: 'Immutable deploy',
    slug: 'immutable-deploy',
    definition: 'A deployment strategy where servers are never modified in place. Instead, a new server with the updated application is created, and the old one is terminated.',
    example: 'They adopted an immutable deployment model, which made their infrastructure more predictable and easier to manage.'
  },
  {
    id: 'iac-infrastructure-as-code',
    term: 'IaC',
    slug: 'iac-infrastructure-as-code',
    definition: 'Infrastructure as Code is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.',
    example: 'They used Terraform for IaC, allowing them to version control their entire cloud setup in Git.'
  },
  {
    id: 'terraform-plan',
    term: 'Terraform plan',
    slug: 'terraform-plan',
    definition: 'A Terraform command that creates an execution plan, showing you what actions Terraform will take to modify your infrastructure without actually making any changes.',
    example: 'He reviewed the `terraform plan` output carefully before applying the changes to production.'
  },
  {
    id: 'helm-chart',
    term: 'Helm chart',
    slug: 'helm-chart',
    definition: 'In Kubernetes, a Helm chart is a package containing all of the resource definitions necessary to run an application, tool, or service inside of a Kubernetes cluster.',
    example: 'He installed the Prometheus monitoring stack on his cluster by using a community-provided Helm chart.'
  },
  {
    id: 'kubelet',
    term: 'Kubelet',
    slug: 'kubelet',
    definition: 'An agent that runs on each node in a Kubernetes cluster. It makes sure that containers are running in a Pod.',
    example: 'The Kubelet on the worker node was responsible for pulling the container image and starting the pod.'
  },
  {
    id: 'sidecar-container',
    term: 'Sidecar container',
    slug: 'sidecar-container',
    definition: 'A container that runs alongside the main application container in a Kubernetes pod, often used for tasks like logging, monitoring, or proxying.',
    example: 'They used a sidecar container to handle log forwarding, so the main application didn\'t have to worry about it.'
  },
  {
    id: 'node-drain',
    term: 'Node drain',
    slug: 'node-drain',
    definition: 'The process in Kubernetes of gracefully terminating all pods on a node to prepare it for maintenance or shutdown.',
    example: 'He initiated a node drain before taking the server offline for a hardware upgrade.'
  },
  {
    id: 'node-taint',
    term: 'Node taint',
    slug: 'node-taint',
    definition: 'A Kubernetes feature that allows a node to repel a set of pods. A pod must have a "toleration" for the taint to be scheduled on that node.',
    example: 'They applied a node taint to the GPU-enabled nodes to ensure only GPU-requesting pods would run there.'
  },
  {
    id: 'pod-eviction',
    term: 'Pod eviction',
    slug: 'pod-eviction',
    definition: 'The process in Kubernetes where the kubelet proactively terminates pods on a node to reclaim resources, for example when the node is running low on memory or disk space.',
    example: 'The pod was terminated due to pod eviction when the node ran out of memory.'
  },
  {
    id: 'pod-disruption-budget',
    term: 'Pod disruption budget',
    slug: 'pod-disruption-budget',
    definition: 'A Kubernetes feature that limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions.',
    example: 'He configured a Pod Disruption Budget to ensure that at least two replicas of his application would always be running during a rolling update.'
  },
  {
    id: 'statefulset',
    term: 'StatefulSet',
    slug: 'statefulset',
    definition: 'A Kubernetes workload object used to manage stateful applications, providing stable network identifiers and persistent storage.',
    example: 'They used a StatefulSet to deploy their database, which required a stable hostname and storage.'
  },
  {
    id: 'daemonset',
    term: 'DaemonSet',
    slug: 'daemonset',
    definition: 'A Kubernetes workload object that ensures a copy of a pod runs on all (or some) nodes in a cluster.',
    example: 'They used a DaemonSet to deploy a log collection agent to every node in the cluster.'
  },
  {
    id: 'cronjob',
    term: 'CronJob',
    slug: 'cronjob',
    definition: 'A Kubernetes workload object that creates Jobs on a repeating schedule.',
    example: 'He created a CronJob to run the database backup script every night at 2 AM.'
  },
  {
    id: 'service-mesh',
    term: 'Service mesh',
    slug: 'service-mesh',
    definition: 'A dedicated infrastructure layer for handling service-to-service communication in a microservices architecture. It provides features like traffic management, security, and observability.',
    example: 'They implemented a service mesh using Linkerd to get automatic mTLS and detailed metrics for all their microservices.'
  },
  {
    id: 'ingress-controller',
    term: 'Ingress controller',
    slug: 'ingress-controller',
    definition: 'In Kubernetes, an ingress controller is a component that is responsible for fulfilling Ingress resources, typically by managing a load balancer to expose services to the outside world.',
    example: 'They deployed the Nginx Ingress Controller to manage how external traffic reached the services inside their cluster.'
  },
  {
    id: 'load-balancer-healthcheck',
    term: 'Load balancer healthcheck',
    slug: 'load-balancer-healthcheck',
    definition: 'A periodic check performed by a load balancer to ensure that a backend server is healthy and able to receive traffic.',
    example: 'The load balancer automatically removed the failed server from the pool after it failed three consecutive health checks.'
  },
  {
    id: 'autoscaling-group',
    term: 'Autoscaling group',
    slug: 'autoscaling-group',
    definition: 'In cloud computing, an autoscaling group is a collection of server instances that can automatically grow or shrink in size based on defined conditions.',
    example: 'He configured the autoscaling group to add a new server whenever the average CPU utilization went above 70%.'
  },
  {
    id: 'scaling-cooldown',
    term: 'Scaling cooldown',
    slug: 'scaling-cooldown',
    definition: 'A period of time after a scaling activity during which an autoscaling group will not launch or terminate additional instances.',
    example: 'He set a scaling cooldown of 5 minutes to prevent the autoscaling group from fluctuating too rapidly.'
  },
  {
    id: 'warm-instance',
    term: 'Warm instance',
    slug: 'warm-instance',
    definition: 'A serverless function or container instance that is kept running after handling a request, allowing it to respond to subsequent requests without a cold start delay.',
    example: 'The second request was much faster because it hit a warm instance of the Lambda function.'
  },
  {
    id: 'cold-instance',
    term: 'Cold instance',
    slug: 'cold-instance',
    definition: 'A serverless function or container instance that has to be started from scratch to handle a request, incurring a "cold start" delay.',
    example: 'The latency spike was caused by the request hitting a cold instance.'
  },
  {
    id: 'spot-instance',
    term: 'Spot instance',
    slug: 'spot-instance',
    definition: 'In cloud computing, a spot instance is a way to purchase spare computing capacity at a very low price, but with the caveat that the cloud provider can terminate the instance with little notice.',
    example: 'They used spot instances for their non-critical batch processing jobs to save money.'
  },
  {
    id: 'reserved-instance',
    term: 'Reserved instance',
    slug: 'reserved-instance',
    definition: 'A cloud computing pricing model where you commit to a certain amount of usage for a one- or three-year term in exchange for a significant discount compared to on-demand pricing.',
    example: 'They purchased reserved instances for their production database servers, which ran 24/7.'
  },
  {
    id: 'nat-gateway',
    term: 'NAT gateway',
    slug: 'nat-gateway',
    definition: 'A managed cloud service that allows instances in a private subnet to connect to the internet or other AWS services, but prevents the internet from initiating a connection with those instances.',
    example: 'The EC2 instances in the private subnet could download updates by routing their traffic through the NAT gateway.'
  },
  {
    id: 'vpc-endpoint',
    term: 'VPC endpoint',
    slug: 'vpc-endpoint',
    definition: 'A cloud feature that enables you to privately connect your Virtual Private Cloud (VPC) to supported cloud services without requiring an internet gateway, NAT device, or VPN connection.',
    example: 'They used a VPC endpoint to allow their application to access S3 without the traffic ever leaving the AWS network.'
  },
  {
    id: 'bastion-host',
    term: 'Bastion host',
    slug: 'bastion-host',
    definition: 'A special-purpose computer on a network specifically designed and configured to withstand attacks. It is a hardened server that provides access to a private network from an external network.',
    example: 'To access the servers in the private subnet, administrators first had to SSH into the bastion host.'
  },
  {
    id: 'route-table-entry',
    term: 'Route table entry',
    slug: 'route-table-entry',
    definition: 'A single rule in a route table that specifies where network traffic from your subnet or gateway is directed.',
    example: 'He added a route table entry to direct all internet-bound traffic to the internet gateway.'
  },
  {
    id: 'cloud-formation-stack',
    term: 'Cloud formation stack',
    slug: 'cloud-formation-stack',
    definition: 'In AWS, a CloudFormation stack is a collection of AWS resources that you can manage as a single unit, created from a CloudFormation template.',
    example: 'He deployed the entire application environment by launching a single CloudFormation stack.'
  },
  {
    id: 'docker-layers',
    term: 'Docker layers',
    slug: 'docker-layers',
    definition: 'Docker images are built up from a series of read-only layers. Each layer represents an instruction in the image’s Dockerfile.',
    example: 'Because Docker uses layers, pulling the updated image was fast as it only had to download the single layer that had changed.'
  },
  {
    id: 'docker-prune',
    term: 'Docker prune',
    slug: 'docker-prune',
    definition: 'A Docker command used to clean up unused resources, such as stopped containers, dangling images, and unused networks.',
    example: 'He ran `docker system prune` to free up disk space by removing all unused Docker objects.'
  },
  {
    id: 'registry-mirror',
    term: 'Registry mirror',
    slug: 'registry-mirror',
    definition: 'A local cache of a container image registry (like Docker Hub) that can speed up image pulls and provide redundancy.',
    example: 'The company set up a registry mirror to reduce their reliance on the public Docker Hub and speed up their CI/CD pipelines.'
  },
  {
    id: 'storage-class',
    term: 'Storage class',
    slug: 'storage-class',
    definition: 'In Kubernetes, a StorageClass provides a way for administrators to describe the "classes" of storage they offer. Different classes might map to different storage backends or performance levels.',
    example: 'He created a "fast" storage class that provisioned high-performance SSD storage and a "slow" one for archival purposes.'
  },
  {
    id: 'persistent-volume',
    term: 'Persistent volume',
    slug: 'persistent-volume',
    definition: 'In Kubernetes, a Persistent Volume is a piece of storage in the cluster that has been provisioned by an administrator. It is a resource in the cluster just like a node is a cluster resource.',
    example: 'The database pod was configured to use a Persistent Volume to ensure its data would survive pod restarts.'
  },
  {
    id: 'ephemeral-storage',
    term: 'Ephemeral storage',
    slug: 'ephemeral-storage',
    definition: 'Storage that is temporary and is destroyed when the associated resource (like a pod or VM) is terminated.',
    example: 'The container used ephemeral storage for its temporary files, as they didn\'t need to be saved.'
  },
  {
    id: 'node-affinity',
    term: 'Node affinity',
    slug: 'node-affinity',
    definition: 'A Kubernetes feature that allows you to constrain which nodes your pod is eligible to be scheduled on, based on labels on the node.',
    example: 'He used node affinity to ensure the machine learning pod was always scheduled on a node with a GPU.'
  },
  {
    id: 'pod-affinity',
    term: 'Pod affinity',
    slug: 'pod-affinity',
    definition: 'A Kubernetes feature that allows you to constrain which nodes your pod is eligible to be scheduled on, based on labels on pods that are already running on the node.',
    example: 'He used pod affinity to try and co-locate the frontend and backend pods on the same node for lower latency.'
  },
  {
    id: 'pod-anti-affinity',
    term: 'Pod anti-affinity',
    slug: 'pod-anti-affinity',
    definition: 'A Kubernetes feature that allows you to prevent pods from being co-located on the same node, which can be used to improve high availability.',
    example: 'He used pod anti-affinity to ensure that the replicas of his database were always running on different nodes.'
  },
  {
    id: 'health-probe',
    term: 'Health probe',
    slug: 'health-probe',
    definition: 'A mechanism used by orchestrators and load balancers to check if an application instance is healthy and able to serve traffic.',
    example: 'The load balancer took the server out of rotation after it failed three consecutive health probes.'
  },
  {
    id: 'liveness-probe',
    term: 'Liveness probe',
    slug: 'liveness-probe',
    definition: 'In Kubernetes, a liveness probe is used by the kubelet to check if a container is still running. If the probe fails, the kubelet will kill and restart the container.',
    example: 'He configured a liveness probe to restart the application if it ever entered a deadlocked state.'
  },
  {
    id: 'readiness-probe',
    term: 'Readiness probe',
    slug: 'readiness-probe',
    definition: 'In Kubernetes, a readiness probe is used by the kubelet to know when a container is ready to start accepting traffic.',
    example: 'The readiness probe prevented traffic from being sent to the pod until the application had finished its startup sequence and connected to the database.'
  },
  {
    id: 'job-runner',
    term: 'Job runner',
    slug: 'job-runner',
    definition: 'A system or agent that is responsible for executing background jobs or tasks from a queue.',
    example: 'They scaled up the number of job runners to process the backlog of video encoding tasks.'
  },
  {
    id: 'build-runner',
    term: 'Build runner',
    slug: 'build-runner',
    definition: 'A machine or agent that executes the build and test jobs in a CI/CD pipeline.',
    example: 'The build failed because the build runner ran out of disk space.'
  },
  {
    id: 'artifact-registry',
    term: 'Artifact registry',
    slug: 'artifact-registry',
    definition: 'A repository for storing and managing software build artifacts, such as Docker images, language packages, and compiled binaries.',
    example: 'They pushed the new Docker image to their artifact registry after the build passed.'
  },
  {
    id: 's3-bucket',
    term: 'S3 bucket',
    slug: 's3-bucket',
    definition: 'In Amazon Web Services, an S3 bucket is a container for objects stored in the Simple Storage Service (S3).',
    example: 'The web application stored all user-uploaded files in an S3 bucket.'
  },
  {
    id: 'object-versioning',
    term: 'Object versioning',
    slug: 'object-versioning',
    definition: 'A feature in object storage systems that keeps multiple versions of an object, allowing you to recover from accidental deletions or overwrites.',
    example: 'He enabled object versioning on the S3 bucket to protect against accidental data loss.'
  },
  {
    id: 'lifecycle-rules',
    term: 'Lifecycle rules',
    slug: 'lifecycle-rules',
    definition: 'In cloud storage, lifecycle rules are used to automatically transition objects to cheaper storage classes or delete them after a certain period of time.',
    example: 'He set up lifecycle rules to move old logs to archival storage after 30 days and delete them after a year.'
  },
  {
    id: 'iam-policy',
    term: 'IAM policy',
    slug: 'iam-policy',
    definition: 'In cloud computing, an IAM policy is a document that defines permissions for an identity (like a user or service account) or a resource.',
    example: 'He created an IAM policy that granted the application read-only access to the S3 bucket.'
  },
  {
    id: 'privilege-boundary',
    term: 'Privilege boundary',
    slug: 'privilege-boundary',
    definition: 'A logical boundary in a system that separates code and data of different security levels.',
    example: 'The separation between kernel space and user space is a fundamental privilege boundary in an operating system.'
  },
  {
    id: 'key-vault',
    term: 'Key vault',
    slug: 'key-vault',
    definition: 'A secure cloud service for storing and managing secrets, encryption keys, and certificates.',
    example: 'The application retrieved its database password from the key vault at startup, instead of having it in a configuration file.'
  },
  {
    id: 'metrics-server',
    term: 'Metrics server',
    slug: 'metrics-server',
    definition: 'A centralized server that collects and stores metrics (like CPU usage, memory, and request counts) from a distributed system.',
    example: 'They used Prometheus as their metrics server and Grafana to visualize the data.'
  },
  {
    id: 'log-forwarder',
    term: 'Log forwarder',
    slug: 'log-forwarder',
    definition: 'An agent that collects log messages from a server or application and sends them to a central logging system.',
    example: 'They installed a log forwarder on every server to ship logs to their central Elasticsearch cluster.'
  },
  {
    id: 'service-discovery',
    term: 'Service discovery',
    slug: 'service-discovery',
    definition: 'The process of automatically detecting devices and services on a network. In microservices, it\'s how services find each other\'s network locations.',
    example: 'The application used a service discovery mechanism to find the current IP address of the database service.'
  },
  {
    id: 'alert-fatigue',
    term: 'Alert fatigue',
    slug: 'alert-fatigue',
    definition: 'The desensitization that occurs when a person is exposed to a large number of frequent, often meaningless, alerts, leading them to ignore important ones.',
    example: 'The on-call engineer was suffering from alert fatigue after being paged for hundreds of non-critical issues.'
  },
  {
    id: 'incident-bridge',
    term: 'Incident bridge',
    slug: 'incident-bridge',
    definition: 'A dedicated communication channel (like a video call or chat room) that is opened to coordinate the response to a production incident.',
    example: 'As soon as the outage was detected, an incident bridge was opened for all the engineers involved.'
  },
  {
    id: 'runbook',
    term: 'Runbook',
    slug: 'runbook',
    definition: 'A compilation of routine procedures and operations that a system administrator or operator carries out.',
    example: 'The runbook had a step-by-step guide for what to do if the database server went down.'
  },
  {
    id: 'post-mortem',
    term: 'Post-mortem',
    slug: 'post-mortem',
    definition: 'A process, usually performed at the end of a project or after a production incident, to analyze what went right, what went wrong, and what to do differently next time.',
    example: 'The team held a blameless post-mortem after the outage to understand the root cause.'
  },
  {
    id: 'log-ingestion',
    term: 'Log ingestion',
    slug: 'log-ingestion',
    definition: 'The process of collecting, parsing, and storing log data from various sources into a central logging system.',
    example: 'The log ingestion pipeline was struggling to keep up with the volume of data during peak traffic.'
  },
  {
    id: 'retention-policy',
    term: 'Retention policy',
    slug: 'retention-policy',
    definition: 'A policy that defines how long data should be kept before it is archived or deleted.',
    example: 'The data retention policy required all logs to be kept for at least one year.'
  },
  {
    id: 'trace-spans',
    term: 'Trace spans',
    slug: 'trace-spans',
    definition: 'In distributed tracing, a trace is a view into a request as it travels through a distributed system. A span represents a single unit of work within that trace.',
    example: 'By looking at the trace spans, he could see that the latency was coming from a slow database query in the authentication service.'
  },
  {
    id: 'caller-context',
    term: 'Caller context',
    slug: 'caller-context',
    definition: 'Information about the entity (user, service, etc.) that initiated a request, which is passed along through a distributed system for tracing and auditing.',
    example: 'The caller context was propagated through all the microservices, allowing them to trace the entire request from start to finish.'
  },
  {
    id: 'cloudwatch-alarms',
    term: 'CloudWatch alarms',
    slug: 'cloudwatch-alarms',
    definition: 'In AWS, a CloudWatch alarm is a feature that watches a single metric over a time period you specify, and performs one or more actions based on the value of the metric relative to a threshold.',
    example: 'He set up a CloudWatch alarm to send him an email if the CPU utilization of the server went above 90% for 5 minutes.'
  },
  {
    id: 'dead-letter-queue',
    term: 'Dead-letter queue',
    slug: 'dead-letter-queue',
    definition: 'A queue where messages that cannot be successfully processed by a message broker are sent, so they can be analyzed later.',
    example: 'The message was sent to the dead-letter queue after failing to be processed three times.'
  },
  {
    id: 'message-broker',
    term: 'Message broker',
    slug: 'message-broker',
    definition: 'An intermediary computer program module that translates a message from the formal messaging protocol of the sender to the formal messaging protocol of the receiver. RabbitMQ and Kafka are examples.',
    example: 'The different microservices communicated asynchronously by sending messages through a message broker.'
  },
  {
    id: 'event-bus',
    term: 'Event bus',
    slug: 'event-bus',
    definition: 'A design pattern that allows different components to communicate with each other by broadcasting and listening for events, without directly depending on each other.',
    example: 'When a new user signed up, the user service published a "user_created" event to the event bus, which the email service was listening for.'
  },
  {
    id: 'snapshot-replication',
    term: 'Snapshot replication',
    slug: 'snapshot-replication',
    definition: 'A data backup and disaster recovery method where periodic snapshots of a storage volume are copied to a secondary location.',
    example: 'They used snapshot replication to create a nightly copy of their database volume in another region for disaster recovery.'
  },
  {
    id: 'warm-backup',
    term: 'Warm backup',
    slug: 'warm-backup',
    definition: 'A backup system where a secondary server is kept running and is periodically updated from the primary server. It can be brought online relatively quickly.',
    example: 'The warm backup site was an hour behind the primary site, but it could be made active within minutes.'
  },
  {
    id: 'cold-backup',
    term: 'Cold backup',
    slug: 'cold-backup',
    definition: 'A backup system where the backup data is stored offline. Restoring from a cold backup is typically a slow process.',
    example: 'They kept a weekly cold backup of their data on tapes stored in a vault.'
  },
  {
    id: 'high-availability-set',
    term: 'High availability set',
    slug: 'high-availability-set',
    definition: 'In cloud computing, it is a group of virtual machines that are deployed across different physical locations (fault domains) within a datacenter to ensure that an application remains available during hardware failures or maintenance.',
    example: 'He deployed the web servers in a high availability set to ensure the website would stay online even if one server rack lost power.'
  },
  {
    id: 'load-shedding',
    term: 'Load shedding',
    slug: 'load-shedding',
    definition: 'A strategy for handling excessive load on a system by intentionally dropping or degrading service for some requests to ensure the system remains available for others.',
    example: 'During the traffic spike, the system started load shedding by serving a static "over capacity" page to some users.'
  },
  {
    id: 'fault-domain',
    term: 'Fault domain',
    slug: 'fault-domain',
    definition: 'A set of hardware components (like a server rack or a power supply) that share a single point of failure.',
    example: 'By distributing the VMs across multiple fault domains, they ensured a single hardware failure wouldn\'t take down their entire application.'
  },
  {
    id: 'availability-zone',
    term: 'Availability zone',
    slug: 'availability-zone',
    definition: 'In cloud computing, an Availability Zone is one or more discrete data centers with redundant power, networking, and connectivity in a region.',
    example: 'For high availability, they deployed their application across multiple availability zones.'
  },
  {
    id: 'throttling-limit',
    term: 'Throttling limit',
    slug: 'throttling-limit',
    definition: 'The maximum rate at which requests are allowed, as enforced by a rate limiter.',
    example: 'He hit the API\'s throttling limit and had to wait a minute before making more requests.'
  },
  {
    id: 'request-quota',
    term: 'Request quota',
    slug: 'request-quota',
    definition: 'A limit on the total number of requests that can be made to a service over a certain period (e.g., per day or per month).',
    example: 'He used up his monthly request quota for the free tier of the API.'
  },
  {
    id: 'error-budget',
    term: 'Error budget',
    slug: 'error-budget',
    definition: 'In Site Reliability Engineering (SRE), an error budget is the maximum amount of time a system is allowed to be unavailable or broken, based on its Service Level Objective (SLO).',
    example: 'They still had some error budget left for the quarter, so they decided to go ahead with the risky deployment.'
  },
  {
    id: 'sla-breach',
    term: 'SLA breach',
    slug: 'sla-breach',
    definition: 'A failure to meet the terms of a Service Level Agreement, such as the guaranteed uptime.',
    example: 'The prolonged outage resulted in an SLA breach, and the provider had to issue service credits to its customers.'
  },
  {
    id: 'usage-spike',
    term: 'Usage spike',
    slug: 'usage-spike',
    definition: 'A sudden, sharp increase in the usage of a system\'s resources.',
    example: 'The usage spike was caused by a popular social media post linking to the website.'
  },
  {
    id: 'zombie-nodes',
    term: 'Zombie nodes',
    slug: 'zombie-nodes',
    definition: 'Nodes in a cluster that are no longer functioning correctly but have not yet been removed from the cluster.',
    example: 'The orchestrator was still trying to schedule tasks on the zombie nodes, causing failures.'
  },
  {
    id: 'orphan-pods',
    term: 'Orphan pods',
    slug: 'orphan-pods',
    definition: 'In Kubernetes, pods that are still running on a node but are no longer managed by any controller.',
    example: 'After deleting the Deployment, there were several orphan pods left over that had to be cleaned up manually.'
  },
  {
    id: 'autohealing',
    term: 'Autohealing',
    slug: 'autohealing',
    definition: 'The ability of a system to automatically detect and recover from failures, such as by restarting failed services or replacing failed nodes.',
    example: 'The Kubernetes cluster\'s autohealing capabilities automatically rescheduled the pods from the failed node.'
  },
  {
    id: 'orchestrator',
    term: 'Orchestrator',
    slug: 'orchestrator',
    definition: 'A tool for automating the deployment, management, scaling, and networking of containers. Kubernetes is a popular example.',
    example: 'The orchestrator handled all the complexity of running the microservices across the cluster of servers.'
  },
  {
    id: 'multi-cloud',
    term: 'Multi-cloud',
    slug: 'multi-cloud',
    definition: 'The practice of using multiple cloud computing services from different providers in a single architecture.',
    example: 'They used a multi-cloud strategy to avoid vendor lock-in and take advantage of the best services from both AWS and Google Cloud.'
  },
  {
    id: 'hybrid-cloud',
    term: 'Hybrid cloud',
    slug: 'hybrid-cloud',
    definition: 'A computing environment that combines a private cloud (on-premises infrastructure) with a public cloud, allowing data and applications to be shared between them.',
    example: 'They ran their sensitive database on their on-prem private cloud but used the public cloud for scalable web servers in a hybrid cloud setup.'
  },
  {
    id: 'cloud-tenancy',
    term: 'Cloud tenancy',
    slug: 'cloud-tenancy',
    definition: 'Refers to how cloud resources are shared among different customers. In a multi-tenant architecture, multiple customers share the same infrastructure.',
    example: 'A single-tenant cloud environment provides a dedicated set of resources for one customer, offering higher security and isolation.'
  },
  {
    id: 'container-registry',
    term: 'Container registry',
    slug: 'container-registry',
    definition: 'A storage system for container images, used to store and distribute them.',
    example: 'He pushed the new version of the application\'s Docker image to the container registry.'
  },
  {
    id: 'image-scanning',
    term: 'Image scanning',
    slug: 'image-scanning',
    definition: 'The process of analyzing a container image for known security vulnerabilities.',
    example: 'The CI/CD pipeline included an image scanning step to prevent images with critical vulnerabilities from being deployed.'
  },
  {
    id: 'pipeline-stages',
    term: 'Pipeline stages',
    slug: 'pipeline-stages',
    definition: 'The individual steps in a CI/CD pipeline, such as "build," "test," and "deploy."',
    example: 'The build failed in the "test" pipeline stage due to a failing unit test.'
  },
  {
    id: 'secret-mounting',
    term: 'Secret mounting',
    slug: 'secret-mounting',
    definition: 'The process of making sensitive information (secrets) available to a container or application, typically by mounting them as a file or environment variable.',
    example: 'The database password was made available to the application through secret mounting, so it never had to be stored in the container image.'
  },
  {
    id: 'federation-cluster',
    term: 'Federation cluster',
    slug: 'federation-cluster',
    definition: 'A concept where multiple Kubernetes clusters are managed as a single logical cluster, allowing for multi-cluster application deployment and service discovery.',
    example: 'They used a federation cluster to deploy their application across data centers in different geographic regions.'
  },
  {
    id: 'traffic-gateway',
    term: 'Traffic gateway',
    slug: 'traffic-gateway',
    definition: 'A component in a service mesh that manages ingress and egress traffic for the mesh.',
    example: 'The traffic gateway was responsible for all TLS termination and routing requests to the correct services.'
  },
  {
    id: 'ssl-termination',
    term: 'SSL termination',
    slug: 'ssl-termination',
    definition: 'The process of decrypting SSL/TLS encrypted traffic at a load balancer or reverse proxy, so that the backend servers receive unencrypted traffic.',
    example: 'The load balancer handled all the SSL termination, which simplified the configuration of the backend web servers.'
  },
  {
    id: 'kms-keyring',
    term: 'KMS keyring',
    slug: 'kms-keyring',
    definition: 'In a Key Management Service, a keyring is a logical grouping of encryption keys, often used to organize keys by application or environment.',
    example: 'He created a new KMS keyring for all the keys related to the new project.'
  },
  {
    id: 'drift-detection',
    term: 'Drift detection',
    slug: 'drift-detection',
    definition: 'In Infrastructure as Code, drift detection is the process of identifying differences between the actual state of the infrastructure and the state defined in the code.',
    example: 'The drift detection tool alerted him that someone had manually changed a firewall rule outside of Terraform.'
  },
  {
    id: 'resource-tagging',
    term: 'Resource tagging',
    slug: 'resource-tagging',
    definition: 'The practice of assigning metadata tags (key-value pairs) to cloud resources to help with organization, cost tracking, and automation.',
    example: 'They used resource tagging to identify which resources belonged to which project, making it easy to track costs.'
  },
  {
    id: 'pod-sandbox',
    term: 'Pod sandbox',
    slug: 'pod-sandbox',
    definition: 'In Kubernetes, the pod sandbox is a special container that is created first to set up the networking and other namespaces for all the other containers that will run in the pod.',
    example: 'When a pod starts, the container runtime first creates the pod sandbox, and then starts the application containers inside it.'
  },
  {
    id: 'node-pressure',
    term: 'Node pressure',
    slug: 'node-pressure',
    definition: 'A condition in Kubernetes where a node is running out of resources, such as memory or disk space.',
    example: 'The kubelet reported a node pressure condition, and began evicting pods to reclaim memory.'
  },
  {
    id: 'cluster-autoscaler',
    term: 'Cluster autoscaler',
    slug: 'cluster-autoscaler',
    definition: 'A Kubernetes component that automatically adjusts the size of a Kubernetes cluster by adding or removing nodes based on the pending pods.',
    example: 'The cluster autoscaler added two new nodes to accommodate the increased workload.'
  },
  {
    id: 'horizontal-scaling',
    term: 'Horizontal scaling',
    slug: 'horizontal-scaling',
    definition: 'The practice of scaling an application by adding more instances or nodes, as opposed to increasing the resources of a single instance (vertical scaling).',
    example: 'The web application was designed for horizontal scaling, allowing them to handle more traffic by simply adding more web servers.'
  },
  {
    id: 'clipped-fps',
    term: 'Clipped FPS',
    slug: 'clipped-fps',
    definition: 'When the frame rate of a game is limited or "clipped" at a certain value, such as the monitor\'s refresh rate, by a feature like V-Sync.',
    example: 'With V-Sync on, his frame rate was clipped at 60 FPS.'
  },
  {
    id: 'microstutter',
    term: 'Microstutter',
    slug: 'microstutter',
    definition: 'A form of visual artifact where the frame rate appears inconsistent even if the average FPS is high, caused by uneven frame times.',
    example: 'The game ran at over 100 FPS, but he was still experiencing annoying microstutter.'
  },
  {
    id: 'dpc-latency',
    term: 'DPC latency',
    slug: 'dpc-latency',
    definition: 'Deferred Procedure Call latency is a measure of how long a Windows system takes to process certain high-priority tasks. High DPC latency can cause audio dropouts and other real-time issues.',
    example: 'A bad audio driver was causing high DPC latency, which resulted in clicks and pops in his audio.'
  },
  {
    id: 'cache-trashing',
    term: 'Cache trashing',
    slug: 'cache-trashing',
    definition: 'A situation where a CPU\'s cache is constantly being invalidated and refilled, often because multiple threads are repeatedly accessing memory in a way that conflicts with each other. This severely degrades performance.',
    example: 'The poorly optimized algorithm was causing cache trashing, which made it run much slower than expected.'
  },
  {
    id: 'pcie-bottleneck',
    term: 'PCIe bottleneck',
    slug: 'pcie-bottleneck',
    definition: 'A performance limitation that occurs when a PCIe slot does not have enough bandwidth for the device installed in it, such as a high-end graphics card.',
    example: 'Running a PCIe 4.0 GPU in a PCIe 3.0 slot can create a slight PCIe bottleneck in some games.'
  },
  {
    id: 'garbage-frames',
    term: 'Garbage frames',
    slug: 'garbage-frames',
    definition: 'Slang for corrupted or glitched frames that can appear on a display, often due to an unstable GPU overclock or failing VRAM.',
    example: 'When he pushed his GPU overclock too far, he started seeing garbage frames and artifacts on the screen.'
  },
  {
    id: 'silent-crash',
    term: 'Silent crash',
    slug: 'silent-crash',
    definition: 'A crash where a program terminates unexpectedly without displaying an error message.',
    example: 'The game had a silent crash, it just closed to the desktop with no explanation.'
  },
  {
    id: 'hard-crash',
    term: 'Hard crash',
    slug: 'hard-crash',
    definition: 'A system crash that requires a physical reboot of the computer, such as a Blue Screen of Death or a kernel panic.',
    example: 'The unstable RAM overclock caused a hard crash, forcing him to restart his PC.'
  },
  {
    id: 'soft-crash',
    term: 'Soft crash',
    slug: 'soft-crash',
    definition: 'A crash where a single application terminates, but the operating system remains stable.',
    example: 'The browser had a soft crash, but he was able to just reopen it without restarting his computer.'
  },
  {
    id: 'boot-loop',
    term: 'Boot loop',
    slug: 'boot-loop',
    definition: 'A condition where a device repeatedly tries to boot up but fails, causing it to restart over and over.',
    example: 'A corrupted system file sent his phone into a boot loop.'
  },
  {
    id: 'post-loop',
    term: 'Post loop',
    slug: 'post-loop',
    definition: 'A condition where a computer gets stuck in the Power-On Self-Test (POST) sequence, repeatedly restarting without ever reaching the OS bootloader.',
    example: 'An incompatible RAM kit caused a post loop; the computer would turn on for a few seconds and then restart.'
  },
  {
    id: 'power-fault',
    term: 'Power fault',
    slug: 'power-fault',
    definition: 'An error indicating a problem with the power delivery to a component, often due to a failing PSU or bad connection.',
    example: 'The server logs indicated a power fault just before it shut down, pointing to a problem with the power supply.'
  },
  {
    id: 'memory-training-fail',
    term: 'Memory training fail',
    slug: 'memory-training-fail',
    definition: 'An error that occurs during boot when the motherboard is unable to find stable settings for the installed RAM.',
    example: 'He couldn\'t boot with the new RAM because it was causing a memory training fail.'
  },
  {
    id: 'driver-bloat',
    term: 'Driver bloat',
    slug: 'driver-bloat',
    definition: 'The situation where a hardware driver package includes a large amount of unnecessary extra software and features.',
    example: 'He used a third-party tool to strip the driver bloat from the graphics driver, installing only the essential components.'
  },
  {
    id: 'driver-conflict',
    term: 'Driver conflict',
    slug: 'driver-conflict',
    definition: 'A problem where two or more hardware drivers interfere with each other, causing system instability or crashes.',
    example: 'The blue screens were caused by a driver conflict between the old and new audio devices.'
  },
  {
    id: 'fps-dips',
    term: 'FPS dips',
    slug: 'fps-dips',
    definition: 'Sudden, temporary drops in the frame rate of a game, which can cause stuttering.',
    example: 'The game ran smoothly most of the time, but he experienced major FPS dips in crowded city areas.'
  },
  {
    id: 'shader-compilation',
    term: 'Shader compilation',
    slug: 'shader-compilation',
    definition: 'The process where a game engine converts high-level shader code into a low-level format that the GPU can execute. This can sometimes cause stutter the first time an effect is seen.',
    example: 'The stuttering in the game was caused by shader compilation happening in the background.'
  },
  {
    id: 'e-cores',
    term: 'E-cores',
    slug: 'e-cores',
    definition: 'Short for "Efficient-cores," a type of smaller, lower-power CPU core used in some modern Intel processors to handle background tasks.',
    example: 'The new Intel CPU has 8 P-cores for performance and 8 E-cores for efficiency.'
  },
  {
    id: 'p-cores',
    term: 'P-cores',
    slug: 'p-cores',
    definition: 'Short for "Performance-cores," the primary, high-performance CPU cores in a modern Intel processor.',
    example: 'Games and other demanding applications are scheduled to run on the P-cores.'
  },
  {
    id: 'thread-scheduler',
    term: 'Thread scheduler',
    slug: 'thread-scheduler',
    definition: 'A component of the operating system that decides which threads should be executed by the CPU at any given time.',
    example: 'Windows 11 has an updated thread scheduler that is better at utilizing CPUs with both P-cores and E-cores.'
  },
  {
    id: 'frame-pacing',
    term: 'Frame pacing',
    slug: 'frame-pacing',
    definition: 'A technique used in graphics drivers and games to ensure that frames are delivered to the display at a consistent, even interval, which can reduce stutter.',
    example: 'The latest driver update included improvements to frame pacing, resulting in a smoother gameplay experience.'
  },
  {
    id: 'dlss',
    term: 'DLSS',
    slug: 'dlss',
    definition: 'Deep Learning Super Sampling is an NVIDIA technology that uses AI to upscale a lower-resolution image to a higher resolution, boosting performance with minimal loss in image quality.',
    example: 'He enabled DLSS to get a playable frame rate with ray tracing turned on.'
  },
  {
    id: 'fsr',
    term: 'FSR',
    slug: 'fsr',
    definition: 'FidelityFX Super Resolution is AMD\'s open-source upscaling technology, which is similar to DLSS but does not require dedicated AI hardware.',
    example: 'Since he had an AMD graphics card, he used FSR to boost his performance in the game.'
  },
  {
    id: 'motion-interpolation',
    term: 'Motion interpolation',
    slug: 'motion-interpolation',
    definition: 'A video processing technique that generates intermediate frames between existing ones to create the illusion of smoother motion. Also known as the "soap opera effect" on TVs.',
    example: 'He disliked the unnatural look of motion interpolation, so he turned it off on his TV.'
  },
  {
    id: 'volumetric-lighting',
    term: 'Volumetric lighting',
    slug: 'volumetric-lighting',
    definition: 'A 3D graphics effect that simulates the scattering of light in the air, creating visible light beams or "god rays."',
    example: 'The volumetric lighting in the forest scene looked incredibly realistic.'
  },
  {
    id: 'anti-aliasing',
    term: 'Anti-aliasing',
    slug: 'anti-aliasing',
    definition: 'A graphics technique used to smooth out the jagged edges (or "jaggies") of objects in a 3D scene.',
    example: 'He increased the anti-aliasing setting to make the game look cleaner and less pixelated.'
  },
  {
    id: 'taa',
    term: 'TAA',
    slug: 'taa',
    definition: 'Temporal Anti-Aliasing is a modern anti-aliasing technique that uses information from previous frames to smooth out edges. It can sometimes cause a slight blurring effect on moving objects.',
    example: 'TAA provided the best balance of image quality and performance in the game.'
  },
  {
    id: 'smaa',
    term: 'SMAA',
    slug: 'smaa',
    definition: 'Subpixel Morphological Anti-Aliasing is an anti-aliasing technique known for producing a sharp image with good edge smoothing.',
    example: 'He preferred SMAA because it didn\'t have the ghosting artifacts that TAA sometimes produced.'
  },
  {
    id: 'upscaling',
    term: 'Upscaling',
    slug: 'upscaling',
    definition: 'The process of taking a lower-resolution image or video and increasing its size to fit a higher-resolution display. Technologies like DLSS and FSR are forms of smart upscaling.',
    example: 'His 4K TV did a good job of upscaling 1080p content.'
  },
  {
    id: 'render-pipeline',
    term: 'Render pipeline',
    slug: 'render-pipeline',
    definition: 'The sequence of steps a GPU takes to render a 3D scene, from processing vertices to outputting the final pixels on the screen.',
    example: 'Modern game engines use a complex render pipeline to achieve realistic graphics.'
  },
  {
    id: 'vr-reprojection',
    term: 'VR reprojection',
    slug: 'vr-reprojection',
    definition: 'A technique used in virtual reality where, if the application fails to render a new frame in time, the last frame is re-projected based on the user\'s latest head movement to reduce nausea.',
    example: 'When the frame rate dropped, VR reprojection kicked in to keep the experience from becoming uncomfortable.'
  },
  {
    id: 'latency-artifacts',
    term: 'Latency artifacts',
    slug: 'latency-artifacts',
    definition: 'Visual or audio glitches caused by high latency, such as stuttering, ghosting, or delayed audio.',
    example: 'The cloud gaming service was unusable due to the distracting latency artifacts.'
  },
  {
    id: 'input-delay',
    term: 'Input delay',
    slug: 'input-delay',
    definition: 'The time between when you perform an action (like a mouse click) and when you see the result on screen. Also known as input lag.',
    example: 'Competitive gamers try to minimize input delay as much as possible by using high-refresh-rate monitors and wired peripherals.'
  },
  {
    id: 'cold-cache',
    term: 'Cold cache',
    slug: 'cold-cache',
    definition: 'A state where a cache (like a CPU cache or disk cache) is empty or contains irrelevant data, resulting in slower access times as data must be fetched from main memory or disk.',
    example: 'The application was slow to start up because it was dealing with a cold cache.'
  },
  {
    id: 'hot-cache',
    term: 'Hot cache',
    slug: 'hot-cache',
    definition: 'A state where a cache contains the data that is currently needed by the application, resulting in very fast access times.',
    example: 'The database query was instant because all the required data was already in the hot cache.'
  },
  {
    id: 'cache-hit',
    term: 'Cache hit',
    slug: 'cache-hit',
    definition: 'An event where the data requested by an application is found in the cache.',
    example: 'A high cache hit rate is crucial for good performance.'
  },
  {
    id: 'cache-miss',
    term: 'Cache miss',
    slug: 'cache-miss',
    definition: 'An event where the data requested by an application is not found in the cache, requiring it to be fetched from a slower level of memory.',
    example: 'Every cache miss resulted in a noticeable delay as the data had to be loaded from the main RAM.'
  },
  {
    id: 'memory-access-pattern',
    term: 'Memory access pattern',
    slug: 'memory-access-pattern',
    definition: 'The way in which a program accesses data in memory. Predictable, sequential patterns are much more cache-friendly than random access patterns.',
    example: 'He refactored the code to have a more linear memory access pattern, which significantly improved performance.'
  },
  {
    id: 'floating-point-error',
    term: 'Floating point error',
    slug: 'floating-point-error',
    definition: 'Small inaccuracies that can occur when performing calculations with floating-point numbers due to their limited precision.',
    example: 'The simulation results were slightly off due to the accumulation of floating-point errors over millions of calculations.'
  },
  {
    id: 'nan-crash',
    term: 'NaN crash',
    slug: 'nan-crash',
    definition: 'A program crash caused by an operation that results in a "Not a Number" (NaN) value, which can then propagate and cause further errors.',
    example: 'Dividing zero by zero resulted in a NaN, which eventually led to a NaN crash.'
  },
  {
    id: 'dead-pixel',
    term: 'Dead pixel',
    slug: 'dead-pixel',
    definition: 'A pixel on a display that is permanently unlit and always appears black.',
    example: 'He had to return the new monitor because it had a dead pixel right in the center of the screen.'
  },
  {
    id: 'backlight-bleed',
    term: 'Backlight bleed',
    slug: 'backlight-bleed',
    definition: 'An issue on LCD screens where the backlight shines through the edges of the display, causing uneven brightness, especially noticeable on dark screens.',
    example: 'The monitor had some noticeable backlight bleed in the corners, but it was only visible in a dark room.'
  },
  {
    id: 'color-banding',
    term: 'Color banding',
    slug: 'color-banding',
    definition: 'An artifact in digital images where smooth gradients of color are broken up into distinct bands, often due to insufficient color depth.',
    example: 'The compressed video had visible color banding in the sky gradient.'
  },
  {
    id: 'dithering',
    term: 'Dithering',
    slug: 'dithering',
    definition: 'A technique used in computer graphics to create the illusion of more colors than are actually available by using a pattern of differently colored pixels. This can help reduce color banding.',
    example: 'The old GIF image format used dithering to simulate more colors than its 256-color limit.'
  },
  {
    id: 'hdr-tone-mapping',
    term: 'HDR tone mapping',
    slug: 'hdr-tone-mapping',
    definition: 'The process of converting High Dynamic Range (HDR) image data to a format that can be displayed on a standard screen, attempting to preserve the look of the original HDR image.',
    example: 'The game\'s HDR tone mapping determined how the bright highlights and dark shadows would look on his non-HDR monitor.'
  },
  {
    id: 'power-draw-spikes',
    term: 'Power draw spikes',
    slug: 'power-draw-spikes',
    definition: 'Sudden, brief increases in the amount of power a component is consuming, which can sometimes cause system instability if the PSU can\'t handle them.',
    example: 'Some new high-end GPUs are known for having power draw spikes that can trip the safety on weaker power supplies.'
  },
  {
    id: 'vrm-overheating',
    term: 'VRM overheating',
    slug: 'vrm-overheating',
    definition: 'A condition where the motherboard\'s Voltage Regulator Modules become too hot, which can cause the CPU to throttle its performance.',
    example: 'His CPU was throttling despite low temperatures, and he realized it was due to VRM overheating on his cheap motherboard.'
  },
  {
    id: 'power-limit',
    term: 'Power limit',
    slug: 'power-limit',
    definition: 'A setting that determines the maximum amount of power a CPU or GPU is allowed to consume.',
    example: 'He increased the power limit on his graphics card to allow it to maintain a higher boost clock.'
  },
  {
    id: 'voltage-offset',
    term: 'Voltage offset',
    slug: 'voltage-offset',
    definition: 'An overclocking/undervolting technique where a fixed positive or negative offset is applied to the component\'s default voltage curve.',
    example: 'He applied a negative voltage offset of -50mV to undervolt his CPU and reduce temperatures.'
  },
  {
    id: 'stress-test',
    term: 'Stress test',
    slug: 'stress-test',
    definition: 'The process of running a demanding program to push a component to its maximum performance and temperature to check for stability.',
    example: 'He ran a CPU stress test for an hour to make sure his overclock was stable.'
  },
  {
    id: 'burn-in-test',
    term: 'Burn-in test',
    slug: 'burn-in-test',
    definition: 'A prolonged stress test performed on new hardware to check for any early failures.',
    example: 'After building his new PC, he ran a 24-hour burn-in test to ensure all the components were working correctly.'
  },
  {
    id: 'p-state',
    term: 'P-state',
    slug: 'p-state',
    definition: 'Performance states are different frequency and voltage combinations that a CPU can operate at to balance performance and power consumption.',
    example: 'The CPU switched to a higher P-state when he launched the game.'
  },
  {
    id: 'c-state',
    term: 'C-state',
slug: 'c-state',
    definition: 'Core states are idle power-saving states that a CPU core can enter when it is not busy.',
    example: 'When the computer was idle, the CPU cores entered a deep C-state to save power.'
  },
  {
    id: 'idle-clock',
    term: 'Idle clock',
    slug: 'idle-clock',
    definition: 'The very low clock speed a CPU or GPU drops to when it is not under load to save power.',
    example: 'At the desktop, the GPU\'s idle clock was only 300 MHz.'
  },
  {
    id: 'gpu-hotspot-temp',
    term: 'GPU hotspot temp',
    slug: 'gpu-hotspot-temp',
    definition: 'A reading from the hottest sensor on a GPU die, which can be significantly higher than the average temperature.',
    example: 'While the average GPU temp was 75°C, the GPU hotspot temp was reaching 95°C, indicating a need for better cooling.'
  },
  {
    id: 'negative-scaling',
    term: 'Negative scaling',
    slug: 'negative-scaling',
    definition: 'A situation where adding more resources (like a second GPU or more CPU cores) actually decreases performance due to overhead or poor optimization.',
    example: 'The old game exhibited negative scaling with the second GPU, running slower than it did with just one.'
  },
  {
    id: 'render-queue',
    term: 'Render queue',
    slug: 'render-queue',
    definition: 'A queue of frames that are ready to be rendered by the GPU. A long render queue can increase input lag.',
    example: 'He used a driver setting to limit the render queue to one frame to reduce input lag.'
  },
  {
    id: 'dirty-shutdown',
    term: 'Dirty shutdown',
    slug: 'dirty-shutdown',
    definition: 'An improper shutdown of a computer, such as from a power loss or hard reset, which can lead to data corruption.',
    example: 'The file system had to be checked for errors after the dirty shutdown.'
  },
  {
    id: 'warm-boot',
    term: 'Warm boot',
    slug: 'warm-boot',
    definition: 'Restarting a computer through the operating system, without cutting the power. A soft reset.',
    example: 'A warm boot is usually sufficient to fix minor software glitches.'
  },
  {
    id: 'cold-boot',
    term: 'Cold boot',
    slug: 'cold-boot',
    definition: 'Starting a computer from a completely powered-off state.',
    example: 'Some BIOS changes only take effect after a cold boot.'
  },
  {
    id: 'hot-patch',
    term: 'Hot patch',
    slug: 'hot-patch',
    definition: 'Applying a patch to a running system without needing to restart it.',
    example: 'The kernel security vulnerability was fixed with a hot patch, avoiding any server downtime.'
  },
  {
    id: 'output-buffer',
    term: 'Output buffer',
    slug: 'output-buffer',
    definition: 'A memory buffer used to store data that is waiting to be sent to an output device, like a screen or a network card.',
    example: 'The graphics driver stores the completed frame in the output buffer before sending it to the monitor.'
  },
  {
    id: 'render-target',
    term: 'Render target',
    slug: 'render-target',
    definition: 'A memory buffer in the GPU that graphics are rendered to. This is often a texture that can then be used in another rendering pass.',
    example: 'He rendered the reflections to a separate render target, which was then applied to the water surface.'
  },
  {
    id: 'double-buffer',
    term: 'Double buffer',
    slug: 'double-buffer',
    definition: 'A graphics technique where two buffers are used: one is displayed on the screen while the next frame is being drawn to the other. This prevents the user from seeing a partially drawn frame.',
    example: 'Double buffering is a standard technique for preventing screen tearing and creating smooth animation.'
  },
  {
    id: 'triple-buffer',
    term: 'Triple buffer',
    slug: 'triple-buffer',
    definition: 'An extension of double buffering that uses three buffers. It can provide smoother performance than double buffering but can also increase input lag.',
    example: 'Enabling triple buffering can help when your frame rate is lower than your monitor\'s refresh rate.'
  },
  {
    id: 'shader-model',
    term: 'Shader model',
    slug: 'shader-model',
    definition: 'A version number that specifies the set of features and capabilities available to shaders on a particular GPU.',
    example: 'The game required a graphics card that supported at least Shader Model 5.0.'
  },
  {
    id: 'driver-microcode',
    term: 'Driver microcode',
    slug: 'driver-microcode',
    definition: 'Firmware-like code that is loaded onto a GPU by the graphics driver at startup to enable its features or fix hardware bugs.',
    example: 'The latest driver included updated driver microcode to improve the stability of the new graphics card.'
  },
  {
    id: 'repaste',
    term: 'Repaste',
    slug: 'repaste',
    definition: 'The act of cleaning off old thermal paste from a CPU or GPU and applying a fresh layer.',
    example: 'He had to repaste his aging laptop to get its temperatures back under control.'
  },
  {
    id: 'reballing',
    term: 'Reballing',
    slug: 'reballing',
    definition: 'A complex hardware repair process that involves removing a chip (like a GPU), cleaning off the old solder balls, and applying new ones to re-attach it to the PCB.',
    example: 'He sent his failing laptop to a specialist for a reballing service to fix the broken GPU connection.'
  },
  {
    id: 'reflow',
    term: 'Reflow',
    slug: 'reflow',
    definition: 'A less reliable repair technique where a chip is heated up in an attempt to melt and reset the solder connections underneath, without actually replacing the solder.',
    example: 'He tried to reflow the GPU in his old Xbox 360, but the fix only lasted a few weeks.'
  },
  {
    id: 'hot-air-station',
    term: 'Hot air station',
    slug: 'hot-air-station',
    definition: 'A tool used in electronics repair that blows a precise stream of hot air to solder or de-solder surface-mount components.',
    example: 'He used a hot air station to replace a tiny capacitor on the motherboard.'
  },
  {
    id: 'esd-strap',
    term: 'ESD strap',
    slug: 'esd-strap',
    definition: 'An anti-static wrist strap used to safely ground a person working on sensitive electronic components to prevent damage from electrostatic discharge.',
    example: 'He always wore an ESD strap when building a PC to avoid frying any of the components.'
  },
  {
    id: 'bench-table',
    term: 'Bench table',
    slug: 'bench-table',
    definition: 'An open-air PC case used for testing and benchmarking hardware, providing easy access to all components.',
    example: 'The hardware reviewer mounted the components on a bench table to quickly swap out different GPUs for testing.'
  },
  {
    id: 'modular-psu',
    term: 'Modular PSU',
    slug: 'modular-psu',
    definition: 'A power supply unit where the cables are detachable, allowing the builder to use only the cables they need, which improves airflow and cable management.',
    example: 'He chose a modular PSU for his new build to make the cable management cleaner.'
  },
  {
    id: 'loud-coil-whine',
    term: 'Loud coil whine',
    slug: 'loud-coil-whine',
    definition: 'A particularly distracting high-pitched noise produced by a GPU or PSU under load.',
    example: 'He had to return the graphics card because the loud coil whine was unbearable.'
  },
  {
    id: 'psu-transient',
    term: 'PSU transient',
    slug: 'psu-transient',
    definition: 'A very short, high-power spike drawn by a component, typically a GPU. A good PSU must be able to handle these transients without shutting down.',
    example: 'His old PSU couldn\'t handle the new GPU\'s power transients and would shut down under load.'
  },
  {
    id: 'brown-out',
    term: 'Brown-out',
    slug: 'brown-out',
    definition: 'A drop in voltage in an electrical power supply system. It can cause unexpected behavior or shutdowns in computers.',
    example: 'The computer restarted during the brown-out because the PSU\'s voltage protection kicked in.'
  },
  {
    id: 'overcurrent',
    term: 'Overcurrent',
    slug: 'overcurrent',
    definition: 'A situation where more electrical current is drawn than a component or circuit is rated to handle, which can cause damage or trigger safety protections.',
    example: 'The PSU shut down to protect itself from an overcurrent situation caused by a short circuit.'
  },
  {
    id: 'undervoltage',
    term: 'Undervoltage',
    slug: 'undervoltage',
    definition: 'A condition where the voltage supplied to a component is below its required operating level, which can cause instability or shutdowns.',
    example: 'The system was unstable because the cheap PSU had poor undervoltage protection.'
  },
  {
    id: 'fast-boot',
    term: 'Fast boot',
    slug: 'fast-boot',
    definition: 'A BIOS/UEFI feature that speeds up the boot process by skipping some hardware initialization steps.',
    example: 'With fast boot enabled, he couldn\'t enter the BIOS because it skipped the keyboard check.'
  },
  {
    id: 'secure-boot-off',
    term: 'Secure boot off',
    slug: 'secure-boot-off',
    definition: 'Disabling the Secure Boot feature in the UEFI BIOS, which is often necessary to install operating systems other than Windows.',
    example: 'He had to turn secure boot off to install Linux on his new laptop.'
  },
  {
    id: 'vcore',
    term: 'Vcore',
    slug: 'vcore',
    definition: 'The voltage supplied to the main CPU cores. It is a critical setting for overclocking.',
    example: 'He had to increase the Vcore to get his CPU stable at the higher clock speed.'
  },
  {
    id: 'vdimm',
    term: 'Vdimm',
    slug: 'vdimm',
    definition: 'The voltage supplied to the RAM modules (DIMMs).',
    example: 'To overclock the memory, he had to raise the Vdimm from 1.35V to 1.45V.'
  },
  {
    id: 'vccio',
    term: 'VccIO',
    slug: 'vccio',
    definition: 'On Intel platforms, this is the voltage for the integrated memory controller\'s I/O components. It can sometimes help with memory stability.',
    example: 'Tweaking the VccIO voltage helped him stabilize his high-speed memory overclock.'
  },
  {
    id: 'vccsa',
    term: 'VccSA',
    slug: 'vccsa',
    definition: 'On Intel platforms, this is the System Agent voltage, which can also affect memory overclocking stability.',
    example: 'He found that a slight increase to the VccSA voltage was needed to get his RAM kit stable.'
  },
  {
    id: 'dip-switch',
    term: 'DIP switch',
    slug: 'dip-switch',
    definition: 'A small set of manual electric switches in a small package, often used on older motherboards or expansion cards to configure settings.',
    example: 'He had to change a DIP switch on the legacy sound card to set its IRQ.'
  },
  {
    id: 'debug-port',
    term: 'Debug port',
    slug: 'debug-port',
    definition: 'A special port on a device (like a router or motherboard) used by engineers for low-level debugging and diagnostics.',
    example: 'The technician connected to the debug port to get more information about why the device was failing.'
  },
  {
    id: 'bios-mod',
    term: 'BIOS mod',
    slug: 'bios-mod',
    definition: 'A modified version of a device\'s BIOS firmware, often created by enthusiasts to unlock hidden features or support new hardware.',
    example: 'He flashed a BIOS mod onto his old motherboard to add support for newer CPUs.'
  },
  {
    id: 'firmware-dump',
    term: 'Firmware dump',
    slug: 'firmware-dump',
    definition: 'A file containing a complete copy of a device\'s firmware, extracted from its flash memory.',
    example: 'He created a firmware dump of his router before trying to install the custom firmware, just in case he needed to restore it.'
  },
  {
    id: 'rom-flashing',
    term: 'ROM flashing',
    slug: 'rom-flashing',
    definition: 'The process of overwriting the Read-Only Memory (or flash memory) of a device with new firmware.',
    example: 'ROM flashing is a risky process that can brick your device if it fails.'
  },
  {
    id: 'overpower-state',
    term: 'Overpower state',
    slug: 'overpower-state',
    definition: 'A protection mechanism where a PSU shuts down when a component tries to draw more power than the PSU is rated to deliver.',
    example: 'The system shut down under load because the GPU was tripping the PSU\'s overpower state protection.'
  },
  {
    id: 'power-ripple',
    term: 'Power ripple',
    slug: 'power-ripple',
    definition: 'Small, unwanted variations in the DC voltage supplied by a power supply. Excessive ripple can cause system instability.',
    example: 'High-quality power supplies have very low power ripple, which is important for stable overclocking.'
  },
  {
    id: 'system-hang',
    term: 'System hang',
    slug: 'system-hang',
    definition: 'A condition where the entire operating system becomes unresponsive and requires a hard reset. A freeze.',
    example: 'An unstable overclock caused a random system hang every few hours.'
  },
  {
    id: 'memory-stall',
    term: 'Memory stall',
    slug: 'memory-stall',
    definition: 'A delay in the execution of a program because the CPU is waiting for data to be fetched from memory.',
    example: 'A high cache miss rate leads to frequent memory stalls, which hurts performance.'
  },
  {
    id: 'cpu-stall',
    term: 'CPU stall',
    slug: 'cpu-stall',
    definition: 'A delay in the CPU\'s processing pipeline, often caused by waiting for data from memory or a branch misprediction.',
    example: 'The code was optimized to reduce CPU stalls by prefetching data into the cache.'
  },
  {
    id: 'disk-stall',
    term: 'Disk stall',
    slug: 'disk-stall',
    definition: 'A delay where the system is unresponsive because it is waiting for a slow disk I/O operation to complete.',
    example: 'The application experienced a disk stall while trying to read a large file from the slow hard drive.'
  },
  {
    id: 'thread-starvation',
    term: 'Thread starvation',
    slug: 'thread-starvation',
    definition: 'A situation where a thread is perpetually denied the resources it needs to run, often because higher-priority threads are monopolizing the CPU.',
    example: 'The low-priority background task was experiencing thread starvation and never got a chance to complete.'
  },
  {
    id: 'worker-thread',
    term: 'Worker thread',
    slug: 'worker-thread',
    definition: 'A background thread that is used to perform a long-running or computationally intensive task without blocking the main application thread.',
    example: 'The application offloaded the image processing task to a worker thread to keep the UI responsive.'
  },
  {
    id: 'shadow-process',
    term: 'Shadow process',
    slug: 'shadow-process',
    definition: 'A hidden or undocumented process running on a system, which can sometimes be a sign of malware.',
    example: 'The security scan detected a shadow process that was communicating with a suspicious IP address.'
  },
  {
    id: 'phantom-packet',
    term: 'Phantom packet',
    slug: 'phantom-packet',
    definition: 'A data packet that is observed on a network but appears to have no valid source or is otherwise anomalous. Can be a sign of a network issue or an attack.',
    example: 'The network analyzer was picking up phantom packets that were causing confusion.'
  }
];

