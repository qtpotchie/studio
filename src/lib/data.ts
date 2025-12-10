
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
    definition: 'Autohealing is a system\'s ability to automatically detect and recover from failures without human intervention.',
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
  }
];

    