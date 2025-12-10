
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
    id: 'sodimm',
    term: 'SODIMM',
    slug: 'sodimm',
    definition: 'Small Outline DIMM. Laptops use SODIMM modules for RAM because they are smaller than standard DIMMs.',
    example: 'Laptops use SODIMM modules for RAM because they are smaller than standard DIMMs.'
  },
  {
    id: 'occt',
    term: 'OCCT',
    slug: 'occt',
    definition: 'OverClock Checking Tool. A popular software utility used to stress test computer components to check for stability.',
    example: 'He ran OCCT for 12 hours to ensure his CPU overclock was completely stable under heavy load.'
  },
  {
    id: 'smps',
    term: 'SMPS',
    slug: 'smps',
    definition: 'Switched-Mode Power Supply. Modern computer PSUs are a type of SMPS, which are much more efficient than older linear power supplies.',
    example: 'Modern computer PSUs are a type of SMPS, which are much more efficient than older linear power supplies.'
  },
  {
    id: 'mosfet',
    term: 'MOSFET',
    slug: 'mosfet',
    definition: 'Metal-Oxide Semiconductor Field-Effect Transistor. A type of transistor used extensively in digital circuits.',
    example: 'The motherboard\'s VRM uses high-quality MOSFETs to efficiently manage power delivery to the CPU.'
  },
  {
    id: 'fsb',
    term: 'FSB',
    slug: 'fsb',
    definition: 'Front-Side Bus. In older computer architectures, the FSB connected the CPU to the main memory and other components.',
    example: 'In older computer architectures, the FSB connected the CPU to the main memory and other components.'
  },
  {
    id: 'dvi',
    term: 'DVI',
    slug: 'dvi',
    definition: 'Digital Visual Interface. A video display interface used to connect a video source to a display device.',
    example: 'He used a DVI cable to connect his monitor, which provided a better quality image than VGA.'
  },
  {
    id: 'dp',
    term: 'DP',
    slug: 'dp',
    definition: 'DisplayPort. A digital display interface primarily used to connect a video source to a display device.',
    example: 'For high refresh rate gaming, DisplayPort is generally preferred over HDMI.'
  },
  {
    id: 'ish',
    term: 'ISH',
    slug: 'ish',
    definition: 'IO Shield. The metal plate that covers the I/O ports on the back of a motherboard.',
    example: 'Don\'t forget to install the IO Shield in the case before you mount the motherboard.'
  },
  {
    id: 'lag-issue',
    term: 'LAG',
    slug: 'lag-issue',
    definition: 'Latency issue. A noticeable delay between an action and its response.',
    example: 'The online game was unplayable due to constant lag issues.'
  },
  {
    id: 'bsod',
    term: 'BSOD',
    slug: 'bsod',
    definition: 'Blue Screen of Death. A fatal system error screen displayed by the Windows operating system.',
    example: 'An unstable driver caused a BSOD, forcing the computer to restart.'
  },
  {
    id: 'hotswap',
    term: 'HOTSWAP',
    slug: 'hotswap',
    definition: 'Hot-swappable component. A component that can be replaced while the system is running.',
    example: 'The server\'s hard drives are hot-swappable, so a failed drive can be replaced without downtime.'
  },
  {
    id: 'pci',
    term: 'PCI',
    slug: 'pci',
    definition: 'Peripheral Component Interconnect. A local computer bus for attaching hardware devices in a computer.',
    example: 'He installed an old sound card into one of the legacy PCI slots.'
  },
  {
    id: 'rgb',
    term: 'RGB',
    slug: 'rgb',
    definition: 'Red Green Blue lighting. A type of lighting used in PC components to create customizable color effects.',
    example: 'He synchronized all the RGB lighting in his PC for a rainbow effect.'
  },
  {
    id: 'cas',
    term: 'CAS',
    slug: 'cas',
    definition: 'Column Address Strobe. A signal used in DRAM to select a column of data.',
    example: 'Lower CAS latency on RAM generally leads to better performance.'
  },
  {
    id: 'jbod',
    term: 'JBOD',
    slug: 'jbod',
    definition: 'Just a Bunch of Disks. A storage configuration where multiple disks are combined into a single logical volume without RAID.',
    example: 'He configured the external enclosure as a JBOD, so each drive appeared individually.'
  },
  {
    id: 'san',
    term: 'SAN',
    slug: 'san',
    definition: 'Storage Area Network. A dedicated high-speed network that interconnects and presents shared pools of storage devices to multiple servers.',
    example: 'The enterprise used a high-speed SAN to provide block-level storage to all its servers.'
  },
  {
    id: 'whois',
    term: 'WHOIS',
    slug: 'whois',
    definition: 'Domain Info Lookup. A query and response protocol that is widely used for querying databases that store the registered users or assignees of an Internet resource.',
    example: 'He ran a WHOIS lookup to find out who owned the domain name.'
  },
  {
    id: 'noc',
    term: 'NOC',
    slug: 'noc',
    definition: 'Network Operations Center. A centralized location where IT professionals monitor and manage a network.',
    example: 'The team in the NOC monitors the health of the entire network 24/7.'
  },
  {
    id: 'snmp',
    term: 'SNMP',
    slug: 'snmp',
    definition: 'Simple Network Management Protocol. A protocol for collecting and organizing information about managed devices on IP networks.',
    example: 'They used SNMP to monitor the CPU usage and temperature of all their network switches.'
  },
  {
    id: 'sftp',
    term: 'SFTP',
    slug: 'sftp',
    definition: 'Secure FTP. A network protocol that provides file access, file transfer, and file management over any reliable data stream.',
    example: 'He used SFTP to securely transfer the sensitive files to the server.'
  },
  {
    id: 'tls',
    term: 'TLS',
    slug: 'tls',
    definition: 'Transport Layer Security. A cryptographic protocol designed to provide communications security over a computer network.',
    example: 'Modern secure websites use TLS to encrypt the connection between the client and server.'
  },
  {
    id: 'sops',
    term: 'SOPs',
    slug: 'sops',
    definition: 'Standard Operating Procedure. A set of step-by-step instructions compiled by an organization to help workers carry out complex routine operations.',
    example: 'The junior admin followed the SOP to provision a new virtual machine.'
  },
  {
    id: 'pdu',
    term: 'PDU',
    slug: 'pdu',
    definition: 'Power Distribution Unit. A device fitted with multiple outputs designed to distribute electric power, especially to racks of computers and networking equipment.',
    example: 'He plugged all the servers into a rack-mounted PDU for better power management.'
  },
  {
    id: 'sso',
    term: 'SSO',
    slug: 'sso',
    definition: 'Single Sign-On. An authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.',
    example: 'The company implemented SSO so employees could log in to all their applications with one set of credentials.'
  },
  {
    id: 'rbac',
    term: 'RBAC',
    slug: 'rbac',
    definition: 'Role-Based Access Control. A method of restricting network access based on the roles of individual users within an enterprise.',
    example: 'They used RBAC to ensure that users only had access to the systems and data relevant to their job role.'
  },
  {
    id: 'kpi',
    term: 'KPI',
    slug: 'kpi',
    definition: 'Key Performance Indicator. A measurable value that demonstrates how effectively a company is achieving key business objectives.',
    example: 'One of the key KPIs for the website was its average page load time.'
  },
  {
    id: 'sre',
    term: 'SRE',
    slug: 'sre',
    definition: 'Site Reliability Engineer. A software engineer who works to ensure the reliability and uptime of a production system.',
    example: 'The SRE team was responsible for the availability, latency, performance, and capacity of the service.'
  },
  {
    id: 'eta',
    term: 'ETA',
    slug: 'eta',
    definition: 'Estimated Time of Arrival. The expected time of arrival for a process or task to complete.',
    example: 'The file transfer has an ETA of 5 minutes.'
  },
  {
    id: 'eta-reset',
    term: 'ETA Reset',
    slug: 'eta-reset',
    definition: 'System reset estimate. The estimated time it will take to reset a system.',
    example: 'After the crash, the ETA for a full system reset and recovery was two hours.'
  },
  {
    id: 'rmm',
    term: 'RMM',
    slug: 'rmm',
    definition: 'Remote Monitoring & Management. A type of software used by IT service providers to remotely monitor and manage client endpoints, networks, and computers.',
    example: 'The IT provider used an RMM tool to manage all their clients\' computers remotely.'
  },
  {
    id: 'bmc',
    term: 'BMC',
    slug: 'bmc',
    definition: 'Baseboard Management Controller. A specialized service processor that monitors the physical state of a computer, network server or other hardware device.',
    example: 'The BMC allowed the administrator to remotely power cycle the server even when the OS was frozen.'
  },
  {
    id: 'lun',
    term: 'LUN',
    slug: 'lun',
    definition: 'Logical Unit Number. A number used to identify a logical unit, which is a device addressed by the SCSI protocol or storage protocols that encapsulate SCSI.',
    example: 'The admin provisioned a new 500GB LUN from the SAN and presented it to the virtual machine.'
  },
  {
    id: 'mttr',
    term: 'MTTR',
    slug: 'mttr',
    definition: 'Mean Time To Repair. The average time required to repair a failed component or device.',
    example: 'They improved their MTTR by creating better runbooks for common incidents.'
  },
  {
    id: 'mtbf',
    term: 'MTBF',
    slug: 'mtbf',
    definition: 'Mean Time Between Failure. The predicted elapsed time between inherent failures of a mechanical or electronic system, during normal system operation.',
    example: 'The new hardware had a much higher MTBF than the old servers.'
  },
  {
    id: 'uart',
    term: 'UART',
    slug: 'uart',
    definition: 'Universal Asynchronous Receiver-Transmitter. A computer hardware device for asynchronous serial communication in which the data format and transmission speeds are configurable.',
    example: 'He connected to the device\'s serial console using a USB to UART adapter.'
  },
  {
    id: 'qos-queue',
    term: 'QOS Queue',
    slug: 'qos-queue',
    definition: 'Priority traffic queue. A queue used in Quality of Service to prioritize different types of network traffic.',
    example: 'VoIP traffic was placed in a high-priority QoS queue to ensure call quality.'
  },
  {
    id: 'snat',
    term: 'SNAT',
    slug: 'snat',
    definition: 'Source NAT. A type of Network Address Translation where the source IP address of a packet is changed.',
    example: 'The firewall uses SNAT to translate the private IP addresses of internal clients to its public IP address.'
  },
  {
    id: 'dnat',
    term: 'DNAT',
    slug: 'dnat',
    definition: 'Destination NAT. A type of Network Address Translation where the destination IP address of a packet is changed.',
    example: 'He configured DNAT to forward incoming requests on port 80 to the internal web server.'
  },
  {
    id: 'mfa-token',
    term: 'MFA Token',
    slug: 'mfa-token',
    definition: 'Multi-factor token. A token used in multi-factor authentication to verify a user\'s identity.',
    example: 'He entered the MFA token from his authenticator app to complete the login.'
  },
  {
    id: 'radius',
    term: 'RADIUS',
    slug: 'radius',
    definition: 'Remote Authentication Dial-In User Service. A networking protocol that provides centralized authentication, authorization, and accounting management for users who connect and use a network service.',
    example: 'The corporate Wi-Fi network used a RADIUS server to authenticate users against their domain credentials.'
  },
  {
    id: 'tacacs',
    term: 'TACACS+',
    slug: 'tacacs',
    definition: 'Terminal Access Controller Access-Control System. A protocol for handling remote authentication and related services for networked access control through a centralized server.',
    example: 'They used TACACS+ to control and audit administrative access to all network devices.'
  },
  {
    id: 'rstp',
    term: 'RSTP',
    slug: 'rstp',
    definition: 'Rapid Spanning Tree Protocol. A network protocol that builds a loop-free logical topology for Ethernet networks.',
    example: 'RSTP provides much faster network convergence times than the original Spanning Tree Protocol.'
  },
  {
    id: 'yaml',
    term: 'YAML',
    slug: 'yaml',
    definition: 'YAML Ain\'t Markup Language. A human-readable data-serialization language.',
    example: 'Kubernetes configuration files are written in YAML.'
  },
  {
    id: 'csv',
    term: 'CSV',
    slug: 'csv',
    definition: 'Comma-Separated Values. A delimited text file that uses a comma to separate values.',
    example: 'He exported the report as a CSV file to open it in Excel.'
  },
  {
    id: 'ide',
    term: 'IDE',
    slug: 'ide',
    definition: 'Integrated Development Environment. A software application that provides comprehensive facilities to computer programmers for software development.',
    example: 'Visual Studio Code is a popular IDE for web development.'
  },
  {
    id: 'sdk',
    term: 'SDK',
    slug: 'sdk',
    definition: 'Software Development Kit. A collection of software development tools in one installable package.',
    example: 'He had to download the Android SDK to start developing apps for Android.'
  },
  {
    id: 'tui',
    term: 'TUI',
    slug: 'tui',
    definition: 'Text-based User Interface. A user interface that uses text, symbols, and colors to present information.',
    example: 'The old BIOS setup screen had a simple TUI.'
  },
  {
    id: 'gui',
    term: 'GUI',
    slug: 'gui',
    definition: 'Graphical User Interface. A user interface that allows users to interact with electronic devices through graphical icons and visual indicators.',
    example: 'Windows and macOS have sophisticated GUIs.'
  },
  {
    id: 'wsl',
    term: 'WSL',
    slug: 'wsl',
    definition: 'Windows Subsystem for Linux. A compatibility layer for running Linux binary executables natively on Windows.',
    example: 'He used WSL to run his favorite Linux command-line tools like `grep` and `awk` directly within his Windows environment.'
  },
  {
    id: 'crt',
    term: 'CRT',
    slug: 'crt',
    definition: 'Cathode-Ray Tube. A vacuum tube containing one or more electron guns and a phosphorescent screen used to display images.',
    example: 'Before flat-screens, all monitors were bulky CRTs.'
  },
  {
    id: 'ips',
    term: 'IPS',
    slug: 'ips',
    definition: 'In-Plane Switching. A screen technology for liquid-crystal displays (LCDs).',
    example: 'He bought an IPS monitor for its superior color accuracy and viewing angles.'
  },
  {
    id: 'va-panel',
    term: 'VA',
    slug: 'va-panel',
    definition: 'Vertical Alignment. A type of LED-backlit LCD panel technology.',
    example: 'VA panels are known for their high contrast ratios, producing deep blacks.'
  },
  {
    id: 'tn-panel',
    term: 'TN',
    slug: 'tn-panel',
    definition: 'Twisted Nematic. A type of liquid-crystal display (LCD) panel technology.',
    example: 'Competitive gamers often prefer TN panels for their extremely fast response times.'
  },
  {
    id: 'hdr',
    term: 'HDR',
    slug: 'hdr',
    definition: 'High Dynamic Range. A technique used in imaging and photography to reproduce a greater dynamic range of luminosity than is possible with standard digital imaging.',
    example: 'The game looked stunning in HDR with its bright highlights and deep shadows.'
  },
  {
    id: 'oem',
    term: 'OEM',
    slug: 'oem',
    definition: 'Original Equipment Manufacturer. A company that produces parts and equipment that may be marketed by another manufacturer.',
    example: 'He bought an OEM copy of Windows, which was cheaper but tied to his motherboard.'
  },
  {
    id: 'odm',
    term: 'ODM',
    slug: 'odm',
    definition: 'Original Design Manufacturer. A company that designs and manufactures a product, as specified, that is eventually rebranded by another firm for sale.',
    example: 'Many well-known laptop brands don\'t make their own laptops; they are designed and built by an ODM.'
  },
  {
    id: 'rma',
    term: 'RMA',
    slug: 'rma',
    definition: 'Return Merchandise Authorization. A part of the process of returning a product to receive a refund, replacement, or repair during the product\'s warranty period.',
    example: 'He had to get an RMA number from support before he could send back the faulty graphics card.'
  },
  {
    id: 'sku',
    term: 'SKU',
    slug: 'sku',
    definition: 'Stock Keeping Unit. A scannable bar code, most often seen printed on product labels in a retail store.',
    example: 'Each color and size of the T-shirt had a different SKU.'
  },
  {
    id: 'upc',
    term: 'UPC',
    slug: 'upc',
    definition: 'Universal Product Code. A barcode symbology that is widely used in the United States, Canada, Europe, Australia, New Zealand, and other countries for tracking trade items in stores.',
    example: 'The cashier scanned the UPC barcode on the product.'
  },
  {
    id: 'bom',
    term: 'BOM',
    slug: 'bom',
    definition: 'Bill of Materials. A list of the raw materials, sub-assemblies, intermediate assemblies, sub-components, parts, and the quantities of each needed to manufacture an end product.',
    example: 'The engineer prepared the BOM, listing all the components needed to build the device.'
  },
  {
    id: 'eol',
    term: 'EOL',
    slug: 'eol',
    definition: 'End of Life. The final stage in a product\'s life cycle, after which it will no longer be supported or updated.',
    example: 'The software reached its EOL, meaning it would no longer receive any updates or support.'
  },
  {
    id: 'eos',
    term: 'EOS',
    slug: 'eos',
    definition: 'End of Support. The date after which a product or service will no longer be supported.',
    example: 'Even though the product was still sold, its EOS date was approaching.'
  },
  {
    id: 'lts',
    term: 'LTS',
    slug: 'lts',
    definition: 'Long Term Support. A product lifecycle management policy in which a stable release of computer software is maintained for a longer period of time than the standard edition.',
    example: 'For production servers, they always used the LTS version of Ubuntu for its stability and long support window.'
  },
  {
    id: 'rc',
    term: 'RC',
    slug: 'rc',
    definition: 'Release Candidate. A beta version of a software product that has the potential to be a final product, which is ready to be released unless significant bugs emerge.',
    example: 'They released RC1 to the public for final testing before the official launch.'
  },
  {
    id: 'eta-patch',
    term: 'ETA Patch',
    slug: 'eta-patch',
    definition: 'Expected update. The estimated time of arrival for a software patch.',
    example: 'The ETA for the patch to fix the bug is tomorrow morning.'
  },
  {
    id: 'patchset',
    term: 'Patchset',
    slug: 'patchset',
    definition: 'Patch bundle. A collection of patches for a software program.',
    example: 'The quarterly update included a large patchset that fixed hundreds of bugs.'
  },
  {
    id: 'changelog',
    term: 'Changelog',
    slug: 'changelog',
    definition: 'Update history. A log or record of all notable changes made to a project.',
    example: 'He checked the changelog to see what was new in the latest version.'
  },
  {
    id: 'fork',
    term: 'Fork',
    slug: 'fork',
    definition: 'Code branch split. In software engineering, a project fork happens when developers take a copy of source code from one software package and start independent development on it.',
    example: 'He created a fork of the open-source project to add his own custom features.'
  },
  {
    id: 'merge',
    term: 'Merge',
    slug: 'merge',
    definition: 'Combine branches. In version control, merging is the process of combining different versions of a file or set of files.',
    example: 'After the code review was approved, he could merge his branch into main.'
  },
  {
    id: 'pr',
    term: 'PR',
    slug: 'pr',
    definition: 'Pull Request. A feature of version control systems that allows developers to propose changes to a codebase.',
    example: 'He opened a PR to propose his changes to the project.'
  },
  {
    id: 'cr',
    term: 'CR',
    slug: 'cr',
    definition: 'Code Review. A software quality assurance activity in which one or several people check a program mainly by viewing and reading parts of its source code.',
    example: 'His pull request was blocked, waiting on a CR from a senior developer.'
  },
  {
    id: 'lint',
    term: 'Lint',
    slug: 'lint',
    definition: 'Code static checker. A static code analysis tool used to flag programming errors, bugs, stylistic errors, and suspicious constructs.',
    example: 'The CI pipeline failed because the code didn\'t pass the lint checks.'
  },
  {
    id: 'minify',
    term: 'Minify',
    slug: 'minify',
    definition: 'Code compression. The process of removing all unnecessary characters from source code without changing its functionality.',
    example: 'The build process will minify the JavaScript to reduce the file size.'
  },
  {
    id: 'obfuscate',
    term: 'Obfuscate',
    slug: 'obfuscate',
    definition: 'Hide code structure. The process of making source code difficult for humans to understand.',
    example: 'They decided to obfuscate their client-side code to make it harder for competitors to copy.'
  },
  {
    id: 'decompile',
    term: 'Decompile',
    slug: 'decompile',
    definition: 'Reverse binary. The process of translating an executable file into a higher-level language.',
    example: 'He used a tool to decompile the executable and see how it worked.'
  },
  {
    id: 'hexdump',
    term: 'Hexdump',
    slug: 'hexdump',
    definition: 'Hexadecimal display. A command-line utility that displays the contents of a file in hexadecimal, decimal, octal, or ASCII.',
    example: 'He ran a hexdump on the binary file to inspect its contents.'
  },
  {
    id: 'binwalk',
    term: 'Binwalk',
    slug: 'binwalk',
    definition: 'Binary analysis. A tool for analyzing, reverse engineering, and extracting firmware images.',
    example: 'He used binwalk to analyze the firmware file and extract the file system.'
  },
  {
    id: 'sandbox',
    term: 'Sandbox',
    slug: 'sandbox',
    definition: 'Isolated test environment. A testing environment that isolates untested code changes and outright experimentation from the production environment.',
    example: 'The malware was executed in a sandbox to analyze its behavior without risk to the host system.'
  },
  {
    id: 'stub',
    term: 'Stub',
    slug: 'stub',
    definition: 'Placeholder function. A piece of code used to stand in for some other programming functionality.',
    example: 'He created a stub for the API function so the frontend team could start work before the backend was ready.'
  },
  {
    id: 'mock',
    term: 'Mock',
    slug: 'mock',
    definition: 'Fake testing object. In object-oriented programming, mock objects are simulated objects that mimic the behavior of real objects in controlled ways.',
    example: 'In his unit test, he used a mock object to simulate the database connection.'
  },
  {
    id: 'payload',
    term: 'Payload',
    slug: 'payload',
    definition: 'Data sent to target. The part of transmitted data that is the actual intended message.',
    example: 'The XSS payload was a script that stole the user\'s session cookie.'
  },
  {
    id: 'beacon',
    term: 'Beacon',
    slug: 'beacon',
    definition: 'Remote callback signal. A signal sent from a device to a central server to indicate its status.',
    example: 'The malware sent a beacon back to the C2 server to signal it was active.'
  },
  {
    id: 'c2',
    term: 'C2',
    slug: 'c2',
    definition: 'Command and Control. A server used by attackers to maintain communications with compromised systems within a target network.',
    example: 'The security team worked to take down the botnet\'s C2 server.'
  },
  {
    id: 'rat',
    term: 'RAT',
    slug: 'rat',
    definition: 'Remote Access Trojan. A type of malware that allows an attacker to remotely control an infected computer.',
    example: 'The attacker used a RAT to gain complete control over the victim\'s computer.'
  },
  {
    id: 'edr',
    term: 'EDR',
    slug: 'edr',
    definition: 'Endpoint Detection Response. A cybersecurity technology that monitors and responds to threats on endpoints.',
    example: 'The EDR solution detected and blocked the malware before it could execute.'
  },
  {
    id: 'xdr',
    term: 'XDR',
    slug: 'xdr',
    definition: 'Extended Detection Response. A cybersecurity technology that provides holistic, cross-platform threat detection and response.',
    example: 'Their XDR platform correlated alerts from endpoints, email, and the network to detect the advanced attack.'
  },
  {
    id: 'ipsec-tunnel',
    term: 'IPSec Tunnel',
    slug: 'ipsec-tunnel',
    definition: 'Encrypted tunnel. An encrypted connection between two endpoints over an IP network.',
    example: 'The site-to-site VPN was established using an IPsec tunnel.'
  },
  {
    id: 'hash',
    term: 'Hash',
    slug: 'hash',
    definition: 'Cryptographic signature. A mathematical algorithm that maps data of arbitrary size to a bit string of a fixed size.',
    example: 'He verified the file\'s integrity by comparing its SHA256 hash.'
  },
  {
    id: 'salt',
    term: 'Salt',
    slug: 'salt',
    definition: 'Hash randomizer. Random data that is used as an additional input to a one-way function that hashes data, a password or passphrase.',
    example: 'The system added a unique salt to each password before hashing it to protect against rainbow table attacks.'
  },
  {
    id: 'scrypt',
    term: 'Scrypt',
    slug: 'scrypt',
    definition: 'Password hashing algo. A password-based key derivation function.',
    example: 'They used Scrypt for password hashing because it is designed to be computationally expensive.'
  },
  {
    id: 'sha256',
    term: 'SHA256',
    slug: 'sha256',
    definition: 'Secure Hash Algorithm. A cryptographic hash function with 256-bit output.',
    example: 'Bitcoin uses the SHA256 hashing algorithm.'
  },
  {
    id: 'md5',
    term: 'MD5',
    slug: 'md5',
    definition: 'Message Digest. A widely used cryptographic hash function that produces a 128-bit hash value.',
    example: 'MD5 is no longer considered secure for cryptographic purposes but is still used for file checksums.'
  },
  {
    id: 'rootkit',
    term: 'ROOTKIT',
    slug: 'rootkit',
    definition: 'System-level malware. A collection of malicious software tools that enable an unauthorized user to gain control of a computer system without being detected.',
    example: 'The antivirus software had trouble detecting the infection because a rootkit was actively hiding the malicious files.'
  },
  {
    id: 'backdoor',
    term: 'BACKDOOR',
    slug: 'backdoor',
    definition: 'Hidden access. A method of bypassing normal authentication or encryption in a computer system, a product, or an embedded device.',
    example: 'The developer left a backdoor in the application for maintenance, which was a huge security risk.'
  },
  {
    id: 'bot',
    term: 'BOT',
    slug: 'bot',
    definition: 'Automated script. A software application that runs automated tasks over the Internet.',
    example: 'He wrote a bot to automatically book appointments as soon as they became available.'
  },
  {
    id: 'botnet',
    term: 'BOTNET',
    slug: 'botnet',
    definition: 'Bot network. A network of private computers infected with malicious software and controlled as a group without the owners\' knowledge.',
    example: 'The DDoS attack was launched from a massive botnet of compromised IoT devices.'
  },
  {
    id: 'worm',
    term: 'WORM',
    slug: 'worm',
    definition: 'Self-replicating malware. A standalone malware computer program that replicates itself in order to spread to other computers.',
    example: 'The Morris worm was one of the first computer worms to gain mainstream media attention.'
  },
  {
    id: 'trojan',
    term: 'TROJAN',
    slug: 'trojan',
    definition: 'Disguised malware. Malware that misleads users of its true intent.',
    example: 'The free game he downloaded was actually a Trojan that installed a keylogger on his system.'
  },
  {
    id: 'pup',
    term: 'PUP',
    slug: 'pup',
    definition: 'Potentially Unwanted Program. Software that a user may perceive as unwanted.',
    example: 'The antivirus flagged the browser toolbar as a PUP.'
  },
  {
    id: 'sig',
    term: 'SIG',
    slug: 'sig',
    definition: 'Signature file. A file containing data used for identification purposes.',
    example: 'The antivirus software needs to update its signature files to detect the latest viruses.'
  },
  {
    id: 'sigdb',
    term: 'SIGDB',
    slug: 'sigdb',
    definition: 'Signature database. A database of signatures used by antivirus software to identify malware.',
    example: 'The intrusion detection system compared network traffic against its signature database.'
  },
  {
    id: 'baseline',
    term: 'BASELINE',
    slug: 'baseline',
    definition: 'Normal behavior profile. A known state of a system that is used for comparison.',
    example: 'The security system first established a baseline of normal network activity to detect anomalies.'
  },
  {
    id: 'whitelist',
    term: 'WHITELIST',
    slug: 'whitelist',
    definition: 'Approved list. A list of entities that are provided a particular privilege, service, mobility, access or recognition.',
    example: 'The firewall was configured with a whitelist, only allowing traffic from pre-approved IP addresses.'
  },
  {
    id: 'blacklist',
    term: 'BLACKLIST',
    slug: 'blacklist',
    definition: 'Deny list. A list of entities that are denied a particular privilege, service, mobility, access or recognition.',
    example: 'He added the spammer\'s email address to the blacklist.'
  },
  {
    id: 'grep',
    term: 'GREP',
    slug: 'grep',
    definition: 'Search command. A command-line utility for searching plain-text data sets for lines that match a regular expression.',
    example: 'He used grep to search through all the log files for the error message.'
  },
  {
    id: 'chmod',
    term: 'CHMOD',
    slug: 'chmod',
    definition: 'Permission change. A command in Unix and Unix-like operating systems that changes the access permissions of file system objects.',
    example: 'He ran `chmod +x script.sh` to make the shell script executable.'
  },
  {
    id: 'chown',
    term: 'CHOWN',
    slug: 'chown',
    definition: 'Ownership change. A command in Unix and Unix-like operating systems that changes the user and/or group ownership of a given file.',
    example: 'He used chown to change the owner of the file to the `www-data` user.'
  },
  {
    id: 'sudo',
    term: 'SUDO',
    slug: 'sudo',
    definition: 'Superuser do. A program for Unix-like computer operating systems that allows users to run programs with the security privileges of another user, by default the superuser.',
    example: 'He had to use `sudo` to run the command with administrative privileges.'
  },
  {
    id: 'lsblk',
    term: 'LSBLK',
    slug: 'lsblk',
    definition: 'List block devices. A command-line utility that lists information about all available or the specified block devices.',
    example: 'He ran `lsblk` to see all the connected storage drives and their partitions.'
  },
  {
    id: 'df',
    term: 'DF',
    slug: 'df',
    definition: 'Disk free. A standard Unix command used to display the amount of available disk space for file systems.',
    example: 'The `df -h` command showed him how much disk space was free on each mounted filesystem.'
  },
  {
    id: 'du',
    term: 'DU',
    slug: 'du',
    definition: 'Disk usage. A standard Unix command used to estimate file space usage.',
    example: 'He used `du -sh *` to see the disk usage of each file and folder in the current directory.'
  },
  {
    id: 'top',
    term: 'TOP',
    slug: 'top',
    definition: 'Process monitor. A task manager program found in many Unix-like operating systems that displays information about CPU and memory utilization.',
    example: 'He opened `top` to see which process was using all the CPU.'
  },
  {
    id: 'htop',
    term: 'HTOP',
    slug: 'htop',
    definition: 'Advanced monitor. An interactive system-monitor process-viewer and process-manager.',
    example: 'He preferred `htop` over `top` because of its colorized, more user-friendly interface.'
  },
  {
    id: 'kill',
    term: 'KILL',
    slug: 'kill',
    definition: 'Stop process. A command that is used in Unix and Unix-like operating systems to send a signal to a process.',
    example: 'He had to use the `kill -9` command to forcefully terminate the frozen application.'
  },
  {
    id: 'pkill',
    term: 'PKILL',
    slug: 'pkill',
    definition: 'Kill by name. A command-line utility that sends signals to the processes of a program specified by its name.',
    example: 'He used `pkill firefox` to close all open Firefox windows.'
  },
  {
    id: 'cron',
    term: 'CRON',
    slug: 'cron',
    definition: 'Scheduled tasks. A time-based job scheduler in Unix-like computer operating systems.',
    example: 'He set up a cron job to run the backup script every night.'
  },
  {
    id: 'crontab',
    term: 'CRONTAB',
    slug: 'crontab',
    definition: 'Task file. A file which contains the schedule of cron entries to be run and at specified times.',
    example: 'He edited his crontab to schedule the backup script to run daily.'
  },
  {
    id: 'initd',
    term: 'INITD',
    slug: 'initd',
    definition: 'Legacy init. The directory in Unix-like systems that contains the scripts used by the init process to start and stop services.',
    example: 'The old server was still using SysVinit scripts in the `/etc/init.d` directory.'
  },
  {
    id: 'journalctl',
    term: 'JOURNALCTL',
    slug: 'journalctl',
    definition: 'Log viewer. A command for viewing logs collected by systemd.',
    example: 'He used `journalctl` to view the logs for the failed service.'
  },
  {
    id: 'fsck',
    term: 'FSCK',
    slug: 'fsck',
    definition: 'File system check. A tool for checking the consistency of a file system in Unix and Unix-like operating systems.',
    example: 'After the dirty shutdown, the system automatically ran `fsck` to check the filesystem for errors.'
  },
  {
    id: 'parted',
    term: 'PARTED',
    slug: 'parted',
    definition: 'Partition manager. A free partition editor for creating and manipulating partition tables.',
    example: 'He used `parted` to create a new partition on the hard drive.'
  },
  {
    id: 'fstab',
    term: 'FSTAB',
    slug: 'fstab',
    definition: 'Filesystem table. A system configuration file on Linux and other Unix-like operating systems that contains information about all the partitions and their properties.',
    example: 'He edited the `/etc/fstab` file to automatically mount the network share at boot.'
  },
  {
    id: 'btrfs',
    term: 'BTRFS',
    slug: 'btrfs',
    definition: 'B-tree File System. A copy-on-write (CoW) filesystem for Linux aimed at implementing advanced features while focusing on fault tolerance, repair and easy administration.',
    example: 'He chose BTRFS for his NAS because of its advanced features like snapshots and data checksums.'
  },
  {
    id: 'fat32',
    term: 'FAT32',
    slug: 'fat32',
    definition: 'File Allocation Table. A computer file system architecture and a family of industry-standard file systems.',
    example: 'He had to format the USB drive as FAT32 to be compatible with the older device.'
  },
  {
    id: 'gpt',
    term: 'GPT',
    slug: 'gpt',
    definition: 'GUID Partition Table. A standard for the layout of partition tables of a physical computer storage device.',
    example: 'Modern systems use GPT instead of MBR for partitioning disks, as it supports larger drives.'
  },
  {
    id: 'mbr',
    term: 'MBR',
    slug: 'mbr',
    definition: 'Master Boot Record. A special type of boot sector at the very beginning of partitioned computer mass storage devices.',
    example: 'The MBR was corrupted, preventing the computer from booting.'
  },
  {
    id: 'iso',
    term: 'ISO',
    slug: 'iso',
    definition: 'Bootable image. An archive file of an optical disc, a type of disk image composed of the data contents from every written sector on an optical disc.',
    example: 'He downloaded the Ubuntu ISO and used it to create a bootable USB drive.'
  },
  {
    id: 'img',
    term: 'IMG',
    slug: 'img',
    definition: 'Disk image. A computer file containing the contents and structure of a disk volume or of an entire data storage device.',
    example: 'He wrote the Raspberry Pi OS `.img` file to the SD card.'
  },
  {
    id: 'dmg',
    term: 'DMG',
    slug: 'dmg',
    definition: 'Mac OS image. A disk image format used by macOS.',
    example: 'On a Mac, software is often distributed in a `.dmg` file.'
  },
  {
    id: 'vhd',
    term: 'VHD',
    slug: 'vhd',
    definition: 'Virtual Hard Disk. A file format which represents a virtual hard disk drive.',
    example: 'Hyper-V uses the VHD file format for its virtual machine disks.'
  },
  {
    id: 'vmdk',
    term: 'VMDK',
    slug: 'vmdk',
    definition: 'VMware Disk. A file format that represents a virtual hard disk drive, used by VMware products.',
    example: 'He converted the VMDK file to a VHD to move the virtual machine from VMware to Hyper-V.'
  },
  {
    id: 'qcow2',
    term: 'QCOW2',
    slug: 'qcow2',
    definition: 'QEMU Copy-On-Write. The default storage format for QEMU virtual machines.',
    example: 'KVM/QEMU uses the QCOW2 format, which allows for smaller disk images and snapshots.'
  },
  {
    id: 'clone',
    term: 'CLONE',
    slug: 'clone',
    definition: 'VM duplication. The process of creating an exact copy of a virtual machine.',
    example: 'He created a clone of the base server image to deploy a new web server.'
  },
  {
    id: 'live-migrate',
    term: 'LIVE MIGRATE',
    slug: 'live-migrate',
    definition: 'Move running VM. The process of moving a running virtual machine from one physical host to another without downtime.',
    example: 'They were able to live migrate the virtual machine to another host server without any downtime.'
  },
  {
    id: 'hot-migrate',
    term: 'HOT MIGRATE',
    slug: 'hot-migrate',
    definition: 'Live transfer. Another term for live migration.',
    example: 'A hot migrate is essential for performing maintenance without disrupting services.'
  },
  {
    id: 'guest-additions',
    term: 'GUEST ADDITIONS',
    slug: 'guest-additions',
    definition: 'VM tools. A set of device drivers and system applications for virtual machines.',
    example: 'He installed the Guest Additions in the VM to enable features like shared clipboard and better graphics performance.'
  },
  {
    id: 'hypervisor',
    term: 'HYPERVISOR',
    slug: 'hypervisor',
    definition: 'Virtualization host. A computer software, firmware or hardware that creates and runs virtual machines.',
    example: 'VMware ESXi and Proxmox are examples of Type-1 hypervisors.'
  },
  {
    id: 'k8s',
    term: 'K8s',
    slug: 'k8s',
    definition: 'Kubernetes. An open-source container-orchestration system for automating computer application deployment, scaling, and management.',
    example: 'K8s is a powerful but complex container orchestration platform.'
  },
  {
    id: 'pod',
    term: 'Pod',
    slug: 'pod',
    definition: 'Container group. The smallest and simplest unit in the Kubernetes object model that you create or deploy.',
    example: 'The web application ran in a pod with two containers: the app itself and a logging sidecar.'
  },
  {
    id: 'node',
    term: 'Node',
    slug: 'node',
    definition: 'Worker machine. A worker machine in Kubernetes.',
    example: 'The Kubernetes cluster consisted of one master node and three worker nodes.'
  },
  {
    id: 'kubectl',
    term: 'Kubectl',
    slug: 'kubectl',
    definition: 'K8s CLI. The command-line tool for Kubernetes.',
    example: 'He used `kubectl` to check the status of the pods in the cluster.'
  },
  {
    id: 'helm',
    term: 'Helm',
    slug: 'helm',
    definition: 'K8s package manager. A package manager for Kubernetes.',
    example: 'He used a Helm chart to easily deploy the entire monitoring stack.'
  },
  {
    id: 'flux',
    term: 'Flux',
    slug: 'flux',
    definition: 'GitOps tool. A tool for keeping Kubernetes clusters in sync with sources of configuration.',
    example: 'They used Flux to automatically synchronize their cluster state with the configuration in their Git repository.'
  },
  {
    id: 'gitops',
    term: 'GitOps',
    slug: 'gitops',
    definition: 'Git-driven ops. A way of implementing Continuous Delivery for cloud native applications.',
    example: 'With GitOps, the Git repository is the single source of truth for the desired state of the system.'
  },
  {
    id: 'terraform',
    term: 'Terraform',
    slug: 'terraform',
    definition: 'IaC tool. An open-source infrastructure as code software tool.',
    example: 'The DevOps team used Terraform to define their entire AWS cloud infrastructure in code.'
  },
  {
    id: 'plan-file',
    term: 'Plan File',
    slug: 'plan-file',
    definition: 'Terraform plan. A file created by the `terraform plan` command that contains the execution plan for a Terraform configuration.',
    example: 'He saved the output of `terraform plan` to a plan file for later review and application.'
  },
  {
    id: 'apply',
    term: 'Apply',
    slug: 'apply',
    definition: 'Infra deployment. The process of applying a configuration to a system.',
    example: 'After reviewing the plan, he ran `terraform apply` to create the cloud resources.'
  },
  {
    id: 'drift',
    term: 'Drift',
    slug: 'drift',
    definition: 'Infra deviation. The difference between the actual state of a system and the desired state.',
    example: 'The tool detected drift, indicating that the live infrastructure no longer matched the code definition.'
  },
  {
    id: 'dockerfile',
    term: 'Dockerfile',
    slug: 'dockerfile',
    definition: 'Image recipe. A text document that contains all the commands a user could call on the command line to assemble an image.',
    example: 'He wrote a Dockerfile to define all the steps needed to build the application\'s container image.'
  },
  {
    id: 'compose',
    term: 'Compose',
    slug: 'compose',
    definition: 'Container orchestrator. A tool for defining and running multi-container Docker applications.',
    example: 'He used Docker Compose to easily run his multi-container application in his local development environment.'
  },
  {
    id: 'layer',
    term: 'Layer',
    slug: 'layer',
    definition: 'Container component. A layer is a modification to an image, represented by an instruction in the Dockerfile.',
    example: 'Each line in a Dockerfile creates a new layer in the final image.'
  },
  {
    id: 'registry',
    term: 'Registry',
    slug: 'registry',
    definition: 'Image repo. A storage and distribution system for container images.',
    example: 'He pushed the new container image to their private registry.'
  },
  {
    id: 'tag',
    term: 'Tag',
    slug: 'tag',
    definition: 'Image version. A label applied to a container image to distinguish it from other images.',
    example: 'The image was given the tag `v1.2.0` to denote its version.'
  },
  {
    id: 'digest',
    term: 'Digest',
    slug: 'digest',
    definition: 'Image checksum. A content-addressable identifier for a container image.',
    example: 'He deployed the image using its immutable digest to ensure he was running the exact correct version.'
  },
  {
    id: 'cronjob',
    term: 'CronJob',
    slug: 'cronjob',
    definition: 'Scheduled container. A Kubernetes workload object that creates Jobs on a repeating schedule.',
    example: 'He created a CronJob to run the database backup script every night at 2 AM.'
  },
  {
    id: 'sidecar',
    term: 'Sidecar',
    slug: 'sidecar',
    definition: 'Companion container. A container that runs alongside the main application container in a Kubernetes pod.',
    example: 'They used a sidecar container to handle log forwarding, so the main application didn\'t have to worry about it.'
  },
  {
    id: 'init-container',
    term: 'Init container',
    slug: 'init-container',
    definition: 'Pre-task container. A container that runs before the main application container in a pod.',
    example: 'They used an init container to download necessary configuration files before the main application container started.'
  },
  {
    id: 'nginx',
    term: 'NGINX',
    slug: 'nginx',
    definition: 'Reverse proxy. A web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
    example: 'They used NGINX as a reverse proxy and load balancer in front of their web servers.'
  },
  {
    id: 'haproxy',
    term: 'HAProxy',
    slug: 'haproxy',
    definition: 'Load balancer. A free, open source software that provides a high availability load balancer and proxy server for TCP and HTTP-based applications.',
    example: 'HAProxy is known for being a very high-performance software load balancer.'
  },
  {
    id: 'traefik',
    term: 'Traefik',
    slug: 'traefik',
    definition: 'Modern LB. A modern HTTP reverse proxy and load balancer that makes deploying microservices easy.',
    example: 'They chose Traefik as their ingress controller because it could automatically discover services from Docker.'
  },
  {
    id: 'envoy',
    term: 'Envoy',
    slug: 'envoy',
    definition: 'Proxy. An open source edge and service proxy, designed for cloud-native applications.',
    example: 'Many service meshes, like Istio, use Envoy as their underlying data plane proxy.'
  },
  {
    id: 'reverse-proxy',
    term: 'Reverse proxy',
    slug: 'reverse-proxy',
    definition: 'Traffic router. A server that sits in front of one or more web servers, forwarding client requests to them.',
    example: 'The Nginx reverse proxy handled SSL termination and forwarded requests to the backend application servers.'
  },
  {
    id: 'forward-proxy',
    term: 'Forward proxy',
    slug: 'forward-proxy',
    definition: 'Outbound proxy. A proxy server that is used to forward requests from a private network to the Internet.',
    example: 'The company required all outbound internet traffic to go through a forward proxy for filtering.'
  },
  {
    id: 'queue',
    term: 'Queue',
    slug: 'queue',
    definition: 'Job buffer. A line of things waiting to be handled.',
    example: 'He pushed the video encoding task onto a queue to be processed by a background worker.'
  },
  {
    id: 'worker',
    term: 'Worker',
    slug: 'worker',
    definition: 'Job processor. A process that performs work.',
    example: 'They scaled up the number of workers to handle the increased number of jobs in the queue.'
  },
  {
    id: 'cluster',
    term: 'Cluster',
    slug: 'cluster',
    definition: 'Group of nodes. A set of computers that work together so that they can be viewed as a single system.',
    example: 'The Kubernetes cluster was made up of 10 worker nodes.'
  },
  {
    id: 'redundancy',
    term: 'Redundancy',
    slug: 'redundancy',
    definition: 'Backup system. The duplication of critical components or functions of a system with the intention of increasing reliability of the system.',
    example: 'The server had redundant power supplies to protect against a single PSU failure.'
  },
  {
    id: 'fallback',
    term: 'Fallback',
    slug: 'fallback',
    definition: 'Backup process. A mechanism for accomplishing a task when the primary mechanism is unavailable.',
    example: 'If the primary database is down, the application has a fallback to a read-only replica.'
  },
  {
    id: 'heartbeat',
    term: 'Heartbeat',
    slug: 'heartbeat',
    definition: 'Node status. A periodic signal generated by hardware or software to indicate normal operation or to synchronize other parts of a system.',
    example: 'The cluster manager knew the node was down because it stopped receiving its heartbeat signal.'
  },
  {
    id: 'syn-flood',
    term: 'SYN Flood',
    slug: 'syn-flood',
    definition: 'Network flood. A type of denial-of-service attack where an attacker sends a succession of SYN requests to a target\'s system.',
    example: 'The firewall detected and blocked a SYN flood attack.'
  },
  {
    id: 'udp-flood',
    term: 'UDP Flood',
    slug: 'udp-flood',
    definition: 'Datagram flood. A denial-of-service attack in which the attacker sends a large number of User Datagram Protocol (UDP) packets to random ports on a remote host.',
    example: 'The server was targeted with a UDP flood, overwhelming its network capacity.'
  },
  {
    id: 'amplification-attack',
    term: 'Amplification Attack',
    slug: 'amplification-attack',
    definition: 'Reflection attack. A type of denial-of-service attack where an attacker uses a forged source IP address to send requests to a third-party server.',
    example: 'The attacker used a DNS amplification attack to generate a massive amount of traffic.'
  },
  {
    id: 'enum',
    term: 'ENUM',
    slug: 'enum',
    definition: 'Enumeration scanning. The process of extracting user names, machine names, network resources, shares and services from a system.',
    example: 'The first stage of the pentest was enumeration to map out the network and its services.'
  },
  {
    id: 'nmap',
    term: 'Nmap',
    slug: 'nmap',
    definition: 'Network scanner. A free and open-source network scanner created by Gordon Lyon.',
    example: 'He used Nmap to scan the network for open ports.'
  },
  {
    id: 'dirb',
    term: 'Dirb',
    slug: 'dirb',
    definition: 'Directory brute. A web content scanner that looks for existing (and/or hidden) web objects.',
    example: 'He used Dirb to discover hidden directories and files on the web server.'
  },
  {
    id: 'gobuster',
    term: 'Gobuster',
    slug: 'gobuster',
    definition: 'Directory breaker. A tool used to brute-force URIs (directories and files) in web sites.',
    example: 'Gobuster is a fast tool for brute-forcing URIs, DNS subdomains, and virtual host names.'
  },
  {
    id: 'hydra',
    term: 'Hydra',
    slug: 'hydra',
    definition: 'Password brute. A parallelized login cracker which supports numerous protocols to attack.',
    example: 'The attacker used Hydra to brute-force the password for the router\'s admin panel.'
  },
  {
    id: 'hashcat',
    term: 'Hashcat',
    slug: 'hashcat',
    definition: 'Hash cracker. A password recovery tool.',
    example: 'After dumping the password hashes, he used Hashcat to try and crack them.'
  },
  {
    id: 'cain',
    term: 'Cain',
    slug: 'cain',
    definition: 'Password tool. A password recovery tool for Microsoft Windows.',
    example: 'Cain and Abel is a legacy Windows password recovery tool that can perform various types of attacks.'
  },
  {
    id: 'impacket',
    term: 'Impacket',
    slug: 'impacket',
    definition: 'Network toolkit. A collection of Python classes for working with network protocols.',
    example: 'He used scripts from the Impacket toolkit to interact with Windows network protocols.'
  },
  {
    id: 'bloodhound',
    term: 'BloodHound',
    slug: 'bloodhound',
    definition: 'AD mapper. A single page JavaScript web application, built on top of Linkurious, compiled with Electron, with a Neo4j database fed by a PowerShell ingestor.',
    example: 'The pentester used BloodHound to visualize attack paths within the Active Directory environment.'
  },
  {
    id: 'kerberoasting',
    term: 'Kerberoasting',
    slug: 'kerberoasting',
    definition: 'Kerberos attack. A post-exploitation attack technique that attempts to crack the password of a service account in Active Directory.',
    example: 'Kerberoasting is an attack method that attempts to crack the password of a service account in Active Directory.'
  },
  {
    id: 'pass-the-hash',
    term: 'Pass-the-Hash',
    slug: 'pass-the-hash',
    definition: 'Credential attack. A hacking technique that allows an attacker to authenticate to a remote server or service by using the underlying NTLM or LanMan hash of a user\'s password.',
    example: 'In a pass-the-hash attack, an attacker can authenticate to a remote server by using the hash of a user\'s password, without needing the cleartext password.'
  },
  {
    id: 'pass-the-ticket',
    term: 'Pass-the-Ticket',
    slug: 'pass-the-ticket',
    definition: 'Token attack. A hacking technique that allows an attacker to authenticate to a remote server by using a stolen Kerberos ticket.',
    example: 'The attacker used a pass-the-ticket technique to impersonate a user by stealing their Kerberos ticket.'
  },
  {
    id: 'golden-ticket',
    term: 'Golden Ticket',
    slug: 'golden-ticket',
    definition: 'Full AD access. A Kerberos ticket that can grant an attacker administrative access to an entire Active Directory domain.',
    example: 'Creating a golden ticket gives an attacker virtually unlimited access to an entire Active Directory domain.'
  },
  {
    id: 'silver-ticket',
    term: 'Silver Ticket',
    slug: 'silver-ticket',
    definition: 'Service access. A forged Kerberos ticket that grants access to a specific service on a specific machine.',
    example: 'A silver ticket is a forged Kerberos ticket that grants access to a specific service on a specific machine.'
  },
  {
    id: 'lsass-dump',
    term: 'LSASS Dump',
    slug: 'lsass-dump',
    definition: 'Credential dump. A process of dumping the memory of the Local Security Authority Subsystem Service (LSASS) process on Windows to extract credentials.',
    example: 'The attacker attempted to perform an LSASS dump to extract credentials from the server\'s memory.'
  },
  {
    id: 'sam-dump',
    term: 'SAM Dump',
    slug: 'sam-dump',
    definition: 'Windows hash dump. The process of dumping the Security Account Manager (SAM) database on Windows to extract password hashes.',
    example: 'Dumping the SAM file allows an attacker to access the stored password hashes on a Windows machine.'
  },
  {
    id: 'bits',
    term: 'BITS',
    slug: 'bits',
    definition: 'Background transfer. A component of Microsoft Windows which asynchronously transfers files in the foreground or background.',
    example: 'Windows uses the Background Intelligent Transfer Service (BITS) to download updates without consuming all the available bandwidth.'
  },
  {
    id: 'wmi',
    term: 'WMI',
    slug: 'wmi',
    definition: 'Management interface. A set of extensions to the Windows Driver Model that provides an operating system interface through which instrumented components provide information and notification.',
    example: 'The administrator wrote a script that used WMI to query the amount of free disk space.'
  },
  {
    id: 'psexec',
    term: 'PSExec',
    slug: 'psexec',
    definition: 'Remote executor. A lightweight telnet-replacement that lets you execute processes on other systems, complete with full interactivity for console applications, without having to manually install client software.',
    example: 'The administrator used PSExec to remotely run a command on all the workstations.'
  },
  {
    id: 'smb',
    term: 'SMB',
    slug: 'smb',
    definition: 'File sharing. A network file sharing protocol that allows applications on a computer to read and write to files and to request services from server programs in a computer network.',
    example: 'He connected to the network share using the SMB protocol.'
  },
  {
    id: 'ica',
    term: 'ICA',
    slug: 'ica',
    definition: 'Citrix protocol. An application-layer protocol for remote access to Windows applications.',
    example: 'He connected to his virtual desktop using the Citrix Workspace app, which uses the ICA protocol.'
  },
  {
    id: 'pcoip',
    term: 'PCoIP',
    slug: 'pcoip',
    definition: 'Teradici display. A proprietary remote display protocol developed by Teradici.',
    example: 'PCoIP is a remote display protocol known for its high-performance graphics, often used in VDI environments.'
  },
  {
    id: 'spi',
    term: 'SPI',
    slug: 'spi',
    definition: 'Serial Peripheral Interface. A synchronous serial communication interface specification used for short-distance communication.',
    example: 'The microcontroller used the SPI bus to communicate with the external flash memory.'
  },
  {
    id: 'i2c',
    term: 'I2C',
    slug: 'i2c',
    definition: 'Inter-Integrated Circuit. A synchronous, multi-master, multi-slave, packet switched, single-ended, serial computer bus invented in 1982 by Philips Semiconductor.',
    example: 'The temperature sensor sent its data to the microcontroller over the I2C bus.'
  },
  {
    id: 'gpio',
    term: 'GPIO',
    slug: 'gpio',
    definition: 'General IO pins. A standard interface used to connect microcontrollers to other electronic devices.',
    example: 'He connected the LED to one of the GPIO pins on the Raspberry Pi.'
  },
  {
    id: 'sbc',
    term: 'SBC',
    slug: 'sbc',
    definition: 'Single-board computer. A complete computer built on a single circuit board, with microprocessor(s), memory, input/output (I/O) and other features required of a functional computer.',
    example: 'The Raspberry Pi is the most famous example of an SBC.'
  },
  {
    id: 'arm',
    term: 'ARM',
    slug: 'arm',
    definition: 'Processor architecture. A family of reduced instruction set computing (RISC) architectures for computer processors, configured for various environments.',
    example: 'Most smartphones and mobile devices use processors based on the ARM architecture.'
  },
  {
    id: 'x86',
    term: 'x86',
    slug: 'x86',
    definition: 'Intel architecture. A family of instruction set architectures initially developed by Intel based on the Intel 8086 microprocessor and its 8088 variant.',
    example: 'Most desktop and server CPUs are based on the x86 instruction set.'
  },
  {
    id: 'x64',
    term: 'x64',
    slug: 'x64',
    definition: '64-bit architecture. The 64-bit version of the x86 instruction set.',
    example: 'He installed the x64 version of the application to take full advantage of his 64-bit operating system.'
  },
  {
    id: 'soc',
    term: 'SoC',
    slug: 'soc',
    definition: 'System on Chip. An integrated circuit that integrates all components of a computer or other electronic system.',
    example: 'The new smartphone features a powerful SoC that combines the CPU, GPU, and AI accelerator.'
  },
  {
    id: 'apu',
    term: 'APU',
    slug: 'apu',
    definition: 'Accelerated Processing Unit. A processing unit that includes both a CPU and a GPU on a single chip.',
    example: 'An AMD APU combines a CPU and a GPU on a single chip, which is great for budget gaming PCs.'
  },
  {
    id: 'hbm',
    term: 'HBM',
    slug: 'hbm',
    definition: 'High Bandwidth Memory. A high-performance RAM interface for 3D-stacked DRAM.',
    example: 'High-end graphics cards use HBM for its massive memory bandwidth.'
  },
  {
    id: 'nvme',
    term: 'NVMe',
    slug: 'nvme',
    definition: 'Non-Volatile Memory Express. A specification for accessing solid-state drives (SSDs) attached through the PCI Express (PCIe) bus.',
    example: 'He installed his OS on an NVMe SSD for incredibly fast boot times.'
  },
  {
    id: 'qlc',
    term: 'QLC',
    slug: 'qlc',
    definition: 'Quad-level cell. A type of NAND flash memory that stores four bits of data per cell.',
    example: 'QLC SSDs offer high capacity at a lower cost, but with lower endurance.'
  },
  {
    id: 'tlc',
    term: 'TLC',
    slug: 'tlc',
    definition: 'Triple-level cell. A type of NAND flash memory that stores three bits of data per cell.',
    example: 'Most consumer SSDs today use TLC flash, which offers a good balance of price, performance, and endurance.'
  },
  {
    id: 'slc',
    term: 'SLC',
    slug: 'slc',
    definition: 'Single-level cell. A type of NAND flash memory that stores one bit of data per cell.',
    example: 'SLC flash is the fastest and most durable, but also the most expensive.'
  },
  {
    id: 'plp',
    term: 'PLP',
    slug: 'plp',
    definition: 'Power loss protection. A mechanism in some SSDs that protects data in the event of a power loss.',
    example: 'Enterprise-grade SSDs have power loss protection to prevent data corruption during a sudden power outage.'
  },
  {
    id: 'wear-leveling',
    term: 'Wear Leveling',
    slug: 'wear-leveling',
    definition: 'Balance writes. A technique for prolonging the service life of some kinds of erasable computer storage media.',
    example: 'The SSD\'s firmware uses wear leveling to distribute writes evenly across all the memory cells.'
  },
  {
    id: 'smart',
    term: 'SMART',
    slug: 'smart',
    definition: 'Drive health logs. A monitoring system included in computer hard disk drives (HDDs) and solid-state drives (SSDs).',
    example: 'He checked the S.M.A.R.T. data of the hard drive to see if it was showing any signs of failure.'
  },
  {
    id: 'chkdsk',
    term: 'CHKDSK',
    slug: 'chkdsk',
    definition: 'Disk check. A system tool in DOS, OS/2 and Windows to verify the file system integrity of a volume and fix logical file system errors.',
    example: 'He ran `CHKDSK` on his Windows PC to scan the hard drive for errors.'
  },
  {
    id: 'dism',
    term: 'DISM',
    slug: 'dism',
    definition: 'Deployment Image Servicing. A command-line tool that can be used to service and prepare Windows images.',
    example: 'He used the DISM tool to repair corrupted Windows system files.'
  },
  {
    id: 'sfc',
    term: 'SFC',
    slug: 'sfc',
    definition: 'System File Checker. A utility in Microsoft Windows that allows users to scan for and restore corruptions in Windows system files.',
    example: 'Running `SFC /scannow` is a common first step to fixing Windows issues.'
  },
  {
    id: 'gpedit',
    term: 'GPEDIT',
    slug: 'gpedit',
    definition: 'Group Policy Editor. A Microsoft Management Console (MMC) snap-in that provides a single user interface through which all the settings of Group Policy objects can be managed.',
    example: 'He used `gpedit.msc` to configure advanced system settings on his Windows Pro machine.'
  },
  {
    id: 'regedit',
    term: 'REGEDIT',
    slug: 'regedit',
    definition: 'Registry editor. A graphical tool in the Windows operating system that allows authorized users to view and edit the Windows registry.',
    example: 'He had to carefully edit a key in `regedit` to fix the application bug.'
  },
  {
    id: 'msconfig',
    term: 'MSCONFIG',
    slug: 'msconfig',
    definition: 'Boot config. A system utility to troubleshoot the Microsoft Windows startup process.',
    example: 'He used `msconfig` to disable unnecessary startup programs.'
  },
  {
    id: 'netstat',
    term: 'NETSTAT',
    slug: 'netstat',
    definition: 'Network status. A command-line network utility that displays network connections for Transmission Control Protocol, routing tables, and a number of network interface and network protocol statistics.',
    example: 'He ran `netstat -an` to see all the active network connections on his computer.'
  },
  {
    id: 'ipconfig',
    term: 'IPCONFIG',
    slug: 'ipconfig',
    definition: 'IP viewer. A console application of some operating systems that displays all current TCP/IP network configuration values.',
    example: 'He used `ipconfig` to find his computer\'s local IP address.'
  },
  {
    id: 'arp-a',
    term: 'ARP -a',
    slug: 'arp-a',
    definition: 'ARP table. A command used to display the current ARP cache tables for all interfaces.',
    example: 'The `arp -a` command displays the current ARP cache, showing IP to MAC address mappings.'
  },
  {
    id: 'tracert',
    term: 'TRACERT',
    slug: 'tracert',
    definition: 'Route tracing. A computer network diagnostic command for displaying the route and measuring transit delays of packets across an Internet Protocol network.',
    example: 'He used `tracert` to trace the network path to the remote server.'
  },
  {
    id: 'pathping',
    term: 'PATHPING',
    slug: 'pathping',
    definition: 'Combined tool. A Windows network utility that combines the functionality of ping and tracert.',
    example: '`pathping` is a Windows tool that combines the functionality of `ping` and `tracert`.'
  },
  {
    id: 'winpe',
    term: 'WinPE',
    slug: 'winpe',
    definition: 'Preinstallation environment. A lightweight version of Windows used for the deployment of PCs, workstations, and servers.',
    example: 'He booted into the Windows Preinstallation Environment to deploy a custom Windows image.'
  },
  {
    id: 'pxe',
    term: 'PXE',
    slug: 'pxe',
    definition: 'Network boot. An environment to boot computers using a network interface independently of data storage devices or installed operating systems.',
    example: 'He configured the server to PXE boot from the network to install the operating system.'
  },
  {
    id: 'wds',
    term: 'WDS',
    slug: 'wds',
    definition: 'Windows Deployment Services. A server technology from Microsoft for network-based installation of Windows operating systems.',
    example: 'The company used WDS to deploy Windows to all new computers over the network.'
  },
  {
    id: 'mdt',
    term: 'MDT',
    slug: 'mdt',
    definition: 'Microsoft Deployment Toolkit. A free tool from Microsoft for automating desktop and server deployments.',
    example: 'MDT is a powerful tool for automating Windows deployments.'
  },
  {
    id: 'ghost',
    term: 'GHOST',
    slug: 'ghost',
    definition: 'Disk cloning. A disk cloning and backup tool originally developed by Murray Haszard in 1995.',
    example: 'Norton Ghost was a popular tool for disk cloning and backup.'
  },
  {
    id: 'sysprep',
    term: 'SYSPREP',
    slug: 'sysprep',
    definition: 'System preparation. A Microsoft tool used to generalize a Windows installation for deployment.',
    example: 'He ran `Sysprep` on the Windows image to generalize it before deploying it to multiple computers.'
  },
  {
    id: 'sccm',
    term: 'SCCM',
    slug: 'sccm',
    definition: 'Systems Center Config Manager. A systems management software product developed by Microsoft for managing large groups of computers running Windows NT, Windows Embedded, macOS, Linux or UNIX, as well as various mobile operating systems.',
    example: 'The large corporation used SCCM to manage all of its Windows devices.'
  },
  {
    id: 'intune',
    term: 'Intune',
    slug: 'intune',
    definition: 'Device manager. A Microsoft cloud-based management tool for mobile devices.',
    example: 'They used Microsoft Intune to manage and secure the company\'s mobile devices.'
  },
  {
    id: 'azuread',
    term: 'AzureAD',
    slug: 'azuread',
    definition: 'Identity service. Microsoft\'s cloud-based identity and access management service.',
    example: 'They synchronized their on-premises Active Directory with Azure AD to enable single sign-on for cloud apps.'
  },
  {
    id: 'saml',
    term: 'SAML',
    slug: 'saml',
    definition: 'Security Assertion Markup. An open standard for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider.',
    example: 'The application used SAML for single sign-on with their enterprise identity provider.'
  },
  {
    id: 'kerberos',
    term: 'Kerberos',
    slug: 'kerberos',
    definition: 'Network auth. A computer network authentication protocol that works on the basis of tickets to allow nodes communicating over a non-secure network to prove their identity to one another in a secure manner.',
    example: 'Active Directory uses the Kerberos protocol for authentication.'
  },
  {
    id: 'token',
    term: 'Token',
    slug: 'token',
    definition: 'Auth artifact. A piece of data that represents a user\'s identity and is used to authenticate them.',
    example: 'After authenticating, the server issued a session token to the client.'
  },
  {
    id: 'claims',
    term: 'Claims',
    slug: 'claims',
    definition: 'Identity data. Statements about a user, such as their name, email, and roles.',
    example: 'The JWT contained claims about the user, such as their name, email, and roles.'
  },
  {
    id: 'federation',
    term: 'Federation',
    slug: 'federation',
    definition: 'Identity linking. A system in which a group of identity providers and service providers agree to trust each other\'s authentication information.',
    example: 'Identity federation allowed users from a partner company to log in to their application using their own credentials.'
  },
  {
    id: 'csp',
    term: 'CSP',
    slug: 'csp',
    definition: 'Content Security Policy. A computer security standard introduced to prevent cross-site scripting (XSS), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.',
    example: 'He implemented a strict Content Security Policy to prevent cross-site scripting attacks.'
  },
  {
    id: 'same-origin-policy',
    term: 'SOP',
    slug: 'same-origin-policy',
    definition: 'Same Origin Policy. A critical security mechanism that restricts how a document or script loaded from one origin can interact with a resource from another origin.',
    example: 'The Same Origin Policy in browsers prevents a script on one page from accessing data on another page with a different origin.'
  },
  {
    id: 'xss',
    term: 'XSS',
    slug: 'xss',
    definition: 'Cross-Site Scripting. A type of security vulnerability typically found in web applications.',
    example: 'The attacker exploited an XSS vulnerability to inject a malicious script into the website.'
  },
  {
    id: 'lfi',
    term: 'LFI',
    slug: 'lfi',
    definition: 'Local File Inclusion. A type of vulnerability that allows an attacker to include a file, usually exploiting a "dynamic file inclusion" mechanisms implemented in the target application.',
    example: 'An LFI vulnerability allowed the attacker to read sensitive files from the server, like `/etc/passwd`.'
  },
  {
    id: 'rfi',
    term: 'RFI',
    slug: 'rfi',
    definition: 'Remote File Inclusion. A type of vulnerability most often found on websites. It allows an attacker to include a remote file, usually through a script on the web server.',
    example: 'A Remote File Inclusion vulnerability allowed the attacker to execute code from a remote server.'
  },
  {
    id: 'rce',
    term: 'RCE',
    slug: 'rce',
    definition: 'Remote Code Execution. A class of software vulnerability that allows an attacker to execute arbitrary code on a remote machine.',
    example: 'The vulnerability was critical because it could lead to Remote Code Execution.'
  },
  {
    id: 'sqli',
    term: 'SQLi',
    slug: 'sqli',
    definition: 'SQL Injection. A code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution.',
    example: 'The login form was vulnerable to SQLi, allowing an attacker to bypass authentication.'
  },
  {
    id: 'command-injection-os',
    term: 'Command Injection',
    slug: 'command-injection-os',
    definition: 'OS-level injection. An attack in which the goal is execution of arbitrary commands on the host operating system via a vulnerable application.',
    example: 'Failing to sanitize user input led to a command injection vulnerability.'
  },
  {
    id: 'nosqli',
    term: 'NoSQLi',
    slug: 'nosqli',
    definition: 'NoSQL injection. A vulnerability in which an attacker is able to inject code into a NoSQL database query.',
    example: 'The application was vulnerable to NoSQLi, allowing an attacker to extract data from the MongoDB database.'
  },
  {
    id: 'desync',
    term: 'Desync',
    slug: 'desync',
    definition: 'Request smuggling. An attack technique that involves sending a series of HTTP requests that cause a desynchronization between the front-end and back-end servers.',
    example: 'An HTTP Desync attack can be used to smuggle malicious requests past a front-end server.'
  },
  {
    id: 'burp',
    term: 'Burp',
    slug: 'burp',
    definition: 'Burp Suite. A graphical tool for testing Web application security.',
    example: 'He used Burp Suite to intercept and modify the HTTP requests to test the application for vulnerabilities.'
  },
  {
    id: 'zap',
    term: 'ZAP',
    slug: 'zap',
    definition: 'Zed Attack Proxy. An open-source web application security scanner.',
    example: 'OWASP ZAP is a popular open-source tool for finding vulnerabilities in web applications.'
  },
  {
    id: 'nikto',
    term: 'Nikto',
    slug: 'nikto',
    definition: 'Web scanner. A free software command-line vulnerability scanner that scans webservers for dangerous files/CGIs, outdated server software and other problems.',
    example: 'He ran Nikto against the web server to check for common misconfigurations and vulnerabilities.'
  },
  {
    id: 'waf',
    term: 'WAF',
    slug: 'waf',
    definition: 'Web App Firewall. A firewall that monitors, filters or blocks HTTP traffic to and from a web application.',
    example: 'The WAF blocked the SQL injection attack before it could reach the application.'
  },
  {
    id: 'cdn-shield',
    term: 'CDN Shield',
    slug: 'cdn-shield',
    definition: 'Traffic buffer. A CDN feature that adds a layer of caching between the CDN edge servers and the origin server.',
    example: 'A CDN Shield or origin shield helps protect the origin server from excessive traffic.'
  },
  {
    id: 'csp-header',
    term: 'CSP Header',
    slug: 'csp-header',
    definition: 'Security header. A security standard that helps prevent cross-site scripting (XSS), clickjacking and other code injection attacks.',
    example: 'The server sent a Content-Security-Policy header to instruct the browser on which resources are allowed to be loaded.'
  },
  {
    id: 'hsts',
    term: 'HSTS',
    slug: 'hsts',
    definition: 'Strict Transport Security. A web security policy mechanism that helps to protect websites against protocol downgrade attacks and cookie hijacking.',
    example: 'HSTS is a security header that forces browsers to always connect to a site using HTTPS.'
  },
  {
    id: 'u2f',
    term: 'U2F',
    slug: 'u2f',
    definition: 'Universal 2nd Factor. An open authentication standard that strengthens and simplifies two-factor authentication (2FA) using specialized USB or NFC devices.',
    example: 'YubiKeys are a popular form of U2F hardware token for multi-factor authentication.'
  },
  {
    id: 'authenticator',
    term: 'Authenticator',
    slug: 'authenticator',
    definition: 'MFA app. An application that generates one-time passwords for use in two-factor authentication.',
    example: 'He opened his authenticator app to get the six-digit code for his login.'
  },
  {
    id: 'hash-salt',
    term: 'Hash Salt',
    slug: 'hash-salt',
    definition: 'Randomization. Random data that is used as an additional input to a one-way function that hashes data.',
    example: 'Adding a unique hash salt to each password prevents rainbow table attacks.'
  },
  {
    id: 'pepper',
    term: 'Pepper',
    slug: 'pepper',
    definition: 'Server secret. A secret added to a password before hashing, which is stored separately from the user database.',
    example: 'A pepper is a secret value added to a password before hashing, stored separately from the user database, to add another layer of security.'
  },
  {
    id: 'lockout',
    term: 'Lockout',
    slug: 'lockout',
    definition: 'Failed-attempt policy. A security measure that locks a user account after a certain number of failed login attempts.',
    example: 'The account lockout policy would freeze an account for 15 minutes after 5 failed login attempts.'
  },
  {
    id: 'audit-log',
    term: 'Audit Log',
    slug: 'audit-log',
    definition: 'Security log. A chronological record of system activities.',
    example: 'The administrator reviewed the audit log to see who had accessed the sensitive file.'
  },
  {
    id: 'sysmon',
    term: 'Sysmon',
    slug: 'sysmon',
    definition: 'System monitor. A Windows system service and device driver that, once installed on a system, remains resident across system reboots to monitor and log system activity to the Windows event log.',
    example: 'He installed Sysmon on the Windows server to get more detailed logging of process creation and network connections.'
  },
  {
    id: 'etw',
    term: 'ETW',
    slug: 'etw',
    definition: 'Event tracing. A feature of the Windows operating system that provides a mechanism to trace and log events that are raised by user-mode applications and kernel-mode drivers.',
    example: 'Event Tracing for Windows (ETW) provides a powerful way to trace and log kernel and application-level events.'
  },
  {
    id: 'yara',
    term: 'YARA',
    slug: 'yara',
    definition: 'Malware rules. A tool aimed at helping malware researchers to identify and classify malware samples.',
    example: 'The security analyst wrote a YARA rule to detect the new strain of malware based on specific strings in its binary.'
  },
  {
    id: 'sigma-rule',
    term: 'Sigma Rule',
    slug: 'sigma-rule',
    definition: 'Security rule. A generic and open signature format that allows you to describe relevant log events in a straightforward manner.',
    example: 'Sigma is a generic signature format for SIEM systems, allowing rules to be shared across different platforms.'
  },
  {
    id: 'ioa',
    term: 'IoA',
    slug: 'ioa',
    definition: 'Indicator of Attack. A proactive approach to threat detection that focuses on identifying the intent, goals and techniques of an attacker.',
    example: 'Unlike an IoC, an Indicator of Attack focuses on detecting the techniques an attacker is using, not just a specific artifact.'
  },
  {
    id: 'ttp',
    term: 'TTP',
    slug: 'ttp',
    definition: 'Tactics Techniques Procedures. The behavior of an advanced persistent threat (APT) actor.',
    example: 'Security analysts study the TTPs of different threat groups to better defend against them.'
  },
  {
    id: 'mitre',
    term: 'MITRE',
    slug: 'mitre',
    definition: 'Attack framework. A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.',
    example: 'The security team used the MITRE ATT&CK framework to model the threat actor\'s likely next moves.'
  },
  {
    id: 'threat-hunt',
    term: 'Threat Hunt',
    slug: 'threat-hunt',
    definition: 'detect threats. A proactive search for cyber threats that are lurking undetected in a network.',
    example: 'A threat hunt is a proactive search for malicious actors in a network, as opposed to waiting for an alert.'
  },
  {
    id: 'artifact',
    term: 'Artifact',
    slug: 'artifact',
    definition: 'Evidence object. An object left behind by an attacker on a compromised system.',
    example: 'The forensic investigator collected several digital artifacts from the compromised machine, including log files and memory dumps.'
  },
  {
    id: 'volatility',
    term: 'Volatility',
    slug: 'volatility',
    definition: 'Memory forensic tool. An open-source memory forensics framework for incident response and malware analysis.',
    example: 'He used the Volatility framework to analyze the memory dump for running processes and network connections.'
  },
  {
    id: 'ftk',
    term: 'FTK',
    slug: 'ftk',
    definition: 'Forensic toolkit. A computer forensics software made by AccessData.',
    example: 'The digital forensics lab used AccessData\'s Forensic Toolkit (FTK) for their investigation.'
  },
  {
    id: 'encase',
    term: 'EnCase',
    slug: 'encase',
    definition: 'Forensic analyzer. A digital forensics tool made by Guidance Software.',
    example: 'EnCase is another popular commercial tool used in digital forensics.'
  },
  {
    id: 'grc',
    term: 'GRC',
    slug: 'grc',
    definition: 'Governance Risk Compliance. A strategy for managing an organization\'s overall governance, enterprise risk management and compliance with regulations.',
    example: 'The GRC team was responsible for ensuring the company complied with all relevant regulations like GDPR and SOX.'
  },
  {
    id: 'dlp',
    term: 'DLP',
    slug: 'dlp',
    definition: 'Data Loss Prevention. A set of tools and processes used to ensure that sensitive data is not lost, misused, or accessed by unauthorized users.',
    example: 'They implemented a DLP solution to prevent employees from emailing sensitive customer data outside the company.'
  },
  {
    id: 'casb',
    term: 'CASB',
    slug: 'casb',
    definition: 'Cloud access broker. An on-premises or cloud-based security policy enforcement point that is placed between cloud service consumers and cloud service providers to combine and interject enterprise security policies as the cloud-based resources are accessed.',
    example: 'A Cloud Access Security Broker (CASB) sits between users and cloud applications to enforce security policies.'
  },
  {
    id: 'zero-trust-model',
    term: 'Zero Trust',
    slug: 'zero-trust-model',
    definition: 'Identity model. A security model based on the principle of "never trust, always verify."',
    example: 'In a Zero Trust model, no user or device is trusted by default, regardless of its location.'
  },
  {
    id: 'least-privilege',
    term: 'Least Privilege',
    slug: 'least-privilege',
    definition: 'Minimum rights. The principle that a user should only have the access rights necessary to do their job.',
    example: 'The principle of least privilege dictates that a user should only have the access rights necessary to do their job.'
  },
  {
    id: 'superuser',
    term: 'Superuser',
    slug: 'superuser',
    definition: 'Root user. A special user account used for system administration.',
    example: 'The `root` account on Linux is a superuser with unlimited privileges.'
  },
  {
    id: 'rooting',
    term: 'Rooting',
    slug: 'rooting',
    definition: 'Unlock OS. The process of allowing users of smartphones, tablets and other devices running the Android mobile operating system to attain privileged control over various Android subsystems.',
    example: 'Rooting his Android phone allowed him to install custom firmware and remove bloatware.'
  },
  {
    id: 'jailbreak',
    term: 'Jailbreak',
    slug: 'jailbreak',
    definition: 'Remove iOS limits. The process of removing software restrictions imposed by Apple on devices running iOS and iPadOS.',
    example: 'Jailbreaking an iPhone allows users to install apps from outside the official App Store.'
  },
  {
    id: 'fastboot',
    term: 'Fastboot',
    slug: 'fastboot',
    definition: 'Flashing tool. A protocol that can be used to re-flash partitions on a device.',
    example: 'He booted the Android phone into fastboot mode to flash a new recovery image.'
  },
  {
    id: 'edl-mode',
    term: 'EDL Mode',
    slug: 'edl-mode',
    definition: 'Qualcomm emergency. A special boot mode on Qualcomm devices that can be used to unbrick a device.',
    example: 'He had to use EDL mode to unbrick his phone after a failed software update.'
  },
  {
    id: 'odin',
    term: 'Odin',
    slug: 'odin',
    definition: 'Samsung flasher. A utility software developed and used by Samsung internally, which can be used to flash a custom recovery firmware image to a Samsung Android device.',
    example: 'He used the Odin tool to flash the official Samsung firmware back onto his phone.'
  },
  {
    id: 'recovery-mode',
    term: 'Recovery Mode',
    slug: 'recovery-mode',
    definition: 'System repair. A special boot mode on Android devices that can be used to repair and restore the system.',
    example: 'He booted into recovery mode to wipe the cache partition and factory reset the device.'
  },
  {
    id: 'twrp',
    term: 'TWRP',
    slug: 'twrp',
    definition: 'Custom recovery. An open-source, community-developed custom recovery for Android-based devices.',
    example: 'He installed TWRP, a custom recovery, which allowed him to easily back up and restore his phone\'s OS.'
  },
  {
    id: 'rom',
    term: 'ROM',
    slug: 'rom',
    definition: 'OS image. A file containing the executable instructions of a computer program.',
    example: 'He downloaded the latest stock ROM for his phone to revert to the factory software.'
  },
  {
    id: 'custom-rom',
    term: 'Custom ROM',
    slug: 'custom-rom',
    definition: 'Modified OS. A modified version of an operating system for a mobile device.',
    example: 'He installed a custom ROM like LineageOS to get a cleaner version of Android on his phone.'
  },
  {
    id: 'kernel',
    term: 'Kernel',
    slug: 'kernel',
    definition: 'OS core. The core of a computer\'s operating system, with complete control over everything in the system.',
    example: 'A buggy driver can cause a kernel panic, crashing the entire system.'
  },
  {
    id: 'scheduler',
    term: 'Scheduler',
    slug: 'scheduler',
    definition: 'Process allocator. A part of the operating system that decides which process runs at a certain point in time.',
    example: 'The OS scheduler decides which process gets to use the CPU at any given moment.'
  },
  {
    id: 'heap',
    term: 'Heap',
    slug: 'heap',
    definition: 'Memory region. A region of a computer\'s memory used for dynamic memory allocation.',
    example: 'In C++, objects created with the `new` keyword are allocated on the heap.'
  },
  {
    id: 'stack',
    term: 'Stack',
    slug: 'stack',
    definition: 'Process stack. A region of a computer\'s memory that stores temporary variables created by each function.',
    example: 'Local variables in a function are typically stored on the stack.'
  },
  {
    id: 'thread',
    term: 'Thread',
    slug: 'thread',
    definition: 'Light process. The smallest sequence of programmed instructions that can be managed independently by a scheduler.',
    example: 'The application used multiple threads to perform several tasks concurrently.'
  },
  {
    id: 'dead-mutex',
    term: 'Dead Mutex',
    slug: 'dead-mutex',
    definition: 'A situation where a thread holding a mutex terminates without releasing it.',
    example: 'The application froze due to a dead mutex situation.'
  },
  {
    id: 'interrupt',
    term: 'Interrupt',
    slug: 'interrupt',
    definition: 'Hardware signal. A signal to the processor emitted by hardware or software indicating an event that needs immediate attention.',
    example: 'When you press a key, the keyboard controller sends an interrupt to the CPU.'
  },
  {
    id: 'boot-sector',
    term: 'Boot Sector',
    slug: 'boot-sector',
    definition: 'Startup code. The sector on a persistent data storage device which contains machine code to be loaded into random-access memory (RAM) and then executed.',
    example: 'A virus had infected the boot sector, preventing the OS from loading.'
  },
  {
    id: 'initramfs',
    term: 'Initramfs',
    slug: 'initramfs',
    definition: 'Boot RAM filesystem. A cpio archive of the initial file system that gets loaded into memory during the Linux startup process.',
    example: 'The initramfs contains the necessary drivers and tools to mount the real root filesystem during the Linux boot process.'
  },
  {
    id: 'swapfile',
    term: 'Swapfile',
    slug: 'swapfile',
    definition: 'Virtual RAM. A file on a hard disk that is used as virtual memory.',
    example: 'Instead of a dedicated swap partition, he used a swapfile for virtual memory.'
  },
  {
    id: 'paging',
    term: 'Paging',
    slug: 'paging',
    definition: 'Memory swap. A memory management scheme by which a computer stores and retrieves data from secondary storage for use in main memory.',
    example: 'Paging is the process of moving data between RAM and the swap space on disk.'
  },
  {
    id: 'buffers',
    term: 'Buffers',
    slug: 'buffers',
    definition: 'Temp data zones. A region of a physical memory storage used to temporarily store data while it is being moved from one place to another.',
    example: 'The kernel uses buffers to temporarily store data being read from or written to disk.'
  },
  {
    id: 'fpu',
    term: 'FPU',
    slug: 'fpu',
    definition: 'Floating Point Unit. A part of a computer system specially designed to carry out operations on floating-point numbers.',
    example: 'The FPU is a specialized part of the CPU designed to handle mathematical operations on floating-point numbers.'
  },
  {
    id: 'isa',
    term: 'ISA',
    slug: 'isa',
    definition: 'Instruction Set. The part of the computer architecture related to programming, including the native data types, instructions, registers, addressing modes, memory architecture, interrupt and exception handling, and external I/O.',
    example: 'x86 and ARM are the two most common Instruction Set Architectures in modern computing.'
  },
  {
    id: 'mmu',
    term: 'MMU',
    slug: 'mmu',
    definition: 'Memory Manager. A computer hardware unit having all memory references passed through itself, primarily performing the translation of virtual memory addresses to physical addresses.',
    example: 'The Memory Management Unit (MMU) is responsible for translating virtual memory addresses to physical addresses.'
  },
  {
    id: 'tlb',
    term: 'TLB',
    slug: 'tlb',
    definition: 'Translation Lookaside Buffer. A memory cache that is used to reduce the time taken to access a user memory location.',
    example: 'The TLB is a cache within the MMU that stores recent virtual-to-physical address translations to speed up memory access.'
  },
  {
    id: 'smt',
    term: 'SMT',
    slug: 'smt',
    definition: 'Simultaneous multithreading. A technique for improving the overall efficiency of superscalar CPUs with hardware multithreading.',
    example: 'Intel\'s Hyper-Threading is a form of SMT, allowing one physical core to act as two logical cores.'
  },
  {
    id: 'big-little',
    term: 'Big.Little',
    slug: 'big-little',
    definition: 'Hybrid CPU. A heterogeneous computing architecture developed by ARM Holdings, coupling relatively battery-saving and slower processor cores with relatively more powerful and power-hungry ones.',
    example: 'ARM\'s big.LITTLE architecture combines high-performance "big" cores with energy-efficient "little" cores.'
  },
  {
    id: 'benchmark',
    term: 'Benchmark',
    slug: 'benchmark',
    definition: 'Performance test. The act of running a computer program, a set of programs, or other operations, in order to assess the relative performance of an object, normally by running a number of standard tests and trials against it.',
    example: 'He ran a series of benchmarks to compare the performance of the two CPUs.'
  },
  {
    id: 'cinebench',
    term: 'Cinebench',
    slug: 'cinebench',
    definition: 'CPU benchmark. A cross-platform test suite which tests a computer\'s performance capabilities.',
    example: 'Cinebench is a popular benchmark for measuring a CPU\'s multi-core rendering performance.'
  },
  {
    id: '3dmark',
    term: '3DMark',
    slug: '3dmark',
    definition: 'GPU benchmark. A computer benchmarking tool created and developed by UL, to determine the performance of a computer\'s 3D graphic rendering and CPU workload processing capabilities.',
    example: 'He used 3DMark to test his GPU\'s gaming performance.'
  },
  {
    id: 'furmark',
    term: 'Furmark',
    slug: 'furmark',
    definition: 'Stress test. A very intensive GPU stress test on Windows platform.',
    example: 'FurMark is a very intensive GPU stress test, often called a "power virus" for its ability to push GPUs to their absolute limit.'
  },
  {
    id: 'memtest86',
    term: 'Memtest86',
    slug: 'memtest86',
    definition: 'RAM test. A memory test software program designed to test and stress test an x86 architecture computer\'s random-access memory (RAM) for errors.',
    example: 'He ran Memtest86 overnight to check his new RAM for errors.'
  },
  {
    id: 'power-plan',
    term: 'Power Plan',
    slug: 'power-plan',
    definition: 'System power profile. A collection of hardware and system settings that manages how your computer uses power.',
    example: 'He switched to the "High Performance" power plan before starting his gaming session.'
  },
  {
    id: 'overvolt',
    term: 'Overvolt',
    slug: 'overvolt',
    definition: 'Increase voltage. The practice of increasing the voltage of a component to allow for higher clock speeds.',
    example: 'He had to overvolt the CPU slightly to get it stable at the higher clock speed, which increased heat output.'
  },
  {
    id: 'curve-optimizer',
    term: 'Curve Optimizer',
    slug: 'curve-optimizer',
    definition: 'Voltage curve. A feature in AMD\'s Precision Boost Overdrive that allows for advanced undervolting.',
    example: 'AMD\'s Precision Boost Overdrive includes a Curve Optimizer feature that allows for advanced undervolting.'
  },
  {
    id: 'safe-mode',
    term: 'Safe Mode',
    slug: 'safe-mode',
    definition: 'Limited boot. A diagnostic mode of a computer operating system.',
    example: 'He booted into Safe Mode to uninstall the faulty driver that was causing the system to crash.'
  },
  {
    id: 'bios-flash',
    term: 'BIOS Flash',
    slug: 'bios-flash',
    definition: 'Firmware update. The process of updating the BIOS firmware of a motherboard.',
    example: 'He performed a BIOS flash to update his motherboard\'s firmware to the latest version.'
  },
  {
    id: 'cmos-reset',
    term: 'CMOS Reset',
    slug: 'cmos-reset',
    definition: 'BIOS clear. The process of clearing the CMOS memory on a motherboard to reset the BIOS settings to their factory defaults.',
    example: 'After a failed overclock, he had to perform a CMOS reset by shorting two pins on the motherboard.'
  },
  {
    id: 'debug-led',
    term: 'Debug LED',
    slug: 'debug-led',
    definition: 'POST indicator. A set of small lights on a motherboard that indicate the status of the CPU, RAM, GPU, and boot devices during the POST sequence.',
    example: 'The debug LEDs stopped at "DRAM," indicating a problem with the memory sticks.'
  },
  {
    id: 'core-dump',
    term: 'Core Dump',
    slug: 'core-dump',
    definition: 'Memory snapshot. A file containing the memory image of a running process.',
    example: 'The application generated a core dump when it crashed, which the developers used to debug the issue.'
  },
  {
    id: 'minidump',
    term: 'Minidump',
    slug: 'minidump',
    definition: 'Small crash dump. A file containing a subset of the information in a full crash dump.',
    example: 'Windows creates a minidump file after a blue screen, which contains basic information about the crash.'
  },
  {
    id: 'event-viewer',
    term: 'Event Viewer',
    slug: 'event-viewer',
    definition: 'Windows logs. A component of Microsoft\'s Windows NT line of operating systems that lets administrators and users view the event logs on a local or remote machine.',
    example: 'He checked the Event Viewer to find the error code related to the application crash.'
  },
  {
    id: 'pnp',
    term: 'PnP',
    slug: 'pnp',
    definition: 'Plug and Play. A standard for the connection of peripherals to personal computers.',
    example: 'Modern USB devices are Plug and Play, meaning they work as soon as you connect them without needing manual driver installation.'
  },
  {
    id: 'hotplug',
    term: 'Hotplug',
    slug: 'hotplug',
    definition: 'Plug during power. The ability to add or remove devices from a computer system while it is running.',
    example: 'USB and SATA devices support hotplugging, allowing you to connect and disconnect them while the system is running.'
  },
  {
    id: 'irq',
    term: 'IRQ',
    slug: 'irq',
    definition: 'Interrupt request. A signal from a device to the CPU to get its attention.',
    example: 'In the days of legacy hardware, IRQ conflicts were a common source of frustration.'
  },
  {
    id: 'dma',
    term: 'DMA',
    slug: 'dma',
    definition: 'Direct memory access. A feature of computer systems that allows certain hardware subsystems to access main system memory (RAM) independently of the central processing unit (CPU).',
    example: 'DMA allows hardware devices to access main system memory directly, without involving the CPU.'
  },
  {
    id: 'bus-speed',
    term: 'Bus Speed',
    slug: 'bus-speed',
    definition: 'Transfer speed. The speed at which data can be transferred on a computer bus.',
    example: 'The front-side bus speed was a critical performance factor in older PCs.'
  },
  {
    id: 'latency-timer',
    term: 'Latency Timer',
    slug: 'latency-timer',
    definition: 'Access delay. A setting that determines how long a PCI device can hold the bus before another device gets a turn.',
    example: 'Adjusting the PCI latency timer was a common tweak for optimizing performance on older systems.'
  },
  {
    id: 'bottleneck',
    term: 'Bottleneck',
    slug: 'bottleneck',
    definition: 'System limiter. A point of congestion in a system that limits its overall performance.',
    example: 'The old hard drive was the bottleneck; despite a fast CPU, applications loaded slowly.'
  },
  {
    id: 'throttle',
    term: 'Throttle',
    slug: 'throttle',
    definition: 'Reduce performance. To reduce the speed of a component to prevent it from overheating.',
    example: 'The CPU will throttle itself if it gets too hot to prevent damage.'
  },
  {
    id: 'power-limit',
    term: 'Power Limit',
    slug: 'power-limit',
    definition: 'Watt limit. A setting that determines the maximum amount of power a component is allowed to consume.',
    example: 'He increased the GPU\'s power limit to allow for higher boost clocks.'
  },
  {
    id: 'pl1-pl2',
    term: 'PL1/PL2',
    slug: 'pl1-pl2',
    definition: 'CPU power stages. Power limits for Intel CPUs.',
    example: 'Intel CPUs have a short-term power limit (PL2) and a long-term power limit (PL1).'
  },
  {
    id: 'vdroop',
    term: 'Vdroop',
    slug: 'vdroop',
    definition: 'Voltage drop. The decrease in voltage to a CPU as it goes from an idle to a high-load state.',
    example: 'Vdroop is the natural decrease in voltage to a CPU as it goes from an idle to a high-load state.'
  },
  {
    id: 'load-line',
    term: 'Load Line',
    slug: 'load-line',
    definition: 'Power calibration. A BIOS setting used to counteract Vdroop and provide more stable voltage to the CPU under load.',
    example: 'Load-Line Calibration is a BIOS setting used to counteract Vdroop and provide more stable voltage to the CPU under load.'
  },
  {
    id: 'soc-voltage',
    term: 'SOC Voltage',
    slug: 'soc-voltage',
    definition: 'SoC Voltage. The voltage supplied to the System on a Chip components of a CPU.',
    example: 'Increasing the SOC voltage can help stabilize a high-speed memory overclock.'
  },
  {
    id: 'nb-voltage',
    term: 'NB Voltage',
    slug: 'nb-voltage',
    definition: 'Northbridge voltage. The voltage supplied to the northbridge chipset on a motherboard.',
    example: 'On older motherboards, increasing the Northbridge voltage was sometimes necessary for system stability when overclocking.'
  },
  {
    id: 'sb-voltage',
    term: 'SB Voltage',
    slug: 'sb-voltage',
    definition: 'Southbridge voltage. The voltage supplied to the southbridge chipset on a motherboard.',
    example: 'The Southbridge controller handles the slower I/O devices, and its voltage is typically not adjusted.'
  },
  {
    id: 'qd1',
    term: 'QD1',
    slug: 'qd1',
    definition: 'Queue Depth 1 test. A benchmark that measures the performance of a storage device at a queue depth of 1.',
    example: 'An SSD\'s performance at Queue Depth 1 is a good indicator of its real-world responsiveness.'
  },
  {
    id: 'chunk-size',
    term: 'Chunk Size',
    slug: 'chunk-size',
    definition: 'Data size. The size of a block of data.',
    example: 'He configured the backup software to use a larger chunk size to improve transfer speed.'
  },
  {
    id: 'block-size',
    term: 'Block Size',
    slug: 'block-size',
    definition: 'Storage block. The size of a block in a file system.',
    example: 'He formatted the file system with a larger block size to optimize it for storing large video files.'
  },
  {
    id: 'sector',
    term: 'Sector',
    slug: 'sector',
    definition: 'Disk segment. A subdivision of a track on a magnetic disk or optical disc.',
    example: 'A bad sector on the hard drive was causing data corruption.'
  },
  {
    id: 'partition-table',
    term: 'Partition Table',
    slug: 'partition-table',
    definition: 'Disk layout. A table on a hard disk or solid-state drive that describes the partitions on that disk.',
    example: 'The partition table was corrupted, making the drive unreadable.'
  },
  {
    id: 'chs',
    term: 'CHS',
    slug: 'chs',
    definition: 'Cylinder-head-sector. A method for giving addresses to data on a hard disk.',
    example: 'CHS addressing is an older method for giving addresses to data on a hard disk.'
  },
  {
    id: 'smart-flags',
    term: 'S.M.A.R.T Flags',
    slug: 'smart-flags',
    definition: 'Drive warnings. Attributes of a hard disk or solid-state drive that can be used to predict its reliability.',
    example: 'The S.M.A.R.T. flags reported an increase in reallocated sectors, a sign the drive was starting to fail.'
  },
  {
    id: 'trim',
    term: 'TRIM',
    slug: 'trim',
    definition: 'SSD cleanup. A command that allows an operating system to inform a solid-state drive which blocks of data are no longer in use.',
    example: 'The TRIM command allows an operating system to inform an SSD which blocks of data are no longer in use, which helps maintain performance.'
  },
  {
    id: 'overprovision',
    term: 'Overprovision',
    slug: 'overprovision',
    definition: 'Spare SSD space. The practice of reserving a portion of an SSD\'s capacity to improve its performance and longevity.',
    example: 'Enterprise SSDs often have a higher amount of overprovisioning.'
  },
  {
    id: 'temp-sensor',
    term: 'Temp Sensor',
    slug: 'temp-sensor',
    definition: 'Heat sensor. A device that measures temperature.',
    example: 'The temp sensor on the motherboard reported that the chipset was running a bit hot.'
  },
  {
    id: 'bus-width',
    term: 'Bus Width',
    slug: 'bus-width',
    definition: 'Data lines. The number of bits that can be sent to the CPU simultaneously.',
    example: 'A graphics card with a wider memory bus width can transfer more data at once.'
  },
  {
    id: 'chipset',
    term: 'Chipset',
    slug: 'chipset',
    definition: 'Controller family. A set of electronic components in an integrated circuit known as a "Data Flow Management System" that manages the data flow between the processor, memory and peripherals.',
    example: 'He chose a motherboard with the Z790 chipset to get the best features for his Intel CPU.'
  },
  {
    id: 'module',
    term: 'Module',
    slug: 'module',
    definition: 'Component part. A self-contained unit of a larger system.',
    example: 'He installed the Wi-Fi module into the M.2 slot on the motherboard.'
  },
  {
    id: 'header',
    term: 'Header',
    slug: 'header',
    definition: 'Pin connector. A connector on a printed circuit board.',
    example: 'He plugged the case fan into the 4-pin fan header on the motherboard.'
  },
  {
    id: 'jumper',
    term: 'Jumper',
    slug: 'jumper',
    definition: 'Config pin. A short length of conductor used to close, open or bypass part of an electronic circuit.',
    example: 'He had to move a jumper on the motherboard to clear the CMOS.'
  },
  {
    id: 'standoff',
    term: 'Standoff',
    slug: 'standoff',
    definition: 'Case spacer. A threaded separator of defined length used to raise one assembly above another.',
    example: 'He installed the brass standoffs in the case before mounting the motherboard.'
  },
  {
    id: 'mesh-panel',
    term: 'Mesh Panel',
    slug: 'mesh-panel',
    definition: 'Airflow grill. A panel with a mesh pattern designed to allow for better airflow.',
    example: 'He chose a case with a mesh front panel for better airflow.'
  },
  {
    id: 'backplate',
    term: 'Backplate',
    slug: 'backplate',
    definition: 'GPU plate. A metal plate attached to the back of a graphics card\'s PCB.',
    example: 'The GPU backplate helps with cooling and provides structural rigidity.'
  },
  {
    id: 'shroud',
    term: 'Shroud',
    slug: 'shroud',
    definition: 'GPU cover. The plastic or metal casing around a graphics card\'s heatsink and fans.',
    example: 'He painted the GPU shroud white to match his build\'s color scheme.'
  },
  {
    id: 'fan-hub',
    term: 'Fan Hub',
    slug: 'fan-hub',
    definition: 'Fan splitter. A device that allows multiple fans to be connected to a single motherboard fan header.',
    example: 'He used a fan hub to control all six of his case fans.'
  },
  {
    id: 'molex',
    term: 'Molex',
    slug: 'molex',
    definition: 'Legacy power plug. A 4-pin power connector used to power various components in a computer.',
    example: 'He needed a SATA to Molex adapter to power the old case fan.'
  },
  {
    id: 'daisy-chain',
    term: 'Daisy Chain',
    slug: 'daisy-chain',
    definition: 'Serial connection. A wiring scheme in which multiple devices are wired together in sequence or in a ring.',
    example: 'He daisy-chained the RGB fans together to simplify the cable management.'
  },
  {
    id: 'pwm',
    term: 'PWM',
    slug: 'pwm',
    definition: 'Fan control. Pulse Width Modulation is a technique for controlling the speed of a fan.',
    example: 'He set the fan header to PWM mode in the BIOS for more precise fan control.'
  },
  {
    id: 'dc-mode',
    term: 'DC Mode',
    slug: 'dc-mode',
    definition: 'Voltage control. A mode for controlling the speed of a fan by adjusting the voltage.',
    example: 'He set the fan header to DC mode in the BIOS to control his 3-pin fans.'
  },
  {
    id: 'bios-lock',
    term: 'BIOS Lock',
    slug: 'bios-lock',
    definition: 'Firmware protect. A feature that prevents the BIOS from being updated.',
    example: 'Some manufacturers implement a BIOS lock to prevent users from flashing unauthorized or custom firmware.'
  },
  {
    id: 'tpm-2-0',
    term: 'TPM',
    slug: 'tpm-2-0',
    definition: 'Trusted module. A secure cryptoprocessor that provides hardware-based security functions.',
    example: 'Windows 11 requires a TPM 2.0 module for its enhanced security features.'
  },
  {
    id: 'kernel-mode',
    term: 'Kernel Mode',
    slug: 'kernel-mode',
    definition: 'OS core mode. A privileged mode of operation in which the operating system kernel runs.',
    example: 'Device drivers run in kernel mode, giving them direct access to hardware.'
  },
  {
    id: 'user-mode',
    term: 'User Mode',
    slug: 'user-mode',
    definition: 'App mode. A non-privileged mode of operation in which user applications run.',
    example: 'Applications run in user mode, which is a restricted environment that protects the OS from crashes.'
  },
  {
    id: 'runtime',
    term: 'Runtime',
    slug: 'runtime',
    definition: 'Execution environment. The environment in which a program is executed.',
    example: 'Node.js is a runtime environment that allows you to run JavaScript on the server.'
  },
  {
    id: 'build',
    term: 'Build',
    slug: 'build',
    definition: 'Software compile. The process of converting source code into a standalone form that can be run on a computer.',
    example: 'The CI pipeline will kick off a new build every time code is committed.'
  },
  {
    id: 'snapshot-save',
    term: 'Snapshot',
    slug: 'snapshot-save',
    definition: 'Save state. A copy of the state of a system at a particular point in time.',
    example: 'He took a snapshot of the virtual machine before applying the update.'
  },
  {
    id: 'hotfix',
    term: 'Hotfix',
    slug: 'hotfix',
    definition: 'Immediate patch. A small piece of code created to address a specific bug or critical issue.',
    example: 'They deployed a hotfix to patch the security vulnerability.'
  },
  {
    id: 'rollback',
    term: 'Rollback',
    slug: 'rollback',
    definition: 'Restore previous. The process of restoring a system to a previous state.',
    example: 'They had to perform a rollback to the previous version after the deployment failed.'
  },
  {
    id: 'breakpoint',
    term: 'Breakpoint',
    slug: 'breakpoint',
    definition: 'Debug stop. A point in a program where the execution will be stopped for debugging purposes.',
    example: 'He set a breakpoint in the code to inspect the value of the variable at that specific line.'
  },
  {
    id: 'profiler',
    term: 'Profiler',
    slug: 'profiler',
    definition: 'Performance monitor. A tool that analyzes a program\'s performance to identify bottlenecks.',
    example: 'He used a profiler to find the slow parts of his application.'
  },
  {
    id: 'observer',
    term: 'Observer',
    slug: 'observer',
    definition: 'Listener pattern. A software design pattern in which an object, called the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes.',
    example: 'He implemented the observer pattern so that multiple parts of the UI could be notified when the data changed.'
  },
  {
    id: 'dependency-tree',
    term: 'Dependency Tree',
    slug: 'dependency-tree',
    definition: 'Package hierarchy. A tree structure that represents the dependencies of a software project.',
    example: 'He analyzed the dependency tree to find out why the library was being included in his project.'
  },
  {
    id: 'stub-file',
    term: 'Stub File',
    slug: 'stub-file',
    definition: 'Placeholder file. A file that contains the signatures of the functions and classes of a library, but not their implementation.',
    example: 'The type checker used a stub file to provide type information for the library that was written in plain JavaScript.'
  },
  {
    id: 'schema',
    term: 'Schema',
    slug: 'schema',
    definition: 'Data structure. A representation of a plan or theory in the form of an outline or model.',
    example: 'He defined the database schema before writing any code.'
  },
  {
    id: 'query',
    term: 'Query',
    slug: 'query',
    definition: 'Database request. A request for data or information from a database.',
    example: 'He wrote a SQL query to fetch all the users from the database.'
  },
  {
    id: 'cursor',
    term: 'Cursor',
    slug: 'cursor',
    definition: 'DB pointer. A control structure that enables traversal over the records in a database.',
    example: 'He used a database cursor to iterate through the millions of rows in the result set without loading them all into memory.'
  },
  {
    id: 'commit-db',
    term: 'Commit',
    slug: 'commit-db',
    definition: 'Save transaction. The process of making a set of tentative changes permanent.',
    example: 'After the series of updates, he issued a COMMIT to make the changes permanent.'
  },
  {
    id: 'rollback-db',
    term: 'Rollback',
    slug: 'rollback-db',
    definition: 'Undo transaction. The process of restoring a database to a previously defined state.',
    example: 'An error occurred, so the entire database transaction was rolled back.'
  },
  {
    id: 'dead-tuple',
    term: 'Dead Tuple',
    slug: 'dead-tuple',
    definition: 'Unused DB row. A row in a database that has been deleted but not yet physically removed from the disk.',
    example: 'PostgreSQL\'s vacuum process is responsible for cleaning up dead tuples.'
  },
  {
    id: 'index-scan',
    term: 'Index Scan',
    slug: 'index-scan',
    definition: 'DB search. A method of accessing data in a database by using an index.',
    example: 'The query was fast because the database was able to perform an index scan instead of a full table scan.'
  },
  {
    id: 'full-scan',
    term: 'Full Scan',
    slug: 'full-scan',
    definition: 'Full-table scan. A method of accessing data in a database by reading every row in a table.',
    example: 'The query was slow because it had to do a full scan of the massive table.'
  },
  {
    id: 'replication',
    term: 'Replication',
    slug: 'replication',
    definition: 'DB copy. The process of sharing information so as to ensure consistency between redundant resources, such as software or hardware components, to improve reliability, fault-tolerance, or accessibility.',
    example: 'They set up database replication to a read-only replica to handle analytical queries.'
  },
  {
    id: 'failover-db',
    term: 'Failover',
    slug: 'failover-db',
    definition: 'DB auto-switch. The process of switching to a redundant or standby computer server, system, hardware component or network upon the failure or abnormal termination of the previously active application, server, system, hardware component, or network.',
    example: 'With automatic failover configured, the replica database was promoted to primary within seconds of the original failing.'
  },
  {
    id: 'hot-backup',
    term: 'Hot Backup',
    slug: 'hot-backup',
    definition: 'Live backup. A backup of a database while it is running.',
    example: 'He took a hot backup of the database without having to take it offline.'
  },
  {
    id: 'cold-backup',
    term: 'Cold Backup',
    slug: 'cold-backup',
    definition: 'Offline backup. A backup of a database while it is not running.',
    example: 'For a cold backup, the database must be shut down to ensure a consistent copy.'
  },
  {
    id: 'seed-node',
    term: 'Seed Node',
    slug: 'seed-node',
    definition: 'Initial node. A node in a peer-to-peer network that is used to bootstrap new nodes.',
    example: 'The new node in the cluster contacted a seed node to discover the other members.'
  },
  {
    id: 'leader-node',
    term: 'Leader Node',
    slug: 'leader-node',
    definition: 'Primary server. A node in a cluster that is responsible for coordinating the other nodes.',
    example: 'In the Raft consensus algorithm, the leader node is responsible for handling all client requests.'
  },
  {
    id: 'worker-node',
    term: 'Worker Node',
    slug: 'worker-node',
    definition: 'Secondary server. A node in a cluster that performs work.',
    example: 'The Kubernetes cluster was made up of 10 worker nodes.'
  },
  {
    id: 'health-check',
    term: 'Health Check',
    slug: 'health-check',
    definition: 'Status test. A check to determine if a system is running correctly.',
    example: 'The load balancer performed a health check on the servers every 30 seconds.'
  },
  {
    id: 'logs',
    term: 'Logs',
    slug: 'logs',
    definition: 'System events. A record of events that occur in a computer system.',
    example: 'He checked the server logs to find the cause of the error.'
  },
  {
    id: 'metrics',
    term: 'Metrics',
    slug: 'metrics',
    definition: 'System numbers. Measurements of a system\'s performance and behavior.',
    example: 'He monitored the system metrics to ensure it was running smoothly.'
  },
  {
    id: 'telemetry',
    term: 'Telemetry',
    slug: 'telemetry',
    definition: 'System reporting. The collection of measurements or other data at remote or inaccessible points and their automatic transmission to receiving equipment for monitoring.',
    example: 'The application sent telemetry data back to the developers to help them improve the product.'
  },
  {
    id: 'trigger',
    term: 'Trigger',
    slug: 'trigger',
    definition: 'Auto-action. An event that causes a function to be executed.',
    example: 'He set up a trigger to automatically back up the database every night.'
  },
  {
    id: 'hook',
    term: 'Hook',
    slug: 'hook',
    definition: 'Event listener. A mechanism by which a program can intercept events or messages.',
    example: 'He used a webhook to get a notification in Slack whenever a new user signed up.'
  }
];

