
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
    id: 'cooler',
    term: 'Cooler / AIO',
    slug: 'cooler',
    definition: 'Slang for a CPU cooler, a device that dissipates heat from a computer\'s central processing unit (CPU). An AIO (All-in-One) is a self-contained liquid cooler.',
    example: 'My CPU temps were getting high, so I upgraded from the stock cooler to a 240mm AIO.'
  },
  {
    id: 'vid-card',
    term: 'Vid Card / GFX Card',
    slug: 'vid-card',
    definition: 'Slang for a graphics card (GPU), the component responsible for rendering images, video, and animations for display.',
    example: 'I need a new vid card if I want to play the latest games at 4K resolution.'
  },
  {
    id: 'mem-sticks',
    term: 'Mem Sticks',
    slug: 'mem-sticks',
    definition: 'Slang for RAM (Random Access Memory) modules, which provide volatile memory for the system to store active data.',
    example: 'I\'m running out of memory when video editing; I should probably add two more mem sticks.'
  },
  {
    id: 'power-brick',
    term: 'Power Brick / Juice Box',
    slug: 'power-brick',
    definition: 'Slang for a Power Supply Unit (PSU), the component that supplies electrical power to all the other parts of a computer.',
    example: 'Make sure your juice box has enough wattage to handle that new power-hungry graphics card.'
  },
  {
    id: 'tim',
    term: 'TIM',
    slug: 'tim',
    definition: 'An acronym for Thermal Interface Material, commonly known as thermal paste. It is a substance applied between a heat source (like a CPU) and a heatsink to improve thermal conductivity.',
    example: 'Don\'t forget to apply a fresh layer of TIM when you re-install your CPU cooler.'
  },
  {
    id: 'throttling',
    term: 'Throttling',
    slug: 'throttling',
    definition: 'Short for thermal throttling, a safety mechanism where a component (like a CPU or GPU) reduces its performance to prevent overheating.',
    example: 'My laptop started lagging during the game; it must be throttling due to poor airflow.'
  },
  {
    id: 'solid-state',
    term: 'Solid State / Solid',
    slug: 'solid-state',
    definition: 'Slang for a Solid-State Drive (SSD), a type of storage device that uses flash memory, offering much faster performance than traditional hard drives.',
    example: 'I installed the OS on a solid state drive, and now my PC boots in seconds.'
  },
  {
    id: 'spinners',
    term: 'Spinners / Mechs',
    slug: 'spinners',
    definition: 'Slang for traditional Hard Disk Drives (HDDs), which use spinning magnetic platters (disks) to store data.',
    example: 'I use a fast SSD for my games and a couple of cheap spinners for mass media storage.'
  },
  {
    id: 'chassis-fans',
    term: 'Chassis Fans',
    slug: 'chassis-fans',
    definition: 'Fans mounted inside a computer case (chassis) to improve airflow and cool the internal components.',
    example: 'I added two more chassis fans at the front to pull in cool air over the hard drives.'
  },
  {
    id: 'sink',
    term: 'Sink',
    slug: 'sink',
    definition: 'Short for heatsink, a passive heat exchanger that transfers heat generated by an electronic or a mechanical device to a fluid medium, often air or a liquid coolant.',
    example: 'That massive sink on the VRMs should keep them from overheating during heavy loads.'
  },
  {
    id: 'pcie-lead',
    term: 'PCIe Lead',
    slug: 'pcie-lead',
    definition: 'Slang for a PCIe power cable, which provides auxiliary power to high-end graphics cards and other PCIe devices.',
    example: 'My new GPU requires three separate PCIe leads from the power supply.'
  },
  {
    id: 'sata-lead',
    term: 'SATA Lead',
    slug: 'sata-lead',
    definition: 'Slang for a SATA cable, used to connect storage drives (like SSDs and HDDs) and optical drives to the motherboard.',
    example: 'I need to buy another SATA lead to connect my new backup drive.'
  },
  {
    id: 'debug-buzzer',
    term: 'Debug Buzzer',
    slug: 'debug-buzzer',
    definition: 'A small speaker that connects to the motherboard and emits beep codes to help diagnose hardware issues during startup.',
    example: 'The PC wouldn\'t boot, but the debug buzzer gave three short beeps, which told me it was a RAM issue.'
  },
  {
    id: 'app',
    term: 'App',
    slug: 'app',
    definition: 'Short for application, a software program designed to perform a specific function.',
    example: 'Just download the app from the store to get started.'
  },
  {
    id: 'deps',
    term: 'Deps',
    slug: 'deps',
    definition: 'Short for dependencies, the external libraries or packages that a software project relies on to function.',
    example: 'After cloning the repo, the first thing I did was run `npm install` to fetch all the deps.'
  },
  {
    id: 'config',
    term: 'Config',
    slug: 'config',
    definition: 'Short for configuration, the set of parameters and settings that control how a piece of software or hardware operates.',
    example: 'You can change the port number in the app\'s config file.'
  },
  {
    id: 'repo',
    term: 'Repo',
    slug: 'repo',
    definition: 'Short for repository, a central location where code and its revision history are stored, managed, and tracked, usually with a version control system like Git.',
    example: 'I just pushed the latest changes to the main repo.'
  },
  {
    id: 'docs',
    term: 'Docs',
    slug: 'docs',
    definition: 'Short for documentation, the written text and illustrations that accompany a computer program or are embedded in the source code.',
    example: 'If you\'re unsure how to use that function, check the docs.'
  },
  {
    id: 'admin',
    term: 'Admin',
    slug: 'admin',
    definition: 'Short for administrator, a user who has full control over a system, network, or application.',
    example: 'I need to contact the server admin to get my password reset.'
  },
  {
    id: 'perms',
    term: 'Perms',
    slug: 'perms',
    definition: 'Short for permissions, the rules that grant or deny access to files, folders, or system resources.',
    example: 'The script failed to run because I didn\'t have the correct write perms on the directory.'
  },
  {
    id: 'init',
    term: 'Init',
    slug: 'init',
    definition: 'Short for initialization, the process of preparing a system, device, or program to begin operation.',
    example: 'The `init` function sets up all the necessary variables and connections.'
  },
  {
    id: 'temp-files',
    term: 'Temp Files / Temps',
    slug: 'temp-files',
    definition: 'Short for temporary files, which are created by programs to hold information temporarily while a file is being created or modified.',
    example: 'You can free up some disk space by clearing out your temps folder.'
  },
  {
    id: 'proc',
    term: 'Proc',
    slug: 'proc',
    definition: 'Short for process, an instance of a computer program that is being executed.',
    example: 'I opened the task manager to see which proc was using up all the CPU.'
  },
  {
    id: 'js',
    term: 'JS',
    slug: 'js',
    definition: 'Abbreviation for JavaScript, a high-level programming language that is one of the core technologies of the World Wide Web.',
    example: 'The entire front-end of the website is built with vanilla JS.'
  },
  {
    id: 'ts',
    term: 'TS',
    slug: 'ts',
    definition: 'Abbreviation for TypeScript, a programming language developed by Microsoft which is a strict syntactical superset of JavaScript and adds optional static typing.',
    example: 'We migrated our codebase from JS to TS to catch errors at compile time.'
  },
  {
    id: 'exe',
    term: 'Exe',
    slug: 'exe',
    definition: 'Short for executable, a file that causes a computer to perform indicated tasks according to encoded instructions, as opposed to a data file that must be parsed by a program.',
    example: 'Just run the installer.exe to start the setup process.'
  },
  {
    id: 'comp-errors',
    term: 'Comp Errors',
    slug: 'comp-errors',
    definition: 'Short for compilation errors, which are errors that occur when a compiler fails to translate source code into object code.',
    example: 'The build failed because of a dozen comp errors I need to fix first.'
  },
  {
    id: 'rt',
    term: 'RT',
    slug: 'rt',
    definition: 'Abbreviation for router, a networking device that forwards data packets between computer networks.',
    example: 'I had to reboot the RT to get the internet working again.'
  },
  {
    id: 'ap',
    term: 'AP',
    slug: 'ap',
    definition: 'Abbreviation for Access Point, a networking hardware device that allows other Wi-Fi devices to connect to a wired network.',
    example: 'The Wi-Fi signal is weak in the back office; we should install another AP there.'
  },
  {
    id: 'pcap',
    term: 'Pcap',
    slug: 'pcap',
    definition: 'Short for packet capture, which is the act of intercepting and logging data traffic passing over a digital network.',
    example: 'To diagnose the network issue, I ran a pcap using Wireshark to analyze the traffic.'
  },
  {
    id: 'fw',
    term: 'FW',
    slug: 'fw',
    definition: 'Abbreviation for firewall, a network security system that monitors and controls incoming and outgoing network traffic based on predetermined security rules.',
    example: 'The request was blocked by the corporate FW; we need to add an exception rule.'
  },
  {
    id: 'config-dump',
    term: 'Config Dump',
    slug: 'config-dump',
    definition: 'Slang for a configuration backup, a file containing the settings and parameters of a device like a router or switch.',
    example: 'Before making any changes, I always take a full config dump of the router.'
  },
  {
    id: 'bw',
    term: 'BW',
    slug: 'bw',
    definition: 'Abbreviation for bandwidth, the maximum rate of data transfer across a given path.',
    example: 'We need more BW if we\'re going to support video streaming for all employees.'
  },
  {
    id: 'ping-delay',
    term: 'Ping / Delay',
    slug: 'ping-delay',
    definition: 'Slang for latency, the time it takes for a data packet to travel from one designated point to another. "Ping" is also a utility to measure this latency.',
    example: 'My ping is over 200ms, which is why there\'s so much delay in the online game.'
  },
  {
    id: 'stack',
    term: 'Stack',
    slug: 'stack',
    definition: 'In networking, short for a switch stack, where multiple physical switches are interconnected and managed as a single logical switch.',
    example: 'We ran out of ports, so we need to add another switch to the stack.'
  },
  {
    id: 'lb',
    term: 'LB',
    slug: 'lb',
    definition: 'Abbreviation for Load Balancer, a device that acts as a reverse proxy and distributes network or application traffic across a number of servers.',
    example: 'The website can handle millions of users because the LB distributes the traffic across a farm of web servers.'
  },
  {
    id: 'nic',
    term: 'NIC',
    slug: 'nic',
    definition: 'Abbreviation for Network Interface Card, a computer hardware component that connects a computer to a computer network.',
    example: 'The server has a dual-port 10-gigabit NIC for high-speed network connectivity.'
  },
  {
    id: 'vm',
    term: 'VM',
    slug: 'vm',
    definition: 'Abbreviation for Virtual Machine, an emulation of a computer system that provides the functionality of a physical computer.',
    example: 'I\'m running a Linux VM on my Windows machine to test the application in a different environment.'
  },
  {
    id: 'image',
    term: 'Image',
    slug: 'image',
    definition: 'In DevOps, short for a container image (like a Docker image), which is a lightweight, standalone, executable package that includes everything needed to run a piece of software.',
    example: 'The CI/CD pipeline builds a new Docker image for every commit to the main branch.'
  },
  {
    id: 'env-vars',
    term: 'Env Vars',
    slug: 'env-vars',
    definition: 'Short for environment variables, a set of dynamic named values that can affect the way running processes will behave on a computer.',
    example: 'The database connection string is stored in an env var so we don\'t have to hardcode it.'
  },
  {
    id: 'config-mgmt',
    term: 'Config Mgmt',
    slug: 'config-mgmt',
    definition: 'Short for configuration management, the process for maintaining computer systems, servers, and software in a desired, consistent state.',
    example: 'We use Ansible for our config mgmt to ensure all our servers are identically configured.'
  },
  {
    id: 'reboot-bounce',
    term: 'Reboot / Bounce',
    slug: 'reboot-bounce',
    definition: 'Slang for restarting a server or a service. "Bouncing" a server means to reboot it.',
    example: 'The application is stuck; let\'s try to bounce the server to see if that fixes it.'
  },
  {
    id: 'debug',
    term: 'Debug',
    slug: 'debug',
    definition: 'Short for debugging, the process of finding and resolving defects or problems within a computer program that prevent correct operation.',
    example: 'I spent all morning trying to debug the issue with the user authentication flow.'
  },
  {
    id: 'deploy',
    term: 'Deploy',
    slug: 'deploy',
    definition: 'Short for deployment, the process of making software or updates available for use.',
    example: 'We are scheduled to deploy the new version to production on Friday night.'
  },
  {
    id: 'prod',
    term: 'Prod',
    slug: 'prod',
    definition: 'Short for the production environment, the live environment where software and other products are put into operation for their intended users.',
    example: 'Don\'t test new features in prod; use the dev environment for that.'
  },
  {
    id: 'dev',
    term: 'Dev',
    slug: 'dev',
    definition: 'Short for the development environment, where programmers do their work of building and testing software.',
    example: 'The feature works fine in dev, but it\'s breaking in the staging environment.'
  },
  {
    id: 'stage-stg',
    term: 'Stage / STG',
    slug: 'stage-stg',
    definition: 'Short for the staging environment, a setup that is an exact replica of the production environment used for final testing before deployment.',
    example: 'We need to run our final QA tests on STG before we can approve the release.'
  },
  {
    id: 'dt',
    term: 'DT',
    slug: 'dt',
    definition: 'Abbreviation for downtime, a period of time when a system is unavailable.',
    example: 'There will be a scheduled DT of 2 hours this weekend for server maintenance.'
  },
  {
    id: 'svc-account',
    term: 'Svc Account',
    slug: 'svc-account',
    definition: 'Short for service account, a special type of non-human account used by an application or a virtual machine to interact with other services.',
    example: 'The backup script runs under a specific svc account that only has permissions to read the files it needs.'
  },
  {
    id: 'mal',
    term: 'Mal',
    slug: 'mal',
    definition: 'Short for malware, software that is specifically designed to disrupt, damage, or gain unauthorized access to a computer system.',
    example: 'The security scan found some mal on the system that needs to be removed immediately.'
  },
  {
    id: 'sploit',
    term: 'Sploit',
    slug: 'sploit',
    definition: 'Slang for an exploit, a piece of code, a sequence of commands, or a method that takes advantage of a bug or vulnerability to cause unintended or unanticipated behavior.',
    example: 'A new sploit for that web server vulnerability was just released online.'
  },
  {
    id: 'vuln',
    term: 'Vuln',
    slug: 'vuln',
    definition: 'Short for vulnerability, a weakness in a system that can be exploited by a threat actor.',
    example: 'We need to patch that library immediately; it has a critical remote code execution vuln.'
  },
  {
    id: 'pentest',
    term: 'Pentest',
    slug: 'pentest',
    definition: 'Short for penetration testing, a simulated cyber attack against your computer system to check for exploitable vulnerabilities.',
    example: 'The company hired a third-party firm to conduct a pentest of their external network.'
  },
  {
    id: 'creds',
    term: 'Creds',
    slug: 'creds',
    definition: 'Short for credentials, such as a username and password, that are used to verify a user\'s identity.',
    example: 'Never hardcode creds in your source code; use a secret manager instead.'
  },
  {
    id: 'logger',
    term: 'Logger',
    slug: 'logger',
    definition: 'Short for keylogger, a type of surveillance software that has the capability to record every keystroke made on a computer.',
    example: 'The malware included a logger that was sending all the victim\'s passwords to a remote server.'
  },
  {
    id: '2fa',
    term: '2FA',
    slug: '2fa',
    definition: 'Abbreviation for Two-Factor Authentication, a security process where users provide two different authentication factors to verify themselves.',
    example: 'Even if someone steals your password, they can\'t log in without the 2FA code from your phone.'
  },
  {
    id: 'mitm',
    term: 'MITM',
    slug: 'mitm',
    definition: 'Abbreviation for Man-in-the-Middle, an attack where the attacker secretly relays and possibly alters the communications between two parties who believe they are directly communicating.',
    example: 'Using an unsecured public Wi-Fi network makes you vulnerable to MITM attacks.'
  },
  {
    id: '0-day',
    term: '0-day',
    slug: '0-day',
    definition: 'Short for a zero-day vulnerability, a flaw in software, hardware, or firmware that is known to the attacker but not the vendor, leaving no time to create a patch.',
    example: 'A hacking group used a 0-day exploit in the browser to compromise the target\'s machine.'
  },
  {
    id: 'bot-herd',
    term: 'Bot Herd',
    slug: 'bot-herd',
    definition: 'Slang for a botnet, a network of private computers infected with malicious software and controlled as a group without the owners\' knowledge.',
    example: 'The attacker used his massive bot herd to launch a DDoS attack against the company\'s website.'
  },
  {
    id: 'brick',
    term: 'Brick',
    slug: 'brick',
    definition: 'Slang for a device, such as a smartphone or router, that has been rendered completely non-functional, often due to a failed firmware update.',
    example: 'I tried to install custom firmware on my router, but something went wrong and now it\'s a brick.'
  },
  {
    id: 'lag',
    term: 'Lag',
    slug: 'lag',
    definition: 'Slang for a noticeable delay between an action and the response, often experienced in gaming or slow network connections.',
    example: 'The game is unplayable with this much lag; my character moves a full second after I press a key.'
  },
  {
    id: 'buggy-glitchy',
    term: 'Buggy / Glitchy',
    slug: 'buggy-glitchy',
    definition: 'Slang describing software that has many bugs or glitches, causing it to behave in unexpected or erroneous ways.',
    example: 'The new update is so buggy; the app keeps crashing every five minutes.'
  },
  {
    id: 'thermal-issue',
    term: 'Thermal Issue / Running Hot',
    slug: 'thermal-issue',
    definition: 'Slang for a problem with a device overheating, which can lead to performance degradation or hardware damage.',
    example: 'My laptop is running hot and the fans are constantly on full blast; I think it has a thermal issue.'
  },
  {
    id: 'oc',
    term: 'OC',
    slug: 'oc',
    definition: 'Abbreviation for overclock, the action of increasing a component\'s clock rate, running it at a higher speed than it was designed to run.',
    example: 'I managed to get a stable OC on my CPU, pushing it from 3.6 GHz to 4.2 GHz.'
  },
  {
    id: 'uv',
    term: 'UV',
    slug: 'uv',
    definition: 'Abbreviation for undervolt, the practice of reducing the voltage supplied to a component (like a CPU or GPU) to reduce heat and power consumption without sacrificing performance.',
    example: 'A slight UV on my laptop\'s GPU gave me better battery life and lower fan noise.'
  },
  {
    id: 'borked',
    term: 'Borked',
    slug: 'borked',
    definition: 'Slang meaning "broken" or "not working correctly," often used to describe software or a system that has been severely misconfigured or damaged.',
    example: 'I tried to edit the registry manually, and now my Windows installation is completely borked.'
  },
  {
    id: 'shortcut',
    term: 'Shortcut',
    slug: 'shortcut',
    definition: 'A key combination that performs a specific function when pressed. Also known as a hotkey.',
    example: 'Use the Ctrl+S shortcut to save your work quickly.'
  },
  {
    id: 'cmd',
    term: 'Cmd',
    slug: 'cmd',
    definition: 'Short for command, an instruction to a computer program to perform a specific task. Often refers to the Command Prompt in Windows.',
    example: 'Open cmd and type `ipconfig` to see your network settings.'
  },
  {
    id: 'ss',
    term: 'SS',
    slug: 'ss',
    definition: 'Abbreviation for screenshot, an image taken of the contents of a computer display.',
    example: 'Can you send me a ss of the error message you\'re seeing?'
  },
  {
    id: 'dimms',
    term: 'DIMMs',
    slug: 'dimms',
    definition: 'Dual In-line Memory Modules (DIMMs) are the physical RAM sticks that plug into a computer\'s motherboard.',
    example: 'I upgraded my PC by installing two new 16GB DIMMs for a total of 32GB of RAM.'
    },
    {
    id: 'vrms',
    term: 'VRMs',
    slug: 'vrms',
    definition: 'Voltage Regulator Modules (VRMs) are components on a motherboard that provide a clean and stable voltage to the CPU.',
    example: 'A motherboard with high-quality VRMs is essential for stable overclocking.'
    },
    {
    id: 'qvl',
    term: 'QVL',
    slug: 'qvl',
    definition: 'A Qualified Vendor List (QVL) is a list of components, like RAM or storage drives, that have been tested and confirmed to be compatible with a specific motherboard.',
    example: 'Before buying the RAM, I checked the motherboard\'s QVL to ensure it was officially supported.'
    },
    {
    id: 'post',
    term: 'POST',
    slug: 'post',
    definition: 'The Power-On Self-Test (POST) is the initial diagnostic sequence a computer runs when it is first turned on to check for basic hardware functionality.',
    example: 'The computer failed to POST and emitted a series of beeps, indicating a memory issue.'
    },
    {
    id: 'cmos-reset',
    term: 'CMOS reset',
    slug: 'cmos-reset',
    definition: 'A CMOS reset is the process of clearing the BIOS/UEFI settings on a motherboard back to their factory defaults, often done to fix boot issues.',
    example: 'After a failed overclock, I had to perform a CMOS reset by shorting the jumper on the motherboard.'
    },
    {
    id: 'debug-leds',
    term: 'Debug LEDs',
    slug: 'debug-leds',
    definition: 'Debug LEDs are a set of lights on a motherboard that indicate the status of key components (CPU, RAM, GPU, Boot) during the POST process to help diagnose startup failures.',
    example: 'The debug LEDs stayed lit on "DRAM," which told me there was a problem with the RAM sticks.'
    },
    {
    id: 'soc',
    term: 'SoC',
    slug: 'soc',
    definition: 'A System on a Chip (SoC) is an integrated circuit that combines all the main components of a computer, such as the CPU, GPU, and memory controller, onto a single chip.',
    example: 'Modern smartphones are powered by powerful and efficient SoCs that handle everything from processing to graphics.'
    },
    {
    id: 'ihs',
    term: 'IHS',
    slug: 'ihs',
    definition: 'The Integrated Heat Spreader (IHS) is the metal lid on top of a CPU that protects the delicate silicon die and helps transfer heat to the CPU cooler.',
    example: 'Some enthusiasts delid their CPUs to remove the IHS and apply liquid metal directly to the die for better cooling.'
    },
    {
    id: 'lga-socket',
    term: 'LGA socket',
    slug: 'lga-socket',
    definition: 'A Land Grid Array (LGA) socket is a type of CPU socket where the pins are on the motherboard and make contact with flat pads on the bottom of the CPU.',
    example: 'Intel CPUs commonly use an LGA socket, so you have to be careful not to bend the pins on the motherboard.'
    },
    {
    id: 'pga-socket',
    term: 'PGA socket',
    slug: 'pga-socket',
    definition: 'A Pin Grid Array (PGA) socket is a type of CPU socket where the pins are on the CPU itself and fit into holes on the motherboard socket.',
    example: 'AMD\'s AM4 platform uses a PGA socket, which is why the CPUs have pins on the bottom.'
    },
    {
    id: 'atx12v',
    term: 'ATX12V',
    slug: 'atx12v',
    definition: 'The ATX12V is a power supply standard that provides a dedicated 12-volt rail to the CPU through a 4-pin or 8-pin connector.',
    example: 'Don\'t forget to plug in the 8-pin ATX12V connector, or the CPU won\'t get any power.'
    },
    {
    id: 'eps-connector',
    term: 'EPS connector',
    slug: 'eps-connector',
    definition: 'An EPS connector is an 8-pin connector (often split into 4+4) that provides power to the CPU, typically used for high-end or server motherboards.',
    example: 'My new motherboard requires two EPS connectors to provide enough stable power for the high-core-count CPU.'
    },
    {
    id: 'fan-curve',
    term: 'Fan curve',
    slug: 'fan-curve',
    definition: 'A fan curve is a user-defined setting that dictates how fast a fan should spin based on the temperature of a component like the CPU or GPU.',
    example: 'I set an aggressive fan curve in the BIOS to keep my GPU cool during intense gaming sessions.'
    },
    {
    id: 'pwm-fan',
    term: 'PWM fan',
    slug: 'pwm-fan',
    definition: 'A Pulse Width Modulation (PWM) fan is a type of 4-pin fan that allows for precise speed control by the motherboard or a fan controller.',
    example: 'I replaced the stock case fans with PWM fans so they can run quietly at idle and ramp up only when needed.'
    },
    {
    id: 'dc-fan',
    term: 'DC fan',
    slug: 'dc-fan',
    definition: 'A DC fan is a 3-pin fan whose speed is controlled by varying the voltage supplied to it, which is less precise than PWM control.',
    example: 'Most cheap case fans are DC fans, which can be controlled by voltage adjustments in the BIOS.'
    },
    {
    id: 'shroud',
    term: 'Shroud',
    slug: 'shroud',
    definition: 'In hardware, a shroud is a cover used to direct airflow or conceal parts of a component, such as the fan shroud on a GPU or a PSU shroud in a PC case.',
    example: 'The new GPU has a sleek metal shroud that not only looks good but also helps direct air over the heatsink.'
    },
    {
    id: 'thermal-pad',
    term: 'Thermal pad',
    slug: 'thermal-pad',
    definition: 'A thermal pad is a soft, conductive material used to transfer heat between components, especially where there are gaps, like on VRAM chips or VRMs.',
    example: 'I had to replace the old, dried-out thermal pads on my graphics card to fix the overheating VRAM.'
    },
    {
    id: 'matx',
    term: 'MicroATX → “mATX”',
    slug: 'matx',
    definition: 'MicroATX (mATX) is a motherboard form factor that is smaller than standard ATX but larger than ITX, offering a balance of size and features.',
    example: 'I built a compact gaming PC using an mATX case and motherboard.'
    },
    {
    id: 'itx-board',
    term: 'ITX board',
    slug: 'itx-board',
    definition: 'An ITX (Information Technology eXtended) board is a very small motherboard form factor, ideal for building extremely compact or portable PCs.',
    example: 'Building a powerful system with an ITX board can be challenging due to the limited space for components and cooling.'
    },
    {
    id: 'flex-atx',
    term: 'Flex ATX',
    slug: 'flex-atx',
    definition: 'FlexATX is a motherboard form factor that is a smaller derivative of microATX, often used in slim or custom-built systems.',
    example: 'FlexATX boards are rare but are sometimes used in small form factor OEM systems like those from Dell or HP.'
    },
    {
    id: 'nvme-drive',
    term: 'NVMe drive',
    slug: 'nvme-drive',
    definition: 'An NVMe (Non-Volatile Memory Express) drive is a type of SSD that connects directly to the motherboard\'s PCIe bus, offering significantly faster speeds than SATA SSDs.',
    example: 'I upgraded to an NVMe drive, and now my applications and games load almost instantly.'
    },
    {
    id: 'qlc-ssd',
    term: 'QLC SSD',
    slug: 'qlc-ssd',
    definition: 'A QLC (Quad-Level Cell) SSD is a type of solid-state drive that stores four bits of data per cell, offering high capacity at a lower cost but with lower endurance and performance compared to TLC or MLC.',
    example: 'I bought a large QLC SSD for storing my game library because it was much cheaper than a TLC drive of the same size.'
    },
    {
    id: 'tlc-ssd',
    term: 'TLC SSD',
    slug: 'tlc-ssd',
    definition: 'A TLC (Triple-Level Cell) SSD is a type of solid-state drive that stores three bits of data per cell, offering a good balance of performance, endurance, and cost.',
    example: 'For my operating system drive, I chose a TLC SSD for its reliability and speed.'
    },
    {
    id: 'dram-less-ssd',
    term: 'DRAM-less SSD',
    slug: 'dram-less-ssd',
    definition: 'A DRAM-less SSD is a budget-oriented solid-state drive that lacks a dedicated DRAM cache, which can result in slower performance during sustained write operations.',
    example: 'DRAM-less SSDs are fine for light use, but they can feel slow when transferring large files.'
    },
    {
    id: 'vram-chips',
    term: 'VRAM chips',
    slug: 'vram-chips',
    definition: 'VRAM (Video RAM) chips are the dedicated memory modules on a graphics card used for storing image data and textures for the GPU to process.',
    example: 'The heatsink on the GPU makes direct contact with the VRAM chips to keep them cool.'
    },
    {
    id: 'gddr6x',
    term: 'GDDR6X',
    slug: 'gddr6x',
    definition: 'GDDR6X is a type of high-performance graphics memory that offers higher bandwidth than standard GDDR6, used in high-end GPUs.',
    example: 'NVIDIA\'s RTX 3080 was one of the first cards to feature ultra-fast GDDR6X memory.'
    },
    {
    id: 'hbm-memory',
    term: 'HBM memory',
    slug: 'hbm-memory',
    definition: 'High Bandwidth Memory (HBM) is a type of stacked DRAM that offers extremely wide memory buses for very high bandwidth, often used in high-performance computing and some GPUs.',
    example: 'Some professional GPUs use HBM memory for its massive bandwidth, which is crucial for scientific simulations.'
    },
    {
    id: 'chiplet-design',
    term: 'Chiplet design',
    slug: 'chiplet-design',
    definition: 'A chiplet design is a CPU architecture where multiple smaller dies (chiplets) are combined to create a single, more powerful processor, instead of using one large monolithic die.',
    example: 'AMD\'s Ryzen processors utilize a chiplet design, which improves manufacturing yields and scalability.'
    },
    {
    id: 'power-phases',
    term: 'Power phases',
    slug: 'power-phases',
    definition: 'Power phases refer to the number of individual voltage regulator circuits on a motherboard. More phases generally lead to cleaner and more stable power delivery to the CPU.',
    example: 'This high-end motherboard has a 16+2 power phase design, making it ideal for extreme overclocking.'
    },
    {
    id: 'pcb-trace',
    term: 'PCB trace',
    slug: 'pcb-trace',
    definition: 'A PCB (Printed Circuit Board) trace is a conductive path on a circuit board that connects different electronic components.',
    example: 'A scratch on the motherboard can sever a critical PCB trace and cause the entire board to fail.'
  },
  {
    id: 'bios-flashback',
    term: 'BIOS flashback',
    slug: 'bios-flashback',
    definition: 'BIOS Flashback is a feature on some motherboards that allows you to update the BIOS without needing a CPU or RAM installed.',
    example: 'I had to use BIOS Flashback to update the motherboard so it would support the new generation of CPU.'
  },
  {
    id: 'q-flash',
    term: 'Q-Flash',
    slug: 'q-flash',
    definition: 'Q-Flash is a feature on Gigabyte motherboards that allows you to update the BIOS from within the BIOS setup menu itself, without needing to boot into an operating system.',
    example: 'I updated the firmware easily by putting the BIOS file on a USB stick and using the Q-Flash utility.'
  },
  {
    id: 'flash-rom',
    term: 'Flash ROM',
    slug: 'flash-rom',
    definition: 'Flash ROM is a type of non-volatile computer memory that can be electrically erased and reprogrammed, commonly used for storing BIOS or UEFI firmware.',
    example: 'The BIOS update utility writes the new firmware directly to the motherboard\'s flash ROM chip.'
  },
  {
    id: 'bclk',
    term: 'BCLK',
    slug: 'bclk',
    definition: 'The Base Clock (BCLK) is the fundamental clock speed of a motherboard that other system clocks, such as for the CPU and RAM, are based on.',
    example: 'Advanced overclockers sometimes increase the BCLK to fine-tune their CPU and memory speeds, but it can cause instability.'
  },
  {
    id: 'xmp-profile',
    term: 'XMP profile',
    slug: 'xmp-profile',
    definition: 'An Extreme Memory Profile (XMP) is a setting in the BIOS that allows you to easily overclock your RAM to its advertised speeds with a single click.',
    example: 'My new RAM was running at a slow default speed until I enabled the XMP profile in the BIOS.'
  },
  {
    id: 'expo-profile',
    term: 'EXPO profile',
    slug: 'expo-profile',
    definition: 'EXPO (Extended Profiles for Overclocking) is AMD\'s one-click memory overclocking technology, similar to Intel\'s XMP, for DDR5 memory.',
    example: 'To get the best performance on my Ryzen system, I enabled the AMD EXPO profile for my DDR5 RAM.'
  },
  {
    id: 'gpu-core-clock',
    term: 'GPU core clock',
    slug: 'gpu-core-clock',
    definition: 'The GPU core clock is the speed at which the main processor on your graphics card operates, measured in MHz or GHz.',
    example: 'I overclocked the GPU core clock by 150 MHz to get a few extra frames per second in my games.'
  },
  {
    id: 'memory-clock',
    term: 'Memory clock',
    slug: 'memory-clock',
    definition: 'The memory clock is the speed at which the VRAM on a graphics card operates. A higher memory clock increases memory bandwidth.',
    example: 'After increasing the GPU core clock, I also pushed up the memory clock to get more performance.'
  },
  {
    id: 'shader-units',
    term: 'Shader units',
    slug: 'shader-units',
    definition: 'Shader units (also called CUDA cores or Stream Processors) are the small processors within a GPU that handle graphics rendering calculations.',
    example: 'A GPU with more shader units can typically handle more complex graphics and higher resolutions more easily.'
  },
  {
    id: 'tensor-cores',
    term: 'Tensor cores',
    slug: 'tensor-cores',
    definition: 'Tensor cores are specialized processing cores in NVIDIA GPUs designed to accelerate AI and machine learning tasks, including DLSS.',
    example: 'The Tensor cores in my RTX card are what allow it to run DLSS and dramatically improve frame rates.'
  },
  {
    id: 'rt-cores',
    term: 'RT cores',
    slug: 'rt-cores',
    definition: 'RT (Ray Tracing) cores are dedicated hardware in NVIDIA RTX GPUs that accelerate real-time ray tracing calculations for more realistic lighting and shadows.',
    example: 'Games with ray tracing run much better on cards with dedicated RT cores.'
  },
  {
    id: 'sm-units',
    term: 'SM units',
    slug: 'sm-units',
    definition: 'A Streaming Multiprocessor (SM) is a block within a GPU that contains shader units, RT cores, and Tensor cores. More SM units mean more parallel processing power.',
    example: 'The flagship GPU has twice the number of SM units as the mid-range card, giving it a huge performance advantage.'
  },
  {
    id: 'tgp',
    term: 'TGP',
    slug: 'tgp',
    definition: 'Total Graphics Power (TGP) is the maximum amount of power a graphics card is allowed to draw, including the GPU, VRAM, and other components.',
    example: 'The TGP of this laptop\'s GPU is only 80 watts, which limits its performance compared to the desktop version.'
  },
  {
    id: 'tdp-headroom',
    term: 'TDP headroom',
    slug: 'tdp-headroom',
    definition: 'TDP (Thermal Design Power) headroom is the amount of available power and thermal capacity a component has before it hits its performance limits.',
    example: 'This CPU cooler provides enough TDP headroom to allow the processor to boost to its maximum frequency for longer.'
  },
  {
    id: 'die-shrink',
    term: 'Die shrink',
    slug: 'die-shrink',
    definition: 'A die shrink is the process of manufacturing a CPU or GPU using a smaller fabrication process, resulting in a smaller, more power-efficient chip.',
    example: 'The new version of the CPU is essentially a die shrink of the previous one, offering better efficiency at the same performance.'
  },
  {
    id: 'fab-node',
    term: 'Fab node (ex: 5nm)',
    slug: 'fab-node',
    definition: 'A fab node refers to the specific semiconductor manufacturing process (e.g., 5nm) used to create a chip. A smaller node generally means more transistors in the same area.',
    example: 'The new GPUs are built on a 5nm fab node, which is why they are so much more powerful and efficient.'
  },
  {
    id: 'capacitor-bank',
    term: 'Capacitor bank',
    slug: 'capacitor-bank',
    definition: 'A capacitor bank is a group of capacitors on a motherboard or GPU used to smooth and stabilize the power delivery to critical components.',
    example: 'The capacitor bank on the back of the GPU helps prevent crashes from sudden power spikes.'
  },
  {
    id: 'vrm-heatsinks',
    term: 'VRM heatsinks',
    slug: 'vrm-heatsinks',
    definition: 'VRM heatsinks are metal blocks installed on top of the Voltage Regulator Modules on a motherboard to dissipate heat and prevent overheating.',
    example: 'Good VRM heatsinks are crucial for overclocking because the VRMs get very hot under load.'
  },
  {
    id: 'i-o-shield',
    term: 'I/O shield',
    slug: 'i-o-shield',
    definition: 'An I/O (Input/Output) shield is a metal plate that fits into the back of a PC case to cover the openings around the motherboard\'s rear ports.',
    example: 'Don\'t forget to install the I/O shield in the case before you put the motherboard in.'
  },
  {
    id: 'backplate',
    term: 'Backplate',
    slug: 'backplate',
    definition: 'A backplate is a metal or plastic plate attached to the back of a GPU to provide structural rigidity, protect components, and sometimes help with cooling.',
    example: 'The metal backplate on this graphics card prevents the heavy PCB from sagging over time.'
  },
  {
    id: 'hyperspeed-fan-mode',
    term: 'Hyperspeed fan mode',
    slug: 'hyperspeed-fan-mode',
    definition: 'Hyperspeed fan mode is a marketing term for a setting that runs the system\'s fans at their maximum RPM, often for quick cooling at the cost of being very loud.',
    example: 'I enabled hyperspeed fan mode before starting the benchmark to ensure the CPU wouldn\'t throttle.'
  },
  {
    id: 'thermal-runway',
    term: 'Thermal runway',
    slug: 'thermal-runway',
    definition: 'Thermal runaway is a dangerous situation where increasing temperature causes a further increase in temperature, potentially leading to component failure.',
    example: 'Without a proper heatsink, the component could experience thermal runaway and destroy itself.'
  },
  {
    id: 'vrm-throttling',
    term: 'VRM throttling',
    slug: 'vrm-throttling',
    definition: 'VRM throttling is when a motherboard\'s Voltage Regulator Modules overheat and reduce the power supplied to the CPU, causing the CPU to slow down.',
    example: 'My CPU performance was dropping during long renders due to VRM throttling on my cheap motherboard.'
  },
  {
    id: 'coil-whine',
    term: 'Coil whine',
    slug: 'coil-whine',
    definition: 'Coil whine is a high-pitched electronic noise that can be emitted by components like GPUs or PSUs when under a heavy electrical load.',
    example: 'My new graphics card is powerful, but the coil whine is really annoying when I\'m not wearing headphones.'
  },
  {
    id: 'silicon-aging',
    term: 'Silicon aging',
    slug: 'silicon-aging',
    definition: 'Silicon aging, or degradation, is the gradual decline in a chip\'s ability to operate at high frequencies or low voltages over time, especially when overclocked.',
    example: 'After years of heavy overclocking, my CPU is showing signs of silicon aging and requires more voltage to be stable.'
  },
  {
    id: 'binning',
    term: 'Binning',
    slug: 'binning',
    definition: 'Binning is the process of testing and sorting chips (like CPUs or GPUs) based on their quality and performance characteristics.',
    example: 'The flagship CPUs are the best binned chips from the factory, capable of reaching the highest clock speeds.'
  },
  {
    id: 'silicon-degradation',
    term: 'Silicon degradation',
    slug: 'silicon-degradation',
    definition: 'Silicon degradation is the process where a chip\'s performance worsens over time due to factors like high voltage and temperature, a form of wear-and-tear.',
    example: 'Pushing too much voltage through your CPU can accelerate silicon degradation and reduce its lifespan.'
  },
  {
    id: 'chip-lottery',
    term: 'Chip lottery',
    slug: 'chip-lottery',
    definition: 'Slang for the fact that not all chips of the same model perform identically due to manufacturing variations. Some will overclock better than others.',
    example: 'I lost the chip lottery; my CPU can barely overclock, while my friend\'s identical model hits record speeds.'
  },
  {
    id: 'memory-channels',
    term: 'Memory channels',
    slug: 'memory-channels',
    definition: 'Memory channels are the paths between the CPU and the RAM. Using multiple channels (e.g., dual-channel) increases memory bandwidth.',
    example: 'For the best performance, you should install two RAM sticks to run in dual-channel mode.'
  },
  {
    id: 'ecc-memory',
    term: 'ECC memory',
    slug: 'ecc-memory',
    definition: 'Error-Correcting Code (ECC) memory is a type of RAM that can detect and correct common kinds of internal data corruption, used in servers and workstations.',
    example: 'The server uses ECC memory to ensure data integrity for its critical financial calculations.'
  },
  {
    id: 'registered-memory',
    term: 'Registered memory',
    slug: 'registered-memory',
    definition: 'Registered (or buffered) memory has a register between the DRAM modules and the system\'s memory controller, reducing electrical load and allowing for more memory modules.',
    example: 'Servers with a large amount of RAM often require registered memory to function stably.'
  },
  {
    id: 'q-code',
    term: 'Q-code',
    slug: 'q-code',
    definition: 'A Q-Code is a two-digit hexadecimal code displayed on a small LED screen on some motherboards to provide detailed diagnostic information during POST.',
    example: 'The motherboard was stuck on Q-Code "A2," which means there\'s an issue with the storage drives.'
  },
  {
    id: 'fan-hub',
    term: 'Fan hub',
    slug: 'fan-hub',
    definition: 'A fan hub is a small PCB that allows you to connect multiple case fans to a single motherboard fan header, often with its own power source.',
    example: 'Since my motherboard only has two fan headers, I used a fan hub to connect all six of my case fans.'
  },
  {
    id: 'usb-header',
    term: 'USB header',
    slug: 'usb-header',
    definition: 'A USB header is a pin connector on a motherboard used to provide USB ports to the front panel of a PC case.',
    example: 'I connected the case\'s front USB cable to the USB 3.0 header on the motherboard.'
  },
  {
    id: 'front-panel-header',
    term: 'Front panel header',
    slug: 'front-panel-header',
    definition: 'The front panel header is a group of pins on a motherboard where the cables for the case\'s power button, reset button, and activity LEDs are connected.',
    example: 'Connecting the tiny wires to the front panel header is often the most tedious part of building a PC.'
  },
  {
    id: 'sata-hot-swap',
    term: 'SATA hot swap',
    slug: 'sata-hot-swap',
    definition: 'SATA hot swap is a feature that allows you to connect or disconnect a SATA drive while the computer is running, without needing to reboot.',
    example: 'The server\'s drive bay supports SATA hot swap, so I can replace a failed drive without any downtime.'
  },
  {
    id: 'raid-cache',
    term: 'RAID cache',
    slug: 'raid-cache',
    definition: 'A RAID cache is a temporary storage area on a RAID controller that is used to improve the performance of read and write operations to the disk array.',
    example: 'The RAID card has a 1GB cache with battery backup to protect against data loss during a power failure.'
  },
  {
    id: 'preboot',
    term: 'Preboot',
    slug: 'preboot',
    definition: 'The preboot environment is the stage of the boot process that occurs before the main operating system begins to load, including POST and BIOS/UEFI initialization.',
    example: 'Disk encryption software often runs in a preboot environment, requiring a password before the OS can even start.'
  },
  {
    id: 'boot-table',
    term: 'Boot table',
    slug: 'boot-table',
    definition: 'A boot table, or partition table, is a section of a storage drive that contains information about how the partitions are organized and which one is bootable.',
    example: 'If the boot table gets corrupted, the computer won\'t know where to find the operating system.'
  },
  {
    id: 'silent-bios-mode',
    term: 'Silent BIOS mode',
    slug: 'silent-bios-mode',
    definition: 'Silent BIOS mode is a setting, often on GPUs, that uses a less aggressive fan curve and lower power limits for quieter operation.',
    example: 'I flipped the switch on my GPU to enable silent BIOS mode because the fans were too loud.'
  },
  {
    id: 'vbios',
    term: 'VBIOS',
    slug: 'vbios',
    definition: 'A Video BIOS (VBIOS) is the firmware on a graphics card that controls its basic operations before the main OS drivers are loaded.',
    example: 'Some users flash a custom VBIOS onto their graphics card to unlock higher power limits.'
  },
  {
    id: 'gpu-sag',
    term: 'GPU sag',
    slug: 'gpu-sag',
    definition: 'GPU sag is the bending or drooping of a long, heavy graphics card over time due to its own weight in a standard horizontal installation.',
    example: 'I bought a small support bracket to prevent GPU sag and protect my motherboard\'s PCIe slot.'
  },
  {
    id: 'gpu-retention-bracket',
    term: 'GPU retention bracket',
    slug: 'gpu-retention-bracket',
    definition: 'A GPU retention bracket is a device designed to support the weight of a heavy graphics card and prevent it from sagging or damaging the PCIe slot.',
    example: 'The case came with a built-in GPU retention bracket, which was a nice feature.'
  },
  {
    id: 'daisy-chain-fans',
    term: 'Daisy chain fans',
    slug: 'daisy-chain-fans',
    definition: 'To daisy chain fans is to connect multiple fans to each other in a series, allowing them to be controlled and powered by a single motherboard header.',
    example: 'These new fans support daisy-chaining, which made cable management much cleaner.'
  },
  {
    id: 'dual-bios',
    term: 'Dual BIOS',
    slug: 'dual-bios',
    definition: 'Dual BIOS is a feature on some motherboards and GPUs that provides a backup BIOS chip in case the primary one becomes corrupted during a failed update.',
    example: 'After a bad BIOS flash, I was able to recover my motherboard by switching to the backup dual BIOS.'
  },
  {
    id: 'power-cycling',
    term: 'Power cycling',
    slug: 'power-cycling',
    definition: 'Power cycling is the process of turning a device off and then on again to reset it, often as a basic troubleshooting step.',
    example: 'The router was acting up, so I power-cycled it by unplugging it for 30 seconds.'
  },
  {
    id: 'fan-rpm',
    term: 'Fan RPM',
    slug: 'fan-rpm',
    definition: 'Fan RPM (Revolutions Per Minute) is the measurement of how fast a fan is spinning.',
    example: 'I can see in the monitoring software that my CPU fan is running at 1500 RPM.'
  },
  {
    id: 'nvlink',
    term: 'NVLink',
    slug: 'nvlink',
    definition: 'NVLink is a high-speed interconnect developed by NVIDIA to connect multiple GPUs together, allowing them to share memory and work on tasks simultaneously.',
    example: 'For my deep learning workstation, I used an NVLink bridge to connect two RTX 3090s.'
  },
  {
    id: 'gen4-lanes',
    term: 'Gen4 lanes',
    slug: 'gen4-lanes',
    definition: 'Gen4 lanes refer to the data pathways of a PCIe 4.0 interface, which offer double the bandwidth of the previous PCIe 3.0 generation.',
    example: 'This CPU provides 24 Gen4 lanes, which is enough for a GPU and a couple of fast NVMe drives.'
  },
  {
    id: 'gen5-ssd',
    term: 'Gen5 SSD',
    slug: 'gen5-ssd',
    definition: 'A Gen5 SSD is a solid-state drive that uses the PCIe 5.0 interface, offering theoretical speeds twice as fast as Gen4 SSDs.',
    example: 'I\'m waiting for Gen5 SSD prices to come down before I upgrade my storage.'
  },
  {
    id: 'acpi-tables',
    term: 'ACPI tables',
    slug: 'acpi-tables',
    definition: 'ACPI tables are data structures in the system firmware that describe the hardware to the operating system, enabling power management and device configuration.',
    example: 'An incorrect value in the ACPI tables can cause issues with how the OS handles sleep states.'
  },
  {
    id: 'i2c-bus',
    term: 'I2C bus',
    slug: 'i2c-bus',
    definition: 'The I2C (Inter-Integrated Circuit) bus is a simple, two-wire communication protocol used for communication between components on a motherboard, like sensors and RGB controllers.',
    example: 'The software uses the I2C bus to control the lighting effects on the RAM and motherboard.'
  },
  {
    id: 'spi-flash',
    term: 'SPI flash',
    slug: 'spi-flash',
    definition: 'SPI (Serial Peripheral Interface) flash is a type of flash memory chip often used to store a system\'s BIOS or firmware.',
    example: 'The BIOS is stored on an 8MB SPI flash chip soldered to the motherboard.'
  },
  {
    id: 'thunderbolt-controller',
    term: 'Thunderbolt controller',
    slug: 'thunderbolt-controller',
    definition: 'A Thunderbolt controller is the chip that manages the high-speed Thunderbolt interface, which combines PCIe and DisplayPort into a single USB-C port.',
    example: 'This motherboard includes a dedicated Thunderbolt controller to power its two Thunderbolt 4 ports.'
  },
  {
    id: 'pcie-bifurcation',
    term: 'PCIe bifurcation',
    slug: 'pcie-bifurcation',
    definition: 'PCIe bifurcation is a BIOS feature that allows you to split the lanes of a single PCIe x16 slot into multiple smaller slots (e.g., x8/x8 or x4/x4/x4/x4).',
    example: 'I used PCIe bifurcation and a special adapter card to run four NVMe SSDs in a single x16 slot.'
  },
  {
    id: 'memory-training',
    term: 'Memory training',
    slug: 'memory-training',
    definition: 'Memory training is a process the BIOS performs on first boot to test the RAM and find the optimal settings and timings for stable operation.',
    example: 'My new PC took a long time to boot the first time because it was performing memory training.'
  },
  {
    id: 'direct-die-cooling',
    term: 'Direct Die cooling',
    slug: 'direct-die-cooling',
    definition: 'Direct Die cooling is an extreme cooling method where the CPU cooler makes direct contact with the silicon die, after the IHS has been removed (delidding).',
    example: 'He achieved record-low temperatures by using a custom water block for direct die cooling.'
  },
  {
    id: 'top-flow-cooler',
    term: 'Top-flow cooler',
    slug: 'top-flow-cooler',
    definition: 'A top-flow cooler is a type of CPU air cooler where the fan blows air down towards the motherboard, which can also help cool the surrounding VRMs and RAM.',
    example: 'In my small form factor case, I had to use a low-profile top-flow cooler.'
  },
  {
    id: 'tower-cooler',
    term: 'Tower cooler',
    slug: 'tower-cooler',
    definition: 'A tower cooler is a common type of CPU air cooler with a vertical heatsink tower and one or more fans that push air horizontally through it.',
    example: 'A large dual-tower cooler is one of the most effective ways to air-cool a high-end CPU.'
  },
  {
    id: 'heatpipe-array',
    term: 'Heatpipe array',
    slug: 'heatpipe-array',
    definition: 'A heatpipe array is a set of sealed pipes containing a fluid that transfers heat from a source (like a CPU) to a heatsink\'s cooling fins.',
    example: 'This cooler has a six-heatpipe array to efficiently pull heat away from the processor.'
  },
  {
    id: 'vertical-gpu-mount',
    term: 'Vertical GPU mount',
    slug: 'vertical-gpu-mount',
    definition: 'A vertical GPU mount is a bracket that allows you to install your graphics card vertically in the case, showcasing its design.',
    example: 'I bought a vertical GPU mount to show off the RGB fans on my new graphics card.'
  },
  {
    id: 'riser-cable',
    term: 'Riser cable',
    slug: 'riser-cable',
    definition: 'A riser cable is a flexible extension cable for a PCIe slot, commonly used to mount a GPU vertically or in a non-standard position.',
    example: 'You need a good quality riser cable to avoid performance loss when mounting your GPU vertically.'
  },
  {
    id: 'fan-splitter',
    term: 'Fan splitter',
    slug: 'fan-splitter',
    definition: 'A fan splitter is a simple cable that allows you to connect two or more fans to a single fan header on the motherboard.',
    example: 'I used a fan splitter to connect both of my front intake fans to the same header.'
  },
  {
    id: 'bios-checksum',
    term: 'BIOS checksum',
    slug: 'bios-checksum',
    definition: 'A BIOS checksum is a value calculated from the BIOS code to verify its integrity. A checksum error on boot often indicates a corrupt BIOS.',
    example: 'The screen displayed a "BIOS checksum error," forcing me to re-flash the firmware.'
  },
  {
    id: 'debug-code-00',
    term: 'Debug code "00"',
    slug: 'debug-code-00',
    definition: 'While it varies by motherboard, debug code "00" often indicates an issue with the CPU, such as it not being properly seated or being dead.',
    example: 'The motherboard lit up but was stuck on debug code "00," so I had to re-seat the CPU.'
  },
  {
    id: 'tach-signal',
    term: 'Tach signal',
    slug: 'tach-signal',
    definition: 'The tachometer (tach) signal is a wire on a fan connector that reports the fan\'s speed (RPM) back to the motherboard.',
    example: 'If the tach signal wire is broken, the motherboard can\'t read the fan\'s speed and may report a fan error.'
  },
  {
    id: 'liquid-metal',
    term: 'Liquid metal',
    slug: 'liquid-metal',
    definition: 'Liquid metal is a high-performance thermal interface material with superior thermal conductivity, but it is electrically conductive and can be risky to apply.',
    example: 'For the absolute best temps, I replaced the standard thermal paste with liquid metal.'
  },
  {
    id: 'delidding',
    term: 'Delidding',
    slug: 'delidding',
    definition: 'Delidding is the process of removing the Integrated Heat Spreader (IHS) from a CPU to replace the internal thermal material, usually with liquid metal.',
    example: 'Delidding my CPU dropped its temperatures by 15 degrees Celsius under load.'
  },
  {
    id: 'resizable-bar',
    term: 'Resizable BAR',
    slug: 'resizable-bar',
    definition: 'Resizable BAR is a PCIe feature that allows the CPU to access the entire GPU VRAM at once, rather than in small chunks, which can improve performance in some games.',
    example: 'I enabled Resizable BAR in my BIOS to get a slight FPS boost.'
  },
  {
    id: 'soc-voltage',
    term: 'SOC voltage',
    slug: 'soc-voltage',
    definition: 'The SOC (System on a Chip) voltage is a key voltage on AMD Ryzen systems that supplies power to components like the integrated memory controller and PCIe controller.',
    example: 'When overclocking my RAM, I had to slightly increase the SOC voltage to maintain stability.'
  },
  {
    id: 'hot-reload',
    term: 'Hot reload',
    slug: 'hot-reload',
    definition: 'Hot reload is a development feature that instantly updates a running application with new code changes without restarting it or losing its current state.',
    example: 'The frontend framework\'s hot reload feature makes development much faster, as I can see my UI changes immediately.'
  },
  {
    id: 'cold-start',
    term: 'Cold start',
    slug: 'cold-start',
    definition: 'A cold start is the first time a serverless function or application is invoked, which requires it to be initialized, resulting in higher latency.',
    example: 'The API feels slow on the first request because of the serverless function\'s cold start.'
  },
  {
    id: 'tech-stack',
    term: 'Tech stack',
    slug: 'tech-stack',
    definition: 'A tech stack is the combination of programming languages, frameworks, and tools that an application is built with.',
    example: 'Our web app uses a tech stack of React, Node.js, and PostgreSQL.'
  },
  {
    id: 'runtime-engine',
    term: 'Runtime engine',
    slug: 'runtime-engine',
    definition: 'A runtime engine is the environment in which a program is executed, managing memory, and interpreting code. The V8 engine for JavaScript is a famous example.',
    example: 'Node.js allows JavaScript to be used on the server by using Google\'s V8 runtime engine.'
  },
  {
    id: 'interpreter',
    term: 'Interpreter',
    slug: 'interpreter',
    definition: 'An interpreter is a program that directly executes instructions written in a programming language, without previously compiling them into machine code.',
    example: 'Python is an interpreted language, which makes it flexible but sometimes slower than compiled languages.'
  },
  {
    id: 'tokenizer',
    term: 'Tokenizer',
    slug: 'tokenizer',
    definition: 'A tokenizer (or lexer) is the first phase of a compiler or interpreter that breaks down the source code into a series of small units called tokens.',
    example: 'The tokenizer scans the code and identifies keywords, identifiers, and operators.'
  },
  {
    id: 'transpiler',
    term: 'Transpiler',
    slug: 'transpiler',
    definition: 'A transpiler is a tool that reads source code written in one programming language and produces the equivalent code in another language.',
    example: 'Babel is a popular transpiler that converts modern JavaScript into older versions that more browsers can understand.'
  },
  {
    id: 'minification',
    term: 'Minification',
    slug: 'minification',
    definition: 'Minification is the process of removing all unnecessary characters from source code (like whitespace and comments) to reduce its file size.',
    example: 'The build process includes a minification step to make our JavaScript files load faster for users.'
  },
  {
    id: 'bundler',
    term: 'Bundler',
    slug: 'bundler',
    definition: 'A bundler is a tool that takes your code and its dependencies and packages them into one or more optimized files for the browser.',
    example: 'We use Webpack as our bundler to manage all our JavaScript modules and assets.'
  },
  {
    id: 'tree-shaking',
    term: 'Tree-shaking',
    slug: 'tree-shaking',
    definition: 'Tree-shaking is a process in a modern bundler where unused code (dead code) is eliminated from the final bundle, reducing its size.',
    example: 'By enabling tree-shaking, we were able to reduce our final bundle size by 20% by removing unused library functions.'
  },
  {
    id: 'code-splitting',
    term: 'Code splitting',
    slug: 'code-splitting',
    definition: 'Code splitting is the technique of splitting your code into various bundles which can then be loaded on demand or in parallel, improving initial load time.',
    example: 'We use code splitting to only load the code for the admin panel when a user actually navigates to that page.'
  },
  {
    id: 'shadow-dom',
    term: 'Shadow DOM',
    slug: 'shadow-dom',
    definition: 'The Shadow DOM is a web standard that allows for encapsulating the structure and style of a web component, keeping it separate from the main document.',
    example: 'Web components use the Shadow DOM to prevent their internal styles from leaking out and affecting the rest of the page.'
  },
  {
    id: 'virtual-dom',
    term: 'Virtual DOM',
    slug: 'virtual-dom',
    definition: 'The Virtual DOM is a programming concept where a virtual representation of a UI is kept in memory and synced with the "real" DOM, used by frameworks like React to optimize updates.',
    example: 'React uses a virtual DOM to determine the most efficient way to update the actual browser DOM, which improves performance.'
  },
  {
    id: 'event-bubbling',
    term: 'Event bubbling',
    slug: 'event-bubbling',
    definition: 'Event bubbling is a phase in JavaScript event handling where an event travels from the target element up to its ancestors in the DOM tree.',
    example: 'I used event bubbling to attach a single click listener to the parent container instead of every individual item.'
  },
  {
    id: 'event-capturing',
    term: 'Event capturing',
    slug: 'event-capturing',
    definition: 'Event capturing is the first phase in JavaScript event handling where the event travels from the root of the DOM tree down to the target element.',
    example: 'While less common, you can use event capturing to intercept an event before it reaches its target.'
  },
  {
    id: 'memoization',
    term: 'Memoization',
    slug: 'memoization',
    definition: 'Memoization is an optimization technique where the results of expensive function calls are cached and returned when the same inputs occur again.',
    example: 'I wrapped the complex calculation in a memoized function to avoid re-computing the result on every render.'
  },
  {
    id: 'dead-code',
    term: 'Dead code',
    slug: 'dead-code',
    definition: 'Dead code is code that is never executed. It can be removed to clean up the codebase and reduce bundle size.',
    example: 'The linter identified a function that was never called, so I removed it as dead code.'
  },
  {
    id: 'async-pipeline',
    term: 'Async pipeline',
    slug: 'async-pipeline',
    definition: 'An async pipeline is a series of asynchronous operations that are executed in sequence, where the output of one operation is the input to the next.',
    example: 'We built an async pipeline to fetch user data, process it, and then save it to the database.'
  },
  {
    id: 'callback-hell',
    term: 'Callback hell',
    slug: 'callback-hell',
    definition: 'Callback hell refers to the situation where multiple nested callbacks make code difficult to read and maintain. It is often solved by using Promises or async/await.',
    example: 'The code was full of callback hell, so I refactored it to use async/await, which made it much cleaner.'
  },
  {
    id: 'promise-chain',
    term: 'Promise chain',
    slug: 'promise-chain',
    definition: 'A Promise chain is a sequence of `.then()` calls on a Promise, allowing for a clean and readable way to handle multiple asynchronous operations in order.',
    example: 'I created a promise chain to fetch data from three different APIs sequentially.'
  },
  {
    id: 'race-condition',
    term: 'Race condition',
    slug: 'race-condition',
    definition: 'A race condition is a bug that occurs when the outcome of a process depends on the unpredictable sequence or timing of other events.',
    example: 'We had a race condition where two requests could try to update the same database record at the same time.'
  },
  {
    id: 'stale-state',
    term: 'Stale state',
    slug: 'stale-state',
    definition: 'Stale state is when a variable or UI component holds outdated data that does not reflect the current, correct state of the application.',
    example: 'The component was showing a stale state because it didn\'t re-fetch the data after the update.'
  },
  {
    id: 'merge-conflict',
    term: 'Merge conflict',
    slug: 'merge-conflict',
    definition: 'A merge conflict is an event that occurs when a version control system like Git cannot automatically resolve differences in code between two commits.',
    example: 'I have to resolve a merge conflict because another developer and I both edited the same line of code.'
  },
  {
    id: 'semantic-tokens',
    term: 'Semantic tokens',
    slug: 'semantic-tokens',
    definition: 'Semantic tokens are used by code editors and IDEs to apply syntax highlighting based on the language\'s underlying meaning, not just patterns.',
    example: 'The LSP provides semantic tokens to the editor, allowing it to color variable types and function names differently.'
  },
  {
    id: 'patch-version',
    term: 'Patch version',
    slug: 'patch-version',
    definition: 'In semantic versioning (MAJOR.MINOR.PATCH), the patch version is incremented for backward-compatible bug fixes.',
    example: 'We are releasing a patch version to fix a critical security vulnerability.'
  },
  {
    id: 'rolling-release',
    term: 'Rolling release',
    slug: 'rolling-release',
    definition: 'A rolling release is a software development model where updates are delivered continuously, rather than in large, versioned releases.',
    example: 'Arch Linux is a rolling release distribution, meaning you always have the latest software without needing to upgrade the entire OS.'
  },
  {
    id: 'compiler-flags',
    term: 'Compiler flags',
    slug: 'compiler-flags',
    definition: 'Compiler flags are command-line options that are passed to a compiler to change its behavior, such as enabling optimizations or showing warnings.',
    example: 'I added the `-O3` compiler flag to enable the highest level of optimization.'
  },
  {
    id: 'hot-module-swap',
    term: 'Hot module swap',
    slug: 'hot-module-swap',
    definition: 'Hot Module Replacement (HMR) or swapping is a feature that allows modules to be updated in a running application without a full reload.',
    example: 'React\'s hot module swap makes for a great developer experience.'
  },
  {
    id: 'build-artifacts',
    term: 'Build artifacts',
    slug: 'build-artifacts',
    definition: 'Build artifacts are the files produced by a build process, such as compiled code, bundled assets, and executables.',
    example: 'The CI/CD pipeline stores the build artifacts in a cloud storage bucket for later deployment.'
  },
  {
    id: 'code-injection',
    term: 'Code injection',
    slug: 'code-injection',
    definition: 'Code injection is a type of attack where an attacker can introduce (or "inject") malicious code into a program or system.',
    example: 'A SQL injection is a form of code injection that targets the database.'
  },
  {
    id: 'template-literal',
    term: 'Template literal',
    slug: 'template-literal',
    definition: 'Template literals are string literals in JavaScript that allow for embedded expressions, multi-line strings, and string interpolation.',
    example: 'I used a template literal to easily create a string with several variables in it: `Hello, ${name}!`.'
  },
  {
    id: 'dsl-domain-specific-language',
    term: 'DSL (Domain-Specific Language)',
    slug: 'dsl-domain-specific-language',
    definition: 'A Domain-Specific Language (DSL) is a computer language specialized to a particular application domain, in contrast to a general-purpose language.',
    example: 'SQL is a DSL for managing databases, and HTML is a DSL for creating web pages.'
  },
  {
    id: 'pointer-dereference',
    term: 'Pointer dereference',
    slug: 'pointer-dereference',
    definition: 'In languages like C++, pointer dereferencing is the act of accessing the value stored at the memory address held by a pointer.',
    example: 'A null pointer dereference occurs when you try to access a pointer that points to nothing, causing a crash.'
  },
  {
    id: 'memory-fragmentation',
    term: 'Memory fragmentation',
    slug: 'memory-fragmentation',
    definition: 'Memory fragmentation is a problem where the free memory in a system is broken into small, non-contiguous blocks, making it difficult to allocate a large block.',
    example: 'After running for days, the server suffered from memory fragmentation and had to be rebooted.'
  },
  {
    id: 'monkey-patching',
    term: 'Monkey patching',
    slug: 'monkey-patching',
    definition: 'Monkey patching is the practice of modifying or extending the behavior of existing libraries or code at runtime.',
    example: 'For the test, we used monkey patching to replace the library\'s network request function with a mock one.'
  },
  {
    id: 'duck-typing',
    term: 'Duck typing',
    slug: 'duck-typing',
    definition: 'Duck typing is a concept in programming where the type of an object is determined by its behavior (methods and properties), not its explicit type.',
    example: '"If it walks like a duck and quacks like a duck, then it must be a duck." That\'s the essence of duck typing.'
  },
  {
    id: 'static-typing',
    term: 'Static typing',
    slug: 'static-typing',
    definition: 'Static typing is a type system where variable types are checked at compile-time, before the program is run. Languages like Java and C# use static typing.',
    example: 'Static typing helps catch many common errors before you even run the code.'
  },
  {
    id: 'dynamic-typing',
    term: 'Dynamic typing',
    slug: 'dynamic-typing',
    definition: 'Dynamic typing is a type system where variable types are checked at runtime, as the program is executing. Languages like Python and JavaScript use dynamic typing.',
    example: 'Dynamic typing offers more flexibility, but you might not discover a type error until the code is running in production.'
  },
  {
    id: 'pure-function',
    term: 'Pure function',
    slug: 'pure-function',
    definition: 'A pure function is a function whose return value is only determined by its input values, without any observable side effects.',
    example: 'A function that just adds two numbers is a pure function; a function that also writes to a log file is not.'
  },
  {
    id: 'side-effects',
    term: 'Side effects',
    slug: 'side-effects',
    definition: 'A side effect is when a function modifies some state outside its own scope, such as changing a global variable or writing to a file.',
    example: 'Making an API call or logging to the console are common side effects in a function.'
  },
  {
    id: 'immutable-state',
    term: 'Immutable state',
    slug: 'immutable-state',
    definition: 'Immutable state is a programming pattern where data is never changed after it\'s created. To "change" it, you create a new copy with the updated values.',
    example: 'State management libraries like Redux encourage using an immutable state to prevent bugs and make state changes predictable.'
  },
  {
    id: 'oop-design',
    term: 'OOP design',
    slug: 'oop-design',
    definition: 'Object-Oriented Programming (OOP) design is a programming paradigm based on the concept of "objects", which can contain data and code.',
    example: 'The system was built using OOP design principles like inheritance and polymorphism.'
  },
  {
    id: 'fsm-finite-state-machine',
    term: 'FSM (Finite State Machine)',
    slug: 'fsm-finite-state-machine',
    definition: 'A Finite State Machine (FSM) is a mathematical model of computation that can be in exactly one of a finite number of states at any given time.',
    example: 'We used a finite state machine to manage the different states of the user interface, like "loading", "error", and "success".'
  },
  {
    id: 'ast-abstract-syntax-tree',
    term: 'AST (Abstract Syntax Tree)',
    slug: 'ast-abstract-syntax-tree',
    definition: 'An Abstract Syntax Tree (AST) is a tree representation of the syntactic structure of source code. Linters and transpilers work by traversing the AST.',
    example: 'Babel parses the JavaScript code into an AST, transforms it, and then generates new code from the modified tree.'
  },
  {
    id: 'cli-flags',
    term: 'CLI flags',
    slug: 'cli-flags',
    definition: 'CLI flags are options passed to a command-line interface program to modify its behavior, typically prefixed with a `-` or `--`.',
    example: 'I used the `--verbose` CLI flag to get more detailed output from the script.'
  },
  {
    id: 'graceful-shutdown',
    term: 'Graceful shutdown',
    slug: 'graceful-shutdown',
    definition: 'A graceful shutdown is the process of shutting down a program or server in a way that allows it to finish its current tasks and save its state before terminating.',
    example: 'We implemented a graceful shutdown procedure to ensure no data is lost when the server restarts.'
  },
  {
    id: 'staging-area',
    term: 'Staging area',
    slug: 'staging-area',
    definition: 'In Git, the staging area is an intermediate step where you can prepare and review changes before committing them to the repository.',
    example: 'I used `git add` to move my changes to the staging area before creating the commit.'
  },
  {
    id: 'git-hooks',
    term: 'Git hooks',
    slug: 'git-hooks',
    definition: 'Git hooks are scripts that run automatically at certain points in the Git workflow, such as before a commit or after a push.',
    example: 'We use a pre-commit Git hook to run the linter and prevent committing code with style errors.'
  },
  {
    id: 'soft-delete',
    term: 'Soft delete',
    slug: 'soft-delete',
    definition: 'Soft delete is a technique where instead of actually deleting a record from a database, you mark it as deleted with a flag.',
    example: 'The application uses a soft delete, so we can easily restore a user\'s account if they were deleted by mistake.'
  },
  {
    id: 'hard-delete',
    term: 'Hard delete',
    slug: 'hard-delete',
    definition: 'A hard delete is when a record is permanently removed from the database.',
    example: 'For GDPR compliance, we must perform a hard delete of user data upon request.'
  },
  {
    id: 'error-bubbling',
    term: 'Error bubbling',
    slug: 'error-bubbling',
    definition: 'Error bubbling is the process where an unhandled error in a component or function is passed up to its parent or caller to be handled.',
    example: 'The component didn\'t have a `try/catch` block, so the error bubbled up to the global error handler.'
  },
  {
    id: 'code-smell',
    term: 'Code smell',
    slug: 'code-smell',
    definition: 'A code smell is any characteristic in source code that potentially indicates a deeper problem. It\'s a hint that something might be wrong.',
    example: 'A very long function is a common code smell that suggests it should be broken down into smaller pieces.'
  },
  {
    id: 'lsp-language-server-protocol',
    term: 'LSP (Language Server Protocol)',
    slug: 'lsp-language-server-protocol',
    definition: 'The Language Server Protocol (LSP) is a protocol that provides code editors with language features like auto-completion, linting, and go-to-definition.',
    example: 'My editor feels so much smarter now that I\'ve installed the TypeScript language server, which uses LSP.'
  },
  {
    id: 'compiler-pipeline',
    term: 'Compiler pipeline',
    slug: 'compiler-pipeline',
    definition: 'A compiler pipeline is the sequence of stages a compiler goes through to transform source code into executable code, including lexical analysis, parsing, and code generation.',
    example: 'Understanding the compiler pipeline helps in diagnosing complex build errors.'
  },
  {
    id: 'modularization',
    term: 'Modularization',
    slug: 'modularization',
    definition: 'Modularization is the process of breaking down a large software system into smaller, independent, and interchangeable modules.',
    example: 'Good modularization makes the codebase easier to understand, test, and maintain.'
  },
  {
    id: 'weakmap',
    term: 'WeakMap',
    slug: 'weakmap',
    definition: 'A WeakMap in JavaScript is a collection of key/value pairs where the keys are objects and are held "weakly," meaning they don\'t prevent garbage collection.',
    example: 'I used a WeakMap to associate metadata with an object without creating a memory leak.'
  },
  {
    id: 'hash-table',
    term: 'Hash table',
    slug: 'hash-table',
    definition: 'A hash table is a data structure that implements an associative array, a structure that can map keys to values, providing very fast lookups.',
    example: 'JavaScript objects are essentially implemented as hash tables under the hood.'
  },
  {
    id: 'trie-structure',
    term: 'Trie structure',
    slug: 'trie-structure',
    definition: 'A trie, or prefix tree, is a tree-like data structure that is very efficient for storing and retrieving strings, often used for autocomplete features.',
    example: 'The dictionary search uses a trie structure to quickly find words that start with the user\'s input.'
  },
  {
    id: 'linked-list',
    term: 'Linked list',
    slug: 'linked-list',
    definition: 'A linked list is a linear data structure where elements are not stored at contiguous memory locations but are linked using pointers.',
    example: 'While arrays are faster for random access, linked lists are more efficient for insertions and deletions in the middle of the list.'
  },
  {
    id: 'circular-buffer',
    term: 'Circular buffer',
    slug: 'circular-buffer',
    definition: 'A circular buffer is a fixed-size buffer that works as if it is connected end-to-end, commonly used for streaming data.',
    example: 'The audio player uses a circular buffer to store the incoming stream of audio data.'
  },
  {
    id: 'priority-queue',
    term: 'Priority queue',
    slug: 'priority-queue',
    definition: 'A priority queue is a data structure where each element has a "priority" associated with it, and elements with higher priority are served before lower priority ones.',
    example: 'The task scheduler uses a priority queue to ensure that critical tasks are executed first.'
  },
  {
    id: 'mutex-lock',
    term: 'Mutex lock',
    slug: 'mutex-lock',
    definition: 'A mutex (mutual exclusion) lock is a synchronization primitive used to prevent multiple threads from simultaneously accessing a shared resource.',
    example: 'Before writing to the shared variable, the thread must acquire the mutex lock.'
  },
  {
    id: 'semaphore',
    term: 'Semaphore',
    slug: 'semaphore',
    definition: 'A semaphore is a synchronization tool that limits the number of threads that can access a resource, acting as a more general version of a mutex.',
    example: 'We used a semaphore to limit the number of concurrent database connections to 10.'
  },
  {
    id: 'dead-mutex',
    term: 'Dead mutex',
    slug: 'dead-mutex',
    definition: 'A dead mutex, or deadlock, is a situation where two or more threads are blocked forever, each waiting for the other to release a lock.',
    example: 'The application froze because of a dead mutex situation between the logging thread and the processing thread.'
  },
  {
    id: 'critical-section',
    term: 'Critical section',
    slug: 'critical-section',
    definition: 'A critical section is a piece of code that accesses a shared resource and must not be concurrently executed by more than one thread.',
    example: 'You must protect that critical section with a mutex to prevent race conditions.'
  },
  {
    id: 'event-emitter',
    term: 'Event emitter',
    slug: 'event-emitter',
    definition: 'An event emitter is a pattern that manages a registry of listeners and emits events to them when something of note occurs.',
    example: 'Node.js uses an event emitter pattern extensively for handling asynchronous operations.'
  },
  {
    id: 'type-guard',
    term: 'Type guard',
    slug: 'type-guard',
    definition: 'In TypeScript, a type guard is a runtime check that guarantees the type of a variable within a certain scope.',
    example: 'I wrote a type guard to check if the variable was a string before calling a string method on it.'
  },
  {
    id: 'dev-dependency',
    term: 'Dev dependency',
    slug: 'dev-dependency',
    definition: 'A dev dependency is a package that is only needed for local development and testing, and is not required for the application to run in production.',
    example: 'Linters and testing libraries are usually installed as dev dependencies.'
  },
  {
    id: 'runtime-error',
    term: 'Runtime error',
    slug: 'runtime-error',
    definition: 'A runtime error is an error that occurs while a program is running, as opposed to a compile-time error.',
    example: 'Trying to divide by zero will cause a runtime error.'
  },
  {
    id: 'build-error',
    term: 'Build error',
    slug: 'build-error',
    definition: 'A build error, or compile-time error, is an error that is detected when the source code is being compiled into an executable program.',
    example: 'A simple typo in a variable name can cause a build error.'
  },
  {
    id: 'entry-point',
    term: 'Entry point',
    slug: 'entry-point',
    definition: 'The entry point is the location in a program where execution begins.',
    example: 'In a JavaScript application bundled with Webpack, the `index.js` file is often the entry point.'
  },
  {
    id: 'polyfill',
    term: 'Polyfill',
    slug: 'polyfill',
    definition: 'A polyfill is a piece of code used to provide modern functionality on older browsers that do not natively support it.',
    example: 'We had to include a polyfill for the `fetch` API to support Internet Explorer 11.'
  },
  {
    id: 'watch-mode',
    term: 'Watch mode',
    slug: 'watch-mode',
    definition: 'Watch mode is a feature in development tools that automatically re-runs a task, like building or testing, whenever a file change is detected.',
    example: 'I ran the tests in watch mode so they would automatically re-run every time I saved a file.'
  },
  {
    id: 'rollup-config',
    term: 'Rollup config',
    slug: 'rollup-config',
    definition: 'A Rollup config is the configuration file for Rollup, a popular JavaScript module bundler.',
    example: 'In the rollup config file, I specified the input file and the desired output format.'
  },
  {
    id: 'ci-runner',
    term: 'CI runner',
    slug: 'ci-runner',
    definition: 'A CI (Continuous Integration) runner is a server or agent that executes the jobs defined in a CI/CD pipeline, such as building, testing, and deploying code.',
    example: 'Our GitLab CI runner is responsible for building the Docker image and pushing it to the registry.'
  },
  {
    id: 'dependency-injection',
    term: 'Dependency injection',
    slug: 'dependency-injection',
    definition: 'Dependency Injection is a design pattern where a component receives its dependencies from an external source rather than creating them itself.',
    example: 'We use dependency injection to provide the database connection to our services, which makes them easier to test.'
  },
  {
    id: 'microservice-mesh',
    term: 'Microservice mesh',
    slug: 'microservice-mesh',
    definition: 'A microservice mesh, or service mesh, is a dedicated infrastructure layer for making service-to-service communication safe, fast, and reliable in a microservices architecture.',
    example: 'We use Istio as our service mesh to handle traffic management, security, and observability between our microservices.'
  },
  {
    id: 'lambda-function',
    term: 'Lambda function',
    slug: 'lambda-function',
    definition: 'A Lambda function usually refers to AWS Lambda, a serverless compute service that lets you run code without provisioning or managing servers. It also refers to an anonymous function in some programming languages.',
    example: 'I wrote a simple Lambda function to process images that are uploaded to an S3 bucket.'
  },
  {
    id: 'version-bump',
    term: 'Version bump',
    slug: 'version-bump',
    definition: 'A version bump is the act of increasing the version number of a software package to signify a new release.',
    example: 'The PR for the new feature also includes a minor version bump from 1.2.0 to 1.3.0.'
  },
  {
    id: 'orphan-branch',
    term: 'Orphan branch',
    slug: 'orphan-branch',
    definition: 'In Git, an orphan branch is a branch that starts from a fresh commit with no history, completely disconnected from the other branches.',
    example: 'I created an orphan branch to store the documentation, keeping its history separate from the source code.'
  },
  {
    id: 'detached-head',
    term: 'Detached HEAD',
    slug: 'detached-head',
    definition: 'In Git, a detached HEAD state means that you are currently checked out to a specific commit, rather than to a branch.',
    example: 'I entered a detached HEAD state to review a previous commit, and now I need to check out a branch to save my changes.'
  },
  {
    id: 'upstream-repo',
    term: 'Upstream repo',
    slug: 'upstream-repo',
    definition: 'In Git, an upstream repo is the original repository that you forked. You can pull updates from it to keep your fork in sync.',
    example: 'I need to configure the upstream repo so I can fetch the latest changes from the main project.'
  },
  {
    id: 'fork-sync',
    term: 'Fork sync',
    slug: 'fork-sync',
    definition: 'Fork sync is the process of updating a forked repository with the latest changes from the original (upstream) repository.',
    example: 'I perform a fork sync every morning to make sure my local branch has all the latest updates.'
  },
  {
    id: 'git-diff',
    term: 'Git diff',
    slug: 'git-diff',
    definition: 'A Git diff is a function that shows the differences between commits, branches, or files in a Git repository.',
    example: 'I ran a `git diff` to review my changes before committing them.'
  },
  {
    id: 'diff-merge',
    term: 'Diff merge',
    slug: 'diff-merge',
    definition: 'A diff merge is the process of comparing and merging the differences between two versions of a file, often done to resolve a merge conflict.',
    example: 'The merge tool showed me a side-by-side diff merge view to help me resolve the conflict.'
  },
  {
    id: 'patch-file',
    term: 'Patch file',
    slug: 'patch-file',
    definition: 'A patch file is a text file that contains a list of differences between two versions of a file, which can be used to apply those changes to another file.',
    example: 'Instead of giving me access to the repo, he just sent me a patch file with his changes.'
  },
  {
    id: 'ssr-server-side-rendering',
    term: 'SSR (Server Side Rendering)',
    slug: 'ssr-server-side-rendering',
    definition: 'Server-Side Rendering (SSR) is the process of rendering a web page on the server and sending the fully rendered HTML to the client.',
    example: 'We use SSR for our public-facing pages to improve SEO and initial load time.'
  },
  {
    id: 'csr-client-side-rendering',
    term: 'CSR (Client Side Rendering)',
    slug: 'csr-client-side-rendering',
    definition: 'Client-Side Rendering (CSR) is where the browser downloads a minimal HTML page and then renders the rest of the page using JavaScript.',
    example: 'Our admin dashboard uses CSR because SEO is not a concern and it provides a more app-like experience.'
  },
  {
    id: 'hydration',
    term: 'Hydration',
    slug: 'hydration',
    definition: 'In web development, hydration is the process of attaching event listeners and making a server-rendered page interactive on the client-side.',
    example: 'A hydration error occurs when the client-side rendered output does not match the server-rendered HTML.'
  },
  {
    id: 'hotfix-patch',
    term: 'Hotfix patch',
    slug: 'hotfix-patch',
    definition: 'A hotfix patch is an urgent update released to fix a critical issue in a live production environment.',
    example: 'We had to deploy a hotfix patch over the weekend to fix the login issue.'
  },
  {
    id: 'api-schema',
    term: 'API schema',
    slug: 'api-schema',
    definition: 'An API schema is a formal definition of the structure of data that an API expects and returns, often defined using standards like OpenAPI or JSON Schema.',
    example: 'The frontend team uses the API schema to generate typed clients for our API.'
  },
  {
    id: 'rate-limiter',
    term: 'Rate limiter',
    slug: 'rate-limiter',
    definition: 'A rate limiter is a mechanism that controls the number of requests a user can make to a server in a given time period.',
    example: 'We implemented a rate limiter to prevent abuse and ensure fair usage of our API.'
  },
  {
    id: 'jwt-token',
    term: 'JWT token',
    slug: 'jwt-token',
    definition: 'A JSON Web Token (JWT) is a compact, URL-safe means of representing claims to be transferred between two parties, commonly used for authentication.',
    example: 'After logging in, the server gives the client a JWT token, which is sent with every subsequent request.'
  },
  {
    id: 'secret-rotation',
    term: 'Secret rotation',
    slug: 'secret-rotation',
    definition: 'Secret rotation is the security practice of regularly changing secrets like API keys and passwords to reduce the risk of them being compromised.',
    example: 'Our security policy requires a mandatory secret rotation every 90 days.'
  },
  {
    id: 'replay-attack',
    term: 'Replay attack',
    slug: 'replay-attack',
    definition: 'A replay attack is a network attack where a valid data transmission is maliciously or fraudulently repeated or delayed.',
    example: 'Using a nonce in our authentication protocol helps protect against replay attacks.'
  },
  {
    id: 'middleware-chain',
    term: 'Middleware chain',
    slug: 'middleware-chain',
    definition: 'A middleware chain is a sequence of middleware functions in a web server where each function processes a request and then passes it to the next one in the chain.',
    example: 'Our authentication and logging logic is implemented as a middleware chain in our Express app.'
  },
  {
    id: 'webhook',
    term: 'Webhook',
    slug: 'webhook',
    definition: 'A webhook is an automated message sent from an app when something happens. It has a message (payload) which is sent to a unique URL.',
    example: 'We set up a webhook so that every time a commit is pushed to GitHub, it triggers a new build in our CI system.'
  },
  {
    id: 'endpoints',
    term: 'Endpoints',
    slug: 'endpoints',
    definition: 'Endpoints are the URLs of a web service or API where requests can be sent to perform specific actions.',
    example: 'The documentation lists all the available API endpoints and the parameters they accept.'
  },
  {
    id: 'code-freeze',
    term: 'Code freeze',
    slug: 'code-freeze',
    definition: 'A code freeze is a period of time during which no new changes are allowed to be made to a codebase, typically done before a major release to ensure stability.',
    example: 'The project is now in a code freeze; only critical bug fixes are allowed until after the launch.'
  },
  {
    id: 'refactoring-sprint',
    term: 'Refactoring sprint',
    slug: 'refactoring-sprint',
    definition: 'A refactoring sprint is a dedicated period of development time focused solely on improving the internal structure and quality of existing code without adding new features.',
    example: 'We have a refactoring sprint every quarter to pay down our technical debt.'
  },
  {
    id: 'static-routing',
    term: 'Static routing',
    slug: 'static-routing',
    definition: 'Static routing is a form of routing where network paths are manually configured by an administrator, rather than being determined by a dynamic routing algorithm.',
    example: 'For our simple network, we just used static routing instead of setting up a complex protocol like OSPF.'
  },
  {
    id: 'dynamic-routing',
    term: 'Dynamic routing',
    slug: 'dynamic-routing',
    definition: 'Dynamic routing is a process where routers automatically learn about network paths from other routers and adjust their routing tables accordingly.',
    example: 'In a large, complex network, dynamic routing protocols like BGP are essential for maintaining connectivity.'
  },
  {
    id: 'ospf-area',
    term: 'OSPF area',
    slug: 'ospf-area',
    definition: 'In the OSPF routing protocol, an area is a logical grouping of routers that is used to divide a large network into smaller, more manageable segments.',
    example: 'We put all the routers in the new branch office into a separate OSPF area to isolate their routing updates.'
  },
  {
    id: 'route-poisoning',
    term: 'Route poisoning',
    slug: 'route-poisoning',
    definition: 'Route poisoning is a method used by distance-vector routing protocols to prevent routing loops by advertising a failed route with an infinite metric.',
    example: 'When the link went down, the router used route poisoning to inform its neighbors that the path was no longer reachable.'
  },
  {
    id: 'packet-burst',
    term: 'Packet burst',
    slug: 'packet-burst',
    definition: 'A packet burst is a rapid transmission of a large number of data packets in a short period of time.',
    example: 'The application sends a packet burst at startup, which temporarily saturates the network link.'
  },
  {
    id: 'packet-shaping',
    term: 'Packet shaping',
    slug: 'packet-shaping',
    definition: 'Packet shaping (or traffic shaping) is a technique used to control network traffic in order to optimize performance or increase usable bandwidth.',
    example: 'We use packet shaping to delay low-priority traffic and give preference to real-time voice and video calls.'
  },
  {
    id: 'traffic-policing',
    term: 'Traffic policing',
    slug: 'traffic-policing',
    definition: 'Traffic policing is a network function that monitors traffic flow and, if the traffic exceeds a configured rate, it can drop or re-mark the excess packets.',
    example: 'We implemented traffic policing to ensure that no single user can consume more than 10 Mbps of bandwidth.'
  },
  {
    id: 'mtu-size',
    term: 'MTU size',
    slug: 'mtu-size',
    definition: 'The Maximum Transmission Unit (MTU) size is the largest data packet that can be transmitted over a network. The standard Ethernet MTU is 1500 bytes.',
    example: 'A mismatched MTU size between two network devices can cause connectivity issues and packet fragmentation.'
  },
  {
    id: 'jumbo-frames',
    term: 'Jumbo frames',
    slug: 'jumbo-frames',
    definition: 'Jumbo frames are Ethernet frames with a size larger than the standard 1500 bytes, which can improve network efficiency by reducing overhead.',
    example: 'On our storage network, we enabled jumbo frames to increase throughput for large file transfers.'
  },
  {
    id: 'lacp',
    term: 'LACP',
    slug: 'lacp',
    definition: 'Link Aggregation Control Protocol (LACP) is a protocol used to bundle multiple physical network links into a single logical link for increased bandwidth and redundancy.',
    example: 'We configured LACP to bond two 1-gigabit ports on the switch into a single 2-gigabit link.'
  },
  {
    id: 'port-channel',
    term: 'Port-channel',
    slug: 'port-channel',
    definition: 'A port-channel (or EtherChannel) is the logical interface created when you bundle multiple physical interfaces together using a protocol like LACP.',
    example: 'Traffic is now flowing through the port-channel interface, utilizing both physical links.'
  },
  {
    id: 'etherchannel',
    term: 'EtherChannel',
    slug: 'etherchannel',
    definition: 'EtherChannel is Cisco\'s term for link aggregation, the technology that combines multiple physical Ethernet links into one logical link.',
    example: 'We configured an EtherChannel between the two switches to increase the bandwidth of the connection.'
  },
  {
    id: 'routing-table',
    term: 'Routing table',
    slug: 'routing-table',
    definition: 'A routing table is a data table stored in a router or a networked computer that lists the routes to particular network destinations.',
    example: 'I checked the routing table to see why the traffic was not reaching the intended server.'
  },
  {
    id: 'mac-aging',
    term: 'MAC aging',
    slug: 'mac-aging',
    definition: 'MAC aging is the process by which a network switch automatically removes MAC address entries from its table after a certain period of inactivity.',
    example: 'The default MAC aging time on this switch is 300 seconds, after which it will forget the address if no traffic is seen.'
  },
  {
    id: 'bpdu',
    term: 'BPDU',
    slug: 'bpdu',
    definition: 'Bridge Protocol Data Units (BPDUs) are frames containing information about the Spanning Tree Protocol (STP), used by switches to prevent loops.',
    example: 'The switch stopped forwarding BPDUs, which caused a spanning tree loop and brought down the network.'
  },
  {
    id: 'root-bridge',
    term: 'Root bridge',
    slug: 'root-bridge',
    definition: 'In a Spanning Tree Protocol network, the root bridge is the master switch that is used as a reference point to calculate the best paths.',
    example: 'We manually configured our core switch to be the root bridge to ensure a stable network topology.'
  },
  {
    id: 'stp-recalculation',
    term: 'STP recalculation',
    slug: 'stp-recalculation',
    definition: 'A Spanning Tree Protocol (STP) recalculation (or convergence) is when the network topology changes and all the switches have to recalculate the loop-free paths.',
    example: 'Every time a new switch is plugged in, it triggers an STP recalculation, causing a brief network disruption.'
  },
  {
    id: 'vlan-trunk',
    term: 'VLAN trunk',
    slug: 'vlan-trunk',
    definition: 'A VLAN trunk is a network link that carries traffic for multiple VLANs. Each frame is "tagged" with its VLAN ID so the switch knows where it belongs.',
    example: 'The link between the two switches is configured as a VLAN trunk to carry traffic for the sales, marketing, and engineering VLANs.'
  },
  {
    id: 'tagged-frame',
    term: 'Tagged frame',
    slug: 'tagged-frame',
    definition: 'A tagged frame is an Ethernet frame that has a VLAN tag added to it, which identifies the VLAN to which it belongs. These are used on trunk links.',
    example: 'The switch receives a tagged frame and knows to only forward it to other ports belonging to the same VLAN.'
  },
  {
    id: 'untagged-frame',
    term: 'Untagged frame',
    slug: 'untagged-frame',
    definition: 'An untagged frame is a standard Ethernet frame without a VLAN tag. These are typically used on access ports that belong to a single VLAN.',
    example: 'When a PC sends traffic to the switch, it sends an untagged frame, and the switch adds the tag internally.'
  },
  {
    id: 'broadcast-storm',
    term: 'Broadcast storm',
    slug: 'broadcast-storm',
    definition: 'A broadcast storm is an abnormally high number of broadcast packets on a network, which can consume all available bandwidth and bring the network down.',
    example: 'A network loop caused a massive broadcast storm that took down the entire office network.'
  },
  {
    id: 'dhcp-snooping',
    term: 'DHCP snooping',
    slug: 'dhcp-snooping',
    definition: 'DHCP snooping is a security feature on a switch that filters DHCP messages to prevent rogue DHCP servers from being added to the network.',
    example: 'We enabled DHCP snooping to prevent employees from plugging in their own routers and causing IP address conflicts.'
  },
  {
    id: 'arp-poisoning',
    term: 'ARP poisoning',
    slug: 'arp-poisoning',
    definition: 'ARP poisoning is a type of man-in-the-middle attack where an attacker sends forged ARP messages to link their MAC address with the IP address of a legitimate device.',
    example: 'The attacker used ARP poisoning to intercept all the traffic going to the default gateway.'
  },
  {
    id: 'evil-twin-ap',
    term: 'Evil twin AP',
    slug: 'evil-twin-ap',
    definition: 'An evil twin AP is a fraudulent Wi-Fi access point that appears to be legitimate but is set up to eavesdrop on wireless communications.',
    example: 'The hacker set up an evil twin AP with the same name as the coffee shop\'s Wi-Fi to steal customers\' passwords.'
  },
  {
    id: 'rogue-ap',
    term: 'Rogue AP',
    slug: 'rogue-ap',
    definition: 'A rogue AP is an unauthorized wireless access point connected to a corporate network, posing a security risk.',
    example: 'Our wireless intrusion detection system alerted us to a rogue AP that an employee had plugged into their desk port.'
  },
  {
    id: 'wps-attack',
    term: 'WPS attack',
    slug: 'wps-attack',
    definition: 'A WPS (Wi-Fi Protected Setup) attack is a brute-force attack that exploits a vulnerability in WPS to discover the Wi-Fi password.',
    example: 'It\'s recommended to disable WPS on your router because it is vulnerable to WPS attacks.'
  },
  {
    id: 'packet-replay',
    term: 'Packet replay',
    slug: 'packet-replay',
    definition: 'A packet replay attack is where an attacker captures network packets and then re-transmits them to impersonate a user or cause an unintended effect.',
    example: 'Some older authentication protocols are vulnerable to packet replay attacks.'
  },
  {
    id: 'beacon-frame',
    term: 'Beacon frame',
    slug: 'beacon-frame',
    definition: 'A beacon frame is a type of Wi-Fi management frame that is periodically sent by an access point to announce its presence and provide network information.',
    example: 'Your phone sees the list of available Wi-Fi networks by listening for beacon frames from nearby APs.'
  },
  {
    id: 'probe-request',
    term: 'Probe request',
    slug: 'probe-request',
    definition: 'A probe request is a Wi-Fi frame sent by a client device to ask if a specific network (or any network) is nearby.',
    example: 'Even with Wi-Fi turned off, your phone might still send out probe requests for networks it has connected to before.'
  },
  {
    id: 'probe-response',
    term: 'Probe response',
    slug: 'probe-response',
    definition: 'A probe response is a Wi-Fi frame sent by an access point in response to a probe request from a client device.',
    example: 'The AP sent a probe response to the laptop, confirming that the "Corporate_WiFi" network was available.'
  },
  {
    id: 'deauth-packet',
    term: 'Deauth packet',
    slug: 'deauth-packet',
    definition: 'A deauthentication (deauth) packet is a type of Wi-Fi frame that can be sent to forcibly disconnect a client from an access point.',
    example: 'An attacker can perform a denial-of-service attack by sending a flood of deauth packets to all connected clients.'
  },
  {
    id: 'captive-portal',
    term: 'Captive portal',
    slug: 'captive-portal',
    definition: 'A captive portal is a web page that users are forced to view and interact with before being granted access to a public network, commonly seen at airports and hotels.',
    example: 'I had to agree to the terms and conditions on the captive portal before I could use the hotel\'s Wi-Fi.'
  },
  {
    id: 'honeypot',
    term: 'Honeypot',
    slug: 'honeypot',
    definition: 'A honeypot is a decoy computer system set up to attract and trap cyber attackers, allowing security professionals to study their methods.',
    example: 'We set up a honeypot that looked like a vulnerable web server to see what kind of attacks it would attract.'
  },
  {
    id: 'port-knocking',
    term: 'Port knocking',
    slug: 'port-knocking',
    definition: 'Port knocking is a security method where a user must attempt to connect to a specific sequence of closed ports before a real port is opened, acting like a secret knock.',
    example: 'To open the SSH port, you have to perform the correct port knocking sequence first.'
  },
  {
    id: 'reverse-proxying',
    term: 'Reverse proxying',
    slug: 'reverse-proxying',
    definition: 'Reverse proxying is when a server passes requests from the internet to internal servers. It is used for load balancing, security, and caching.',
    example: 'NGINX is often used for reverse proxying to distribute traffic to multiple backend application servers.'
  },
  {
    id: 'fail2ban',
    term: 'Fail2ban',
    slug: 'fail2ban',
    definition: 'Fail2ban is an intrusion prevention software framework that scans log files and bans IP addresses that show malicious signs, such as too many password failures.',
    example: 'I installed Fail2ban to automatically block IPs that try to brute-force my SSH server.'
  },
  {
    id: 'hash-poisoning',
    term: 'Hash poisoning',
    slug: 'hash-poisoning',
    definition: 'Hash poisoning is an attack where an attacker submits data that causes a hash table to have many collisions, degrading its performance and potentially causing a denial of service.',
    example: 'Some web frameworks are vulnerable to hash poisoning if they use predictable hashing algorithms for POST data.'
  },
  {
    id: 'key-escrow',
    term: 'Key escrow',
    slug: 'key-escrow',
    definition: 'Key escrow is the practice of storing a copy of an encryption key with a trusted third party, allowing access to the encrypted data under certain conditions.',
    example: 'Law enforcement agencies sometimes advocate for key escrow to gain access to encrypted communications.'
  },
  {
    id: 'ransom-note',
    term: 'Ransom note',
    slug: 'ransom-note',
    definition: 'A ransom note is a message left by ransomware that informs the victim their files have been encrypted and provides instructions on how to pay the ransom.',
    example: 'After the attack, every folder contained a text file with the ransom note.'
  },
  {
    id: 'botnet-c2',
    term: 'Botnet C2',
    slug: 'botnet-c2',
    definition: 'A Botnet C2 (Command and Control) is the central server that an attacker uses to send commands to and receive data from a network of compromised machines (a botnet).',
    example: 'The security team is trying to identify and sinkhole the botnet C2 server to neutralize the threat.'
  },
  {
    id: 'command-injection',
    term: 'Command injection',
    slug: 'command-injection',
    definition: 'Command injection is an attack where the goal is the execution of arbitrary commands on the host operating system via a vulnerable application.',
    example: 'The web application was vulnerable to command injection because it passed user input directly to a system shell command.'
  },
  {
    id: 'ssrf',
    term: 'SSRF',
    slug: 'ssrf',
    definition: 'Server-Side Request Forgery (SSRF) is a vulnerability where an attacker can coerce a server-side application to make HTTP requests to an arbitrary domain of the attacker\'s choosing.',
    example: 'Using an SSRF vulnerability, the attacker was able to scan the internal network from the compromised web server.'
  },
  {
    id: 'csrf-token',
    term: 'CSRF token',
    slug: 'csrf-token',
    definition: 'A Cross-Site Request Forgery (CSRF) token is a unique, secret, unpredictable value that is used to protect against CSRF attacks, where an attacker tricks a user into performing an unwanted action.',
    example: 'The web application includes a hidden CSRF token in every form to ensure the request is legitimate.'
  },
  {
    id: 'xss-payload',
    term: 'XSS payload',
    slug: 'xss-payload',
    definition: 'An XSS (Cross-Site Scripting) payload is the malicious script that an attacker injects into a vulnerable website, which then gets executed in a victim\'s browser.',
    example: 'The attacker crafted an XSS payload to steal the user\'s session cookie.'
  },
  {
    id: 'shellcode',
    term: 'Shellcode',
    slug: 'shellcode',
    definition: 'Shellcode is a small piece of code used as the payload in the exploitation of a software vulnerability. It typically starts a command shell from which the attacker can control the compromised machine.',
    example: 'After exploiting the buffer overflow, the attacker executed their shellcode to get a reverse shell.'
  },
  {
    id: 'root-privilege',
    term: 'Root privilege',
    slug: 'root-privilege',
    definition: 'Root privilege is the highest level of administrative access on a Unix-like operating system, allowing a user to perform any action on the system.',
    example: 'The goal of many attacks is to gain root privilege on the target machine.'
  },
  {
    id: 'kernel-exploit',
    term: 'Kernel exploit',
    slug: 'kernel-exploit',
    definition: 'A kernel exploit is an attack that targets a vulnerability in the core of an operating system (the kernel) to achieve privilege escalation or system compromise.',
    example: 'A successful kernel exploit can give an attacker complete control over the entire system.'
  },
  {
    id: 'side-channel-exploit',
    term: 'Side-channel exploit',
    slug: 'side-channel-exploit',
    definition: 'A side-channel exploit is an attack based on information gained from the physical implementation of a computer system, rather than from software vulnerabilities. Examples include monitoring power consumption or electromagnetic emissions.',
    example: 'The Spectre and Meltdown vulnerabilities were types of side-channel exploits that targeted modern CPUs.'
  },
  {
    id: 'privilege-escalation',
    term: 'Privilege escalation',
    slug: 'privilege-escalation',
    definition: 'Privilege escalation is the act of exploiting a bug, design flaw, or configuration oversight to gain elevated access to resources that are normally protected.',
    example: 'The attacker gained initial access as a normal user and then used a kernel exploit to perform a privilege escalation to root.'
  },
  {
    id: 'buffer-overrun',
    term: 'Buffer overrun',
    slug: 'buffer-overrun',
    definition: 'A buffer overrun, or buffer overflow, is an anomaly where a program, while writing data to a buffer, overruns the buffer\'s boundary and overwrites adjacent memory locations.',
    example: 'A carefully crafted input can cause a buffer overrun and allow an attacker to execute arbitrary code.'
  },
  {
    id: 'heap-spray',
    term: 'Heap spray',
    slug: 'heap-spray',
    definition: 'A heap spray is a technique used in exploits to place a large amount of malicious code into a program\'s memory, increasing the chances of a successful attack.',
    example: 'The browser exploit used a heap spray to fill the memory with shellcode before triggering the vulnerability.'
  },
  {
    id: 'shallow-scan',
    term: 'Shallow scan',
    slug: 'shallow-scan',
    definition: 'A shallow scan is a quick vulnerability scan that only checks for the most common and easily identifiable vulnerabilities.',
    example: 'The daily shallow scan didn\'t find anything, but the more thorough weekly deep scan found a critical issue.'
  },
  {
    id: 'deep-scan',
    term: 'Deep scan',
    slug: 'deep-scan',
    definition: 'A deep scan is a comprehensive and time-consuming vulnerability scan that checks for a wide range of issues in great detail.',
    example: 'We run a deep scan on our servers every month to ensure nothing has been missed.'
  },
  {
    id: 'packet-mirroring',
    term: 'Packet mirroring',
    slug: 'packet-mirroring',
    definition: 'Packet mirroring, or port mirroring, is a feature on a network switch that sends a copy of all network packets seen on one port to another port, where they can be analyzed.',
    example: 'To diagnose the issue, I configured packet mirroring to send all of the server\'s traffic to my analysis machine.'
  },
  {
    id: 'gre-tunnel',
    term: 'GRE tunnel',
    slug: 'gre-tunnel',
    definition: 'A Generic Routing Encapsulation (GRE) tunnel is a protocol for encapsulating a wide variety of network layer protocols inside virtual point-to-point links.',
    example: 'We set up a GRE tunnel to extend our private network across the public internet to another office.'
  },
  {
    id: 'ipsec-peer',
    term: 'IPsec peer',
    slug: 'ipsec-peer',
    definition: 'An IPsec peer is the remote device at the other end of an IPsec VPN tunnel.',
    example: 'The VPN tunnel is down because our firewall can\'t reach the IPsec peer.'
  },
  {
    id: 'ssl-offloading',
    term: 'SSL offloading',
    slug: 'ssl-offloading',
    definition: 'SSL offloading is the process of removing the SSL-based encryption/decryption workload from a web server and moving it to a dedicated device, like a load balancer.',
    example: 'We use our load balancer for SSL offloading to free up CPU cycles on our web servers.'
  },
  {
    id: 'dpi-firewall',
    term: 'DPI firewall',
    slug: 'dpi-firewall',
    definition: 'A Deep Packet Inspection (DPI) firewall is an advanced type of firewall that examines the data part of a packet, not just the header, to identify and block malicious traffic.',
    example: 'Our DPI firewall can block specific applications, like BitTorrent, regardless of the port they use.'
  },
  {
    id: 'acl-rule',
    term: 'ACL rule',
    slug: 'acl-rule',
    definition: 'An ACL (Access Control List) rule is a single entry in an ACL that specifies a permission, such as allowing or denying traffic from a particular IP address.',
    example: 'I added an ACL rule to the firewall to allow traffic from our new monitoring server.'
  },
  {
    id: 'nat-table',
    term: 'NAT table',
    slug: 'nat-table',
    definition: 'A NAT (Network Address Translation) table is a table in a router that keeps track of the mappings between internal private IP addresses and the external public IP address.',
    example: 'When you browse the web, the router creates an entry in the NAT table to route the return traffic back to your computer.'
  },
  {
    id: 'socket-binding',
    term: 'Socket binding',
    slug: 'socket-binding',
    definition: 'Socket binding is the process of associating a network socket with a specific IP address and port number.',
    example: 'The web server failed to start because another process was already using the socket binding for port 80.'
  },
  {
    id: 'port-exhaustion',
    term: 'Port exhaustion',
    slug: 'port-exhaustion',
    definition: 'Port exhaustion is a condition where a machine runs out of available source ports to create new outgoing network connections.',
    example: 'The load testing server crashed due to port exhaustion after creating hundreds of thousands of connections.'
  },
  {
    id: 'dns-leak',
    term: 'DNS leak',
    slug: 'dns-leak',
    definition: 'A DNS leak is a security flaw where DNS queries are sent outside of a VPN tunnel, revealing your browsing activity to your ISP.',
    example: 'Even though I was on a VPN, a DNS leak was revealing all the websites I was visiting.'
  },
  {
    id: 'dns-filtering',
    term: 'DNS filtering',
    slug: 'dns-filtering',
    definition: 'DNS filtering is a method of blocking access to malicious or undesirable websites by intercepting DNS queries and blocking those for known bad domains.',
    example: 'Our corporate network uses DNS filtering to block access to social media and malware sites.'
  },
  {
    id: 'dnssec',
    term: 'DNSSEC',
    slug: 'dnssec',
    definition: 'DNSSEC (Domain Name System Security Extensions) is a suite of specifications for securing certain kinds of information provided by DNS by using digital signatures.',
    example: 'Enabling DNSSEC on our domain helps prevent attackers from forging DNS responses and redirecting our users.'
  },
  {
    id: 'mx-record',
    term: 'MX record',
    slug: 'mx-record',
    definition: 'A Mail Exchanger (MX) record is a type of DNS record that specifies the mail server responsible for accepting email messages on behalf of a domain name.',
    example: 'To use Google Workspace for email, you need to point your domain\'s MX records to Google\'s mail servers.'
  },
  {
    id: 'ptr-record',
    term: 'PTR record',
    slug: 'ptr-record',
    definition: 'A Pointer (PTR) record is a type of DNS record used for reverse DNS lookups, which maps an IP address back to a domain name.',
    example: 'Some mail servers will reject email from servers that do not have a valid PTR record.'
  },
  {
    id: 'reverse-lookup',
    term: 'Reverse lookup',
    slug: 'reverse-lookup',
    definition: 'A reverse DNS lookup is the process of querying the DNS to determine the domain name associated with a given IP address.',
    example: 'I did a reverse lookup on the IP address and found that it belonged to a known spam provider.'
  },
  {
    id: 'dhcp-pool',
    term: 'DHCP pool',
    slug: 'dhcp-pool',
    definition: 'A DHCP pool is a range of IP addresses that a DHCP server is configured to lease out to clients on a network.',
    example: 'The DHCP pool is almost full; we need to add more addresses to accommodate all the new devices.'
  },
  {
    id: 'lease-time',
    term: 'Lease time',
    slug: 'lease-time',
    definition: 'The lease time is the duration for which a DHCP server grants an IP address to a client.',
    example: 'We set a short lease time of one hour for the public Wi-Fi network.'
  },
  {
    id: 'connection-timeout',
    term: 'Connection timeout',
    slug: 'connection-timeout',
    definition: 'A connection timeout occurs when a client fails to establish a connection with a server within a specified period of time.',
    example: 'I got a connection timeout error because the server was down and not responding to requests.'
  },
  {
    id: 'syn-flood',
    term: 'SYN flood',
    slug: 'syn-flood',
    definition: 'A SYN flood is a type of denial-of-service attack where an attacker sends a succession of SYN requests to a target\'s system in an attempt to consume enough server resources to make the system unresponsive.',
    example: 'The firewall detected a SYN flood coming from hundreds of different IP addresses.'
  },
  {
    id: 'ack-flood',
    term: 'ACK flood',
    slug: 'ack-flood',
    definition: 'An ACK flood is a denial-of-service attack that attempts to overwhelm a server with a large number of ACK packets.',
    example: 'Unlike a SYN flood, an ACK flood is more difficult to filter because it uses legitimate-looking packets.'
  },
  {
    id: 'handshake-timeout',
    term: 'Handshake timeout',
    slug: 'handshake-timeout',
    definition: 'A handshake timeout occurs when the initial communication (handshake) between two systems, such as a TLS handshake, fails to complete in a timely manner.',
    example: 'Slow network conditions were causing a TLS handshake timeout when connecting to the server.'
  },
  {
    id: 'half-open-connection',
    term: 'Half-open connection',
    slug: 'half-open-connection',
    definition: 'A half-open connection is a TCP connection where one side has closed or aborted the connection without the other side knowing, or where the initial SYN request has not been fully established.',
    example: 'A SYN flood attack works by creating a large number of half-open connections on the target server.'
  },
  {
    id: 'proxy-pass',
    term: 'Proxy pass',
    slug: 'proxy-pass',
    definition: 'Proxy pass is a directive in server configurations (like NGINX) that forwards a request to a backend server.',
    example: 'I used `proxy_pass` to send all requests for `/api` to my Node.js application running on port 3000.'
  },
  {
    id: 'traffic-mirror',
    term: 'Traffic mirror',
    slug: 'traffic-mirror',
    definition: 'A traffic mirror is a feature, often in cloud environments, that allows you to copy network traffic from a source and send it to a destination for analysis.',
    example: 'We set up a traffic mirror to send a copy of all our production traffic to our intrusion detection system.'
  },
  {
    id: 'network-probe',
    term: 'Network probe',
    slug: 'network-probe',
    definition: 'A network probe is a diagnostic tool or packet sent to a network to gather information about its state and connectivity.',
    example: 'The monitoring system sends a network probe to the server every minute to ensure it is still online.'
  },
  {
    id: 'route-flapping',
    term: 'Route flapping',
    slug: 'route-flapping',
    definition: 'Route flapping is a situation where a router repeatedly advertises a route as being available and then unavailable in quick succession.',
    example: 'A faulty network cable was causing route flapping, which led to network instability.'
  },
  {
    id: 'icmp-block',
    term: 'ICMP block',
    slug: 'icmp-block',
    definition: 'An ICMP block is a firewall rule that prevents ICMP traffic, such as ping requests, from entering or leaving a network.',
    example: 'Many organizations implement an ICMP block on their external firewall for security reasons.'
  },
  {
    id: 'udp-relay',
    term: 'UDP relay',
    slug: 'udp-relay',
    definition: 'A UDP relay is a service that forwards UDP packets from one network segment to another, often used to help protocols like DHCP cross different subnets.',
    example: 'We configured a UDP relay agent to allow clients on one VLAN to get an IP address from the DHCP server on another VLAN.'
  },
  {
    id: 'wan-link',
    term: 'WAN link',
    slug: 'wan-link',
    definition: 'A WAN (Wide Area Network) link is the connection that joins a local network to a wide area network, like the internet.',
    example: 'The office\'s primary WAN link went down, but we failed over to the backup connection.'
  },
  {
    id: 'leo-satellite-link',
    term: 'LEO satellite link',
    slug: 'leo-satellite-link',
    definition: 'A Low Earth Orbit (LEO) satellite link is an internet connection provided by a constellation of satellites in a low earth orbit, such as Starlink.',
    example: 'For our remote site with no fiber access, we are using a LEO satellite link for internet connectivity.'
  },
  {
    id: 'qoe-metrics',
    term: 'QoE metrics',
    slug: 'qoe-metrics',
    definition: 'Quality of Experience (QoE) metrics are measurements that attempt to quantify a user\'s subjective experience with a service, such as video streaming quality.',
    example: 'Our monitoring tools collect QoE metrics like video startup time and buffering ratio.'
  },
  {
    id: 'siem-logs',
    term: 'SIEM logs',
    slug: 'siem-logs',
    definition: 'SIEM (Security Information and Event Management) logs are aggregated logs from various sources across a network that are correlated and analyzed to detect security threats.',
    example: 'The SIEM logs showed a pattern of failed logins from a suspicious IP address across multiple servers.'
  },
  {
    id: 'ioc-indicator',
    term: 'IOC indicator',
    slug: 'ioc-indicator',
    definition: 'An Indicator of Compromise (IOC) is a piece of forensic data, like a file hash or a malicious IP address, that indicates a system has been breached.',
    example: 'The security bulletin provided a list of IOC indicators to search for in our logs.'
  },
  {
    id: 'mitre-att-ck',
    term: 'MITRE ATT&CK',
    slug: 'mitre-att-ck',
    definition: 'MITRE ATT&CK is a globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.',
    example: 'We use the MITRE ATT&CK framework to model our defensive strategies against known adversary behaviors.'
  },
  {
    id: 'threat-model',
    term: 'Threat model',
    slug: 'threat-model',
    definition: 'A threat model is a process by which potential threats, vulnerabilities, and countermeasures can be identified, enumerated, and prioritized.',
    example: 'Before building the new application, we conducted a threat model exercise to identify potential security risks.'
  },
  {
    id: 'cyber-kill-chain',
    term: 'Cyber kill chain',
    slug: 'cyber-kill-chain',
    definition: 'The cyber kill chain is a framework developed by Lockheed Martin that outlines the stages of a common cyberattack, from reconnaissance to data exfiltration.',
    example: 'By disrupting the cyber kill chain at an early stage, we can prevent a full-blown breach.'
  },
  {
    id: 'air-gap',
    term: 'Air gap',
    slug: 'air-gap',
    definition: 'An air gap is a security measure where a computer or network is physically isolated from other networks, such as the internet.',
    example: 'The nuclear power plant\'s control systems are on an air-gapped network to protect them from external cyberattacks.'
  },
  {
    id: 'sandbox-execution',
    term: 'Sandbox execution',
    slug: 'sandbox-execution',
    definition: 'Sandbox execution is the practice of running a program in a restricted, isolated environment (a sandbox) to prevent it from harming the host system.',
    example: 'Our email security gateway uses sandbox execution to safely open attachments and check them for malware.'
  },
  {
    id: 'zero-trust-model',
    term: 'Zero-trust model',
    slug: 'zero-trust-model',
    definition: 'The zero-trust model is a security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters and must verify everything.',
    example: 'We are moving to a zero-trust model, where every access request is authenticated and authorized, regardless of where it comes from.'
  },
  {
    id: 'shadow-credentials',
    term: 'Shadow credentials',
    slug: 'shadow-credentials',
    definition: 'Shadow credentials are forgotten or unmanaged copies of user credentials, such as a password saved in a script, that pose a security risk.',
    example: 'The attacker found shadow credentials stored in an old backup file, which gave them access to the database.'
  },
  {
    id: 'session-replay',
    term: 'Session replay',
    slug: 'session-replay',
    definition: 'Session replay is the ability to replay a user\'s journey on a web app or mobile app. It can be used for debugging or analytics, but also poses a security risk.',
    example: 'A vulnerability in the session replay tool allowed an attacker to view sensitive user information.'
  },
  {
    id: 'token-expiration',
    term: 'Token expiration',
    slug: 'token-expiration',
    definition: 'Token expiration is the lifespan of an authentication token, after which it becomes invalid and can no longer be used for access.',
    example: 'For security, we set a short token expiration of 15 minutes for our access tokens.'
  },
  {
    id: 'broken-auth',
    term: 'Broken auth',
    slug: 'broken-auth',
    definition: 'Broken authentication is a category of security vulnerabilities that allow attackers to compromise user accounts or gain unauthorized access due to flaws in authentication mechanisms.',
    example: 'The application was vulnerable to broken auth because it allowed for password spraying attacks without any rate limiting.'
  },
  {
    id: 'key-rotation',
    term: 'Key rotation',
    slug: 'key-rotation',
    definition: 'Key rotation is the security practice of periodically changing cryptographic keys to reduce the impact of a compromised key.',
    example: 'Our compliance policy mandates that all encryption keys must be rotated annually.'
  },
  {
    id: 'ssh-fingerprint',
    term: 'SSH fingerprint',
    slug: 'ssh-fingerprint',
    definition: 'An SSH fingerprint is a shortened version of a server\'s public key, used to verify the authenticity of the server when you connect to it for the first time.',
    example: 'When I first connected to the server, SSH asked me to verify its fingerprint to ensure I wasn\'t connecting to a malicious machine.'
  },
  {
    id: 'mfa-fatigue',
    term: 'MFA fatigue',
    slug: 'mfa-fatigue',
    definition: 'MFA fatigue is an attack where an attacker who has a user\'s password bombards them with repeated multi-factor authentication push notifications until the user gives in and approves one.',
    example: 'The user fell victim to an MFA fatigue attack and approved the login request, giving the attacker access to their account.'
  },
  {
    id: 'blue-green-deploy',
    term: 'Blue-green deploy',
    slug: 'blue-green-deploy',
    definition: 'A blue-green deployment is a release strategy where you have two identical production environments, "blue" and "green." Traffic is moved from the old (blue) to the new (green) version, allowing for instant rollback.',
    example: 'We use blue-green deployments to release new versions of our website with zero downtime.'
  },
  {
    id: 'canary-deploy',
    term: 'Canary deploy',
    slug: 'canary-deploy',
    definition: 'A canary deployment is a technique to reduce the risk of introducing a new software version in production by slowly rolling out the change to a small subset of users before making it available to everybody.',
    example: 'We released the new feature to 1% of users in a canary deploy to monitor for any issues.'
  },
  {
    id: 'rolling-deploy',
    term: 'Rolling deploy',
    slug: 'rolling-deploy',
    definition: 'A rolling deployment is a release strategy where you slowly replace instances of the old version of an application with instances of the new version, one by one or in batches.',
    example: 'The Kubernetes rolling deploy ensures that there are always active pods to serve traffic during the update.'
  },
  {
    id: 'immutable-deploy',
    term: 'Immutable deploy',
    slug: 'immutable-deploy',
    definition: 'An immutable deployment is a release strategy where instead of updating existing servers, you deploy a new set of servers with the new version and then replace the old ones.',
    example: 'Using immutable deployments prevents configuration drift and makes our releases more predictable.'
  },
  {
    id: 'iac-infrastructure-as-code',
    term: 'IaC (Infrastructure as Code)',
    slug: 'iac-infrastructure-as-code',
    definition: 'Infrastructure as Code (IaC) is the process of managing and provisioning computer data centers through machine-readable definition files, rather than physical hardware configuration or interactive configuration tools.',
    example: 'We use Terraform for our IaC, which allows us to version control our entire cloud infrastructure.'
  },
  {
    id: 'terraform-plan',
    term: 'Terraform plan',
    slug: 'terraform-plan',
    definition: 'A Terraform plan is the output of the `terraform plan` command, which shows you what actions Terraform will take to modify your infrastructure to match the configuration.',
    example: 'Before applying the changes, I always review the Terraform plan to make sure it\'s not going to delete anything important.'
  },
  {
    id: 'helm-chart',
    term: 'Helm chart',
    slug: 'helm-chart',
    definition: 'A Helm chart is a package of pre-configured Kubernetes resources that can be managed as a single unit.',
    example: 'I installed Prometheus on our cluster by simply deploying the official Helm chart.'
  },
  {
    id: 'kubelet',
    term: 'Kubelet',
    slug: 'kubelet',
    definition: 'The kubelet is an agent that runs on each node in a Kubernetes cluster. It makes sure that containers are running in a Pod.',
    example: 'If the kubelet on a node fails, the master node will mark that node as unhealthy.'
  },
  {
    id: 'sidecar-container',
    term: 'Sidecar container',
    slug: 'sidecar-container',
    definition: 'A sidecar container is a container that runs alongside the main application container in a Kubernetes Pod to provide supporting functionality, like logging or monitoring.',
    example: 'We use a sidecar container to inject the service mesh proxy into each application pod.'
  },
  {
    id: 'node-drain',
    term: 'Node drain',
    slug: 'node-drain',
    definition: 'A node drain is the process in Kubernetes of gracefully evicting all pods from a node so that the node can be taken down for maintenance.',
    example: 'I need to perform a node drain before I can apply the kernel update to that server.'
  },
  {
    id: 'node-taint',
    term: 'Node taint',
    slug: 'node-taint',
    definition: 'A node taint in Kubernetes allows a node to repel a set of pods. Pods must have a "toleration" for the taint to be scheduled on that node.',
    example: 'We applied a node taint to our GPU nodes to ensure that only pods that need a GPU are scheduled on them.'
  },
  {
    id: 'pod-eviction',
    term: 'Pod eviction',
    slug: 'pod-eviction',
    definition: 'Pod eviction is the process in Kubernetes where a pod is gracefully terminated from a node, for example, when a node is under resource pressure.',
    example: 'When the node ran out of memory, the kubelet started a pod eviction process to free up resources.'
  },
  {
    id: 'pod-disruption-budget',
    term: 'Pod disruption budget',
    slug: 'pod-disruption-budget',
    definition: 'A Pod Disruption Budget (PDB) in Kubernetes limits the number of pods of a replicated application that are down simultaneously from voluntary disruptions.',
    example: 'We set a pod disruption budget to ensure that at least two replicas of our web server are always running.'
  },
  {
    id: 'statefulset',
    term: 'StatefulSet',
    slug: 'statefulset',
    definition: 'A StatefulSet is a Kubernetes workload object used to manage stateful applications, providing stable network identifiers and persistent storage.',
    example: 'We run our database in a StatefulSet to ensure it has a stable hostname and persistent storage.'
  },
  {
    id: 'daemonset',
    term: 'DaemonSet',
    slug: 'daemonset',
    definition: 'A DaemonSet is a Kubernetes workload that ensures a copy of a pod is running on all (or some) nodes in a cluster.',
    example: 'We use a DaemonSet to deploy our logging agent to every node in the cluster.'
  },
  {
    id: 'cronjob',
    term: 'CronJob',
    slug: 'cronjob',
    definition: 'A CronJob is a Kubernetes object that creates pods on a repeating schedule, similar to a classic cron job.',
    example: 'We have a CronJob that runs every night to perform a database backup.'
  },
  {
    id: 'service-mesh',
    term: 'Service mesh',
    slug: 'service-mesh',
    definition: 'A service mesh is a dedicated infrastructure layer for managing service-to-service communication in a microservices architecture.',
    example: 'Istio is a popular service mesh that provides traffic management, security, and observability.'
  },
  {
    id: 'ingress-controller',
    term: 'Ingress controller',
    slug: 'ingress-controller',
    definition: 'An Ingress controller is a component in a Kubernetes cluster that is responsible for fulfilling Ingress resources, usually by managing an external load balancer.',
    example: 'We use the NGINX Ingress controller to expose our web services to the internet.'
  },
  {
    id: 'load-balancer-healthcheck',
    term: 'Load balancer healthcheck',
    slug: 'load-balancer-healthcheck',
    definition: 'A load balancer health check is a periodic request sent by a load balancer to its backend servers to ensure they are healthy and able to serve traffic.',
    example: 'If a server fails the load balancer health check, it will be automatically removed from the pool.'
  },
  {
    id: 'autoscaling-group',
    term: 'Autoscaling group',
    slug: 'autoscaling-group',
    definition: 'An autoscaling group is a collection of servers (instances) that can be automatically scaled up or down based on demand.',
    example: 'Our web servers are in an autoscaling group that adds more instances when CPU usage is high.'
  },
  {
    id: 'scaling-cooldown',
    term: 'Scaling cooldown',
    slug: 'scaling-cooldown',
    definition: 'A scaling cooldown is a period of time after a scaling activity during which an autoscaling group will not launch or terminate additional instances.',
    example: 'We set a scaling cooldown of 5 minutes to prevent the group from scaling up and down too rapidly.'
  },
  {
    id: 'warm-instance',
    term: 'Warm instance',
    slug: 'warm-instance',
    definition: 'A warm instance is a pre-initialized server or container that is kept ready to quickly handle requests, reducing the latency of cold starts.',
    example: 'Our serverless platform keeps a few warm instances on standby to provide low-latency responses.'
  },
  {
    id: 'cold-instance',
    term: 'Cold instance',
    slug: 'cold-instance',
    definition: 'A cold instance is a server or container that is not running and must be initialized before it can handle a request, leading to a "cold start" delay.',
    example: 'The first request of the day is slow because it always hits a cold instance.'
  },
  {
    id: 'spot-instance',
    term: 'Spot instance',
    slug: 'spot-instance',
    definition: 'A spot instance is a type of cloud computing instance that uses spare capacity at a steep discount, but can be terminated with little notice.',
    example: 'We use spot instances for our non-critical batch processing jobs to save money.'
  },
  {
    id: 'reserved-instance',
    term: 'Reserved instance',
    slug: 'reserved-instance',
    definition: 'A reserved instance is a cloud computing instance that you commit to using for a long period (e.g., 1 or 3 years) in exchange for a significant discount compared to on-demand pricing.',
    example: 'For our database servers that run 24/7, we purchased reserved instances to lower our monthly bill.'
  },
  {
    id: 'serverless-function',
    term: 'Serverless function',
    slug: 'serverless-function',
    definition: 'A serverless function is a piece of code that runs in a managed environment where you don\'t have to provision or manage the underlying servers.',
    example: 'I wrote a serverless function that gets triggered every time a new file is uploaded to the storage bucket.'
  },
  {
    id: 'nat-gateway',
    term: 'NAT gateway',
    slug: 'nat-gateway',
    definition: 'A NAT gateway is a managed cloud service that allows instances in a private subnet to connect to the internet, but prevents the internet from initiating a connection with those instances.',
    example: 'Our backend servers are in a private subnet and use a NAT gateway to download software updates.'
  },
  {
    id: 'vpc-endpoint',
    term: 'VPC endpoint',
    slug: 'vpc-endpoint',
    definition: 'A VPC endpoint enables you to privately connect your VPC to supported AWS services and VPC endpoint services without requiring an internet gateway, NAT device, VPN connection, or AWS Direct Connect connection.',
    example: 'We created a VPC endpoint for S3 so our instances can access it without going over the public internet.'
  },
  {
    id: 'bastion-host',
    term: 'Bastion host',
    slug: 'bastion-host',
    definition: 'A bastion host is a special-purpose computer on a network specifically designed and configured to withstand attacks, often acting as a secure gateway to a private network.',
    example: 'To manage our internal servers, we first have to SSH into the bastion host.'
  },
  {
    id: 'route-table-entry',
    term: 'Route table entry',
    slug: 'route-table-entry',
    definition: 'A route table entry is a single rule in a route table that specifies where network traffic from your subnet or gateway should be directed.',
    example: 'I added a route table entry to direct all traffic destined for the internet to the NAT gateway.'
  },
  {
    id: 'cloud-formation-stack',
    term: 'Cloud formation stack',
    slug: 'cloud-formation-stack',
    definition: 'A CloudFormation stack is a collection of AWS resources that you can manage as a single unit, created from a CloudFormation template.',
    example: 'I can tear down the entire test environment by simply deleting the CloudFormation stack.'
  },
  {
    id: 'docker-layers',
    term: 'Docker layers',
    slug: 'docker-layers',
    definition: 'Docker layers are the read-only files that make up a Docker image. Each instruction in a Dockerfile creates a new layer.',
    example: 'Docker is efficient because it can cache layers, so it only has to rebuild the ones that have changed.'
  },
  {
    id: 'docker-prune',
    term: 'Docker prune',
    slug: 'docker-prune',
    definition: 'Docker prune is a command used to clean up unused Docker objects, such as stopped containers, unused networks, and dangling images.',
    example: 'I ran `docker system prune` to free up several gigabytes of disk space.'
  },
  {
    id: 'registry-mirror',
    term: 'Registry mirror',
    slug: 'registry-mirror',
    definition: 'A registry mirror is a local cache of a container image registry. It can be used to speed up image pulls and improve reliability.',
    example: 'Our CI/CD system uses a registry mirror to avoid hitting Docker Hub\'s rate limits.'
  },
  {
    id: 'storage-class',
    term: 'Storage class',
    slug: 'storage-class',
    definition: 'In cloud storage, a storage class determines the cost, availability, and durability of your data. Examples include Standard, Infrequent Access, and Glacier.',
    example: 'We use the Infrequent Access storage class for our backups to save money.'
  },
  {
    id: 'persistent-volume',
    term: 'Persistent volume',
    slug: 'persistent-volume',
    definition: 'In Kubernetes, a Persistent Volume (PV) is a piece of storage in the cluster that has been provisioned by an administrator. It is a resource in the cluster just like a node is a cluster resource.',
    example: 'Our database pod uses a Persistent Volume to ensure its data survives even if the pod is restarted.'
  },
  {
    id: 'ephemeral-storage',
    term: 'Ephemeral storage',
    slug: 'ephemeral-storage',
    definition: 'Ephemeral storage is temporary storage that exists only as long as its associated resource (like a container or pod) is running. When the resource is stopped, the data is lost.',
    example: 'The container uses ephemeral storage for temporary cache files.'
  },
  {
    id: 'node-affinity',
    term: 'Node affinity',
    slug: 'node-affinity',
    definition: 'Node affinity is a Kubernetes feature that allows you to constrain which nodes your pod can be scheduled on, based on labels on the node.',
    example: 'We used node affinity to ensure that our data processing pods are always scheduled on nodes with fast SSDs.'
  },
  {
    id: 'pod-affinity',
    term: 'Pod affinity',
    slug: 'pod-affinity',
    definition: 'Pod affinity is a Kubernetes feature that allows you to constrain which nodes your pod can be scheduled on based on the labels of pods that are already running on the node.',
    example: 'We used pod affinity to co-locate our frontend and backend pods on the same node for lower latency.'
  },
  {
    id: 'pod-anti-affinity',
    term: 'Pod anti-affinity',
    slug: 'pod-anti-affinity',
    definition: 'Pod anti-affinity is a Kubernetes feature that prevents a pod from being scheduled on a node where certain other pods are already running.',
    example: 'We used pod anti-affinity to ensure that the replicas of our database are spread across different nodes for high availability.'
  },
  {
    id: 'health-probe',
    term: 'Health probe',
    slug: 'health-probe',
    definition: 'A health probe is a check performed by an orchestrator or load balancer to determine if an application instance is healthy and able to receive traffic.',
    example: 'Kubernetes uses liveness and readiness probes as its health probes.'
  },
  {
    id: 'liveness-probe',
    term: 'Liveness probe',
    slug: 'liveness-probe',
    definition: 'In Kubernetes, a liveness probe checks if a container is still running. If the probe fails, the kubelet will kill and restart the container.',
    example: 'We configured a liveness probe to restart our application if it becomes deadlocked.'
  },
  {
    id: 'readiness-probe',
    term: 'Readiness probe',
    slug: 'readiness-probe',
    definition: 'In Kubernetes, a readiness probe checks if a container is ready to start accepting traffic. If the probe fails, the pod is removed from the service endpoints.',
    example: 'The readiness probe for our web server checks if it can connect to the database before it\'s allowed to receive traffic.'
  },
  {
    id: 'job-runner',
    term: 'Job runner',
    slug: 'job-runner',
    definition: 'A job runner is a system or agent that is responsible for executing background jobs or tasks from a queue.',
    example: 'Our CI/CD system has several job runners to execute our build and test pipelines in parallel.'
  },
  {
    id: 'build-runner',
    term: 'Build runner',
    slug: 'build-runner',
    definition: 'A build runner is a specific type of job runner that is dedicated to compiling and building software.',
    example: 'We have a dedicated build runner with a fast CPU and a lot of RAM to speed up our compilation times.'
  },
  {
    id: 'artifact-registry',
    term: 'Artifact registry',
    slug: 'artifact-registry',
    definition: 'An artifact registry is a repository for storing and managing software packages and build artifacts, such as Docker images, language packages, and binaries.',
    example: 'We store all our Java JAR files in our company\'s artifact registry.'
  },
  {
    id: 's3-bucket',
    term: 'S3 bucket',
    slug: 's3-bucket',
    definition: 'An S3 bucket is the basic storage container in Amazon S3 (Simple Storage Service), where you can store and retrieve any amount of data.',
    example: 'Our web application serves all its static assets from an S3 bucket.'
  },
  {
    id: 'object-versioning',
    term: 'Object versioning',
    slug: 'object-versioning',
    definition: 'Object versioning is a feature in cloud storage that keeps multiple versions of an object in the same bucket, allowing you to recover from accidental deletions or overwrites.',
    example: 'We enabled object versioning on our S3 bucket to protect against accidental data loss.'
  },
  {
    id: 'lifecycle-rules',
    term: 'Lifecycle rules',
    slug: 'lifecycle-rules',
    definition: 'Lifecycle rules are policies in cloud storage that automatically transition objects to a cheaper storage class or delete them after a certain period of time.',
    example: 'We have a lifecycle rule that moves logs to Glacier Deep Archive after 90 days and deletes them after 7 years.'
  },
  {
    id: 'iam-policy',
    term: 'IAM policy',
    slug: 'iam-policy',
    definition: 'An IAM (Identity and Access Management) policy is an object in AWS that, when associated with an identity or resource, defines their permissions.',
    example: 'I created an IAM policy that gives our application read-only access to the S3 bucket.'
  },
  {
    id: 'privilege-boundary',
    term: 'Privilege boundary',
    slug: 'privilege-boundary',
    definition: 'A privilege boundary is a security mechanism that separates entities with different levels of privilege, such as kernel mode and user mode in an operating system.',
    example: 'An exploit that crosses a privilege boundary is a serious security vulnerability.'
  },
  {
    id: 'key-vault',
    term: 'Key vault',
    slug: 'key-vault',
    definition: 'A key vault is a secure cloud service for storing and managing cryptographic keys, secrets, and certificates.',
    example: 'We store all our application\'s database connection strings and API keys in Azure Key Vault.'
  },
  {
    id: 'metrics-server',
    term: 'Metrics server',
    slug: 'metrics-server',
    definition: 'A metrics server is a system that collects, stores, and serves performance metrics from other systems, such as CPU usage, memory, and request latency.',
    example: 'Prometheus is a popular metrics server used for monitoring and alerting.'
  },
  {
    id: 'log-forwarder',
    term: 'Log forwarder',
    slug: 'log-forwarder',
    definition: 'A log forwarder is a lightweight agent that collects logs from a source and sends them to a centralized logging system.',
    example: 'We use Fluentd as a log forwarder to collect logs from all our servers and send them to Elasticsearch.'
  },
  {
    id: 'service-discovery',
    term: 'Service discovery',
    slug: 'service-discovery',
    definition: 'Service discovery is the process of how applications and microservices locate each other on a network.',
    example: 'Kubernetes provides built-in service discovery, so pods can find each other using DNS names.'
  },
  {
    id: 'alert-fatigue',
    term: 'Alert fatigue',
    slug: 'alert-fatigue',
    definition: 'Alert fatigue is a condition where people become desensitized to security or monitoring alerts after being exposed to a large number of them, leading to missed important alerts.',
    example: 'The on-call engineer was suffering from alert fatigue after being paged for hundreds of non-critical issues.'
  },
  {
    id: 'incident-bridge',
    term: 'Incident bridge',
    slug: 'incident-bridge',
    definition: 'An incident bridge is a dedicated communication channel, like a video call or chat room, that is set up to coordinate the response to a technical incident.',
    example: 'The SRE team opened an incident bridge to troubleshoot the production outage.'
  },
  {
    id: 'runbook',
    term: 'Runbook',
    slug: 'runbook',
    definition: 'A runbook is a detailed compilation of procedures and operations that a system administrator or operator carries out to handle a particular scenario or task.',
    example: 'When the database goes down, the on-call engineer follows the steps in the runbook to bring it back online.'
  },
  {
    id: 'post-mortem',
    term: 'Post-mortem',
    slug: 'post-mortem',
    definition: 'A post-mortem is a process conducted after an incident to analyze what happened, what was the impact, and what can be done to prevent it from happening again.',
    example: 'We have a blameless post-mortem after every major outage to learn from our mistakes.'
  },
  {
    id: 'log-ingestion',
    term: 'Log ingestion',
    slug: 'log-ingestion',
    definition: 'Log ingestion is the process of collecting, parsing, and storing log data from various sources into a centralized logging system.',
    example: 'Our log ingestion pipeline processes millions of log events per second.'
  },
  {
    id: 'retention-policy',
    term: 'Retention policy',
    slug: 'retention-policy',
    definition: 'A retention policy defines how long data should be kept before it is automatically deleted or archived.',
    example: 'Our data retention policy requires us to keep all financial records for 7 years.'
  },
  {
    id: 'trace-spans',
    term: 'Trace spans',
    slug: 'trace-spans',
    definition: 'In distributed tracing, a trace is a view into a request as it moves through a system, and a span represents a single operation within that trace.',
    example: 'By looking at the trace spans, I could see that the database query was the slowest part of the request.'
  },
  {
    id: 'caller-context',
    term: 'Caller context',
    slug: 'caller-context',
    definition: 'Caller context is information about the source of a request or function call, which is passed along to downstream services for tracing and debugging purposes.',
    example: 'Our microservices propagate the caller context so we can trace a single user request across the entire system.'
  },
  {
    id: 'cloudwatch-alarms',
    term: 'CloudWatch alarms',
    slug: 'cloudwatch-alarms',
    definition: 'CloudWatch alarms are a feature in AWS that watches a single metric over a time period you specify, and performs one or more actions based on the value of the metric relative to a given threshold.',
    example: 'I set up a CloudWatch alarm to notify me if the CPU utilization of my EC2 instance goes above 80%.'
  },
  {
    id: 'dead-letter-queue',
    term: 'Dead-letter queue',
    slug: 'dead-letter-queue',
    definition: 'A dead-letter queue is a queue where messages are sent if they cannot be processed successfully by a consumer, allowing for later analysis.',
    example: 'We configured a dead-letter queue to capture any messages that our worker process fails to handle.'
  },
  {
    id: 'message-broker',
    term: 'Message broker',
    slug: 'message-broker',
    definition: 'A message broker is an intermediary computer program module that translates a message from the formal messaging protocol of the sender to the formal messaging protocol of the receiver.',
    example: 'We use RabbitMQ as our message broker to decouple our microservices.'
  },
  {
    id: 'event-bus',
    term: 'Event bus',
    slug: 'event-bus',
    definition: 'An event bus is a messaging system that allows different components of an application to communicate with each other by sending and receiving events, without being directly aware of each other.',
    example: 'Our application uses an event bus to notify all interested components when a new user signs up.'
  },
  {
    id: 'snapshot-replication',
    term: 'Snapshot replication',
    slug: 'snapshot-replication',
    definition: 'Snapshot replication is a data replication method where a snapshot of a database or storage volume is taken at a point in time and copied to another location.',
    example: 'We use snapshot replication to create a daily copy of our production database in a different region for disaster recovery.'
  },
  {
    id: 'warm-backup',
    term: 'Warm backup',
    slug: 'warm-backup',
    definition: 'A warm backup is a backup of a system that is periodically updated and kept in a state where it can be brought online relatively quickly in case of a failure.',
    example: 'Our warm backup site is updated every hour and can be activated within 30 minutes.'
  },
  {
    id: 'cold-backup',
    term: 'Cold backup',
    slug: 'cold-backup',
    definition: 'A cold backup is a backup of a system that is taken while the system is offline, ensuring data consistency. Restoring from a cold backup is typically slower.',
    example: 'We perform a full cold backup of our entire system every weekend during the maintenance window.'
  },
  {
    id: 'high-availability-set',
    term: 'High availability set',
    slug: 'high-availability-set',
    definition: 'A high availability set is a grouping of virtual machines or servers that are designed to ensure that if one fails, others remain available, minimizing downtime.',
    example: 'We placed our web servers in a high availability set to ensure our website is always online.'
  },
  {
    id: 'load-shedding',
    term: 'Load shedding',
    slug: 'load-shedding',
    definition: 'Load shedding is a strategy for dealing with high traffic loads where the system starts to gracefully degrade its functionality or intentionally drop some requests to protect itself from crashing.',
    example: 'During the massive traffic spike, our system initiated load shedding by temporarily disabling non-essential features.'
  },
  {
    id: 'fault-domain',
    term: 'Fault domain',
    slug: 'fault-domain',
    definition: 'A fault domain is a set of hardware components, such as a server rack or a power supply, that share a single point of failure.',
    example: 'For high availability, you should spread your application instances across multiple fault domains.'
  },
  {
    id: 'availability-zone',
    term: 'Availability zone',
    slug: 'availability-zone',
    definition: 'An Availability Zone (AZ) is one or more discrete data centers with redundant power, networking, and connectivity in a cloud region.',
    example: 'We deployed our application across multiple availability zones to ensure it can survive a data center outage.'
  },
  {
    id: 'throttling-limit',
    term: 'Throttling limit',
    slug: 'throttling-limit',
    definition: 'A throttling limit is the maximum number of requests that a service will accept in a given time period before it starts to reject them.',
    example: 'I got a "429 Too Many Requests" error because I exceeded the API\'s throttling limit.'
  },
  {
    id: 'request-quota',
    term: 'Request quota',
    slug: 'request-quota',
    definition: 'A request quota is a limit on the total number of requests that a user or application can make to a service over a longer period of time, such as a day or a month.',
    example: 'I have used 90% of my monthly request quota for the mapping API.'
  },
  {
    id: 'error-budget',
    term: 'Error budget',
    slug: 'error-budget',
    definition: 'An error budget is a concept in Site Reliability Engineering (SRE) that defines the acceptable level of unreliability for a service. If the service is more reliable than its goal, the remaining "budget" can be spent on new releases.',
    example: 'We have burned through our entire error budget for this quarter, so we need to freeze new releases and focus on stability.'
  },
  {
    id: 'sla-breach',
    term: 'SLA breach',
    slug: 'sla-breach',
    definition: 'An SLA (Service Level Agreement) breach occurs when a service fails to meet the performance and availability guarantees defined in its SLA.',
    example: 'The recent 8-hour outage constituted a major SLA breach, and we will be issuing service credits to our customers.'
  },
  {
    id: 'usage-spike',
    term: 'Usage spike',
    slug: 'usage-spike',
    definition: 'A usage spike is a sudden, sharp increase in the usage of a system, such as a spike in traffic or CPU utilization.',
    example: 'Our autoscaling group handled the unexpected usage spike by quickly launching new instances.'
  },
  {
    id: 'zombie-nodes',
    term: 'Zombie nodes',
    slug: 'zombie-nodes',
    definition: 'Zombie nodes are servers or cluster nodes that are still running but are unresponsive or no longer participating correctly in the cluster.',
    example: 'The orchestrator detected and terminated two zombie nodes that were not responding to health checks.'
  },
  {
    id: 'orphan-pods',
    term: 'Orphan pods',
    slug: 'orphan-pods',
    definition: 'Orphan pods are pods in a Kubernetes cluster that are no longer managed by any controller, often left behind after a failed deployment or deletion.',
    example: 'I had to write a script to clean up the orphan pods that were consuming resources on the cluster.'
  },
  {
    id: 'autohealing',
    term: 'Autohealing',
    slug: 'autohealing',
    definition: 'A system\'s ability to automatically detect and recover from failures without human intervention.',
    example: 'The Kubernetes cluster has an autohealing capability; if a pod crashes, it will automatically be restarted.'
  },
  {
    id: 'orchestrator',
    term: 'Orchestrator',
    slug: 'orchestrator',
    definition: 'An orchestrator is a tool for automating the deployment, management, scaling, and networking of containers.',
    example: 'Kubernetes is the most popular container orchestrator today.'
  },
  {
    id: 'multi-cloud',
    term: 'Multi-cloud',
    slug: 'multi-cloud',
    definition: 'Multi-cloud is the use of multiple cloud computing services from different cloud providers in a single heterogeneous architecture.',
    example: 'Our multi-cloud strategy uses AWS for compute and Google Cloud for machine learning services.'
  },
  {
    id: 'hybrid-cloud',
    term: 'Hybrid cloud',
    slug: 'hybrid-cloud',
    definition: 'A hybrid cloud is a computing environment that combines a private cloud with one or more public cloud services, with proprietary software enabling communication between them.',
    example: 'We use a hybrid cloud model, keeping our sensitive data on-premises and using the public cloud for scalable web servers.'
  },
  {
    id: 'cloud-tenancy',
    term: 'Cloud tenancy',
    slug: 'cloud-tenancy',
    definition: 'Cloud tenancy refers to how resources are shared in a cloud environment. In a multi-tenant architecture, a single instance of the software serves multiple customers (tenants).',
    example: 'Public cloud providers operate on a multi-tenancy model, where multiple customers share the same underlying hardware.'
  },
  {
    id: 'container-registry',
    term: 'Container registry',
    slug: 'container-registry',
    definition: 'A container registry is a storage system for container images, like Docker images.',
    example: 'We pushed the new version of our application to our private container registry.'
  },
  {
    id: 'image-scanning',
    term: 'Image scanning',
    slug: 'image-scanning',
    definition: 'Image scanning is the process of analyzing a container image for security vulnerabilities.',
    example: 'Our CI/CD pipeline includes an image scanning step that fails the build if any critical vulnerabilities are found.'
  },
  {
    id: 'pipeline-stages',
    term: 'Pipeline stages',
    slug: 'pipeline-stages',
    definition: 'Pipeline stages are the individual steps in a CI/CD pipeline, such as "build," "test," and "deploy."',
    example: 'The "deploy" stage of our pipeline only runs if the "build" and "test" stages have passed.'
  },
  {
    id: 'secret-mounting',
    term: 'Secret mounting',
    slug: 'secret-mounting',
    definition: 'Secret mounting is the process of making secrets, like API keys or passwords, available to a container at runtime, often as a mounted volume or environment variable.',
    example: 'Kubernetes allows for secret mounting, so we don\'t have to build the database password into our container image.'
  },
  {
    id: 'federation-cluster',
    term: 'Federation cluster',
    slug: 'federation-cluster',
    definition: 'A federation cluster is a concept where multiple individual clusters are managed as a single logical cluster, often spanning multiple regions or clouds.',
    example: 'We use a Kubernetes federation cluster to manage our deployments across our US and EU clusters.'
  },
  {
    id: 'traffic-gateway',
    term: 'Traffic gateway',
    slug: 'traffic-gateway',
    definition: 'A traffic gateway is a component that controls the flow of traffic into or out of a network or service mesh.',
    example: 'The service mesh uses an ingress gateway to manage all incoming external traffic.'
  },
  {
    id: 'ssl-termination',
    term: 'SSL termination',
    slug: 'ssl-termination',
    definition: 'SSL termination is the process where a load balancer or reverse proxy handles the decryption of incoming SSL-encrypted traffic, and then sends the unencrypted traffic to the backend servers.',
    example: 'Terminating SSL at the load balancer simplifies certificate management and reduces the load on our web servers.'
  },
  {
    id: 'kms-keyring',
    term: 'KMS keyring',
    slug: 'kms-keyring',
    definition: 'In a Key Management Service (KMS), a keyring is a logical grouping of cryptographic keys, often used to organize keys by environment or application.',
    example: 'We created a separate KMS keyring for all the keys used by our production environment.'
  },
  {
    id: 'drift-detection',
    term: 'Drift detection',
    slug: 'drift-detection',
    definition: 'In Infrastructure as Code, drift detection is the process of identifying differences between the actual state of your infrastructure and the state defined in your code.',
    example: 'Terraform\'s plan command performs drift detection by comparing your cloud resources to your configuration files.'
  },
  {
    id: 'resource-tagging',
    term: 'Resource tagging',
    slug: 'resource-tagging',
    definition: 'Resource tagging is the practice of applying metadata tags (key-value pairs) to cloud resources to help organize, manage, and track costs.',
    example: 'We use resource tagging to identify which team owns each cloud server, which helps with cost allocation.'
  },
  {
    id: 'pod-sandbox',
    term: 'Pod sandbox',
    slug: 'pod-sandbox',
    definition: 'In Kubernetes, a pod sandbox is the isolated environment (including network namespace and other settings) that is created for a pod before its containers are started.',
    example: 'The CRI creates the pod sandbox and then starts the application containers within it.'
  },
  {
    id: 'node-pressure',
    term: 'Node pressure',
    slug: 'node-pressure',
    definition: 'Node pressure is a condition in Kubernetes where a node is running out of resources, such as memory or disk space.',
    example: 'When a node is under memory pressure, the kubelet may start evicting pods to free up resources.'
  },
  {
    id: 'cluster-autoscaler',
    term: 'Cluster autoscaler',
    slug: 'cluster-autoscaler',
    definition: 'A cluster autoscaler is a tool that automatically adjusts the size of a Kubernetes cluster by adding or removing nodes based on the current workload.',
    example: 'We use the cluster autoscaler to add more nodes to our cluster during peak traffic times.'
  },
  {
    id: 'horizontal-scaling',
    term: 'Horizontal scaling',
    slug: 'horizontal-scaling',
    definition: 'Horizontal scaling (or scaling out) means adding more machines or instances to your infrastructure to handle increased load.',
    example: 'The web application was designed for horizontal scaling, allowing us to simply add more web servers as traffic grows.'
  },
  {
    id: 'clipped-fps',
    term: 'Clipped FPS',
    slug: 'clipped-fps',
    definition: 'Clipped FPS refers to a situation where the frame rate is limited or capped at a certain number, even if the hardware could produce more frames.',
    example: 'The game felt choppy because the FPS was clipped at 30, even though my GPU could handle 60 easily.'
  },
  {
    id: 'microstutter',
    term: 'Microstutter',
    slug: 'microstutter',
    definition: 'Microstutter is a form of performance issue where the frame rate is high but the time between frames is inconsistent, causing the illusion of stuttering.',
    example: 'Even at 120 FPS, the game had noticeable microstutter, making it feel less smooth.'
  },
  {
    id: 'dpc-latency',
    term: 'DPC latency',
    slug: 'dpc-latency',
    definition: 'Deferred Procedure Call (DPC) latency is a measure of how long drivers in a Windows system are taking to execute. High DPC latency can cause audio and video stuttering.',
    example: 'I used a tool to check my DPC latency and found that an old network driver was causing audio dropouts.'
  },
  {
    id: 'cache-trashing',
    term: 'Cache trashing',
    slug: 'cache-trashing',
    definition: 'Cache trashing, or cache contention, occurs when multiple threads or processes repeatedly overwrite each other\'s data in the CPU cache, leading to poor performance.',
    example: 'The algorithm was inefficient due to cache trashing, as each core was constantly invalidating the other\'s cache lines.'
  },
  {
    id: 'pcie-bottleneck',
    term: 'PCIe bottleneck',
    slug: 'pcie-bottleneck',
    definition: 'A PCIe bottleneck occurs when the PCIe bus does not have enough bandwidth to handle the data transfer rate of a connected device, like a high-end GPU.',
    example: 'Running a modern GPU in an old PCIe 2.0 slot can create a PCIe bottleneck and limit its performance.'
  },
  {
    id: 'garbage-frames',
    term: 'Garbage frames',
    slug: 'garbage-frames',
    definition: 'Garbage frames are unusually short or long frames that can be produced by a GPU under certain conditions, leading to stuttering. They are also known as "runt frames" or "spikes".',
    example: 'My frame time graph showed several garbage frames, which explained the random stutters I was experiencing.'
  },
  {
    id: 'silent-crash',
    term: 'Silent crash',
    slug: 'silent-crash',
    definition: 'A silent crash is when an application closes unexpectedly without showing any error message.',
    example: 'The game had a silent crash, it just closed to the desktop with no warning.'
  },
  {
    id: 'hard-crash',
    term: 'Hard crash',
    slug: 'hard-crash',
    definition: 'A hard crash is a system failure that causes the computer to freeze completely, requiring a manual reboot.',
    example: 'The unstable overclock led to a hard crash, and I had to hit the reset button.'
  },
  {
    id: 'soft-crash',
    term: 'Soft crash',
    slug: 'soft-crash',
    definition: 'A soft crash is when an application fails but the operating system itself remains stable and usable.',
    example: 'My browser had a soft crash, but I was able to just restart it without rebooting my whole computer.'
  },
  {
    id: 'boot-loop',
    term: 'Boot loop',
    slug: 'boot-loop',
    definition: 'A boot loop is a condition where a device repeatedly reboots itself without ever fully starting up, often caused by a software or hardware issue.',
    example: 'After the bad update, my phone was stuck in a boot loop.'
  },
  {
    id: 'post-loop',
    term: 'Post loop',
    slug: 'post-loop',
    definition: 'A post loop is a specific type of boot loop where the computer continuously tries to pass the Power-On Self-Test (POST) but fails and reboots.',
    example: 'An unstable memory overclock can cause a post loop.'
  },
  {
    id: 'power-fault',
    term: 'Power fault',
    slug: 'power-fault',
    definition: 'A power fault is an issue with the electrical power being supplied to a component or system, which can cause instability or crashes.',
    example: 'The random shutdowns were traced back to a power fault in the aging PSU.'
  },
  {
    id: 'memory-training-fail',
    term: 'Memory training fail',
    slug: 'memory-training-fail',
    definition: 'A memory training fail occurs when the BIOS is unable to find stable settings for the installed RAM, often leading to a failure to boot.',
    example: 'The system wouldn\'t POST due to a memory training fail, so I had to reset the CMOS and try again.'
  },
  {
    id: 'driver-bloat',
    term: 'Driver bloat',
    slug: 'driver-bloat',
    definition: 'Driver bloat refers to graphics or other hardware drivers that are bundled with a large amount of unnecessary extra software, consuming disk space and resources.',
    example: 'I used a third-party tool to install just the core graphics driver and avoid all the driver bloat.'
  },
  {
    id: 'driver-conflict',
    term: 'Driver conflict',
    slug: 'driver-conflict',
    definition: 'A driver conflict occurs when two or more drivers on a system try to control the same hardware or use the same resources, leading to instability or crashes.',
    example: 'The BSOD was caused by a driver conflict between the old and new network card drivers.'
  },
  {
    id: 'fps-dips',
    term: 'FPS dips',
    slug: 'fps-dips',
    definition: 'FPS dips are sudden, temporary drops in the frame rate of a game or application, causing noticeable stuttering.',
    example: 'The game runs smoothly most of the time, but I get annoying FPS dips during big explosions.'
  },
  {
    id: 'shader-compilation',
    term: 'Shader compilation',
    slug: 'shader-compilation',
    definition: 'Shader compilation is the process where a game engine converts shader code into a format that the GPU can execute. This can sometimes cause stuttering the first time a new effect is seen.',
    example: 'Many modern games perform a shader compilation step on first launch to reduce stuttering during gameplay.'
  },
  {
    id: 'e-cores',
    term: 'E-cores',
    slug: 'e-cores',
    definition: 'E-cores, or Efficiency cores, are smaller, lower-power CPU cores in modern Intel processors designed to handle background tasks and improve multi-threaded performance.',
    example: 'While the P-cores handle the game, the E-cores are running my background apps.'
  },
  {
    id: 'p-cores',
    term: 'P-cores',
    slug: 'p-cores',
    definition: 'P-cores, or Performance cores, are the main, high-power CPU cores in modern Intel processors designed to handle demanding single-threaded tasks.',
    example: 'The P-cores provide the raw speed needed for high-refresh-rate gaming.'
  },
  {
    id: 'thread-scheduler',
    term: 'Thread scheduler',
    slug: 'thread-scheduler',
    definition: 'A thread scheduler is a part of the operating system that determines which thread should be run by which CPU core at any given time.',
    example: 'Windows 11 has an improved thread scheduler that knows how to properly assign tasks to P-cores and E-cores.'
  },
  {
    id: 'frame-pacing',
    term: 'Frame pacing',
    slug: 'frame-pacing',
    definition: 'Frame pacing is the technique of ensuring that frames are delivered to the display at a consistent, even interval, which results in a smoother visual experience.',
    example: 'Good frame pacing is just as important as a high average FPS for smooth gameplay.'
  },
  {
    id: 'dlss',
    term: 'DLSS',
    slug: 'dlss',
    definition: 'Deep Learning Super Sampling (DLSS) is an NVIDIA technology that uses AI to upscale a lower-resolution image to a higher resolution, boosting performance with minimal loss in image quality.',
    example: 'I enabled DLSS to get a playable frame rate at 4K with ray tracing turned on.'
  },
  {
    id: 'fsr',
    term: 'FSR',
    slug: 'fsr',
    definition: 'FidelityFX Super Resolution (FSR) is AMD\'s open-source upscaling technology, which works similarly to DLSS to improve performance and runs on a wider range of GPUs.',
    example: 'Since my card doesn\'t support DLSS, I use FSR to get a performance boost.'
  },
  {
    id: 'motion-interpolation',
    term: 'Motion interpolation',
    slug: 'motion-interpolation',
    definition: 'Motion interpolation, often called the "soap opera effect," is a feature on TVs that generates intermediate frames to make motion look smoother, but can look unnatural for movies and TV shows.',
    example: 'Gamers should turn off motion interpolation on their TVs as it can add significant input lag.'
  },
  {
    id: 'volumetric-lighting',
    term: 'Volumetric lighting',
    slug: 'volumetric-lighting',
    definition: 'Volumetric lighting is a 3D graphics technique used to add depth and realism to light sources by simulating how light scatters through the air, creating effects like visible light rays.',
    example: 'The game\'s volumetric lighting created beautiful sunbeams shining through the forest canopy.'
  },
  {
    id: 'anti-aliasing',
    term: 'Anti-aliasing',
    slug: 'anti-aliasing',
    definition: 'Anti-aliasing is a technique used in computer graphics to smooth out jagged edges ("jaggies") on objects.',
    example: 'I turned on 4x anti-aliasing to make the edges of the character models look less pixelated.'
  },
  {
    id: 'taa',
    term: 'TAA',
    slug: 'taa',
    definition: 'Temporal Anti-Aliasing (TAA) is a modern anti-aliasing technique that uses information from previous frames to smooth the current frame, but can sometimes cause a blurry or "ghosting" effect.',
    example: 'TAA does a great job of removing jaggies, but some people dislike the slight blur it adds to the image.'
  },
  {
    id: 'smaa',
    term: 'SMAA',
    slug: 'smaa',
    definition: 'Subpixel Morphological Anti-Aliasing (SMAA) is a post-processing anti-aliasing technique that is less demanding than MSAA but often provides better results than FXAA.',
    example: 'I prefer using SMAA as it provides a good balance between image quality and performance cost.'
  },
  {
    id: 'upscaling',
    term: 'Upscaling',
    slug: 'upscaling',
    definition: 'Upscaling is the process of taking a lower-resolution image or video and stretching it to fit a higher-resolution display. AI upscaling technologies like DLSS and FSR do this intelligently.',
    example: 'My 4K TV does a good job of upscaling 1080p content.'
  },
  {
    id: 'render-pipeline',
    term: 'Render pipeline',
    slug: 'render-pipeline',
    definition: 'A render pipeline is the sequence of steps a GPU takes to render a 3D scene to a 2D image.',
    example: 'Modern game engines have customizable render pipelines to achieve different visual styles.'
  },
  {
    id: 'vr-reprojection',
    term: 'VR reprojection',
    slug: 'vr-reprojection',
    definition: 'VR reprojection is a technique used in virtual reality to generate intermediate frames when the application can\'t maintain its target frame rate, reducing nausea and stuttering.',
    example: 'When the frame rate dropped below 90, VR reprojection kicked in to keep the experience smooth.'
  },
  {
    id: 'latency-artifacts',
    term: 'Latency artifacts',
    slug: 'latency-artifacts',
    definition: 'Latency artifacts are visual errors or distortions that can occur due to delays in the rendering or display process.',
    example: 'The high input lag on this TV causes noticeable latency artifacts when gaming.'
  },
  {
    id: 'input-delay',
    term: 'Input delay',
    slug: 'input-delay',
    definition: 'Input delay, or input lag, is the time it takes for your action on a controller or keyboard to appear as a response on the screen.',
    example: 'Competitive gamers need a monitor with very low input delay.'
  },
  {
    id: 'cold-cache',
    term: 'Cold cache',
    slug: 'cold-cache',
    definition: 'A cold cache is a cache that is empty or contains irrelevant data, resulting in slower performance as the data must be fetched from a slower memory source.',
    example: 'The application is slow on first launch because it is starting with a cold cache.'
  },
  {
    id: 'hot-cache',
    term: 'Hot cache',
    slug: 'hot-cache',
    definition: 'A hot cache is a cache that is already populated with the data needed for a task, resulting in very fast performance.',
    example: 'Subsequent runs of the benchmark were much faster because it was benefiting from a hot cache.'
  },
  {
    id: 'cache-hit',
    term: 'Cache hit',
    slug: 'cache-hit',
    definition: 'A cache hit is when requested data is found in a cache, which is much faster than fetching it from main memory.',
    example: 'A high cache hit rate is crucial for good CPU performance.'
  },
  {
    id: 'cache-miss',
    term: 'Cache miss',
    slug: 'cache-miss',
    definition: 'A cache miss is when requested data is not found in a cache, requiring the system to fetch it from a slower memory source, which introduces a delay.',
    example: 'Every cache miss results in a performance penalty as the CPU has to wait for data from RAM.'
  },
  {
    id: 'memory-access-pattern',
    term: 'Memory access pattern',
    slug: 'memory-access-pattern',
    definition: 'The memory access pattern is the sequence in which a program reads from or writes to memory. Some patterns are more cache-friendly than others.',
    example: 'Linear memory access patterns are much more efficient than random ones.'
  },
  {
    id: 'floating-point-error',
    term: 'Floating point error',
    slug: 'floating-point-error',
    definition: 'A floating point error is an inaccuracy that can occur when performing mathematical operations on non-integer numbers due to the way they are represented in a computer.',
    example: 'After moving far from the origin in the game world, we started seeing floating point errors causing visual glitches.'
  },
  {
    id: 'nan-crash',
    term: 'NaN crash',
    slug: 'nan-crash',
    definition: 'A NaN (Not a Number) crash is a program crash caused by an unexpected "Not a Number" value appearing in a mathematical calculation, which can then propagate and cause errors.',
    example: 'A divide-by-zero error led to a NaN value, which eventually caused a NaN crash.'
  },
  {
    id: 'dead-pixel',
    term: 'Dead pixel',
    slug: 'dead-pixel',
    definition: 'A dead pixel is a pixel on a display that is permanently off and does not light up, usually appearing as a black dot.',
    example: 'I had to return my new monitor because it had a dead pixel right in the center of the screen.'
  },
  {
    id: 'backlight-bleed',
    term: 'Backlight bleed',
    slug: 'backlight-bleed',
    definition: 'Backlight bleed is a problem on LCD screens where the backlight is visible through the edges of the display, especially noticeable in dark scenes.',
    example: 'My new monitor has some noticeable backlight bleed in the corners, but it\'s only visible when the screen is black.'
  },
  {
    id: 'color-banding',
    term: 'Color banding',
    slug: 'color-banding',
    definition: 'Color banding is a visual artifact where smooth gradients of color are displayed as distinct bands or stripes of color.',
    example: 'The compressed video had terrible color banding in the sky gradient.'
  },
  {
    id: 'dithering',
    term: 'Dithering',
    slug: 'dithering',
    definition: 'Dithering is a technique used in computer graphics to create the illusion of more colors than are actually available by using a pattern of differently colored pixels. It can help reduce color banding.',
    example: 'The image was converted to an 8-bit color palette using dithering to simulate the missing colors.'
  },
  {
    id: 'hdr-tone-mapping',
    term: 'HDR tone mapping',
    slug: 'hdr-tone-mapping',
    definition: 'HDR (High Dynamic Range) tone mapping is the process of converting a wide range of brightness and color from an HDR source to fit the capabilities of a standard display.',
    example: 'A good HDR tone mapping algorithm is essential for displaying HDR content correctly on a non-HDR screen.'
  },
  {
    id: 'power-draw-spikes',
    term: 'Power draw spikes',
    slug: 'power-draw-spikes',
    definition: 'Power draw spikes are very brief, high-power demands from a component like a GPU, which can sometimes trip a power supply\'s safety features.',
    example: 'Some modern GPUs are known for their power draw spikes, which can cause shutdowns with lower-quality PSUs.'
  },
  {
    id: 'vrm-overheating',
    term: 'VRM overheating',
    slug: 'vrm-overheating',
    definition: 'VRM overheating is when the Voltage Regulator Modules on a motherboard or GPU get too hot, which can lead to performance throttling or system instability.',
    example: 'I pointed a small fan at my motherboard to prevent VRM overheating during my overclocking attempts.'
  },
  {
    id: 'power-limit',
    term: 'Power limit',
    slug: 'power-limit',
    definition: 'The power limit is a setting that defines the maximum amount of power a CPU or GPU is allowed to consume. Increasing it can improve performance, at the cost of more heat.',
    example: 'I raised the power limit on my GPU to 120% to get a more stable overclock.'
  },
  {
    id: 'voltage-offset',
    term: 'Voltage offset',
    slug: 'voltage-offset',
    definition: 'A voltage offset is a setting in the BIOS that allows you to increase or decrease the voltage supplied to a component by a certain amount relative to its default.',
    example: 'I applied a negative voltage offset to undervolt my CPU and reduce its temperature.'
  },
  {
    id: 'stress-test',
    term: 'Stress test',
    slug: 'stress-test',
    definition: 'A stress test is a type of test that puts a system under a heavy, sustained load to check for its stability and performance under pressure.',
    example: 'After overclocking my CPU, I ran a stress test for 8 hours to make sure it was completely stable.'
  },
  {
    id: 'burn-in-test',
    term: 'Burn-in test',
    slug: 'burn-in-test',
    definition: 'A burn-in test is a prolonged stress test performed on new hardware to detect any early failures.',
    example: 'I always run a 24-hour burn-in test on a new PC build to ensure all the components are working correctly.'
  },
  {
    id: 'p-state',
    term: 'P-state',
    slug: 'p-state',
    definition: 'Performance states (P-states) are different frequency and voltage combinations that a CPU can operate at to match its performance to the current workload.',
    example: 'When browsing the web, my CPU is in a low P-state, but it ramps up to a high P-state when I launch a game.'
  },
  {
    id: 'c-state',
    term: 'C-state',
    slug: 'c-state',
    definition: 'Core states (C-states) are idle power-saving states that a CPU can enter when it is not processing instructions.',
    example: 'Deeper C-states save more power but take slightly longer for the CPU to wake up from.'
  },
  {
    id: 'idle-clock',
    term: 'Idle clock',
    slug: 'idle-clock',
    definition: 'The idle clock is the very low clock speed that a CPU or GPU will drop to when it is not under any load to save power.',
    example: 'My GPU\'s idle clock is only 300 MHz, but it boosts to over 2000 MHz in games.'
  },
  {
    id: 'gpu-hotspot-temp',
    term: 'GPU hotspot temp',
    slug: 'gpu-hotspot-temp',
    definition: 'The GPU hotspot temp is the temperature reading from the hottest sensor on the GPU die, which can be significantly higher than the average temperature.',
    example: 'While my average GPU temp was 75°C, the GPU hotspot temp was reaching 95°C, indicating a cooling problem.'
  },
  {
    id: 'negative-scaling',
    term: 'Negative scaling',
    slug: 'negative-scaling',
    definition: 'Negative scaling is a situation where adding more resources (like more CPU cores or GPUs) actually decreases performance due to overhead or other issues.',
    example: 'The game showed negative scaling with more than 8 cores, performing worse on my 16-core CPU.'
  },
  {
    id: 'render-queue',
    term: 'Render queue',
    slug: 'render-queue',
    definition: 'The render queue is a buffer that holds a list of commands and data that are waiting to be processed by the GPU.',
    example: 'A large render queue can sometimes increase input lag.'
  },
  {
    id: 'dirty-shutdown',
    term: 'Dirty shutdown',
    slug: 'dirty-shutdown',
    definition: 'A dirty shutdown is an improper shutdown of a computer or program, such as from a power loss or crash, which can lead to data corruption.',
    example: 'After the power outage, the server performed a file system check because of the dirty shutdown.'
  },
  {
    id: 'warm-boot',
    term: 'Warm boot',
    slug: 'warm-boot',
    definition: 'A warm boot is the process of restarting a computer without cutting its power, such as by using the "Restart" option in the OS.',
    example: 'A warm boot is faster than a cold boot because it skips some of the initial hardware checks.'
  },
  {
    id: 'cold-boot',
    term: 'Cold boot',
    slug: 'cold-boot',
    definition: 'A cold boot is the process of starting a computer from a completely powered-off state.',
    example: 'Some BIOS issues can only be resolved by performing a full cold boot.'
  },
  {
    id: 'hot-patch',
    term: 'Hot patch',
    slug: 'hot-patch',
    definition: 'A hot patch is a fix that is applied to a running system without needing a reboot.',
    example: 'The server\'s kernel was updated with a hot patch to fix a security vulnerability without any downtime.'
  },
  {
    id: 'output-buffer',
    term: 'Output buffer',
    slug: 'output-buffer',
    definition: 'An output buffer is a temporary storage area for data that is waiting to be sent to an output device, like a screen or a network card.',
    example: 'The video player fills an output buffer with several seconds of video to ensure smooth playback.'
  },
  {
    id: 'render-target',
    term: 'Render target',
    slug: 'render-target',
    definition: 'A render target is a buffer in memory where a GPU writes the output of its rendering process.',
    example: 'The game first renders the shadows to a separate render target before combining them with the final scene.'
  },
  {
    id: 'double-buffer',
    term: 'Double buffer',
    slug: 'double-buffer',
    definition: 'Double buffering is a graphics technique where two buffers are used: one is displayed on the screen while the next frame is being drawn in the other, preventing tearing.',
    example: 'Almost all modern games use double buffering or triple buffering.'
  },
  {
    id: 'triple-buffer',
    term: 'Triple buffer',
    slug: 'triple-buffer',
    definition: 'Triple buffering is a graphics technique that uses three buffers. It can provide smoother performance than double buffering but may increase input lag.',
    example: 'Enabling triple buffering helped smooth out the frame rate, but the game felt slightly less responsive.'
  },
  {
    id: 'shader-model',
    term: 'Shader model',
    slug: 'shader-model',
    definition: 'A Shader Model is a version specification for the set of capabilities and instructions available to shaders in a graphics API like DirectX.',
    example: 'This new game requires a GPU that supports Shader Model 6.0.'
  },
  {
    id: 'driver-microcode',
    term: 'Driver microcode',
    slug: 'driver-microcode',
    definition: 'Driver microcode is low-level firmware that is loaded onto a CPU or GPU by the operating system or driver at boot time to fix bugs or add features.',
    example: 'The latest driver update included new microcode to patch a hardware vulnerability.'
  },
  {
    id: 'repaste',
    term: 'Repaste',
    slug: 'repaste',
    definition: 'To repaste is the act of removing an old heatsink, cleaning off the old thermal paste, and applying a fresh layer.',
    example: 'My laptop was overheating, so I did a repaste and now it runs much cooler.'
  },
  {
    id: 'reballing',
    term: 'Reballing',
    slug: 'reballing',
    definition: 'Reballing is an advanced repair technique for circuit boards where a chip is removed and the tiny solder balls that connect it to the board are replaced.',
    example: 'The old game console got the "Red Ring of Death," which was fixed by reballing the GPU.'
  },
  {
    id: 'reflow',
    term: 'Reflow',
    slug: 'reflow',
    definition: 'A reflow is a repair technique where a chip is heated up to melt the solder underneath, hoping to fix any bad connections. It is less reliable than reballing.',
    example: 'As a last resort, I tried to reflow the GPU by heating it in an oven, but it didn\'t work.'
  },
  {
    id: 'hot-air-station',
    term: 'Hot air station',
    slug: 'hot-air-station',
    definition: 'A hot air station is a tool used in electronics repair that blows a precise stream of hot air to solder and desolder surface-mount components.',
    example: 'I used a hot air station to replace the faulty capacitor on the motherboard.'
  },
  {
    id: 'esd-strap',
    term: 'ESD strap',
    slug: 'esd-strap',
    definition: 'An Electrostatic Discharge (ESD) strap is a safety device worn by a person working on electronic equipment to prevent the buildup of static electricity, which can damage components.',
    example: 'Always wear an ESD strap when handling sensitive components like RAM or a CPU.'
  },
  {
    id: 'bench-table',
    term: 'Bench table',
    slug: 'bench-table',
    definition: 'A bench table, or test bench, is an open-air computer case used for easily swapping hardware and testing components.',
    example: 'Overclockers and reviewers often use a bench table for their testing.'
  },
  {
    id: 'modular-psu',
    term: 'Modular PSU',
    slug: 'modular-psu',
    definition: 'A modular PSU (Power Supply Unit) is a power supply where the cables are detachable, allowing you to use only the ones you need, which improves cable management and airflow.',
    example: 'I chose a modular PSU to keep my build looking clean and tidy.'
  },
  {
    id: 'loud-coil-whine',
    term: 'Loud coil whine',
    slug: 'loud-coil-whine',
    definition: 'Loud coil whine is an especially noticeable high-pitched electronic noise coming from a component like a GPU, which can be very distracting.',
    example: 'The performance is great, but I had to return the card because of the loud coil whine.'
  },
  {
    id: 'psu-transient',
    term: 'PSU transient',
    slug: 'psu-transient',
    definition: 'A PSU transient refers to a very rapid change in the power load, which some modern GPUs are known to cause. A good PSU needs to be able to handle these transients.',
    example: 'The PC was shutting down under load because the PSU couldn\'t handle the GPU\'s power transients.'
  },
  {
    id: 'brown-out',
    term: 'Brown-out',
    slug: 'brown-out',
    definition: 'A brown-out is a temporary drop in voltage in an electrical power supply, which can cause issues for sensitive electronic equipment.',
    example: 'During the summer, we sometimes get brown-outs that cause my lights to flicker and my PC to reboot.'
  },
  {
    id: 'overcurrent',
    term: 'Overcurrent',
    slug: 'overcurrent',
    definition: 'An overcurrent is a situation where an excessive electrical current flows through a conductor, which can cause overheating and damage. Fuses and circuit breakers protect against this.',
    example: 'The PSU\'s overcurrent protection kicked in and shut down the system to prevent damage.'
  },
  {
    id: 'undervoltage',
    term: 'Undervoltage',
    slug: 'undervoltage',
    definition: 'An undervoltage is a condition where the supplied voltage is below the normal operating level, which can cause system instability or shutdowns.',
    example: 'The PC wouldn\'t boot because the PSU\'s undervoltage protection was being triggered.'
  },
  {
    id: 'fast-boot',
    term: 'Fast boot',
    slug: 'fast-boot',
    definition: 'Fast boot is a feature in a computer\'s BIOS/UEFI that speeds up the boot process by skipping some of the initial hardware checks.',
    example: 'I enabled fast boot, and now my PC gets to the login screen in just a few seconds.'
  },
  {
    id: 'secure-boot-off',
    term: 'Secure boot off',
    slug: 'secure-boot-off',
    definition: 'Turning secure boot off is the act of disabling a security feature in the UEFI firmware that prevents untrusted operating systems or bootloaders from running.',
    example: 'I had to turn secure boot off to be able to boot Linux from a USB drive.'
  },
  {
    id: 'vcore',
    term: 'Vcore',
    slug: 'vcore',
    definition: 'Vcore is the voltage supplied to the main processing cores of a CPU.',
    example: 'To get a stable overclock, I had to increase the Vcore to 1.35 volts.'
  },
  {
    id: 'vdimm',
    term: 'Vdimm',
    slug: 'vdimm',
    definition: 'VDIMM, or DRAM Voltage, is the voltage supplied to the RAM modules.',
    example: 'Overclocking my RAM required me to increase the VDIMM to 1.4 volts.'
  },
  {
    id: 'vccio',
    term: 'VccIO',
    slug: 'vccio',
    definition: 'VccIO is a voltage on Intel systems that supplies power to the CPU\'s integrated memory controller and other I/O components.',
    example: 'High-speed RAM can sometimes require a slight bump in VccIO voltage to be stable.'
  },
  {
    id: 'vccsa',
    term: 'VccSA',
    slug: 'vccsa',
    definition: 'VccSA (System Agent) is a voltage on Intel systems that is crucial for the stability of the memory controller and PCIe controller.',
    example: 'For my RAM overclock to be stable, I had to adjust both the VDIMM and VccSA voltages.'
  },
  {
    id: 'dip-switch',
    term: 'DIP switch',
    slug: 'dip-switch',
    definition: 'A DIP switch is a small manual electric switch that is packaged in a group, often used on older motherboards or expansion cards to configure settings.',
    example: 'I had to set the correct IRQ for the sound card by adjusting the DIP switch on the board.'
  },
  {
    id: 'debug-port',
    term: 'Debug port',
    slug: 'debug-port',
    definition: 'A debug port is a special interface on a device used by engineers and developers to diagnose issues and interact with the system at a low level.',
    example: 'The technician connected their equipment to the debug port to analyze the firmware issue.'
  },
  {
    id: 'bios-mod',
    term: 'BIOS mod',
    slug: 'bios-mod',
    definition: 'A BIOS mod is a modified version of a system\'s BIOS firmware, often created by enthusiasts to unlock hidden features or add support for new hardware.',
    example: 'I used a BIOS mod to enable overclocking features that were hidden by the manufacturer.'
  },
  {
    id: 'firmware-dump',
    term: 'Firmware dump',
    slug: 'firmware-dump',
    definition: 'A firmware dump is a copy of the firmware from a device, which can be used for analysis, reverse engineering, or as a backup.',
    example: 'I took a firmware dump of my router before attempting to install custom firmware.'
  },
  {
    id: 'rom-flashing',
    term: 'ROM flashing',
    slug: 'rom-flashing',
    definition: 'ROM flashing is the process of overwriting the firmware on a device\'s Read-Only Memory (ROM) chip with a new version.',
    example: 'ROM flashing can be risky; if it fails, you might brick your device.'
  },
  {
    id: 'overpower-state',
    term: 'Overpower state',
    slug: 'overpower-state',
    definition: 'An overpower state is when a component tries to draw more power than the power supply can safely provide, which can trigger a shutdown.',
    example: 'The PSU shut down because the GPU entered an overpower state during a transient spike.'
  },
  {
    id: 'power-ripple',
    term: 'Power ripple',
    slug: 'power-ripple',
    definition: 'Power ripple is a small, unwanted residual periodic variation of the DC voltage. Excessive ripple from a power supply can cause system instability.',
    example: 'A high-quality PSU will have very low power ripple, even under heavy load.'
  },
  {
    id: 'system-hang',
    term: 'System hang',
    slug: 'system-hang',
    definition: 'A system hang is when a computer freezes and becomes completely unresponsive to input, requiring a hard reboot.',
    example: 'An unstable driver was causing a random system hang every few hours.'
  },
  {
    id: 'memory-stall',
    term: 'Memory stall',
    slug: 'memory-stall',
    definition: 'A memory stall is a type of CPU stall that occurs when the processor has to wait for data to be fetched from memory.',
    example: 'A high cache miss rate leads to frequent memory stalls, which hurts performance.'
  },
  {
    id: 'cpu-stall',
    term: 'CPU stall',
    slug: 'cpu-stall',
    definition: 'A CPU stall or pipeline stall is a delay in the execution of an instruction in a processor\'s pipeline, which reduces its overall throughput.',
    example: 'Branch mispredictions are a common cause of CPU stalls.'
  },
  {
    id: 'disk-stall',
    term: 'Disk stall',
    slug: 'disk-stall',
    definition: 'A disk stall is when an application freezes or stutters because it is waiting for data to be read from or written to a slow storage drive.',
    example: 'The game had noticeable disk stalls because it was running off an old, slow HDD.'
  },
  {
    id: 'thread-starvation',
    term: 'Thread starvation',
    slug: 'thread-starvation',
    definition: 'Thread starvation is a situation where a thread is perpetually denied the resources it needs to do its work, often because higher-priority threads are hogging the resources.',
    example: 'The background task was suffering from thread starvation and never made any progress.'
  },
  {
    id: 'worker-thread',
    term: 'Worker thread',
    slug: 'worker-thread',
    definition: 'A worker thread is a background thread that is used to perform a long-running or computationally intensive task without blocking the main application thread.',
    example: 'The application uses a pool of worker threads to process incoming requests.'
  },
  {
    id: 'zombie-thread',
    term: 'Zombie thread',
    slug: 'zombie-thread',
    definition: 'A zombie thread is a thread that has completed its execution but has not yet been properly cleaned up by the parent process.',
    example: 'The application was leaking resources because it was creating lots of zombie threads.'
  },
  {
    id: 'shadow-process',
    term: 'Shadow process',
    slug: 'shadow-process',
    definition: 'A shadow process is a background process that is often created to perform tasks on behalf of a main process, for example, in a database system.',
    example: 'When I connected to the database, a shadow process was created on the server to handle my session.'
  },
  {
    id: 'phantom-packet',
    term: 'Phantom packet',
    slug: 'phantom-packet',
    definition: 'A phantom packet is a term for a network packet that appears in logs or analysis but seems to have no valid source or reason for being there, often the result of a network glitch or misconfiguration.',
    example: 'The network analyst was trying to trace the source of some phantom packets that were appearing on the firewall logs.'
  },
  {
    id: 'dimm',
    term: 'DIMM',
    slug: 'dimm',
    definition: 'A Dual Inline Memory Module (DIMM) is a type of computer memory that is installed on motherboards.',
    example: 'I need to buy two 8GB DIMMs to upgrade my computer\'s RAM to 16GB.'
  },
  {
    id: 'sodimm',
    term: 'SODIMM',
    slug: 'sodimm',
    definition: 'A Small Outline DIMM (SODIMM) is a smaller type of computer memory module, typically used in laptops and other small form-factor computers.',
    example: 'My laptop uses SODIMM memory, which is smaller than the DIMMs in my desktop.'
  },
  {
    id: 'tdp',
    term: 'TDP',
    slug: 'tdp',
    definition: 'Thermal Design Power (TDP) is the maximum amount of heat a computer chip, like a CPU or GPU, is expected to generate under a typical workload.',
    example: 'This CPU has a TDP of 65 watts, so I need a cooler that can handle at least that much heat.'
  },
  {
    id: 'vrm',
    term: 'VRM',
    slug: 'vrm',
    definition: 'A Voltage Regulator Module (VRM) is an electronic circuit that provides a clean and stable voltage to the CPU.',
    example: 'A good motherboard with a robust VRM is important for overclocking.'
  },
  {
    id: 'ish',
    term: 'ISH',
    slug: 'ish',
    definition: 'The IO Shield (ISH) is the metal plate that covers the back ports of a motherboard.',
    example: 'Don\'t forget to install the IO shield before you mount the motherboard in the case.'
  },
  {
    id: 'occt',
    term: 'OCCT',
    slug: 'occt',
    definition: 'OverClock Checking Tool (OCCT) is a popular software used to stress test computer components like the CPU and GPU to check for stability.',
    example: 'I ran OCCT for an hour to make sure my new overclock settings were stable.'
  },
  {
    id: 'tpm',
    term: 'TPM',
    slug: 'tpm',
    definition: 'A Trusted Platform Module (TPM) is a dedicated micro-controller designed to secure hardware through integrated cryptographic keys.',
    example: 'Windows 11 requires a TPM 2.0 module to be enabled for installation.'
  },
  {
    id: 'smps',
    term: 'SMPS',
    slug: 'smps',
    definition: 'A Switched-Mode Power Supply (SMPS) is an electronic power supply that incorporates a switching regulator to convert electrical power efficiently. Modern computer PSUs are SMPS.',
    example: 'The computer\'s SMPS efficiently converts AC power from the wall into the various DC voltages needed by the components.'
  },
  {
    id: 'mosfet',
    term: 'MOSFET',
    slug: 'mosfet',
    definition: 'A Metal-Oxide-Semiconductor Field-Effect Transistor (MOSFET) is a type of transistor used for amplifying or switching electronic signals, commonly found in a motherboard\'s VRM.',
    example: 'The quality of the MOSFETs in the VRM can affect the motherboard\'s overclocking potential.'
  },
  {
    id: 'fsb',
    term: 'FSB',
    slug: 'fsb',
    definition: 'The Front-Side Bus (FSB) is a now-legacy computer communication interface that was used to connect the CPU with main memory and other components.',
    example: 'In older computers, the FSB speed was a key factor in overall system performance.'
  },
  {
    id: 'i-o',
    term: 'I/O',
    slug: 'i-o',
    definition: 'Input/Output (I/O) refers to the communication between a computer and the outside world, including devices like keyboards, mice, and storage drives.',
    example: 'A slow hard drive can create an I/O bottleneck that slows down the entire system.'
  },
  {
    id: 'rpm',
    term: 'RPM',
    slug: 'rpm',
    definition: 'Revolutions Per Minute (RPM) is a measure of the speed of a spinning object, like a hard drive platter or a cooling fan.',
    example: 'A 7200 RPM hard drive is faster than a 5400 RPM one.'
  },
  {
    id: 'uefi',
    term: 'UEFI',
    slug: 'uefi',
    definition: 'The Unified Extensible Firmware Interface (UEFI) is a modern replacement for the traditional BIOS, providing a more advanced interface for initializing hardware and booting the OS.',
    example: 'I entered the UEFI setup to enable XMP for my RAM.'
  },
  {
    id: 'dvi',
    term: 'DVI',
    slug: 'dvi',
    definition: 'The Digital Visual Interface (DVI) is a video display interface used to connect a video source to a display device, like a computer monitor. It has been largely replaced by HDMI and DisplayPort.',
    example: 'My old monitor only has DVI and VGA inputs.'
  },
  {
    id: 'dp',
    term: 'DP',
    slug: 'dp',
    definition: 'DisplayPort (DP) is a digital display interface primarily used to connect a video source to a display device such as a computer monitor.',
    example: 'To get the highest refresh rate, I have to use the DisplayPort connection on my monitor.'
  },
  {
    id: 'pcb',
    term: 'PCB',
    slug: 'pcb',
    definition: 'A Printed Circuit Board (PCB) is a board made of non-conductive material with conductive pathways etched or printed onto it, used to connect electronic components.',
    example: 'The motherboard is the main PCB in a computer.'
  },
  {
    id: 'hotswap',
    term: 'HOTSWAP',
    slug: 'hotswap',
    definition: 'A hot-swappable component is one that can be removed and replaced while the computer is running.',
    example: 'The server has hot-swap drive bays, so I can replace a failed drive without any downtime.'
  },
  {
    id: 'pci',
    term: 'PCI',
    slug: 'pci',
    definition: 'Peripheral Component Interconnect (PCI) is a local computer bus for attaching hardware devices in a computer. It is a legacy standard, replaced by PCIe.',
    example: 'I have an old sound card that still uses a PCI slot.'
  },
  {
    id: 'pcie-lane',
    term: 'PCIe Lane',
    slug: 'pcie-lane',
    definition: 'A PCI Express (PCIe) Lane is a single serial data connection. A PCIe slot can have multiple lanes (e.g., x1, x4, x8, x16) for higher bandwidth.',
    example: 'A graphics card typically uses a PCIe x16 slot to get the maximum number of lanes.'
  },
  {
    id: 'rgb',
    term: 'RGB',
    slug: 'rgb',
    definition: 'Red, Green, and Blue (RGB) are the primary colors of light used in displays and lighting systems to create a wide spectrum of colors.',
    example: 'I synchronized the RGB lighting on my keyboard, mouse, and PC case.'
  },
  {
    id: 'dram',
    term: 'DRAM',
    slug: 'dram',
    definition: 'Dynamic RAM (DRAM) is a type of random-access semiconductor memory that stores each bit of data in a separate capacitor within an integrated circuit.',
    example: 'Modern computer memory (RAM) is a type of DRAM.'
  },
  {
    id: 'vram',
    term: 'VRAM',
    slug: 'vram',
    definition: 'Video RAM (VRAM) is a type of RAM used to store image data for a computer display. It is the memory used by a graphics card.',
    example: 'This game requires a graphics card with at least 8GB of VRAM.'
  },
  {
    id: 'cas',
    term: 'CAS',
    slug: 'cas',
    definition: 'Column Address Strobe (CAS) Latency is a key timing measurement for RAM that indicates the delay between the memory controller telling the memory module to access a particular memory column, and the data from that column being available.',
    example: 'RAM with a lower CAS latency is generally faster.'
  },
  {
    id: 'ecc',
    term: 'ECC',
    slug: 'ecc',
    definition: 'Error-Correcting Code (ECC) memory is a type of RAM that can detect and correct the most common kinds of internal data corruption. It is used in servers and workstations.',
    example: 'The server requires ECC memory to ensure data integrity.'
  },
  {
    id: 'raid',
    term: 'RAID',
    slug: 'raid',
    definition: 'A Redundant Array of Independent Disks (RAID) is a data storage virtualization technology that combines multiple physical disk drive components into one or more logical units for the purposes of data redundancy, performance improvement, or both.',
    example: 'I set up a RAID 1 array to mirror my data across two drives for redundancy.'
  },
  {
    id: 'jbod',
    term: 'JBOD',
    slug: 'jbod',
    definition: 'Just a Bunch of Disks (JBOD) is a storage architecture that consists of multiple disk drives in a single enclosure, where each drive is managed as a separate volume.',
    example: 'Instead of using RAID, I configured the drive enclosure as a JBOD, so I see each drive individually.'
  },
  {
    id: 'nas',
    term: 'NAS',
    slug: 'nas',
    definition: 'A Network-Attached Storage (NAS) is a dedicated file storage device that is connected to a network, allowing multiple users to access and share files.',
    example: 'I store all my movies and music on a NAS in my home network.'
  },
  {
    id: 'san',
    term: 'SAN',
    slug: 'san',
    definition: 'A Storage Area Network (SAN) is a specialized, high-speed network that provides block-level network access to storage. It is typically used in enterprise environments.',
    example: 'The virtual machines are running on a high-performance SAN.'
  },
  {
    id: 'mac',
    term: 'MAC',
    slug: 'mac',
    definition: 'A Media Access Control (MAC) address is a unique identifier assigned to a network interface controller (NIC) for use as a network address in communications within a network segment.',
    example: 'I had to provide the MAC address of my device to get access to the corporate Wi-Fi.'
  },
  {
    id: 'dhcp',
    term: 'DHCP',
    slug: 'dhcp',
    definition: 'The Dynamic Host Configuration Protocol (DHCP) is a network management protocol used to automate the process of configuring devices on IP networks.',
    example: 'The router acts as a DHCP server, automatically assigning IP addresses to devices on the network.'
  },
  {
    id: 'dns',
    term: 'DNS',
    slug: 'dns',
    definition: 'The Domain Name System (DNS) is the hierarchical and decentralized naming system used to identify computers, services, and other resources reachable through the Internet or other Internet Protocol networks.',
    example: 'When you type a website address in your browser, your computer performs a DNS lookup to find its IP address.'
  },
  {
    id: 'whois',
    term: 'WHOIS',
    slug: 'whois',
    definition: 'WHOIS is a query and response protocol that is widely used for querying databases that store the registered users or assignees of an Internet resource, such as a domain name.',
    example: 'I used a WHOIS lookup to find out who owns that domain name.'
  },
  {
    id: 'cdn',
    term: 'CDN',
    slug: 'cdn',
    definition: 'A Content Delivery Network (CDN) is a geographically distributed network of proxy servers and their data centers, which provide high availability and performance by distributing the service spatially relative to end-users.',
    example: 'The website loads quickly all over the world because it uses a CDN to serve its images and videos.'
  },
  {
    id: 'ttl',
    term: 'TTL',
    slug: 'ttl',
    definition: 'Time To Live (TTL) is a mechanism that limits the lifespan or lifetime of data in a computer or network. For DNS, it specifies how long a record should be cached.',
    example: 'I set a low TTL on the DNS record so that the change would propagate quickly.'
  },
  {
    id: 'wan',
    term: 'WAN',
    slug: 'wan',
    definition: 'A Wide Area Network (WAN) is a telecommunications network that extends over a large geographical area for the primary purpose of computer networking.',
    example: 'The company uses a private WAN to connect its offices in different cities.'
  },
  {
    id: 'lan',
    term: 'LAN',
    slug: 'lan',
    definition: 'A Local Area Network (LAN) is a computer network that interconnects computers within a limited area such as a residence, school, laboratory, university campus or office building.',
    example: 'We are having a LAN party this weekend to play games together.'
  },
  {
    id: 'vlan',
    term: 'VLAN',
    slug: 'vlan',
    definition: 'A Virtual LAN (VLAN) is any broadcast domain that is partitioned and isolated in a computer network at the data link layer (OSI layer 2).',
    example: 'We put the guest Wi-Fi on a separate VLAN to isolate it from our internal corporate network.'
  },
  {
    id: 'nat',
    term: 'NAT',
    slug: 'nat',
    definition: 'Network Address Translation (NAT) is a method of remapping an IP address space into another by modifying network address information in the IP header of packets while they are in transit across a traffic routing device.',
    example: 'My home router uses NAT to allow all my devices to share a single public IP address.'
  },
  {
    id: 'noc',
    term: 'NOC',
    slug: 'noc',
    definition: 'A Network Operations Center (NOC) is a central location from which network administrators manage, control and monitor one or more networks.',
    example: 'The NOC team is investigating the cause of the network outage.'
  },
  {
    id: 'qos',
    term: 'QoS',
    slug: 'qos',
    definition: 'Quality of Service (QoS) is the description or measurement of the overall performance of a service, such as a telecommunications or computer network, particularly the performance seen by the users of the network.',
    example: 'I configured QoS on my router to prioritize gaming traffic.'
  },
  {
    id: 'snmp',
    term: 'SNMP',
    slug: 'snmp',
    definition: 'The Simple Network Management Protocol (SNMP) is an Internet Standard protocol for collecting and organizing information about managed devices on IP networks.',
    example: 'Our monitoring system uses SNMP to query the status of our routers and switches.'
  },
  {
    id: 'ssh',
    term: 'SSH',
    slug: 'ssh',
    definition: 'Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network.',
    example: 'I used SSH to securely connect to the remote server and manage it from the command line.'
  },
  {
    id: 'sftp',
    term: 'SFTP',
    slug: 'sftp',
    definition: 'Secure File Transfer Protocol (SFTP) is a network protocol that provides file access, file transfer, and file management over any reliable data stream. It was designed as an extension of SSH.',
    example: 'I used an SFTP client to securely upload the files to the web server.'
  },
  {
    id: 'tls',
    term: 'TLS',
    slug: 'tls',
    definition: 'Transport Layer Security (TLS) is a cryptographic protocol designed to provide communications security over a computer network. It is the successor to SSL.',
    example: 'Websites that use HTTPS are secured with TLS encryption.'
  },
  {
    id: 'ssl',
    term: 'SSL',
    slug: 'ssl',
    definition: 'Secure Sockets Layer (SSL) is a standard security technology for establishing an encrypted link between a server and a client—typically a web server and a browser. It has been superseded by TLS.',
    example: 'Although the term SSL is still widely used, modern secure connections actually use TLS.'
  },
  {
    id: 'siem',
    term: 'SIEM',
    slug: 'siem',
    definition: 'Security Information and Event Management (SIEM) is a field within the field of computer security, where software products and services combine security information management and security event management.',
    example: 'Our SIEM system aggregates logs from all our servers and alerts us to suspicious activity.'
  },
  {
    id: 'soc-2',
    term: 'SOC',
    slug: 'soc-2',
    definition: 'A Security Operations Center (SOC) is a centralized unit that deals with security issues on an organizational and technical level.',
    example: 'The SOC team is responsible for monitoring and responding to security incidents.'
  },
  {
    id: 'sop',
    term: 'SOP',
    slug: 'sop',
    definition: 'A Standard Operating Procedure (SOP) is a set of step-by-step instructions compiled by an organization to help workers carry out complex routine operations.',
    example: 'When a new employee is onboarded, they are given the SOP for setting up their development environment.'
  },
  {
    id: 'pdu',
    term: 'PDU',
    slug: 'pdu',
    definition: 'A Power Distribution Unit (PDU) is a device fitted with multiple outputs designed to distribute electric power, especially to racks of computers and networking equipment located within a data center.',
    example: 'I plugged all the servers in the rack into the new PDU.'
  },
  {
    id: 'sso',
    term: 'SSO',
    slug: 'sso',
    definition: 'Single Sign-On (SSO) is an authentication scheme that allows a user to log in with a single ID and password to any of several related, yet independent, software systems.',
    example: 'Our company uses SSO, so I can log into all my work applications with my one corporate account.'
  },
  {
    id: 'mfa',
    term: 'MFA',
    slug: 'mfa',
    definition: 'Multi-Factor Authentication (MFA) is an electronic authentication method in which a user is granted access to a website or application only after successfully presenting two or more pieces of evidence to an authentication mechanism.',
    example: 'I enabled MFA on my email account for extra security.'
  },
  {
    id: 'rbac',
    term: 'RBAC',
    slug: 'rbac',
    definition: 'Role-Based Access Control (RBAC) is a method of restricting network access based on the roles of individual users within an enterprise.',
    example: 'We use RBAC to ensure that only managers have access to the financial reports.'
  },
  {
    id: 'iam',
    term: 'IAM',
    slug: 'iam',
    definition: 'Identity and Access Management (IAM) is a framework of policies and technologies for ensuring that the right users have the appropriate access to technology resources.',
    example: 'I configured an IAM policy in AWS to give the application read-only access to the S3 bucket.'
  },
  {
    id: 'kpi',
    term: 'KPI',
    slug: 'kpi',
    definition: 'A Key Performance Indicator (KPI) is a measurable value that demonstrates how effectively a company is achieving key business objectives.',
    example: 'Our team\'s main KPI for this quarter is to reduce application response time by 20%.'
  },
  {
    id: 'sre',
    term: 'SRE',
    slug: 'sre',
    definition: 'A Site Reliability Engineer (SRE) is a software engineer who is responsible for the reliability, scalability, and performance of a system.',
    example: 'The SRE team is on call to handle any production outages.'
  },
  {
    id: 'sla',
    term: 'SLA',
    slug: 'sla',
    definition: 'A Service Level Agreement (SLA) is a commitment between a service provider and a client. Particular aspects of the service – quality, availability, responsibilities – are agreed between the service provider and the service user.',
    example: 'Our cloud provider guarantees 99.99% uptime in their SLA.'
  },
  {
    id: 'eta',
    term: 'ETA',
    slug: 'eta',
    definition: 'Estimated Time of Arrival (ETA) is a projection of when a task, process, or delivery will be completed.',
    example: 'The file transfer has an ETA of 5 minutes.'
  },
  {
    id: 'eta-reset',
    term: 'ETA Reset',
    slug: 'eta-reset',
    definition: 'An ETA Reset is a recalculation or update of the estimated time of arrival, often due to a change in conditions.',
    example: 'The download speed increased, so we got an ETA reset showing it would finish sooner.'
  },
  {
    id: 'rmm',
    term: 'RMM',
    slug: 'rmm',
    definition: 'Remote Monitoring and Management (RMM) is a type of software used by IT service providers to remotely monitor and manage their clients\' IT infrastructure and systems.',
    example: 'Our IT support company uses an RMM tool to proactively manage our servers.'
  },
  {
    id: 'bmc',
    term: 'BMC',
    slug: 'bmc',
    definition: 'A Baseboard Management Controller (BMC) is a specialized service processor that monitors the physical state of a computer, network server or other hardware device using sensors and communicating with the system administrator through an independent connection.',
    example: 'I used the BMC to remotely power cycle the server even though the operating system was frozen.'
  },
  {
    id: 'lun',
    term: 'LUN',
    slug: 'lun',
    definition: 'A Logical Unit Number (LUN) is a unique identifier for individual or collections of hard disk devices that are part of a storage area network (SAN).',
    example: 'I provisioned a new LUN from the SAN and presented it to the virtual machine.'
  },
  {
    id: 'mttr',
    term: 'MTTR',
    slug: 'mttr',
    definition: 'Mean Time To Repair (MTTR) is a basic measure of the maintainability of repairable items. It represents the average time required to repair a failed component or device.',
    example: 'Our goal is to reduce the MTTR for critical incidents to under 15 minutes.'
  },
  {
    id: 'mtbf',
    term: 'MTBF',
    slug: 'mtbf',
    definition: 'Mean Time Between Failures (MTBF) is the predicted elapsed time between inherent failures of a mechanical or electronic system, during normal system operation.',
    example: 'This enterprise-grade hard drive has a very high MTBF.'
  },
  {
    id: 'eeprom',
    term: 'EEPROM',
    slug: 'eeprom',
    definition: 'Electrically Erasable Programmable Read-Only Memory (EEPROM) is a type of non-volatile memory used in computers and other electronic devices to store small amounts of data that must be saved when power is removed.',
    example: 'The device settings are stored in an EEPROM chip.'
  },
  {
    id: 'uart',
    term: 'UART',
    slug: 'uart',
    definition: 'A Universal Asynchronous Receiver-Transmitter (UART) is a computer hardware device for asynchronous serial communication in which the data format and transmission speeds are configurable.',
    example: 'I connected to the device\'s serial console using a USB-to-UART adapter.'
  },
  {
    id: 'qos-queue',
    term: 'QOS Queue',
    slug: 'qos-queue',
    definition: 'A Quality of Service (QoS) Queue is a buffer in a network device that holds packets and prioritizes them for transmission based on their QoS markings.',
    example: 'Voice traffic is placed in a high-priority QoS queue to ensure low latency.'
  },
  {
    id: 'apipa',
    term: 'APIPA',
    slug: 'apipa',
    definition: 'Automatic Private IP Addressing (APIPA) is a feature of Windows-based operating systems that enables a computer to automatically assign itself an IP address when there is no DHCP server available.',
    example: 'My computer couldn\'t contact the DHCP server, so it got an APIPA address in the 169.254.x.x range.'
  },
  {
    id: 'cidr',
    term: 'CIDR',
    slug: 'cidr',
    definition: 'Classless Inter-Domain Routing (CIDR) is a method for allocating IP addresses and for IP routing. It allows for more flexible allocation of IP addresses compared to the old classful system.',
    example: 'The network was defined using CIDR notation as 192.168.1.0/24.'
  },
  {
    id: 'snat',
    term: 'SNAT',
    slug: 'snat',
    definition: 'Source NAT (SNAT) is a type of Network Address Translation where the source IP address of a packet is changed as it passes through a router or firewall.',
    example: 'The firewall uses SNAT to change the private IP address of my computer to its public IP address.'
  },
  {
    id: 'dnat',
    term: 'DNAT',
    slug: 'dnat',
    definition: 'Destination NAT (DNAT) is a type of Network Address Translation where the destination IP address of a packet is changed. It is often used for port forwarding.',
    example: 'I configured DNAT to forward traffic coming to my public IP on port 80 to my internal web server.'
  },
  {
    id: 'mfa-token',
    term: 'MFA Token',
    slug: 'mfa-token',
    definition: 'A Multi-Factor Authentication (MFA) Token is a one-time code generated by an authenticator app or hardware device, used as a second factor of authentication.',
    example: 'I entered my password and then the MFA token from my phone to log in.'
  },
  {
    id: 'radius',
    term: 'RADIUS',
    slug: 'radius',
    definition: 'Remote Authentication Dial-In User Service (RADIUS) is a networking protocol that provides centralized Authentication, Authorization, and Accounting (AAA) management for users who connect and use a network service.',
    example: 'Our corporate Wi-Fi uses a RADIUS server to authenticate users with their domain credentials.'
  },
  {
    id: 'tacacs',
    term: 'TACACS',
    slug: 'tacacs',
    definition: 'Terminal Access Controller Access-Control System (TACACS) is a family of related protocols handling remote authentication and related services for networked access control through a centralized server.',
    example: 'We use TACACS+ to control who can log into and manage our network devices.'
  },
  {
    id: 'vpn',
    term: 'VPN',
    slug: 'vpn',
    definition: 'A Virtual Private Network (VPN) extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.',
    example: 'I have to connect to the company VPN to access the internal servers from home.'
  },
  {
    id: 'ipsec',
    term: 'IPsec',
    slug: 'ipsec',
    definition: 'Internet Protocol Security (IPsec) is a secure network protocol suite that authenticates and encrypts the packets of data to provide secure encrypted communication between two computers over an Internet Protocol network.',
    example: 'The site-to-site VPN is secured with an IPsec tunnel.'
  },
  {
    id: 'gre',
    term: 'GRE',
    slug: 'gre',
    definition: 'Generic Routing Encapsulation (GRE) is a tunneling protocol developed by Cisco Systems that can encapsulate a wide variety of network layer protocols inside virtual point-to-point links over an Internet Protocol network.',
    example: 'We set up a GRE tunnel to pass routing protocol updates between our two sites.'
  },
  {
    id: 'ospf',
    term: 'OSPF',
    slug: 'ospf',
    definition: 'Open Shortest Path First (OSPF) is a routing protocol for Internet Protocol (IP) networks. It uses a link state routing algorithm and falls into the group of interior gateway protocols.',
    example: 'Our internal network uses OSPF to dynamically learn the best routes between our routers.'
  },
  {
    id: 'bgp',
    term: 'BGP',
    slug: 'bgp',
    definition: 'Border Gateway Protocol (BGP) is a standardized exterior gateway protocol designed to exchange routing and reachability information among autonomous systems (AS) on the Internet.',
    example: 'The internet itself runs on BGP, with large ISPs peering with each other to exchange routes.'
  },
  {
    id: 'rstp',
    term: 'RSTP',
    slug: 'rstp',
    definition: 'Rapid Spanning Tree Protocol (RSTP) is an evolution of the Spanning Tree Protocol (STP) that provides faster network convergence after a topology change.',
    example: 'We enabled RSTP on our switches to reduce the time the network is down after a link failure.'
  },
  {
    id: 'stp',
    term: 'STP',
    slug: 'stp',
    definition: 'The Spanning Tree Protocol (STP) is a network protocol that builds a logical, loop-free topology for Ethernet networks.',
    example: 'STP prevents broadcast storms by blocking redundant paths in the network.'
  },
  {
    id: 'arp',
    term: 'ARP',
    slug: 'arp',
    definition: 'The Address Resolution Protocol (ARP) is a communication protocol used for discovering the link layer address, such as a MAC address, associated with a given internet layer address, typically an IPv4 address.',
    example: 'My computer sent an ARP request to find the MAC address of the default gateway.'
  },
  {
    id: 'ntp',
    term: 'NTP',
    slug: 'ntp',
    definition: 'The Network Time Protocol (NTP) is a networking protocol for clock synchronization between computer systems over packet-switched, variable-latency data networks.',
    example: 'All our servers are configured to sync their time with an internal NTP server.'
  },
  {
    id: 'etl',
    term: 'ETL',
    slug: 'etl',
    definition: 'Extract, Transform, Load (ETL) is a three-phase process where data is extracted from a source, transformed into a proper format, and then loaded into a data warehouse.',
    example: 'We have a nightly ETL job that pulls data from our production database and loads it into our analytics platform.'
  },
  {
    id: 'json',
    term: 'JSON',
    slug: 'json',
    definition: 'JavaScript Object Notation (JSON) is an open standard file format, and data interchange format, that uses human-readable text to store and transmit data objects consisting of attribute–value pairs and array data types.',
    example: 'The API returns the data in JSON format.'
  },
  {
    id: 'yaml',
    term: 'YAML',
    slug: 'yaml',
    definition: 'YAML (YAML Ain\'t Markup Language) is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted.',
    example: 'Our Kubernetes configurations are all written in YAML.'
  },
  {
    id: 'csv',
    term: 'CSV',
    slug: 'csv',
    definition: 'A Comma-Separated Values (CSV) file is a delimited text file that uses a comma to separate values. Each line of the file is a data record.',
    example: 'I exported the report as a CSV file so I could open it in Excel.'
  },
  {
    id: 'ide',
    term: 'IDE',
    slug: 'ide',
    definition: 'An Integrated Development Environment (IDE) is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of at least a source code editor, build automation tools, and a debugger.',
    example: 'I use Visual Studio Code as my main IDE for web development.'
  },
  {
    id: 'sdk',
    term: 'SDK',
    slug: 'sdk',
    definition: 'A Software Development Kit (SDK) is a collection of software development tools in one installable package.',
    example: 'I had to download the Android SDK to start developing apps for Android.'
  },
  {
    id: 'cli',
    term: 'CLI',
    slug: 'cli',
    definition: 'A Command-Line Interface (CLI) processes commands to a computer program in the form of lines of text.',
    example: 'I prefer using the Git CLI over a graphical client.'
  },
  {
    id: 'tui',
    term: 'TUI',
    slug: 'tui',
    definition: 'A Text-based User Interface (TUI), is a retronym for a type of user interface which was common from the mid-1960s through the mid-1980s, before the advent of graphical user interfaces (GUIs).',
    example: 'The old BIOS setup screen is a classic example of a TUI.'
  },
  {
    id: 'gui',
    term: 'GUI',
    slug: 'gui',
    definition: 'A Graphical User Interface (GUI) is a type of user interface that allows users to interact with electronic devices through graphical icons and visual indicators such as secondary notation, instead of text-based user interfaces.',
    example: 'Windows and macOS are both operating systems with a sophisticated GUI.'
  },
  {
    id: 'wsl',
    term: 'WSL',
    slug: 'wsl',
    definition: 'The Windows Subsystem for Linux (WSL) is a compatibility layer for running Linux binary executables natively on Windows 10 and Windows Server 2019.',
    example: 'I use WSL to run my Linux development tools directly on my Windows machine.'
  },
  {
    id: 'crt',
    term: 'CRT',
    slug: 'crt',
    definition: 'A Cathode-Ray Tube (CRT) is a vacuum tube containing one or more electron guns, and a phosphorescent screen used to display images. It is the technology used in older, bulky monitors and televisions.',
    example: 'Some retro gamers prefer playing on a CRT monitor for its low input lag.'
  },
  {
    id: 'ips',
    term: 'IPS',
    slug: 'ips',
    definition: 'In-Plane Switching (IPS) is a screen technology for liquid-crystal displays (LCDs). It is known for its wide viewing angles and excellent color accuracy.',
    example: 'I bought an IPS monitor for photo editing because of its superior color reproduction.'
  },
  {
    id: 'va',
    term: 'VA',
    slug: 'va',
    definition: 'Vertical Alignment (VA) is a type of LCD panel technology. VA panels are known for their high contrast ratios, which produce deep blacks.',
    example: 'My VA monitor is great for watching movies because the black levels are so good.'
  },
  {
    id: 'tn',
    term: 'TN',
    slug: 'tn',
    definition: 'Twisted Nematic (TN) is a type of LCD panel technology. TN panels are known for their very fast response times, but have poorer color reproduction and viewing angles than IPS or VA panels.',
    example: 'Competitive gamers often use TN monitors because of their high refresh rates and fast response times.'
  },
  {
    id: 'hdr',
    term: 'HDR',
    slug: 'hdr',
    definition: 'High Dynamic Range (HDR) is a technology that produces a greater dynamic range of luminosity than is possible with standard digital imaging or photographic techniques.',
    example: 'The game looks amazing in HDR, with much brighter highlights and deeper shadows.'
  },
  {
    id: 'oem',
    term: 'OEM',
    slug: 'oem',
    definition: 'An Original Equipment Manufacturer (OEM) is a company that produces parts and equipment that may be marketed by another manufacturer.',
    example: 'My Dell computer came with an OEM version of Windows.'
  },
  {
    id: 'odm',
    term: 'ODM',
    slug: 'odm',
    definition: 'An Original Design Manufacturer (ODM) is a company that designs and manufactures a product, as specified, that is eventually rebranded by another firm for sale.',
    example: 'Many well-known electronics brands don\'t manufacture their own products; they use an ODM.'
  },
  {
    id: 'rma',
    term: 'RMA',
    slug: 'rma',
    definition: 'A Return Merchandise Authorization (RMA) is a part of the process of returning a product to receive a refund, replacement, or repair during the product\'s warranty period.',
    example: 'My new graphics card was dead on arrival, so I had to contact support to get an RMA number.'
  },
  {
    id: 'sku',
    term: 'SKU',
    slug: 'sku',
    definition: 'A Stock Keeping Unit (SKU) is a scannable bar code, most often seen printed on product labels in a retail store. The label allows vendors to automatically track the movement of inventory.',
    example: 'Can you give me the SKU for that specific model of laptop?'
  },
  {
    id: 'upc',
    term: 'UPC',
    slug: 'upc',
    definition: 'The Universal Product Code (UPC) is a barcode symbology that is widely used in the United States, Canada, Europe, Australia, New Zealand, and other countries for tracking trade items in stores.',
    example: 'I scanned the UPC on the box to look up the product online.'
  },
  {
    id: 'bom',
    term: 'BOM',
    slug: 'bom',
    definition: 'A Bill of Materials (BOM) is a comprehensive list of all the raw materials, components, and assemblies required to build or manufacture a product.',
    example: 'The engineer reviewed the BOM to see if they could substitute a cheaper component.'
  },
  {
    id: 'eol',
    term: 'EOL',
    slug: 'eol',
    definition: 'End of Life (EOL) is a term used with respect to a product supplied to customers, indicating that the product is at the end of its useful life and a vendor will no longer be marketing, selling, or provisioning parts, services or software updates for it.',
    example: 'Windows 7 has reached its EOL, so it no longer receives security updates.'
  },
  {
    id: 'eos',
    term: 'EOS',
    slug: 'eos',
    definition: 'End of Support (EOS) is the date after which a product or service is no longer supported by its developer or vendor.',
    example: 'The EOS for this software version is next year, so we need to plan our upgrade.'
  },
  {
    id: 'lts',
    term: 'LTS',
    slug: 'lts',
    definition: 'Long-Term Support (LTS) is a product lifecycle management policy in which a stable release of computer software is maintained for a longer period of time than the standard edition.',
    example: 'We use the LTS version of Ubuntu for our servers because we need the stability and long-term security updates.'
  },
  {
    id: 'rc',
    term: 'RC',
    slug: 'rc',
    definition: 'A Release Candidate (RC) is a beta version of a software product with the potential to be a final product, which is ready to be released unless significant bugs emerge.',
    example: 'The new version of the software is now in the RC phase, so it should be released to the public soon.'
  },
  {
    id: 'eta-patch',
    term: 'ETA Patch',
    slug: 'eta-patch',
    definition: 'The Estimated Time of Arrival (ETA) for a patch is the projected time when a software update to fix a bug or vulnerability will be released.',
    example: 'The vendor has an ETA for the patch of next Tuesday.'
  },
  {
    id: 'patchset',
    term: 'Patchset',
    slug: 'patchset',
    definition: 'A patchset is a collection of patches or updates that are bundled together and applied as a single unit.',
    example: 'The quarterly security update was delivered as a single patchset.'
  },
  {
    id: 'changelog',
    term: 'Changelog',
    slug: 'changelog',
    definition: 'A changelog is a log or record of all notable changes made to a project, such as a software application or website.',
    example: 'I read the changelog to see what new features were included in the latest update.'
  },
  {
    id: 'fork',
    term: 'Fork',
    slug: 'fork',
    definition: 'A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project.',
    example: 'I created a fork of the project on GitHub so I could work on my own version.'
  },
  {
    id: 'merge',
    term: 'Merge',
    slug: 'merge',
    definition: 'In version control, a merge is the process of combining the changes from two different branches into a single branch.',
    example: 'I need to merge the feature branch into the main branch to release the new feature.'
  },
  {
    id: 'pr',
    term: 'PR',
    slug: 'pr',
    definition: 'A Pull Request (PR) is a feature of version control systems like GitHub that lets a developer propose changes to a repository. It\'s a way to initiate a code review.',
    example: 'I opened a PR to get my code changes reviewed by the team.'
  },
  {
    id: 'cr',
    term: 'CR',
    slug: 'cr',
    definition: 'A Code Review (CR) is a software quality assurance activity in which one or several humans check a program mainly by viewing and reading parts of its source code.',
    example: 'My pull request can\'t be merged until it passes the code review.'
  },
  {
    id: 'lint',
    term: 'Lint',
    slug: 'lint',
    definition: 'A linter is a tool that analyzes source code to flag programming errors, bugs, stylistic errors, and suspicious constructs.',
    example: 'I have to fix the linting errors before I can commit my code.'
  },
  {
    id: 'minify',
    term: 'Minify',
    slug: 'minify',
    definition: 'Minification is the process of removing all unnecessary characters from source code without changing its functionality, to reduce file size.',
    example: 'Our build process will minify the JavaScript files before deploying them to production.'
  },
  {
    id: 'obfuscate',
    term: 'Obfuscate',
    slug: 'obfuscate',
    definition: 'Obfuscation is the deliberate act of creating source or machine code that is difficult for humans to understand.',
    example: 'The company obfuscates its client-side JavaScript to make it harder to reverse-engineer.'
  },
  {
    id: 'decompile',
    term: 'Decompile',
    slug: 'decompile',
    definition: 'A decompiler is a computer program that takes an executable file as input, and attempts to create a high-level source file that can be recompiled successfully.',
    example: 'I used a decompiler to try to understand how the old application worked.'
  },
  {
    id: 'hexdump',
    term: 'Hexdump',
    slug: 'hexdump',
    definition: 'A hexdump is a hexadecimal view of computer data. It is often used for debugging or reverse engineering.',
    example: 'I took a hexdump of the file to see its raw binary content.'
  },
  {
    id: 'binwalk',
    term: 'Binwalk',
    slug: 'binwalk',
    definition: 'Binwalk is a tool for analyzing, reverse engineering, and extracting firmware images.',
    example: 'I used Binwalk to extract the filesystem from the router\'s firmware dump.'
  },
  {
    id: 'sandbox',
    term: 'Sandbox',
    slug: 'sandbox',
    definition: 'An isolated test environment for running programs or opening files without affecting the application or system on which they run.',
    example: 'The security software runs suspicious files in a sandbox to see how they behave.'
  },
  {
    id: 'stub',
    term: 'Stub',
    slug: 'stub',
    definition: 'In software development, a stub is a piece of code used to stand in for some other programming functionality. A stub may simulate the behavior of existing code or be a temporary substitute for yet-to-be-developed code.',
    example: 'I created a stub for the API client so I could test my UI code without making real network requests.'
  },
  {
    id: 'mock',
    term: 'Mock',
    slug: 'mock',
    definition: 'A mock object is a simulated object that mimics the behavior of real objects in controlled ways, used in unit testing.',
    example: 'In my test, I replaced the database connection with a mock object that returns fake data.'
  },
  {
    id: 'payload',
    term: 'Payload',
    slug: 'payload',
    definition: 'In computing and telecommunications, the payload is the part of transmitted data that is the actual intended message. Headers and metadata are sent only to enable payload delivery.',
    example: 'The XSS payload was a script that stole the user\'s session cookie.'
  },
  {
    id: 'beacon',
    term: 'Beacon',
    slug: 'beacon',
    definition: 'In security, a beacon is a periodic signal sent from a compromised system to a command and control server to indicate that it is still active and ready for commands.',
    example: 'The malware sent a beacon out to the C2 server every 10 minutes.'
  },
  {
    id: 'c2',
    term: 'C2',
    slug: 'c2',
    definition: 'Command and Control (C2) infrastructure consists of servers and other technology that attackers use to maintain communications with compromised devices.',
    example: 'The security team is trying to take down the attacker\'s C2 server.'
  },
  {
    id: 'rat',
    term: 'RAT',
    slug: 'rat',
    definition: 'A Remote Access Trojan (RAT) is a type of malware that includes a back door for administrative control over the target computer.',
    example: 'The attacker used a RAT to gain complete control over the victim\'s computer.'
  },
  {
    id: 'edr',
    term: 'EDR',
    slug: 'edr',
    definition: 'Endpoint Detection and Response (EDR) is a cybersecurity technology that continuously monitors and responds to mitigate advanced threats on endpoint devices.',
    example: 'Our EDR solution detected and blocked the ransomware before it could encrypt any files.'
  },
  {
    id: 'xdr',
    term: 'XDR',
    slug: 'xdr',
    definition: 'Extended Detection and Response (XDR) is a security technology that provides holistic, cross-platform visibility and response capabilities, integrating data from endpoints, networks, and cloud environments.',
    example: 'XDR gives us a more complete picture of an attack than EDR alone.'
  },
  {
    id: 'ipsec-tunnel',
    term: 'IPSec Tunnel',
    slug: 'ipsec-tunnel',
    definition: 'An IPSec Tunnel is a secure communication channel created between two networks or devices using the IPsec protocol suite to encrypt the traffic.',
    example: 'All traffic between our two offices is sent through an encrypted IPSec tunnel.'
  },
  {
    id: 'hash',
    term: 'Hash',
    slug: 'hash',
    definition: 'A hash is a function that converts an input of letters and numbers into an encrypted output of a fixed length. Hashing is used for everything from data storage to cryptography.',
    example: 'I compared the file\'s hash to the one on the website to make sure it hadn\'t been tampered with.'
  },
  {
    id: 'salt',
    term: 'Salt',
    slug: 'salt',
    definition: 'In cryptography, a salt is random data that is used as an additional input to a one-way function that "hashes" a password or passphrase.',
    example: 'Adding a unique salt to each password before hashing makes them much more resistant to rainbow table attacks.'
  },
  {
    id: 'scrypt',
    term: 'Scrypt',
    slug: 'scrypt',
    definition: 'Scrypt is a password-based key derivation function created by Colin Percival, originally for the Tarsnap online backup service. The algorithm was specifically designed to make it costly to perform large-scale custom hardware attacks by requiring large amounts of memory.',
    example: 'We use Scrypt to hash our users\' passwords because it is more secure against brute-force attacks than older algorithms.'
  },
  {
    id: 'sha256',
    term: 'SHA256',
    slug: 'sha256',
    definition: 'SHA-256 (Secure Hash Algorithm 256-bit) is a patented cryptographic hash function that outputs a value that is 256 bits long.',
    example: 'Bitcoin uses the SHA-256 hashing algorithm.'
  },
  {
    id: 'md5',
    term: 'MD5',
    slug: 'md5',
    definition: 'The MD5 message-digest algorithm is a widely used hash function producing a 128-bit hash value. Although MD5 was initially designed to be used as a cryptographic hash function, it has been found to suffer from extensive vulnerabilities and is no longer considered secure for that purpose.',
    example: 'MD5 is still sometimes used to verify file integrity, but it should not be used for security-related purposes.'
  },
  {
    id: 'hmac',
    term: 'HMAC',
    slug: 'hmac',
    definition: 'A Hashed Message Authentication Code (HMAC) is a specific type of message authentication code involving a cryptographic hash function and a secret cryptographic key.',
    example: 'The API uses HMAC to verify the authenticity and integrity of requests.'
  },
  {
    id: 'rootkit',
    term: 'ROOTKIT',
    slug: 'rootkit',
    definition: 'A rootkit is a clandestine computer program designed to provide continued privileged access to a computer while actively hiding its presence.',
    example: 'The rootkit was installed deep in the operating system, making it very difficult to detect and remove.'
  },
  {
    id: 'backdoor',
    term: 'BACKDOOR',
    slug: 'backdoor',
    definition: 'A backdoor is a means of access to a computer system or encrypted data that bypasses the system\'s customary security mechanisms.',
    example: 'The attacker left a backdoor on the server so they could get back in later.'
  },
  {
    id: 'bot',
    term: 'BOT',
    slug: 'bot',
    definition: 'A bot is a software application that runs automated tasks (scripts) over the Internet.',
    example: 'A chatbot is a bot that can have a conversation with a human.'
  },
  {
    id: 'botnet',
    term: 'BOTNET',
    slug: 'botnet',
    definition: 'A botnet is a number of Internet-connected devices, each of which is running one or more bots. Botnets can be used to perform Distributed Denial-of-Service (DDoS) attacks, steal data, send spam, and allows the attacker to access the device and its connection.',
    example: 'The attacker used a massive botnet to launch the DDoS attack.'
  },
  {
    id: 'worm',
    term: 'WORM',
    slug: 'worm',
    definition: 'A computer worm is a standalone malware computer program that replicates itself in order to spread to other computers.',
    example: 'Unlike a virus, a worm can spread by itself without any human interaction.'
  },
  {
    id: 'trojan',
    term: 'TROJAN',
    slug: 'trojan',
    definition: 'A Trojan horse, or Trojan, is any malware which misleads users of its true intent. The term is derived from the Ancient Greek story of the deceptive Trojan Horse that led to the fall of the city of Troy.',
    example: 'The user thought they were downloading a free game, but it was actually a Trojan that installed a keylogger on their system.'
  },
  {
    id: 'pup',
    term: 'PUP',
    slug: 'pup',
    definition: 'A Potentially Unwanted Program (PUP) is a program that may be unwanted, despite the user having consented to download it. PUPs include spyware, adware, and dialers.',
    example: 'My antivirus scan found a PUP that was bundled with a free software I downloaded.'
  },
  {
    id: 'sig',
    term: 'SIG',
    slug: 'sig',
    definition: 'A signature file (SIG) contains data that identifies a particular virus, worm, or other malware. Antivirus programs use these signature files to detect threats.',
    example: 'The antivirus software needs to be updated with the latest signature files to detect new threats.'
  },
  {
    id: 'sigdb',
    term: 'SIGDB',
    slug: 'sigdb',
    definition: 'A signature database (SIGDB) is a collection of signatures used by security software to identify known threats.',
    example: 'The intrusion detection system uses a SIGDB to match network traffic against known attack patterns.'
  },
  {
    id: 'baseline',
    term: 'BASELINE',
    slug: 'baseline',
    definition: 'A baseline is a known state by which all future states are measured. In security, it refers to the normal, expected behavior of a system.',
    example: 'Our security monitoring system first establishes a baseline of normal network traffic, and then alerts on any deviations.'
  },
  {
    id: 'whitelist',
    term: 'WHITELIST',
    slug: 'whitelist',
    definition: 'A whitelist is a list of approved or trusted entities, such as applications or IP addresses, that are allowed to run or access a system.',
    example: 'The application whitelist prevents any unauthorized software from running on the corporate workstations.'
  },
  {
    id: 'blacklist',
    term: 'BLACKLIST',
    slug: 'blacklist',
    definition: 'A blacklist is a list of entities, such as IP addresses or email domains, that are denied access to a system.',
    example: 'We added the spammer\'s IP address to our email server\'s blacklist.'
  },
  {
    id: 'grep',
    term: 'GREP',
    slug: 'grep',
    definition: 'grep is a command-line utility for searching plain-text data sets for lines that match a regular expression.',
    example: 'I used grep to search through the log files for any error messages.'
  },
  {
    id: 'chmod',
    term: 'CHMOD',
    slug: 'chmod',
    definition: 'chmod is a command in Unix and Unix-like operating systems that is used to change the access permissions of file system objects (files and directories).',
    example: 'I used `chmod 755` to make the script executable.'
  },
  {
    id: 'chown',
    term: 'CHOWN',
    slug: 'chown',
    definition: 'chown is a command in Unix and Unix-like operating systems that is used to change the owner of file system objects (files and directories).',
    example: 'I used chown to change the ownership of the file to the `www-data` user.'
  },
  {
    id: 'sudo',
    term: 'SUDO',
    slug: 'sudo',
    definition: 'sudo is a program for Unix-like computer operating systems that allows users to run programs with the security privileges of another user, by default the superuser.',
    example: 'I had to use sudo to run the command with root privileges.'
  },
  {
    id: 'lsblk',
    term: 'LSBLK',
    slug: 'lsblk',
    definition: 'lsblk is a command-line utility in Linux that lists information about all available or the specified block devices.',
    example: 'I ran lsblk to see all the hard drives and partitions on my system.'
  },
  {
    id: 'df',
    term: 'DF',
    slug: 'df',
    definition: 'df (abbreviation for disk free) is a standard Unix command used to display the amount of available disk space for file systems.',
    example: 'I ran `df -h` to see how much free space was left on the server.'
  },
  {
    id: 'du',
    term: 'DU',
    slug: 'du',
    definition: 'du (abbreviation for disk usage) is a standard Unix program used to estimate file space usage—space used under a particular directory or files on a file system.',
    example: 'I used `du -sh *` to see which directories were taking up the most space.'
  },
  {
    id: 'top',
    term: 'TOP',
    slug: 'top',
    definition: 'top is a task manager program found in many Unix-like operating systems that displays information about CPU and memory utilization.',
    example: 'I ran top to see which process was using up all the CPU.'
  },
  {
    id: 'htop',
    term: 'HTOP',
    slug: 'htop',
    definition: 'htop is an interactive process viewer for Unix systems. It is a more advanced and user-friendly alternative to the `top` command.',
    example: 'I prefer using htop because of its color-coded display and easier process management.'
  },
  {
    id: 'kill',
    term: 'KILL',
    slug: 'kill',
    definition: 'kill is a command that is used in Unix-like operating systems to send a signal to a process.',
    example: 'The process was frozen, so I had to use `kill -9` to force it to terminate.'
  },
  {
    id: 'pkill',
    term: 'PKILL',
    slug: 'pkill',
    definition: 'pkill is a command-line utility that sends signals to the processes of a program based on its name.',
    example: 'I used pkill to terminate all the running instances of Chrome.'
  },
  {
    id: 'logrotate',
    term: 'LOGROTATE',
    slug: 'logrotate',
    definition: 'logrotate is a system utility that automates the management of log files. It can rotate, compress, and mail log files.',
    example: 'I configured logrotate to rotate the web server\'s logs daily and keep 7 days of archives.'
  },
  {
    id: 'cron',
    term: 'CRON',
    slug: 'cron',
    definition: 'cron is a time-based job scheduler in Unix-like computer operating systems. Users who set up and maintain software environments use cron to schedule jobs to run periodically at fixed times, dates, or intervals.',
    example: 'I set up a cron job to run my backup script every night at 2 AM.'
  },
  {
    id: 'crontab',
    term: 'CRONTAB',
    slug: 'crontab',
    definition: 'A crontab is a file that contains the schedule of cron entries to be run and at specified times.',
    example: 'I edited the crontab file to add a new scheduled task.'
  },
  {
    id: 'daemon',
    term: 'DAEMON',
    slug: 'daemon',
    definition: 'A daemon is a computer program that runs as a background process, rather than being under the direct control of an interactive user.',
    example: 'The SSH server runs as a daemon, always listening for incoming connections.'
  },
  {
    id: 'syslog',
    term: 'SYSLOG',
    slug: 'syslog',
    definition: 'Syslog is a standard for message logging. It allows separation of the software that generates messages, the system that stores them, and the software that reports and analyzes them.',
    example: 'I checked the syslog to find the error messages from the kernel.'
  },
  {
    id: 'journalctl',
    term: 'JOURNALCTL',
    slug: 'journalctl',
    definition: 'journalctl is a utility for querying and displaying logs from journald, the systemd logging service.',
    example: 'I used `journalctl -u nginx` to view the logs specifically for the NGINX service.'
  },
  {
    id: 'initd',
    term: 'INITD',
    slug: 'initd',
    definition: 'init.d is the sub-directory of /etc in Unix-like systems that contains the scripts used by the legacy System V init process to control services.',
    example: 'On older Linux systems, you would start and stop services using scripts in /etc/init.d.'
  },
  {
    id: 'systemd',
    term: 'SYSTEMD',
    slug: 'systemd',
    definition: 'systemd is a software suite that provides an array of system components for Linux operating systems. Its main aim is to unify service configuration and behavior across Linux distributions. It has replaced the traditional init system.',
    example: 'On modern Linux systems, I use `systemctl` to manage services controlled by systemd.'
  },
  {
    id: 'kernel-panic',
    term: 'KERNEL PANIC',
    slug: 'kernel-panic',
    definition: 'A kernel panic is a safety measure taken by an operating system\'s kernel upon detecting an internal fatal error from which it cannot safely recover. This is the equivalent of a Blue Screen of Death in Windows.',
    example: 'A faulty driver caused a kernel panic, and the server rebooted.'
  },
  {
    id: 'swap',
    term: 'SWAP',
    slug: 'swap',
    definition: 'In computing, swap is a space on a hard disk used as a temporary location to store information that is not currently being used by the RAM.',
    example: 'The system started using swap space when it ran out of physical RAM.'
  },
  {
    id: 'fsck',
    term: 'FSCK',
    slug: 'fsck',
    definition: 'fsck (file system consistency check) is a tool for checking the consistency of a file system in Unix and Unix-like operating systems.',
    example: 'After the improper shutdown, the system ran fsck on the next boot to check for file system errors.'
  },
  {
    id: 'lvm',
    term: 'LVM',
    slug: 'lvm',
    definition: 'The Logical Volume Manager (LVM) is a device mapper framework that provides logical volume management for the Linux kernel. It allows for more flexible disk space management.',
    example: 'I used LVM to create a logical volume that spans across two physical hard drives.'
  },
  {
    id: 'parted',
    term: 'PARTED',
    slug: 'parted',
    definition: 'GNU Parted is a free partition editor for creating and manipulating partition tables.',
    example: 'I used parted to create a new partition on my hard drive.'
  },
  {
    id: 'fstab',
    term: 'FSTAB',
    slug: 'fstab',
    definition: 'The fstab file is a system configuration file on Linux and other Unix-like operating systems that contains information about all the partitions and storage devices on the system.',
    example: 'I edited the /etc/fstab file to automatically mount my network drive on boot.'
  },
  {
    id: 'zfs',
    term: 'ZFS',
    slug: 'zfs',
    definition: 'ZFS is a combined file system and logical volume manager designed by Sun Microsystems. It is known for its data integrity features.',
    example: 'I built my home server using ZFS for its robust data protection and snapshot capabilities.'
  },
  {
    id: 'btrfs',
    term: 'BTRFS',
    slug: 'btrfs',
    definition: 'Btrfs (B-tree file system) is a modern copy-on-write (CoW) file system for Linux aimed at implementing advanced features while focusing on fault tolerance, repair and easy administration.',
    example: 'I use Btrfs on my laptop because it allows me to take snapshots of the system before an update.'
  },
  {
    id: 'ext4',
    term: 'EXT4',
    slug: 'ext4',
    definition: 'The ext4 file system is the default file system for many modern Linux distributions.',
    example: 'I formatted the new hard drive with the ext4 file system.'
  },
  {
    id: 'ntfs',
    term: 'NTFS',
    slug: 'ntfs',
    definition: 'NTFS (New Technology File System) is the primary file system used by Microsoft Windows operating systems.',
    example: 'I can\'t write to the external hard drive from my Mac because it is formatted with NTFS.'
  },
  {
    id: 'fat32',
    term: 'FAT32',
    slug: 'fat32',
    definition: 'FAT32 is a file system that is compatible with a wide range of devices, but has limitations such as a 4GB maximum file size.',
    example: 'I formatted my USB drive with FAT32 so it would be compatible with both my Windows PC and my Mac.'
  },
  {
    id: 'gpt',
    term: 'GPT',
    slug: 'gpt',
    definition: 'GUID Partition Table (GPT) is a standard for the layout of partition tables of a physical computer storage device, such as a hard disk drive or solid-state drive, using universally unique identifiers.',
    example: 'Modern systems use GPT for their partition tables, which supports larger drives and more partitions than the old MBR standard.'
  },
  {
    id: 'mbr',
    term: 'MBR',
    slug: 'mbr',
    definition: 'The Master Boot Record (MBR) is a special type of boot sector at the very beginning of partitioned computer mass storage devices. It is a legacy standard, replaced by GPT.',
    example: 'The MBR was corrupted, so the computer wouldn\'t boot.'
  },
  {
    id: 'iso',
    term: 'ISO',
    slug: 'iso',
    definition: 'An ISO image is a disk image of an optical disc. In other words, it is an archive file that contains everything that would be written to an optical disc, sector by sector, including the file system.',
    example: 'I downloaded the ISO file for the Linux distribution and created a bootable USB drive.'
  },
  {
    id: 'img',
    term: 'IMG',
    slug: 'img',
    definition: 'An IMG file is a raw disk image of a storage device, such as a hard drive or a memory card.',
    example: 'I wrote the Raspberry Pi OS IMG file to the SD card.'
  },
  {
    id: 'dmg',
    term: 'DMG',
    slug: 'dmg',
    definition: 'A DMG file is an Apple Disk Image file, used by macOS.',
    example: 'To install the application on my Mac, I just had to open the DMG file and drag the app to the Applications folder.'
  },
  {
    id: 'vhd',
    term: 'VHD',
    slug: 'vhd',
    definition: 'A Virtual Hard Disk (VHD) is a file format which represents a virtual hard disk drive. It may contain what is found on a physical HDD, such as disk partitions and a file system.',
    example: 'My virtual machine uses a VHD file for its storage.'
  },
  {
    id: 'vmdk',
    term: 'VMDK',
    slug: 'vmdk',
    definition: 'VMDK (Virtual Machine Disk) is a file format that represents a virtual hard disk drive, developed by VMware.',
    example: 'I converted the VHD file to a VMDK file so I could use it with VMware.'
  },
  {
    id: 'qcow2',
    term: 'QCOW2',
    slug: 'qcow2',
    definition: 'QCOW2 (QEMU Copy-On-Write) is a file format for disk image files used by QEMU, a hosted virtual machine monitor. It supports features like snapshots and compression.',
    example: 'KVM virtual machines often use the QCOW2 format for their disk images.'
  },
  {
    id: 'snapshot',
    term: 'SNAPSHOT',
    slug: 'snapshot',
    definition: 'A snapshot is a point-in-time copy of a virtual machine or a file system. It can be used to restore the system to a previous state.',
    example: 'I took a snapshot of the virtual machine before I installed the risky software update.'
  },
  {
    id: 'clone',
    term: 'CLONE',
    slug: 'clone',
    definition: 'A clone is an exact copy of a virtual machine or a hard drive.',
    example: 'I created a clone of the server so I could test the upgrade in a safe environment.'
  },
  {
    id: 'live-migrate',
    term: 'LIVE MIGRATE',
    slug: 'live-migrate',
    definition: 'Live migration is the process of moving a running virtual machine from one physical host to another without any downtime.',
    example: 'I used live migration to move the virtual machine to a different server for maintenance, and the users never noticed.'
  },
  {
    id: 'hot-migrate',
    term: 'HOT MIGRATE',
    slug: 'hot-migrate',
    definition: 'Hot migration is another term for live migration, the process of moving a running VM without downtime.',
    example: 'The system supports hot migration, so we can balance the load across our servers without any service interruption.'
  },
  {
    id: 'guest-additions',
    term: 'GUEST ADDITIONS',
    slug: 'guest-additions',
    definition: 'Guest Additions are a set of device drivers and system applications for virtual machines that optimize the guest operating system for better performance and usability.',
    example: 'I installed the VirtualBox Guest Additions to get better screen resolution and mouse integration.'
  },
  {
    id: 'hypervisor',
    term: 'HYPERVISOR',
    slug: 'hypervisor',
    definition: 'A hypervisor is a piece of software, firmware, or hardware that creates and runs virtual machines.',
    example: 'VMware ESXi and Microsoft Hyper-V are both examples of Type-1 hypervisors.'
  },
  {
    id: 'k8s',
    term: 'K8s',
    slug: 'k8s',
    definition: 'K8s is a common abbreviation for Kubernetes, an open-source container orchestration system.',
    example: 'We run all our microservices on a K8s cluster.'
  },
  {
    id: 'pod',
    term: 'Pod',
    slug: 'pod',
    definition: 'In Kubernetes, a Pod is the smallest and simplest unit in the Kubernetes object model that you create or deploy. A Pod represents a set of running containers on your cluster.',
    example: 'Our application runs in a Pod that contains two containers.'
  },
  {
    id: 'node',
    term: 'Node',
    slug: 'node',
    definition: 'A node is a worker machine in Kubernetes, previously known as a minion. A node may be a VM or physical machine, depending on the cluster.',
    example: 'The scheduler assigned the new pod to a node with available resources.'
  },
  {
    id: 'kubectl',
    term: 'Kubectl',
    slug: 'kubectl',
    definition: 'kubectl is the command-line tool for controlling Kubernetes clusters.',
    example: 'I used `kubectl get pods` to see all the running pods in the cluster.'
  },
  {
    id: 'helm',
    term: 'Helm',
    slug: 'helm',
    definition: 'Helm is a package manager for Kubernetes that helps you manage Kubernetes applications.',
    example: 'I installed Prometheus on our cluster using a Helm chart.'
  },
  {
    id: 'flux',
    term: 'Flux',
    slug: 'flux',
    definition: 'Flux is a GitOps tool for Kubernetes that ensures that the state of your cluster matches the configuration you’ve supplied in Git.',
    example: 'We use Flux to automatically deploy changes to our cluster whenever we push to our Git repository.'
  },
  {
    id: 'gitops',
    term: 'GitOps',
    slug: 'gitops',
    definition: 'GitOps is an operational framework that takes DevOps best practices used for application development such as version control, collaboration, compliance, and CI/CD, and applies them to infrastructure automation.',
    example: 'By using GitOps, we have a complete, version-controlled history of our infrastructure changes.'
  },
  {
    id: 'terraform',
    term: 'Terraform',
    slug: 'terraform',
    definition: 'Terraform is an open-source infrastructure as code software tool created by HashiCorp.',
    example: 'We use Terraform to define and provision our entire cloud infrastructure.'
  },
  {
    id: 'plan-file',
    term: 'Plan File',
    slug: 'plan-file',
    definition: 'A Terraform plan file is a file created by the `terraform plan` command that contains the planned changes to your infrastructure. It can be reviewed before being applied.',
    example: 'I saved the Terraform plan to a file so that it could be reviewed and approved before applying.'
  },
  {
    id: 'apply',
    term: 'Apply',
    slug: 'apply',
    definition: 'In Terraform, `apply` is the command used to apply the changes required to reach the desired state of the configuration.',
    example: 'After reviewing the plan, I ran `terraform apply` to create the new servers.'
  },
  {
    id: 'drift',
    term: 'Drift',
    slug: 'drift',
    definition: 'In infrastructure as code, drift is the term for when the real-world state of your infrastructure differs from the state defined in your configuration.',
    example: 'Someone made a manual change in the cloud console, which caused drift in our Terraform state.'
  },
  {
    id: 'dockerfile',
    term: 'Dockerfile',
    slug: 'dockerfile',
    definition: 'A Dockerfile is a text document that contains all the commands a user could call on the command line to assemble an image.',
    example: 'I wrote a Dockerfile to define how to build the container image for my application.'
  },
  {
    id: 'compose',
    term: 'Compose',
    slug: 'compose',
    definition: 'Docker Compose is a tool for defining and running multi-container Docker applications.',
    example: 'I used a Docker Compose file to define my web server and database containers and run them together.'
  },
  {
    id: 'layer',
    term: 'Layer',
    slug: 'layer',
    definition: 'A Docker image is built up from a series of layers. Each layer represents an instruction in the image’s Dockerfile.',
    example: 'Docker is efficient because it can cache layers, so it only has to rebuild the parts of the image that have changed.'
  },
  {
    id: 'registry',
    term: 'Registry',
    slug: 'registry',
    definition: 'A container registry is a storage system for container images.',
    example: 'I pushed the new version of my application to our private Docker registry.'
  },
  {
    id: 'tag',
    term: 'Tag',
    slug: 'tag',
    definition: 'A tag is a label applied to a Docker image to distinguish different versions or variants.',
    example: 'I tagged the image with the version number `v1.2.3`.'
  },
  {
    id: 'digest',
    term: 'Digest',
    slug: 'digest',
    definition: 'A digest is a content-addressable identifier for a Docker image. It is a SHA256 hash of the image\'s configuration and layers.',
    example: 'To ensure I am running the exact same image, I pull it by its digest instead of its tag.'
  },
  {
    id: 'init-container',
    term: 'Init container',
    slug: 'init-container',
    definition: 'Init containers are specialized containers that run before app containers in a Pod. Init containers can contain utilities or setup scripts not present in an app image.',
    example: 'We use an init container to download some configuration files before the main application starts.'
  },
  {
    id: 'nginx',
    term: 'NGINX',
    slug: 'nginx',
    definition: 'NGINX is a web server that can also be used as a reverse proxy, load balancer, mail proxy and HTTP cache.',
    example: 'We use NGINX as a reverse proxy in front of our Node.js application.'
  },
  {
    id: 'haproxy',
    term: 'HAProxy',
    slug: 'haproxy',
    definition: 'HAProxy is a free, very fast and reliable solution offering high availability, load balancing, and proxying for TCP and HTTP-based applications.',
    example: 'We use HAProxy to load balance traffic across our fleet of web servers.'
  },
  {
    id: 'traefik',
    term: 'Traefik',
    slug: 'traefik',
    definition: 'Traefik is a modern HTTP reverse proxy and load balancer that makes deploying microservices easy.',
    example: 'Traefik automatically discovers our services in Kubernetes and creates routes for them.'
  },
  {
    id: 'envoy',
    term: 'Envoy',
    slug: 'envoy',
    definition: 'Envoy is an open source edge and service proxy, designed for cloud-native applications.',
    example: 'The Istio service mesh uses Envoy as its sidecar proxy.'
  },
  {
    id: 'reverse-proxy',
    term: 'Reverse proxy',
    slug: 'reverse-proxy',
    definition: 'A reverse proxy is a server that sits in front of one or more web servers, forwarding client requests to the appropriate web server.',
    example: 'We use a reverse proxy to provide load balancing and SSL termination for our web servers.'
  },
  {
    id: 'forward-proxy',
    term: 'Forward proxy',
    slug: 'forward-proxy',
    definition: 'A forward proxy is a server that sits between a client and the internet, forwarding requests on behalf of the client.',
    example: 'Our corporate network uses a forward proxy to filter and monitor all outbound internet traffic.'
  },
  {
    id: 'api-gateway-2',
    term: 'API Gateway',
    slug: 'api-gateway-2',
    definition: 'An API Gateway is a server that acts as a single entry point for a group of microservices, handling requests by routing them to the appropriate service.',
    example: 'Instead of having clients call a dozen different microservices, they all go through the API Gateway, which simplifies authentication and logging.'
  },
  {
    id: 'queue',
    term: 'Queue',
    slug: 'queue',
    definition: 'A queue is a data structure that stores items in a first-in, first-out (FIFO) manner. In software architecture, it is often used as a buffer for jobs or messages.',
    example: 'We put the email sending tasks into a queue to be processed by a background worker.'
  },
  {
    id: 'worker',
    term: 'Worker',
    slug: 'worker',
    definition: 'A worker is a background process that consumes tasks from a queue and executes them.',
    example: 'We have a pool of worker processes that handle image resizing tasks.'
  },
  {
    id: 'cluster',
    term: 'Cluster',
    slug: 'cluster',
    definition: 'A cluster is a group of servers or other resources that act like a single system and enable high availability and, in some cases, load balancing and parallel processing.',
    example: 'Our database runs on a three-node cluster for high availability.'
  },
  {
    id: 'failover',
    term: 'Failover',
    slug: 'failover',
    definition: 'Failover is the process of automatically switching to a redundant or standby computer server, system, hardware component or network upon the failure or abnormal termination of the previously active application, server, system, hardware component, or network.',
    example: 'When the primary database server failed, the system automatically performed a failover to the standby server.'
  },
  {
    id: 'redundancy',
    term: 'Redundancy',
    slug: 'redundancy',
    definition: 'Redundancy is the duplication of critical components or functions of a system with the intention of increasing reliability of the system, usually in the form of a backup or fail-safe.',
    example: 'We have redundancy at every layer of our infrastructure, from power supplies to internet connections.'
  },
  {
    id: 'fallback',
    term: 'Fallback',
    slug: 'fallback',
    definition: 'A fallback is a mechanism for accomplishing a task when the primary mechanism fails.',
    example: 'If the application can\'t connect to the primary database, it has a fallback to connect to a read-only replica.'
  },
  {
    id: 'heartbeat',
    term: 'Heartbeat',
    slug: 'heartbeat',
    definition: 'A heartbeat is a periodic signal generated by hardware or software to indicate normal operation or to synchronize other parts of a system.',
    example: 'The two servers in the high-availability cluster send a heartbeat to each other to know that the other is still online.'
  },
  {
    id: 'ddos',
    term: 'DDoS',
    slug: 'ddos',
    definition: 'A Distributed Denial-of-Service (DDoS) attack is a malicious attempt to disrupt normal traffic of a targeted server, service or network by overwhelming the target or its surrounding infrastructure with a flood of Internet traffic.',
    example: 'The website was unavailable for an hour due to a massive DDoS attack.'
  },
  {
    id: 'udp-flood',
    term: 'UDP Flood',
    slug: 'udp-flood',
    definition: 'A UDP flood is a type of denial-of-service attack in which the attacker overwhelms the target with User Datagram Protocol (UDP) packets.',
    example: 'The firewall is configured to mitigate UDP flood attacks.'
  },
  {
    id: 'amplification-attack',
    term: 'Amplification Attack',
    slug: 'amplification-attack',
    definition: 'An amplification attack is a type of reflection-based DDoS attack where an attacker uses a smaller request to generate a much larger response, amplifying the size of the attack.',
    example: 'The attacker used a DNS amplification attack to generate a massive amount of traffic.'
  },
  {
    id: 'enum',
    term: 'ENUM',
    slug: 'enum',
    definition: 'Enumeration is the process of extracting user names, machine names, network resources, shares, and services from a system.',
    example: 'The first phase of the penetration test was to perform an enumeration of the target network.'
  },
  {
    id: 'nmap',
    term: 'Nmap',
    slug: 'nmap',
    definition: 'Nmap ("Network Mapper") is a free and open-source network scanner created by Gordon Lyon.',
    example: 'I used nmap to scan the network and find all the open ports on the server.'
  },
  {
    id: 'dirb',
    term: 'Dirb',
    slug: 'dirb',
    definition: 'DIRB is a Web Content Scanner. It looks for existing (and/or hidden) Web Objects. It basically works by launching a dictionary-based attack against a web server and analyzing the response.',
    example: 'I ran DIRB against the website to look for hidden directories and files.'
  },
  {
    id: 'gobuster',
    term: 'Gobuster',
    slug: 'gobuster',
    definition: 'Gobuster is a tool used to brute-force URIs (directories and files), DNS subdomains, and virtual host names on web servers.',
    example: 'I used Gobuster with a large wordlist to find hidden subdomains.'
  },
  {
    id: 'hydra',
    term: 'Hydra',
    slug: 'hydra',
    definition: 'Hydra is a parallelized login cracker which supports numerous protocols to attack. It is very fast and flexible, and new modules are easy to add.',
    example: 'The attacker used Hydra to brute-force the SSH password.'
  },
  {
    id: 'hashcat',
    term: 'Hashcat',
    slug: 'hashcat',
    definition: 'Hashcat is the self-proclaimed world\'s fastest and most advanced password recovery utility.',
    example: 'I used Hashcat and a powerful GPU to crack the password hashes.'
  },
  {
    id: 'cain',
    term: 'Cain',
    slug: 'cain',
    definition: 'Cain & Abel is a password recovery tool for Microsoft Operating Systems. It allows easy recovery of various kind of passwords by sniffing the network, cracking encrypted passwords using Dictionary, Brute-Force and Cryptanalysis attacks.',
    example: 'Cain is a classic but still powerful tool for password cracking on Windows networks.'
  },
  {
    id: 'impacket',
    term: 'Impacket',
    slug: 'impacket',
    definition: 'Impacket is a collection of Python classes for working with network protocols. Impacket is focused on providing low-level programmatic access to the packets and for some protocols (e.g. SMB, MSRPC) the protocol implementation itself.',
    example: 'Penetration testers often use the Impacket library to perform attacks against Windows network services.'
  },
  {
    id: 'bloodhound',
    term: 'BloodHound',
    slug: 'bloodhound',
    definition: 'BloodHound is a single page Javascript web application, built on top of Linkurious, compiled with Electron, with a Neo4j database fed by a C# data collector. It is used to reveal the hidden and often unintended relationships within an Active Directory environment.',
    example: 'I used BloodHound to visualize the attack paths in the Active Directory domain.'
  },
  {
    id: 'kerberoasting',
    term: 'Kerberoasting',
    slug: 'kerberoasting',
    definition: 'Kerberoasting is a post-exploitation attack technique that attempts to crack the password of a service account within Active Directory.',
    example: 'The attacker performed a Kerberoasting attack to get the password hash for the SQL server service account.'
  },
  {
    id: 'pass-the-hash',
    term: 'Pass-the-Hash',
    slug: 'pass-the-hash',
    definition: 'A pass-the-hash attack is a type of replay attack that allows an attacker to authenticate to a remote server or service by using the underlying NTLM or LanMan hash of a user\'s password, instead of the associated plaintext password.',
    example: 'Even though the attacker didn\'t know the user\'s password, they were able to move laterally through the network using a pass-the-hash attack.'
  },
  {
    id: 'pass-the-ticket',
    term: 'Pass-the-Ticket',
    slug: 'pass-the-ticket',
    definition: 'A pass-the-ticket attack is a method of authenticating to a system using a stolen Kerberos ticket.',
    example: 'The attacker stole a Kerberos ticket from memory and used a pass-the-ticket attack to access a file server.'
  },
  {
    id: 'golden-ticket',
    term: 'Golden Ticket',
    slug: 'golden-ticket',
    definition: 'A Golden Ticket is a type of Kerberos ticket that can grant an attacker administrative access to an entire Active Directory domain.',
    example: 'By compromising the domain controller, the attacker was able to create a Golden Ticket and become a domain admin.'
  },
  {
    id: 'silver-ticket',
    term: 'Silver Ticket',
    slug: 'silver-ticket',
    definition: 'A Silver Ticket is a forged Kerberos ticket that can grant an attacker access to a specific service on a network.',
    example: 'The attacker created a Silver Ticket to get access to the company\'s file share.'
  },
  {
    id: 'lsass-dump',
    term: 'LSASS Dump',
    slug: 'lsass-dump',
    definition: 'An LSASS dump is the process of extracting credentials from the memory of the Local Security Authority Subsystem Service (LSASS) process on Windows.',
    example: 'The attacker used Mimikatz to perform an LSASS dump and steal user passwords.'
  },
  {
    id: 'sam-dump',
    term: 'SAM Dump',
    slug: 'sam-dump',
    definition: 'A SAM dump is the process of extracting password hashes from the Security Account Manager (SAM) database on a Windows system.',
    example: 'The attacker gained physical access to the machine and performed a SAM dump to get the local administrator password hash.'
  },
  {
    id: 'bits',
    term: 'BITS',
    slug: 'bits',
    definition: 'The Background Intelligent Transfer Service (BITS) is a component of Microsoft Windows which facilitates prioritized, throttled, and asynchronous transfer of files between machines using idle network bandwidth.',
    example: 'Windows Update uses BITS to download updates in the background without impacting your network performance.'
  },
  {
    id: 'wmi',
    term: 'WMI',
    slug: 'wmi',
    definition: 'Windows Management Instrumentation (WMI) is the infrastructure for management data and operations on Windows-based operating systems.',
    example: 'I wrote a script that uses WMI to query the amount of free disk space on all our servers.'
  },
  {
    id: 'psexec',
    term: 'PSExec',
    slug: 'psexec',
    definition: 'PsExec is a light-weight telnet-replacement that lets you execute processes on other systems, complete with full interactivity for console applications, without having to manually install client software.',
    example: 'The system administrator used PsExec to remotely run a command on the user\'s computer.'
  },
  {
    id: 'smb',
    term: 'SMB',
    slug: 'smb',
    definition: 'The Server Message Block (SMB) protocol is a network file sharing protocol that allows applications on a computer to read and write to files and to request services from server programs in a computer network.',
    example: 'I connected to the file share on the server using the SMB protocol.'
  },
  {
    id: 'rdp',
    term: 'RDP',
    slug: 'rdp',
    definition: 'The Remote Desktop Protocol (RDP) is a proprietary protocol developed by Microsoft, which provides a user with a graphical interface to connect to another computer over a network connection.',
    example: 'I used RDP to connect to my work computer from home.'
  },
  {
    id: 'vnc',
    term: 'VNC',
    slug: 'vnc',
    definition: 'Virtual Network Computing (VNC) is a graphical desktop-sharing system that uses the Remote Frame Buffer protocol (RFB) to remotely control another computer.',
    example: 'I used a VNC client to connect to my Raspberry Pi and see its desktop.'
  },
  {
    id: 'ica',
    term: 'ICA',
    slug: 'ica',
    definition: 'Independent Computing Architecture (ICA) is a proprietary protocol for an application server system, designed by Citrix Systems.',
    example: 'Our company uses Citrix to publish applications, which we access using the ICA protocol.'
  },
  {
    id: 'pcoip',
    term: 'PCoIP',
    slug: 'pcoip',
    definition: 'PC-over-IP (PCoIP) is a proprietary remote display protocol developed by Teradici. It is known for its high-performance graphics capabilities.',
    example: 'Amazon WorkSpaces uses the PCoIP protocol to deliver a high-quality remote desktop experience.'
  },
  {
    id: 'spi',
    term: 'SPI',
    slug: 'spi',
    definition: 'The Serial Peripheral Interface (SPI) is a synchronous serial communication interface specification used for short-distance communication, primarily in embedded systems.',
    example: 'The microcontroller communicates with the sensor using the SPI bus.'
  },
  {
    id: 'i2c',
    term: 'I2C',
    slug: 'i2c',
    definition: 'Inter-Integrated Circuit (I2C) is a synchronous, multi-master, multi-slave, packet switched, single-ended, serial computer bus invented by Philips Semiconductor.',
    example: 'I connected multiple sensors to my Raspberry Pi using the I2C bus.'
  },
  {
    id: 'gpio',
    term: 'GPIO',
    slug: 'gpio',
    definition: 'A general-purpose input/output (GPIO) is an uncommitted digital signal pin on an integrated circuit or electronic circuit board whose behavior—including whether it is an input or output pin—is controllable by the user at run time.',
    example: 'I used the GPIO pins on my Raspberry Pi to control an LED.'
  },
  {
    id: 'uart-console',
    term: 'UART Console',
    slug: 'uart-console',
    definition: 'A UART Console is a serial console that uses a UART interface for communication. It is often used for debugging embedded systems.',
    example: 'I connected to the router\'s UART console to see the boot-up messages.'
  },
  {
    id: 'sbc',
    term: 'SBC',
    slug: 'sbc',
    definition: 'A single-board computer (SBC) is a complete computer built on a single circuit board, with microprocessor(s), memory, input/output (I/O) and other features required of a functional computer.',
    example: 'The Raspberry Pi is a popular example of an SBC.'
  },
  {
    id: 'arm',
    term: 'ARM',
    slug: 'arm',
    definition: 'ARM is a family of reduced instruction set computing (RISC) architectures for computer processors, configured for various environments.',
    example: 'Most modern smartphones use processors based on the ARM architecture.'
  },
  {
    id: 'x86',
    term: 'x86',
    slug: 'x86',
    definition: 'x86 is a family of instruction set architectures initially developed by Intel based on the Intel 8086 microprocessor and its 8088 variant.',
    example: 'Most desktop and laptop computers use processors based on the x86 architecture.'
  },
  {
    id: 'x64',
    term: 'x64',
    slug: 'x64',
    definition: 'x64 is the 64-bit version of the x86 instruction set. It is also known as AMD64 or Intel 64.',
    example: 'I am running a 64-bit version of Windows, so my processor must be x64 compatible.'
  },
  {
    id: 'apu',
    term: 'APU',
    slug: 'apu',
    definition: 'An Accelerated Processing Unit (APU) is the marketing term for a series of 64-bit microprocessors from Advanced Micro Devices (AMD), which integrate a CPU and GPU on a single die.',
    example: 'I built a small form-factor PC using an AMD APU, so I didn\'t need a separate graphics card.'
  },
  {
    id: 'hbm',
    term: 'HBM',
    slug: 'hbm',
    definition: 'High Bandwidth Memory (HBM) is a high-performance RAM interface for 3D-stacked synchronous dynamic random-access memory (SDRAM).',
    example: 'Some high-end graphics cards use HBM for its extremely high memory bandwidth.'
  },
  {
    id: 'nvme',
    term: 'NVMe',
    slug: 'nvme',
    definition: 'NVM Express (NVMe) is a specification for accessing solid-state drives (SSDs) attached through the PCI Express (PCIe) bus. It offers much higher performance than older SATA interfaces.',
    example: 'I upgraded my computer with an NVMe SSD, and now it boots in seconds.'
  },
  {
    id: 'qlc',
    term: 'QLC',
    slug: 'qlc',
    definition: 'Quad-level cell (QLC) is a type of NAND flash memory that stores four bits of data per cell. It offers high density and low cost, but has lower endurance and performance than other types.',
    example: 'I use a large QLC SSD to store my games, as it offers a lot of capacity for the price.'
  },
  {
    id: 'tlc',
    term: 'TLC',
    slug: 'tlc',
    definition: 'Triple-level cell (TLC) is a type of NAND flash memory that stores three bits of data per cell. It offers a good balance of cost, performance, and endurance.',
    example: 'My main operating system drive is a TLC SSD for its reliability.'
  },
  {
    id: 'slc',
    term: 'SLC',
    slug: 'slc',
    definition: 'Single-level cell (SLC) is a type of NAND flash memory that stores one bit of data per cell. It offers the highest performance, endurance, and reliability, but is also the most expensive.',
    example: 'Enterprise-grade SSDs often use SLC flash for its high endurance.'
  },
  {
    id: 'plp',
    term: 'PLP',
    slug: 'plp',
    definition: 'Power loss protection (PLP) is a feature on some SSDs that uses capacitors to provide enough power to flush any data in the drive\'s cache to the NAND flash in the event of a sudden power loss.',
    example: 'I chose an SSD with PLP for my server to protect against data corruption from power outages.'
  },
  {
    id: 'wear-level',
    term: 'Wear Level',
    slug: 'wear-level',
    definition: 'Wear leveling is a technique for prolonging the service life of some kinds of erasable computer storage media, such as Flash memory used in solid-state drives (SSDs).',
    example: 'The SSD\'s controller uses wear leveling to evenly distribute writes across all the memory cells.'
  },
  {
    id: 'smart',
    term: 'SMART',
    slug: 'smart',
    definition: 'S.M.A.R.T. (Self-Monitoring, Analysis and Reporting Technology) is a monitoring system included in computer hard disk drives (HDDs) and solid-state drives (SSDs) that detects and reports on various indicators of drive reliability, with the intent of enabling the anticipation of hardware failures.',
    example: 'I checked the SMART data on my hard drive to see if it was showing any signs of failure.'
  },
  {
    id: 'chkdsk',
    term: 'CHKDSK',
    slug: 'chkdsk',
    definition: 'CHKDSK (check disk) is a system tool in DOS, OS/2 and Windows. It verifies the file system integrity of a volume and fixes logical file system errors.',
    example: 'I ran CHKDSK on my hard drive to fix some file system errors.'
  },
  {
    id: 'dism',
    term: 'DISM',
    slug: 'dism',
    definition: 'Deployment Image Servicing and Management (DISM) is a command-line tool that is used to mount and service Windows images before deployment.',
    example: 'I used DISM to repair my corrupted Windows system files.'
  },
  {
    id: 'sfc',
    term: 'SFC',
    slug: 'sfc',
    definition: 'System File Checker (SFC) is a utility in Microsoft Windows that allows users to scan for and restore corruptions in Windows system files.',
    example: 'I ran `sfc /scannow` to check for and repair any corrupt system files.'
  },
  {
    id: 'gpedit',
    term: 'GPEDIT',
    slug: 'gpedit',
    definition: 'Group Policy Editor (gpedit.msc) is a tool in Windows that allows you to edit the Group Policy settings.',
    example: 'I used gpedit to disable automatic Windows updates.'
  },
  {
    id: 'regedit',
    term: 'REGEDIT',
    slug: 'regedit',
    definition: 'The Windows Registry Editor (regedit) is a graphical tool in the Windows operating system that allows authorized users to view and make changes to the Windows registry.',
    example: 'I had to use regedit to manually remove some leftover entries from a program I uninstalled.'
  },
  {
    id: 'msconfig',
    term: 'MSCONFIG',
    slug: 'msconfig',
    definition: 'MSConfig (System Configuration) is a system utility to troubleshoot the Microsoft Windows startup process.',
    example: 'I used msconfig to disable some programs from starting up with Windows.'
  },
  {
    id: 'netstat',
    term: 'NETSTAT',
    slug: 'netstat',
    definition: 'netstat is a command-line tool that displays network connections for TCP, routing tables, and a number of network interface and network protocol statistics.',
    example: 'I ran `netstat -an` to see all the active network connections on my computer.'
  },
  {
    id: 'ipconfig',
    term: 'IPCONFIG',
    slug: 'ipconfig',
    definition: 'In Windows, ipconfig is a command-line tool that displays the current TCP/IP network configuration values.',
    example: 'I ran ipconfig to find my computer\'s IP address.'
  },
  {
    id: 'arp-a',
    term: 'ARP -a',
    slug: 'arp-a',
    definition: '`arp -a` is a command used to display the current ARP table, which shows the mapping of IP addresses to MAC addresses on the local network.',
    example: 'I ran `arp -a` to see the MAC addresses of all the devices on my network.'
  },
  {
    id: 'tracert',
    term: 'TRACERT',
    slug: 'tracert',
    definition: 'tracert is a command-line utility in Windows that displays the route (path) and measures transit delays of packets across an Internet Protocol (IP) network.',
    example: 'I used tracert to see the path my packets were taking to reach the Google server.'
  },
  {
    id: 'pathping',
    term: 'PATHPING',
    slug: 'pathping',
    definition: 'pathping is a Windows network utility that combines the functionality of ping and tracert. It provides information about network latency and packet loss at each hop between a source and a destination.',
    example: 'I used pathping to diagnose a network issue and found that there was packet loss at my ISP\'s router.'
  },
  {
    id: 'winpe',
    term: 'WINPE',
    slug: 'winpe',
    definition: 'Windows Preinstallation Environment (WinPE) is a lightweight version of Windows used for the deployment of PCs, workstations, and servers or for troubleshooting an operating system while it is offline.',
    example: 'I booted into WinPE to repair my corrupted Windows installation.'
  },
  {
    id: 'pxe',
    term: 'PXE',
    slug: 'pxe',
    definition: 'The Preboot Execution Environment (PXE) is an environment to boot computers using a network interface independently of data storage devices or installed operating systems.',
    example: 'I configured the server to PXE boot from the network to install the operating system.'
  },
  {
    id: 'wds',
    term: 'WDS',
    slug: 'wds',
    definition: 'Windows Deployment Services (WDS) is a server role for the remote installation of Windows operating systems.',
    example: 'We use WDS to deploy Windows to all the new computers in our office.'
  },
  {
    id: 'mdt',
    term: 'MDT',
    slug: 'mdt',
    definition: 'The Microsoft Deployment Toolkit (MDT) is a free tool from Microsoft for automating Windows and Windows Server operating system deployment.',
    example: 'We use MDT to create a customized Windows image with all our standard applications pre-installed.'
  },
  {
    id: 'ghost',
    term: 'GHOST',
    slug: 'ghost',
    definition: 'Ghost is a disk cloning and backup tool originally developed by Murray Haszard in 1995.',
    example: 'I used Ghost to create an image of my hard drive before I upgraded to a new one.'
  },
  {
    id: 'sysprep',
    term: 'SYSPREP',
    slug: 'sysprep',
    definition: 'The System Preparation Tool (Sysprep) is a Microsoft tool for IT administrators who want to prepare an installation of Windows for duplication, auditing, and customer delivery.',
    example: 'I ran Sysprep on the master image before deploying it to all the new computers.'
  },
  {
    id: 'sccm',
    term: 'SCCM',
    slug: 'sccm',
    definition: 'System Center Configuration Manager (SCCM) is a software management suite provided by Microsoft that allows users to manage a large number of Windows based computers.',
    example: 'Our IT department uses SCCM to deploy software updates and manage all the corporate workstations.'
  },
  {
    id: 'intune',
    term: 'Intune',
    slug: 'intune',
    definition: 'Microsoft Intune is a cloud-based unified endpoint management service for managing both corporate and personally owned devices.',
    example: 'My work phone is managed by Intune, which enforces certain security policies.'
  },
  {
    id: 'azuread',
    term: 'AzureAD',
    slug: 'azuread',
    definition: 'Azure Active Directory (Azure AD) is Microsoft’s cloud-based identity and access management service.',
    example: 'We use Azure AD to manage user access to our cloud applications.'
  },
  {
    id: 'oauth',
    term: 'OAuth',
    slug: 'oauth',
    definition: 'OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.',
    example: 'I used OAuth to log into the application with my Google account.'
  },
  {
    id: 'oidc',
    term: 'OIDC',
    slug: 'oidc',
    definition: 'OpenID Connect (OIDC) is a simple identity layer on top of the OAuth 2.0 protocol. It allows clients to verify the identity of the end-user based on the authentication performed by an authorization server.',
    example: 'OIDC provides a standard way to get user profile information during the authentication process.'
  },
  {
    id: 'saml',
    term: 'SAML',
    slug: 'saml',
    definition: 'Security Assertion Markup Language (SAML) is an open standard for exchanging authentication and authorization data between parties, in particular, between an identity provider and a service provider.',
    example: 'Our corporate SSO solution uses SAML to authenticate users to our various cloud applications.'
  },
  {
    id: 'kerberos',
    term: 'Kerberos',
    slug: 'kerberos',
    definition: 'Kerberos is a computer network authentication protocol that works on the basis of tickets to allow nodes communicating over a non-secure network to prove their identity to one another in a secure manner.',
    example: 'Active Directory uses Kerberos for authentication.'
  },
  {
    id: 'token',
    term: 'Token',
    slug: 'token',
    definition: 'A token is a piece of data that represents a right to perform some operation. An access token is a credential that can be used to access protected resources.',
    example: 'After I logged in, the application gave me an access token that I have to include in all my API requests.'
  },
  {
    id: 'claims',
    term: 'Claims',
    slug: 'claims',
    definition: 'In identity management, claims are statements about a user, such as their name, email, or roles, that are included in an authentication token.',
    example: 'The JWT token contained claims about the user\'s name and administrator role.'
  },
  {
    id: 'federation',
    term: 'Federation',
    slug: 'federation',
    definition: 'Identity federation is the practice of linking a person\'s electronic identity and attributes, stored across multiple distinct identity management systems.',
    example: 'We set up a federation trust between our on-premises Active Directory and Azure AD.'
  },
  {
    id: 'csp',
    term: 'CSP',
    slug: 'csp',
    definition: 'A Content Security Policy (CSP) is a computer security standard introduced to prevent cross-site scripting (XSS), clickjacking and other code injection attacks resulting from execution of malicious content in the trusted web page context.',
    example: 'I configured a CSP header on my website to only allow scripts from my own domain to be executed.'
  },
  {
    id: 'sop-2',
    term: 'SOP',
    slug: 'sop-2',
    definition: 'The same-origin policy (SOP) is an important concept in the web application security model. Under the policy, a web browser permits scripts contained in a first web page to access data in a second web page, but only if both web pages have the same origin.',
    example: 'CORS is a mechanism to relax the same-origin policy.'
  },
  {
    id: 'xss',
    term: 'XSS',
    slug: 'xss',
    definition: 'Cross-Site Scripting (XSS) is a type of computer security vulnerability typically found in web applications. XSS enables attackers to inject client-side scripts into web pages viewed by other users.',
    example: 'The website was vulnerable to XSS because it did not properly sanitize user input.'
  },
  {
    id: 'csrf',
    term: 'CSRF',
    slug: 'csrf',
    definition: 'Cross-Site Request Forgery (CSRF) is a type of attack that occurs when a malicious website, email, blog, instant message, or program causes a user’s web browser to perform an unwanted action on a trusted site when the user is authenticated.',
    example: 'The application was vulnerable to CSRF because it did not use anti-CSRF tokens.'
  },
  {
    id: 'lfi',
    term: 'LFI',
    slug: 'lfi',
    definition: 'Local File Inclusion (LFI) is a type of vulnerability that allows an attacker to include a file, usually exploiting a "dynamic file inclusion" mechanisms implemented in the web application.',
    example: 'The attacker used an LFI vulnerability to read the /etc/passwd file on the server.'
  },
  {
    id: 'rfi',
    term: 'RFI',
    slug: 'rfi',
    definition: 'Remote File Inclusion (RFI) is a type of vulnerability that allows an attacker to include a remote file, usually through a script on the web server.',
    example: 'The attacker used an RFI vulnerability to execute a malicious script from their own server.'
  },
  {
    id: 'rce',
    term: 'RCE',
    slug: 'rce',
    definition: 'Remote Code Execution (RCE) is a class of software security flaw that allows an attacker to execute arbitrary code on a remote machine.',
    example: 'The vulnerability was a critical RCE that allowed an attacker to take complete control of the server.'
  },
  {
    id: 'sqli',
    term: 'SQLi',
    slug: 'sqli',
    definition: 'SQL injection (SQLi) is a code injection technique, used to attack data-driven applications, in which malicious SQL statements are inserted into an entry field for execution.',
    example: 'The attacker used SQLi to bypass the login form and gain access to the application.'
  },
  {
    id: 'nosqli',
    term: 'NoSQLi',
    slug: 'nosqli',
    definition: 'NoSQL injection is a vulnerability where an attacker can interfere with the queries that an application makes to its NoSQL database.',
    example: 'The application was vulnerable to NoSQLi because it was constructing database queries by concatenating strings with user input.'
  },
  {
    id: 'desync',
    term: 'Desync',
    slug: 'desync',
    definition: 'An HTTP Desync Attack is a type of request smuggling attack where an attacker can split an HTTP request into two, allowing them to bypass security controls and smuggle a malicious request to the backend server.',
    example: 'The load balancer was vulnerable to an HTTP desync attack, which allowed the attacker to bypass the WAF.'
  },
  {
    id: 'burp',
    term: 'Burp',
    slug: 'burp',
    definition: 'Burp Suite is a graphical tool for testing Web application security.',
    example: 'I used Burp Suite to intercept and modify the HTTP requests to test the application for vulnerabilities.'
  },
  {
    id: 'zap',
    term: 'ZAP',
    slug: 'zap',
    definition: 'The Zed Attack Proxy (ZAP) is a free, open-source penetration testing tool for testing Web application security.',
    example: 'I ran a ZAP scan against the website to automatically find common vulnerabilities.'
  },
  {
    id: 'nikto',
    term: 'Nikto',
    slug: 'nikto',
    definition: 'Nikto is a free software command-line vulnerability scanner that scans webservers for dangerous files/CGIs, outdated server software and other problems.',
    example: 'I used Nikto to check the web server for any known vulnerabilities.'
  },
  {
    id: 'waf',
    term: 'WAF',
    slug: 'waf',
    definition: 'A Web Application Firewall (WAF) is a firewall that monitors, filters or blocks HTTP traffic to and from a Web application.',
    example: 'Our WAF blocked the SQL injection attack.'
  },
  {
    id: 'cdn-shield',
    term: 'CDN Shield',
    slug: 'cdn-shield',
    definition: 'A CDN Shield is a feature of a Content Delivery Network that provides an additional layer of caching and protection for the origin server.',
    example: 'We enabled the CDN shield to reduce the load on our web servers.'
  },
  {
    id: 'csp-header',
    term: 'CSP Header',
    slug: 'csp-header',
    definition: 'A Content Security Policy (CSP) Header is an HTTP response header that modern browsers use to enhance the security of a document.',
    example: 'I added a CSP header to my website to prevent XSS attacks.'
  },
  {
    id: 'hsts',
    term: 'HSTS',
    slug: 'hsts',
    definition: 'HTTP Strict Transport Security (HSTS) is a web security policy mechanism that helps to protect websites against protocol downgrade attacks and cookie hijacking.',
    example: 'I enabled HSTS on my website to ensure that browsers always connect to it using HTTPS.'
  },
  {
    id: 'cors',
    term: 'CORS',
    slug: 'cors',
    definition: 'Cross-Origin Resource Sharing (CORS) is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served.',
    example: 'I had to configure CORS on my API server to allow requests from my frontend web application.'
  },
  {
    id: 'u2f',
    term: 'U2F',
    slug: 'u2f',
    definition: 'Universal 2nd Factor (U2F) is an open authentication standard that strengthens and simplifies two-factor authentication (2FA) using specialized USB or NFC devices.',
    example: 'I use a YubiKey, which is a U2F device, as my second factor of authentication.'
  },
  {
    id: 'authenticator',
    term: 'Authenticator',
    slug: 'authenticator',
    definition: 'An authenticator app is a software application that generates one-time passcodes for use in two-factor authentication.',
    example: 'I use Google Authenticator to generate codes for my online accounts.'
  },
  {
    id: 'hash-salt',
    term: 'Hash Salt',
    slug: 'hash-salt',
    definition: 'A hash salt is random data that is used as an additional input to a one-way function that hashes a password.',
    example: 'Salting passwords before hashing them makes them much more resistant to brute-force attacks.'
  },
  {
    id: 'pepper',
    term: 'Pepper',
    slug: 'pepper',
    definition: 'A pepper is a secret value that is added to a password before hashing. Unlike a salt, the pepper is not stored with the password hash and is kept secret on the server.',
    example: 'We add a pepper to our password hashes for an extra layer of security.'
  },
  {
    id: 'lockout',
    term: 'Lockout',
    slug: 'lockout',
    definition: 'A lockout policy is a security measure that temporarily disables a user account after a certain number of failed login attempts.',
    example: 'The account lockout policy is configured to lock an account for 30 minutes after 5 failed login attempts.'
  },
  {
    id: 'audit-log',
    term: 'Audit Log',
    slug: 'audit-log',
    definition: 'An audit log is a security-relevant chronological record, set of records, and/or destination and source of records that provide documentary evidence of the sequence of activities that have affected at any time a specific operation, procedure, or event.',
    example: 'I checked the audit log to see who had accessed the sensitive file.'
  },
  {
    id: 'sysmon',
    term: 'Sysmon',
    slug: 'sysmon',
    definition: 'System Monitor (Sysmon) is a Windows system service and device driver that, once installed on a system, remains resident across system reboots to monitor and log system activity to the Windows event log.',
    example: 'I use Sysmon to get more detailed information about process creation and network connections on my Windows machine.'
  },
  {
    id: 'etw',
    term: 'ETW',
    slug: 'etw',
    definition: 'Event Tracing for Windows (ETW) is a mechanism for tracing and logging events that are raised by user-mode applications and kernel-mode drivers.',
    example: 'I used ETW to trace the performance of my application.'
  },
  {
    id: 'yara',
    term: 'YARA',
    slug: 'yara',
    definition: 'YARA is a tool aimed at helping malware researchers to identify and classify malware samples.',
    example: 'I wrote a YARA rule to detect the new malware variant.'
  },
  {
    id: 'sigma-rule',
    term: 'Sigma Rule',
    slug: 'sigma-rule',
    definition: 'Sigma is a generic and open signature format that allows you to describe relevant log events in a flexible and shareable manner.',
    example: 'I converted the YARA rule to a Sigma rule so that it could be used with our SIEM.'
  },
  {
    id: 'ioc',
    term: 'IoC',
    slug: 'ioc',
    definition: 'An Indicator of Compromise (IoC) is a piece of forensic data, such as a file hash or an IP address, that indicates a security breach has occurred.',
    example: 'The security bulletin provided a list of IoCs to search for in our logs.'
  },
  {
    id: 'ioa',
    term: 'IoA',
    slug: 'ioa',
    definition: 'An Indicator of Attack (IoA) is a series of actions or behaviors that indicate an attack is in progress.',
    example: 'Our EDR system alerted us to an IoA that was consistent with a ransomware attack.'
  },
  {
    id: 'ttp',
    term: 'TTP',
    slug: 'ttp',
    definition: 'Tactics, Techniques, and Procedures (TTPs) is a concept in cybersecurity that describes the behavior of a threat actor.',
    example: 'We use the MITRE ATT&CK framework to understand the TTPs of various threat actors.'
  },
  {
    id: 'mitre',
    term: 'MITRE',
    slug: 'mitre',
    definition: 'The MITRE ATT&CK framework is a curated knowledge base and model for cyber adversary behavior, reflecting the various phases of an adversary\'s lifecycle and the platforms they are known to target.',
    example: 'We map our security controls to the MITRE ATT&CK framework to ensure we have coverage for all the common attack techniques.'
  },
  {
    id: 'threat-hunt',
    term: 'Threat Hunt',
    slug: 'threat-hunt',
    definition: 'Threat hunting is the proactive practice of searching for cyber threats that are lurking undetected in a network.',
    example: 'Our security team conducts regular threat hunts to look for any signs of a compromise.'
  },
  {
    id: 'artifact',
    term: 'Artifact',
    slug: 'artifact',
    definition: 'In digital forensics, an artifact is an object of interest that is left behind on a computer system after an event has occurred.',
    example: 'The forensic investigator found several artifacts on the suspect\'s computer that proved they had visited the malicious website.'
  },
  {
    id: 'memory-dump',
    term: 'Memory dump',
    slug: 'memory-dump',
    definition: 'A memory dump is a process in which the contents of memory are displayed and stored in case of an application or system crash.',
    example: 'I took a memory dump of the crashed process to analyze it for the cause of the crash.'
  },
  {
    id: 'disk-image',
    term: 'Disk image',
    slug: 'disk-image',
    definition: 'A disk image is a computer file containing the complete contents and structure of a data storage device, such as a hard drive, tape drive, floppy disk, optical disc or USB flash drive.',
    example: 'I created a disk image of my hard drive before I upgraded to a new one.'
  },
  {
    id: 'clonezilla',
    term: 'Clonezilla',
    slug: 'clonezilla',
    definition: 'Clonezilla is a free and open-source disk cloning, disk imaging and system deployment utility.',
    example: 'I used Clonezilla to clone my old hard drive to my new SSD.'
  },
  {
    id: 'volatility',
    term: 'Volatility',
    slug: 'volatility',
    definition: 'The Volatility Framework is a completely open collection of tools, implemented in Python under the GNU General Public License, for the extraction of digital artifacts from volatile memory (RAM) samples.',
    example: 'I used Volatility to analyze the memory dump and find evidence of the malware.'
  },
  {
    id: 'ftk',
    term: 'FTK',
    slug: 'ftk',
    definition: 'Forensic Toolkit (FTK) is a computer forensics software made by AccessData.',
    example: 'The forensic investigator used FTK to analyze the hard drive of the suspect\'s computer.'
  },
  {
    id: 'encase',
    term: 'EnCase',
    slug: 'encase',
    definition: 'EnCase is the shared technology within a suite of digital investigations products by Guidance Software. The software is used for forensic, cyber security, security analytics, and e-discovery use.',
    example: 'EnCase is a popular tool among law enforcement for digital forensics.'
  },
  {
    id: 'grc',
    term: 'GRC',
    slug: 'grc',
    definition: 'Governance, Risk Management, and Compliance (GRC) is a structured approach to aligning IT with business objectives, while effectively managing risk and meeting compliance requirements.',
    example: 'Our GRC team is responsible for ensuring that we are compliant with all the relevant regulations.'
  },
  {
    id: 'dlp',
    term: 'DLP',
    slug: 'dlp',
    definition: 'Data Loss Prevention (DLP) is a strategy for making sure that end users do not send sensitive or critical information outside the corporate network.',
    example: 'Our DLP solution automatically blocks emails that contain credit card numbers.'
  },
  {
    id: 'casb',
    term: 'CASB',
    slug: 'casb',
    definition: 'A Cloud Access Security Broker (CASB) is a point of security policy enforcement located between cloud service consumers and cloud service providers to combine and interject enterprise security policies as the cloud-based resources are accessed.',
    example: 'We use a CASB to monitor and control access to our cloud applications.'
  },
  {
    id: 'zero-trust',
    term: 'Zero Trust',
    slug: 'zero-trust',
    definition: 'Zero trust is a security model that assumes no user or device is trusted by default, and requires verification for every access request.',
    example: 'We are moving to a zero-trust architecture, where every request is authenticated and authorized.'
  },
  {
    id: 'least-privilege',
    term: 'Least Privilege',
    slug: 'least-privilege',
    definition: 'The principle of least privilege is an information security concept in which a user is given the minimum levels of access – or permissions – needed to perform his/her job functions.',
    example: 'We follow the principle of least privilege, so users only have access to the data and systems they need to do their jobs.'
  },
  {
    id: 'superuser',
    term: 'Superuser',
    slug: 'superuser',
    definition: 'A superuser is a special user account used for system administration. In Unix-like systems, the superuser is also called root.',
    example: 'I had to log in as the superuser to make changes to the system configuration.'
  },
  {
    id: 'rooting',
    term: 'Rooting',
    slug: 'rooting',
    definition: 'Rooting is the process of allowing users of smartphones, tablets and other devices running the Android mobile operating system to attain privileged control (known as root access) over various Android subsystems.',
    example: 'I rooted my old Android phone to install a custom ROM.'
  },
  {
    id: 'jailbreak',
    term: 'Jailbreak',
    slug: 'jailbreak',
    definition: 'Jailbreaking is the process of removing software restrictions imposed by Apple on devices running iOS and iPadOS.',
    example: 'I jailbroke my old iPhone so I could install apps from outside the App Store.'
  },
  {
    id: 'bootloader',
    term: 'Bootloader',
    slug: 'bootloader',
    definition: 'A bootloader is a computer program that is responsible for booting a computer.',
    example: 'I unlocked the bootloader on my phone so I could install a custom ROM.'
  },
  {
    id: 'fastboot',
    term: 'Fastboot',
    slug: 'fastboot',
    definition: 'Fastboot is a protocol that can be used to re-flash partitions on your device (update the flash file system). It is this small tool that comes with the Android SDK (software developer kit) that is an alternative to the recovery mode for doing installations and updates.',
    example: 'I booted my phone into fastboot mode to flash a new recovery image.'
  },
  {
    id: 'edl-mode',
    term: 'EDL Mode',
    slug: 'edl-mode',
    definition: 'Emergency Download (EDL) mode is a special boot mode on Qualcomm-powered devices that can be used to recover a bricked device.',
    example: 'My phone was bricked, but I was able to recover it by booting into EDL mode and flashing the stock firmware.'
  },
  {
    id: 'odin',
    term: 'Odin',
    slug: 'odin',
    definition: 'Odin is a utility software developed and used by Samsung internally which can be used to flash a custom recovery image to a Samsung Android device.',
    example: 'I used Odin to flash a custom ROM on my Samsung phone.'
  },
  {
    id: 'recovery-mode',
    term: 'Recovery Mode',
    slug: 'recovery-mode',
    definition: 'Recovery mode is a special bootable partition on Android devices that can be used to perform system maintenance tasks, such as factory resetting the device or installing updates.',
    example: 'I booted my phone into recovery mode to wipe the cache partition.'
  },
  {
    id: 'twrp',
    term: 'TWRP',
    slug: 'twrp',
    definition: 'Team Win Recovery Project (TWRP) is an open-source software custom recovery image for Android-based devices.',
    example: 'I installed TWRP on my phone so I could easily install custom ROMs and make backups.'
  },
  {
    id: 'rom',
    term: 'ROM',
    slug: 'rom',
    definition: 'In mobile devices, a ROM is a file containing the executable instructions of a mobile device\'s operating system.',
    example: 'I downloaded the latest nightly build of the LineageOS ROM for my phone.'
  },
  {
    id: 'custom-rom',
    term: 'Custom ROM',
    slug: 'custom-rom',
    definition: 'A custom ROM is a modified version of a mobile device\'s operating system.',
    example: 'I installed a custom ROM on my phone to get a stock Android experience.'
  },
  {
    id: 'kernel',
    term: 'Kernel',
    slug: 'kernel',
    definition: 'The kernel is the core of an operating system. It has complete control over everything in the system.',
    example: 'I installed a custom kernel on my phone to get better performance and battery life.'
  },
  {
    id: 'scheduler',
    term: 'Scheduler',
    slug: 'scheduler',
    definition: 'A scheduler is a part of the operating system that decides which process should run at a certain point in time.',
    example: 'The Linux kernel has several different CPU schedulers to choose from.'
  },
  {
    id: 'heap',
    term: 'Heap',
    slug: 'heap',
    definition: 'In computer science, the heap is a region of a computer\'s memory that is not managed automatically for you and is not as tightly managed by the CPU. It is a more free-floating region of memory.',
    example: 'In C++, I have to manually manage the memory I allocate on the heap.'
  },
  {
    id: 'process-stack',
    term: 'Process Stack',
    slug: 'process-stack',
    definition: 'A process stack is a region of a computer\'s memory that stores temporary variables created by a function. The stack is a "LIFO" (last in, first out) data structure.',
    example: 'When a function is called, its local variables are pushed onto the process stack.'
  },
  {
    id: 'garbage-collector',
    term: 'Garbage Collector',
    slug: 'garbage-collector',
    definition: 'A garbage collector is a form of automatic memory management. The garbage collector attempts to reclaim memory that was allocated by the program, but is no longer referenced.',
    example: 'Languages like Java and C# have a garbage collector, so I don\'t have to manually manage memory.'
  },
  {
    id: 'thread',
    term: 'Thread',
    slug: 'thread',
    definition: 'A thread is a single sequence of execution within a process. A process can have multiple threads.',
    example: 'My application uses multiple threads to perform different tasks in parallel.'
  },
  {
    id: 'deadlock',
    term: 'Deadlock',
    slug: 'deadlock',
    definition: 'A deadlock is a state in which each member of a group is waiting for another member, including itself, to take action, such as sending a message or more commonly releasing a lock.',
    example: 'The application froze due to a deadlock between two threads.'
  },
  {
    id: 'syscall',
    term: 'Syscall',
    slug: 'syscall',
    definition: 'A system call (syscall) is the programmatic way in which a computer program requests a service from the kernel of the operating system it is executed on.',
    example: 'When I open a file, my program makes a `open` syscall to the operating system.'
  },
  {
    id: 'interrupt',
    term: 'Interrupt',
    slug: 'interrupt',
    definition: 'An interrupt is a signal to the processor emitted by hardware or software indicating an event that needs immediate attention.',
    example: 'When I move my mouse, the mouse hardware sends an interrupt to the CPU.'
  },
  {
    id: 'boot-sector',
    term: 'Boot Sector',
    slug: 'boot-sector',
    definition: 'A boot sector is a sector of a persistent data storage device which contains machine code to be loaded into random-access memory (RAM) and then executed by a computer system\'s built-in firmware.',
    example: 'The MBR is a type of boot sector.'
  },
  {
    id: 'initramfs',
    term: 'Initramfs',
    slug: 'initramfs',
    definition: 'initramfs is the successor of initrd. It is a cpio archive of the initial file system that gets loaded into memory during the Linux startup process.',
    example: 'The initramfs contains all the necessary drivers to mount the root file system.'
  },
  {
    id: 'swapfile',
    term: 'Swapfile',
    slug: 'swapfile',
    definition: 'A swapfile is a file on a hard disk that is used as a temporary location to store information that is not currently being used by the RAM.',
    example: 'I created a swapfile to increase the amount of virtual memory on my system.'
  },
  {
    id: 'paging',
    term: 'Paging',
    slug: 'paging',
    definition: 'Paging is a memory management scheme by which a computer stores and retrieves data from secondary storage for use in main memory. In this scheme, the operating system retrieves data from secondary storage in same-size blocks called pages.',
    example: 'When the system runs out of RAM, it starts paging data to the hard disk.'
  },
  {
    id: 'memory-leak',
    term: 'Memory leak',
    slug: 'memory-leak',
    definition: 'A memory leak is a type of resource leak that occurs when a computer program incorrectly manages memory allocations in such a way that memory which is no longer needed is not released.',
    example: 'The application had a memory leak, and its memory usage would grow over time until it crashed.'
  },
  {
    id: 'buffers',
    term: 'Buffers',
    slug: 'buffers',
    definition: 'A buffer is a region of a physical memory storage used to temporarily store data while it is being moved from one place to another.',
    example: 'The video player uses a buffer to store a few seconds of video ahead of time to ensure smooth playback.'
  },
  {
    id: 'cache-line',
    term: 'Cache line',
    slug: 'cache-line',
    definition: 'A cache line is the smallest unit of data that can be transferred between the main memory and the CPU cache.',
    example: 'When the CPU needs to read a piece of data from RAM, it fetches an entire cache line.'
  },
  {
    id: 'pipeline',
    term: 'Pipeline',
    slug: 'pipeline',
    definition: 'In CPUs, a pipeline is a set of data processing elements connected in series, where the output of one element is the input of the next one. This allows for instruction-level parallelism.',
    example: 'Modern CPUs use a deep pipeline to execute multiple instructions simultaneously.'
  },
  {
    id: 'fpu',
    term: 'FPU',
    slug: 'fpu',
    definition: 'A floating-point unit (FPU) is a part of a computer system specially designed to carry out operations on floating-point numbers.',
    example: 'The CPU\'s FPU is used for all the mathematical calculations involving decimal numbers.'
  },
  {
    id: 'isa',
    term: 'ISA',
    slug: 'isa',
    definition: 'An instruction set architecture (ISA) is an abstract model of a computer. It is also referred to as architecture or computer architecture.',
    example: 'x86 and ARM are two different ISAs.'
  },
  {
    id: 'mmu',
    term: 'MMU',
    slug: 'mmu',
    definition: 'A memory management unit (MMU) is a computer hardware unit having all memory references passed through itself, primarily performing the translation of virtual memory addresses to physical addresses.',
    example: 'The MMU is responsible for managing the virtual memory system.'
  },
  {
    id: 'tlb',
    term: 'TLB',
    slug: 'tlb',
    definition: 'A translation lookaside buffer (TLB) is a memory cache that is used to reduce the time taken to access a user memory location.',
    example: 'The TLB stores recent translations of virtual memory to physical memory.'
  },
  {
    id: 'hyperthreading',
    term: 'Hyperthreading',
    slug: 'hyperthreading',
    definition: 'Hyper-threading is Intel\'s proprietary simultaneous multithreading (SMT) implementation used to improve parallelization of computations performed on x86 microprocessors.',
    example: 'My 4-core CPU shows up as 8 logical cores in the operating system because it has Hyper-threading.'
  },
  {
    id: 'smt',
    term: 'SMT',
    slug: 'smt',
    definition: 'Simultaneous multithreading (SMT) is a technique for improving the overall efficiency of superscalar CPUs with hardware multithreading.',
    example: 'AMD\'s version of SMT allows each CPU core to run two threads simultaneously.'
  },
  {
    id: 'big-little',
    term: 'Big.Little',
    slug: 'big-little',
    definition: 'big.LITTLE is a heterogeneous computing architecture developed by ARM Holdings, coupling relatively battery-saving and slower processor cores (LITTLE) with relatively more powerful and power-hungry ones (big).',
    example: 'Modern Intel processors use a big.LITTLE architecture with Performance-cores and Efficiency-cores.'
  },
  {
    id: 'benchmark',
    term: 'Benchmark',
    slug: 'benchmark',
    definition: 'A benchmark is the act of running a computer program, a set of programs, or other operations, in order to assess the relative performance of an object, normally by running a number of standard tests and trials against it.',
    example: 'I ran a benchmark to see how my new CPU compares to the previous generation.'
  },
  {
    id: 'cinebench',
    term: 'Cinebench',
    slug: 'cinebench',
    definition: 'Cinebench is a cross-platform test suite which tests your computer\'s performance capabilities. It is a popular benchmark for CPUs.',
    example: 'My new CPU got a score of 15000 in Cinebench.'
  },
  {
    id: '3dmark',
    term: '3DMark',
    slug: '3dmark',
    definition: '3DMark is a popular benchmarking tool for measuring the gaming performance of your PC.',
    example: 'I ran 3DMark to see how well my new graphics card would perform in games.'
  },
  {
    id: 'furmark',
    term: 'Furmark',
    slug: 'furmark',
    definition: 'FurMark is a very intensive GPU stress test and benchmark.',
    example: 'I ran FurMark for an hour to make sure my GPU was stable after overclocking.'
  },
  {
    id: 'memtest86',
    term: 'Memtest86',
    slug: 'memtest86',
    definition: 'Memtest86 is the original, free, stand-alone memory testing software for x86 and x86-64 architecture computers.',
    example: 'I ran Memtest86 overnight to check my RAM for errors.'
  },
  {
    id: 'power-plan',
    term: 'Power Plan',
    slug: 'power-plan',
    definition: 'A power plan is a collection of hardware and system settings that manages how your computer uses power.',
    example: 'I switched to the High Performance power plan to get the best performance out of my CPU.'
  },
  {
    id: 'undervolt',
    term: 'Undervolt',
    slug: 'undervolt',
    definition: 'Undervolting is the process of reducing the voltage to your CPU or GPU, which can reduce heat and power consumption without sacrificing performance.',
    example: 'I undervolted my laptop\'s CPU to get better battery life.'
  },
  {
    id: 'overvolt',
    term: 'Overvolt',
    slug: 'overvolt',
    definition: 'Overvolting is the process of increasing the voltage to your CPU or GPU, which can help to stabilize an overclock but also increases heat and power consumption.',
    example: 'I had to overvolt my CPU to get it stable at 5.0 GHz.'
  },
  {
    id: 'overclock',
    term: 'Overclock',
    slug: 'overclock',
    definition: 'Overclocking is the action of increasing a component\'s clock rate, running it at a higher speed than it was designed to run.',
    example: 'I overclocked my CPU to get better performance in games.'
  },
  {
    id: 'underclock',
    term: 'Underclock',
    slug: 'underclock',
    definition: 'Underclocking is the action of decreasing a component\'s clock rate, running it at a lower speed than it was designed to run. This can be done to reduce heat and power consumption.',
    example: 'I underclocked my GPU to make my computer quieter.'
  },
  {
    id: 'curve-optimizer',
    term: 'Curve Optimizer',
    slug: 'curve-optimizer',
    definition: 'Curve Optimizer is a feature on AMD Ryzen processors that allows you to fine-tune the voltage curve of each individual core, which can help to improve performance and reduce power consumption.',
    example: 'I used the Curve Optimizer to undervolt my CPU and get better performance.'
  },
  {
    id: 'thermal-pad-2',
    term: 'Thermal Pad',
    slug: 'thermal-pad-2',
    definition: 'A thermal pad is a pre-formed square or rectangle of solid material (often paraffin wax or silicone based) commonly found on the underside of heatsinks to aid the conduction of heat away from the component being cooled and into the heatsink.',
    example: 'I replaced the thermal pads on my GPU\'s VRAM to improve cooling.'
  },
  {
    id: 'cold-boot-2',
    term: 'Cold Boot',
    slug: 'cold-boot-2',
    definition: 'A cold boot is the process of starting a computer from a powered-down or off state.',
    example: 'A cold boot is sometimes necessary to fix certain hardware issues.'
  },
  {
    id: 'warm-boot-2',
    term: 'Warm Boot',
    slug: 'warm-boot-2',
    definition: 'A warm boot is the process of restarting a computer that is already on.',
    example: 'A warm boot is faster than a cold boot because it doesn\'t have to go through the full POST process.'
  },
  {
    id: 'soft-reset',
    term: 'Soft Reset',
    slug: 'soft-reset',
    definition: 'A soft reset is the process of restarting a device without cutting its power, such as by using the "Restart" option in the operating system.',
    example: 'I performed a soft reset on my phone to fix a minor software glitch.'
  },
  {
    id: 'hard-reset',
    term: 'Hard Reset',
    slug: 'hard-reset',
    definition: 'A hard reset is the process of restarting a device by cutting its power, such as by holding down the power button or unplugging it.',
    example: 'My computer was frozen, so I had to perform a hard reset.'
  },
  {
    id: 'safe-mode',
    term: 'Safe Mode',
    slug: 'safe-mode',
    definition: 'Safe mode is a diagnostic mode of a computer operating system. It is intended to help fix most, if not all, problems within an operating system. It is also widely used for removing rogue security software.',
    example: 'I booted into safe mode to uninstall a problematic driver.'
  },
  {
    id: 'bios-flash',
    term: 'BIOS Flash',
    slug: 'bios-flash',
    definition: 'A BIOS flash is the process of updating the firmware of a computer\'s BIOS.',
    example: 'I had to flash the BIOS to add support for the new CPU.'
  },
  {
    id: 'dump-file',
    term: 'Dump File',
    slug: 'dump-file',
    definition: 'A dump file is a file that contains a record of the state of a program at a specific time, generally when the program has crashed.',
    example: 'The application created a dump file when it crashed, which I sent to the developers to help them debug the issue.'
  },
  {
    id: 'core-dump',
    term: 'Core Dump',
    slug: 'core-dump',
    definition: 'A core dump is the recorded state of the working memory of a computer program at a specific time, generally when the program has terminated abnormally (crashed).',
    example: 'I analyzed the core dump to find the cause of the crash.'
  },
  {
    id: 'minidump',
    term: 'Minidump',
    slug: 'minidump',
    definition: 'A minidump is a smaller version of a crash dump that contains only the most essential information needed to debug a crash.',
    example: 'Windows created a minidump when the blue screen of death occurred.'
  },
  {
    id: 'event-viewer',
    term: 'Event Viewer',
    slug: 'event-viewer',
    definition: 'Event Viewer is a component of Microsoft\'s Windows NT line of operating systems that lets administrators and users view the event logs on a local or remote machine.',
    example: 'I checked the Event Viewer to find the error message that was causing the application to crash.'
  },
  {
    id: 'pnp',
    term: 'PnP',
    slug: 'pnp',
    definition: 'Plug and Play (PnP) is a standard for the connection of peripherals to personal computers, whereby a device can be added to a computer system and be ready to work with, more or less, minimal user intervention.',
    example: 'USB is a PnP interface, so I can just plug in my mouse and it works right away.'
  },
  {
    id: 'hotplug',
    term: 'Hotplug',
    slug: 'hotplug',
    definition: 'Hot-plugging is the ability to add and remove devices to a computer system while the computer is running.',
    example: 'USB and Thunderbolt are hot-pluggable interfaces.'
  },
  {
    id: 'irq',
    term: 'IRQ',
    slug: 'irq',
    definition: 'An Interrupt Request (IRQ) is a hardware signal sent to the processor that temporarily stops a running program and allows a special program, an interrupt handler, to run instead.',
    example: 'In the old days, you sometimes had to manually assign IRQs to your expansion cards to avoid conflicts.'
  },
  {
    id: 'dma',
    term: 'DMA',
    slug: 'dma',
    definition: 'Direct Memory Access (DMA) is a feature of computer systems that allows certain hardware subsystems to access main system memory (RAM) independently of the central processing unit (CPU).',
    example: 'DMA allows the hard drive to transfer data directly to RAM without involving the CPU, which improves performance.'
  },
  {
    id: 'bus-speed',
    term: 'Bus Speed',
    slug: 'bus-speed',
    definition: 'The bus speed is the speed at which data is transferred between the CPU and other components on the motherboard.',
    example: 'The bus speed of this motherboard is 100 MHz.'
  },
  {
    id: 'latency-timer',
    term: 'Latency Timer',
    slug: 'latency-timer',
    definition: 'The Latency Timer is a setting for PCI devices that determines how long a device can hold onto the PCI bus before it has to let another device use it.',
    example: 'I had to adjust the latency timer for my sound card to fix some audio crackling issues.'
  },
  {
    id: 'bottleneck',
    term: 'Bottleneck',
    slug: 'bottleneck',
    definition: 'A bottleneck is a point of congestion in a system that limits its overall performance.',
    example: 'My fast CPU is being held back by my slow hard drive; it\'s a classic bottleneck.'
  },
  {
    id: 'throttle',
    term: 'Throttle',
    slug: 'throttle',
    definition: 'Throttling is the intentional slowing or speeding of a service to manage its use and performance.',
    example: 'My CPU is throttling because it is getting too hot.'
  },
  {
    id: 'power-limit-2',
    term: 'Power Limit',
    slug: 'power-limit-2',
    definition: 'The power limit is the maximum amount of power that a CPU or GPU is allowed to draw.',
    example: 'I increased the power limit on my GPU to get a higher overclock.'
  },
  {
    id: 'pl1-pl2',
    term: 'PL1/PL2',
    slug: 'pl1-pl2',
    definition: 'PL1 and PL2 are power limit states for Intel CPUs. PL1 is the long-term power limit, while PL2 is the short-term boost power limit.',
    example: 'My CPU can boost to a high clock speed for a short period of time, thanks to its high PL2 power limit.'
  },
  {
    id: 'vdroop',
    term: 'Vdroop',
    slug: 'vdroop',
    definition: 'Vdroop is a phenomenon where the voltage supplied to the CPU drops slightly when it is under a heavy load.',
    example: 'I had to enable Load-Line Calibration to counteract the Vdroop and get my overclock stable.'
  },
  {
    id: 'load-line',
    term: 'Load Line',
    slug: 'load-line',
    definition: 'Load-Line Calibration (LLC) is a BIOS feature that helps to counteract Vdroop and maintain a stable voltage to the CPU under load.',
    example: 'I set the LLC to a medium level to get a stable overclock without overvolting the CPU too much.'
  },
  {
    id: 'nb-voltage',
    term: 'NB Voltage',
    slug: 'nb-voltage',
    definition: 'The Northbridge Voltage (NB Voltage) is the voltage supplied to the Northbridge chipset on a motherboard.',
    example: 'I had to increase the NB voltage to get my high-speed RAM stable.'
  },
  {
    id: 'sb-voltage',
    term: 'SB Voltage',
    slug: 'sb-voltage',
    definition: 'The Southbridge Voltage (SB Voltage) is the voltage supplied to the Southbridge chipset on a motherboard.',
    example: 'Adjusting the SB voltage is rarely necessary for overclocking.'
  },
  {
    id: 'qd1',
    term: 'QD1',
    slug: 'qd1',
    definition: 'Queue Depth 1 (QD1) is a measure of storage performance that represents a workload with a single outstanding command at a time. It is a good indicator of real-world performance for typical desktop use.',
    example: 'This SSD has excellent QD1 read speeds, which makes it feel very responsive in everyday tasks.'
  },
  {
    id: 'chunk-size',
    term: 'Chunk Size',
    slug: 'chunk-size',
    definition: 'The chunk size is the size of the blocks of data that are written to a RAID array at one time.',
    example: 'I set a larger chunk size for my RAID array to improve performance for large file transfers.'
  },
  {
    id: 'block-size',
    term: 'Block Size',
    slug: 'block-size',
    definition: 'The block size is the smallest unit of data that can be written to a storage device.',
    example: 'I formatted my hard drive with a 4K block size.'
  },
  {
    id: 'sector',
    term: 'Sector',
    slug: 'sector',
    definition: 'A sector is a subdivision of a track on a magnetic disk or optical disc.',
    example: 'My hard drive is starting to get bad sectors, so I need to back it up and replace it.'
  },
  {
    id: 'partition-table',
    term: 'Partition Table',
    slug: 'partition-table',
    definition: 'A partition table is a table maintained on disk by the operating system describing the partitions on that disk.',
    example: 'The partition table was corrupted, so the operating system couldn\'t see any of the partitions on the drive.'
  },
  {
    id: 'chs',
    term: 'CHS',
    slug: 'chs',
    definition: 'Cylinder-head-sector (CHS) is an early method for giving addresses to each physical block of data on a hard disk drive.',
    example: 'Modern hard drives use Logical Block Addressing (LBA) instead of CHS.'
  },
  {
    id: 's-m-a-r-t-flags',
    term: 'S.M.A.R.T Flags',
    slug: 's-m-a-r-t-flags',
    definition: 'S.M.A.R.T. flags are the individual attributes that are monitored by the S.M.A.R.T. system to determine the health of a hard drive.',
    example: 'The S.M.A.R.T. flags for my hard drive were showing a high number of reallocated sectors, which is a sign of impending failure.'
  },
  {
    id: 'trim',
    term: 'TRIM',
    slug: 'trim',
    definition: 'TRIM is a command that allows an operating system to inform a solid-state drive (SSD) which blocks of data are no longer considered in use and can be wiped internally.',
    example: 'I made sure that TRIM was enabled for my SSD to maintain its performance over time.'
  },
  {
    id: 'overprovision',
    term: 'Overprovision',
    slug: 'overprovision',
    definition: 'Over-provisioning is the practice of reserving a portion of an SSD\'s capacity for the controller to use for tasks like wear leveling and garbage collection.',
    example: 'I overprovisioned my SSD by 10% to improve its performance and endurance.'
  },
  {
    id: 'wear-leveling',
    term: 'Wear Leveling',
    slug: 'wear-leveling',
    definition: 'Wear leveling is a technique for prolonging the service life of some kinds of erasable computer storage media, such as Flash memory used in solid-state drives (SSDs).',
    example: 'The SSD\'s controller uses wear leveling to evenly distribute writes across all the memory cells.'
  },
  {
    id: 'temp-sensor',
    term: 'Temp Sensor',
    slug: 'temp-sensor',
    definition: 'A temp sensor is a device that measures the temperature of a component, such as a CPU or GPU.',
    example: 'My motherboard has several temp sensors that I can monitor in the BIOS.'
  },
  {
    id: 'bus-width',
    term: 'Bus Width',
    slug: 'bus-width',
    definition: 'The bus width is the number of bits that can be transferred at one time between the CPU and other components.',
    example: 'A 64-bit CPU has a 64-bit bus width.'
  },
  {
    id: 'chipset',
    term: 'Chipset',
    slug: 'chipset',
    definition: 'A chipset is a set of electronic components in an integrated circuit known as a "Data Flow Management System" that manages the data flow between the processor, memory and peripherals.',
    example: 'The Z690 chipset supports DDR5 memory and PCIe 5.0.'
  },
  {
    id: 'module',
    term: 'Module',
    slug: 'module',
    definition: 'A module is a self-contained unit of software or hardware.',
    example: 'I installed a new RAM module to upgrade my computer\'s memory.'
  },
  {
    id: 'header',
    term: 'Header',
    slug: 'header',
    definition: 'A header is a connector on a motherboard that allows you to connect other components, such as case fans or USB ports.',
    example: 'I connected the front panel USB cable to the USB header on the motherboard.'
  },
  {
    id: 'jumper',
    term: 'Jumper',
    slug: 'jumper',
    definition: 'A jumper is a short length of conductor used to close, open or bypass part of an electronic circuit. They are typically used for setting up or configuring printed circuit boards.',
    example: 'I had to move a jumper on the motherboard to clear the CMOS.'
  },
  {
    id: 'standoff',
    term: 'Standoff',
    slug: 'standoff',
    definition: 'A standoff is a small piece of hardware used to mount a motherboard in a computer case, creating a gap between the motherboard and the case to prevent short circuits.',
    example: 'I installed the motherboard standoffs in the case before mounting the motherboard.'
  },
  {
    id: 'mesh-panel',
    term: 'Mesh Panel',
    slug: 'mesh-panel',
    definition: 'A mesh panel is a type of computer case panel that has a large number of small holes, allowing for good airflow.',
    example: 'I chose a case with a mesh front panel to get the best possible cooling.'
  },
  {
    id: 'molex',
    term: 'Molex',
    slug: 'molex',
    definition: 'A Molex connector is a type of power connector that was commonly used in older computers to power components like hard drives and case fans.',
    example: 'I had to use a SATA to Molex adapter to power my old case fan.'
  },
  {
    id: 'daisy-chain',
    term: 'Daisy Chain',
    slug: 'daisy-chain',
    definition: 'A daisy chain is a wiring scheme in which multiple devices are wired together in sequence or in a ring.',
    example: 'I daisy-chained my case fans together so I only had to use one fan header on the motherboard.'
  },
  {
    id: 'pwm',
    term: 'PWM',
    slug: 'pwm',
    definition: 'Pulse Width Modulation (PWM) is a technique for getting analog results with digital means. It is often used to control the speed of fans.',
    example: 'My new case fans are PWM, so I can control their speed precisely in the BIOS.'
  },
  {
    id: 'dc-mode',
    term: 'DC Mode',
    slug: 'dc-mode',
    definition: 'DC mode is a method of controlling fan speed by varying the voltage supplied to the fan.',
    example: 'My older case fans are not PWM, so I have to set them to DC mode in the BIOS.'
  },
  {
    id: 'bios-lock',
    term: 'BIOS Lock',
    slug: 'bios-lock',
    definition: 'A BIOS lock is a feature that prevents the BIOS from being flashed with a modified or unofficial version.',
    example: 'I had to disable the BIOS lock to install a custom BIOS on my motherboard.'
  },
  {
    id: 'secure-boot',
    term: 'Secure Boot',
    slug: 'secure-boot',
    definition: 'Secure Boot is a security standard developed by members of the PC industry to help make sure that a device boots using only software that is trusted by the Original Equipment Manufacturer (OEM).',
    example: 'I had to disable Secure Boot to install Linux on my new laptop.'
  },
  {
    id: 'tpm-2-0',
    term: 'TPM 2.0',
    slug: 'tpm-2-0',
    definition: 'Trusted Platform Module 2.0 (TPM 2.0) is a specification for a secure cryptoprocessor, a dedicated microcontroller designed to secure hardware through integrated cryptographic keys.',
    example: 'Windows 11 requires a TPM 2.0 module to be enabled for installation.'
  },
  {
    id: 'kernel-mode',
    term: 'Kernel Mode',
    slug: 'kernel-mode',
    definition: 'Kernel mode is a privileged mode of operation in which the processor has unrestricted access to all system resources.',
    example: 'Device drivers run in kernel mode.'
  },
  {
    id: 'user-mode',
    term: 'User Mode',
    slug: 'user-mode',
    definition: 'User mode is a non-privileged mode of operation in which the processor has restricted access to system resources.',
    example: 'Applications run in user mode.'
  },
  {
    id: 'runtime',
    term: 'Runtime',
    slug: 'runtime',
    definition: 'A runtime environment is the environment in which a program or application is executed.',
    example: 'The Java Runtime Environment (JRE) is required to run Java applications.'
  },
  {
    id: 'build',
    term: 'Build',
    slug: 'build',
    definition: 'A build is the process of converting source code files into standalone software artifact that can be run on a computer.',
    example: 'The build failed because of a syntax error in one of the source files.'
  },
  {
    id: 'hotfix',
    term: 'Hotfix',
    slug: 'hotfix',
    definition: 'A hotfix is a software update that is intended to fix a specific bug or security vulnerability.',
    example: 'Microsoft released a hotfix to patch the critical security vulnerability.'
  },
  {
    id: 'rollback',
    term: 'Rollback',
    slug: 'rollback',
    definition: 'A rollback is the process of restoring a system to a previous state.',
    example: 'The update caused some issues, so I had to perform a rollback to the previous version.'
  },
  {
    id: 'breakpoint',
    term: 'Breakpoint',
    slug: 'breakpoint',
    definition: 'A breakpoint is an intentional stopping or pausing place in a program, put in place for debugging purposes.',
    example: 'I set a breakpoint in my code to inspect the value of a variable at a certain point in the execution.'
  },
  {
    id: 'profiler',
    term: 'Profiler',
    slug: 'profiler',
    definition: 'A profiler is a software analysis tool that measures the performance of a program, such as its memory or time complexity.',
    example: 'I used a profiler to find the bottlenecks in my code.'
  },
  {
    id: 'observer',
    term: 'Observer',
    slug: 'observer',
    definition: 'The observer pattern is a software design pattern in which an object, named the subject, maintains a list of its dependents, called observers, and notifies them automatically of any state changes, usually by calling one of their methods.',
    example: 'I used the observer pattern to update the UI whenever the data model changed.'
  },
  {
    id: 'dependency-tree',
    term: 'Dependency Tree',
    slug: 'dependency-tree',
    definition: 'A dependency tree is a hierarchical structure that shows the dependencies of a software project.',
    example: 'I used a tool to visualize the dependency tree of my project to see all the libraries it was using.'
  },
  {
    id: 'stub-file',
    term: 'Stub File',
    slug: 'stub-file',
    definition: 'A stub file is a file containing empty or incomplete function or class definitions, which can be used as a placeholder for yet-to-be-developed code.',
    example: 'I created a stub file for the new module so I could start writing the code that depends on it.'
  },
  {
    id: 'schema',
    term: 'Schema',
    slug: 'schema',
    definition: 'A schema is a blueprint or model for the structure of a database or other data format.',
    example: 'I defined the schema for my database tables before I started writing any code.'
  },
  {
    id: 'query',
    term: 'Query',
    slug: 'query',
    definition: 'A query is a request for data or information from a database table or combination of tables.',
    example: 'I wrote a SQL query to get all the users who have signed up in the last month.'
  },
  {
    id: 'cursor',
    term: 'Cursor',
    slug: 'cursor',
    definition: 'A database cursor is a control structure that enables traversal over the records in a database.',
    example: 'I used a cursor to iterate through the results of my query.'
  },
  {
    id: 'commit',
    term: 'Commit',
    slug: 'commit',
    definition: 'In the context of databases, a commit is the process of making a set of tentative changes permanent.',
    example: 'I committed the transaction after I was sure all the changes were correct.'
  },
  {
    id: 'dead-tuple',
    term: 'Dead Tuple',
    slug: 'dead-tuple',
    definition: 'In PostgreSQL, a dead tuple is a version of a row that has been deleted or updated and is no longer visible to any active transaction.',
    example: 'The database vacuuming process cleans up dead tuples to reclaim disk space.'
  },
  {
    id: 'index-scan',
    term: 'Index Scan',
    slug: 'index-scan',
    definition: 'An index scan is a database operation that uses an index to find the requested data, which is much faster than a full table scan.',
    example: 'The query was fast because the database was able to use an index scan.'
  },
  {
    id: 'full-scan',
    term: 'Full Scan',
    slug: 'full-scan',
    definition: 'A full table scan is a database operation that reads every row in a table to find the requested data. It is generally slow and should be avoided if possible.',
    example: 'The query was slow because the database had to perform a full table scan.'
  },
  {
    id: 'replication',
    term: 'Replication',
    slug: 'replication',
    definition: 'Replication is the process of sharing information so as to ensure consistency between redundant resources, such as software or hardware components, to improve reliability, fault-tolerance, or accessibility.',
    example: 'We set up database replication to a standby server for high availability.'
  },
  {
    id: 'sharding',
    term: 'Sharding',
    slug: 'sharding',
    definition: 'Sharding is a type of database partitioning that separates very large databases into smaller, faster, more easily managed parts called data shards.',
    example: 'We sharded our database by user ID to distribute the load across multiple servers.'
  },
  {
    id: 'hot-backup',
    term: 'Hot Backup',
    slug: 'hot-backup',
    definition: 'A hot backup is a backup of a database that is taken while the database is online and in use.',
    example: 'We perform a hot backup of our database every hour.'
  },
  {
    id: 'seed-node',
    term: 'Seed Node',
    slug: 'seed-node',
    definition: 'A seed node is an initial node in a peer-to-peer network that is used to bootstrap new nodes joining the network.',
    example: 'I configured my new node to connect to a seed node to join the network.'
  },
  {
    id: 'leader-node',
    term: 'Leader Node',
    slug: 'leader-node',
    definition: 'In a distributed system, a leader node is a node that is responsible for coordinating the other nodes in the cluster.',
    example: 'The leader node is responsible for assigning tasks to the worker nodes.'
  },
  {
    id: 'worker-node',
    term: 'Worker Node',
    slug: 'worker-node',
    definition: 'In a distributed system, a worker node is a node that performs tasks assigned to it by the leader node.',
    example: 'I added more worker nodes to the cluster to increase its processing capacity.'
  },
  {
    id: 'health-check',
    term: 'Health Check',
    slug: 'health-check',
    definition: 'A health check is a test to determine if a system is running correctly.',
    example: 'The load balancer performs a health check on each server to make sure it is able to handle requests.'
  },
  {
    id: 'logs',
    term: 'Logs',
    slug: 'logs',
    definition: 'A log file is a file that records either events that occur in an operating system or other software runs, or messages between different users of a communication software.',
    example: 'I checked the web server logs to see who had accessed the website.'
  },
  {
    id: 'metrics',
    term: 'Metrics',
    slug: 'metrics',
    definition: 'Metrics are quantitative measurements of a system\'s behavior.',
    example: 'I am monitoring the CPU usage and memory consumption metrics of the server.'
  },
  {
    id: 'telemetry',
    term: 'Telemetry',
    slug: 'telemetry',
    definition: 'Telemetry is the automatic recording and transmission of data from remote or inaccessible sources to an IT system in a different location for monitoring and analysis.',
    example: 'The application sends telemetry data to our servers to help us understand how it is being used.'
  },
  {
    id: 'trigger',
    term: 'Trigger',
    slug: 'trigger',
    definition: 'A trigger is a set of actions that are automatically performed in response to a specific event.',
    example: 'I created a trigger that sends an email notification whenever a new record is inserted into the database.'
  },
  {
    id: 'hook',
    term: 'Hook',
    slug: 'hook',
    definition: 'A hook is a mechanism by which a program can intercept events or messages and perform some action.',
    example: 'I used a Git hook to run my unit tests before every commit.'
  },
  {
    id: 'mobo',
    term: 'Mobo',
    slug: 'mobo',
    definition: 'Short for motherboard, the main printed circuit board in a computer.',
    example: 'I need to upgrade my mobo to support the new CPU.'
  },
  {
    id: 'psu-rail',
    term: 'PSU Rail',
    slug: 'psu-rail',
    definition: 'A power rail is a dedicated voltage line from a power supply unit (PSU).',
    example: 'High-end graphics cards often require a strong 12V PSU rail to operate stably.'
  },
  {
    id: 'eco-mode',
    term: 'ECO Mode',
    slug: 'eco-mode',
    definition: 'A low-power mode on a device, like a PSU or monitor, designed to reduce energy consumption.',
    example: 'I enabled ECO mode on my monitor to save power when I\'m not using the computer.'
  },
  {
    id: 'burst-mode',
    term: 'Burst Mode',
    slug: 'burst-mode',
    definition: 'A temporary speed boost in a component, like a CPU or SSD, that allows it to run at a higher speed for a short period.',
    example: 'The SSD uses a burst mode to achieve high write speeds for small files.'
  },
  {
    id: 'turbo-boost',
    term: 'Turbo Boost',
    slug: 'turbo-boost',
    definition: 'Intel\'s technology for automatically overclocking a CPU to a higher frequency when thermal and power conditions allow.',
    example: 'My CPU automatically enabled Turbo Boost to handle the demanding application.'
  },
  {
    id: 'avx',
    term: 'AVX',
    slug: 'avx',
    definition: 'Advanced Vector Extensions (AVX) are instruction set extensions for x86 processors that can significantly speed up tasks involving floating-point calculations.',
    example: 'Video encoding software often uses AVX instructions to accelerate the rendering process.'
  },
  {
    id: 'sse',
    term: 'SSE',
    slug: 'sse',
    definition: 'Streaming SIMD Extensions (SSE) are an earlier instruction set extension for x86 processors, also used to accelerate multimedia and graphics tasks.',
    example: 'Older games and applications may rely on SSE for performance improvements.'
  },
  {
    id: 'fma',
    term: 'FMA',
    slug: 'fma',
    definition: 'Fused Multiply-Add (FMA) is a CPU instruction that performs a multiplication and an addition in a single step, improving performance and precision.',
    example: 'Scientific and financial applications benefit greatly from CPUs that support FMA instructions.'
  },
  {
    id: 'risc',
    term: 'RISC',
    slug: 'risc',
    definition: 'A Reduced Instruction Set Computer (RISC) is a CPU design philosophy that favors a smaller, simpler set of instructions that can be executed very quickly.',
    example: 'ARM processors, used in most smartphones, are based on a RISC architecture.'
  },
  {
    id: 'cisc',
    term: 'CISC',
    slug: 'cisc',
    definition: 'A Complex Instruction Set Computer (CISC) is a CPU design philosophy that uses a large set of complex instructions.',
    example: 'Modern x86 processors from Intel and AMD are based on a CISC architecture.'
  },
  {
    id: 'microcode',
    term: 'Microcode',
    slug: 'microcode',
    definition: 'Microcode is low-level code that resides on a CPU and translates complex machine instructions into simpler operations that the hardware can execute.',
    example: 'Intel released a microcode update to patch the Spectre vulnerability.'
  },
  {
    id: 'ccd',
    term: 'CCD',
    slug: 'ccd',
    definition: 'A Core Complex Die (CCD) is a physical chiplet in an AMD Ryzen processor that contains a group of CPU cores and their associated cache.',
    example: 'My Ryzen 9 CPU has two CCDs, each with 8 cores.'
  },
  {
    id: 'ccx',
    term: 'CCX',
    slug: 'ccx',
    definition: 'A Core Complex (CCX) is a module within an AMD CPU that typically consists of a set of cores and a shared L3 cache.',
    example: 'In older Ryzen CPUs, a CCX contained 4 cores.'
  },
  {
    id: 'l3-slice',
    term: 'L3 Slice',
    slug: 'l3-slice',
    definition: 'An L3 Slice is a segment of the L3 cache on a CPU. The total L3 cache is made up of multiple slices.',
    example: 'Each core on this CPU has access to its own L3 slice.'
  },
  {
    id: 'infinity-fabric',
    term: 'Infinity Fabric',
    slug: 'infinity-fabric',
    definition: 'Infinity Fabric is AMD\'s proprietary high-speed interconnect used for communication between CPU chiplets, and between the CPU and GPU.',
    example: 'The speed of the Infinity Fabric is tied to the memory clock on Ryzen systems.'
  },
  {
    id: 'qpi',
    term: 'QPI',
    slug: 'qpi',
    definition: 'QuickPath Interconnect (QPI) is a point-to-point processor interconnect developed by Intel to replace the Front Side Bus in its high-end processors.',
    example: 'In a dual-socket server, the two CPUs communicate with each other over a QPI link.'
  },
  {
    id: 'optane',
    term: 'Optane',
    slug: 'optane',
    definition: 'Intel Optane is a brand of storage technology that can be used as either a very fast SSD or as a cache to accelerate slower hard drives.',
    example: 'I used an Optane module to speed up my large mechanical hard drive.'
  },
  {
    id: 'memory-map',
    term: 'Memory Map',
    slug: 'memory-map',
    definition: 'A memory map is a description of how memory is laid out and addressed in a computer system.',
    example: 'The kernel uses the memory map provided by the BIOS to know where it can load itself.'
  },
  {
    id: 'instruction-pointer',
    term: 'Instruction Pointer',
    slug: 'instruction-pointer',
    definition: 'The instruction pointer is a register in a CPU that contains the memory address of the next instruction to be executed.',
    example: 'The debugger showed that the instruction pointer was at an invalid memory address, which caused the crash.'
  },
  {
    id: 'thermal-limit',
    term: 'Thermal Limit',
    slug: 'thermal-limit',
    definition: 'The thermal limit is the maximum temperature a component, like a CPU or GPU, can reach before it starts to throttle its performance to prevent damage.',
    example: 'My CPU hit its thermal limit of 100°C and started to throttle.'
  },
  {
    id: 'prochot',
    term: 'PROCHOT',
    slug: 'prochot',
    definition: 'PROCHOT (Processor Hot) is a signal on Intel CPUs that is activated when the processor reaches its maximum operating temperature, causing it to throttle.',
    example: 'The monitoring software showed that PROCHOT was being triggered, which explained the performance loss.'
  },
  {
    id: 'core-parking',
    term: 'Core Parking',
    slug: 'core-parking',
    definition: 'Core parking is a power-saving feature in Windows where the operating system will put idle CPU cores into a deep sleep state.',
    example: 'I disabled core parking to get more consistent performance in games.'
  },
  {
    id: 'turbo-ratio',
    term: 'Turbo Ratio',
    slug: 'turbo-ratio',
    definition: 'The turbo ratio, or multiplier, is the value that is multiplied by the base clock speed to determine the CPU\'s turbo boost frequency.',
    example: 'I set the turbo ratio to 50 to overclock my CPU to 5.0 GHz.'
  },
  {
    id: 'ldpc',
    term: 'LDPC',
    slug: 'ldpc',
    definition: 'Low-Density Parity-Check (LDPC) is a type of error-correcting code used in modern technologies like Wi-Fi and SSDs to ensure data integrity.',
    example: 'The new SSD uses LDPC to improve its reliability and endurance.'
  },
  {
    id: 'die-shot',
    term: 'Die Shot',
    slug: 'die-shot',
    definition: 'A die shot is a photograph of the internal layout of an integrated circuit (chip).',
    example: 'The tech website published a detailed die shot of the new CPU, revealing its internal architecture.'
  },
  {
    id: 'silicon-lottery',
    term: 'Silicon Lottery',
    slug: 'silicon-lottery',
    definition: 'A slang term referring to the fact that manufacturing variations cause chips of the same model to have different performance characteristics, especially in overclocking.',
    example: 'I won the silicon lottery; my CPU can overclock much higher than average.'
  },
  {
    id: 'sample-unit',
    term: 'Sample Unit',
    slug: 'sample-unit',
    definition: 'A sample unit is a pre-release version of a hardware product sent to reviewers and partners for testing.',
    example: 'The review site got an early sample unit of the new graphics card.'
  },
  {
    id: 'es-chip',
    term: 'ES Chip',
    slug: 'es-chip',
    definition: 'An Engineering Sample (ES) chip is a very early, pre-production version of a CPU or other chip, often with bugs and lower clock speeds.',
    example: 'I found a cheap ES chip on eBay, but it\'s not guaranteed to work correctly.'
  },
  {
    id: 'qs-chip',
    term: 'QS Chip',
    slug: 'qs-chip',
    definition: 'A Qualification Sample (QS) chip is a late-stage, pre-production chip that is very close to the final retail version.',
    example: 'The QS chip performed almost identically to the final retail version.'
  },
  {
    id: 'whql',
    term: 'WHQL',
    slug: 'whql',
    definition: 'Windows Hardware Quality Labs (WHQL) is a testing process by Microsoft that involves running a series of tests on third-party hardware or software, and then submitting the log files from these tests to Microsoft for review.',
    example: 'I downloaded the WHQL certified driver for my graphics card to ensure maximum stability.'
  },
  {
    id: 'inf-file',
    term: 'INF File',
    slug: 'inf-file',
    definition: 'An INF file is a text file that contains all the information that device installation components used to install a driver.',
    example: 'I had to manually install the driver by right-clicking the INF file and selecting "Install".'
  },
  {
    id: 'driver-stack',
    term: 'Driver Stack',
    slug: 'driver-stack',
    definition: 'A driver stack is the layered arrangement of drivers that handle the I/O for a particular device.',
    example: 'A problem in the network driver stack was causing the blue screens.'
  },
  {
    id: 'driver-signature',
    term: 'Driver Signature',
    slug: 'driver-signature',
    definition: 'A driver signature is a digital signature that is used to verify the identity of the software publisher and to ensure that the driver has not been tampered with.',
    example: 'Windows requires all drivers to have a valid driver signature to be installed.'
  },
  {
    id: 'wddm',
    term: 'WDDM',
    slug: 'wddm',
    definition: 'The Windows Display Driver Model (WDDM) is the graphic driver architecture for video card drivers running Microsoft Windows versions beginning with Windows Vista.',
    example: 'WDDM 2.0 introduced significant performance improvements for graphics-intensive applications.'
  },
  {
    id: 'directml',
    term: 'DirectML',
    slug: 'directml',
    definition: 'DirectML is a high-performance, hardware-accelerated DirectX 12 library for machine learning on Windows.',
    example: 'The new photo editing software uses DirectML to accelerate its AI-powered features.'
  },
  {
    id: 'vsync',
    term: 'VSync',
    slug: 'vsync',
    definition: 'Vertical Sync (VSync) is a graphics technology that synchronizes the frame rate of a game with a monitor\'s refresh rate to prevent screen tearing.',
    example: 'I enabled VSync to get rid of the annoying screen tearing.'
  },
  {
    id: 'gsync',
    term: 'GSync',
    slug: 'gsync',
    definition: 'G-Sync is NVIDIA\'s proprietary adaptive sync technology that allows a monitor\'s refresh rate to dynamically match the frame rate of the GPU, eliminating tearing and stuttering.',
    example: 'My new monitor has a G-Sync module, which makes games feel incredibly smooth.'
  },
  {
    id: 'freesync',
    term: 'FreeSync',
    slug: 'freesync',
    definition: 'FreeSync is AMD\'s open standard for adaptive sync technology, which works similarly to G-Sync.',
    example: 'This monitor supports FreeSync, so it will work well with my AMD graphics card.'
  },
  {
    id: 'low-latency-mode',
    term: 'Low Latency Mode',
    slug: 'low-latency-mode',
    definition: 'A setting in graphics drivers that reduces input lag by limiting the number of pre-rendered frames.',
    example: 'I enabled the ultra low latency mode in the NVIDIA control panel for the best competitive gaming experience.'
  },
  {
    id: 'msaa',
    term: 'MSAA',
    slug: 'msaa',
    definition: 'Multi-Sample Anti-Aliasing (MSAA) is a high-quality anti-aliasing technique that is more demanding on the GPU than other methods.',
    example: 'I turned on 4x MSAA to get rid of the jaggies, but it dropped my frame rate significantly.'
  },
  {
    id: 'shader',
    term: 'Shader',
    slug: 'shader',
    definition: 'A shader is a type of computer program originally used for shading in 3D scenes (the production of appropriate levels of light, darkness, and color in a rendered image). They are now used for a variety of tasks in computer graphics.',
    example: 'I wrote a custom shader to create a unique water effect in my game.'
  },
  {
    id: 'shader-cache',
    term: 'Shader Cache',
    slug: 'shader-cache',
    definition: 'A shader cache is a feature in graphics drivers that stores pre-compiled shaders on your hard drive to reduce stuttering and load times in games.',
    example: 'I cleared my shader cache to fix some graphical glitches in the game.'
  },
  {
    id: 'tessellation',
    term: 'Tessellation',
    slug: 'tessellation',
    definition: 'In computer graphics, tessellation is the process of dividing a surface into a mesh of smaller polygons, which can be used to add more detail to a 3D model.',
    example: 'The game uses tessellation to create realistic-looking terrain.'
  },
  {
    id: 'ray-budget',
    term: 'Ray Budget',
    slug: 'ray-budget',
    definition: 'The ray budget is the number of rays that a ray tracing algorithm is allowed to cast per pixel, which affects the quality and performance of the ray tracing effect.',
    example: 'I lowered the ray budget to get a higher frame rate with ray tracing enabled.'
  },
  {
    id: 'frame-gen',
    term: 'Frame Gen',
    slug: 'frame-gen',
    definition: 'Frame generation is a technology, like NVIDIA\'s DLSS 3, that uses AI to generate and insert new frames between existing ones, which can dramatically increase the perceived frame rate.',
    example: 'With frame gen enabled, my frame rate went from 60 to over 120 FPS.'
  },
  {
    id: 'flip-model',
    term: 'Flip Model',
    slug: 'flip-model',
    definition: 'Flip model is a rendering path in DirectX that provides a more efficient way of presenting frames to the screen, often used in modern games for better performance.',
    example: 'The game uses the flip model presentation, which is required for features like auto-HDR.'
  },
  {
    id: 'frame-buffer',
    term: 'Frame Buffer',
    slug: 'frame-buffer',
    definition: 'A frame buffer is a portion of RAM containing a bitmap that drives a video display. It is a memory buffer containing a complete frame of data.',
    example: 'The GPU renders the scene into the frame buffer, which is then sent to the monitor.'
  },
  {
    id: 'power-stage',
    term: 'Power Stage',
    slug: 'power-stage',
    definition: 'A power stage is a single step in a multi-phase VRM, responsible for converting and delivering power to the CPU or GPU.',
    example: 'This motherboard uses high-quality power stages for its VRM.'
  },
  {
    id: 'ferrite-choke',
    term: 'Ferrite Choke',
    slug: 'ferrite-choke',
    definition: 'A ferrite choke is an inductor used to suppress high-frequency noise in electronic circuits. They are often found in VRMs.',
    example: 'The high-quality ferrite chokes in this VRM help to provide clean power to the CPU.'
  },
  {
    id: 'phase-count',
    term: 'Phase Count',
    slug: 'phase-count',
    definition: 'The phase count is the number of power stages in a VRM. A higher phase count can provide more stable power.',
    example: 'This motherboard has a 16-phase VRM, which is excellent for overclocking.'
  },
  {
    id: 'reservoir',
    term: 'Reservoir',
    slug: 'reservoir',
    definition: 'In a custom water cooling loop, the reservoir is a container that holds the excess coolant and helps to bleed air from the loop.',
    example: 'I bought a new reservoir for my custom water cooling loop.'
  },
  {
    id: 'hardline-loop',
    term: 'Hardline Loop',
    slug: 'hardline-loop',
    definition: 'A hardline loop is a type of custom water cooling that uses rigid tubing, such as acrylic or PETG, for a very clean and professional look.',
    example: 'Building a hardline loop is more difficult than a soft tube loop, but the results are worth it.'
  },
  {
    id: 'soft-tube-loop',
    term: 'Soft Tube Loop',
    slug: 'soft-tube-loop',
    definition: 'A soft tube loop is a type of custom water cooling that uses flexible tubing, which is easier to install than rigid tubing.',
    example: 'For my first custom loop, I decided to use soft tubing because it is more forgiving.'
  },
  {
    id: 'barbs',
    term: 'Barbs',
    slug: 'barbs',
    definition: 'Barbs are a type of fitting used in soft tube water cooling that has ridges to hold the tubing in place.',
    example: 'I used clamps on my barbs to make sure the tubing was secure.'
  },
  {
    id: 'compression-fitting',
    term: 'Compression Fitting',
    slug: 'compression-fitting',
    definition: 'A compression fitting is a type of fitting used in water cooling that uses a collar to tighten down and secure the tubing.',
    example: 'Compression fittings provide a more secure seal than barbs.'
  },
  {
    id: 'quick-disconnect',
    term: 'Quick Disconnect',
    slug: 'quick-disconnect',
    definition: 'A quick disconnect is a fitting that allows you to easily separate a water cooling loop without draining it.',
    example: 'I installed a quick disconnect so I can easily remove my GPU for maintenance.'
  },
  {
    id: 'custom-loop',
    term: 'Custom Loop',
    slug: 'custom-loop',
    definition: 'A custom loop is a full water cooling system that is built from individual components, such as a pump, reservoir, radiator, and water blocks.',
    example: 'I built a custom loop to cool both my CPU and GPU.'
  },
  {
    id: 'cold-plate',
    term: 'Cold Plate',
    slug: 'cold-plate',
    definition: 'The cold plate is the part of a CPU or GPU water block that makes direct contact with the component to transfer heat.',
    example: 'The water block has a copper cold plate for excellent thermal conductivity.'
  },
  {
    id: 'heatsink-fin',
    term: 'Heatsink Fin',
    slug: 'heatsink-fin',
    definition: 'A heatsink fin is one of the many thin metal plates that make up a heatsink, designed to increase the surface area for heat dissipation.',
    example: 'I cleaned the dust out of the heatsink fins to improve cooling.'
  },
  {
    id: 'pwm-curve',
    term: 'PWM Curve',
    slug: 'pwm-curve',
    definition: 'A PWM curve is a user-defined setting that dictates how the speed of a PWM fan should change in response to temperature.',
    example: 'I set a custom PWM curve in the BIOS to keep my PC quiet at idle.'
  },
  {
    id: 'static-pressure-fan',
    term: 'Static Pressure Fan',
    slug: 'static-pressure-fan',
    definition: 'A static pressure fan is a type of fan designed to push air through a restriction, like a heatsink or radiator.',
    example: 'I used static pressure fans on my CPU cooler for the best performance.'
  },
  {
    id: 'rgb-header',
    term: 'RGB Header',
    slug: 'rgb-header',
    definition: 'An RGB header is a 4-pin connector on a motherboard used to connect and control standard RGB lighting devices.',
    example: 'I connected my RGB light strip to the RGB header on my motherboard.'
  },
  {
    id: 'argb-header',
    term: 'ARGB Header',
    slug: 'argb-header',
    definition: 'An Addressable RGB (ARGB) header is a 3-pin connector on a motherboard that allows for individual control of each LED on a connected lighting device.',
    example: 'With the ARGB header, I can create complex rainbow effects on my case fans.'
  },
  {
    id: 'q-connector',
    term: 'Q-Connector',
    slug: 'q-connector',
    definition: 'A Q-Connector is a small adapter provided with some motherboards that makes it easier to connect the individual front panel wires for the power button, reset button, and LEDs.',
    example: 'The Q-Connector made connecting the front panel wires a breeze.'
  },
  {
    id: 'ctdp',
    term: 'cTDP',
    slug: 'ctdp',
    definition: 'Configurable TDP (cTDP) is a feature that allows a device manufacturer to adjust the Thermal Design Power of a processor to fit a specific thermal solution.',
    example: 'The laptop manufacturer set a lower cTDP for the CPU to improve battery life.'
  },
  {
    id: 'base-power',
    term: 'Base Power',
    slug: 'base-power',
    definition: 'The base power is the default, long-term power limit of a CPU as defined by the manufacturer.',
    example: 'The CPU has a base power of 65 watts, but it can boost much higher for short periods.'
  },
  {
    id: 'mce',
    term: 'MCE',
    slug: 'mce',
    definition: 'Multi-Core Enhancement (MCE) is a BIOS feature that forces a CPU to run all of its cores at its maximum single-core turbo frequency, often resulting in higher performance but also much higher power consumption.',
    example: 'I enabled MCE to get the best possible performance out of my CPU.'
  },
  {
    id: 'ring-bus',
    term: 'Ring Bus',
    slug: 'ring-bus',
    definition: 'A ring bus is a type of interconnect used in some Intel CPUs to connect the various cores, caches, and other components on the chip.',
    example: 'Overclocking the ring bus can improve performance in some applications.'
  },
  {
    id: 'mesh-interconnect',
    term: 'Mesh Interconnect',
    slug: 'mesh-interconnect',
    definition: 'A mesh interconnect is a more advanced type of CPU interconnect that provides a direct path between each core, improving latency and bandwidth compared to a ring bus.',
    example: 'Intel\'s high-end server CPUs use a mesh interconnect.'
  },
  {
    id: 'fclk',
    term: 'FCLK',
    slug: 'fclk',
    definition: 'The Fabric Clock (FCLK) is the clock speed of the Infinity Fabric interconnect in AMD Ryzen CPUs.',
    example: 'For the best performance, you should set the FCLK to be the same as your memory clock.'
  },
  {
    id: 'mclk',
    term: 'MCLK',
    slug: 'mclk',
    definition: 'The Memory Clock (MCLK) is the clock speed of the RAM.',
    example: 'I overclocked my MCLK to 3600 MHz.'
  },
  {
    id: 'uclk',
    term: 'UCLK',
    slug: 'uclk',
    definition: 'The Memory Controller Clock (UCLK) is the clock speed of the integrated memory controller in the CPU.',
    example: 'On Ryzen systems, the UCLK is usually half the speed of the MCLK.'
  },
  {
    id: 'game-mode',
    term: 'Game Mode',
    slug: 'game-mode',
    definition: 'Game Mode is a setting on some CPUs, like AMD\'s Threadripper, that changes the CPU\'s topology to be more optimal for gaming, often by disabling some cores to reduce latency.',
    example: 'I enabled Game Mode to get better performance in my games.'
  },
  {
    id: 'imc',
    term: 'IMC',
    slug: 'imc',
    definition: 'The Integrated Memory Controller (IMC) is the part of the CPU that is responsible for communicating with the RAM.',
    example: 'A powerful IMC is important for achieving high memory overclocks.'
  },
  {
    id: 'cpuid',
    term: 'CPUID',
    slug: 'cpuid',
    definition: 'CPUID is an instruction on x86 processors that allows software to query the processor\'s identity and features.',
    example: 'The CPU-Z software uses the CPUID instruction to get detailed information about the processor.'
  },
  {
    id: 'svid',
    term: 'SVID',
    slug: 'svid',
    definition: 'The Serial Voltage ID (SVID) is a communication protocol used by a CPU to request a specific voltage from the motherboard\'s VRM.',
    example: 'The CPU uses SVID to tell the VRM what voltage it needs to operate at a certain frequency.'
  },
  {
    id: 'vid',
    term: 'VID',
    slug: 'vid',
    definition: 'The Voltage ID (VID) is the voltage that a CPU requests from the VRM.',
    example: 'The VID will change depending on the CPU\'s clock speed and load.'
  },
  {
    id: 'vram-buffer',
    term: 'VRAM Buffer',
    slug: 'vram-buffer',
    definition: 'The VRAM buffer is the portion of a graphics card\'s video memory that is currently being used to store textures, models, and other data for rendering.',
    example: 'The game uses a large VRAM buffer, so you need a graphics card with a lot of VRAM.'
  },
  {
    id: 'bar',
    term: 'BAR',
    slug: 'bar',
    definition: 'A Base Address Register (BAR) is used to hold the memory address of a device\'s resources, like its VRAM.',
    example: 'The size of the BAR determines how much of the device\'s memory can be accessed at once.'
  },
  {
    id: 'vr',
    term: 'VR',
    slug: 'vr',
    definition: 'Virtual Reality (VR) is a simulated experience that can be similar to or completely different from the real world.',
    example: 'I played a VR game that made me feel like I was actually in the game world.'
  },
  {
    id: 'mr',
    term: 'MR',
    slug: 'mr',
    definition: 'Mixed Reality (MR) is the merging of real and virtual worlds to produce new environments and visualizations, where physical and digital objects co-exist and interact in real time.',
    example: 'The HoloLens is a popular MR headset.'
  },
  {
    id: 'xr',
    term: 'XR',
    slug: 'xr',
    definition: 'Extended Reality (XR) is an umbrella term that includes virtual reality (VR), augmented reality (AR), and mixed reality (MR).',
    example: 'The XR industry is growing rapidly.'
  },
  {
    id: 'sbc-image',
    term: 'SBC Image',
    slug: 'sbc-image',
    definition: 'An SBC image is a bootable operating system image for a single-board computer, like a Raspberry Pi.',
    example: 'I downloaded the official SBC image for my new Raspberry Pi.'
  },
  {
    id: 'boot-overlay',
    term: 'Boot Overlay',
    slug: 'boot-overlay',
    definition: 'A boot overlay is a configuration file that is loaded at boot time to modify the behavior of the operating system or hardware.',
    example: 'I used a boot overlay to enable the I2C interface on my Raspberry Pi.'
  },
  {
    id: 'fw-update',
    term: 'FW Update',
    slug: 'fw-update',
    definition: 'A firmware update is a software update for a piece of hardware, such as a motherboard or SSD.',
    example: 'I installed the latest FW update for my SSD to improve its performance.'
  },
  {
    id: 'rollout',
    term: 'Rollout',
    slug: 'rollout',
    definition: 'A rollout is the process of gradually releasing a new software version to users.',
    example: 'The new feature is being rolled out to users over the next few weeks.'
  },
  {
    id: 'canary-build',
    term: 'Canary Build',
    slug: 'canary-build',
    definition: 'A canary build is a pre-release version of a software that is released to a small group of users to test for bugs.',
    example: 'I am running the canary build of Chrome to get the latest features.'
  },
  {
    id: 'dogfood-build',
    term: 'Dogfood Build',
    slug: 'dogfood-build',
    definition: 'A dogfood build is an internal test version of a software that is used by the developers themselves.',
    example: 'The developers are using the dogfood build of the new operating system.'
  },
  {
    id: 'hot-channel',
    term: 'Hot Channel',
    slug: 'hot-channel',
    definition: 'A hot channel is a communication channel used for urgent debugging and troubleshooting.',
    example: 'The developers are on the hot channel trying to fix the production outage.'
  },
  {
    id: 'error-code-dump',
    term: 'Error Code Dump',
    slug: 'error-code-dump',
    definition: 'An error code dump is a file that contains a list of all the error codes that a program can generate.',
    example: 'I consulted the error code dump to figure out what the error message meant.'
  },
  {
    id: 'stack-trace',
    term: 'Stack Trace',
    slug: 'stack-trace',
    definition: 'A stack trace is a report of the active stack frames at a certain point in time during the execution of a program.',
    example: 'The debugger showed a stack trace that helped me find the source of the crash.'
  },
  {
    id: 'core-mark',
    term: 'Core Mark',
    slug: 'core-mark',
    definition: 'CoreMark is a benchmark that measures the performance of a CPU\'s core.',
    example: 'This new CPU has a very high CoreMark score.'
  },
  {
    id: 'kernel-header',
    term: 'Kernel Header',
    slug: 'kernel-header',
    definition: 'Kernel headers are files that contain the source code for the Linux kernel. They are needed to compile kernel modules.',
    example: 'I had to install the kernel headers to compile the driver for my new network card.'
  },
  {
    id: 'patch-panel',
    term: 'Patch Panel',
    slug: 'patch-panel',
    definition: 'A patch panel is a device that is used to connect and manage network cables.',
    example: 'I used a patch panel to organize all the network cables in my server rack.'
  },
  {
    id: 'keystone-jack',
    term: 'Keystone Jack',
    slug: 'keystone-jack',
    definition: 'A keystone jack is a modular connector used for data communications, particularly for Ethernet.',
    example: 'I installed a keystone jack in the wall plate to provide an Ethernet connection.'
  },
  {
    id: 'rj45',
    term: 'RJ45',
    slug: 'rj45',
    definition: 'An RJ45 connector is a type of modular connector commonly used for Ethernet networking.',
    example: 'I crimped an RJ45 connector onto the end of the Ethernet cable.'
  },
  {
    id: 'sfp',
    term: 'SFP',
    slug: 'sfp',
    definition: 'A Small Form-factor Pluggable (SFP) is a compact, hot-pluggable transceiver used for both telecommunication and data communications applications.',
    example: 'I installed an SFP module in my switch to provide a fiber optic connection.'
  },
  {
    id: 'sfp+',
    term: 'SFP+',
    slug: 'sfp+',
    definition: 'SFP+ is an enhanced version of the SFP that supports data rates up to 10 Gbit/s.',
    example: 'I used an SFP+ module to connect my server to the 10-gigabit switch.'
  },
  {
    id: 'qsfp',
    term: 'QSFP',
    slug: 'qsfp',
    definition: 'A Quad Small Form-factor Pluggable (QSFP) is a compact, hot-pluggable transceiver used for data communications applications. It supports data rates up to 40 Gbit/s.',
    example: 'I used a QSFP module to connect my switch to the 40-gigabit backbone.'
  },
  {
    id: 'dac-cable',
    term: 'DAC Cable',
    slug: 'dac-cable',
    definition: 'A Direct Attach Cable (DAC) is a type of cable that is used to connect two SFP+ or QSFP ports without the need for separate transceivers.',
    example: 'I used a DAC cable to connect my two switches together.'
  },
  {
    id: 'fiber-patch',
    term: 'Fiber Patch',
    slug: 'fiber-patch',
    definition: 'A fiber patch cable is a short fiber optic cable used to connect two devices.',
    example: 'I used a fiber patch cable to connect my switch to the patch panel.'
  },
  {
    id: 'lx-fiber',
    term: 'LX Fiber',
    slug: 'lx-fiber',
    definition: 'LX fiber is a type of single-mode fiber optic cable that is used for long-distance communication.',
    example: 'I used LX fiber to connect our two office buildings.'
  },
  {
    id: 'sx-fiber',
    term: 'SX Fiber',
    slug: 'sx-fiber',
    definition: 'SX fiber is a type of multi-mode fiber optic cable that is used for short-distance communication.',
    example: 'I used SX fiber to connect the servers in my server rack.'
  },
  {
    id: 'mpo-connector',
    term: 'MPO Connector',
    slug: 'mpo-connector',
    definition: 'An MPO (Multi-fiber Push-On) connector is a type of fiber optic connector that can terminate multiple fibers in a single connector.',
    example: 'I used an MPO connector to connect my 12-fiber ribbon cable.'
  },
  {
    id: 'loopback-plug',
    term: 'Loopback Plug',
    slug: 'loopback-plug',
    definition: 'A loopback plug is a device that is used to test a network port by sending a signal out the port and then back into the same port.',
    example: 'I used a loopback plug to test the Ethernet port on my computer.'
  },
  {
    id: 'tone-generator',
    term: 'Tone Generator',
    slug: 'tone-generator',
    definition: 'A tone generator is a device that is used to trace cables by sending a tone down the cable that can be detected by a probe.',
    example: 'I used a tone generator to find the other end of the Ethernet cable.'
  },
  {
    id: 'cable-certifier',
    term: 'Cable Certifier',
    slug: 'cable-certifier',
    definition: 'A cable certifier is a device that is used to test a network cable to ensure that it meets the required standards.',
    example: 'I used a cable certifier to test the new network cabling before it was put into service.'
  },
  {
    id: 'east-west-traffic',
    term: 'East-West Traffic',
    slug: 'east-west-traffic',
    definition: 'East-West traffic is network traffic that flows between servers within the same data center.',
    example: 'Our new security solution is designed to inspect East-West traffic for threats.'
  },
  {
    id: 'north-south-traffic',
    term: 'North-South Traffic',
    slug: 'north-south-traffic',
    definition: 'North-South traffic is network traffic that flows into and out of a data center.',
    example: 'Our firewall is responsible for inspecting all North-South traffic.'
  },
  {
    id: 'vswitch',
    term: 'vSwitch',
    slug: 'vswitch',
    definition: 'A virtual switch (vSwitch) is a software-based switch that provides a similar function to a physical Ethernet switch, but in a virtualized environment.',
    example: 'I created a vSwitch to connect my virtual machines to the network.'
  },
  {
    id: 'dvswitch',
    term: 'DVSwitch',
    slug: 'dvswitch',
    definition: 'A distributed virtual switch (DVSwitch) is a type of virtual switch that can span multiple physical hosts, providing a centralized point of management.',
    example: 'I used a DVSwitch to manage the networking for all my virtual machines in the cluster.'
  },
  {
    id: 'overlay-network',
    term: 'Overlay Network',
    slug: 'overlay-network',
    definition: 'An overlay network is a virtual network that is built on top of an existing physical network.',
    example: 'We use an overlay network to provide a private network for our virtual machines.'
  },
  {
    id: 'underlay-network',
    term: 'Underlay Network',
    slug: 'underlay-network',
    definition: 'An underlay network is the physical network that an overlay network is built on top of.',
    example: 'Our underlay network consists of a series of high-speed switches and routers.'
  },
  {
    id: 'vxlan',
    term: 'VXLAN',
    slug: 'vxlan',
    definition: 'Virtual Extensible LAN (VXLAN) is a network virtualization technology that attempts to address the scalability problems associated with large cloud computing deployments.',
    example: 'We use VXLAN to create a large, multi-tenant network in our data center.'
  },
  {
    id: 'geneve',
    term: 'Geneve',
    slug: 'geneve',
    definition: 'Generic Network Virtualization Encapsulation (Geneve) is a network virtualization protocol that is designed to be more flexible than VXLAN.',
    example: 'Our new network virtualization solution uses the Geneve protocol.'
  },
  {
    id: 'nfv',
    term: 'NFV',
    slug: 'nfv',
    definition: 'Network Function Virtualization (NFV) is a network architecture concept that uses the technologies of IT virtualization to virtualize entire classes of network node functions into building blocks that may be connected, or chained, together to create communication services.',
    example: 'We use NFV to run our firewall and load balancer as virtual machines.'
  },
  {
    id: 'sdn',
    term: 'SDN',
    slug: 'sdn',
    definition: 'Software-Defined Networking (SDN) is an approach to networking that uses software-based controllers or APIs to communicate with underlying hardware infrastructure and direct traffic on a network.',
    example: 'We use SDN to automate the configuration of our network.'
  },
  {
    id: 'traffic-shaper',
    term: 'Traffic Shaper',
    slug: 'traffic-shaper',
    definition: 'A traffic shaper is a device or software that is used to control the flow of network traffic.',
    example: 'I used a traffic shaper to prioritize voice and video traffic on my network.'
  },
  {
    id: 'latency-spike',
    term: 'Latency Spike',
    slug: 'latency-spike',
    definition: 'A latency spike is a sudden, temporary increase in network latency.',
    example: 'I was getting latency spikes in my online game, which was causing it to lag.'
  },
  {
    id: 'jitter',
    term: 'Jitter',
    slug: 'jitter',
    definition: 'Jitter is the variation in the delay of received packets. High jitter can cause problems for real-time applications like voice and video.',
    example: 'I was getting a lot of jitter on my VoIP calls, which was causing the audio to cut out.'
  },
  {
    id: 'throughput',
    term: 'Throughput',
    slug: 'throughput',
    definition: 'Throughput is the actual rate of data transfer over a network, as opposed to the theoretical maximum bandwidth.',
    example: 'I am only getting a throughput of 50 Mbps on my 100 Mbps connection.'
  },
  {
    id: 'backhaul',
    term: 'Backhaul',
    slug: 'backhaul',
    definition: 'In a telecommunications network, the backhaul is the portion of the network that comprises the intermediate links between the core network, or backbone, of the network and the small sub-networks at the "edge" of the entire hierarchical network.',
    example: 'Our ISP has a high-speed fiber optic backhaul.'
  },
  {
    id: 'upstream',
    term: 'Upstream',
    slug: 'upstream',
    definition: 'Upstream is the direction in which data is sent from a client to a server.',
    example: 'My upstream speed is much slower than my downstream speed.'
  },
  {
    id: 'downstream',
    term: 'Downstream',
    slug: 'downstream',
    definition: 'Downstream is the direction in which data is sent from a server to a client.',
    example: 'My downstream speed is 100 Mbps.'
  },
  {
    id: 'peering',
    term: 'Peering',
    slug: 'peering',
    definition: 'Peering is a process by which two Internet networks connect and exchange traffic.',
    example: 'Our ISP has a peering agreement with Google, which gives us a very fast connection to their services.'
  },
  {
    id: 'asn',
    term: 'ASN',
    slug: 'asn',
    definition: 'An Autonomous System Number (ASN) is a unique number that is assigned to an autonomous system (AS) and which is used in BGP routing.',
    example: 'My ISP has an ASN of 12345.'
  },
  {
    id: 'ix',
    term: 'IX',
    slug: 'ix',
    definition: 'An Internet Exchange (IX) is a physical infrastructure through which Internet service providers (ISPs) and Content Delivery Networks (CDNs) exchange Internet traffic between their networks.',
    example: 'Our ISP is connected to a major IX, which gives us a fast and reliable connection to the internet.'
  },
  {
    id: 'blackhole-route',
    term: 'Blackhole Route',
    slug: 'blackhole-route',
    definition: 'A blackhole route is a route that drops all traffic that is sent to it.',
    example: 'I created a blackhole route for the spammer\'s IP address to drop all of their traffic.'
  },
  {
    id: 'null-route',
    term: 'Null Route',
    slug: 'null-route',
    definition: 'A null route is a route that discards traffic. It is similar to a blackhole route.',
    example: 'I used a null route to block traffic from a malicious IP address.'
  },
  {
    id: 'route-flap',
    term: 'Route Flap',
    slug: 'route-flap',
    definition: 'A route flap is a situation in which a BGP route is repeatedly advertised and withdrawn.',
    example: 'The route flap was causing network instability.'
  },
  {
    id: 'route-leak',
    term: 'Route Leak',
    slug: 'route-leak',
    definition: 'A route leak is a situation in which a BGP route is advertised to a network that it should not be.',
    example: 'The route leak caused a major internet outage.'
  },
  {
    id: 'route-hijack',
    term: 'Route Hijack',
    slug: 'route-hijack',
    definition: 'A route hijack is a situation in which a BGP route is maliciously advertised by an unauthorized party.',
    example: 'The route hijack redirected traffic to a malicious website.'
  },
  {
    id: 'window-scaling',
    term: 'Window Scaling',
    slug: 'window-scaling',
    definition: 'TCP window scaling is a feature of TCP that allows for larger window sizes, which can improve performance on high-latency networks.',
    example: 'I enabled window scaling to improve the performance of my long-distance file transfers.'
  },
  {
    id: 'syn-cookie',
    term: 'SYN Cookie',
    slug: 'syn-cookie',
    definition: 'A SYN cookie is a technique used to resist SYN flood attacks. It allows a server to avoid dropping connections when the SYN queue fills up.',
    example: 'Our firewall uses SYN cookies to protect against SYN flood attacks.'
  },
  {
    id: 'tcp-dump',
    term: 'TCP Dump',
    slug: 'tcp-dump',
    definition: 'tcpdump is a command-line packet analyzer. It allows the user to display TCP/IP and other packets being transmitted or received over a network to which the computer is attached.',
    example: 'I used tcpdump to capture the network traffic and analyze it for problems.'
  },
  {
    id: 'netflow',
    term: 'Netflow',
    slug: 'netflow',
    definition: 'NetFlow is a network protocol developed by Cisco for collecting IP traffic information as it enters or exits an interface.',
    example: 'Our monitoring system uses NetFlow to collect traffic statistics from our routers.'
  },
  {
    id: 'sflow',
    term: 'sFlow',
    slug: 'sflow',
    definition: 'sFlow is an industry standard for packet export at Layer 2 of the OSI model. It provides a means for exporting truncated packets, together with interface counters for the purpose of network monitoring.',
    example: 'Our switches are configured to send sFlow data to our monitoring system.'
  },
  {
    id: 'span-port',
    term: 'SPAN Port',
    slug: 'span-port',
    definition: 'A Switched Port Analyzer (SPAN) port is a feature on a Cisco switch that allows you to mirror the traffic from one or more ports to another port, where it can be analyzed.',
    example: 'I configured a SPAN port to mirror the traffic from the server to my laptop for analysis.'
  },
  {
    id: 'mirror-session',
    term: 'Mirror Session',
    slug: 'mirror-session',
    definition: 'A mirror session is another term for a SPAN port.',
    example: 'I created a mirror session to duplicate the traffic from the server to my analysis tool.'
  },
  {
    id: 'ping-sweep',
    term: 'Ping Sweep',
    slug: 'ping-sweep',
    definition: 'A ping sweep is a method that can establish a range of IP addresses which map to live hosts.',
    example: 'I performed a ping sweep of the network to find all the live hosts.'
  },
  {
    id: 'vlan-hop',
    term: 'VLAN Hop',
    slug: 'vlan-hop',
    definition: 'VLAN hopping is a computer security attack, a method of attacking a network by sending packets to a port that is not normally accessible from a given end system.',
    example: 'The attacker used a VLAN hopping attack to gain access to the secure VLAN.'
  },
  {
    id: 'da-guard',
    term: 'DA Guard',
    slug: 'da-guard',
    definition: 'Dynamic ARP Inspection (DAI) Guard is a security feature that validates ARP packets in a network.',
    example: 'We enabled DAI Guard to protect against ARP poisoning attacks.'
  },
  {
    id: 'storm-control',
    term: 'Storm Control',
    slug: 'storm-control',
    definition: 'Storm control is a feature on some switches that is used to prevent broadcast, multicast, and unicast storms.',
    example: 'I enabled storm control on the switch to prevent broadcast storms from taking down the network.'
  },
  {
    id: 'broadcast-domain',
    term: 'Broadcast Domain',
    slug: 'broadcast-domain',
    definition: 'A broadcast domain is a logical division of a computer network, in which all nodes can reach each other by broadcast at the data link layer.',
    example: 'A VLAN is a separate broadcast domain.'
  },
  {
    id: 'collision-domain',
    term: 'Collision Domain',
    slug: 'collision-domain',
    definition: 'A collision domain is a network segment where simultaneous data transmissions collide with one another.',
    example: 'In a hub, all ports are in the same collision domain. In a switch, each port is its own collision domain.'
  },
  {
    id: 'split-horizon',
    term: 'Split Horizon',
    slug: 'split-horizon',
    definition: 'Split horizon is a method of preventing routing loops in distance-vector routing protocols by prohibiting a router from advertising a route back onto the interface from which it was learned.',
    example: 'The routing protocol uses split horizon to prevent routing loops.'
  },
  {
    id: 'poison-reverse',
    term: 'Poison Reverse',
    slug: 'poison-reverse',
    definition: 'Poison reverse is a way in which a router informs its neighbors that a route is no longer reachable. It is a more robust way of preventing routing loops than split horizon.',
    example: 'When the link went down, the router sent a poison reverse to its neighbors.'
  },
  {
    id: 'mac-flood',
    term: 'MAC Flood',
    slug: 'mac-flood',
    definition: 'A MAC flood is a type of network attack where an attacker sends a large number of Ethernet frames with different source MAC addresses to a switch, in an attempt to overflow the CAM table.',
    example: 'The attacker used a MAC flood attack to turn the switch into a hub, allowing them to sniff all the traffic.'
  },
  {
    id: 'cam-table',
    term: 'CAM Table',
    slug: 'cam-table',
    definition: 'A Content-Addressable Memory (CAM) table is a table in a switch that stores the MAC addresses of the devices connected to each port.',
    example: 'The switch uses the CAM table to forward frames to the correct port.'
  },
  {
    id: 'port-security',
    term: 'Port Security',
    slug: 'port-security',
    definition: 'Port security is a feature on a switch that allows you to restrict the number of MAC addresses that can be learned on a port.',
    example: 'I enabled port security to prevent unauthorized devices from connecting to the network.'
  },
  {
    id: 'sticky-mac',
    term: 'Sticky MAC',
    slug: 'sticky-mac',
    definition: 'Sticky MAC is a feature of port security that allows a switch to dynamically learn the MAC address of the device connected to a port and then "stick" that MAC address to the port.',
    example: 'I used sticky MAC to automatically configure port security on the switch.'
  },
  {
    id: 'flow-control',
    term: 'Flow Control',
    slug: 'flow-control',
    definition: 'Flow control is a mechanism for regulating the flow of data between two devices.',
    example: 'The switch uses flow control to prevent the buffer from overflowing.'
  },
  {
    id: 'lldp',
    term: 'LLDP',
    slug: 'lldp',
    definition: 'The Link Layer Discovery Protocol (LLDP) is a vendor-neutral link layer protocol used by network devices for advertising their identity, capabilities, and neighbors on an IEEE 802 local area network, principally wired Ethernet.',
    example: 'I used LLDP to discover the switch that my server was connected to.'
  },
  {
    id: 'eee',
    term: 'EEE',
    slug: 'eee',
    definition: 'Energy-Efficient Ethernet (EEE) is a standard that allows for less power consumption during periods of low data activity.',
    example: 'I enabled EEE on my switch to save power.'
  },
  {
    id: 'poe',
    term: 'PoE',
    slug: 'poe',
    definition: 'Power over Ethernet (PoE) is a technology that allows network cables to carry electrical power.',
    example: 'I used a PoE switch to power my IP camera.'
  },
  {
    id: 'poe+',
    term: 'PoE+',
    slug: 'poe+',
    definition: 'PoE+ is an enhanced version of PoE that can provide more power.',
    example: 'I used a PoE+ switch to power my high-power access point.'
  },
  {
    id: 'poe-injector',
    term: 'PoE Injector',
    slug: 'poe-injector',
    definition: 'A PoE injector is a device that adds power to an Ethernet cable.',
    example: 'I used a PoE injector to power my IP camera since my switch does not support PoE.'
  },
  {
    id: 'inline-power',
    term: 'Inline Power',
    slug: 'inline-power',
    definition: 'Inline power is another term for Power over Ethernet.',
    example: 'The switch provides inline power to the access points.'
  },
  {
    id: 'transceiver',
    term: 'Transceiver',
    slug: 'transceiver',
    definition: 'A transceiver is a device that can both transmit and receive data. In networking, it often refers to a module that converts electrical signals to optical signals, like an SFP.',
    example: 'I installed a fiber optic transceiver in my switch.'
  },
  {
    id: 'bridge-domain',
    term: 'Bridge Domain',
    slug: 'bridge-domain',
    definition: 'A bridge domain is a Layer 2 broadcast domain. It is similar to a VLAN.',
    example: 'I created a bridge domain to segment the traffic on my network.'
  },
  {
    id: 'l3-gateway',
    term: 'L3 Gateway',
    slug: 'l3-gateway',
    definition: 'A Layer 3 gateway is a router that connects a Layer 2 network to other networks.',
    example: 'I configured the L3 gateway to route traffic between the two VLANs.'
  },
  {
    id: 'vrf',
    term: 'VRF',
    slug: 'vrf',
    definition: 'A Virtual Routing and Forwarding (VRF) instance is a technology that allows multiple instances of a routing table to co-exist within the same router at the same time.',
    example: 'I used VRFs to create separate routing tables for each of my customers.'
  },
  {
    id: 'route-reflector',
    term: 'Route Reflector',
    slug: 'route-reflector',
    definition: 'A route reflector is a BGP router that is allowed to ignore the iBGP split-horizon rule. This can be used to simplify the configuration of iBGP.',
    example: 'I configured a route reflector to simplify the iBGP mesh in my network.'
  },
  {
    id: 'spine-leaf',
    term: 'Spine–Leaf',
    slug: 'spine-leaf',
    definition: 'Spine-leaf is a two-layer data center network topology that is composed of a spine layer and a leaf layer.',
    example: 'Our new data center uses a spine-leaf architecture.'
  },
  {
    id: 'tor-switch',
    term: 'ToR Switch',
    slug: 'tor-switch',
    definition: 'A Top-of-Rack (ToR) switch is a switch that is placed at the top of a server rack and connects to all the servers in that rack.',
    example: 'I connected all my servers to the ToR switch.'
  },
  {
    id: 'dcim',
    term: 'DCIM',
    slug: 'dcim',
    definition: 'Data Center Infrastructure Management (DCIM) is the integration of IT and facility management disciplines to centralize monitoring, management and intelligent capacity planning of a data center\'s critical systems.',
    example: 'We use a DCIM tool to manage our data center.'
  },
  {
    id: 'smart-pdu',
    term: 'Smart PDU',
    slug: 'smart-pdu',
    definition: 'A smart PDU is a power distribution unit that can be monitored and controlled over a network.',
    example: 'I used the smart PDU to remotely power cycle the server.'
  },
  {
    id: 'rack-unit',
    term: 'Rack Unit',
    slug: 'rack-unit',
    definition: 'A rack unit (U) is a unit of measure used to describe the height of equipment intended for mounting in a 19-inch rack or a 23-inch rack.',
    example: 'The server is 2U high.'
  },
  {
    id: 'hot-aisle',
    term: 'Hot Aisle',
    slug: 'hot-aisle',
    definition: 'A hot aisle is the aisle in a data center where the hot exhaust air from the servers is vented.',
    example: 'The hot aisle in our data center is kept at a very high temperature.'
  },
  {
    id: 'cold-aisle',
    term: 'Cold Aisle',
    slug: 'cold-aisle',
    definition: 'A cold aisle is the aisle in a data center where the cold air is supplied to the servers.',
    example: 'The cold aisle in our data center is kept at a very low temperature.'
  },
  {
    id: 'raised-floor',
    term: 'Raised Floor',
    slug: 'raised-floor',
    definition: 'A raised floor is a type of floor that is raised above the solid floor to create a hidden void for the passage of mechanical and electrical services.',
    example: 'Our data center has a raised floor to provide cooling and cable management.'
  },
  {
    id: 'kvm-switch',
    term: 'KVM Switch',
    slug: 'kvm-switch',
    definition: 'A KVM switch is a hardware device that allows a user to control multiple computers from one or more sets of keyboards, video monitors, and mice.',
    example: 'I used a KVM switch to control all the servers in my rack.'
  },
  {
    id: 'out-of-band',
    term: 'Out-of-Band',
    slug: 'out-of-band',
    definition: 'Out-of-band management is a type of management that is performed over a dedicated management network, separate from the production network.',
    example: 'I used out-of-band management to access the server even though the main network was down.'
  },
  {
    id: 'console-server',
    term: 'Console Server',
    slug: 'console-server',
    definition: 'A console server is a device that provides access to the serial console of a number of devices, such as servers, routers, and switches.',
    example: 'I used a console server to access the console of the router.'
  },
  {
    id: 'oci',
    term: 'OCI',
    slug: 'oci',
    definition: 'The Open Container Initiative (OCI) is an open governance structure for the express purpose of creating open industry standards around container formats and runtimes.',
    example: 'Docker is compliant with the OCI specification.'
  },
  {
    id: 'runc',
    term: 'runc',
    slug: 'runc',
    definition: 'runc is a CLI tool for spawning and running containers according to the OCI specification.',
    example: 'Docker uses runc under the hood to run containers.'
  },
  {
    id: 'cri',
    term: 'CRI',
    slug: 'cri',
    definition: 'The Container Runtime Interface (CRI) is a plugin interface which enables kubelet to use a wide variety of container runtimes.',
    example: 'Kubernetes uses the CRI to interact with container runtimes like Docker and containerd.'
  },
  {
    id: 'cni',
    term: 'CNI',
    slug: 'cni',
    definition: 'The Container Network Interface (CNI) is a standard for configuring network interfaces for Linux containers.',
    example: 'Kubernetes uses CNI to configure the networking for pods.'
  },
  {
    id: 'csi',
    term: 'CSI',
    slug: 'csi',
    definition: 'The Container Storage Interface (CSI) is a standard for exposing arbitrary block and file storage systems to containerized workloads on Container Orchestration Systems like Kubernetes.',
    example: 'I used a CSI driver to provide persistent storage for my Kubernetes pods.'
  },
  {
    id: 'dry-run',
    term: 'Dry Run',
    slug: 'dry-run',
    definition: 'A dry run is a test run of a process to see if it will work correctly, without actually making any changes.',
    example: 'I did a dry run of the deployment to make sure there were no errors.'
  },
  {
    id: 'manifest',
    term: 'Manifest',
    slug: 'manifest',
    definition: 'In Kubernetes, a manifest is a YAML or JSON file that describes a Kubernetes object, such as a pod or a service.',
    example: 'I used a manifest to deploy my application to Kubernetes.'
  },
  {
    id: 'limit-range',
    term: 'Limit Range',
    slug: 'limit-range',
    definition: 'A LimitRange is a policy to constrain resource allocations (to Pods or Containers) in a namespace.',
    example: 'I used a LimitRange to set the default CPU and memory limits for all pods in the namespace.'
  },
  {
    id: 'resource-quota',
    term: 'Resource Quota',
    slug: 'resource-quota',
    definition: 'A ResourceQuota is a policy to constrain the aggregate resource consumption in a namespace.',
    example: 'I used a ResourceQuota to limit the total amount of CPU and memory that can be used in the namespace.'
  },
  {
    id: 'ephemeral-volume',
    term: 'Ephemeral Volume',
    slug: 'ephemeral-volume',
    definition: 'An ephemeral volume is a type of volume that is created and deleted along with the pod.',
    example: 'I used an ephemeral volume to store some temporary data for my pod.'
  },
  {
    id: 'hostpath',
    term: 'HostPath',
    slug: 'hostpath',
    definition: 'A HostPath volume mounts a file or directory from the host node’s filesystem into your Pod.',
    example: 'I used a HostPath volume to mount a log file from the host into my pod.'
  },
  {
    id: 'nodeport',
    term: 'NodePort',
    slug: 'nodeport',
    definition: 'A NodePort is a type of Kubernetes service that exposes a port on each node in the cluster.',
    example: 'I used a NodePort service to expose my web application to the internet.'
  },
  {
    id: 'clusterip',
    term: 'ClusterIP',
    slug: 'clusterip',
    definition: 'A ClusterIP is a type of Kubernetes service that exposes a service on an internal IP in the cluster. This type makes the service only reachable from within the cluster.',
    example: 'I used a ClusterIP service to expose my database to other pods in the cluster.'
  },
  {
    id: 'externalname',
    term: 'ExternalName',
    slug: 'externalname',
    definition: 'An ExternalName is a type of Kubernetes service that maps a service to a DNS name.',
    example: 'I used an ExternalName service to map my service to an external database.'
  },
  {
    id: 'ingressclass',
    term: 'IngressClass',
    slug: 'ingressclass',
    definition: 'An IngressClass is a Kubernetes resource that is used to specify which Ingress controller should be used for a particular Ingress.',
    example: 'I used an IngressClass to specify that my Ingress should be handled by the NGINX Ingress controller.'
  },
  {
    id: 'sticky-session',
    term: 'Sticky Session',
    slug: 'sticky-session',
    definition: 'A sticky session is a feature of a load balancer that ensures that all requests from a particular client are sent to the same backend server.',
    example: 'I enabled sticky sessions on my load balancer to improve the performance of my application.'
  },
  {
    id: 'toleration',
    term: 'Toleration',
    slug: 'toleration',
    definition: 'A toleration is a Kubernetes feature that allows a pod to be scheduled on a node with a matching taint.',
    example: 'I added a toleration to my pod so that it could be scheduled on a node with a GPU.'
  },
  {
    id: 'affinity',
    term: 'Affinity',
    slug: 'affinity',
    definition: 'Affinity is a Kubernetes feature that allows you to specify rules that the scheduler uses to place pods on nodes.',
    example: 'I used node affinity to ensure that my web server pods are scheduled on nodes with fast SSDs.'
  },
  {
    id: 'anti-affinity',
    term: 'Anti-Affinity',
    slug: 'anti-affinity',
    definition: 'Anti-affinity is a Kubernetes feature that allows you to prevent a pod from being scheduled on a node where certain other pods are already running.',
    example: 'I used pod anti-affinity to ensure that the replicas of my database are spread across different nodes.'
  },
  {
    id: 'metric-server',
    term: 'Metric Server',
    slug: 'metric-server',
    definition: 'A metric server is a Kubernetes component that collects resource usage metrics from nodes and pods.',
    example: 'I used the metric server to get the CPU and memory usage of my pods.'
  },
  {
    id: 'hpa',
    term: 'HPA',
    slug: 'hpa',
    definition: 'A Horizontal Pod Autoscaler (HPA) is a Kubernetes feature that automatically scales the number of pods in a deployment based on observed CPU utilization or other select metrics.',
    example: 'I used an HPA to automatically scale my web server deployment based on CPU usage.'
  },
  {
    id: 'vpa',
    term: 'VPA',
    slug: 'vpa',
    definition: 'A Vertical Pod Autoscaler (VPA) is a Kubernetes feature that automatically adjusts the CPU and memory requests and limits for pods.',
    example: 'I used a VPA to automatically adjust the resource requests for my database pods.'
  },
  {
    id: 'api-throttle',
    term: 'API Throttle',
    slug: 'api-throttle',
    definition: 'An API throttle is a mechanism for limiting the number of API requests that can be made in a given period of time.',
    example: 'I implemented an API throttle to prevent abuse of my API.'
  },
  {
    id: 'etcd',
    term: 'etcd',
    slug: 'etcd',
    definition: 'etcd is a distributed, consistent key-value store. It is used by Kubernetes to store all of its cluster data.',
    example: 'I backed up the etcd database to protect against data loss.'
  },
  {
    id: 'leader-election',
    term: 'Leader Election',
    slug: 'leader-election',
    definition: 'Leader election is the process of electing a single leader from a group of nodes in a distributed system.',
    example: 'Kubernetes uses leader election to elect a master node.'
  },
  {
    id: 'control-plane',
    term: 'Control Plane',
    slug: 'control-plane',
    definition: 'The control plane is the part of a distributed system that is responsible for managing the system.',
    example: 'The Kubernetes control plane is responsible for managing the cluster.'
  },
  {
    id: 'master-node',
    term: 'Master Node',
    slug: 'master-node',
    definition: 'A master node is a node in a Kubernetes cluster that is responsible for managing the cluster.',
    example: 'I have three master nodes in my Kubernetes cluster for high availability.'
  },
  {
    id: 'kube-proxy',
    term: 'Kube-Proxy',
    slug: 'kube-proxy',
    definition: 'Kube-proxy is a network proxy that runs on each node in your cluster, implementing part of the Kubernetes Service concept.',
    example: 'Kube-proxy is responsible for routing traffic to the correct pods.'
  },
  {
    id: 'cloud-init',
    term: 'Cloud-Init',
    slug: 'cloud-init',
    definition: 'Cloud-init is the industry standard multi-distribution method for cross-platform cloud instance initialization.',
    example: 'I used cloud-init to configure my EC2 instance on first boot.'
  },
  {
    id: 'metadata-service',
    term: 'Metadata Service',
    slug: 'metadata-service',
    definition: 'A metadata service is a service that provides metadata about a cloud instance, such as its IP address and instance ID.',
    example: 'I used the metadata service to get the IP address of my EC2 instance.'
  },
  {
    id: 'iam-role',
    term: 'IAM Role',
    slug: 'iam-role',
    definition: 'An IAM role is an AWS Identity and Access Management (IAM) entity that defines a set of permissions for making AWS service requests.',
    example: 'I assigned an IAM role to my EC2 instance to give it permission to access S3.'
  },
  {
    id: 'instance-profile',
    term: 'Instance Profile',
    slug: 'instance-profile',
    definition: 'An instance profile is a container for an IAM role that you can use to pass role information to an EC2 instance when the instance starts.',
    example: 'I attached an instance profile to my EC2 instance to give it an IAM role.'
  },
  {
    id: 'preemptible-vm',
    term: 'Preemptible VM',
    slug: 'preemptible-vm',
    definition: 'A preemptible VM is a type of virtual machine that can be terminated with little notice, but is available at a much lower price. It is similar to a spot instance.',
    example: 'I use preemptible VMs for my batch processing jobs to save money.'
  },
  {
    id: 'scaling-group',
    term: 'Scaling Group',
    slug: 'scaling-group',
    definition: 'A scaling group is a collection of instances that can be automatically scaled up or down based on demand.',
    example: 'I created a scaling group for my web servers to handle traffic spikes.'
  },
  {
    id: 'golden-image',
    term: 'Golden Image',
    slug: 'golden-image',
    definition: 'A golden image is a pre-configured virtual machine image that can be used to quickly create new instances.',
    example: 'I created a golden image of my web server so I can quickly create new instances.'
  },
  {
    id: 'userdata',
    term: 'UserData',
    slug: 'userdata',
    definition: 'UserData is a feature of some cloud providers that allows you to pass a script to an instance that will be executed on first boot.',
    example: 'I used UserData to install some software on my EC2 instance when it was first created.'
  },
  {
    id: 'keypair',
    term: 'Keypair',
    slug: 'keypair',
    definition: 'A keypair is a set of a public key and a private key that is used for SSH authentication.',
    example: 'I created a keypair to connect to my EC2 instance.'
  },
  {
    id: 'security-group',
    term: 'Security Group',
    slug: 'security-group',
    definition: 'A security group is a virtual firewall for your instance to control inbound and outbound traffic.',
    example: 'I created a security group to allow SSH access to my EC2 instance.'
  },
  {
    id: 'nacl',
    term: 'NACL',
    slug: 'nacl',
    definition: 'A Network Access Control List (NACL) is an optional layer of security for your VPC that acts as a firewall for controlling traffic in and out of one or more subnets.',
    example: 'I used a NACL to block all traffic from a malicious IP address.'
  },
  {
    id: 'public-subnet',
    term: 'Public Subnet',
    slug: 'public-subnet',
    definition: 'A public subnet is a subnet that is associated with a route table that has a route to an Internet Gateway.',
    example: 'I launched my web server in a public subnet so it could be accessed from the internet.'
  },
  {
    id: 'private-subnet',
    term: 'Private Subnet',
    slug: 'private-subnet',
    definition: 'A private subnet is a subnet that is not associated with a route table that has a route to an Internet Gateway.',
    example: 'I launched my database server in a private subnet so it could not be accessed from the internet.'
  },
  {
    id: 'transit-gateway',
    term: 'Transit Gateway',
    slug: 'transit-gateway',
    definition: 'A transit gateway is a network transit hub that you can use to interconnect your virtual private clouds (VPCs) and on-premises networks.',
    example: 'I used a transit gateway to connect my VPCs in different regions.'
  },
  {
    id: 'placement-group',
    term: 'Placement Group',
    slug: 'placement-group',
    definition: 'A placement group is a logical grouping of instances within a single Availability Zone. Placement groups are recommended for applications that benefit from low network latency, high network throughput, or both.',
    example: 'I launched my high-performance computing cluster in a placement group.'
  },
  {
    id: 'ebs-volume',
    term: 'EBS Volume',
    slug: 'ebs-volume',
    definition: 'An Amazon Elastic Block Store (EBS) volume is a durable, block-level storage device that you can attach to a single EC2 instance.',
    example: 'I attached an EBS volume to my EC2 instance to store my application data.'
  },
  {
    id: 'multi-az',
    term: 'Multi-AZ',
    slug: 'multi-az',
    definition: 'Multi-AZ deployments provide enhanced availability and durability for your database instances, making them a natural fit for production environments.',
    example: 'I deployed my database in a Multi-AZ configuration for high availability.'
  },
  {
    id: 'blob-store',
    term: 'Blob Store',
    slug: 'blob-store',
    definition: 'A blob store is a type of object storage that is used to store large binary objects, such as images and videos.',
    example: 'I use a blob store to store all the images for my website.'
  },
  {
    id: 'operator',
    term: 'Operator',
    slug: 'operator',
    definition: 'An Operator is a method of packaging, deploying, and managing a Kubernetes application.',
    example: 'I used the Prometheus Operator to deploy and manage Prometheus on my Kubernetes cluster.'
  },
  {
    id: 'sidecar-injector',
    term: 'Sidecar Injector',
    slug: 'sidecar-injector',
    definition: 'A sidecar injector is a Kubernetes feature that automatically injects a sidecar container into pods.',
    example: 'I used a sidecar injector to automatically inject the Istio proxy into all my pods.'
  },
  {
    id: 'mutating-webhook',
    term: 'Mutating Webhook',
    slug: 'mutating-webhook',
    definition: 'A mutating webhook is a Kubernetes admission webhook that can modify objects before they are created.',
    example: 'I used a mutating webhook to automatically add a label to all new pods.'
  },
  {
    id: 'validating-webhook',
    term: 'Validating Webhook',
    slug: 'validating-webhook',
    definition: 'A validating webhook is a Kubernetes admission webhook that can validate objects before they are created.',
    example: 'I used a validating webhook to ensure that all new pods have a resource request.'
  },
  {
    id: 'slo',
    term: 'SLO',
    slug: 'slo',
    definition: 'A Service Level Objective (SLO) is a target value or range of values for a service level that is measured by an SLI.',
    example: 'Our SLO for uptime is 99.99%.'
  },
  {
    id: 'sli',
    term: 'SLI',
    slug: 'sli',
    definition: 'A Service Level Indicator (SLI) is a carefully defined quantitative measure of some aspect of the level of service that is provided.',
    example: 'Our SLI for latency is the 99th percentile response time.'
  },
  {
    id: 'golden-signal',
    term: 'Golden Signal',
    slug: 'golden-signal',
    definition: 'The four golden signals of monitoring are latency, traffic, errors, and saturation.',
    example: 'I am monitoring the four golden signals for my service.'
  },
  {
    id: 'observability',
    term: 'Observability',
    slug: 'observability',
    definition: 'Observability is the ability to measure the internal states of a system by examining its external outputs.',
    example: 'We are using a combination of logs, metrics, and traces to improve the observability of our system.'
  },
  {
    id: 'tracing',
    term: 'Tracing',
    slug: 'tracing',
    definition: 'Distributed tracing is a method of tracking requests as they flow through a distributed system.',
    example: 'I used tracing to find the bottleneck in my microservices architecture.'
  },
  {
    id: 'span',
    term: 'Span',
    slug: 'span',
    definition: 'A span is a single operation in a distributed trace.',
    example: 'The database query was a single span in the trace.'
  },
  {
    id: 'jaeger',
    term: 'Jaeger',
    slug: 'jaeger',
    definition: 'Jaeger is an open-source, end-to-end distributed tracing system.',
    example: 'I use Jaeger to visualize my distributed traces.'
  },
  {
    id: 'zipkin',
    term: 'Zipkin',
    slug: 'zipkin',
    definition: 'Zipkin is a distributed tracing system. It helps gather timing data needed to troubleshoot latency problems in microservice architectures.',
    example: 'I use Zipkin to trace requests as they flow through my system.'
  },
  {
    id: 'fluentd',
    term: 'FluentD',
    slug: 'fluentd',
    definition: 'Fluentd is an open-source data collector for unified logging layer.',
    example: 'I use Fluentd to collect logs from all my servers and send them to Elasticsearch.'
  },
  {
    id: 'log-shipper',
    term: 'Log Shipper',
    slug: 'log-shipper',
    definition: 'A log shipper is a tool that collects logs from a source and sends them to a destination.',
    example: 'I use Filebeat as a log shipper to send my logs to Elasticsearch.'
  },
  {
    id: 'graylog',
    term: 'Graylog',
    slug: 'graylog',
    definition: 'Graylog is a centralized log management solution for capturing, storing, and analyzing terabytes of machine data.',
    example: 'I use Graylog to analyze my web server logs.'
  },
  {
    id: 'elastic-stack',
    term: 'Elastic Stack',
    slug: 'elastic-stack',
    definition: 'The Elastic Stack is a group of open-source products from Elastic that are designed to help users take data from any type of source and in any format and search, analyze, and visualize that data in real time.',
    example: 'I use the Elastic Stack to power my log analysis platform.'
  },
  {
    id: 'beats',
    term: 'Beats',
    slug: 'beats',
    definition: 'Beats is a platform for single-purpose data shippers. They send data from hundreds or thousands of machines and systems to Logstash or Elasticsearch.',
    example: 'I use Filebeat to ship my log files to Elasticsearch.'
  },
  {
    id: 'indexer',
    term: 'Indexer',
    slug: 'indexer',
    definition: 'An indexer is a component of a search engine that collects, parses, and stores data to facilitate fast and accurate information retrieval.',
    example: 'The Elasticsearch indexer is responsible for indexing all the documents in my database.'
  },
  {
    id: 'query-dsl',
    term: 'Query DSL',
    slug: 'query-dsl',
    definition: 'A Query DSL is a domain-specific language for writing queries.',
    example: 'I used the Elasticsearch Query DSL to write a complex query.'
  },
  {
    id: 'ingest-pipeline',
    term: 'Ingest Pipeline',
    slug: 'ingest-pipeline',
    definition: 'An ingest pipeline is a series of processors that are applied to documents before they are indexed.',
    example: 'I used an ingest pipeline to parse my log messages and extract the relevant fields.'
  },
  {
    id: 'cold-node',
    term: 'Cold Node',
    slug: 'cold-node',
    definition: 'In Elasticsearch, a cold node is a node that is used to store data that is accessed infrequently.',
    example: 'I use cold nodes to store my old log data.'
  },
  {
    id: 'hot-node',
    term: 'Hot Node',
    slug: 'hot-node',
    definition: 'In Elasticsearch, a hot node is a node that is used to store data that is accessed frequently.',
    example: 'I use hot nodes to store my most recent log data.'
  },
  {
    id: 'warm-node',
    term: 'Warm Node',
    slug: 'warm-node',
    definition: 'In Elasticsearch, a warm node is a node that is used to store data that is accessed less frequently than hot data, but more frequently than cold data.',
    example: 'I use warm nodes to store my log data from the last week.'
  },
  {
    id: 'ilm',
    term: 'ILM',
    slug: 'ilm',
    definition: 'Index Lifecycle Management (ILM) is a feature of Elasticsearch that allows you to automate the management of your indices.',
    example: 'I use ILM to automatically move my log data from hot nodes to warm nodes to cold nodes as it gets older.'
  },
  {
    id: 'sysstat',
    term: 'sysstat',
    slug: 'sysstat',
    definition: 'sysstat is a collection of performance monitoring tools for Linux.',
    example: 'I use sysstat to monitor the performance of my servers.'
  },
  {
    id: 'iostat',
    term: 'iostat',
    slug: 'iostat',
    definition: 'iostat is a command-line tool that is used to monitor system input/output device loading.',
    example: 'I used iostat to see how much I/O my hard drive was doing.'
  },
  {
    id: 'vmstat',
    term: 'vmstat',
    slug: 'vmstat',
    definition: 'vmstat is a command-line tool that is used to monitor virtual memory statistics.',
    example: 'I used vmstat to see how much memory my system was using.'
  },
  {
    id: 'sar',
    term: 'sar',
    slug: 'sar',
    definition: 'sar (System Activity Reporter) is a command-line tool that is used to collect and report system activity information.',
    example: 'I used sar to collect performance data from my servers over a period of time.'
  },
  {
    id: 'perf',
    term: 'perf',
    slug: 'perf',
    definition: 'perf is a performance analysis tool for Linux.',
    example: 'I used perf to profile my application and find the performance bottlenecks.'
  },
  {
    id: 'flamegraph',
    term: 'flamegraph',
    slug: 'flamegraph',
    definition: 'A flame graph is a visualization of profiled software, allowing the most frequent code-paths to be identified quickly and accurately.',
    example: 'I used a flame graph to visualize the results of my perf profile.'
  },
  {
    id: 'bootchart',
    term: 'bootchart',
    slug: 'bootchart',
    definition: 'bootchart is a tool for performance analysis and visualization of the Linux boot process.',
    example: 'I used bootchart to see what was taking so long during the boot process.'
  },
  {
    id: 'smem',
    term: 'smem',
    slug: 'smem',
    definition: 'smem is a memory reporting tool that can give a number of different reports on memory usage on Linux systems.',
    example: 'I used smem to get a detailed breakdown of the memory usage on my system.'
  },
  {
    id: 'slabtop',
    term: 'slabtop',
    slug: 'slabtop',
    definition: 'slabtop is a command-line tool that is used to display real-time kernel slab cache information.',
    example: 'I used slabtop to see how the kernel was using memory.'
  },
  {
    id: 'strace',
    term: 'strace',
    slug: 'strace',
    definition: 'strace is a diagnostic, debugging and instructional userspace utility for Linux. It is used to monitor the interaction between processes and the Linux kernel, which include system calls, signal deliveries, and changes of process state.',
    example: 'I used strace to see what system calls my application was making.'
  },
  {
    id: 'ltrace',
    term: 'ltrace',
    slug: 'ltrace',
    definition: 'ltrace is a program that simply runs the specified command until it exits. It intercepts and records the dynamic library calls which are called by the executed process and the signals which are received by that process.',
    example: 'I used ltrace to see what library calls my application was making.'
  },
  {
    id: 'tcpflow',
    term: 'tcpflow',
    slug: 'tcpflow',
    definition: 'tcpflow is a program that captures data transmitted as part of TCP connections (flows), and stores the data in a way that is convenient for protocol analysis or debugging.',
    example: 'I used tcpflow to capture the HTTP traffic from my application.'
  },
  {
    id: 'ss',
    term: 'ss',
    slug: 'ss',
    definition: 'ss is a utility to investigate sockets. It can display stats for PACKET, TCP, UDP, DCCP, RAW, and Unix domain sockets.',
    example: 'I used `ss -t` to see all the TCP sockets on my system.'
  },
  {
    id: 'bpftrace',
    term: 'bpftrace',
    slug: 'bpftrace',
    definition: 'bpftrace is a high-level tracing language for Linux eBPF.',
    example: 'I used bpftrace to write a simple script to trace the open system call.'
  },
  {
    id: 'ebpf-map',
    term: 'eBPF Map',
    slug: 'ebpf-map',
    definition: 'An eBPF map is a key-value store that can be used to share data between eBPF programs and between eBPF programs and user-space applications.',
    example: 'I used an eBPF map to store the results of my trace.'
  },
  {
    id: 'xdp',
    term: 'XDP',
    slug: 'xdp',
    definition: 'XDP (eXpress Data Path) is a high-performance data path within the Linux kernel. It allows you to process packets at the earliest possible point in the networking stack.',
    example: 'I used XDP to write a high-performance firewall.'
  },
  {
    id: 'cilium',
    term: 'Cilium',
    slug: 'cilium',
    definition: 'Cilium is an open source project that provides networking, observability, and security for cloud native environments with eBPF.',
    example: 'I use Cilium as the CNI for my Kubernetes cluster.'
  },
  {
    id: 'falco',
    term: 'Falco',
    slug: 'falco',
    definition: 'Falco is a cloud native runtime security tool. It is designed to detect anomalous activity in your applications.',
    example: 'I use Falco to detect security threats in my Kubernetes cluster.'
  },
  {
    id: 'kube-hunter',
    term: 'kube-hunter',
    slug: 'kube-hunter',
    definition: 'kube-hunter hunts for security weaknesses in Kubernetes clusters.',
    example: 'I ran kube-hunter to find any security issues in my Kubernetes cluster.'
  },
  {
    id: 'shodan',
    term: 'Shodan',
    slug: 'shodan',
    definition: 'Shodan is a search engine for Internet-connected devices.',
    example: 'I used Shodan to find all the webcams that are exposed to the internet.'
  },
  {
    id: 'censys',
    term: 'Censys',
    slug: 'censys',
    definition: 'Censys is a search engine that allows computer scientists to ask questions about the devices and networks that compose the Internet.',
    example: 'I used Censys to find all the servers that are vulnerable to the Heartbleed bug.'
  },
  {
    id: 'maltego',
    term: 'Maltego',
    slug: 'maltego',
    definition: 'Maltego is a software used for open-source intelligence and forensics. Maltego focuses on providing a library of transforms for discovery of data from open sources, and visualizing that information in a graph format.',
    example: 'I used Maltego to map out the relationships between a group of hackers.'
  },
  {
    id: 'dorking',
    term: 'Dorking',
    slug: 'dorking',
    definition: 'Google dorking, also known as Google hacking, is a hacker technique that uses Google Search and other Google applications to find security holes in the configuration and computer code that websites are using.',
    example: 'I used Google dorking to find a website that was vulnerable to SQL injection.'
  },
  {
    id: 'recon',
    term: 'Recon',
    slug: 'recon',
    definition: 'Reconnaissance is the first phase of a penetration test. It is the process of gathering information about a target.',
    example: 'I did some recon on the target company and found their IP address range.'
  },
  {
    id: 'osint',
    term: 'OSINT',
    slug: 'osint',
    definition: 'Open-source intelligence (OSINT) is a multi-methods methodology for collecting, analyzing and making decisions about data accessible in publicly available sources to be used in an intelligence context.',
    example: 'I used OSINT to find the target\'s email address.'
  },
  {
    id: 'red-team',
    term: 'Red Team',
    slug: 'red-team',
    definition: 'A red team is a group of security professionals who act as adversaries to test the security of a system.',
    example: 'Our red team was able to gain access to our internal network.'
  },
  {
    id: 'blue-team',
    term: 'Blue Team',
    slug: 'blue-team',
    definition: 'A blue team is a group of security professionals who are responsible for defending a system against a red team.',
    example: 'Our blue team was able to detect and block the red team\'s attack.'
  },
  {
    id: 'purple-team',
    term: 'Purple Team',
    slug: 'purple-team',
    definition: 'A purple team is a group of security professionals who work together to improve the security of a system. It is a combination of a red team and a blue team.',
    example: 'Our purple team is responsible for both attacking and defending our systems.'
  },
  {
    id: 'payload-dropping',
    term: 'Payload Dropping',
    slug: 'payload-dropping',
    definition: 'Payload dropping is the process of delivering a malicious payload to a target system.',
    example: 'The attacker used a phishing email to drop a malicious payload on the victim\'s computer.'
  },
  {
    id: 'webshell',
    term: 'Webshell',
    slug: 'webshell',
    definition: 'A webshell is a script that can be uploaded to a web server to enable remote administration of the machine.',
    example: 'The attacker uploaded a webshell to the server to gain remote access.'
  },
  {
    id: 'reverse-shell',
    term: 'Reverse Shell',
    slug: 'reverse-shell',
    definition: 'A reverse shell is a type of shell in which the target machine communicates back to the attacking machine. The attacking machine has a listener port on which it receives the connection.',
    example: 'The attacker got a reverse shell on the victim\'s computer.'
  },
  {
    id: 'bind-shell',
    term: 'Bind Shell',
    slug: 'bind-shell',
    definition: 'A bind shell is a type of shell in which the target machine opens a listener port and the attacking machine connects to it.',
    example: 'The attacker got a bind shell on the victim\'s computer.'
  },
  {
    id: 'priv-esc',
    term: 'Priv Esc',
    slug: 'priv-esc',
    definition: 'Privilege escalation is the act of exploiting a bug, design flaw or configuration oversight in an operating system or software application to gain elevated access to resources that are normally protected from an application or user.',
    example: 'The attacker used a kernel exploit to perform a privilege escalation attack.'
  },
  {
    id: 'lateral-move',
    term: 'Lateral Move',
    slug: 'lateral-move',
    definition: 'Lateral movement is a technique that attackers use to move through a network in search of sensitive data and other high-value assets.',
    example: 'The attacker used a pass-the-hash attack to move laterally through the network.'
  },
  {
    id: 'pivoting',
    term: 'Pivoting',
    slug: 'pivoting',
    definition: 'Pivoting is a technique that allows an attacker to use a compromised system to attack other systems on the same network.',
    example: 'The attacker used the compromised web server to pivot into the internal network.'
  },
  {
    id: 'tunneling',
    term: 'Tunneling',
    slug: 'tunneling',
    definition: 'Tunneling is a protocol that allows for the secure movement of data from one network to another. Tunneling involves allowing private network communications to be sent across a public network, such as the Internet, through a process called encapsulation.',
    example: 'I used an SSH tunnel to securely access my home network from work.'
  },
  {
    id: 'dns-tunnel',
    term: 'DNS Tunnel',
    slug: 'dns-tunnel',
    definition: 'DNS tunneling is a method of cyber attack that encodes the data of other programs or protocols in DNS queries and responses.',
    example: 'The attacker used a DNS tunnel to exfiltrate data from the compromised system.'
  },
  {
    id: 'icmp-tunnel',
    term: 'ICMP Tunnel',
    slug: 'icmp-tunnel',
    definition: 'ICMP tunneling is a method of cyber attack that encodes data in ICMP packets.',
    example: 'The attacker used an ICMP tunnel to bypass the firewall.'
  },
  {
    id: 'exfil',
    term: 'Exfil',
    slug: 'exfil',
    definition: 'Data exfiltration is the unauthorized transfer of data from a computer.',
    example: 'The attacker exfiltrated the data to a remote server.'
  },
  {
    id: 'rat-beacon',
    term: 'RAT Beacon',
    slug: 'rat-beacon',
    definition: 'A RAT beacon is a periodic signal sent from a Remote Access Trojan to a command and control server.',
    example: 'The RAT beacon was used to maintain communication with the compromised system.'
  },
  {
    id: 'sleeper-malware',
    term: 'Sleeper Malware',
    slug: 'sleeper-malware',
    definition: 'Sleeper malware is a type of malware that remains dormant on a system for a period of time before it is activated.',
    example: 'The sleeper malware was activated on a specific date to launch an attack.'
  },
  {
    id: 'polymorphic-malware',
    term: 'Polymorphic Malware',
    slug: 'polymorphic-malware',
    definition: 'Polymorphic malware is a type of malware that constantly changes its identifiable features in order to evade detection.',
    example: 'The polymorphic malware was able to evade detection by the antivirus software.'
  },
  {
    id: 'metamorphic-malware',
    term: 'Metamorphic Malware',
    slug: 'metamorphic-malware',
    definition: 'Metamorphic malware is a type of malware that completely rewrites itself each time it infects a new system.',
    example: 'The metamorphic malware was very difficult to detect and remove.'
  },
  {
    id: 'loader',
    term: 'Loader',
    slug: 'loader',
    definition: 'A loader is a type of malware that is used to download and execute other malicious payloads.',
    example: 'The loader downloaded a keylogger and a RAT to the victim\'s computer.'
  },
  {
    id: 'crypter',
    term: 'Crypter',
    slug: 'crypter',
    definition: 'A crypter is a type of software that is used to encrypt and obfuscate malware to make it harder to detect.',
    example: 'The attacker used a crypter to encrypt the malware before sending it to the victim.'
  },
  {
    id: 'stager',
    term: 'Stager',
    slug: 'stager',
    definition: 'A stager is a small piece of code that is used to download and execute a larger malicious payload.',
    example: 'The attacker used a stager to download a RAT to the victim\'s computer.'
  },
  {
    id: 'stageless',
    term: 'Stageless',
    slug: 'stageless',
    definition: 'A stageless payload is a malicious payload that is executed directly, without the use of a stager.',
    example: 'The attacker used a stageless payload to execute a command on the victim\'s computer.'
  },
  {
    id: 'reflective-loading',
    term: 'Reflective Loading',
    slug: 'reflective-loading',
    definition: 'Reflective DLL loading is a library injection technique in which a library is loaded from memory into a host process.',
    example: 'The attacker used reflective loading to load a malicious DLL into a legitimate process.'
  },
  {
    id: 'amse',
    term: 'AMSE',
    slug: 'amse',
    definition: 'Antimalware Scan Interface (AMSI) is a generic interface standard that allows applications and services to integrate with any antimalware product that’s present on a machine.',
    example: 'The malware used a technique to bypass AMSE and execute in memory.'
  },
  {
    id: 'hook-injection',
    term: 'Hook Injection',
    slug: 'hook-injection',
    definition: 'Hook injection is a technique used to inject malicious code into a legitimate process by hooking API calls.',
    example: 'The attacker used hook injection to intercept the user\'s credentials.'
  },
  {
    id: 'dll-sideload',
    term: 'DLL Sideload',
    slug: 'dll-sideload',
    definition: 'DLL sideloading is a type of attack where an attacker places a malicious DLL in a location where it will be loaded by a legitimate application.',
    example: 'The attacker used DLL sideloading to execute malicious code with the privileges of a legitimate application.'
  },
  {
    id: 'process-hollowing',
    term: 'Process Hollowing',
    slug: 'process-hollowing',
    definition: 'Process hollowing is a technique in which an attacker creates a new process in a suspended state and then replaces its memory with malicious code.',
    example: 'The attacker used process hollowing to execute malicious code in the context of a legitimate process.'
  },
  {
    id: 'parent-spoofing',
    term: 'Parent Spoofing',
    slug: 'parent-spoofing',
    definition: 'Parent PID spoofing is a technique in which an attacker creates a new process with a forged parent process ID.',
    example: 'The attacker used parent PID spoofing to make their malicious process look like it was created by a legitimate process.'
  },
  {
    id: 'thread-hijack',
    term: 'Thread Hijack',
    slug: 'thread-hijack',
    definition: 'Thread hijacking is a technique in which an attacker injects malicious code into a legitimate thread.',
    example: 'The attacker used thread hijacking to execute malicious code with the privileges of a legitimate thread.'
  },
  {
    id: 'apc-injection',
    term: 'APC Injection',
    slug: 'apc-injection',
    definition: 'Asynchronous Procedure Call (APC) injection is a technique in which an attacker injects malicious code into a legitimate process by queuing an APC.',
    example: 'The attacker used APC injection to execute malicious code in the context of a legitimate process.'
  },
  {
    id: 'encoder',
    term: 'Encoder',
    slug: 'encoder',
    definition: 'An encoder is a tool that is used to mutate shellcode to evade detection.',
    example: 'The attacker used an encoder to mutate their shellcode and bypass the antivirus software.'
  },
  {
    id: 'canary-value',
    term: 'Canary Value',
    slug: 'canary-value',
    definition: 'A canary value is a known value that is placed on the stack before a buffer. If the canary value is overwritten, it indicates that a buffer overflow has occurred.',
    example: 'The compiler added a canary value to the stack to protect against buffer overflow attacks.'
  },
  {
    id: 'dep',
    term: 'DEP',
    slug: 'dep',
    definition: 'Data Execution Prevention (DEP) is a security feature that prevents code from being executed from memory regions that are marked as non-executable.',
    example: 'I enabled DEP to protect against buffer overflow attacks.'
  },
  {
    id: 'aslr',
    term: 'ASLR',
    slug: 'aslr',
    definition: 'Address Space Layout Randomization (ASLR) is a security feature that randomizes the memory addresses of key data areas of a process.',
    example: 'I enabled ASLR to make it harder for an attacker to exploit a buffer overflow vulnerability.'
  },
  {
    id: 'cfg',
    term: 'CFG',
    slug: 'cfg',
    definition: 'Control Flow Guard (CFG) is a security feature that is designed to combat memory corruption vulnerabilities.',
    example: 'I enabled CFG to protect against return-oriented programming attacks.'
  },
  {
    id: 'sih',
    term: 'SIH',
    slug: 'sih',
    definition: 'Security and Health (SIH) is a Windows service that is responsible for installing security and health updates.',
    example: 'The SIH client downloaded and installed the latest security updates.'
  },
  {
    id: 'code-cave',
    term: 'Code Cave',
    slug: 'code-cave',
    definition: 'A code cave is a section of unused memory in a process that can be used to inject malicious code.',
    example: 'The attacker found a code cave in a legitimate process and used it to inject their shellcode.'
  },
  {
    id: 'patch-guard',
    term: 'Patch Guard',
    slug: 'patch-guard',
    definition: 'PatchGuard is a feature of 64-bit versions of Microsoft Windows that prevents the patching of the kernel.',
    example: 'PatchGuard makes it much harder to write rootkits for 64-bit versions of Windows.'
  },
  {
    id: 'minifilter',
    term: 'MiniFilter',
    slug: 'minifilter',
    definition: 'A minifilter driver is a file system filter driver that attaches to the file system stack.',
    example: 'Our antivirus software uses a minifilter driver to scan files for malware.'
  },
  {
    id: 'etw-patch',
    term: 'ETW Patch',
    slug: 'etw-patch',
    definition: 'An ETW patch is a technique used to bypass Event Tracing for Windows (ETW) by patching the ETW functions in memory.',
    example: 'The malware used an ETW patch to evade detection by security products that rely on ETW.'
  },
  {
    id: 'syscall-stub',
    term: 'Syscall Stub',
    slug: 'syscall-stub',
    definition: 'A syscall stub is a small piece of code that is used to make a system call.',
    example: 'The malware used a direct syscall stub to bypass API hooking.'
  },
  {
    id: 'direct-nt-calls',
    term: 'Direct NT Calls',
    slug: 'direct-nt-calls',
    definition: 'Direct NT calls are a technique used to make system calls directly to the NT kernel, bypassing the user-mode API.',
    example: 'The malware used direct NT calls to evade detection by security products that hook the user-mode API.'
  },
  {
    id: 'driver-loader',
    term: 'Driver Loader',
    slug: 'driver-loader',
    definition: 'A driver loader is a tool that is used to load a kernel-mode driver.',
    example: 'The rootkit used a driver loader to load its malicious driver.'
  },
  {
    id: 'bootkit',
    term: 'Bootkit',
    slug: 'bootkit',
    definition: 'A bootkit is a type of malware that infects the bootloader of a computer.',
    example: 'The bootkit was able to survive a reinstall of the operating system.'
  },
  {
    id: 'firmware-rootkit',
    term: 'Firmware Rootkit',
    slug: 'firmware-rootkit',
    definition: 'A firmware rootkit is a type of malware that infects the firmware of a computer.',
    example: 'The firmware rootkit was very difficult to detect and remove.'
  },
  {
    id: 'intel-me',
    term: 'Intel ME',
    slug: 'intel-me',
    definition: 'The Intel Management Engine (ME) is an autonomous subsystem that has been incorporated in virtually all of Intel\'s processor chipsets since 2008.',
    example: 'The Intel ME has been criticized for its lack of transparency and potential security vulnerabilities.'
  },
  {
    id: 'amd-psp',
    term: 'AMD PSP',
    slug: 'amd-psp',
    definition: 'The AMD Platform Security Processor (PSP) is a trusted execution environment subsystem incorporated into AMD microprocessors.',
    example: 'The AMD PSP is similar to the Intel Management Engine.'
  },
  {
    id: 't2-chip',
    term: 'T2 Chip',
    slug: 't2-chip',
    definition: 'The T2 chip is a custom security chip designed by Apple that is used in their Mac computers.',
    example: 'The T2 chip provides a secure boot process and encrypted storage.'
  },
  {
    id: 'secure-enclave',
    term: 'Secure Enclave',
    slug: 'secure-enclave',
    definition: 'A secure enclave is a hardware-based security feature that provides a secure area for storing and processing sensitive data.',
    example: 'The T2 chip has a secure enclave that is used to store the user\'s fingerprints.'
  },
  {
    id: 'enclave',
    term: 'Enclave',
    slug: 'enclave',
    definition: 'An enclave is an isolated execution environment.',
    example: 'Intel SGX allows you to create enclaves to protect your code and data.'
  },
  {
    id: 'sgx',
    term: 'SGX',
    slug: 'sgx',
    definition: 'Intel Software Guard Extensions (SGX) is a set of security-related instruction codes that are built into some modern Intel central processing units (CPUs).',
    example: 'I used SGX to create a secure enclave for my application.'
  },
  {
    id: 'tpm-attestation',
    term: 'TPM Attestation',
    slug: 'tpm-attestation',
    definition: 'TPM attestation is a process that allows a remote party to verify the integrity of a computer\'s boot process.',
    example: 'I used TPM attestation to verify that my server was running a trusted operating system.'
  },
  {
    id: 'fde',
    term: 'FDE',
    slug: 'fde',
    definition: 'Full Disk Encryption (FDE) is a technology that encrypts all the data on a hard drive.',
    example: 'I enabled FDE on my laptop to protect my data in case it is lost or stolen.'
  },
  {
    id: 'vault',
    term: 'Vault',
    slug: 'vault',
    definition: 'A vault is a secure storage location for secrets, such as passwords and API keys.',
    example: 'I store all my secrets in a HashiCorp Vault.'
  },
  {
    id: 'kms',
    term: 'KMS',
    slug: 'kms',
    definition: 'A Key Management Service (KMS) is a service that is used to manage cryptographic keys.',
    example: 'I use AWS KMS to manage the encryption keys for my S3 buckets.'
  },
  {
    id: 'hsm',
    term: 'HSM',
    slug: 'hsm',
    definition: 'A Hardware Security Module (HSM) is a physical computing device that safeguards and manages digital keys for strong authentication and provides cryptoprocessing.',
    example: 'I use an HSM to store my most sensitive keys.'
  },
  {
    id: 'rbac-matrix',
    term: 'RBAC Matrix',
    slug: 'rbac-matrix',
    definition: 'An RBAC matrix is a table that shows the permissions that are assigned to each role in a role-based access control system.',
    example: 'I used an RBAC matrix to design the permissions for my application.'
  },
  {
    id: 'alb',
    term: 'ALB',
    slug: 'alb',
    definition: 'An Application Load Balancer (ALB) is a type of load balancer that operates at the application layer (Layer 7).',
    example: 'I use an ALB to load balance traffic to my web servers.'
  },
  {
    id: 'nlb',
    term: 'NLB',
    slug: 'nlb',
    definition: 'A Network Load Balancer (NLB) is a type of load balancer that operates at the transport layer (Layer 4).',
    example: 'I use an NLB to load balance traffic to my database servers.'
  },
  {
    id: 'target-group',
    term: 'Target Group',
    slug: 'target-group',
    definition: 'A target group is a group of backend servers that a load balancer can send traffic to.',
    example: 'I created a target group for my web servers.'
  },
  {
    id: 'health-probe',
    term: 'Health Probe',
    slug: 'health-probe',
    definition: 'A health probe is a check that a load balancer performs to determine if a backend server is healthy.',
    example: 'I configured a health probe to check if my web servers are responding to requests.'
  },
  {
    id: 'sticky-cookie',
    term: 'Sticky Cookie',
    slug: 'sticky-cookie',
    definition: 'A sticky cookie is a cookie that is used to ensure that all requests from a particular client are sent to the same backend server.',
    example: 'I enabled sticky cookies on my load balancer to improve the performance of my application.'
  },
  {
    id: 'canary-routing',
    term: 'Canary Routing',
    slug: 'canary-routing',
    definition: 'Canary routing is a deployment strategy in which a small percentage of traffic is routed to a new version of an application to test it for bugs.',
    example: 'I used canary routing to deploy the new version of my application.'
  },
  {
    id: 'rolling-update',
    term: 'Rolling Update',
    slug: 'rolling-update',
    definition: 'A rolling update is a deployment strategy in which a new version of an application is gradually deployed to a cluster, one instance at a time.',
    example: 'I used a rolling update to deploy the new version of my application without any downtime.'
  },
  {
    id: 'git-tag',
    term: 'Git Tag',
    slug: 'git-tag',
    definition: 'A Git tag is a reference to a specific point in a Git repository\'s history.',
    example: 'I created a Git tag for the v1.0 release of my application.'
  },
  {
    id: 'semantic-version',
    term: 'Semantic Version',
    slug: 'semantic-version',
    definition: 'Semantic versioning is a versioning scheme for software that is designed to convey meaning about the underlying changes.',
    example: 'I follow semantic versioning for my application.'
  },
  {
    id: 'commit-hash',
    term: 'Commit Hash',
    slug: 'commit-hash',
    definition: 'A commit hash is a unique identifier for a Git commit.',
    example: 'I used the commit hash to revert to a previous version of my code.'
  },
  {
    id: 'stash',
    term: 'Stash',
    slug: 'stash',
    definition: 'A Git stash is a temporary storage area for changes that have not yet been committed.',
    example: 'I stashed my changes so I could switch to a different branch.'
  },
  {
    id: 'reflog',
    term: 'Reflog',
    slug: 'reflog',
    definition: 'The reflog is a log of all the references that have been updated in a Git repository.',
    example: 'I used the reflog to find a commit that I had accidentally deleted.'
  },
  {
    id: 'squash',
    term: 'Squash',
    slug: 'squash',
    definition: 'To squash is to combine multiple Git commits into a single commit.',
    example: 'I squashed my commits before I pushed them to the remote repository.'
  },
  {
    id: 'amend',
    term: 'Amend',
    slug: 'amend',
    definition: 'To amend is to edit the last Git commit.',
    example: 'I amended my last commit to fix a typo in the commit message.'
  },
  {
    id: 'fetch',
    term: 'Fetch',
    slug: 'fetch',
    definition: 'To fetch is to download the latest changes from a remote Git repository.',
    example: 'I fetched the latest changes from the remote repository before I started working.'
  },
  {
    id: 'origin',
    term: 'Origin',
    slug: 'origin',
    definition: 'Origin is the default name for the remote Git repository that a local repository was cloned from.',
    example: 'I pushed my changes to the origin repository.'
  },
  {
    id: 'bare-repo',
    term: 'Bare Repo',
    slug: 'bare-repo',
    definition: 'A bare repository is a Git repository that does not have a working directory.',
    example: 'I created a bare repository on my server to use as a central repository for my project.'
  },
  {
    id: 'submodule',
    term: 'Submodule',
    slug: 'submodule',
    definition: 'A submodule is a Git repository that is embedded within another Git repository.',
    example: 'I used a submodule to include a third-party library in my project.'
  },
  {
    id: 'cherry-pick',
    term: 'Cherry-Pick',
    slug: 'cherry-pick',
    definition: 'To cherry-pick is to select a single commit from one branch and apply it to another.',
    example: 'I cherry-picked a bug fix from the development branch into the master branch.'
  },
  {
    id: 'conflict-marker',
    term: 'Conflict Marker',
    slug: 'conflict-marker',
    definition: 'A conflict marker is a set of lines that are added to a file by Git when there is a merge conflict.',
    example: 'I had to resolve the conflict markers in the file before I could commit my changes.'
  },
  {
    id: 'makefile',
    term: 'Makefile',
    slug: 'makefile',
    definition: 'A makefile is a file that contains a set of rules for building a software project.',
    example: 'I used a makefile to automate the build process for my project.'
  },
  {
    id: 'target',
    term: 'Target',
    slug: 'target',
    definition: 'In a makefile, a target is a file that is to be built.',
    example: 'The `all` target in my makefile builds all the files in my project.'
  },
  {
    id: 'dependency-graph',
    term: 'Dependency Graph',
    slug: 'dependency-graph',
    definition: 'A dependency graph is a directed graph that represents the dependencies of a software project.',
    example: 'I used a tool to visualize the dependency graph of my project.'
  },
  {
    id: 'cicd',
    term: 'CICD',
    slug: 'cicd',
    definition: 'Continuous Integration and Continuous Delivery (CICD) is a set of practices that automates the software development process.',
    example: 'We use a CICD pipeline to automatically build, test, and deploy our application.'
  },
  {
    id: 'pipeline-stage',
    term: 'Pipeline Stage',
    slug: 'pipeline-stage',
    definition: 'A pipeline stage is a single step in a CICD pipeline.',
    example: 'The first stage in our pipeline is to build the application.'
  },
  {
    id: 'runner',
    term: 'Runner',
    slug: 'runner',
    definition: 'A runner is a process that executes a job in a CICD pipeline.',
    example: 'I have a self-hosted runner for my GitLab CICD pipeline.'
  },
  {
    id: 'cache-restore',
    term: 'Cache Restore',
    slug: 'cache-restore',
    definition: 'Cache restore is the process of loading a cache from a previous build.',
    example: 'I use cache restore to speed up my CICD pipeline.'
  },
  {
    id: 'workspace',
    term: 'Workspace',
    slug: 'workspace',
    definition: 'A workspace is the directory where a CICD pipeline executes its jobs.',
    example: 'The pipeline checks out the code into the workspace before it starts building.'
  },
  {
    id: 'cache-bust',
    term: 'Cache Bust',
    slug: 'cache-bust',
    definition: 'Cache busting is the process of invalidating a cache.',
    example: 'I busted the cache to make sure I was getting the latest version of the file.'
  },
  {
    id: 'artifact-store',
    term: 'Artifact Store',
    slug: 'artifact-store',
    definition: 'An artifact store is a repository for storing build artifacts.',
    example: 'I store all my build artifacts in an S3 bucket.'
  },
  {
    id: 'promotion',
    term: 'Promotion',
    slug: 'promotion',
    definition: 'Promotion is the process of moving a build from one environment to another, such as from staging to production.',
    example: 'I promoted the build to production after it passed all the tests.'
  },
  {
    id: 'roll-forward',
    term: 'Roll Forward',
    slug: 'roll-forward',
    definition: 'A roll forward is a deployment strategy in which a new version of an application is deployed to a new set of servers, and the old servers are then decommissioned.',
    example: 'I used a roll forward deployment to deploy the new version of my application.'
  },
  {
    id: 'code-smell',
    term: 'Code Smell',
    slug: 'code-smell',
    definition: 'A code smell is a surface indication that usually corresponds to a deeper problem in the system.',
    example: 'Long methods are a common code smell.'
  },
  {
    id: 'anti-pattern',
    term: 'Anti-Pattern',
    slug: 'anti-pattern',
    definition: 'An anti-pattern is a common response to a recurring problem that is usually ineffective and risks being highly counterproductive.',
    example: 'The God object is a classic anti-pattern.'
  },
  {
    id: 'dry',
    term: 'DRY',
    slug: 'dry',
    definition: 'Don\'t Repeat Yourself (DRY) is a principle of software development aimed at reducing repetition of software patterns.',
    example: 'I refactored the code to be more DRY.'
  },
  {
    id: 'kiss',
    term: 'KISS',
    slug: 'kiss',
    definition: 'Keep It Simple, Stupid (KISS) is a design principle which states that most systems work best if they are kept simple rather than made complicated.',
    example: 'I followed the KISS principle when I designed the new feature.'
  },
  {
    id: 'yagni',
    term: 'YAGNI',
    slug: 'yagni',
    definition: 'You Ain\'t Gonna Need It (YAGNI) is a principle of extreme programming that states a programmer should not add functionality until deemed necessary.',
    example: 'I decided not to add the new feature because of the YAGNI principle.'
  },
  {
    id: 'solid',
    term: 'SOLID',
    slug: 'solid',
    definition: 'SOLID is a mnemonic acronym for five design principles intended to make software designs more understandable, flexible, and maintainable.',
    example: 'I followed the SOLID principles when I designed the new class.'
  },
  {
    id: 'factory-pattern',
    term: 'Factory Pattern',
    slug: 'factory-pattern',
    definition: 'The factory method pattern is a creational pattern that uses factory methods to deal with the problem of creating objects without having to specify the exact class of the object that will be created.',
    example: 'I used a factory pattern to create the different types of users in my application.'
  },
  {
    id: 'singleton',
    term: 'Singleton',
    slug: 'singleton',
    definition: 'The singleton pattern is a software design pattern that restricts the instantiation of a class to one "single" instance.',
    example: 'I used a singleton pattern for my database connection.'
  },
  {
    id: 'decorator',
    term: 'Decorator',
    slug: 'decorator',
    definition: 'The decorator pattern is a design pattern that allows behavior to be added to an individual object, dynamically, without affecting the behavior of other objects from the same class.',
    example: 'I used a decorator to add logging to my class.'
  },
  {
    id: 'builder-pattern',
    term: 'Builder Pattern',
    slug: 'builder-pattern',
    definition: 'The builder pattern is a creational design pattern that lets you construct complex objects step by step.',
    example: 'I used a builder pattern to create the complex user object.'
  },
  {
    id: 'facade',
    term: 'Facade',
    slug: 'facade',
    definition: 'A facade is a software design pattern that provides a simplified interface to a larger body of code, such as a class library.',
    example: 'I created a facade to simplify the API of the complex library.'
  },
  {
    id: 'adapter',
    term: 'Adapter',
    slug: 'adapter',
    definition: 'The adapter pattern is a software design pattern that allows the interface of an existing class to be used as another interface.',
    example: 'I used an adapter to convert the interface of the old library to the new one.'
  },
  {
    id: 'proxy',
    term: 'Proxy',
    slug: 'proxy',
    definition: 'A proxy, in its most general form, is a class functioning as an interface to something else.',
    example: 'I used a proxy to control access to the real object.'
  },
  {
    id: 'strategy-pattern',
    term: 'Strategy Pattern',
    slug: 'strategy-pattern',
    definition: 'The strategy pattern is a behavioral software design pattern that enables selecting an algorithm at runtime.',
    example: 'I used a strategy pattern to allow the user to choose which sorting algorithm to use.'
  },
  {
    id: 'bridge-pattern',
    term: 'Bridge Pattern',
    slug: 'bridge-pattern',
    definition: 'The bridge pattern is a design pattern used in software engineering that is meant to "decouple an abstraction from its implementation so that the two can vary independently".',
    example: 'I used a bridge pattern to separate the UI from the business logic.'
  },
  {
    id: 'mediator',
    term: 'Mediator',
    slug: 'mediator',
    definition: 'The mediator pattern is a design pattern that encapsulates how a set of objects interact. This pattern is considered to be a behavioral pattern due to the way it can alter the program\'s running behavior.',
    example: 'I used a mediator to centralize the communication between the different components of my application.'
  },
  {
    id: 'command-pattern',
    term: 'Command Pattern',
    slug: 'command-pattern',
    definition: 'The command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time.',
    example: 'I used a command pattern to implement the undo/redo functionality in my application.'
  },
  {
    id: 'template-method',
    term: 'Template Method',
    slug: 'template-method',
    definition: 'The template method pattern is a behavioral design pattern that defines the program skeleton of an algorithm in an operation, deferring some steps to subclasses.',
    example: 'I used a template method to define the basic steps of the build process, and then created subclasses for each specific build target.'
  },
  {
    id: 'thread-pool',
    term: 'Thread Pool',
    slug: 'thread-pool',
    definition: 'A thread pool is a software design pattern for achieving concurrency of execution in a computer program.',
    example: 'I used a thread pool to process multiple requests in parallel.'
  },
  {
    id: 'event-loop',
    term: 'Event Loop',
    slug: 'event-loop',
    definition: 'An event loop is a programming construct that waits for and dispatches events or messages in a program.',
    example: 'JavaScript in the browser uses an event loop to handle user input and other events.'
  },
  {
    id: 'non-blocking-io',
    term: 'Non-blocking IO',
    slug: 'non-blocking-io',
    definition: 'Non-blocking I/O is a form of input/output processing that permits other processing to continue before the transmission has finished.',
    example: 'Node.js uses non-blocking I/O to handle many connections concurrently.'
  },
  {
    id: 'reactor-pattern',
    term: 'Reactor Pattern',
    slug: 'reactor-pattern',
    definition: 'The reactor pattern is a design pattern for handling service requests that are delivered concurrently to an application by one or more clients.',
    example: 'I used a reactor pattern to build a high-performance network server.'
  },
  {
    id: 'proactor-pattern',
    term: 'Proactor Pattern',
    slug: 'proactor-pattern',
    definition: 'The proactor pattern is a design pattern for handling service requests that are delivered concurrently to an application by one or more clients. It is similar to the reactor pattern, but it is completion-based instead of event-based.',
    example: 'I used a proactor pattern to build a high-performance network server on Windows.'
  },
  {
    id: 'fifo',
    term: 'FIFO',
    slug: 'fifo',
    definition: 'First-In, First-Out (FIFO) is a method of processing data in which the first item to be added to a queue is the first one to be removed.',
    example: 'A queue is a FIFO data structure.'
  },
  {
    id: 'lifo',
    term: 'LIFO',
    slug: 'lifo',
    definition: 'Last-In, First-Out (LIFO) is a method of processing data in which the last item to be added to a stack is the first one to be removed.',
    example: 'A stack is a LIFO data structure.'
  },
  {
    id: 'backpressure',
    term: 'Backpressure',
    slug: 'backpressure',
    definition: 'Backpressure is a form of flow control that is used to prevent a producer from overwhelming a consumer.',
    example: 'I used backpressure to prevent my web server from being overwhelmed with requests.'
  },
  {
    id: 'retry-policy',
    term: 'Retry Policy',
    slug: 'retry-policy',
    definition: 'A retry policy is a set of rules that determines how a failed operation should be retried.',
    example: 'I configured a retry policy to retry the failed API request up to 3 times.'
  },
  {
    id: 'circuit-breaker',
    term: 'Circuit Breaker',
    slug: 'circuit-breaker',
    definition: 'The circuit breaker pattern is a design pattern used in modern software development. It is used to detect failures and encapsulates the logic of preventing a failure from constantly recurring, during maintenance, temporary external system failure or unexpected system difficulties.',
    example: 'I used a circuit breaker to prevent my application from constantly trying to connect to a failed service.'
  },
  {
    id: 'bulkhead-pattern',
    term: 'Bulkhead Pattern',
    slug: 'bulkhead-pattern',
    definition: 'The bulkhead pattern is a type of application design that is tolerant of failure. In a bulkhead architecture, elements of an application are isolated into pools so that if one fails, the others will continue to function.',
    example: 'I used a bulkhead pattern to isolate the different services in my application.'
  },
  {
    id: 'health-endpoint',
    term: 'Health Endpoint',
    slug: 'health-endpoint',
    definition: 'A health endpoint is an API endpoint that is used to check the health of a service.',
    example: 'I created a health endpoint for my service that returns a 200 OK if the service is healthy.'
  },
  {
    id: 'warm-pool',
    term: 'Warm Pool',
    slug: 'warm-pool',
    definition: 'A warm pool is a pool of pre-warmed instances that can be used to quickly handle requests.',
    example: 'I use a warm pool to reduce the cold start time of my serverless functions.'
  },
  {
    id: 'shadow-traffic',
    term: 'Shadow Traffic',
    slug: 'shadow-traffic',
    definition: 'Shadow traffic is a deployment strategy in which a new version of an application is deployed alongside the old version, and a copy of the production traffic is sent to the new version to test it for bugs.',
    example: 'I used shadow traffic to test the new version of my application before I deployed it to production.'
  },
  {
    id: 'synthetic-monitoring',
    term: 'Synthetic Monitoring',
    slug: 'synthetic-monitoring',
    definition: 'Synthetic monitoring is a type of monitoring that simulates user traffic to test the performance and availability of an application.',
    example: 'I use synthetic monitoring to test my application 24/7.'
  },
  {
    id: 'canary-metric',
    term: 'Canary Metric',
    slug: 'canary-metric',
    definition: 'A canary metric is a metric that is used to detect problems with a new version of an application during a canary deployment.',
    example: 'I used the error rate as a canary metric for my canary deployment.'
  },
  {
    id: 'feature-flag',
    term: 'Feature Flag',
    slug: 'feature-flag',
    definition: 'A feature flag is a technique that allows you to turn features of your application on and off without deploying new code.',
    example: 'I used a feature flag to enable the new feature for a small group of users.'
  },
  {
    id: 'kill-switch',
    term: 'Kill Switch',
    slug: 'kill-switch',
    definition: 'A kill switch is a mechanism used to shut down or disable a device or program.',
    example: 'I used a kill switch to disable the new feature after it caused some problems.'
  },
  {
    id: 'telemetry-sink',
    term: 'Telemetry Sink',
    slug: 'telemetry-sink',
    definition: 'A telemetry sink is a destination for telemetry data.',
    example: 'I configured my application to send its telemetry data to a telemetry sink in the cloud.'
  },
  {
    id: 'log-rotation',
    term: 'Log Rotation',
    slug: 'log-rotation',
    definition: 'Log rotation is the process of archiving old log files and creating new ones.',
    example: 'I configured log rotation to rotate my log files every day.'
  },
  {
    id: 'sampling-rate',
    term: 'Sampling Rate',
    slug: 'sampling-rate',
    definition: 'The sampling rate is the number of samples of a signal that are taken per second.',
    example: 'I set the sampling rate for my telemetry data to 10% to reduce the amount of data I was collecting.'
  },
  {
    id: 'slo-burn-rate',
    term: 'SLO Burn Rate',
    slug: 'slo-burn-rate',
    definition: 'The SLO burn rate is the rate at which a service is consuming its error budget.',
    example: 'Our SLO burn rate is too high, so we need to improve the reliability of our service.'
  },
  {
    id: 'playbook',
    term: 'Playbook',
    slug: 'playbook',
    definition: 'A playbook is a set of instructions for responding to an incident.',
    example: 'I followed the playbook to resolve the production outage.'
  },
  {
    id: 'pager',
    term: 'Pager',
    slug: 'pager',
    definition: 'A pager is a device that is used to receive alerts.',
    example: 'I got a pager alert about the production outage.'
  },
  {
    id: 'cluster-drift',
    term: 'Cluster Drift',
    slug: 'cluster-drift',
    definition: 'Cluster drift is a situation in which the configuration of a cluster diverges from the desired configuration.',
    example: 'I used a tool to detect and fix the cluster drift.'
  },
  {
    id: 'policy-engine',
    term: 'Policy Engine',
    slug: 'policy-engine',
    definition: 'A policy engine is a tool that is used to enforce policies.',
    example: 'I used a policy engine to enforce security policies in my Kubernetes cluster.'
  },
  {
    id: 'audit-trail',
    term: 'Audit Trail',
    slug: 'audit-trail',
    definition: 'An audit trail is a record of all the changes that have been made to a system.',
    example: 'I used the audit trail to see who had made the change to the firewall rule.'
  },
  {
    id: 'token-refresh',
    term: 'Token Refresh',
    slug: 'token-refresh',
    definition: 'Token refresh is the process of getting a new access token after the old one has expired.',
    example: 'I implemented token refresh in my application to keep the user logged in.'
  },
  {
    id: 'crypto-wallet',
    term: 'Crypto Wallet',
    slug: 'crypto-wallet',
    definition: 'A crypto wallet is a software application that is used to store, send, and receive cryptocurrencies.',
    example: 'I use a hardware wallet to store my Bitcoin.'
  },
  {
    id: 'ledger',
    term: 'Ledger',
    slug: 'ledger',
    definition: 'A ledger is a record of all the transactions that have taken place in a cryptocurrency.',
    example: 'The Bitcoin ledger is public and can be viewed by anyone.'
  },
  {
    id: 'merkle-tree',
    term: 'Merkle Tree',
    slug: 'merkle-tree',
    definition: 'A Merkle tree is a tree in which every leaf node is labelled with the hash of a data block and every non-leaf node is labelled with the cryptographic hash of the labels of its child nodes.',
    example: 'Bitcoin uses a Merkle tree to efficiently verify transactions.'
  },
  {
    id: 'block-time',
    term: 'Block Time',
    slug: 'block-time',
    definition: 'The block time is the average time it takes to create a new block in a blockchain.',
    example: 'The Bitcoin block time is 10 minutes.'
  },
  {
    id: 'mempool',
    term: 'Mempool',
    slug: 'mempool',
    definition: 'The mempool is a pool of unconfirmed transactions.',
    example: 'My transaction is waiting in the mempool to be included in a block.'
  },
  {
    id: 'gas-limit',
    term: 'Gas Limit',
    slug: 'gas-limit',
    definition: 'The gas limit is the maximum amount of gas that a user is willing to spend on a transaction in Ethereum.',
    example: 'I set a high gas limit to make sure my transaction would be processed quickly.'
  },
  {
    id: 'consensus',
    term: 'Consensus',
    slug: 'consensus',
    definition: 'Consensus is the process of reaching an agreement among a group of nodes in a distributed system.',
    example: 'Bitcoin uses a proof-of-work consensus algorithm.'
  },
  {
    id: 'validator',
    term: 'Validator',
    slug: 'validator',
    definition: 'A validator is a node in a proof-of-stake blockchain that is responsible for validating transactions and creating new blocks.',
    example: 'I am running a validator node for the Ethereum network.'
  },
  {
    id: 'epoch',
    term: 'Epoch',
    slug: 'epoch',
    definition: 'An epoch is a period of time in a proof-of-stake blockchain.',
    example: 'The rewards are distributed to the validators at the end of each epoch.'
  },
  {
    id: 'checkpoint',
    term: 'Checkpoint',
    slug: 'checkpoint',
    definition: 'A checkpoint is a point in a blockchain where the state of the chain is considered to be final.',
    example: 'I waited for my transaction to be included in a checkpoint before I considered it to be final.'
  },
  {
    id: 'solidity',
    term: 'Solidity',
    slug: 'solidity',
    definition: 'Solidity is a high-level programming language for writing smart contracts.',
    example: 'I wrote a smart contract in Solidity for my decentralized application.'
  },
  {
    id: 'rpc-node',
    term: 'RPC Node',
    slug: 'rpc-node',
    definition: 'An RPC node is a node in a blockchain that provides an RPC interface for interacting with the blockchain.',
    example: 'I connected to an RPC node to send a transaction to the Ethereum network.'
  },
  {
    id: 'indexer-node',
    term: 'Indexer Node',
    slug: 'indexer-node',
    definition: 'An indexer node is a node in a blockchain that indexes the data on the blockchain to make it easier to query.',
    example: 'I use an indexer node to get the balance of an Ethereum account.'
  },
  {
    id: 'ipfs',
    term: 'IPFS',
    slug: 'ipfs',
    definition: 'The InterPlanetary File System (IPFS) is a peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open.',
    example: 'I store my files on IPFS so they can be accessed from anywhere.'
  },
  {
    id: 'pinning',
    term: 'Pinning',
    slug: 'pinning',
    definition: 'Pinning is the process of telling an IPFS node to keep a file permanently.',
    example: 'I pinned my files to my IPFS node to make sure they would not be deleted.'
  },
  {
    id: 'p2p-mesh',
    term: 'P2P Mesh',
    slug: 'p2p-mesh',
    definition: 'A peer-to-peer mesh is a network of peers that are all connected to each other.',
    example: 'I use a P2P mesh to share files with my friends.'
  },
  {
    id: 'overlay-node',
    term: 'Overlay Node',
    slug: 'overlay-node',
    definition: 'An overlay node is a node in a peer-to-peer network that is used to route traffic.',
    example: 'I am running an overlay node to help route traffic for the network.'
  },
  {
    id: 'peer-discovery',
    term: 'Peer Discovery',
    slug: 'peer-discovery',
    definition: 'Peer discovery is the process of finding other peers in a peer-to-peer network.',
    example: 'I used a DHT to discover other peers in the network.'
  },
  {
    id: 'seed-peer',
    term: 'Seed Peer',
    slug: 'seed-peer',
    definition: 'A seed peer is a peer in a peer-to-peer network that is used to bootstrap new peers.',
    example: 'I connected to a seed peer to join the network.'
  },
  {
    id: 'supernode',
    term: 'Supernode',
    slug: 'supernode',
    definition: 'A supernode is a peer in a peer-to-peer network that has a high bandwidth connection and a lot of processing power.',
    example: 'I am running a supernode to help support the network.'
  },
  {
    id: 'nat-punch',
    term: 'NAT Punch',
    slug: 'nat-punch',
    definition: 'NAT punching is a technique for establishing a direct connection between two peers that are behind NAT.',
    example: 'I used NAT punching to connect to my friend\'s computer.'
  },
  {
    id: 'relay-node',
    term: 'Relay Node',
    slug: 'relay-node',
    definition: 'A relay node is a peer in a peer-to-peer network that is used to relay traffic between other peers.',
    example: 'I am running a relay node to help relay traffic for the network.'
  },
  {
    id: 'dht',
    term: 'DHT',
    slug: 'dht',
    definition: 'A Distributed Hash Table (DHT) is a distributed system that provides a lookup service similar to a hash table.',
    example: 'I used a DHT to store the metadata for my files.'
  },
  {
    id: 'content-hash',
    term: 'Content Hash',
    slug: 'content-hash',
    definition: 'A content hash is a hash of the content of a file. It can be used to verify the integrity of a file.',
    example: 'I used a content hash to verify that the file I downloaded was not corrupted.'
  },
  {
    id: 'snapshot-sync',
    term: 'Snapshot Sync',
    slug: 'snapshot-sync',
    definition: 'Snapshot sync is a method of syncing a blockchain by downloading a snapshot of the chain state instead of replaying all the blocks from the beginning.',
    example: 'I used snapshot sync to quickly sync my Ethereum node.'
  },
  {
    id: 'archive-node',
    term: 'Archive Node',
    slug: 'archive-node',
    definition: 'An archive node is a blockchain node that stores the entire history of the blockchain.',
    example: 'I am running an archive node so I can query the state of the chain at any point in time.'
  },
  {
    id: 'rollup',
    term: 'Rollup',
    slug: 'rollup',
    definition: 'A rollup is a Layer 2 scaling solution for blockchains that processes transactions off-chain and then posts a summary of the transactions to the main chain.',
    example: 'I use a rollup to get faster and cheaper transactions on Ethereum.'
  },
  {
    id: 'sequencer',
    term: 'Sequencer',
    slug: 'sequencer',
    definition: 'A sequencer is a node in a rollup that is responsible for ordering transactions.',
    example: 'The sequencer is a centralized component of the rollup.'
  },
  {
    id: 'zk-proof',
    term: 'ZK Proof',
    slug: 'zk-proof',
    definition: 'A zero-knowledge proof is a method by which one party (the prover) can prove to another party (the verifier) that a given statement is true, without conveying any information apart from the fact that the statement is indeed true.',
    example: 'I used a ZK proof to prove that I know a secret without revealing the secret.'
  },
  {
    id: 'merkle-root',
    term: 'Merkle Root',
    slug: 'merkle-root',
    definition: 'The Merkle root is the root of a Merkle tree. It is a hash of all the hashes in the tree.',
    example: 'The Merkle root is used to efficiently verify the integrity of the data in the tree.'
  },
  {
    id: 'state-transition',
    term: 'State Transition',
    slug: 'state-transition',
    definition: 'A state transition is a change in the state of a system.',
    example: 'A transaction is a state transition in a blockchain.'
  },
  {
    id: 'finality',
    term: 'Finality',
    slug: 'finality',
    definition: 'Finality is the point at which a transaction is considered to be permanent and cannot be reversed.',
    example: 'I waited for my transaction to reach finality before I considered it to be complete.'
  },
  {
    id: 'reorg',
    term: 'Reorg',
    slug: 'reorg',
    definition: 'A reorg is a situation in which a blockchain is rolled back to a previous state.',
    example: 'The Ethereum network had a reorg last week.'
  },
  {
    id: 'fork-choice',
    term: 'Fork Choice',
    slug: 'fork-choice',
    definition: 'The fork choice rule is a rule that is used to decide which chain to follow in the event of a fork.',
    example: 'Bitcoin uses the longest chain rule as its fork choice rule.'
  },
  {
    id: 'soft-fork',
    term: 'Soft Fork',
    slug: 'soft-fork',
    definition: 'A soft fork is a change to a blockchain that is backward-compatible.',
    example: 'The SegWit upgrade was a soft fork.'
  },
  {
    id: 'hard-fork',
    term: 'Hard Fork',
    slug: 'hard-fork',
    definition: 'A hard fork is a change to a blockchain that is not backward-compatible.',
    example: 'The Ethereum Classic fork was a hard fork.'
  },
  {
    id: 'validator-set',
    term: 'Validator Set',
    slug: 'validator-set',
    definition: 'The validator set is the set of all the validators in a proof-of-stake blockchain.',
    example: 'The size of the validator set affects the security of the network.'
  },
  {
    id: 'slashing',
    term: 'Slashing',
    slug: 'slashing',
    definition: 'Slashing is a penalty that is imposed on a validator for misbehaving.',
    example: 'The validator was slashed for being offline for too long.'
  },
  {
    id: 'staking',
    term: 'Staking',
    slug: 'staking',
    definition: 'Staking is the process of locking up funds to participate in the consensus of a proof-of-stake blockchain.',
    example: 'I am staking my Ether to help secure the Ethereum network.'
  },
  {
    id: 'delegation',
    term: 'Delegation',
    slug: 'delegation',
    definition: 'Delegation is the process of assigning your staking rights to another party.',
    example: 'I delegated my staking rights to a professional validator.'
  },
  {
    id: 'governance-vote',
    term: 'Governance Vote',
    slug: 'governance-vote',
    definition: 'A governance vote is a vote on a proposal to change a blockchain protocol.',
    example: 'I voted on a governance proposal to increase the block size.'
  },
  {
    id: 'multi-sig',
    term: 'Multi-sig',
    slug: 'multi-sig',
    definition: 'Multi-signature (multi-sig) is a type of digital signature that allows multiple users to sign a single transaction.',
    example: 'I use a multi-sig wallet to store my Bitcoin.'
  },
  {
    id: 'vault-contract',
    term: 'Vault Contract',
    slug: 'vault-contract',
    definition: 'A vault contract is a smart contract that is used to store and manage funds.',
    example: 'I use a vault contract to store my Ether.'
  },
  {
    id: 'withdrawal-queue',
    term: 'Withdrawal Queue',
    slug: 'withdrawal-queue',
    definition: 'A withdrawal queue is a queue of users who are waiting to withdraw their funds from a smart contract.',
    example: 'I am in the withdrawal queue to withdraw my Ether from the vault.'
  },
  {
    id: 'protocol-upgrade',
    term: 'Protocol Upgrade',
    slug: 'protocol-upgrade',
    definition: 'A protocol upgrade is a change to a blockchain protocol.',
    example: 'The Ethereum network is currently undergoing a protocol upgrade to a proof-of-stake consensus algorithm.'
  }
];

