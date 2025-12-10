
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
  }
];
