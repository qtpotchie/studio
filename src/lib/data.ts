
export type Term = {
  id: string;
  term: string;
  slug: string;
  meaning?: string;
  definition: string;
  example: string;
};

export const terms: Term[] = [
  {
    id: 'acl',
    term: 'ACL',
    slug: 'acl',
    meaning: 'Access Control List',
    definition: 'A list of permissions attached to an object, specifying which users or systems are granted access to it, as well as what operations are allowed.',
    example: 'The network administrator configured the router\'s ACL to block all traffic from unknown IP addresses to enhance security.'
  },
  {
    id: 'acpi',
    term: 'ACPI',
    slug: 'acpi',
    meaning: 'Advanced Configuration and Power Interface',
    definition: 'A standard for device configuration and power management by the operating system.',
    example: 'Modern laptops use ACPI to manage power states, like sleeping and hibernating, to conserve battery life.'
  },
  {
    id: 'adb',
    term: 'ADB',
    slug: 'adb',
    meaning: 'Android Debug Bridge',
    definition: 'A command-line tool that lets you communicate with an Android device to install and debug apps.',
    example: 'The developer used ADB to push the new APK to the test phone and view the application logs in real-time.'
  },
  {
    id: 'aes',
    term: 'AES',
    slug: 'aes',
    meaning: 'Advanced Encryption Standard',
    definition: 'A widely used symmetric encryption algorithm to secure data.',
    example: 'Wi-Fi networks use WPA2 security, which relies on AES to encrypt the data transmitted between your device and the router.'
  },
  {
    id: 'agp',
    term: 'AGP',
    slug: 'agp',
    meaning: 'Accelerated Graphics Port',
    definition: 'A high-speed point-to-point channel for attaching a video card to a computer\'s motherboard, primarily to assist in the acceleration of 3D computer graphics. It is a legacy standard.',
    example: 'Before PCIe became the standard, high-end video cards used the AGP slot for the best graphics performance.'
  },
  {
    id: 'aio',
    term: 'AIO',
    slug: 'aio',
    meaning: 'All-in-One',
    definition: 'A computer or device that integrates the internal components into the same case as the display, eliminating the need for a separate computer tower.',
    example: 'The office purchased AIO desktops to save space and reduce cable clutter at each workstation.'
  },
  {
    id: 'aix',
    term: 'AIX',
    slug: 'aix',
    definition: 'A series of proprietary Unix operating systems developed and sold by IBM for several of its computer platforms.',
    example: 'Many large enterprise systems in finance and banking run on servers powered by the AIX operating system due to its stability.'
  },
  {
    id: 'ajax',
    term: 'AJAX',
    slug: 'ajax',
    meaning: 'Asynchronous JavaScript and XML',
    definition: 'A technique for creating fast and dynamic web pages by allowing the web page to update parts of its content without reloading the whole page.',
    example: 'When you type in a search bar and see suggestions appear instantly, that is often accomplished using AJAX requests.'
  },
  {
    id: 'alu',
    term: 'ALU',
    slug: 'alu',
    meaning: 'Arithmetic Logic Unit',
    definition: 'A digital circuit within a CPU that performs arithmetic and bitwise logic operations on integer binary numbers.',
    example: 'The CPU\'s ALU is responsible for carrying out all the mathematical calculations, like addition and subtraction.'
  },
  {
    id: 'amd-v',
    term: 'AMD-V',
    slug: 'amd-v',
    meaning: 'AMD Virtualization',
    definition: 'The name for AMD\'s hardware virtualization extensions for the x86 architecture, which enables running multiple operating systems on a single machine.',
    example: 'To run a virtual machine efficiently on his AMD-powered PC, he had to first enable AMD-V in the BIOS settings.'
  },
  {
    id: 'ami-bios',
    term: 'AMI BIOS',
    slug: 'ami-bios',
    meaning: 'American Megatrends Inc. BIOS',
    definition: 'A type of firmware used to perform hardware initialization during the booting process on many PC motherboards.',
    example: 'When the computer started, he pressed the DEL key to enter the AMI BIOS setup screen and change the boot order.'
  },
  {
    id: 'amp',
    term: 'AMP',
    slug: 'amp',
    meaning: 'Accelerated Mobile Pages',
    definition: 'An open-source HTML framework developed by Google to optimize web pages for mobile browsing, making them load faster.',
    example: 'News articles with a lightning bolt symbol in Google search results are often AMP pages, designed for a quick reading experience on mobile.'
  },
  {
    id: 'ansible',
    term: 'Ansible',
    slug: 'ansible',
    definition: 'An open-source software provisioning, configuration management, and application-deployment tool.',
    example: 'The DevOps team used an Ansible playbook to automate the configuration of 100 new web servers simultaneously.'
  },
  {
    id: 'ansi',
    term: 'ANSI',
    slug: 'ansi',
    meaning: 'American National Standards Institute',
    definition: 'A private non-profit organization that oversees the development of voluntary consensus standards for products, services, processes, systems, and personnel in the United States.',
    example: 'The ANSI SQL standard ensures that basic SQL commands work consistently across different database systems.'
  },
  {
    id: 'api-gateway',
    term: 'API Gateway',
    slug: 'api-gateway',
    definition: 'A server that acts as a single entry point for a group of microservices, handling requests by routing them to the appropriate service.',
    example: 'Instead of having clients call a dozen different microservices, they all go through the API Gateway, which simplifies authentication and logging.'
  },
  {
    id: 'apipa',
    term: 'APIPA',
    slug: 'apipa',
    meaning: 'Automatic Private IP Addressing',
    definition: 'A feature in operating systems that automatically assigns an IP address to a device when a DHCP server is not available.',
    example: 'My computer couldn\'t connect to the Wi-Fi router, so it got an APIPA address starting with 169.254.x.x.'
  },
  {
    id: 'apk',
    term: 'APK',
    slug: 'apk',
    meaning: 'Android Package Kit',
    definition: 'The file format used by the Android operating system for the distribution and installation of mobile apps.',
    example: 'To install the beta version of the app, he had to download the APK file directly from the developer\'s website.'
  },
  {
    id: 'apm',
    term: 'APM',
    slug: 'apm',
    meaning: 'Application Performance Monitoring',
    definition: 'The practice of monitoring and managing the performance, availability, and user experience of software applications.',
    example: 'The team used an APM tool to identify that a slow database query was causing the entire application to lag.'
  },
  {
    id: 'apt',
    term: 'APT',
    slug: 'apt',
    meaning: 'Advanced Package Tool',
    definition: 'The command-line package manager used by Debian and its derivatives like Ubuntu to handle the installation and removal of software.',
    example: 'He opened the terminal and typed `sudo apt update` to refresh the list of available software packages.'
  },
  {
    id: 'arp',
    term: 'ARP',
    slug: 'arp',
    meaning: 'Address Resolution Protocol',
    definition: 'A communication protocol used for discovering the hardware address (MAC address) associated with a given internet layer address (IP address).',
    example: 'When your computer wants to send data to another device on the local network, it first sends out an ARP request to find its MAC address.'
  },
  {
    id: 'aslr',
    term: 'ASLR',
    slug: 'aslr',
    meaning: 'Address Space Layout Randomization',
    definition: 'A computer security technique which involves randomly arranging the positions of key data areas in a process\'s memory space.',
    example: 'Modern operating systems use ASLR to make it much harder for attackers to execute buffer overflow attacks successfully.'
  },
  {
    id: 'ata',
    term: 'ATA',
    slug: 'ata',
    meaning: 'Advanced Technology Attachment',
    definition: 'A standard interface for connecting storage devices such as hard disk drives, and CD-ROM drives inside personal computers.',
    example: 'The older computer had two hard drives connected to the motherboard using wide, flat ATA ribbon cables.'
  },
  {
    id: 'atx',
    term: 'ATX',
    slug: 'atx',
    meaning: 'Advanced Technology eXtended',
    definition: 'A motherboard and power supply configuration specification developed by Intel to improve on previous standards.',
    example: 'He built his new gaming PC using a standard ATX motherboard, which offered plenty of slots for expansion.'
  },
  {
    id: 'autosar',
    term: 'AUTOSAR',
    slug: 'autosar',
    meaning: 'AUTomotive Open System ARchitecture',
    definition: 'A global development partnership of automotive interested parties working on an open and standardized software architecture for automotive ECUs.',
    example: 'Modern cars rely on the AUTOSAR standard to ensure that software from different suppliers can work together seamlessly.'
  },
  {
    id: 'awk',
    term: 'awk',
    slug: 'awk',
    definition: 'A domain-specific language designed for text processing and typically used as a data extraction and reporting tool on Unix-like operating systems.',
    example: 'She used a one-line `awk` script to parse the log file and print only the lines containing an error message.'
  },
  {
    id: 'b-tree',
    term: 'B-Tree',
    slug: 'b-tree',
    definition: 'A self-balancing tree data structure that maintains sorted data and allows for searches, sequential access, insertions, and deletions in logarithmic time.',
    example: 'Databases and file systems use B-Tree indexes to quickly find data on disk without having to read the entire file.'
  },
  {
    id: 'b2b',
    term: 'B2B',
    slug: 'b2b',
    meaning: 'Business-to-Business',
    definition: 'Refers to transactions or business conducted between two businesses, such as a wholesaler and a retailer.',
    example: 'The software company focused on the B2B market, selling their accounting software directly to other companies.'
  },
  {
    id: 'b2c',
    term: 'B2C',
    slug: 'b2c',
    meaning: 'Business-to-Consumer',
    definition: 'Refers to the process of selling products and services directly between a business and consumers who are the end-users of its products or services.',
    example: 'Amazon is a prime example of a B2C company, selling a vast range of products directly to individual customers.'
  },
  {
    id: 'bash',
    term: 'BASH',
    slug: 'bash',
    meaning: 'Bourne Again SHell',
    definition: 'A Unix shell and command language, and it is the default shell for many Linux distributions and macOS.',
    example: 'He wrote a simple BASH script to automate the process of backing up his files every night.'
  },
  {
    id: 'bgp',
    term: 'BGP',
    slug: 'bgp',
    meaning: 'Border Gateway Protocol',
    definition: 'The routing protocol used to exchange routing and reachability information among autonomous systems (AS) on the Internet.',
    example: 'Large internet service providers use BGP to determine the most efficient paths for data to travel across the global internet.'
  },
  {
    id: 'bind',
    term: 'BIND',
    slug: 'bind',
    meaning: 'Berkeley Internet Name Domain',
    definition: 'The most widely used Domain Name System (DNS) software on the Internet.',
    example: 'The systems administrator configured the BIND server to resolve the company\'s domain names to their correct IP addresses.'
  },
  {
    id: 'bios',
    term: 'BIOS',
    slug: 'bios',
    meaning: 'Basic Input/Output System',
    definition: 'Firmware used to perform hardware initialization during the booting process and to provide runtime services for operating systems and programs.',
    example: 'He entered the BIOS to change the boot order so the computer would start from the USB drive instead of the hard drive.'
  },
  {
    id: 'blob',
    term: 'BLOB',
    slug: 'blob',
    meaning: 'Binary Large Object',
    definition: 'A collection of binary data stored as a single entity in a database, such as an image or audio file.',
    example: 'The user\'s profile picture was stored as a BLOB in the database, linked to their user ID.'
  },
  {
    id: 'blockchain',
    term: 'Blockchain',
    slug: 'blockchain',
    definition: 'A distributed, immutable ledger that is used to record transactions and track assets in a business network.',
    example: 'Bitcoin transactions are recorded on a public blockchain, making them secure and transparent.'
  },
  {
    id: 'bluetooth-le',
    term: 'Bluetooth LE',
    slug: 'bluetooth-le',
    meaning: 'Bluetooth Low Energy',
    definition: 'A power-conserving version of Bluetooth, designed for low-power devices that transmit small amounts of data infrequently.',
    example: 'My fitness tracker uses Bluetooth LE to sync data with my phone without draining its small battery.'
  },
  {
    id: 'bnf',
    term: 'BNF',
    slug: 'bnf',
    meaning: 'Backus-Naur Form',
    definition: 'A notation technique for context-free grammars, often used to describe the syntax of programming languages.',
    example: 'The compiler developer first wrote the language\'s grammar in BNF to define what constitutes a valid program.'
  },
  {
    id: 'bootloader',
    term: 'Bootloader',
    slug: 'bootloader',
    definition: 'A small program that loads the main operating system for the computer when it is turned on.',
    example: 'Unlocking the bootloader on his Android phone allowed him to install a custom operating system.'
  },
  {
    id: 'bottleneck',
    term: 'Bottleneck',
    slug: 'bottleneck',
    definition: 'A point of congestion in a system that limits its overall performance. The system can only perform as fast as its slowest component.',
    example: 'The old hard drive was the bottleneck in his new PC; despite a fast CPU, applications loaded slowly.'
  },
  {
    id: 'brb',
    term: 'BRB',
    slug: 'brb',
    meaning: 'Binary Rate Breakpoint',
    definition: 'A term used in adaptive streaming where the video player switches between different quality levels (bitrates) based on network conditions.',
    example: 'The video player hit a BRB and switched to a lower quality stream when my internet connection slowed down.'
  },
  {
    id: 'breadcrumbs',
    term: 'Breadcrumbs',
    slug: 'breadcrumbs',
    definition: 'A type of secondary navigation scheme that reveals the user\'s location in a website or web app.',
    example: 'The breadcrumb trail at the top of the page showed: Home > Products > Laptops, helping me navigate back easily.'
  },
  {
    id: 'bruteforce',
    term: 'BRUTEFORCE',
    slug: 'bruteforce',
    definition: 'A trial-and-error method used to obtain information such as a user password by trying all possible combinations.',
    example: 'The login server detected a brute-force attack when it received thousands of failed password attempts from a single IP address.'
  },
  {
    id: 'buffer-overflow',
    term: 'Buffer Overflow',
    slug: 'buffer-overflow',
    definition: 'A type of software vulnerability that occurs when a program writes data beyond the boundary of a buffer, overwriting adjacent memory.',
    example: 'Exploiting the buffer overflow vulnerability, the attacker was able to execute malicious code on the server.'
  },
  {
    id: 'build-pipeline',
    term: 'Build Pipeline',
    slug: 'build-pipeline',
    definition: 'A set of automated processes that compile, test, and package code into a deployable software artifact.',
    example: 'Every time a developer commits new code, the build pipeline automatically runs tests and creates a new version of the application.'
  },
  {
    id: 'byod',
    term: 'BYOD',
    slug: 'byod',
    meaning: 'Bring Your Own Device',
    definition: 'A policy that allows employees to use their personal devices, like smartphones or laptops, for work purposes.',
    example: 'The company implemented a BYOD policy to save on hardware costs, but had to invest in mobile device management software.'
  },
  {
    id: 'cname',
    term: 'CNAME',
    slug: 'cname',
    meaning: 'Canonical Name',
    definition: 'A type of DNS record that maps an alias name to a true or canonical domain name.',
    example: 'They set up a CNAME record so that `\'\'\'www.example.com\'\'\'` would point to `\'\'\'example.com\'\'\'`.'
  },
  {
    id: 'cdn',
    term: 'CDN',
    slug: 'cdn',
    meaning: 'Content Delivery Network',
    definition: 'A geographically distributed network of proxy servers which cache content close to end-users for faster delivery.',
    example: 'The website uses a CDN to serve images and videos, which significantly reduces page load times for users around the world.'
  },
  {
    id: 'cgroup',
    term: 'CGroup',
    slug: 'cgroup',
    meaning: 'Control Groups',
    definition: 'A Linux kernel feature that allows you to allocate and limit resources—like CPU, memory, and network I/O—among a collection of processes.',
    example: 'Docker uses cgroups to ensure that a single container cannot consume all of the host machine\'s CPU resources.'
  },
  {
    id: 'cidr',
    term: 'CIDR',
    slug: 'cidr',
    meaning: 'Classless Inter-Domain Routing',
    definition: 'A method for allocating IP addresses and IP routing. The CIDR notation specifies an IP address and its associated routing prefix.',
    example: 'The firewall rule was configured with a CIDR block of 192.168.1.0/24 to apply to all devices on that subnet.'
  },
  {
    id: 'cim',
    term: 'CIM',
    slug: 'cim',
    meaning: 'Common Information Model',
    definition: 'An open standard that defines how managed elements in an IT environment are represented as a common set of objects and relationships between them.',
    example: 'System management tools use CIM to get standardized hardware and software information from different types of servers.'
  },
  {
    id: 'cli',
    term: 'CLI',
    slug: 'cli',
    meaning: 'Command-Line Interface',
    definition: 'A text-based interface used to view and manage computer files and run programs.',
    example: 'While the GUI is easier for beginners, many developers prefer the power and speed of a CLI for tasks like managing Git repositories.'
  },
  {
    id: 'clojure',
    term: 'Clojure',
    slug: 'clojure',
    definition: 'A dynamic, general-purpose programming language, combining the approachability and interactive development of a scripting language with an efficient and robust infrastructure for multithreaded programming.',
    example: 'The team chose Clojure for their data processing application because of its strong support for concurrency and immutable data structures.'
  },
  {
    id: 'cmos',
    term: 'CMOS',
    slug: 'cmos',
    meaning: 'Complementary Metal-Oxide-Semiconductor',
    definition: 'A technology for constructing integrated circuits. It\'s also used to refer to the battery-powered memory on a motherboard that stores BIOS settings.',
    example: 'He had to reset the CMOS to restore the motherboard\'s default settings after a failed overclock.'
  },
  {
    id: 'cors',
    term: 'CORS',
    slug: 'cors',
    meaning: 'Cross-Origin Resource Sharing',
    definition: 'A browser security feature that restricts how a web page can request resources from a domain different from the one which served the initial page.',
    example: 'The web app failed to load data from the API because of a CORS error, which the server needed to be configured to allow.'
  },
  {
    id: 'cpu-throttling',
    term: 'CPU Throttling',
    slug: 'cpu-throttling',
    definition: 'A technique where the clock speed of a CPU is intentionally reduced to conserve power or decrease the amount of heat it generates.',
    example: 'His laptop started running slow under heavy load because CPU throttling kicked in to prevent overheating.'
  },
  {
    id: 'crc',
    term: 'CRC',
    slug: 'crc',
    meaning: 'Cyclic Redundancy Check',
    definition: 'An error-detecting code commonly used in digital networks and storage devices to detect accidental changes to raw data.',
    example: 'When you unzip a file, the software performs a CRC to ensure the data wasn\'t corrupted during download.'
  },
  {
    id: 'crud',
    term: 'CRUD',
    slug: 'crud',
    meaning: 'Create, Read, Update, and Delete',
    definition: 'The four basic operations of persistent storage.',
    example: 'The developer implemented the CRUD endpoints for the user profile, allowing the frontend to create, read, update, and delete user data.'
  },
  {
    id: 'cryptomining',
    term: 'Cryptomining',
    slug: 'cryptomining',
    definition: 'The process of verifying and adding transactions to a blockchain, for which miners are rewarded with cryptocurrency.',
    example: 'His electricity bill skyrocketed because he was using his gaming PC for cryptomining 24/7.'
  },
  {
    id: 'csrf',
    term: 'CSRF',
    slug: 'csrf',
    meaning: 'Cross-Site Request Forgery',
    definition: 'An attack that forces an end user to execute unwanted actions on a web application in which they\'re currently authenticated.',
    example: 'The application uses anti-CSRF tokens in its forms to prevent attackers from tricking users into submitting malicious requests.'
  },
  {
    id: 'ctos',
    term: 'CTOS',
    slug: 'ctos',
    meaning: 'Convergent Technology Operating System',
    definition: 'A modular, message-passing, multiprocessing operating system.',
    example: 'In the 1980s, CTOS was an innovative OS known for its networking capabilities and was used in many business machines.'
  },
  {
    id: 'cuda',
    term: 'CUDA',
    slug: 'cuda',
    meaning: 'Compute Unified Device Architecture',
    definition: 'A parallel computing platform and programming model developed by Nvidia for general computing on its own GPUs.',
    example: 'Scientists use CUDA to accelerate complex simulations by running calculations on powerful Nvidia graphics cards.'
  },
  {
    id: 'cve',
    term: 'CVE',
    slug: 'cve',
    meaning: 'Common Vulnerabilities and Exposures',
    definition: 'A list of publicly disclosed computer security flaws. Each CVE has a unique ID number.',
    example: 'The security team is patching the server to protect against the new vulnerability identified as CVE-2023-12345.'
  },
  {
    id: 'daemon',
    term: 'Daemon',
    slug: 'daemon',
    definition: 'A computer program that runs as a background process, rather than being under the direct control of an interactive user.',
    example: 'The `\'\'\'sshd\'\'\'` daemon on a Linux server is always running in the background, listening for incoming SSH connections.'
  },
  {
    id: 'dag',
    term: 'DAG',
    slug: 'dag',
    meaning: 'Directed Acyclic Graph',
    definition: 'A graph data structure with directed edges (arrows) and no cycles.',
    example: 'Build systems and task schedulers often use a DAG to represent dependencies, ensuring tasks are executed in the correct order.'
  },
  {
    id: 'dapps',
    term: 'DApps',
    slug: 'dapps',
    meaning: 'Decentralized Applications',
    definition: 'Applications that run on a peer-to-peer network of computers rather than a single central server.',
    example: 'Many cryptocurrency wallets are DApps that interact directly with the blockchain without a central intermediary.'
  },
  {
    id: 'data-lake',
    term: 'Data Lake',
    slug: 'data-lake',
    definition: 'A centralized repository that allows you to store all your structured and unstructured data at any scale.',
    example: 'The company dumped all its raw log files, user data, and transaction records into a data lake for future analysis.'
  },
  {
    id: 'dbaas',
    term: 'DBaaS',
    slug: 'dbaas',
    meaning: 'Database-as-a-Service',
    definition: 'A cloud computing service that lets users access and use a database system without purchasing and setting up their own hardware.',
    example: 'Instead of managing their own PostgreSQL server, the startup opted for a DBaaS provider to handle backups and scaling.'
  },
  {
    id: 'ddos',
    term: 'DDoS',
    slug: 'ddos',
    meaning: 'Distributed Denial-of-Service',
    definition: 'A malicious attempt to disrupt the normal traffic of a targeted server or network by overwhelming it with a flood of Internet traffic.',
    example: 'The gaming servers went offline due to a massive DDoS attack launched from a botnet of thousands of compromised devices.'
  },
  {
    id: 'ddr3-ddr4-ddr5',
    term: 'DDR3/DDR4/DDR5',
    slug: 'ddr3-ddr4-ddr5',
    meaning: 'Double Data Rate Synchronous Dynamic Random-Access Memory',
    definition: 'Generations of memory (RAM) used in computers, with each new version offering higher speeds and more efficiency.',
    example: 'He upgraded his PC from 16GB of DDR4 RAM to 32GB of DDR5 RAM to improve performance in video editing.'
  },
  {
    id: 'deadlock',
    term: 'Deadlock',
    slug: 'deadlock',
    definition: 'A situation in concurrent programming where two or more processes are blocked forever, each waiting for the other to release a resource.',
    example: 'The database transaction failed because of a deadlock; two processes were trying to update the same two tables in a different order.'
  },
  {
    id: 'deep-packet-inspection',
    term: 'Deep Packet Inspection',
    slug: 'deep-packet-inspection',
    definition: 'An advanced method of examining network traffic, where the content of data packets is inspected in detail.',
    example: 'Corporate firewalls use deep packet inspection to block specific applications or prevent sensitive data from leaving the network.'
  },
  {
    id: 'devsecops',
    term: 'DevSecOps',
    slug: 'devsecops',
    definition: 'A mindset or culture that integrates security practices within the DevOps process, making security a shared responsibility.',
    example: 'By adopting a DevSecOps approach, they started running security scans automatically in their CI/CD pipeline.'
  },
  {
    id: 'dhcp',
    term: 'DHCP',
    slug: 'dhcp',
    meaning: 'Dynamic Host Configuration Protocol',
    definition: 'A network management protocol used to automatically assign IP addresses and other communication parameters to devices on a network.',
    example: 'When you connect your phone to a Wi-Fi network, a DHCP server on the router assigns it an IP address.'
  },
  {
    id: 'diff-tool',
    term: 'Diff Tool',
    slug: 'diff-tool',
    definition: 'A software utility that compares two files or directories and shows the differences between them.',
    example: 'The programmer used a diff tool to see exactly which lines of code he had changed before committing his work.'
  },
  {
    id: 'dimm',
    term: 'DIMM',
    slug: 'dimm',
    meaning: 'Dual In-Line Memory Module',
    definition: 'A small circuit board that holds memory chips and is installed on a computer\'s motherboard.',
    example: 'To upgrade the RAM, she purchased two 16GB DIMM sticks and installed them in the available slots.'
  },
  {
    id: 'disk-io',
    term: 'Disk I/O',
    slug: 'disk-io',
    meaning: 'Disk Input/Output',
    definition: 'Refers to the read and write operations on a physical disk (hard drive or SSD).',
    example: 'The application was slow because of high disk I/O; it was constantly reading and writing large files to the slow hard drive.'
  },
  {
    id: 'django',
    term: 'Django',
    slug: 'django',
    definition: 'A high-level Python web framework that encourages rapid development and clean, pragmatic design.',
    example: 'He built his blog using Django, which provided a built-in admin panel for managing posts.'
  },
  {
    id: 'dns',
    term: 'DNS',
    slug: 'dns',
    meaning: 'Domain Name System',
    definition: 'The Internet\'s phonebook. It translates human-readable domain names (like `\'\'\'www.google.com\'\'\'`) into machine-readable IP addresses (like `172.217.14.228`).',
    example: 'When you type a website address into your browser, your computer performs a DNS lookup to find the correct server to connect to.'
  },
  {
    id: 'docker',
    term: 'Docker',
    slug: 'docker',
    definition: 'A platform that uses OS-level virtualization to deliver software in packages called containers.',
    example: 'She packaged her web application and its database into Docker containers, so it could be easily run on any server.'
  },
  {
    id: 'dom',
    term: 'DOM',
    slug: 'dom',
    meaning: 'Document Object Model',
    definition: 'A programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.',
    example: 'JavaScript interacts with the DOM to do things like change the text of a button or show a hidden menu.'
  },
  {
    id: 'dotfile',
    term: 'Dotfile',
    slug: 'dotfile',
    definition: 'A configuration file on Unix-like systems, named with a dot at the beginning, which makes it hidden from normal directory listings.',
    example: 'He customized his shell prompt by editing the `.bashrc` dotfile in his home directory.'
  },
  {
    id: 'dpi-network',
    term: 'DPI (Network)',
    slug: 'dpi-network',
    meaning: 'Deep Packet Inspection',
    definition: 'In networking, it is the process of examining the data part of a packet as it passes an inspection point, filtering for non-protocol-compliant traffic or specific content.',
    example: 'The ISP uses DPI to identify and prioritize video streaming traffic to ensure a smooth viewing experience for customers.'
  },
  {
    id: 'dram',
    term: 'DRAM',
    slug: 'dram',
    meaning: 'Dynamic Random-Access Memory',
    definition: 'A type of semiconductor memory that is typically used for the data or program code needed by a computer processor to function.',
    example: 'Most of the RAM in a modern PC is a type of DRAM, which needs to be constantly refreshed to retain its data.'
  },
  {
    id: 'dual-boot',
    term: 'Dual-boot',
    slug: 'dual-boot',
    definition: 'The act of installing two operating systems on a single computer, and being able to choose which one to boot into when the computer starts.',
    example: 'He set up his laptop to dual-boot Windows for gaming and Linux for programming.'
  },
  {
    id: 'dump-file',
    term: 'Dump File',
    slug: 'dump-file',
    definition: 'A file containing a record of the state of a program\'s memory at a specific time, generally when the program has crashed.',
    example: 'The system automatically generated a memory dump file when the application crashed, which the developers analyzed to find the bug.'
  },
  {
    id: 'dxdiag',
    term: 'DXDiag',
    slug: 'dxdiag',
    meaning: 'DirectX Diagnostic Tool',
    definition: 'A diagnostics tool used to test DirectX functionality and troubleshoot video- or sound-related hardware problems on Windows.',
    example: 'Support asked him to run `dxdiag` and send them the report to check his graphics card and driver information.'
  },
  {
    id: 'ecdsa',
    term: 'ECDSA',
    slug: 'ecdsa',
    meaning: 'Elliptic Curve Digital Signature Algorithm',
    definition: 'A cryptographic algorithm used to create a digital signature of data to verify its authenticity and integrity.',
    example: 'Bitcoin and other cryptocurrencies use ECDSA to ensure that only the owner of a wallet can spend the funds within it.'
  },
  {
    id: 'edge-computing',
    term: 'Edge Computing',
    slug: 'edge-computing',
    definition: 'A distributed computing paradigm that brings computation and data storage closer to the sources of data, rather than relying on a central server.',
    example: 'A self-driving car uses edge computing to process sensor data instantly, as sending it to the cloud would be too slow.'
  },
  {
    id: 'eeprom',
    term: 'EEPROM',
    slug: 'eeprom',
    meaning: 'Electrically Erasable Programmable Read-Only Memory',
    definition: 'A type of non-volatile memory used in computers and other electronic devices to store small amounts of data that must be saved when power is removed.',
    example: 'The configuration settings for the router are stored in an EEPROM so they are not lost when it is unplugged.'
  },
  {
    id: 'eigrp',
    term: 'EIGRP',
    slug: 'eigrp',
    meaning: 'Enhanced Interior Gateway Routing Protocol',
    definition: 'An advanced distance-vector routing protocol developed by Cisco Systems.',
    example: 'The network engineer chose EIGRP for the internal company network because of its fast convergence time.'
  },
  {
    id: 'elastic-cluster',
    term: 'Elastic Cluster',
    slug: 'elastic-cluster',
    definition: 'A group of servers or resources that can automatically scale up (add resources) or scale down (remove resources) based on demand.',
    example: 'The website runs on an elastic cluster that adds more web servers during traffic spikes and removes them when traffic is low.'
  },
  {
    id: 'electron',
    term: 'Electron',
    slug: 'electron',
    definition: 'A framework for building desktop applications using web technologies like HTML, CSS, and JavaScript.',
    example: 'Popular apps like Slack and Visual Studio Code are built with Electron, which is why they look and feel similar on different operating systems.'
  },
  {
    id: 'endianness',
    term: 'Endianness',
    slug: 'endianness',
    definition: 'Refers to the order in which a sequence of bytes is stored in computer memory. The two main types are big-endian and little-endian.',
    example: 'When transferring binary data between different systems, developers must be careful about endianness to avoid data corruption.'
  },
  {
    id: 'env-variable',
    term: 'Env Variable',
    slug: 'env-variable',
    definition: 'An environment variable is a dynamic-named value that can affect the way running processes will behave on a computer.',
    example: 'He set the `PATH` environment variable so he could run his favorite command-line tools from any directory.'
  },
  {
    id: 'eprom',
    term: 'EPROM',
    slug: 'eprom',
    meaning: 'Erasable Programmable Read-Only Memory',
    definition: 'A type of memory chip that retains its data when its power supply is switched off but can be erased by exposing it to strong ultraviolet light.',
    example: 'In older computers, the BIOS was often stored on an EPROM chip, which had a small quartz window for erasure.'
  },
  {
    id: 'ethernet',
    term: 'Ethernet',
    slug: 'ethernet',
    definition: 'The standard technology for wired local area networks (LANs). It defines how devices format and transmit data so other devices on the same network can recognize, receive, and process them.',
    example: 'For a faster and more stable internet connection, he connected his gaming console directly to the router with an Ethernet cable.'
  },
  {
    id: 'etl',
    term: 'ETL',
    slug: 'etl',
    meaning: 'Extract, Transform, Load',
    definition: 'A data integration process that involves extracting data from a source, transforming it into a proper format, and loading it into a destination like a data warehouse.',
    example: 'The nightly ETL job pulls sales data from the production database, reformats it, and loads it into the data warehouse for analysis.'
  },

  {
    id: 'event-loop',
    term: 'Event Loop',
    slug: 'event-loop',
    definition: 'A programming construct that waits for and dispatches events or messages in a program. It\'s fundamental to non-blocking I/O in environments like Node.js and web browsers.',
    example: 'JavaScript in the browser uses an event loop to handle user interactions like clicks and key presses without freezing the UI.'
  },
  {
    id: 'exif',
    term: 'EXIF',
    slug: 'exif',
    meaning: 'Exchangeable Image File Format',
    definition: 'A standard that specifies the formats for images, sound, and ancillary tags used by digital cameras.',
    example: 'By viewing the EXIF data of the photo, he could see the exact camera model, shutter speed, and GPS coordinates of where it was taken.'
  },
  {
    id: 'ext4',
    term: 'EXT4',
    slug: 'ext4',
    meaning: 'Fourth Extended Filesystem',
    definition: 'A journaling file system for Linux, developed as the successor to ext3.',
    example: 'Most modern Linux distributions use the ext4 filesystem by default because of its performance and reliability.'
  },
  {
    id: 'etag',
    term: 'ETag',
    slug: 'etag',
    meaning: 'Entity Tag',
    definition: 'An HTTP header used for web cache validation. It allows a server to indicate whether a resource has changed, enabling browsers to use a cached version instead of re-downloading it.',
    example: 'The server sent an ETag with the image, so the next time the browser requested it, it could send the ETag to check if the image was still fresh.'
  },
  {
    id: 'faas',
    term: 'FaaS',
    slug: 'faas',
    meaning: 'Function as a Service',
    definition: 'A category of cloud computing services that provides a platform allowing customers to develop, run, and manage application functionalities without the complexity of building and maintaining the infrastructure.',
    example: 'They used a FaaS provider like AWS Lambda to run a function that resizes images whenever a new one is uploaded, without needing a dedicated server.'
  },
  {
    id: 'failover',
    term: 'Failover',
    slug: 'failover',
    definition: 'The process of automatically switching to a standby computer, system, or network upon the failure or abnormal termination of the previously active one.',
    example: 'The database was configured with automatic failover, so if the primary server goes down, the backup server takes over instantly.'
  },
  {
    id: 'fde',
    term: 'FDE',
    slug: 'fde',
    meaning: 'Full Disk Encryption',
    definition: 'A security measure that encrypts an entire hard drive, including the operating system and all user files.',
    example: 'He enabled FDE on his laptop using BitLocker to protect his data in case the device was lost or stolen.'
  },
  {
    id: 'fedora',
    term: 'Fedora',
    slug: 'fedora',
    definition: 'A Linux distribution developed by the community-supported Fedora Project and sponsored by Red Hat. It is known for its focus on innovation and integrating new technologies.',
    example: 'Developers often use Fedora to get early access to the latest open-source software and kernel features.'
  },
  {
    id: 'fiber-channel',
    term: 'Fiber Channel',
    slug: 'fiber-channel',
    definition: 'A high-speed data transfer protocol providing in-order, lossless delivery of raw block data, primarily used to connect computer data storage to servers in storage area networks (SAN).',
    example: 'The enterprise data center used a Fibre Channel SAN to provide fast and reliable block storage to all its application servers.'
  },
  {
    id: 'fips',
    term: 'FIPS',
    slug: 'fips',
    meaning: 'Federal Information Processing Standards',
    definition: 'Publicly announced standards developed by the United States federal government for use in computer systems by non-military government agencies and government contractors.',
    example: 'The software had to be run in FIPS-compliant mode to be used in the government agency, which meant only using approved cryptographic algorithms.'
  },
  {
    id: 'firewall-ruleset',
    term: 'Firewall Ruleset',
    slug: 'firewall-ruleset',
    definition: 'The collection of rules configured on a firewall that determines whether network traffic should be allowed or blocked.',
    example: 'The administrator updated the firewall ruleset to allow employees to access the new cloud application on port 443.'
  },
  {
    id: 'firmware',
    term: 'Firmware',
    slug: 'firmware',
    definition: 'A specific class of computer software that provides low-level control for a device\'s specific hardware.',
    example: 'He had to update the router\'s firmware to patch a security vulnerability and get new features.'
  },
  {
    id: 'flapping-network',
    term: 'Flapping (Network)',
    slug: 'flapping-network',
    definition: 'In networking, flapping refers to a condition where a network link or interface repeatedly goes up and down, causing routing instability.',
    example: 'The network was unstable because the connection to the remote office was flapping, causing frequent outages.'
  },
  {
    id: 'flask',
    term: 'Flask',
    slug: 'flask',
    definition: 'A micro web framework written in Python. It is classified as a microframework because it does not require particular tools or libraries.',
    example: 'She built a simple REST API for her project using Flask because it was lightweight and easy to get started with.'
  },
  {
    id: 'floc',
    term: 'FLoC',
    slug: 'floc',
    meaning: 'Federated Learning of Cohorts',
    definition: 'A privacy-focused web standard proposal by Google for interest-based advertising, intended as a replacement for third-party cookies.',
    example: 'Advertisers were interested in FLoC as a way to show relevant ads without tracking individual users across websites.'
  },
  {
    id: 'foss',
    term: 'FOSS',
    slug: 'foss',
    meaning: 'Free and Open-Source Software',
    definition: 'Software that is both free software (freedom to use, study, and modify) and open-source software (source code is publicly available).',
    example: 'Linux is a prime example of FOSS, with a global community of developers contributing to its source code.'
  },
  {
    id: 'fqdn',
    term: 'FQDN',
    slug: 'fqdn',
    meaning: 'Fully Qualified Domain Name',
    definition: 'The complete domain name for a specific computer, or host, on the internet.',
    example: 'While `\'\'\'mail\'\'\'` might be the hostname, `\'\'\'mail.example.com\'\'\'` is the FQDN.'
  },
  {
    id: 'fragmentation',
    term: 'Fragmentation',
    slug: 'fragmentation',
    definition: 'Disk fragmentation occurs when a file is stored in separate, non-contiguous areas on a hard disk drive, which can slow down data access.',
    example: 'He ran a defragmentation utility on his old hard drive to consolidate files and improve performance.'
  },
  {
    id: 'framework',
    term: 'Framework',
    slug: 'framework',
    definition: 'A software framework is a reusable set of libraries or classes for a software system or subsystem, providing a structure to build an application.',
    example: 'Instead of writing everything from scratch, he used the Ruby on Rails framework to build his web application more quickly.'
  },
  {
    id: 'freebsd',
    term: 'FreeBSD',
    slug: 'freebsd',
    definition: 'A free and open-source Unix-like operating system descended from the Berkeley Software Distribution (BSD), known for its stability and performance.',
    example: 'Many high-traffic websites and appliances use FreeBSD under the hood because of its robust networking stack.'
  },
  {
    id: 'frontend-build',
    term: 'Frontend Build',
    slug: 'frontend-build',
    definition: 'The process of compiling, transforming, and bundling web assets (like JavaScript, CSS, and images) into optimized files for a web browser.',
    example: 'The frontend build process uses Webpack to transpile modern JavaScript and minify the CSS files.'
  },
  {
    id: 'ftp-passive-mode',
    term: 'FTP Passive Mode',
    slug: 'ftp-passive-mode',
    definition: 'A mode for FTP connections where the client, rather than the server, initiates the data connection, which helps bypass firewalls on the client side.',
    example: 'He couldn\'t connect to the FTP server until he configured his client to use passive mode.'
  },
  {
    id: 'full-duplex',
    term: 'Full-Duplex',
    slug: 'full-duplex',
    definition: 'The transmission of data in two directions simultaneously. An example is a telephone call, where both parties can speak and be heard at the same time.',
    example: 'Modern Ethernet networks operate in full-duplex mode, allowing devices to send and receive data at the same time.'
  },
  {
    id: 'garbage-collector',
    term: 'Garbage Collector',
    slug: 'garbage-collector',
    definition: 'A form of automatic memory management that attempts to reclaim memory occupied by objects that are no longer in use by the program.',
    example: 'Programming languages like Java and C# have a garbage collector, which frees developers from manually managing memory allocation.'
  },
  {
    id: 'gcc',
    term: 'GCC',
    slug: 'gcc',
    meaning: 'GNU Compiler Collection',
    definition: 'A compiler system produced by the GNU Project supporting various programming languages.',
    example: 'He compiled his C++ program from the command line using `g++`, which is part of the GCC toolkit.'
  },
  {
    id: 'gdb',
    term: 'GDB',
    slug: 'gdb',
    meaning: 'GNU Debugger',
    definition: 'A portable debugger that runs on many Unix-like systems and works for many programming languages, including C, C++, and Go.',
    example: 'The programmer used GDB to step through his code line by line and inspect the value of variables to find the source of the crash.'
  },
  {
    id: 'geofencing',
    term: 'Geofencing',
    slug: 'geofencing',
    definition: 'A location-based service in which an app or other software uses GPS, RFID, Wi-Fi or cellular data to trigger a pre-programmed action when a mobile device enters or exits a virtual boundary.',
    example: 'The app used geofencing to send a "Welcome home!" notification when the user\'s phone entered the virtual boundary around their house.'
  },
  {
    id: 'geth-ethereum',
    term: 'Geth (Ethereum)',
    slug: 'geth-ethereum',
    meaning: 'Go Ethereum',
    definition: 'One of the original and most popular command-line clients for the Ethereum blockchain, written in the Go programming language.',
    example: 'To interact with the Ethereum network directly, he installed Geth and synchronized a full node on his server.'
  },
  {
    id: 'git-merge',
    term: 'Git Merge',
    slug: 'git-merge',
    definition: 'In Git, merging is the process of taking the changes from one branch and integrating them into another branch.',
    example: 'After his feature was complete, he performed a Git merge to combine his `feature-branch` back into the `main` branch.'
  },
  {
    id: 'git-rebase',
    term: 'Git Rebase',
    slug: 'git-rebase',
    definition: 'In Git, rebasing is the process of moving or combining a sequence of commits to a new base commit, often to create a cleaner, more linear project history.',
    example: 'Instead of merging, she used `git rebase` to update her feature branch with the latest changes from the main branch, avoiding a merge commit.'
  },
  {
    id: 'git-stash',
    term: 'Git Stash',
    slug: 'git-stash',
    definition: 'A command that temporarily shelves (or stashes) changes you\'ve made to your working copy so you can work on something else, and then come back and re-apply them later on.',
    example: 'He used `git stash` to save his unfinished changes so he could quickly switch to another branch to fix an urgent bug.'
  },
  {
    id: 'gitlab-runner',
    term: 'GitLab Runner',
    slug: 'gitlab-runner',
    definition: 'An application that works with GitLab CI/CD to run jobs in a pipeline.',
    example: 'They set up a GitLab Runner on their own server to run the automated tests for their project whenever new code was pushed.'
  },
  {
    id: 'gke',
    term: 'GKE',
    slug: 'gke',
    meaning: 'Google Kubernetes Engine',
    definition: 'A managed environment for deploying, managing, and scaling containerized applications using Google infrastructure.',
    example: 'The company migrated its microservices from on-premise servers to GKE to take advantage of automatic scaling and management.'
  },
  {
    id: 'gpg',
    term: 'GPG',
    slug: 'gpg',
    meaning: 'GNU Privacy Guard',
    definition: 'A free software replacement for Symantec\'s PGP cryptographic software suite, used for encrypting and signing data and communications.',
    example: 'He used GPG to encrypt the sensitive file before emailing it to ensure only the intended recipient could open it.'
  },
  {
    id: 'gpu-passthrough',
    term: 'GPU Passthrough',
    slug: 'gpu-passthrough',
    definition: 'A technology that allows a virtual machine (VM) to have direct access to a physical GPU, providing near-native graphics performance.',
    example: 'He configured GPU passthrough on his server to give his Windows VM direct control of the Nvidia card for gaming.'
  },
  {
    id: 'grub',
    term: 'GRUB',
    slug: 'grub',
    meaning: 'GRand Unified Bootloader',
    definition: 'A popular bootloader from the GNU Project that is used to start one of multiple operating systems installed on a computer.',
    example: 'When he started his dual-boot machine, the GRUB menu appeared, asking him to choose between Linux and Windows.'
  },
  {
    id: 'grpc',
    term: 'gRPC',
    slug: 'grpc',
    definition: 'A high-performance, open-source universal RPC (Remote Procedure Call) framework developed by Google, often used for communication between microservices.',
    example: 'The backend services communicate with each other using gRPC because it\'s faster and more efficient than traditional REST APIs.'
  },
  {
    id: 'gui-thread',
    term: 'GUI Thread',
    slug: 'gui-thread',
    definition: 'The main thread in a graphical application responsible for handling user input and drawing the user interface.',
    example: 'Running a long-lasting task on the GUI thread will freeze the application, so it should be moved to a separate background thread.'
  },
  {
    id: 'hackintosh',
    term: 'Hackintosh',
    slug: 'hackintosh',
    definition: 'A non-Apple computer that is modified to run Apple\'s macOS operating system.',
    example: 'He built a powerful Hackintosh with custom PC parts for video editing, which was much cheaper than buying a real Mac Pro.'
  },
  {
    id: 'handshake-protocol',
    term: 'Handshake Protocol',
    slug: 'handshake-protocol',
    definition: 'A process in networking where two communicating devices agree on protocols and parameters for communication before any data is transferred. An example is the TCP three-way handshake.',
    example: 'The SSL/TLS handshake protocol securely negotiates the encryption keys that will be used to protect the web traffic.'
  },
  {
    id: 'hard-fork',
    term: 'Hard Fork',
    slug: 'hard-fork',
    definition: 'In blockchain, a hard fork is a radical change to a network\'s protocol that makes previously invalid blocks/transactions valid—or vice-versa. All nodes or users must upgrade to the latest version of the protocol software.',
    example: 'The Ethereum hard fork was necessary to implement a major upgrade, but it created a new version of the blockchain that was not backward-compatible.'
  },
  {
    id: 'hash-collision',
    term: 'Hash Collision',
    slug: 'hash-collision',
    definition: 'Occurs when two different pieces of data produce the exact same output from a hash function.',
    example: 'Although rare for good algorithms, a hash collision can be a security risk if an attacker can create a malicious file with the same hash as a legitimate one.'
  },
  {
    id: 'hashing-algorithm',
    term: 'Hashing Algorithm',
    slug: 'hashing-algorithm',
    definition: 'A function that converts an input of any size into a fixed-size string of text, called a hash. Examples include MD5, SHA-1, and SHA-256.',
    example: 'When you download a file, you can verify its integrity by comparing its checksum with the one generated by a hashing algorithm like SHA-256.'
  },
  {
    id: 'hci',
    term: 'HCI',
    slug: 'hci',
    meaning: 'Hyper-Converged Infrastructure',
    definition: 'A software-defined IT infrastructure that virtualizes all of the elements of conventional "hardware-defined" systems, including compute, storage, and networking.',
    example: 'The company replaced its separate server, storage, and networking hardware with a single HCI solution to simplify management.'
  },
  {
    id: 'headless-mode',
    term: 'Headless Mode',
    slug: 'headless-mode',
    definition: 'Refers to running a program without a graphical user interface (GUI). This is common for servers and automated tasks.',
    example: 'He ran a headless version of the Chrome browser on his server to automate taking screenshots of websites.'
  },
  {
    id: 'heap-memory',
    term: 'Heap Memory',
    slug: 'heap-memory',
    definition: 'A region of a computer\'s memory used for dynamic memory allocation, where objects are stored when a program is running.',
    example: 'In C++, objects created with the `new` keyword are allocated on the heap, and must be manually deleted to avoid memory leaks.'
  },
  {
    id: 'hf-radio',
    term: 'HF Radio',
    slug: 'hf-radio',
    meaning: 'High Frequency',
    definition: 'Refers to the range of radio frequencies between 3 and 30 megahertz, often used for long-distance communication.',
    example: 'Amateur radio operators use HF radio to talk to people all over the world by bouncing signals off the ionosphere.'
  },
  {
    id: 'hibernate-os',
    term: 'Hibernate (OS)',
    slug: 'hibernate-os',
    definition: 'A power-saving state that saves the contents of your computer\'s RAM to the hard disk and then completely powers off the computer.',
    example: 'He used hibernate instead of sleep mode for his laptop because it uses zero power while preserving his open applications.'
  },
  {
    id: 'hmac',
    term: 'HMAC',
    slug: 'hmac',
    meaning: 'Hash-based Message Authentication Code',
    definition: 'A type of message authentication code involving a cryptographic hash function and a secret key, used to verify both the data integrity and authenticity of a message.',
    example: 'The API uses HMAC to sign requests, ensuring they haven\'t been tampered with and are coming from a trusted client.'
  },
  {
    id: 'homebrew',
    term: 'Homebrew',
    slug: 'homebrew',
    definition: 'A free and open-source software package management system that simplifies the installation of software on Apple\'s macOS operating system.',
    example: 'He installed the latest version of Python on his Mac using the Homebrew command: `brew install python`.'
  },
  {
    id: 'hook-programming',
    term: 'Hook (Programming)',
    slug: 'hook-programming',
    definition: 'A mechanism in programming that allows a developer to intercept or augment the behavior of a program or framework at specific points in its execution.',
    example: 'He used a webhook to receive a notification in Slack every time a new commit was pushed to the Git repository.'
  },
  {
    id: 'hotfix',
    term: 'Hotfix',
    slug: 'hotfix',
    definition: 'A small piece of code created to address a specific bug or critical issue in a live production environment, often released outside of the normal update cycle.',
    example: 'The team had to deploy a hotfix over the weekend to patch a major security vulnerability on their website.'
  },
  {
    id: 'hsm',
    term: 'HSM',
    slug: 'hsm',
    meaning: 'Hardware Security Module',
    definition: 'A physical computing device that safeguards and manages digital keys and performs encryption and decryption functions.',
    example: 'The bank stores its most critical cryptographic keys in an HSM to prevent them from ever being accessed in software.'
  },
  {
    id: 'html5-canvas',
    term: 'HTML5 Canvas',
    slug: 'html5-canvas',
    definition: 'The HTML `<canvas>` element is used to draw graphics, on the fly, via scripting (usually JavaScript).',
    example: 'He created an interactive browser-based game using the HTML5 Canvas to render all the graphics and animations.'
  },
  {
    id: 'http-2',
    term: 'HTTP/2',
    slug: 'http-2',
    definition: 'A major revision of the HTTP network protocol used by the World Wide Web. It enables a more efficient connection between web servers and browsers through features like multiplexing and server push.',
    example: 'After upgrading their server to support HTTP/2, their website loaded much faster because the browser could download multiple files over a single connection.'
  },
  {
    id: 'hyperthreading',
    term: 'HyperThreading',
    slug: 'hyperthreading',
    definition: 'Intel\'s proprietary technology for simultaneous multithreading (SMT), which allows a single physical CPU core to appear as two logical cores to the operating system.',
    example: 'His 4-core CPU with Hyper-Threading showed up as 8 cores in the Task Manager, improving multitasking performance.'
  },
  {
    id: 'io-wait',
    term: 'I/O Wait',
    slug: 'io-wait',
    definition: 'A measurement of the time the CPU is idle because it is waiting for an Input/Output operation (like reading from a disk or network) to complete.',
    example: 'The server\'s CPU usage was low, but the I/O Wait was very high, indicating a bottleneck with the slow storage system.'
  },
  {
    id: 'iam',
    term: 'IAM',
    slug: 'iam',
    meaning: 'Identity and Access Management',
    definition: 'A framework of policies and technologies for ensuring that the right users have the appropriate access to technology resources.',
    example: 'He configured an IAM policy in AWS to grant the developer read-only access to the S3 bucket.'
  },
  {
    id: 'icmp',
    term: 'ICMP',
    slug: 'icmp',
    meaning: 'Internet Control Message Protocol',
    definition: 'A network protocol used by network devices to send error messages and operational information indicating, for example, that a requested service is not available or that a host or router could not be reached.',
    example: 'The `ping` command uses ICMP echo request and echo reply packets to check if a host is reachable on a network.'
  },
  {
    id: 'ide-cable',
    term: 'IDE Cable',
    slug: 'ide-cable',
    meaning: 'Integrated Drive Electronics',
    definition: 'A wide, flat ribbon cable used to connect older hard drives and optical drives to the motherboard.',
    example: 'He found an old IDE cable in his box of computer parts, a relic from before SATA became the standard.'
  },
  {
    id: 'idrac',
    term: 'iDRAC',
    slug: 'idrac',
    meaning: 'Integrated Dell Remote Access Controller',
    definition: 'A management platform embedded on Dell servers that allows for remote, out-of-band management of the server.',
    example: 'The server wouldn\'t boot, so the admin used iDRAC to remotely access its console and diagnose the problem without being physically present.'
  },
  {
    id: 'ilp32',
    term: 'ILP32',
    slug: 'ilp32',
    definition: 'A data model where `int`, `long`, and pointers are 32 bits wide. It\'s a common data model for 32-bit Unix-like systems.',
    example: 'The legacy application was compiled for an ILP32 architecture, which caused issues when they tried to run it on a modern 64-bit system.'
  },
  {
    id: 'immutable-file',
    term: 'Immutable File',
    slug: 'immutable-file',
    definition: 'A file that cannot be changed or deleted once it has been created. This is often used for security and data integrity.',
    example: 'He set the immutable flag on the critical configuration file to prevent anyone, even the root user, from accidentally modifying it.'
  },
  {
    id: 'import-map',
    term: 'Import Map',
    slug: 'import-map',
    definition: 'A web platform feature that allows developers to control the behavior of JavaScript imports, mapping module specifiers to different URLs.',
    example: 'Using an import map, he could write `import "react"` in his code, and the browser would know to fetch it from a specific CDN URL.'
  },
  {
    id: 'infix-expression',
    term: 'Infix Expression',
    slug: 'infix-expression',
    definition: 'An expression where operators are written in-between their operands, which is the standard way humans write mathematical expressions.',
    example: 'The expression `3 + 4` is an infix expression, whereas its postfix equivalent is `3 4 +`.'
  },
  {
    id: 'ingress',
    term: 'Ingress',
    slug: 'ingress',
    definition: 'In networking, ingress refers to traffic that enters a network. In Kubernetes, an Ingress is an API object that manages external access to the services in a cluster, typically HTTP.',
    example: 'He configured an Ingress controller to route traffic from `example.com` to the web server service running inside the Kubernetes cluster.'
  },
  {
    id: 'init-system',
    term: 'Init System',
    slug: 'init-system',
    definition: 'The first process started by the kernel during the booting of a computer. It is responsible for starting all other processes.',
    example: 'Modern Linux distributions like Ubuntu use `systemd` as their init system, while older ones used `SysVinit`.'
  },
  {
    id: 'inode',
    term: 'Inode',
    slug: 'inode',
    definition: 'A data structure on a Unix-style filesystem that stores all the information about a file or directory, except its name and actual data.',
    example: 'The `ls -i` command displays the inode number for each file, showing the underlying data structure that points to the file\'s content.'
  },
  {
    id: 'instancing',
    term: 'Instancing',
    slug: 'instancing',
    definition: 'In computer graphics, the practice of rendering multiple copies of the same object in a scene at once using a single draw call, which is much more efficient.',
    example: 'The game engine used instancing to render the entire forest of thousands of trees with high performance.'
  },
  {
    id: 'interrupt-request-irq',
    term: 'Interrupt Request (IRQ)',
    slug: 'interrupt-request-irq',
    definition: 'A signal sent from a hardware device to the CPU to get its attention, temporarily stopping the CPU\'s current task to handle the request.',
    example: 'When you press a key on your keyboard, it sends an IRQ to the processor to signal that there is new input to be processed.'
  },
  {
    id: 'iot-hub',
    term: 'IoT Hub',
    slug: 'iot-hub',
    definition: 'A managed cloud service that acts as a central message hub for bi-directional communication between your IoT application and the devices it manages.',
    example: 'All the smart temperature sensors in the factory send their data to the Azure IoT Hub for processing and monitoring.'
  },
  {
    id: 'ip-spoofing',
    term: 'IP Spoofing',
    slug: 'ip-spoofing',
    definition: 'The creation of Internet Protocol (IP) packets with a forged source IP address, for the purpose of hiding the identity of the sender or impersonating another computing system.',
    example: 'DDoS attacks often use IP spoofing to hide the true origin of the malicious traffic.'
  },
  {
    id: 'ipsec',
    term: 'IPSec',
    slug: 'ipsec',
    meaning: 'Internet Protocol Security',
    definition: 'A secure network protocol suite that authenticates and encrypts the packets of data sent over an Internet Protocol network. It is often used in VPNs.',
    example: 'The company VPN uses IPSec to create a secure, encrypted tunnel from the employee\'s laptop to the corporate network.'
  },
  {
    id: 'ipvs',
    term: 'IPVS',
    slug: 'ipvs',
    meaning: 'IP Virtual Server',
    definition: 'Built on top of the Netfilter framework, it implements transport-layer load balancing as part of the Linux kernel.',
    example: 'Kubernetes can use IPVS mode for its services to provide high-performance load balancing for network traffic.'
  },
  {
    id: 'iscsi',
    term: 'iSCSI',
    slug: 'iscsi',
    meaning: 'Internet Small Computer Systems Interface',
    definition: 'A protocol that allows clients to send SCSI commands over TCP/IP networks, enabling storage devices to be accessed over a standard Ethernet network.',
    example: 'The server connected to its storage array using iSCSI, which made the remote storage appear as a local disk.'
  },
  {
    id: 'iso-image',
    term: 'ISO Image',
    slug: 'iso-image',
    definition: 'An archive file of an optical disc, a type of disk image composed of the data contents from every written sector on an optical disc, including the file system.',
    example: 'He downloaded the Ubuntu ISO image and used it to create a bootable USB drive to install the operating system.'
  },
  {
    id: 'iterables',
    term: 'Iterables',
    slug: 'iterables',
    definition: 'In programming, an object that can be "iterated" over, meaning you can traverse through all the values. Examples include arrays, strings, and maps.',
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
    meaning: 'Java Archive',
    definition: 'A package file format typically used to aggregate many Java class files and associated metadata and resources into one file for distribution.',
    example: 'He deployed the web application by simply copying the executable JAR file to the server and running it.'
  },
  {
    id: 'jdk',
    term: 'JDK',
    slug: 'jdk',
    meaning: 'Java Development Kit',
    definition: 'An implementation of the Java Platform that provides a compiler, a JVM, and other tools necessary for developing Java applications.',
    example: 'To compile the Java code, he first had to install the latest version of the JDK on his machine.'
  },
  {
    id: 'jitter',
    term: 'Jitter',
    slug: 'jitter',
    definition: 'In networking, the variation in the time delay of received packets. High jitter can cause problems for real-time applications like voice calls and video streaming.',
    example: 'The video conference was choppy because of high network jitter, causing the audio and video to arrive out of sync.'
  },
  {
    id: 'json-schema',
    term: 'JSON Schema',
    slug: 'json-schema',
    definition: 'A vocabulary that allows you to annotate and validate JSON documents, ensuring the data is in the correct format.',
    example: 'The API used a JSON Schema to validate incoming requests, automatically rejecting any that were missing required fields.'
  },
  {
    id: 'jwt',
    term: 'JWT',
    slug: 'jwt',
    meaning: 'JSON Web Token',
    definition: 'A compact, URL-safe means of representing claims to be transferred between two parties. It is often used for authentication and information exchange.',
    example: 'After logging in, the server gave the client a JWT, which the client then included in the header of all subsequent requests to prove it was authenticated.'
  },
  {
    id: 'jupyter-kernel',
    term: 'Jupyter Kernel',
    slug: 'jupyter-kernel',
    definition: 'A "computational engine" that runs code in a specific programming language and returns output to be displayed in a Jupyter Notebook.',
    example: 'He switched the Jupyter kernel from Python to R to run some statistical analysis in the same notebook.'
  },
  {
    id: 'kafka-broker',
    term: 'Kafka Broker',
    slug: 'kafka-broker',
    definition: 'A server in an Apache Kafka cluster that stores data in topics and serves client requests for producing and consuming that data.',
    example: 'Their Kafka cluster consisted of three brokers to ensure high availability and load distribution.'
  },
  {
    id: 'kali-linux',
    term: 'Kali Linux',
    slug: 'kali-linux',
    definition: 'A Debian-derived Linux distribution designed for digital forensics and penetration testing.',
    example: 'The cybersecurity analyst booted into Kali Linux to use its pre-installed tools for the network penetration test.'
  },
  {
    id: 'kernel-panic',
    term: 'Kernel Panic',
    slug: 'kernel-panic',
    definition: 'A safety measure taken by an operating system\'s kernel upon detecting an internal fatal error from which it cannot safely recover. It is the equivalent of a Blue Screen of Death in Windows.',
    example: 'The system experienced a kernel panic and crashed after he installed the faulty hardware driver.'
  },
  {
    id: 'kernel-space',
    term: 'Kernel Space',
    slug: 'kernel-space',
    definition: 'The memory area where the core of the operating system (the kernel) resides and has unrestricted access to all hardware.',
    example: 'Device drivers run in kernel space, which is why a buggy driver can crash the entire operating system.'
  },
  {
    id: 'key-derivation-function',
    term: 'Key Derivation Function',
    slug: 'key-derivation-function',
    definition: 'A cryptographic function that derives one or more secret keys from a secret value such as a master key or a password.',
    example: 'The application uses a KDF like PBKDF2 to turn the user\'s password into a strong encryption key, making it resistant to brute-force attacks.'
  },
  {
    id: 'kms-key-management-service',
    term: 'KMS',
    slug: 'kms-key-management-service',
    meaning: 'Key Management Service',
    definition: 'A managed service that makes it easy for you to create and control the encryption keys used to encrypt your data. AWS KMS is a popular example.',
    example: 'They stored their database encryption keys in a KMS to securely manage their lifecycle, including creation, rotation, and deletion.'
  },
  {
    id: 'kubernetes-pod',
    term: 'Kubernetes Pod',
    slug: 'kubernetes-pod',
    definition: 'The smallest and simplest unit in the Kubernetes object model that you create or deploy. A Pod represents a running process on your cluster and can contain one or more containers.',
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
    meaning: 'Linux, Apache, MySQL, and PHP/Python/Perl',
    definition: 'A popular open-source web development stack.',
    example: 'WordPress, a popular content management system, is traditionally run on a LAMP stack.'
  },
  {
    id: 'latency-spikes',
    term: 'Latency Spikes',
    slug: 'latency-spikes',
    definition: 'Sudden, temporary increases in the time it takes for a data packet to travel from its source to its destination.',
    example: 'Online gaming is unplayable with latency spikes, as the game will appear to freeze and then suddenly jump forward in time.'
  },
  {
    id: 'ldap',
    term: 'LDAP',
    slug: 'ldap',
    meaning: 'Lightweight Directory Access Protocol',
    definition: 'An open, vendor-neutral, industry standard application protocol for accessing and maintaining distributed directory information services over an IP network.',
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
    meaning: 'Large File Storage',
    definition: 'A Git extension that replaces large files such as audio samples, videos, and datasets with text pointers inside Git, while storing the file contents on a remote server.',
    example: 'The game developers used Git LFS to version their large 3D models and textures without bloating the main Git repository.'
  },
  {
    id: 'lifo',
    term: 'LIFO',
    slug: 'lifo',
    meaning: 'Last-In, First-Out',
    definition: 'A method for handling data structures where the last element added is the first one to be removed. A stack is a LIFO data structure.',
    example: 'The browser\'s back button works like a LIFO stack; the last page you visited is the first one you return to.'
  },
  {
    id: 'linter',
    term: 'Linter',
    slug: 'linter',
    definition: 'A tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.',
    example: 'The development team configured a linter to enforce a consistent coding style across the entire codebase.'
  },
  {
    id: 'llvm',
    term: 'LLVM',
    slug: 'llvm',
    definition: 'A collection of modular and reusable compiler and toolchain technologies used to build compilers, debuggers, and other programming tools.',
    example: 'Apple\'s Swift programming language uses the LLVM compiler infrastructure to generate optimized machine code.'
  },
  {
    id: 'load-balancer',
    term: 'Load Balancer',
    slug: 'load-balancer',
    definition: 'A device or software that distributes network or application traffic across a number of servers to improve responsiveness and availability.',
    example: 'The website handled the traffic spike by using a load balancer to distribute requests evenly across three web servers.'
  },
  {
    id: 'localhost',
    term: 'Localhost',
    slug: 'localhost',
    definition: 'Refers to the current computer. It has the default IP address 127.0.0.1 and is used to access network services that are running on the host itself.',
    example: 'A web developer typically tests their website by accessing `http://localhost:3000` in their browser.'
  },
  {
    id: 'logic-gate',
    term: 'Logic Gate',
    slug: 'logic-gate',
    definition: 'A basic building block of a digital circuit. Most logic gates have two inputs and one output, and they perform a basic logical function like AND, OR, or NOT.',
    example: 'CPUs are made up of billions of tiny transistors that form logic gates to perform calculations.'
  },
  {
    id: 'logrotate',
    term: 'Logrotate',
    slug: 'logrotate',
    definition: 'A system utility that automates the management of log files, including rotation, compression, removal, and mailing of log files.',
    example: 'He configured `logrotate` to archive the server\'s access logs every week and delete any logs older than a month.'
  },
  {
    id: 'lru-cache',
    term: 'LRU Cache',
    slug: 'lru-cache',
    meaning: 'Least Recently Used',
    definition: 'A cache replacement algorithm that discards the least recently used items first when the cache is full.',
    example: 'The web browser uses an LRU cache for images; when it gets full, it removes the images from websites you haven\'t visited in a while.'
  },
  {
    id: 'lvm',
    term: 'LVM',
    slug: 'lvm',
    meaning: 'Logical Volume Management',
    definition: 'A framework for managing storage devices in a flexible way on Linux. It allows for creating, resizing, and merging partitions.',
    example: 'He used LVM to combine two physical hard drives into a single, larger logical volume.'
  },
  {
    id: 'machine-image',
    term: 'Machine Image',
    slug: 'machine-image',
    definition: 'A single file that contains a complete copy of a computer\'s storage, including the operating system, applications, and all data.',
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
    definition: 'In assembly language, a named block of code that can be inserted into a program. It\'s a way to reuse common sequences of instructions.',
    example: 'He wrote a macro to handle the standard function entry and exit code, which simplified his assembly program.'
  },
  {
    id: 'mainframe',
    term: 'Mainframe',
    slug: 'mainframe',
    definition: 'A large, powerful computer, typically used by large organizations for critical applications, bulk data processing, such as census, industry and consumer statistics, and financial transaction processing.',
    example: 'Banks still rely on mainframes for their core transaction processing systems because of their high reliability and throughput.'
  },
  {
    id: 'makefile',
    term: 'Makefile',
    slug: 'makefile',
    definition: 'A special file containing a set of directives used by the `make` build automation tool to compile and build a software project.',
    example: 'By simply typing `make` in the terminal, the Makefile provided all the necessary commands to compile the C++ source code into an executable.'
  },
  {
    id: 'man-in-the-middle',
    term: 'Man-in-the-Middle',
    slug: 'man-in-the-middle',
    definition: 'A cyberattack where the attacker secretly relays and possibly alters the communication between two parties who believe they are directly communicating with each other.',
    example: 'An attacker on a public Wi-Fi network performed a MITM attack to intercept unencrypted login credentials.'
  },
  {
    id: 'mariadb',
    term: 'MariaDB',
    slug: 'mariadb',
    definition: 'A community-developed, commercially supported fork of the MySQL relational database management system, intended to remain free and open-source.',
    example: 'After Oracle acquired MySQL, many developers switched to MariaDB as a drop-in replacement.'
  },
  {
    id: 'markup',
    term: 'Markup',
    slug: 'markup',
    definition: 'A system for annotating a document in a way that is syntactically distinguishable from the text, such as HTML for web pages.',
    example: 'HTML is a markup language that uses tags like `<p>` and `<h1>` to define the structure of a web page.'
  },
  {
    id: 'mbr-vs-gpt',
    term: 'MBR vs GPT',
    slug: 'mbr-vs-gpt',
    meaning: 'Master Boot Record vs GUID Partition Table',
    definition: 'Two different ways of storing the partitioning information on a drive. GPT is the modern standard, supporting larger drives and more partitions.',
    example: 'He converted the disk from MBR to GPT so he could install Windows on a drive larger than 2TB.'
  },
  {
    id: 'mdc-hash',
    term: 'MDC Hash',
    slug: 'mdc-hash',
    meaning: 'Modification Detection Code',
    definition: 'A type of message digest or cryptographic hash function used to verify the integrity of a message.',
    example: 'The system calculated an MDC hash of the file to ensure it had not been tampered with during transit.'
  },
  {
    id: 'memory-leak',
    term: 'Memory Leak',
    slug: 'memory-leak',
    definition: 'A type of resource leak that occurs when a computer program incorrectly manages memory allocations in such a way that memory which is no longer needed is not released.',
    example: 'The server application had a memory leak; its RAM usage would slowly increase over time until it eventually crashed.'
  },
  {
    id: 'microcode',
    term: 'Microcode',
    slug: 'microcode',
    definition: 'A layer of hardware-level instructions that implement higher-level machine code instructions in a CPU.',
    example: 'Intel released a microcode update to patch the "Spectre" CPU vulnerability at the hardware level.'
  },
  {
    id: 'microfrontend',
    term: 'Microfrontend',
    slug: 'microfrontend',
    definition: 'An architectural style where a single web application is composed of multiple smaller, independent frontend applications.',
    example: 'The e-commerce site was built using microfrontends, with separate teams managing the search, cart, and checkout applications.'
  },
  {
    id: 'middleware',
    term: 'Middleware',
    slug: 'middleware',
    definition: 'Software that lies between an operating system and the applications running on it. It enables communication and data management for distributed applications.',
    example: 'In the web application, a piece of middleware checks if a user is authenticated before allowing them to access a protected route.'
  },
  {
    id: 'mig-nvidia',
    term: 'MIG (Nvidia)',
    slug: 'mig-nvidia',
    meaning: 'Multi-Instance GPU',
    definition: 'A technology from Nvidia that allows a single GPU to be partitioned into multiple, isolated GPU instances, each with its own memory and compute resources.',
    example: 'They used MIG to partition a powerful A100 GPU into seven smaller instances, allowing multiple data scientists to work on it simultaneously.'
  },
  {
    id: 'mingw',
    term: 'MinGW',
    slug: 'mingw',
    meaning: 'Minimalist GNU for Windows',
    definition: 'A development environment that provides a port of the GNU Compiler Collection (GCC) and other tools for creating native Windows applications.',
    example: 'He used MinGW to compile his C++ application on Windows without needing to install the full Visual Studio IDE.'
  },
  {
    id: 'mint-linux',
    term: 'Mint Linux',
    slug: 'mint-linux',
    definition: 'A community-driven Linux distribution based on Ubuntu, known for its user-friendliness and traditional desktop experience.',
    example: 'He installed Linux Mint on his parents\' old laptop because its Cinnamon desktop was easy for them to learn.'
  },
  {
    id: 'mirroring',
    term: 'Mirroring',
    slug: 'mirroring',
    definition: 'In data storage, the replication of data to a separate disk or server in real-time to ensure continuous availability and redundancy. RAID 1 is a common example.',
    example: 'The server used disk mirroring, so if one hard drive failed, the other would have an identical copy of the data.'
  },
  {
    id: 'ml-model-weights',
    term: 'ML Model Weights',
    slug: 'ml-model-weights',
    definition: 'In machine learning, weights are the parameters within a model that are learned from data during the training process. They determine the strength of the connection between neurons.',
    example: 'After training the neural network for days, the final ML model weights were saved to a file for later use in making predictions.'
  },
  {
    id: 'mongo-replica-set',
    term: 'Mongo Replica Set',
    slug: 'mongo-replica-set',
    definition: 'A group of `mongod` processes that maintain the same data set, providing redundancy and high availability.',
    example: 'Their production MongoDB database was configured as a three-member replica set to handle failures automatically.'
  },
  {
    id: 'monolith',
    term: 'Monolith',
    slug: 'monolith',
    definition: 'A traditional software design model where an application is built as a single, indivisible unit. The opposite of a microservices architecture.',
    example: 'The old application was a monolith, making it difficult to update one part without having to redeploy the entire thing.'
  },
  {
    id: 'mqtt',
    term: 'MQTT',
    slug: 'mqtt',
    meaning: 'Message Queuing Telemetry Transport',
    definition: 'A lightweight, publish-subscribe network protocol that transports messages between devices, often used for IoT applications.',
    example: 'The smart home sensors use MQTT to publish their temperature readings to a central broker, which then notifies the control panel.'
  },
  {
    id: 'multicast',
    term: 'Multicast',
    slug: 'multicast',
    definition: 'A communication method where a piece of information is sent from one or more points to a set of other points. It allows a source to send a single packet to multiple destinations simultaneously.',
    example: 'IPTV services use multicast to efficiently stream live television channels to many subscribers at once without sending individual streams to each one.'
  },
  {
    id: 'multipath-routing',
    term: 'Multipath Routing',
    slug: 'multipath-routing',
    definition: 'The practice of using multiple alternative paths through a network, which can increase bandwidth and provide redundancy.',
    example: 'The storage network used multipath routing to ensure that if one connection failed, data could still flow through another path.'
  },
  {
    id: 'mux',
    term: 'MUX',
    slug: 'mux',
    meaning: 'Multiplexer',
    definition: 'A device that selects one of several analog or digital input signals and forwards the selected input into a single line.',
    example: 'A MUX was used to allow the single ADC to read data from eight different sensors by switching between them rapidly.'
  },
  {
    id: 'mysql-dump',
    term: 'MySQL Dump',
    slug: 'mysql-dump',
    definition: 'A command-line utility used to create a logical backup of a MySQL or MariaDB database, generating a SQL file with `CREATE TABLE` and `INSERT` statements.',
    example: 'He created a MySQL dump of the production database before performing a major software upgrade.'
  },
  {
    id: 'nas',
    term: 'NAS',
    slug: 'nas',
    meaning: 'Network-Attached Storage',
    definition: 'A dedicated file storage server that provides local-area network nodes with file-based shared storage through a standard Ethernet connection.',
    example: 'He set up a NAS in his home to store all his movies and music, which he could then access from any device on his network.'
  },
  {
    id: 'nat',
    term: 'NAT',
    slug: 'nat',
    meaning: 'Network Address Translation',
    definition: 'A method of remapping one IP address space into another by modifying network address information in the IP header of packets while they are in transit.',
    example: 'Your home router uses NAT to allow multiple devices on your private network to share a single public IP address from your ISP.'
  },
  {
    id: 'nacl-networking-library',
    term: 'NaCl',
    slug: 'nacl-networking-library',
    meaning: 'Networking and Cryptography library',
    definition: 'A high-speed software library for network communication, encryption, decryption, signatures, etc. Its goal is to provide a simple, high-level API for cryptography.',
    example: 'The chat application used the NaCl library to implement end-to-end encryption for all messages.'
  },
  {
    id: 'ndjson',
    term: 'NDJSON',
    slug: 'ndjson',
    meaning: 'Newline Delimited JSON',
    definition: 'A format for storing structured data that allows you to process one record at a time, where each line is a valid JSON value.',
    example: 'The logging service outputs events in NDJSON format, making it easy to stream and process millions of records without loading the entire file into memory.'
  },
  {
    id: 'ner',
    term: 'NER',
    slug: 'ner',
    meaning: 'Named-Entity Recognition',
    definition: 'A subtask of information extraction that seeks to locate and classify named entities mentioned in unstructured text into pre-defined categories such as person names, organizations, and locations.',
    example: 'The NLP model used NER to identify all the company names and people mentioned in the news article.'
  },
  {
    id: 'netcat',
    term: 'Netcat',
    slug: 'netcat',
    definition: 'A versatile command-line networking utility for reading from and writing to network connections using TCP or UDP.',
    example: 'He used `netcat` to quickly test if the firewall was blocking port 8080 on the server.'
  },
  {
    id: 'netfilter',
    term: 'Netfilter',
    slug: 'netfilter',
    definition: 'A framework provided by the Linux kernel that allows various networking-related operations to be implemented in the form of customized handlers. It is the basis for `iptables` and `nftables`.',
    example: 'The `iptables` firewall utility is actually a user-space tool for configuring the tables provided by the Netfilter framework in the kernel.'
  },
  {
    id: 'nfs',
    term: 'NFS',
    slug: 'nfs',
    meaning: 'Network File System',
    definition: 'A distributed file system protocol that allows a user on a client computer to access files over a computer network much like local storage is accessed.',
    example: 'All the lab computers mounted the shared software directory via NFS from a central server.'
  },
  {
    id: 'nginx-reverse-proxy',
    term: 'nginx Reverse Proxy',
    slug: 'nginx-reverse-proxy',
    definition: 'A server that sits in front of one or more web servers, forwarding client requests to them. This is useful for load balancing, caching, and SSL termination.',
    example: 'They used nginx as a reverse proxy to handle incoming SSL traffic and distribute requests to several backend application servers.'
  },
  {
    id: 'nim-language',
    term: 'Nim Language',
    slug: 'nim-language',
    definition: 'A statically typed, compiled systems programming language that is known for its performance, expressive syntax, and ability to compile to C, C++, or JavaScript.',
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
    meaning: 'Number used once',
    definition: 'An arbitrary number that can be used just once in a cryptographic communication. It helps prevent replay attacks.',
    example: 'The server included a nonce in its authentication challenge to ensure the response wasn\'t a captured and replayed old response.'
  },
  {
    id: 'nosql',
    term: 'NoSQL',
    slug: 'nosql',
    definition: 'A database that provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. Examples include document, key-value, and graph databases.',
    example: 'The social media app used a NoSQL database like MongoDB because its flexible schema was better for handling user profile data.'
  },
  {
    id: 'ntfs',
    term: 'NTFS',
    slug: 'ntfs',
    meaning: 'New Technology File System',
    definition: 'The primary file system used by Microsoft Windows operating systems. It offers improvements over FAT like better security and support for larger files.',
    example: 'He formatted the external hard drive as NTFS so he could store large video files that were over 4GB in size.'
  },
  {
    id: 'ntp',
    term: 'NTP',
    slug: 'ntp',
    meaning: 'Network Time Protocol',
    definition: 'A networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks.',
    example: 'All servers in the cluster were configured to sync their time with an NTP server to prevent issues with logging and distributed transactions.'
  },
  {
    id: 'null-pointer',
    term: 'Null Pointer',
    slug: 'null-pointer',
    definition: 'A pointer that does not point to any object or function. Attempting to access the memory location it represents (dereferencing) will usually cause a program to crash.',
    example: 'The program crashed with a "null pointer exception" because he tried to use an object that hadn\'t been initialized.'
  },
  {
    id: 'oauth',
    term: 'OAuth',
    slug: 'oauth',
    definition: 'An open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.',
    example: 'She used OAuth to sign in to the new app with her Google account, granting it permission to access her name and email address.'
  },
  {
    id: 'object-storage',
    term: 'Object Storage',
    slug: 'object-storage',
    definition: 'A data storage architecture that manages data as objects, as opposed to other storage architectures like file systems or block storage. Amazon S3 is a popular example.',
    example: 'The web application stored all user-uploaded images and videos in an object storage service for scalability and durability.'
  },
  {
    id: 'ocsp',
    term: 'OCSP',
    slug: 'ocsp',
    meaning: 'Online Certificate Status Protocol',
    definition: 'An Internet protocol used for obtaining the revocation status of an X.509 digital certificate.',
    example: 'When you visit a secure website, your browser may use OCSP to check if the site\'s SSL certificate has been revoked.'
  },
  {
    id: 'oidc',
    term: 'OIDC',
    slug: 'oidc',
    meaning: 'OpenID Connect',
    definition: 'An authentication layer on top of OAuth 2.0. It allows clients to verify the identity of the end-user based on the authentication performed by an authorization server.',
    example: 'The application used OIDC to handle user login, which provided a standard way to get the user\'s profile information after they authenticated with Google.'
  },
  {
    id: 'on-prem',
    term: 'On-Prem',
    slug: 'on-prem',
    meaning: 'On-premises',
    definition: 'Software that is installed and runs on computers on the premises of the person or organization using the software, rather than at a remote facility such as a cloud provider\'s data center.',
    example: 'Due to security regulations, the bank had to keep all its data in an on-prem data center instead of using the public cloud.'
  },
  {
    id: 'opcode',
    term: 'Opcode',
    slug: 'opcode',
    meaning: 'Operation Code',
    definition: 'The portion of a machine language instruction that specifies the operation to be performed.',
    example: 'The debugger showed the raw assembly, where each line consisted of an opcode like `MOV` or `ADD` and its operands.'
  },
  {
    id: 'opengl-shader',
    term: 'OpenGL Shader',
    slug: 'opengl-shader',
    definition: 'A small program written in a C-like language (GLSL) that runs on the GPU and controls how pixels, vertices, and other graphics primitives are rendered.',
    example: 'He wrote a custom fragment shader in OpenGL to create a special water reflection effect in his game.'
  },
  {
    id: 'openshift',
    term: 'OpenShift',
    slug: 'openshift',
    definition: 'A family of containerization software products from Red Hat, centered on a Kubernetes distribution packaged with additional tools for developers.',
    example: 'The enterprise chose OpenShift over plain Kubernetes because it provided a more complete and supported platform for their developers.'
  },
  {
    id: 'openssl',
    term: 'OpenSSL',
    slug: 'openssl',
    definition: 'A software library for applications that secure communications over computer networks against eavesdropping or need to identify the party at the other end. It is widely used to implement SSL/TLS.',
    example: 'He used the OpenSSL command-line tool to generate a self-signed certificate for his local development server.'
  },
  {
    id: 'orb-robotics',
    term: 'ORB (Robotics)',
    slug: 'orb-robotics',
    meaning: 'Oriented FAST and Rotated BRIEF',
    definition: 'A feature detection algorithm in computer vision used for tasks like object recognition and 3D reconstruction in robotics.',
    example: 'The robot used the ORB algorithm to identify key feature points in its camera feed to map its environment.'
  },
  {
    id: 'orm',
    term: 'ORM',
    slug: 'orm',
    meaning: 'Object-Relational Mapping',
    definition: 'A programming technique for converting data between incompatible type systems using object-oriented programming languages. It lets you interact with your database, like SQL, from your preferred language.',
    example: 'He used an ORM like Prisma so he could write TypeScript code to query the database instead of writing raw SQL statements.'
  },
  {
    id: 'os-hardening',
    term: 'OS Hardening',
    slug: 'os-hardening',
    definition: 'The process of securing a system by reducing its surface of vulnerability. This typically includes removing unnecessary software, disabling unused services, and configuring security settings.',
    example: 'The security policy required OS hardening on all production servers, which involved closing unused ports and applying strict access controls.'
  },
  {
    id: 'overlay-network',
    term: 'Overlay Network',
    slug: 'overlay-network',
    definition: 'A virtual computer network that is built on top of another network. Nodes in the overlay can be thought of as being connected by virtual or logical links.',
    example: 'Docker Swarm and Kubernetes use an overlay network to allow containers on different host machines to communicate as if they were on the same private network.'
  },
  {
    id: 'overprovisioning',
    term: 'Overprovisioning',
    slug: 'overprovisioning',
    definition: 'The practice of allocating more resources (like storage or compute power) to a system than are strictly necessary, to ensure performance during peak loads or to improve longevity (in the case of SSDs).',
    example: 'The SSD manufacturer uses overprovisioning, setting aside a portion of the drive\'s storage to help with wear leveling and performance.'
  },
  {
    id: 'paas',
    term: 'PaaS',
    slug: 'paas',
    meaning: 'Platform as a Service',
    definition: 'A cloud computing model where a third-party provider delivers hardware and software tools to users over the internet, allowing them to develop, run, and manage applications without building and maintaining the underlying infrastructure.',
    example: 'Heroku is a popular PaaS that allows developers to deploy web applications without worrying about managing servers or operating systems.'
  },
  {
    id: 'packet-sniffer',
    term: 'Packet Sniffer',
    slug: 'packet-sniffer',
    definition: 'A tool used to capture and analyze data packets traveling over a network. It can be used for network troubleshooting or for malicious purposes.',
    example: 'The network administrator used a packet sniffer like Wireshark to diagnose why the client couldn\'t connect to the server.'
  },
  {
    id: 'pam',
    term: 'PAM',
    slug: 'pam',
    meaning: 'Pluggable Authentication Modules',
    definition: 'A framework of libraries that provides a flexible, modular system for handling authentication tasks on Unix-like systems.',
    example: 'He configured the system\'s PAM modules to require two-factor authentication for all SSH logins.'
  },
  {
    id: 'pan-network',
    term: 'PAN Network',
    slug: 'pan-network',
    meaning: 'Personal Area Network',
    definition: 'A computer network for interconnecting electronic devices within an individual person\'s workspace.',
    example: 'Connecting your smartphone to your Bluetooth headphones creates a simple PAN.'
  },
  {
    id: 'patch-panel',
    term: 'Patch Panel',
    slug: 'patch-panel',
    definition: 'A mounted hardware assembly that contains ports to connect and manage incoming and outgoing LAN cables in a communication closet or data center.',
    example: 'The technician neatly organized all the office Ethernet runs by terminating them at the patch panel in the server rack.'
  },
  {
    id: 'pcie-lane',
    term: 'PCIe Lane',
    slug: 'pcie-lane',
    meaning: 'PCI Express Lane',
    definition: 'Consists of two differential signaling pairs, one for receiving and one for transmitting. The more lanes a PCIe slot has (e.g., x16), the more bandwidth it can provide.',
    example: 'For maximum performance, the graphics card was installed in the top PCIe x16 slot, which connects directly to the CPU and offers the most lanes.'
  },
  {
    id: 'pem-file',
    term: 'PEM File',
    slug: 'pem-file',
    meaning: 'Privacy-Enhanced Mail',
    definition: 'A Base64 encoded file format for storing cryptographic keys and certificates. It\'s a common format for SSL certificates.',
    example: 'To connect to the server via SSH, he had to provide his private key, which was stored in a `.pem` file.'
  },
  {
    id: 'pentest',
    term: 'Pentest',
    slug: 'pentest',
    meaning: 'Penetration Test',
    definition: 'An authorized simulated cyberattack on a computer system, performed to evaluate the security of the system.',
    example: 'The company hired a third-party firm to conduct a pentest on their new web application before it went live.'
  },
  {
    id: 'pfsense',
    term: 'pfSense',
    slug: 'pfsense',
    definition: 'A free and open source firewall and router that also features a unified threat management system, load balancing, and more.',
    example: 'The small business used a dedicated machine running pfSense as their powerful, low-cost network firewall.'
  },
  {
    id: 'pgp',
    term: 'PGP',
    slug: 'pgp',
    meaning: 'Pretty Good Privacy',
    definition: 'An encryption program that provides cryptographic privacy and authentication for data communication. It is used for signing, encrypting, and decrypting texts, e-mails, files, directories, and whole disk partitions.',
    example: 'Journalists often use PGP to encrypt their communications with sources to protect their identity.'
  },
  {
    id: 'phishing-kit',
    term: 'Phishing Kit',
    slug: 'phishing-kit',
    definition: 'A collection of software tools and website templates that makes it easy for attackers to create and launch phishing campaigns.',
    example: 'The attacker purchased a phishing kit on the dark web that included a convincing replica of a major bank\'s login page.'
  },
  {
    id: 'pid-controller',
    term: 'PID Controller',
    slug: 'pid-controller',
    meaning: 'Proportional-Integral-Derivative Controller',
    definition: 'A control loop mechanism employing feedback that is widely used in industrial control systems and a variety of other applications requiring continuously modulated control.',
    example: 'The drone uses a PID controller to constantly adjust its motor speeds to remain stable in the air.'
  },
  {
    id: 'ping-flood',
    term: 'Ping Flood',
    slug: 'ping-flood',
    definition: 'A simple denial-of-service attack where the attacker overwhelms the victim with ICMP "echo request" (ping) packets.',
    example: 'The server became unresponsive after it was targeted by a ping flood, as it spent all its resources trying to reply to the bogus requests.'
  },
  {
    id: 'pipeline-cache',
    term: 'Pipeline Cache',
    slug: 'pipeline-cache',
    definition: 'In CI/CD, a cache used to store dependencies or other files that don\'t change often between runs, speeding up the build process.',
    example: 'The build was much faster the second time because the pipeline cache had saved all the downloaded Node.js modules.'
  },
  {
    id: 'pki',
    term: 'PKI',
    slug: 'pki',
    meaning: 'Public Key Infrastructure',
    definition: 'A set of roles, policies, hardware, software and procedures needed to create, manage, distribute, use, store, and revoke digital certificates.',
    example: 'The entire system of SSL/TLS on the web relies on a global PKI to establish trust between browsers and web servers.'
  },
  {
    id: 'plasma-desktop',
    term: 'Plasma Desktop',
    slug: 'plasma-desktop',
    definition: 'A popular desktop environment from KDE for Linux systems, known for its modern appearance and extensive customizability.',
    example: 'He chose the Kubuntu distribution because he preferred the look and feel of the Plasma Desktop environment.'
  },
  {
    id: 'pm2',
    term: 'PM2',
    slug: 'pm2',
    definition: 'A popular process manager for Node.js applications that helps keep applications alive forever, reload them without downtime, and manage application logging.',
    example: 'He used PM2 to run his Node.js API in cluster mode, allowing it to take advantage of all CPU cores and automatically restart if it crashed.'
  },
  {
    id: 'poc-proof-of-concept',
    term: 'PoC',
    slug: 'poc-proof-of-concept',
    meaning: 'Proof of Concept',
    definition: 'A small exercise to test a design idea or assumption. The main purpose is to demonstrate functionality and verify a certain concept or theory has potential for real-world application.',
    example: 'Before building the full application, they created a small PoC to verify that the new machine learning algorithm would work as expected.'
  },
  {
    id: 'poe-injector',
    term: 'PoE Injector',
    slug: 'poe-injector',
    meaning: 'Power over Ethernet',
    definition: 'A device that adds electrical power into an Ethernet cable, allowing a single cable to provide both a data connection and electric power to devices like security cameras or wireless access points.',
    example: 'Since there was no power outlet near the security camera, he used a PoE injector to power it through the Ethernet cable.'
  },
  {
    id: 'pointer-arithmetic',
    term: 'Pointer Arithmetic',
    slug: 'pointer-arithmetic',
    definition: 'In languages like C and C++, it allows for performing arithmetic operations (like addition and subtraction) on pointers, which is used to navigate through arrays or blocks of memory.',
    example: 'He iterated through the array by using pointer arithmetic to increment the pointer to the next element in memory.'
  },
  {
    id: 'polynomial-hash',
    term: 'Polynomial Hash',
    slug: 'polynomial-hash',
    definition: 'A type of hash function that is particularly useful for efficiently calculating the hash of substrings of a larger string, often used in string searching algorithms.',
    example: 'The Rabin-Karp algorithm uses polynomial hashing to quickly find occurrences of a pattern within a text.'
  },
  {
    id: 'port-forwarding',
    term: 'Port Forwarding',
    slug: 'port-forwarding',
    definition: 'A networking technique that redirects a communication request from one address and port number combination to another while the packets are traversing a network gateway, such as a router or firewall.',
    example: 'He set up port forwarding on his router to make his home media server accessible from the internet.'
  },
  {
    id: 'postfix',
    term: 'Postfix',
    slug: 'postfix',
    definition: 'A free and open-source mail transfer agent (MTA) that routes and delivers electronic mail. It is a popular alternative to Sendmail.',
    example: 'The company\'s email server runs on Postfix to handle all incoming and outgoing mail.'
  },
  {
    id: 'postman',
    term: 'Postman',
    slug: 'postman',
    definition: 'A popular application used for API testing. It provides a graphical interface for making HTTP requests and viewing the responses.',
    example: 'The developer used Postman to test the new API endpoints and ensure they were returning the correct data and status codes.'
  },
  {
    id: 'pptp',
    term: 'PPTP',
    slug: 'pptp',
    meaning: 'Point-to-Point Tunneling Protocol',
    definition: 'An older VPN protocol for implementing virtual private networks. It is now considered insecure and has been largely replaced by protocols like OpenVPN and IPSec.',
    example: 'The IT department advised against using PPTP for the VPN connection due to its known security vulnerabilities.'
  },
  {
    id: 'prisma-orm',
    term: 'Prisma ORM',
    slug: 'prisma-orm',
    definition: 'A modern, open-source database toolkit and ORM (Object-Relational Mapper) for Node.js and TypeScript. It helps developers build applications faster and make fewer errors.',
    example: 'She chose Prisma ORM for her project because its auto-generated, type-safe client made database interactions much easier and safer.'
  },
  {
    id: 'process-fork',
    term: 'Process Fork',
    slug: 'process-fork',
    definition: 'An operation whereby a process creates a copy of itself. It is the primary method of process creation on Unix-like operating systems.',
    example: 'The web server would fork a new process to handle each incoming client connection, isolating them from each other.'
  },
  {
    id: 'prometheus',
    term: 'Prometheus',
    slug: 'prometheus',
    definition: 'A free and open-source systems monitoring and alerting toolkit originally built at SoundCloud.',
    example: 'The DevOps team set up Prometheus to scrape metrics from all their servers and Grafana to visualize the data in dashboards.'
  },
  {
    id: 'protocol-buffers',
    term: 'Protocol Buffers',
    slug: 'protocol-buffers',
    definition: 'A free and open-source cross-platform data format used to serialize structured data. It is useful in developing programs to communicate with each other over a network or for storing data.',
    example: 'Instead of using JSON, the microservices communicated using Protocol Buffers because it was faster to serialize and produced smaller payloads.'
  },
  {
    id: 'proxy-arp',
    term: 'Proxy ARP',
    slug: 'proxy-arp',
    definition: 'A technique by which a device on a given network answers the ARP queries for an IP address that is not on that network. The device is acting on behalf of another device.',
    example: 'The router used Proxy ARP to allow devices on the 192.168.1.0/24 subnet to reach a device on the 10.0.0.0/8 subnet without a default gateway.'
  },
  {
    id: 'pseudocode',
    term: 'Pseudocode',
    slug: 'pseudocode',
    definition: 'A detailed yet readable description of what a computer program or algorithm must do, expressed in a formally-styled natural language rather than in a programming language.',
    example: 'Before writing the actual function, the programmer first sketched it out in pseudocode to plan the logic.'
  },
  {
    id: 'pua-potentially-unwanted-app',
    term: 'PUA',
    slug: 'pua-potentially-unwanted-app',
    meaning: 'Potentially Unwanted Application',
    definition: 'A program that may not be overtly malicious but can degrade system performance, display intrusive advertising, or have other undesirable effects. They are often bundled with free software.',
    example: 'His antivirus software flagged the free PDF converter as a PUA because it tried to install a browser toolbar without his permission.'
  },
  {
    id: 'qemu',
    term: 'QEMU',
    slug: 'qemu',
    definition: 'A free and open-source emulator and virtualizer that can perform hardware virtualization, running operating systems and programs made for one machine on a different machine.',
    example: 'He used QEMU to emulate an ARM-based Raspberry Pi on his x86 laptop to test his software.'
  },
  {
    id: 'qos-profile',
    term: 'QoS Profile',
    slug: 'qos-profile',
    meaning: 'Quality of Service',
    definition: 'A set of rules that prioritizes network traffic to ensure that critical applications receive the necessary bandwidth and have lower latency.',
    example: 'The router applied a QoS profile that gave video conferencing traffic higher priority than large file downloads.'
  },
  {
    id: 'quantum-key-exchange',
    term: 'Quantum Key Exchange',
    slug: 'quantum-key-exchange',
    meaning: 'Quantum Key Distribution (QKD)',
    definition: 'A secure communication method which implements a cryptographic protocol involving components of quantum mechanics. It allows two parties to produce a shared random secret key known only to them, which can then be used to encrypt and decrypt messages.',
    example: 'Researchers are developing QKD systems that are theoretically impossible to eavesdrop on without the communicating parties knowing.'
  },
  {
    id: 'query-planner',
    term: 'Query Planner',
    slug: 'query-planner',
    definition: 'A component of a database management system that determines the most efficient way to execute a given query by considering various possible execution plans.',
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
    definition: 'A keyboard layout widely used in Central Europe. The main difference from QWERTY is that the Z and Y keys are swapped.',
    example: 'He was confused when typing on his German friend\'s laptop because it had a QWERTZ layout.'
  },
  {
    id: 'rabbitmq',
    term: 'RabbitMQ',
    slug: 'rabbitmq',
    definition: 'A popular open-source message broker that accepts and forwards messages. It acts as an intermediary for applications, allowing them to communicate with each other without being directly connected.',
    example: 'The application used a RabbitMQ queue to handle background jobs, ensuring that tasks were processed reliably even if the worker process restarted.'
  },
  {
    id: 'raid-0-1-5-10',
    term: 'RAID 0/1/5/10',
    slug: 'raid-0-1-5-10',
    meaning: 'Redundant Array of Independent Disks',
    definition: 'A data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both. Common levels include RAID 0 (striping), RAID 1 (mirroring), RAID 5 (striping with parity), and RAID 10 (a combination of 1 and 0).',
    example: 'He configured his NAS with a RAID 5 array, which provided a balance of storage capacity and protection against a single drive failure.'
  },
  {
    id: 'ramdisk',
    term: 'RAMDISK',
    slug: 'ramdisk',
    definition: 'A block of RAM that a computer\'s software is treating as if the memory were a disk drive. It offers extremely fast access times.',
    example: 'To speed up the compilation process, he created a RAM disk to store the temporary build files.'
  },
  {
    id: 'ransomware',
    term: 'Ransomware',
    slug: 'ransomware',
    definition: 'A type of malicious software that threatens to publish the victim\'s data or perpetually block access to it unless a ransom is paid.',
    example: 'The hospital\'s systems were taken offline by a ransomware attack that encrypted all their patient records.'
  },
  {
    id: 'raspberry-pi-os',
    term: 'Raspberry Pi OS',
    slug: 'raspberry-pi-os',
    definition: 'A Debian-based operating system specifically optimized for the Raspberry Pi hardware.',
    example: 'He installed Raspberry Pi OS on his new device to start his home automation project.'
  },
  {
    id: 'raster-image',
    term: 'Raster Image',
    slug: 'raster-image',
    definition: 'A data structure (or bitmap) representing a grid of pixels. Common raster image formats include JPEG, PNG, and GIF.',
    example: 'When you zoom in too far on a raster image, you can see the individual square pixels it\'s made of.'
  },
  {
    id: 'rdp',
    term: 'RDP',
    slug: 'rdp',
    meaning: 'Remote Desktop Protocol',
    definition: 'A proprietary protocol developed by Microsoft, which provides a user with a graphical interface to connect to another computer over a network connection.',
    example: 'From his home computer, he used RDP to connect to his work desktop and access his files.'
  },
  {
    id: 'rebase',
    term: 'Rebase',
    slug: 'rebase',
    definition: 'In version control systems like Git, to rebase is to move or combine a sequence of commits to a new base commit, often to create a cleaner, linear project history.',
    example: 'She chose to rebase her feature branch on top of the latest `main` branch to avoid creating an extra merge commit.'
  },
  {
    id: 'recursion',
    term: 'Recursion',
    slug: 'recursion',
    definition: 'In programming, a method of solving a problem where the solution depends on solutions to smaller instances of the same problem. A function that calls itself is recursive.',
    example: 'Calculating a factorial is a classic example of a problem that can be solved elegantly with recursion.'
  },

  {
    id: 'redis-sentinel',
    term: 'Redis Sentinel',
    slug: 'redis-sentinel',
    definition: 'A system that provides high availability for Redis. It is a monitoring and failover system that automatically handles the process of promoting a replica to a master when the current master is down.',
    example: 'They deployed a Redis Sentinel cluster to ensure their caching layer would remain available even if one of the Redis nodes failed.'
  },
  {
    id: 'redundant-routing',
    term: 'Redundant Routing',
    slug: 'redundant-routing',
    definition: 'The practice of having multiple network paths to a destination to ensure connectivity is maintained if one path fails.',
    example: 'The data center had redundant routing through two different ISPs, so an outage with one provider wouldn\'t take their services offline.'
  },
  {
    id: 'refactor',
    term: 'Refactor',
    slug: 'refactor',
    definition: 'The process of restructuring existing computer code—changing the factoring—without changing its external behavior. It is done to improve nonfunctional attributes of the software.',
    example: 'The code worked, but it was messy, so he decided to refactor it to make it more readable and easier to maintain.'
  },
  {
    id: 'regex',
    term: 'Regex',
    slug: 'regex',
    meaning: 'Regular Expression',
    definition: 'A sequence of characters that specifies a search pattern. They are widely used for string searching and manipulation.',
    example: 'He used a regex to validate that the user\'s input was a valid email address format.'
  },
  {
    id: 'registry-hive',
    term: 'Registry Hive',
    slug: 'registry-hive',
    definition: 'A logical group of keys, subkeys, and values in the Windows Registry. Each hive is a file on the disk that contains a portion of the registry.',
    example: 'He had to edit a value in the `HKEY_LOCAL_MACHINE` registry hive to fix a software issue.'
  },
  {
    id: 'remote-shell',
    term: 'Remote Shell',
    slug: 'remote-shell',
    definition: 'A command-line interface that allows a user to control a computer from a remote location. SSH is the most common tool for this.',
    example: 'The sysadmin used a remote shell to log into the server in another country and restart a failed service.'
  },
  {
    id: 'replication-controller',
    term: 'Replication Controller',
    slug: 'replication-controller',
    definition: 'In Kubernetes, a component that ensures a specified number of pod replicas are running at any one time.',
    example: 'The ReplicationController was configured to maintain three instances of the web server pod, so if one crashed, it would automatically start a new one.'
  },
  {
    id: 'restful-api',
    term: 'RESTful API',
    slug: 'restful-api',
    meaning: 'Representational State Transfer',
    definition: 'An application programming interface that uses HTTP requests to GET, PUT, POST, and DELETE data, following the principles of REST.',
    example: 'The mobile app communicated with the backend server by making calls to its RESTful API.'
  },
  {
    id: 'reverse-shell',
    term: 'Reverse Shell',
    slug: 'reverse-shell',
    definition: 'A type of shell in which the target machine communicates back to the attacking machine. The attacking machine has a listener port on which it receives the connection.',
    example: 'After exploiting a vulnerability, the hacker opened a reverse shell from the compromised server back to their own machine to gain control.'
  },
  {
    id: 'rgb-header',
    term: 'RGB Header',
    slug: 'rgb-header',
    definition: 'A connector on a PC motherboard that allows users to connect and control RGB LED strips and other lighting components.',
    example: 'He connected his RGB case fans to the 4-pin RGB header on his motherboard to synchronize all the lighting effects.'
  },
  {
    id: 'rootkit',
    term: 'Rootkit',
    slug: 'rootkit',
    definition: 'A collection of malicious software tools that enable an unauthorized user to gain control of a computer system without being detected.',
    example: 'The antivirus software had trouble detecting the infection because a rootkit was actively hiding the malicious files from the operating system.'
  },
  {
    id: 'rpc',
    term: 'RPC',
    slug: 'rpc',
    meaning: 'Remote Procedure Call',
    definition: 'When a computer program causes a procedure (subroutine) to execute in a different address space (commonly on another computer on a shared network) without the programmer needing to explicitly code the details for the remote interaction.',
    example: 'The microservices used an RPC framework to call functions on each other as if they were just local functions in the same program.'
  },
  {
    id: 'rpm-package',
    term: 'RPM Package',
    slug: 'rpm-package',
    definition: 'A file format used by Red Hat and its derivatives (like CentOS and Fedora) to distribute, install, and manage software.',
    example: 'He downloaded the `.rpm` package and used the `yum` command to install the software on his CentOS server.'
  },
  {
    id: 'rtos',
    term: 'RTOS',
    slug: 'rtos',
    meaning: 'Real-Time Operating System',
    definition: 'An operating system intended to serve real-time applications that process data as it comes in, typically without buffer delays.',
    example: 'The car\'s braking system is controlled by a microprocessor running an RTOS to ensure it responds instantly and predictably.'
  },
  {
    id: 'rtt-round-trip-time',
    term: 'RTT',
    slug: 'rtt-round-trip-time',
    meaning: 'Round Trip Time',
    definition: 'The length of time it takes for a signal to be sent plus the length of time it takes for an acknowledgment of that signal to be received.',
    example: 'His RTT to the game server was 150ms, which resulted in noticeable input lag.'
  },
  {
    id: 'saas',
    term: 'SaaS',
    slug: 'saas',
    meaning: 'Software as a Service',
    definition: 'A software distribution model in which a third-party provider hosts applications and makes them available to customers over the Internet.',
    example: 'Office 365 and Google Workspace are popular SaaS products, where you pay a subscription instead of buying the software outright.'
  },
  {
    id: 'saltstack',
    term: 'SaltStack',
    slug: 'saltstack',
    definition: 'An open-source configuration management and remote execution tool. It is used to automate the management and configuration of servers.',
    example: 'The sysadmin used SaltStack to push a security update to all 500 servers in the data center simultaneously.'
  },
  {
    id: 'sandbox-escape',
    term: 'Sandbox Escape',
    slug: 'sandbox-escape',
    definition: 'A type of security exploit where an attacker breaks out of the restricted environment of a sandbox and gains access to the host operating system.',
    example: 'The browser vulnerability allowed for a sandbox escape, letting malicious JavaScript code read files directly from the user\'s computer.'
  },
  {
    id: 'sata-port',
    term: 'SATA Port',
    slug: 'sata-port',
    meaning: 'Serial ATA',
    definition: 'An interface on a computer\'s motherboard used to connect storage devices like hard drives and SSDs.',
    example: 'He connected his new SSD to one of the empty SATA ports on the motherboard to increase his storage capacity.'
  },
  {
    id: 'sbom',
    term: 'SBOM',
    slug: 'sbom',
    meaning: 'Software Bill of Materials',
    definition: 'A formal, machine-readable inventory of software components and dependencies, information about those components, and their hierarchical relationships.',
    example: 'The company required an SBOM for all third-party software to better track vulnerabilities in their supply chain.'
  },
  {
    id: 'scalability',
    term: 'Scalability',
    slug: 'scalability',
    definition: 'The property of a system to handle a growing amount of work by adding resources to the system. This can be "scaling up" (adding resources to a single node) or "scaling out" (adding more nodes).',
    example: 'The cloud-based application was designed for scalability, allowing it to handle millions of users by automatically adding more servers as needed.'
  },
  {
    id: 'schema-migration',
    term: 'Schema Migration',
    slug: 'schema-migration',
    definition: 'The process of making incremental, reversible changes to a database schema, such as adding a new table or column, in a structured and version-controlled way.',
    example: 'The developer wrote a new schema migration script to add an `email` column to the `users` table.'
  },
  {
    id: 'scp-protocol',
    term: 'SCP Protocol',
    slug: 'scp-protocol',
    meaning: 'Secure Copy Protocol',
    definition: 'A means of securely transferring computer files between a local host and a remote host or between two remote hosts. It is based on the SSH protocol.',
    example: 'He used the `scp` command to securely copy the backup file from his local machine to the remote server.'
  },
  {
    id: 'sdram',
    term: 'SDRAM',
    slug: 'sdram',
    meaning: 'Synchronous Dynamic Random-Access Memory',
    definition: 'A type of DRAM that is synchronized with the system bus, allowing for faster data transfer rates.',
    example: 'Modern RAM like DDR4 and DDR5 are types of SDRAM, a major improvement over older asynchronous RAM.'
  },
  {
    id: 'secure-boot',
    term: 'Secure Boot',
    slug: 'secure-boot',
    definition: 'A security standard developed by members of the PC industry to help make sure that a device boots using only software that is trusted by the Original Equipment Manufacturer (OEM).',
    example: 'He had to disable Secure Boot in the BIOS to install an unsigned operating system like Linux.'
  },
  {
    id: 'selinux',
    term: 'SELinux',
    slug: 'selinux',
    meaning: 'Security-Enhanced Linux',
    definition: 'A Linux kernel security module that provides a mechanism for supporting access control security policies, including mandatory access controls (MAC).',
    example: 'The application couldn\'t write to the log file because an SELinux policy was preventing it from accessing that directory.'
  },
  {
    id: 'semantic-versioning',
    term: 'Semantic Versioning',
    slug: 'semantic-versioning',
    definition: 'A versioning scheme for software that uses a three-part version number (MAJOR.MINOR.PATCH) to convey the nature of changes.',
    example: 'They released version 2.0.0 of their library, indicating a major version with breaking changes.'
  },
  {
    id: 'sensor-fusion',
    term: 'Sensor Fusion',
    slug: 'sensor-fusion',
    definition: 'The process of combining sensor data from disparate sources such that the resulting information has less uncertainty than would be possible when these sources were used individually.',
    example: 'A self-driving car uses sensor fusion to combine data from its cameras, radar, and LiDAR to get an accurate picture of its surroundings.'
  },
  {
    id: 'serial-console',
    term: 'Serial Console',
    slug: 'serial-console',
    definition: 'A connection over a serial port (like RS-232) that provides a text-based interface to a device\'s operating system, often used for initial configuration or recovery of network devices and servers.',
    example: 'The router was not accessible over the network, so the engineer had to connect his laptop to its serial console port to fix it.'
  },
  {
    id: 'serverless',
    term: 'Serverless',
    slug: 'serverless',
    definition: 'A cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed.',
    example: 'He built his application using serverless functions, so he only paid for the compute time when his code was actually running.'
  },
  {
    id: 'session-hijacking',
    term: 'Session Hijacking',
    slug: 'session-hijacking',
    definition: 'A security attack where an attacker takes control of a user\'s session with a server, often by stealing their session cookie.',
    example: 'By stealing the session cookie, the attacker could perform session hijacking and access the user\'s online banking account.'
  },
  {
    id: 'sha-256',
    term: 'SHA-256',
    slug: 'sha-256',
    meaning: 'Secure Hash Algorithm 256-bit',
    definition: 'A cryptographic hash function that produces a 256-bit (32-byte) hash value. It is widely used in security applications and cryptocurrencies like Bitcoin.',
    example: 'The download page listed the SHA-256 hash of the file so users could verify its integrity after downloading.'
  },
  {
    id: 'shebang',
    term: 'Shebang',
    slug: 'shebang',
    definition: 'The character sequence (`#!`) at the beginning of a script file on Unix-like systems. It specifies the interpreter that should be used to execute the script.',
    example: 'The Python script started with the shebang `#!/usr/bin/env python3` to ensure it was executed with the correct interpreter.'
  },
  {
    id: 'sharding',
    term: 'Sharding',
    slug: 'sharding',
    definition: 'A type of database partitioning that separates one large database into many smaller, faster, more easily managed parts called data shards.',
    example: 'The database was sharded by user ID, with users A-M on one server and users N-Z on another, to distribute the load.'
  },
  {
    id: 'shell-script',
    term: 'Shell Script',
    slug: 'shell-script',
    definition: 'A computer program designed to be run by a Unix shell, a command-line interpreter.',
    example: 'He wrote a simple shell script to automate the process of backing up his files and compressing them into a zip archive.'
  },
  {
    id: 'side-channel-attack',
    term: 'Side-Channel Attack',
    slug: 'side-channel-attack',
    definition: 'A security attack that is based on information gained from the physical implementation of a cryptosystem, rather than brute force or theoretical weaknesses in the algorithms. Examples include analyzing power consumption or timing information.',
    example: 'Researchers were able to extract an encryption key from the CPU by analyzing the precise timing of its cache hits and misses, a type of side-channel attack.'
  },
  {
    id: 'simd',
    term: 'SIMD',
    slug: 'simd',
    meaning: 'Single Instruction, Multiple Data',
    definition: 'A class of parallel computers in which a single instruction operates on multiple data points simultaneously. Modern CPUs use SIMD instructions to accelerate tasks like video encoding and scientific computing.',
    example: 'The video processing library used SIMD instructions to apply the same brightness filter to multiple pixels at once, dramatically speeding up the operation.'
  },
  {
    id: 'singleton-pattern',
    term: 'Singleton Pattern',
    slug: 'singleton-pattern',
    definition: 'A software design pattern that restricts the instantiation of a class to one "single" instance. This is useful when exactly one object is needed to coordinate actions across the system.',
    example: 'The application used a singleton pattern for its database connection object to ensure that only one connection was open at a time.'
  },
  {
    id: 'sip-trunk',
    term: 'SIP Trunk',
    slug: 'sip-trunk',
    meaning: 'Session Initiation Protocol Trunk',
    definition: 'A virtual version of an analog phone line that uses SIP to connect a private branch exchange (PBX) to the internet, allowing for VoIP calls.',
    example: 'The company replaced its old, expensive phone lines with a SIP trunk to make calls over their existing internet connection.'
  },
  {
    id: 'sla',
    term: 'SLA',
    slug: 'sla',
    meaning: 'Service-Level Agreement',
    definition: 'A commitment between a service provider and a client. Particular aspects of the service – quality, availability, responsibilities – are agreed upon between the service provider and the service user.',
    example: 'The cloud provider\'s SLA guaranteed 99.99% uptime, and they would issue a credit if they failed to meet that promise.'
  },
  {
    id: 'smb-share',
    term: 'SMB Share',
    slug: 'smb-share',
    meaning: 'Server Message Block',
    definition: 'A shared resource (like a folder or printer) on a network that is made available using the SMB protocol, common in Windows networking.',
    example: 'He mapped the SMB share from the file server to his computer so it appeared as the Z: drive.'
  },
  {
    id: 'smtp-relay',
    term: 'SMTP Relay',
    slug: 'smtp-relay',
    meaning: 'Simple Mail Transfer Protocol',
    definition: 'A service that routes email through a trusted third-party to send it to the recipient. This is often used to improve deliverability and avoid being marked as spam.',
    example: 'The application used a service like SendGrid as an SMTP relay to ensure the password reset emails were reliably delivered to users.'
  },
  {
    id: 'snapshot',
    term: 'Snapshot',
    slug: 'snapshot',
    definition: 'In computing, the state of a system at a particular point in time. It is often used for backups and virtualization, allowing a system to be reverted to a previous state.',
    example: 'Before applying the risky software update, the administrator took a snapshot of the virtual machine so he could easily roll back if something went wrong.'
  },
  {
    id: 'soa-record',
    term: 'SOA Record',
    slug: 'soa-record',
    meaning: 'Start of Authority',
    definition: 'A type of DNS record that contains administrative information about the zone, especially regarding zone transfers.',
    example: 'The SOA record for the domain specified the primary name server and the email address of the domain administrator.'
  },
  {
    id: 'socket-timeout',
    term: 'Socket Timeout',
    slug: 'socket-timeout',
    definition: 'A limit on how long a program will wait for a response when communicating over a network socket before giving up.',
    example: 'The program threw a socket timeout error because the remote server did not respond within the 5-second limit.'
  },
  {
    id: 'software-raid',
    term: 'Software RAID',
    slug: 'software-raid',
    definition: 'A form of RAID that is implemented entirely within the operating system, without requiring a dedicated hardware RAID controller.',
    example: 'He used Windows Storage Spaces to create a mirrored array (Software RAID 1) from two spare hard drives.'
  },
  {
    id: 'solaris',
    term: 'Solaris',
    slug: 'solaris',
    definition: 'A Unix operating system originally developed by Sun Microsystems. It was known for its scalability and innovative features like DTrace and ZFS.',
    example: 'Before Linux became dominant in the data center, many enterprise systems ran on powerful SPARC servers using the Solaris OS.'
  },
  {
    id: 'source-mapping',
    term: 'Source Mapping',
    slug: 'source-mapping',
    definition: 'A file that maps from the transformed source code back to the original source code. This is essential for debugging code that has been minified or transpiled.',
    example: 'Thanks to the source map, when an error occurred in the minified JavaScript file, the browser\'s developer tools showed him the exact line in his original, readable code.'
  },
  {
    id: 'spa-single-page-app',
    term: 'SPA',
    slug: 'spa-single-page-app',
    meaning: 'Single-Page Application',
    definition: 'A web application that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages.',
    example: 'Gmail is a classic example of a SPA; you can navigate between emails and folders without the entire page ever reloading.'
  },
  {
    id: 'spooling',
    term: 'Spooling',
    slug: 'spooling',
    definition: 'A process where data is temporarily held to be used and executed by a device, program or the system. It is most often used for printing.',
    example: 'When you print a document, the data is first sent to a print spooler, which feeds it to the printer at a pace it can handle.'
  },
  {
    id: 'ssh-agent',
    term: 'SSH Agent',
    slug: 'ssh-agent',
    definition: 'A background program that handles passwords for SSH private keys. It stores your decrypted key in memory and uses it to authenticate you to remote servers without you having to re-enter your passphrase.',
    example: 'He added his SSH key to the SSH agent so he could connect to multiple GitHub repositories without typing his passphrase each time.'
  },
  {
    id: 'ssl-handshake',
    term: 'SSL Handshake',
    slug: 'ssl-handshake',
    definition: 'The process where a client and server establish a secure communication channel. They agree on encryption protocols, exchange certificates, and generate session keys.',
    example: 'The "lock" icon in your browser appears after a successful SSL handshake with the web server.'
  },
  {
    id: 'stack-frame',
    term: 'Stack Frame',
    slug: 'stack-frame',
    definition: 'A memory location on the call stack that stores information about a function call, including its parameters, local variables, and the return address.',
    example: 'When a function is called, a new stack frame is pushed onto the stack. When the function returns, its frame is popped off.'
  },
  {
    id: 'static-route',
    term: 'Static Route',
    slug: 'static-route',
    definition: 'A manually configured routing entry, as opposed to a route learned through a dynamic routing protocol.',
    example: 'The network administrator added a static route to the router to ensure traffic destined for the 10.0.1.0/24 network always went through the correct interface.'
  },
  {
    id: 'steganography',
    term: 'Steganography',
    slug: 'steganography',
    definition: 'The practice of concealing a file, message, image, or video within another file, message, image, or video.',
    example: 'He used steganography to hide a secret text file inside an innocuous-looking JPEG image.'
  },
  {
    id: 'sticky-bit',
    term: 'Sticky Bit',
    slug: 'sticky-bit',
    definition: 'A user ownership permission mode bit that can be assigned to files and directories on Unix-like systems. When set on a directory, it allows only the file\'s owner, the directory\'s owner, or the root user to rename or delete the files within it.',
    example: 'The `/tmp` directory has the sticky bit set to prevent one user from deleting another user\'s temporary files.'
  },
  {
    id: 'stp-cable',
    term: 'STP Cable',
    slug: 'stp-cable',
    meaning: 'Shielded Twisted Pair',
    definition: 'A type of copper telephone wiring in which the wires are twisted together and surrounded by a shielding material to protect them from electromagnetic interference.',
    example: 'They used more expensive STP cable in the factory to prevent interference from the heavy machinery.'
  },
  {
    id: 'subnetting',
    term: 'Subnetting',
    slug: 'subnetting',
    definition: 'The process of dividing a single large IP network into smaller sub-networks (subnets). This is done for security and performance reasons.',
    example: 'He practiced subnetting to calculate the correct subnet masks for dividing the company\'s Class C network into smaller departmental networks.'
  },
  {
    id: 'sudoers',
    term: 'sudoers',
    slug: 'sudoers',
    definition: 'The file, typically at `/etc/sudoers`, on Unix-like systems that controls which users can execute commands with superuser privileges using the `sudo` command.',
    example: 'The sysadmin carefully edited the `sudoers` file to grant the new developer permission to restart the web server service.'
  },
  {
    id: 'swap-memory',
    term: 'Swap Memory',
    slug: 'swap-memory',
    definition: 'A space on a hard disk that is used as virtual memory when the amount of physical RAM is full.',
    example: 'The system started using swap memory when RAM ran out, which made it very slow because disk is much slower than RAM.'
  },
  {
    id: 'swift-package',
    term: 'Swift Package',
    slug: 'swift-package',
    definition: 'A reusable piece of code, written in Swift, that can be easily shared and integrated into multiple apps or projects using the Swift Package Manager.',
    example: 'He added the Alamofire Swift package to his Xcode project to simplify making network requests.'
  },
  {
    id: 'symbolic-link',
    term: 'Symbolic Link',
    slug: 'symbolic-link',
    definition: 'A type of file on Unix-like systems that serves as a reference to another file or directory.',
    example: 'He created a symbolic link from `/usr/local/bin/node` to the actual Node.js executable so it would be in his `PATH`.'
  },
  {
    id: 'syscall',
    term: 'Syscall',
    slug: 'syscall',
    meaning: 'System Call',
    definition: 'The programmatic way in which a computer program requests a service from the kernel of the operating system it is executed on.',
    example: 'When a program wants to read a file, it makes a `read` syscall to ask the operating system kernel to perform the operation.'
  },
  {
    id: 'sysctl',
    term: 'Sysctl',
    slug: 'sysctl',
    definition: 'A utility in Unix-like systems used to read and modify the attributes of the system kernel such as network settings and memory management.',
    example: 'He used `sysctl` to increase the maximum number of open file descriptors allowed by the kernel.'
  },
  {
    id: 'syslog',
    term: 'Syslog',
    slug: 'syslog',
    definition: 'A standard for message logging. It allows separation of the software that generates messages, the system that stores them, and the software that reports and analyzes them.',
    example: 'All network devices were configured to send their logs to a central syslog server for easier monitoring and analysis.'
  },
  {
    id: 'systemd',
    term: 'Systemd',
    slug: 'systemd',
    definition: 'A software suite that provides an array of system components for Linux operating systems, including an init system that is responsible for starting and managing services.',
    example: 'He used `systemctl`, the command for controlling systemd, to start the `apache2` service.'
  },
  {
    id: 'taint-node',
    term: 'Taint Node',
    slug: 'taint-node',
    definition: 'In Kubernetes, a taint is applied to a node to repel a set of pods. A pod must have a "toleration" for the taint to be scheduled on that node.',
    example: 'They applied a taint to the GPU-enabled nodes to ensure that only pods specifically requesting a GPU would be scheduled there.'
  },
  {
    id: 'tdp-cpu',
    term: 'TDP (CPU)',
    slug: 'tdp-cpu',
    meaning: 'Thermal Design Power',
    definition: 'The maximum amount of heat generated by a computer chip or component (e.g. a CPU or GPU) that the cooling system is designed to dissipate under any workload.',
    example: 'The CPU had a TDP of 125 watts, so he needed to buy a powerful air cooler to keep it from overheating.'
  },
  {
    id: 'telnet',
    term: 'Telnet',
    slug: 'telnet',
    definition: 'An application protocol used on the Internet or local area networks to provide a bidirectional interactive text-oriented communication facility using a virtual terminal connection. It is now considered insecure because it transmits data in cleartext.',
    example: 'For security reasons, access to the server was only allowed via SSH; Telnet was disabled.'
  },
  {
    id: 'tensor',
    term: 'Tensor',
    slug: 'tensor',
    definition: 'In machine learning, a multi-dimensional array of numbers. It is a generalization of vectors (1D tensor) and matrices (2D tensor).',
    example: 'The machine learning model processed the input image as a 3D tensor representing its height, width, and color channels.'
  },
  {
    id: 'terraform',
    term: 'Terraform',
    slug: 'terraform',
    definition: 'An open-source infrastructure as code (IaC) software tool that enables users to define and provision a datacenter infrastructure using a high-level configuration language.',
    example: 'The DevOps team used Terraform to define their entire AWS cloud infrastructure in code, making it reproducible and version-controlled.'
  },
  {
    id: 'thread-pool',
    term: 'Thread Pool',
    slug: 'thread-pool',
    definition: 'A software design pattern for achieving concurrency. It maintains a number of threads that are waiting for tasks to be allocated to them for concurrent execution.',
    example: 'The web server used a thread pool to handle incoming requests, avoiding the overhead of creating a new thread for every single request.'
  },
  {
    id: 'throughput',
    term: 'Throughput',
    slug: 'throughput',
    definition: 'The amount of material or items passing through a system or process. In networking, it refers to the rate of successful data delivery over a communication channel.',
    example: 'The network switch had a total throughput of 10 Gbps, which was more than enough for the office\'s needs.'
  },
  {
    id: 'token-bucket',
    term: 'Token Bucket',
    slug: 'token-bucket',
    definition: 'An algorithm used in packet switched computer networks and telecommunications networks to control the rate at which data is sent, allowing for bursts of traffic.',
    example: 'The API used a token bucket algorithm for rate limiting, allowing a client to make a burst of 100 requests before being throttled.'
  },
  {
    id: 'totp',
    term: 'TOTP',
    slug: 'totp',
    meaning: 'Time-based One-Time Password',
    definition: 'An algorithm that computes a one-time password from a shared secret key and the current time. It is a common method for two-factor authentication.',
    example: 'He enabled two-factor authentication on his account, which required him to enter a TOTP from his authenticator app after his password.'
  },
  {
    id: 'tpm-2-0',
    term: 'TPM 2.0',
    slug: 'tpm-2-0',
    meaning: 'Trusted Platform Module',
    definition: 'A secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys. Version 2.0 is a modern standard.',
    example: 'Windows 11 requires a TPM 2.0 chip to be present and enabled for enhanced security features like disk encryption.'
  },
  {
    id: 'trace-route',
    term: 'Trace Route',
    slug: 'trace-route',
    definition: 'A network diagnostic command for displaying possible routes (paths) and measuring transit delays of packets across an Internet Protocol (IP) network.',
    example: 'He ran a traceroute to the google.com server to see the path the data packets were taking and identify any bottlenecks.'
  },
  {
    id: 'transaction-log',
    term: 'Transaction Log',
    slug: 'transaction-log',
    definition: 'A file in a database system that records all transactions and the database modifications made by each transaction. It is crucial for disaster recovery.',
    example: 'To restore the database to a specific point in time, the administrator restored the last full backup and then applied the subsequent transaction logs.'
  },
  {
    id: 'turing-complete',
    term: 'Turing Complete',
    slug: 'turing-complete',
    definition: 'A system is said to be Turing complete if it can be used to simulate any single-taped Turing machine. Essentially, it means the system can perform any computation that any other programmable computer can.',
    example: 'Surprisingly, games like Minecraft and even some CSS features are technically Turing complete, meaning you could (theoretically) build a computer inside them.'
  },
  {
    id: 'tmux',
    term: 'Tmux',
    slug: 'tmux',
    definition: 'A terminal multiplexer. It lets you switch easily between several programs in one terminal, detach them (they keep running in the background) and reattach them to a different terminal.',
    example: 'He used tmux to keep his long-running script active on the remote server even after he disconnected his SSH session.'
  },
  {
    id: 'ttl-dns',
    term: 'TTL (DNS)',
    slug: 'ttl-dns',
    meaning: 'Time to Live',
    definition: 'A setting that tells the DNS resolver how long to cache a query before it should request a new one from the authoritative name server.',
    example: 'He set a low TTL of 60 seconds on the DNS record before the migration so the IP address change would propagate quickly.'
  },
  {
    id: 'tty',
    term: 'TTY',
    slug: 'tty',
    meaning: 'Teletypewriter',
    definition: 'A command in Unix and Unix-like operating systems to print the file name of the terminal connected to standard input.',
    example: 'A program might use the `tty` command to check if it is being run in an interactive terminal session.'
  },
  {
    id: 'tun-tap-adapter',
    term: 'Tun/Tap Adapter',
    slug: 'tun-tap-adapter',
    definition: 'Virtual network kernel drivers. TUN simulates a layer 3 (network) device and TAP simulates a layer 2 (Ethernet) device. They are often used by VPN software.',
    example: 'The OpenVPN client created a virtual TUN adapter on his computer to tunnel all his network traffic securely to the VPN server.'
  },
  {
    id: 'two-factor-auth',
    term: 'Two-Factor Auth',
    slug: 'two-factor-auth',
    meaning: 'Two-Factor Authentication (2FA)',
    definition: 'A security method that requires the user to provide two different authentication factors to verify themselves, such as a password and a code from their phone.',
    example: 'He secured his email account by enabling two-factor authentication, making it much harder for an attacker to gain access.'
  },
  {
    id: 'type-erasure',
    term: 'Type Erasure',
    slug: 'type-erasure',
    definition: 'In programming languages with generics, the process by which generic type information is removed by the compiler at compile-time. Java is a well-known example.',
    example: 'Because of type erasure in Java, you cannot check at runtime if a `List` was a `List<String>` or a `List<Integer>`.'
  },
  {
    id: 'typescript',
    term: 'TypoScript',
    slug: 'typescript',
    definition: 'A configuration language used in the TYPO3 content management system. Despite its name, it is not related to TypeScript.',
    example: 'The TYPO3 developer wrote some TypoScript to configure the rendering of the content elements on the page.'
  },
  {
    id: 'ubuntu-server',
    term: 'Ubuntu Server',
    slug: 'ubuntu-server',
    definition: 'A server-oriented version of the Ubuntu Linux distribution, known for its ease of use and strong community support.',
    example: 'He deployed his new web application on a cloud VM running Ubuntu Server.'
  },
  {
    id: 'udp-hole-punching',
    term: 'UDP Hole Punching',
    slug: 'udp-hole-punching',
    definition: 'A technique used in computer networking for establishing a direct UDP connection between two parties in private networks behind NATs.',
    example: 'Peer-to-peer games often use UDP hole punching to allow players to connect directly to each other for lower latency.'
  },
  {
    id: 'ui-virtualization',
    term: 'UI Virtualization',
    slug: 'ui-virtualization',
    definition: 'A technique where only the visible UI elements are created and rendered, improving performance when displaying very large lists of items.',
    example: 'The chat application used UI virtualization to smoothly display a history of thousands of messages without creating a UI element for every single one.'
  },
  {
    id: 'ulid',
    term: 'ULID',
    slug: 'ulid',
    meaning: 'Universally Unique Lexicographically Sortable Identifier',
    definition: 'A 128-bit identifier that is sortable by creation time.',
    example: 'They used ULIDs for their database primary keys because they are unique like UUIDs but can be sorted chronologically.'
  },
  {
    id: 'uma-unified-memory-arch',
    term: 'UMA',
    slug: 'uma-unified-memory-arch',
    meaning: 'Unified Memory Architecture',
    definition: 'A computer memory architecture where the CPU and GPU share the same system RAM, as opposed to the GPU having its own dedicated VRAM.',
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
    definition: 'The practice of running a computer processor at a lower clock speed than it is rated for, to reduce power consumption and heat.',
    example: 'He decided to underclock the CPU in his silent home server to make the fans run slower and quieter.'
  },
  {
    id: 'unicode-escape',
    term: 'Unicode Escape',
    slug: 'unicode-escape',
    definition: 'A way of representing a Unicode character using its code point in ASCII text, such as `\\u20AC` for the Euro symbol.',
    example: 'The JSON file used a Unicode escape sequence to represent a special character that couldn\'t be typed directly.'
  },
  {
    id: 'unmarshalling',
    term: 'Unmarshalling',
    slug: 'unmarshalling',
    definition: 'The process of transforming a representation of an object from a serialized format (like a string) back into a live object in memory. Also known as deserialization.',
    example: 'The program received a JSON string from the API and then performed unmarshalling to convert it into a user object.'
  },
  {
    id: 'unmount',
    term: 'Unmount',
    slug: 'unmount',
    definition: 'In computing, to make a disk or device inaccessible to the file system. It is the opposite of mounting.',
    example: 'It\'s important to properly "eject" or unmount a USB drive before physically removing it to prevent data corruption.'
  },
  {
    id: 'upstream-branch',
    term: 'Upstream Branch',
    slug: 'upstream-branch',
    definition: 'In Git, the remote branch that a local branch is tracking. It is the branch you fetch from and push to.',
    example: 'He configured his local `main` branch to track the `origin/main` upstream branch.'
  },
  {
    id: 'uptime',
    term: 'Uptime',
    slug: 'uptime',
    definition: 'A measure of the time a computer or system has been "up" and running without a restart or crash.',
    example: 'The Linux server had an uptime of 365 days, showcasing its stability.'
  },
  {
    id: 'url-encoding',
    term: 'URL Encoding',
    slug: 'url-encoding',
    definition: 'A mechanism for encoding information in a Uniform Resource Identifier (URI) under certain circumstances. It replaces unsafe ASCII characters with a "%" followed by two hexadecimal digits.',
    example: 'The space character in the search query was converted to `%20` through URL encoding before being sent to the server.'
  },
  {
    id: 'usb-debugging',
    term: 'USB Debugging',
    slug: 'usb-debugging',
    definition: 'A mode on Android devices that allows a developer to communicate with the device over a USB connection, using tools like ADB.',
    example: 'To install the custom app on his phone, he first had to enable USB Debugging in the developer options.'
  },
  {
    id: 'userland',
    term: 'Userland',
    slug: 'userland',
    definition: 'The part of a computer\'s memory (or user space) where user applications run. It is separate from the kernel space, which is reserved for the operating system.',
    example: 'A crash in a userland application will typically not bring down the entire operating system, unlike a crash in kernel space.'
  },
  {
    id: 'utm-machine',
    term: 'UTM Machine',
    slug: 'utm-machine',
    meaning: 'Universal Turing Machine',
    definition: 'A theoretical Turing machine that can simulate an arbitrary Turing machine on arbitrary input. The UTM proves that it is possible to build a single, general-purpose computer.',
    example: 'The concept of the UTM is the theoretical foundation for all modern, general-purpose computers.'
  },
  {
    id: 'uuid',
    term: 'UUID',
    slug: 'uuid',
    meaning: 'Universally Unique Identifier',
    definition: 'A 128-bit number used to identify information in computer systems. The probability of two UUIDs being the same is virtually zero.',
    example: 'The database used UUIDs as the primary key for the `products` table to ensure every product had a globally unique ID.'
  },
  {
    id: 'vagrant',
    term: 'Vagrant',
    slug: 'vagrant',
    definition: 'An open-source software product for building and maintaining portable virtual software development environments.',
    example: 'He used Vagrant to define a reproducible development environment in a single file, which his teammates could then spin up with a single command.'
  },
  {
    id: 'validation-schema',
    term: 'Validation Schema',
    slug: 'validation-schema',
    definition: 'A formal definition of the structure and rules that data must adhere to. It is used to check if the data is valid.',
    example: 'The application used a validation schema to ensure that the user\'s age was a positive number and their email was in a valid format before saving it.'
  },
  {
    id: 'vanilla-js',
    term: 'Vanilla JS',
    slug: 'vanilla-js',
    definition: 'A slang term for plain, standard JavaScript without any additional libraries or frameworks like React or jQuery.',
    example: 'For the simple landing page, he decided to use Vanilla JS instead of including a large framework.'
  },
  {
    id: 'vdsl',
    term: 'VDSL',
    slug: 'vdsl',
    meaning: 'Very-high-bit-rate Digital Subscriber Line',
    definition: 'A DSL technology providing faster data transmission over a single flat untwisted or twisted pair of copper wires.',
    example: 'He upgraded from ADSL to VDSL to get faster internet speeds over his existing phone line.'
  },
  {
    id: 'vectorization',
    term: 'Vectorization',
    slug: 'vectorization',
    definition: 'The process of converting an algorithm from a scalar implementation, which operates on a single pair of operands at a time, to a vector implementation, which operates on a set of operands at once. This is often done using SIMD instructions.',
    example: 'The programmer used vectorization to significantly speed up the image processing code by operating on multiple pixels simultaneously.'
  },
  {
    id: 'version-control',
    term: 'Version Control',
    slug: 'version-control',
    definition: 'A system that records changes to a file or set of files over time so that you can recall specific versions later. Git is the most popular version control system.',
    example: 'The software team used a version control system to collaborate on code and track every change made to the project.'
  },
  {
    id: 'vesa-mount',
    term: 'VESA Mount',
    slug: 'vesa-mount',
    definition: 'A standard for mounting flat panel monitors, TVs, and other displays to stands or wall mounts.',
    example: 'He bought a monitor arm with a standard VESA mount to attach his monitor and free up desk space.'
  },
  {
    id: 'vfio',
    term: 'VFIO',
    slug: 'vfio',
    meaning: 'Virtual Function I/O',
    definition: 'A framework that allows a user-space driver to have direct, secure access to hardware devices. It is commonly used for GPU passthrough to virtual machines.',
    example: 'He configured VFIO to pass through his Nvidia GPU to a Windows VM, allowing him to play games with near-native performance.'
  },
  {
    id: 'vlan',
    term: 'VLAN',
    slug: 'vlan',
    meaning: 'Virtual Local Area Network',
    definition: 'Any broadcast domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2). It allows you to group devices into separate logical networks on the same physical switch.',
    example: 'The company put the guest Wi-Fi on a separate VLAN to isolate it from the internal corporate network for security.'
  },
  {
    id: 'vm-snapshot',
    term: 'VM Snapshot',
    slug: 'vm-snapshot',
    definition: 'A copy of a virtual machine\'s state (including its memory, settings, and disks) at a given point in time.',
    example: 'Before installing the risky software, he took a VM snapshot so he could instantly revert the machine to its previous state if anything went wrong.'
  },
  {
    id: 'vnc',
    term: 'VNC',
    slug: 'vnc',
    meaning: 'Virtual Network Computing',
    definition: 'A graphical desktop-sharing system that uses the Remote Frame Buffer protocol (RFB) to remotely control another computer.',
    example: 'He used a VNC client to remotely view and control the desktop of his Linux server, which didn\'t have a physical monitor attached.'
  },
  {
    id: 'voice-vlan',
    term: 'Voice VLAN',
    slug: 'voice-vlan',
    definition: 'A special VLAN dedicated to carrying voice traffic from IP phones. This allows voice traffic to be prioritized and separated from data traffic.',
    example: 'The network switch was configured with a voice VLAN to ensure that VoIP calls would have clear audio quality even when the network was busy.'
  },
  {
    id: 'vpc',
    term: 'VPC',
    slug: 'vpc',
    meaning: 'Virtual Private Cloud',
    definition: 'An on-demand configurable pool of shared computing resources allocated within a public cloud environment, providing a certain level of isolation between the different organizations using the resources.',
    example: 'He launched his new application servers inside a VPC in AWS to create a logically isolated section of the cloud that he could control.'
  },
  {
    id: 'vram',
    term: 'VRAM',
    slug: 'vram',
    meaning: 'Video RAM',
    definition: 'A type of RAM used to store image data for a computer display. It acts as a buffer between the CPU and the video card.',
    example: 'The new graphics card had 12GB of VRAM, which was essential for playing modern games at high resolutions.'
  },
  {
    id: 'vpn-tunnel',
    term: 'VPN Tunnel',
    slug: 'vpn-tunnel',
    definition: 'An encrypted connection over a public network (like the internet) that allows for the secure transmission of data as if it were on a private network.',
    example: 'When working from the coffee shop, he connected to the company\'s VPN tunnel to securely access internal files.'
  },
  {
    id: 'vps',
    term: 'VPS',
    slug: 'vps',
    meaning: 'Virtual Private Server',
    definition: 'A virtual machine sold as a service by an Internet hosting service. It runs its own copy of an operating system, and customers have superuser-level access to that OS instance.',
    example: 'Instead of expensive dedicated hardware, he ran his website on a small VPS that cost only $5 a month.'
  },
  {
    id: 'vsync',
    term: 'Vsync',
    slug: 'vsync',
    meaning: 'Vertical Sync',
    definition: 'A graphics technology that synchronizes the frame rate of a game with a monitor\'s refresh rate to prevent screen tearing.',
    example: 'He enabled Vsync in the game settings to fix the distracting screen tearing, but it introduced a small amount of input lag.'
  },
  {
    id: 'wake-on-lan',
    term: 'Wake-on-LAN',
    slug: 'wake-on-lan',
    definition: 'An Ethernet or Token Ring computer networking standard that allows a computer to be turned on or awakened by a network message.',
    example: 'He used a mobile app to send a Wake-on-LAN "magic packet" to turn on his home PC remotely.'
  },
  {
    id: 'wan-optimization',
    term: 'WAN Optimization',
    slug: 'wan-optimization',
    definition: 'A collection of techniques for increasing data-transfer efficiencies across a wide-area network (WAN).',
    example: 'The company installed a WAN optimization appliance in each branch office to speed up file transfers and reduce bandwidth usage.'
  },
  {
    id: 'wasm',
    term: 'WASM',
    slug: 'wasm',
    meaning: 'WebAssembly',
    definition: 'An open standard that defines a portable binary-code format for executable programs, enabling high-performance applications on web pages.',
    example: 'They compiled their C++ video editing application to WASM to run it directly in the web browser with near-native speed.'
  },
  {
    id: 'watchdog-timer',
    term: 'Watchdog Timer',
    slug: 'watchdog-timer',
    definition: 'An electronic timer that is used to detect and recover from computer malfunctions. If the timer is not reset periodically (a process called "kicking the watchdog"), it will trigger a system reset.',
    example: 'The embedded system in the Mars rover uses a watchdog timer to automatically reboot itself if the software ever freezes.'
  },
  {
    id: 'webrtc',
    term: 'WebRTC',
    slug: 'webrtc',
    meaning: 'Web Real-Time Communication',
    definition: 'A free, open-source project providing web browsers and mobile applications with real-time communication (RTC) via simple APIs.',
    example: 'Browser-based video chat applications like Google Meet use WebRTC to establish direct peer-to-peer connections for streaming audio and video.'
  },
  {
    id: 'websocket',
    term: 'WebSocket',
    slug: 'websocket',
    definition: 'A computer communications protocol, providing full-duplex communication channels over a single TCP connection. It is used for real-time applications like live chat and online gaming.',
    example: 'The live stock ticker on the website used a WebSocket to receive real-time price updates from the server without constantly polling it.'
  },
  {
    id: 'whitelisting',
    term: 'Whitelisting',
    slug: 'whitelisting',
    definition: 'The practice of specifying an index of approved software applications that are permitted to be present and active on a computer system. It is the opposite of blacklisting.',
    example: 'The high-security server used application whitelisting, where only a few pre-approved programs were allowed to run, and all others were blocked.'
  },
  {
    id: 'wireshark',
    term: 'Wireshark',
    slug: 'wireshark',
    definition: 'A free and open-source packet analyzer. It is used for network troubleshooting, analysis, software and communications protocol development, and education.',
    example: 'The network engineer used Wireshark to capture the network traffic and figure out why the application was failing to connect to the database.'
  },
  {
    id: 'wmi',
    term: 'WMI',
    slug: 'wmi',
    meaning: 'Windows Management Instrumentation',
    definition: 'A set of extensions to the Windows Driver Model that provides an operating system interface through which instrumented components provide information and notification.',
    example: 'The system administrator wrote a script that used WMI to query the amount of free disk space on all the servers in the network.'
  },
  {
    id: 'wsl',
    term: 'WSL',
    slug: 'wsl',
    meaning: 'Windows Subsystem for Linux',
    definition: 'A compatibility layer for running Linux binary executables natively on Windows 10 and Windows Server 2019.',
    example: 'He used WSL to run his favorite Linux command-line tools like `grep` and `awk` directly within his Windows environment.'
  },
  {
    id: 'write-back-cache',
    term: 'Write-Back Cache',
    slug: 'write-back-cache',
    definition: 'A caching method where modifications to data in the cache are not immediately written to the main memory. Instead, they are written back at a later time.',
    example: 'The storage controller used a write-back cache with a battery backup to speed up write operations without risking data loss on power failure.'
  },
  {
    id: 'write-ahead-log',
    term: 'Write-Ahead Log',
    slug: 'write-ahead-log',
    definition: 'A standard method for ensuring data integrity in database systems. All modifications are written to a log before they are applied to the database itself.',
    example: 'The database uses a write-ahead log so that in the event of a crash, it can recover by replaying the committed transactions from the log.'
  },
  {
    id: 'x-509-certificate',
    term: 'X.509 Certificate',
    slug: 'x-509-certificate',
    definition: 'A digital certificate that uses the widely accepted X.509 public key infrastructure (PKI) standard to verify that a public key belongs to the user, computer or service identity contained within the certificate.',
    example: 'The SSL certificate used by the web server was an X.509 certificate signed by a trusted Certificate Authority.'
  },
  {
    id: 'xamp-stack',
    term: 'XAMP Stack',
    slug: 'xamp-stack',
    definition: 'A free and open-source cross-platform web server solution stack package developed by Apache Friends, consisting mainly of the Apache HTTP Server, MariaDB database, and interpreters for scripts written in the PHP and Perl programming languages.',
    example: 'As a beginner, he installed XAMPP to easily set up a local PHP and MySQL development environment on his Windows machine.'
  },
  {
    id: 'x86_64',
    term: 'x86_64',
    slug: 'x86_64',
    definition: 'The 64-bit version of the x86 instruction set, the instruction set architecture for most modern desktop and laptop computers.',
    example: 'He downloaded the x86_64 version of the software, as he was running a 64-bit Windows operating system.'
  },
  {
    id: 'xcode',
    term: 'Xcode',
    slug: 'xcode',
    definition: 'Apple\'s integrated development environment (IDE) for macOS, used to develop software for macOS, iOS, iPadOS, watchOS, and tvOS.',
    example: 'To build his new iPhone app, he had to download and install Xcode from the Mac App Store.'
  },
  {
    id: 'xfce',
    term: 'XFCE',
    slug: 'xfce',
    definition: 'A lightweight desktop environment for Unix-like operating systems. It aims to be fast and low on system resources, while still being visually appealing and user friendly.',
    example: 'He installed XFCE on his old laptop to give it a fast and responsive desktop experience without consuming too much RAM.'
  },
  {
    id: 'xml-rpc',
    term: 'XML-RPC',
    slug: 'xml-rpc',
    meaning: 'XML Remote Procedure Call',
    definition: 'A remote procedure call (RPC) protocol which uses XML to encode its calls and HTTP as a transport mechanism. It\'s a simpler predecessor to SOAP.',
    example: 'The legacy system had an API that used XML-RPC, which was more complex to work with than modern JSON-based REST APIs.'
  },
  {
    id: 'xor-encryption',
    term: 'XOR Encryption',
    slug: 'xor-encryption',
    definition: 'A simple type of encryption where the original text is combined with a key using the bitwise XOR operation. Applying the same key again decrypts the message.',
    example: 'While not secure for serious use, simple malware sometimes uses XOR encryption to weakly obfuscate its network traffic.'
  },
  {
    id: 'yarn',
    term: 'Yarn',
    slug: 'yarn',
    definition: 'A package manager for your code. It allows you to use and share code with other developers. It is a popular alternative to npm for JavaScript projects.',
    example: 'He ran `yarn install` to download all the dependencies listed in his `package.json` file.'
  },
  {
    id: 'yarn-resource-manager',
    term: 'YARN',
    slug: 'yarn-resource-manager',
    meaning: 'Yet Another Resource Negotiator',
    definition: 'A core component of Apache Hadoop that is responsible for resource management and job scheduling.',
    example: 'The YARN Resource Manager allocated containers on the cluster nodes to run the MapReduce job.'
  },
  {
    id: 'yubikey',
    term: 'YubiKey',
    slug: 'yubikey',
    definition: 'A hardware authentication device that provides a strong, second factor of authentication. It plugs into a USB port and generates one-time passwords or uses public-key cryptography.',
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
    definition: 'A combined file system and logical volume manager known for its high data integrity, support for large storage capacities, and features like snapshots and copy-on-write.',
    example: 'He built his home NAS using ZFS to protect his data from silent corruption and to easily create snapshots before making changes.'
  },
  {
    id: 'zig-programming-language',
    term: 'Zig',
    slug: 'zig-programming-language',
    definition: 'A general-purpose programming language and toolchain for maintaining robust, optimal, and reusable software. It is a modern alternative to C.',
    example: 'The developer chose Zig for the embedded project because it gave him low-level control over memory without the manual memory management of C.'
  },
  {
    id: 'zram',
    term: 'ZRAM',
    slug: 'zram',
    definition: 'A Linux kernel module that creates a compressed block device in RAM. This can be used for swap space, effectively increasing the amount of usable memory in the system.',
    example: 'He enabled zram on his Raspberry Pi to create a compressed swap space in RAM, which was much faster than using the slow SD card for swap.'
  },
  {
    id: 'zsh',
    term: 'Zsh',
    slug: 'zsh',
    meaning: 'Z shell',
    definition: 'A Unix shell that can be used as an interactive login shell and as a command interpreter for shell scripting. It is an extended Bourne shell with a large number of improvements.',
    example: 'He switched from Bash to Zsh and installed "Oh My Zsh" to get powerful plugin support and better autocompletion.'
  },
  {
    id: 'ztp-zero-touch-provisioning',
    term: 'ZTP',
    slug: 'ztp-zero-touch-provisioning',
    meaning: 'Zero Touch Provisioning',
    definition: 'A feature that allows network devices to be configured and deployed automatically without manual intervention.',
    example: 'With ZTP, the technician could simply plug in the new network switch, and it would automatically download its configuration from a central server.'
  },
  {
    id: 'z-wave',
    term: 'Z-Wave',
    slug: 'z-wave',
    definition: 'A wireless communications protocol used primarily for home automation. It creates a mesh network where devices can relay signals to each other.',
    example: 'He built his smart home system using Z-Wave devices because of their reliability and low power consumption.'
  },
  {
    id: 'zero-day',
    term: 'Zero-Day',
    slug: 'zero-day',
    definition: 'A software security flaw that is known to the software vendor but doesn\'t have a patch in place to fix it. An attack using a zero-day vulnerability is a zero-day attack.',
    example: 'The hackers were able to breach the company\'s network by exploiting a zero-day vulnerability in their web browser.'
  },
  {
    id: 'zero-trust',
    term: 'Zero-Trust',
    slug: 'zero-trust',
    definition: 'A security model which is a strategic approach to cybersecurity that secures an organization by eliminating implicit trust and continuously validating every stage of a digital interaction.',
    example: 'The company moved to a Zero Trust model, where every user and device must be authenticated and authorized before accessing any resource, regardless of their location.'
  },
  {
    id: 'zombie-process',
    term: 'Zombie Process',
    slug: 'zombie-process',
    definition: 'A process on a Unix-like operating system that has completed execution but still has an entry in the process table. It occurs when the parent process fails to "reap" its child process.',
    example: 'The `ps` command showed several zombie processes, which indicated a bug in the parent application that wasn\'t cleaning up its children correctly.'
  },
  {
    id: 'zonal-dns',
    term: 'Zonal DNS',
    slug: 'zonal-dns',
    definition: 'Refers to managing DNS records within a specific zone. A zone is a portion of the domain name space that is managed by a specific organization or administrator.',
    example: 'Changes to the company\'s website records were made in their specific zonal DNS file, without affecting the parent domain.'
  },
  {
    id: 'zookeeper-apache',
    term: 'Zookeeper (Apache)',
    slug: 'zookeeper-apache',
    definition: 'A centralized service for maintaining configuration information, naming, providing distributed synchronization, and providing group services for large distributed systems.',
    example: 'Distributed systems like Kafka and Hadoop use ZooKeeper for cluster coordination and leader election.'
  },
  {
    id: 'mobo',
    term: 'Mobo',
    slug: 'mobo',
    meaning: 'Motherboard',
    definition: 'Slang for Motherboard, the main printed circuit board in a computer.',
    example: 'I need to upgrade my mobo to support the new CPU.'
  },
  {
    id: 'proc',
    term: 'Proc',
    slug: 'proc',
    meaning: 'Processor',
    definition: 'Slang for Processor or CPU (Central Processing Unit).',
    example: 'What proc are you running in that gaming rig?'
  },
  {
    id: 'vidcard-vgpu',
    term: 'Vidcard / VGPU',
    slug: 'vidcard-vgpu',
    meaning: 'Video Card / Graphics Processing Unit',
    definition: 'Slang for Video Card or Graphics Processing Unit (GPU).',
    example: 'I need a better vidcard to play this game on ultra settings.'
  },
  {
    id: 'thermal-paste-tim',
    term: 'Thermal Paste (TIM)',
    slug: 'thermal-paste-tim',
    meaning: 'Thermal Interface Material',
    definition: 'A substance applied between a CPU/GPU and its heatsink to improve heat transfer.',
    example: 'My CPU was overheating, so I had to clean off the old gunk and reapply some fresh thermal paste.'
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
    meaning: 'Quality of Life Patch',
    definition: 'A software update that doesn\'t add major new features, but instead focuses on improving usability and user experience.',
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
    meaning: 'Technical Debt',
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
    definition: 'The unintended, meaningless data that may be present in a variable or memory location that has been declared but not yet initialized.',
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
    definition: 'Refers to information-technology systems and solutions built and used inside organizations without explicit organizational approval.',
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
  }
];

    
