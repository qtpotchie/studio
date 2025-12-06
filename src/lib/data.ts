
export type Term = {
  id: string;
  term: string;
  slug: string;
  definition: string;
  example: string;
};

export const terms: Term[] = [
  {
    id: 'backhaul',
    term: 'Backhaul',
    slug: 'backhaul',
    definition: 'The portion of a network that comprises the intermediate links between the core network (or backbone) and the small subnetworks at the edge of the network.',
    example: 'The cell tower uses a fiber optic backhaul to connect to the main telephone network.'
  },
  {
    id: 'backing-store',
    term: 'Backing Store',
    slug: 'backing-store',
    definition: 'In virtual memory systems, the portion of a secondary storage device (like a hard drive) where pages of memory are stored when they are not in main memory.',
    example: 'The operating system swapped the inactive process out to the backing store to free up RAM.'
  },
  {
    id: 'backbone-network',
    term: 'Backbone Network',
    slug: 'backbone-network',
    definition: 'The part of a computer network that interconnects various pieces of the network, providing a path for the exchange of information between different LANs or sub-networks.',
    example: 'The university\'s fiber optic backbone network connects all the campus buildings to the central data center.'
  },
  {
    id: 'backscatter',
    term: 'Backscatter',
    slug: 'backscatter',
    definition: 'In network security, backscatter is the side-effect of a spoofed denial-of-service attack. It consists of the reply packets sent by the victim to the spoofed source IP address.',
    example: 'Security researchers analyze backscatter traffic to measure the scope and scale of DDoS attacks across the internet.'
  },
  {
    id: 'backtrace',
    term: 'Backtrace',
    slug: 'backtrace',
    definition: 'A report of the active stack frames at a certain point in time during the execution of a program. Also known as a stack trace.',
    example: 'When the program crashed, it printed a backtrace showing the sequence of function calls that led to the error.'
  },
  {
    id: 'backup-agent',
    term: 'Backup Agent',
    slug: 'backup-agent',
    definition: 'A piece of software installed on a computer or server that is responsible for backing up its data to a central backup server or cloud service.',
    example: 'The IT department installed a backup agent on all employee laptops.'
  },
  {
    id: 'backup-drive',
    term: 'Backup Drive',
    slug: 'backup-drive',
    definition: 'An external or secondary hard drive used to store backup copies of data.',
    example: 'He regularly connects his backup drive to his computer to make a copy of his important files.'
  },
  {
    id: 'backup-node',
    term: 'Backup Node',
    slug: 'backup-node',
    definition: 'In a distributed system, a node that maintains a backup copy of data and is ready to take over if the primary node fails.',
    example: 'The Hadoop cluster was configured with a backup NameNode to ensure high availability.'
  },
  {
    id: 'backup-server',
    term: 'Backup Server',
    slug: 'backup-server',
    definition: 'A server that is dedicated to storing backup data from other computers and servers on the network.',
    example: 'All the company\'s data is backed up nightly to a dedicated backup server.'
  },
  {
    id: 'backup-set',
    term: 'Backup Set',
    slug: 'backup-set',
    definition: 'A collection of files and folders that are backed up together as a single unit.',
    example: 'He created a backup set that included all his documents and photos.'
  },
  {
    id: 'backup-window',
    term: 'Backup Window',
    slug: 'backup-window',
    definition: 'A specific period of time designated for performing backup operations, usually during off-peak hours to minimize impact on system performance.',
    example: 'The daily backup window was from 1 AM to 4 AM.'
  },
  {
    id: 'backward-compatibility',
    term: 'Backward Compatibility',
    slug: 'backward-compatibility',
    definition: 'A property of a system, product, or technology that allows for interoperability with an older legacy system or with input designed for such a system.',
    example: 'The PlayStation 5 has backward compatibility, allowing it to play most PlayStation 4 games.'
  },
  {
    id: 'backward-propagation',
    term: 'Backward Propagation (Backprop)',
    slug: 'backward-propagation',
    definition: 'Short for "backward propagation of errors," it is a widely used algorithm for training artificial neural networks. It calculates the gradient of the loss function with respect to the weights of the network.',
    example: 'The deep learning model uses backward propagation to adjust its weights and improve its accuracy during training.'
  },
  {
    id: 'backwards-routing',
    term: 'Backwards Routing',
    slug: 'backwards-routing',
    definition: 'A non-standard term, likely referring to reverse path forwarding or analyzing return traffic.',
    example: 'The firewall used the return traffic to learn which connections were legitimate.'
  },
  {
    id: 'backport',
    term: 'Backport',
    slug: 'backport',
    definition: 'The action of taking a feature or fix from a newer version of software and applying it to an older version.',
    example: 'The developers decided to backport the security fix from the latest version to the long-term support release.'
  },
  {
    id: 'backpressure',
    term: 'Backpressure',
    slug: 'backpressure',
    definition: 'In data streaming, a mechanism that allows a consumer to signal to a producer to slow down the rate of data production to prevent being overwhelmed.',
    example: 'The data processing system uses backpressure to ensure that the ingestion service doesn\'t send data faster than the analytics engine can handle it.'
  },
  {
    id: 'backplane',
    term: 'Backplane',
    slug: 'backplane',
    definition: 'A circuit board that connects several connectors in parallel to each other, so that each pin of each connector is linked to the same relative pin of all the other connectors, forming a computer bus.',
    example: 'A blade server chassis has a backplane that provides power and networking to all the server blades.'
  },
  {
    id: 'backprop',
    term: 'Backprop',
    slug: 'backprop',
    definition: 'Short for "backward propagation of errors," a widely used algorithm for training artificial neural networks.',
    example: 'The core of training most neural networks is the backprop algorithm, which fine-tunes the model\'s parameters.'
  },
  {
    id: 'backscatter-radiation',
    term: 'Backscatter Radiation',
    slug: 'backscatter-radiation',
    definition: 'In physics, radiation that is deflected by scattering processes through an angle of more than 90 degrees. In airport security, a technology used for body scanning.',
    example: 'The airport installed new scanners that use backscatter radiation to detect hidden objects.'
  },
  {
    id: 'badge-reader',
    term: 'Badge Reader',
    slug: 'badge-reader',
    definition: 'An electronic device that reads credentials from a security badge to grant access to a building or system.',
    example: 'He swiped his ID on the badge reader to unlock the door to the office.'
  },
  {
    id: 'balanced-tree',
    term: 'Balanced Tree',
    slug: 'balanced-tree',
    definition: 'A tree data structure in which the heights of the left and right subtrees of any node differ by no more than one, ensuring efficient search operations.',
    example: 'AVL trees and Red-Black trees are examples of self-balancing binary search trees, a type of balanced tree.'
  },
  {
    id: 'balancer',
    term: 'Balancer',
    slug: 'balancer',
    definition: 'A device or software that distributes network traffic or workload across multiple servers. See Load Balancer.',
    example: 'The web traffic was routed through a balancer to ensure no single server was overloaded.'
  },
  {
    id: 'balun',
    term: 'Balun',
    slug: 'balun',
    definition: 'A type of electrical transformer that converts electrical signals that are balanced about ground (differential) to signals that are unbalanced (single-ended) and vice versa.',
    example: 'A balun is often used to connect a coaxial cable to a dipole antenna.'
  },
  {
    id: 'band-reject',
    term: 'Band-Reject Filter',
    slug: 'band-reject',
    definition: 'An electronic filter that passes most frequencies unaltered, but attenuates those in a specific range to very low levels. Also known as a notch filter.',
    example: 'An audio engineer used a band-reject filter to remove a specific humming noise from a recording.'
  },
  {
    id: 'band-pass',
    term: 'Band-Pass Filter',
    slug: 'band-pass',
    definition: 'An electronic filter that passes frequencies within a certain range and rejects (attenuates) frequencies outside that range.',
    example: 'A radio receiver uses a band-pass filter to select only the desired station.'
  },
  {
    id: 'band-scan',
    term: 'Band Scan',
    slug: 'band-scan',
    definition: 'The process of scanning a range of radio frequencies to detect active signals or channels.',
    example: 'His Wi-Fi analyzer performed a band scan to show which channels were most congested.'
  },
  {
    id: 'band-select',
    term: 'Band Select',
    slug: 'band-select',
    definition: 'A feature on a device that allows the user to manually choose which frequency band to use, such as 2.4 GHz or 5 GHz for Wi-Fi.',
    example: 'He used the band select option to force his phone to connect to the 5 GHz Wi-Fi network.'
  },
  {
    id: 'band-split',
    term: 'Band Split',
    slug: 'band-split',
    definition: 'The division of a frequency band into smaller sub-bands for different purposes or users.',
    example: 'Cable internet uses a band split to separate the downstream and upstream data channels.'
  },
  {
    id: 'banner-grab',
    term: 'Banner Grab',
    slug: 'banner-grab',
    definition: 'A technique used to gain information about a computer system on a network and the services running on its open ports.',
    example: 'A penetration tester performed a banner grab to identify the version of the FTP server.'
  },
  {
    id: 'barcode-scanner',
    term: 'Barcode Scanner',
    slug: 'barcode-scanner',
    definition: 'An optical scanner that can read printed barcodes, decode the data contained in the barcode and send the data to a computer.',
    example: 'The cashier used a barcode scanner to quickly ring up the items.'
  },
  {
    id: 'bare-container',
    term: 'Bare Container',
    slug: 'bare-container',
    definition: 'A lightweight container that runs a single application or process directly, without a full operating system or orchestration layer.',
    example: 'For a simple task, he ran the script in a bare container to minimize overhead.'
  },
  {
    id: 'bare-cluster',
    term: 'Bare Cluster',
    slug: 'bare-cluster',
    definition: 'A cluster of bare-metal servers, without a virtualization layer, often used for high-performance computing.',
    example: 'The research institute built a bare cluster for running their complex physics simulations.'
  },
  {
    id: 'bare-partition',
    term: 'Bare Partition',
    slug: 'bare-partition',
    definition: 'A disk partition that is not formatted with a file system, often used for raw data storage or specialized applications.',
    example: 'The database was configured to use a bare partition for its data files to bypass the file system overhead.'
  },
  {
    id: 'bare-snapshot',
    term: 'Bare Snapshot',
    slug: 'bare-snapshot',
    definition: 'A snapshot of a storage volume or virtual machine that does not include the memory state, capturing only the disk state.',
    example: 'He took a bare snapshot of the VM, which was faster but would require a full reboot on restore.'
  },
  {
    id: 'bark-algorithm',
    term: 'Bark Algorithm',
    slug: 'bark-algorithm',
    definition: 'Slang or a specific name for an algorithm that is noisy or overly verbose in its logging and output.',
    example: 'The developer complained about the third-party library\'s bark algorithm, which flooded the console with unnecessary debug messages.'
  },
  {
    id: 'barrel-roll-encryption',
    term: 'Barrel Roll Encryption',
    slug: 'barrel-roll-encryption',
    definition: 'A humorous or slang term for a weak or convoluted encryption method that is easily broken. From the Star Fox video game series.',
    example: 'He joked that the company\'s security was just barrel roll encryption, easily defeated.'
  },
  {
    id: 'base-address',
    term: 'Base Address',
    slug: 'base-address',
    definition: 'The starting address of a block of memory or a data structure. Other addresses within the block are calculated as an offset from the base address.',
    example: 'The linker assigned a base address to the program when it was loaded into memory.'
  },
  {
    id: 'base-register',
    term: 'Base Register',
    slug: 'base-register',
    definition: 'A register in a CPU that holds a base address, used in calculating the effective memory address of an operand.',
    example: 'In assembly language, the base register is often used to access elements of an array.'
  },
  {
    id: 'base-system',
    term: 'Base System',
    slug: 'base-system',
    definition: 'The minimal set of software and operating system components required for a computer to function and for other software to be installed.',
    example: 'Arch Linux provides a minimal base system, allowing the user to build up their environment from scratch.'
  },
  {
    id: 'bash-profile',
    term: 'Bash Profile',
    slug: 'bash-profile',
    definition: 'A configuration file for the Bash shell, `~/.bash_profile`, which is read and executed when a user logs in.',
    example: 'He added an alias to his bash profile to create a shortcut for a long command.'
  },
  {
    id: 'bashrc',
    term: 'Bashrc',
    slug: 'bashrc',
    definition: 'A configuration file for the Bash shell, `~/.bashrc`, which is executed for interactive non-login shells.',
    example: 'She customized her command prompt by editing her .bashrc file.'
  },
  {
    id: 'basic-auth',
    term: 'Basic Auth',
    slug: 'basic-auth',
    definition: 'A simple authentication scheme built into the HTTP protocol. It sends credentials as a username/password pair, encoded with Base64. It is not secure over HTTP.',
    example: 'The internal API was protected with Basic Auth for simplicity, since it was only accessible over a secure VPN.'
  },
  {
    id: 'basic-input-output',
    term: 'Basic Input/Output (BIOS)',
    slug: 'basic-input-output',
    definition: 'Firmware used to perform hardware initialization during the booting process and to provide runtime services for operating systems. See BIOS.',
    example: 'He entered the BIOS settings to change the computer\'s boot order.'
  },
  {
    id: 'batch-compiler',
    term: 'Batch Compiler',
    slug: 'batch-compiler',
    definition: 'A compiler that processes a set of source files (a "batch") in a single run, without user interaction.',
    example: 'The nightly build process used a batch compiler to compile the entire project from scratch.'
  },
  {
    id: 'batch-export',
    term: 'Batch Export',
    slug: 'batch-export',
    definition: 'The process of exporting a large amount of data from a system in a single, non-interactive operation.',
    example: 'The administrator ran a batch export to get all the user data out of the old system.'
  },
  {
    id: 'batch-import',
    term: 'Batch Import',
    slug: 'batch-import',
    definition: 'The process of importing a large amount of data into a system in a single, non-interactive operation.',
    example: 'She used the batch import feature to load a CSV file with thousands of new products into the e-commerce database.'
  },
  {
    id: 'batch-queue',
    term: 'Batch Queue',
    slug: 'batch-queue',
    definition: 'A queue that holds batch jobs waiting to be executed by a batch processing system.',
    example: 'His data analysis task was submitted to the batch queue and would be processed overnight when the cluster had more available resources.'
  },
  {
    id: 'batch-rate',
    term: 'Batch Rate',
    slug: 'batch-rate',
    definition: 'The speed at which a batch processing system can process jobs or data, often measured in jobs per hour or records per second.',
    example: 'They upgraded the hardware to increase the batch rate of their nightly data processing job.'
  },
  {
    id: 'beacon-interval',
    term: 'Beacon Interval',
    slug: 'beacon-interval',
    definition: 'The amount of time between beacon frame transmissions from a Wi-Fi access point. A shorter interval can improve connectivity but increases overhead.',
    example: 'The network administrator adjusted the beacon interval to optimize the performance of the wireless network.'
  },
  {
    id: 'becn',
    term: 'BECN (Backward Explicit Congestion Notification)',
    slug: 'becn',
    definition: 'A bit set in a Frame Relay frame to inform the source device that there is congestion on the network.',
    example: 'When the router received a frame with the BECN bit set, it reduced its transmission rate to help alleviate the congestion.'
  },
  {
    id: 'benchmark-test',
    term: 'Benchmark Test',
    slug: 'benchmark-test',
    definition: 'A test that is run to measure the performance of a system or component against a specific standard.',
    example: 'They ran a benchmark test on the new server to see how it compared to the old one.'
  },
  {
    id: 'benign-fault',
    term: 'Benign Fault',
    slug: 'benign-fault',
    definition: 'A fault in a system that does not cause a failure or have a significant impact on its operation.',
    example: 'The single bit error in the image file was a benign fault, as it only affected a single pixel in a non-critical area.'
  },
  {
    id: 'ber-test',
    term: 'BER Test (Bit Error Rate Test)',
    slug: 'ber-test',
    definition: 'A test performed on a communication link to measure its bit error rate, which is a key indicator of its quality.',
    example: 'The technician performed a BER test on the new fiber optic link to ensure it met the required performance standards.'
  },
  {
    id: 'bernoulli-drive',
    term: 'Bernoulli Drive',
    slug: 'bernoulli-drive',
    definition: 'A type of removable disk storage system from the 1980s, popular for its reliability compared to floppy disks.',
    example: 'He found an old Bernoulli drive and some cartridges in his attic, a relic from the early days of personal computing.'
  },
  {
    id: 'beta-flag',
    term: 'Beta Flag',
    slug: 'beta-flag',
    definition: 'A feature flag or configuration setting that enables a beta feature for a limited set of users.',
    example: 'The developers enabled the beta flag for internal employees to get feedback on the new user interface.'
  },
  {
    id: 'beta-firmware',
    term: 'Beta Firmware',
    slug: 'beta-firmware',
    definition: 'A pre-release version of firmware for a hardware device, distributed for testing.',
    example: 'He installed the beta firmware on his router to get access to new experimental features.'
  },
  {
    id: 'a-b-testing',
    term: 'A/B Testing',
    slug: 'a-b-testing',
    definition: 'A controlled experiment comparing two versions of a system or UI (A and B) to determine which performs better based on real user behavior.',
    example: 'An e-commerce site runs an A/B test by showing 50% of users a green "Buy Now" button and the other 50% a blue one to see which color leads to more sales.',
  },
  {
    id: 'a10-appliance',
    term: 'A10 Appliance',
    slug: 'a10-appliance',
    definition: 'A hardware device from A10 Networks that provides application delivery controller (ADC) and security services like load balancing and DDoS protection.',
    example: 'The company deployed an A10 appliance to balance traffic across its web servers and protect against volumetric attacks.',
  },
  {
    id: 'a2dp',
    term: 'A2DP (Advanced Audio Distribution Profile)',
    slug: 'a2dp',
    definition: 'A Bluetooth profile that defines how high-quality audio can be streamed from one device to another, like from a phone to wireless headphones.',
    example: 'Thanks to A2DP, you can listen to stereo music on your Bluetooth headset without any wires.',
  },
  {
    id: 'aarch64',
    term: 'AArch64',
    slug: 'aarch64',
    definition: 'The 64-bit execution state of the ARM architecture, commonly used in modern smartphones, servers, and Apple Silicon Macs.',
    example: 'Developers compile their applications for the AArch64 architecture to run on the latest generation of ARM-based servers.',
  },
  {
    id: 'abend',
    term: 'ABEND (Abnormal End)',
    slug: 'abend',
    definition: 'An unexpected or abnormal termination of a program or task, often encountered in mainframe computing environments.',
    example: 'The batch job experienced an ABEND due to insufficient memory, and the system operator had to investigate the error log.',
  },
  {
    id: 'abios',
    term: 'ABIOS (Advanced BIOS)',
    slug: 'abios',
    definition: 'An extension of the traditional BIOS that provides more advanced features and better support for multitasking operating systems.',
    example: 'The server\'s ABIOS allowed the operating system to manage hardware resources more efficiently.',
  },
  {
    id: 'abort-signal',
    term: 'Abort Signal',
    slug: 'abort-signal',
    definition: 'In programming, an object that allows you to signal a request to terminate an asynchronous operation, like a web request.',
    example: 'The developer used an AbortController and its abort signal to cancel a long-running file download if the user navigated away from the page.',
  },
  {
    id: 'above-the-fold',
    term: 'Above-the-Fold',
    slug: 'above-the-fold',
    definition: 'The portion of a webpage that is visible to a user without scrolling. Important content is often placed here to grab attention immediately.',
    example: 'The marketing team made sure the main call-to-action button was placed above-the-fold to maximize conversions.',
  },
  {
    id: 'absolute-path',
    term: 'Absolute Path',
    slug: 'absolute-path',
    definition: 'A file or directory path that starts from the root of the file system, providing a complete, unambiguous location.',
    example: 'The absolute path to the file on a Linux system was `/home/user/documents/report.txt`.',
  },
  {
    id: 'abstract-class',
    term: 'Abstract Class',
    slug: 'abstract-class',
    definition: 'In object-oriented programming, a class that cannot be instantiated on its own and must be subclassed by other classes.',
    example: 'The developer created an abstract class `Animal` with a `makeSound()` method, which was then implemented by the `Dog` and `Cat` subclasses.',
  },
  {
    id: 'ac-alternating-current',
    term: 'AC (Alternating Current)',
    slug: 'ac-alternating-current',
    definition: 'A type of electrical current where the flow of electric charge periodically reverses direction, used for power distribution to homes and businesses.',
    example: 'The power outlet in your wall supplies AC power to charge your laptop.',
  },
  {
    id: 'accelerated-graphics-port',
    term: 'Accelerated Graphics Port (AGP)',
    slug: 'agp',
    definition: 'A high-speed point-to-point channel for attaching a video card to a computer\'s motherboard, largely replaced by PCI Express.',
    example: 'He upgraded his old computer by installing a new graphics card into the AGP slot.',
  },
  {
    id: 'accelerator-key',
    term: 'Accelerator Key',
    slug: 'accelerator-key',
    definition: 'A keyboard shortcut that allows a user to perform an action more quickly than using a mouse, such as Ctrl+S to save.',
    example: 'The application\'s menu showed the accelerator key `Ctrl+P` next to the "Print" option.',
  },
  {
    id: 'access-log',
    term: 'Access Log',
    slug: 'access-log',
    definition: 'A log file generated by a server that records all requests it has received, including IP addresses, timestamps, and requested files.',
    example: 'The system administrator reviewed the web server\'s access log to identify the source of suspicious traffic.',
  },
  {
    id: 'access-method',
    term: 'Access Method',
    slug: 'access-method',
    definition: 'A technique or set of rules used to retrieve data from a storage device or to gain entry into a network.',
    example: 'In database systems, an indexed sequential access method (ISAM) allows for both direct and sequential record retrieval.',
  },
  {
    id: 'access-mode',
    term: 'Access Mode',
    slug: 'access-mode',
    definition: 'Specifies the type of operations that can be performed on a file or resource, such as read-only, write-only, or read-write.',
    example: 'The file was opened in read-only access mode to prevent accidental modifications.',
  },
  {
    id: 'access-point',
    term: 'Access Point (AP)',
    slug: 'access-point',
    definition: 'A networking hardware device that allows other Wi-Fi devices to connect to a wired network.',
    example: 'To improve Wi-Fi coverage in the office, IT installed another access point on the second floor.',
  },
  {
    id: 'access-token',
    term: 'Access Token',
    slug: 'access-token',
    definition: 'A credential used by an application to access a protected resource on behalf of a user, commonly used in OAuth 2.0.',
    example: 'After logging in, the application received an access token, which it included in the header of every API request to prove its authorization.',
  },
  {
    id: 'account-lockout',
    term: 'Account Lockout',
    slug: 'account-lockout',
    definition: 'A security policy that temporarily disables a user account after a specified number of incorrect login attempts.',
    example: 'After entering the wrong password five times, the system triggered an account lockout for 30 minutes to prevent a brute-force attack.',
  },
  {
    id: 'accumulator-register',
    term: 'Accumulator Register',
    slug: 'accumulator-register',
    definition: 'A special-purpose register in a CPU that holds intermediate results of arithmetic and logic operations.',
    example: 'The CPU loaded a value into the accumulator register, added another value to it, and then stored the final sum back in memory.',
  },
  {
    id: 'acoustic-coupler',
    term: 'Acoustic Coupler',
    slug: 'acoustic-coupler',
    definition: 'A legacy device that allowed a modem to connect to the internet by converting digital signals into audible tones placed on a telephone handset.',
    example: 'In the early days of the internet, you had to use an acoustic coupler with a payphone to get online.',
  },
  {
    id: 'acpi-tables',
    term: 'ACPI Tables',
    slug: 'acpi-tables',
    definition: 'Data structures in the system firmware that describe hardware devices, power management features, and system configuration to the OS.',
    example: 'The operating system reads the ACPI tables during boot-up to know how to control the CPU\'s power states.',
  },
  {
    id: 'active-hash',
    term: 'Active Hash',
    slug: 'active-hash',
    definition: 'In network forensics, a hash value of a known malicious file that is actively monitored for on a network.',
    example: 'The intrusion detection system flagged a file transfer because its checksum matched an active hash in the threat intelligence database.',
  },
  {
    id: 'activex',
    term: 'ActiveX',
    slug: 'activex',
    definition: 'A deprecated software framework from Microsoft that allows software components to be embedded in web pages, primarily for Internet Explorer.',
    example: 'The old corporate portal required users to enable ActiveX in their browsers to run its legacy interactive components.',
  },
  {
    id: 'actor-model',
    term: 'Actor Model',
    slug: 'actor-model',
    definition: 'A conceptual model of concurrent computation that treats "actors" as the universal primitives of concurrent computation.',
    example: 'Frameworks like Akka use the actor model to build highly concurrent and distributed applications without the complexity of manual thread management.',
  },
  {
    id: 'adaptive-firewall',
    term: 'Adaptive Firewall',
    slug: 'adaptive-firewall',
    definition: 'A firewall that can modify its own security rules in real-time based on traffic patterns and detected threats.',
    example: 'The adaptive firewall automatically blocked an IP address after detecting a port scan originating from it.',
  },
  {
    id: 'adc-analog-to-digital-converter',
    term: 'ADC (Analog-to-Digital Converter)',
    slug: 'adc-analog-to-digital-converter',
    definition: 'A device that converts a continuous analog signal (like a sound wave) into a discrete digital signal that a computer can process.',
    example: 'A microphone uses an ADC to convert the analog sound waves of your voice into digital data.',
  },
  {
    id: 'add-on-module',
    term: 'Add-on Module',
    slug: 'add-on-module',
    definition: 'A software component that adds a specific feature or functionality to an existing program.',
    example: 'He installed an add-on module to his browser to block advertisements.',
  },
  {
    id: 'ad-hoc-mode',
    term: 'Ad-hoc Mode',
    slug: 'ad-hoc-mode',
    definition: 'A wireless networking mode where devices connect directly to each other (peer-to-peer) without needing a central access point or router.',
    example: 'During the meeting, they set up their laptops in ad-hoc mode to share files directly.',
  },
  {
    id: 'admin-console',
    term: 'Admin Console',
    slug: 'admin-console',
    definition: 'A graphical user interface or web-based interface used to manage and configure a system, application, or network.',
    example: 'The network administrator used the admin console to add a new user and assign permissions.',
  },
  {
    id: 'admin-shell',
    term: 'Admin Shell',
    slug: 'admin-shell',
    definition: 'A command-line interface with elevated privileges used for system administration tasks.',
    example: 'She opened an admin shell in Windows PowerShell to run a script that required administrator rights.',
  },
  {
    id: 'adobe-air',
    term: 'Adobe AIR',
    slug: 'adobe-air',
    definition: 'A cross-platform runtime system for building desktop applications using web technologies like HTML, Flash, and ActionScript.',
    example: 'The company used Adobe AIR to build a desktop widget that could run on both Windows and macOS.',
  },
  {
    id: 'ads-alternate-data-stream',
    term: 'ADS (Alternate Data Stream)',
    slug: 'ads-alternate-data-stream',
    definition: 'A feature of the NTFS file system that allows a file to contain multiple streams of data, sometimes used by malware to hide code.',
    example: 'The forensics expert found malicious code hidden in an alternate data stream of a seemingly harmless image file.',
  },
  {
    id: 'adt-abstract-data-type',
    term: 'ADT (Abstract Data Type)',
    slug: 'adt-abstract-data-type',
    definition: 'A mathematical model for data types where a data type is defined by its behavior (semantics) from the point of view of a user.',
    example: 'A Stack is an ADT that defines operations like `push`, `pop`, and `peek`, without specifying how they are implemented.',
  },
  {
    id: 'advanced-format-drive',
    term: 'Advanced Format Drive',
    slug: 'advanced-format-drive',
    definition: 'A type of hard drive that uses a larger sector size (4096 bytes) instead of the traditional 512 bytes to improve storage efficiency.',
    example: 'Modern high-capacity hard drives are typically Advanced Format Drives.',
  },
  {
    id: 'advanced-host-controller-interface',
    term: 'Advanced Host Controller Interface (AHCI)',
    slug: 'ahci',
    definition: 'A technical standard for an interface that allows software to communicate with Serial ATA (SATA) host bus adapters.',
    example: 'To get the best performance from his SSD, he made sure to enable AHCI mode in the BIOS.',
  },
  {
    id: 'advanced-malware-protection',
    term: 'Advanced Malware Protection (AMP)',
    slug: 'advanced-malware-protection',
    definition: 'A security solution that provides comprehensive protection against malware by analyzing files, monitoring behavior, and using threat intelligence.',
    example: 'Cisco\'s Advanced Malware Protection for Endpoints blocked a zero-day exploit before it could infect the system.',
  },
  {
    id: 'adware',
    term: 'Adware',
    slug: 'adware',
    definition: 'Software that automatically displays or downloads advertising material when a user is online.',
    example: 'After installing the free software, his browser was flooded with pop-up ads, a classic sign of an adware infection.',
  },
  {
    id: 'aes-encryption',
    term: 'AES Encryption',
    slug: 'aes-encryption',
    definition: 'The Advanced Encryption Standard, a widely used symmetric encryption algorithm to secure data.',
    example: 'The secure messaging app uses 256-bit AES encryption to protect users\' conversations.',
  },
  {
    id: 'affinity-mask',
    term: 'Affinity Mask',
    slug: 'affinity-mask',
    definition: 'A bitmask indicating which CPU core(s) a process or thread is allowed to run on.',
    example: 'To optimize performance, the database administrator set the affinity mask to ensure the main process only ran on specific CPU cores.',
  },
  {
    id: 'afk-channel',
    term: 'AFK Channel',
    slug: 'afk-channel',
    definition: 'In chat services like Discord, a voice channel where users are automatically moved if they are idle (Away From Keyboard) for a certain period.',
    example: 'He was moved to the AFK channel because he hadn\'t spoken in the voice chat for over an hour.',
  },
  {
    id: 'aggregate-function',
    term: 'Aggregate Function',
    slug: 'aggregate-function',
    definition: 'In databases, a function that performs a calculation on a set of values and returns a single value, such as SUM(), COUNT(), or AVG().',
    example: 'The analyst used the `COUNT()` aggregate function to find the total number of orders placed last month.',
  },
  {
    id: 'aggregation-pipeline',
    term: 'Aggregation Pipeline',
    slug: 'aggregation-pipeline',
    definition: 'In databases like MongoDB, a framework for data aggregation modeled on the concept of data processing pipelines.',
    example: 'The developer built an aggregation pipeline to process raw log data, grouping entries by user and calculating their average session duration.',
  },
  {
    id: 'agp-slot',
    term: 'AGP Slot',
    slug: 'agp-slot',
    definition: 'Accelerated Graphics Port, a dedicated slot on a motherboard for a graphics card, now largely superseded by PCIe.',
    example: 'He found an old AGP slot on the motherboard, a remnant from an earlier era of PC hardware.',
  },
  {
    id: 'ahb-bus',
    term: 'AHB Bus (Advanced High-performance Bus)',
    slug: 'ahb-bus',
    definition: 'A bus protocol in the ARM AMBA standard used for connecting high-performance components in a system-on-a-chip (SoC).',
    example: 'The CPU communicates with the main memory controller over the high-speed AHB bus.',
  },
  {
    id: 'ai-accelerator',
    term: 'AI Accelerator',
    slug: 'ai-accelerator',
    definition: 'Specialized hardware, like a GPU or TPU, designed to speed up artificial intelligence and machine learning computations.',
    example: 'Google\'s Tensor Processing Unit (TPU) is a powerful AI accelerator designed specifically for running their TensorFlow framework.',
  },
  {
    id: 'ai-inference-engine',
    term: 'AI Inference Engine',
    slug: 'ai-inference-engine',
    definition: 'The part of an AI system that uses a trained model to make predictions or decisions based on new, unseen data.',
    example: 'The self-driving car\'s AI inference engine processed the camera feed in real-time to identify pedestrians and other vehicles.',
  },
  {
    id: 'ai-model-compression',
    term: 'AI Model Compression',
    slug: 'ai-model-compression',
    definition: 'Techniques like quantization and pruning used to reduce the size of a machine learning model to make it run faster and consume less memory.',
    example: 'Through AI model compression, they were able to deploy the large language model on a mobile device.',
  },
  {
    id: 'ai-workflow',
    term: 'AI Workflow',
    slug: 'ai-workflow',
    definition: 'The end-to-end process of building an AI application, from data collection and model training to deployment and monitoring.',
    example: 'The MLOps team was responsible for automating the entire AI workflow to enable continuous training and deployment.',
  },
  {
    id: 'aimd-algorithm',
    term: 'AIMD Algorithm (Additive Increase, Multiplicative Decrease)',
    slug: 'aimd-algorithm',
    definition: 'A feedback control algorithm used in TCP congestion control, where the congestion window is increased additively but decreased multiplicatively.',
    example: 'TCP uses the AIMD algorithm to fairly share network bandwidth and avoid congestion collapse.',
  },
  {
    id: 'aio-cooler',
    term: 'AIO Cooler (All-in-One)',
    slug: 'aio-cooler',
    definition: 'A self-contained liquid cooling system for a CPU, consisting of a radiator, pump, and water block.',
    example: 'He installed an AIO cooler to keep his overclocked CPU temperatures low during intense gaming sessions.',
  },
  {
    id: 'air-gap-security',
    term: 'Air Gap Security',
    slug: 'air-gap-security',
    definition: 'A security measure where a computer or network is physically isolated from other networks, such as the internet, to prevent remote attacks.',
    example: 'The control systems for the nuclear power plant are protected by air gap security, with no physical connection to the outside world.',
  },
  {
    id: 'ajax-request',
    term: 'AJAX Request',
    slug: 'ajax-request',
    definition: 'An asynchronous request made by a web page to a server to send or retrieve data without reloading the entire page.',
    example: 'When you type in a search box and see suggestions appear, the page is making AJAX requests in the background to fetch those suggestions.',
  },
  {
    id: 'alarm-handler',
    term: 'Alarm Handler',
    slug: 'alarm-handler',
    definition: 'A function or routine in a program that is executed when a specific event or "alarm" (like a timer expiring) occurs.',
    example: 'The programmer registered an alarm handler to automatically save the user\'s document every five minutes.',
  },
  {
    id: 'algorithmic-trading-system',
    term: 'Algorithmic Trading System',
    slug: 'algorithmic-trading-system',
    definition: 'A computer system that automates stock trading by executing orders based on pre-defined algorithms and market data.',
    example: 'The high-frequency trading firm relies on a sophisticated algorithmic trading system to execute thousands of trades per second.',
  },
  {
    id: 'alignment-padding',
    term: 'Alignment Padding',
    slug: 'alignment-padding',
    definition: 'Extra bytes of data inserted between data fields in memory to ensure that each field is aligned to a specific memory address boundary.',
    example: 'The compiler added alignment padding to the data structure to ensure the 64-bit integer started on an 8-byte boundary for faster access.',
  },
  {
    id: 'all-pairs-shortest-path',
    term: 'All-Pairs Shortest Path',
    slug: 'all-pairs-shortest-path',
    definition: 'An algorithm problem in graph theory that involves finding the shortest path between every pair of vertices in a graph.',
    example: 'The Floyd-Warshall algorithm can be used to solve the all-pairs shortest path problem.',
  },
  {
    id: 'allocation-table',
    term: 'Allocation Table',
    slug: 'allocation-table',
    definition: 'A data structure used in a file system to keep track of which blocks or clusters on a storage device are allocated to which files.',
    example: 'The File Allocation Table (FAT) in older Windows systems is a well-known example of an allocation table.',
  },
  {
    id: 'allowlist',
    term: 'Allowlist',
    slug: 'allowlist',
    definition: 'A security practice where access is denied by default, and only explicitly listed entities (like IP addresses or applications) are allowed.',
    example: 'The corporate firewall uses an allowlist, only permitting traffic to pre-approved websites and services.',
  },
  {
    id: 'alpha-channel',
    term: 'Alpha Channel',
    slug: 'alpha-channel',
    definition: 'An extra component of a color value that represents the degree of transparency or opacity of that color.',
    example: 'The designer saved the logo as a PNG with an alpha channel so it would have a transparent background.',
  },
  {
    id: 'alpha-testing',
    term: 'Alpha Testing',
    slug: 'alpha-testing',
    definition: 'An early phase of software testing performed internally by the development team before the software is released to external testers.',
    example: 'The QA team began alpha testing the new feature to find and report bugs.',
  },
  {
    id: 'alpn-protocol',
    term: 'ALPN (Application-Layer Protocol Negotiation)',
    slug: 'alpn-protocol',
    definition: 'A TLS extension that allows the application layer to negotiate which protocol (like HTTP/2 or HTTP/1.1) should be handled over a secure connection.',
    example: 'Thanks to the ALPN protocol, the browser was able to establish an HTTP/2 connection with the server for faster page loads.',
  },
  {
    id: 'alt-attribute',
    term: 'Alt Attribute',
    slug: 'alt-attribute',
    definition: 'An HTML attribute for images that provides alternative text for screen readers or if the image cannot be displayed.',
    example: 'For web accessibility, every image should have a descriptive alt attribute.',
  },
  {
    id: 'alt-stack',
    term: 'Alt Stack',
    slug: 'alt-stack',
    definition: 'In Linux, an alternate signal stack that can be used to handle signals, particularly useful for handling a stack overflow.',
    example: 'The program used an alt stack to catch the segmentation fault and log a proper error message instead of crashing silently.',
  },
  {
    id: 'alternate-boot-sector',
    term: 'Alternate Boot Sector',
    slug: 'alternate-boot-sector',
    definition: 'A backup copy of a disk\'s primary boot sector, used for recovery if the main one becomes corrupted.',
    example: 'The disk recovery tool was able to restore the system by using the alternate boot sector.',
  },
  {
    id: 'amd-v',
    term: 'AMD-V (AMD Virtualization)',
    slug: 'amd-v',
    definition: 'Hardware-assisted virtualization technology from AMD that allows a single CPU to run multiple operating systems simultaneously.',
    example: 'He enabled AMD-V in his BIOS to get better performance when running virtual machines.',
  },
  {
    id: 'ami-bios',
    term: 'AMI BIOS',
    slug: 'ami-bios',
    definition: 'A popular type of BIOS/UEFI firmware developed by American Megatrends Inc. (AMI), found in many motherboards.',
    example: 'The splash screen showed the AMI BIOS logo before booting into Windows.',
  },
  {
    id: 'amplification-attack',
    term: 'Amplification Attack',
    slug: 'amplification-attack',
    definition: 'A type of DDoS attack where an attacker uses a small request to trigger a much larger response from a server, overwhelming the victim.',
    example: 'The DNS amplification attack flooded the target server with massive amounts of traffic, taking it offline.',
  },
  {
    id: 'ampere-microarchitecture',
    term: 'Ampere Microarchitecture',
    slug: 'ampere-microarchitecture',
    definition: 'A GPU microarchitecture developed by NVIDIA, used in their GeForce 30 series and A100 data center GPUs.',
    example: 'The new Ampere microarchitecture brought significant improvements in ray tracing and AI performance.',
  },
  {
    id: 'anaconda-distribution',
    term: 'Anaconda Distribution',
    slug: 'anaconda-distribution',
    definition: 'A popular distribution of Python and R for scientific computing and data science, which includes many pre-installed packages and a package manager called conda.',
    example: 'She installed the Anaconda distribution to easily set up her data science environment with all the necessary libraries.',
  },
  {
    id: 'analog-signal',
    term: 'Analog Signal',
    slug: 'analog-signal',
    definition: 'A continuous signal in which a time-varying quantity (like voltage or pressure) represents another time-based variable.',
    example: 'The sound from a vinyl record is an analog signal, representing the continuous waves of the original recording.',
  },
  {
    id: 'analyzer-engine',
    term: 'Analyzer Engine',
    slug: 'analyzer-engine',
    definition: 'A software component responsible for processing and interpreting data, often used in security, networking, or data analytics.',
    example: 'The network analyzer engine processed the captured packets and identified a potential security threat.',
  },
  {
    id: 'anchor-tag',
    term: 'Anchor Tag',
    slug: 'anchor-tag',
    definition: 'The `<a>` tag in HTML, used to create hyperlinks to other web pages or locations within the same page.',
    example: 'He used an anchor tag to link the text "Click here" to the company\'s homepage.',
  },
  {
    id: 'android-debug-bridge',
    term: 'Android Debug Bridge (ADB)',
    slug: 'android-debug-bridge',
    definition: 'A command-line tool that lets you communicate with an Android device for development and debugging purposes.',
    example: 'The developer used ADB to install the app, view logs, and take a screenshot of the device.',
  },
  {
    id: 'angular-cli',
    term: 'Angular CLI',
    slug: 'angular-cli',
    definition: 'A command-line interface tool for initializing, developing, scaffolding, and maintaining Angular applications.',
    example: 'She used the Angular CLI command `ng generate component my-component` to quickly create a new component file.',
  },
  {
    id: 'anidb-hash',
    term: 'AniDB Hash',
    slug: 'anidb-hash',
    definition: 'A custom hashing algorithm used by the AniDB community to identify anime video files, regardless of their filename.',
    example: 'He used an AniDB client to hash his video files and add them to his online collection.',
  },
  {
    id: 'anisotropic-filtering',
    term: 'Anisotropic Filtering',
    slug: 'anisotropic-filtering',
    definition: 'A technique in computer graphics that enhances the quality of textures on surfaces that are viewed at oblique angles.',
    example: 'He enabled 16x anisotropic filtering in the game settings to make the textures on the road ahead look sharp and clear.',
  },
  {
    id: 'ansi-escape-code',
    term: 'ANSI Escape Code',
    slug: 'ansi-escape-code',
    definition: 'Sequences of characters used in terminal emulators to control text formatting, color, and cursor position.',
    example: 'The command-line tool used ANSI escape codes to display its output in color, making it easier to read.',
  },
  {
    id: 'anti-aliasing',
    term: 'Anti-aliasing',
    slug: 'anti-aliasing',
    definition: 'A technique used in computer graphics to smooth out jagged edges (jaggies) on lines and objects.',
    example: 'He turned on anti-aliasing in the game to make the edges of objects look less pixelated.',
  },
  {
    id: 'anti-debugging-technique',
    term: 'Anti-debugging Technique',
    slug: 'anti-debugging-technique',
    definition: 'Code intentionally added to a program to detect if it is being run under the control of a debugger, often used by malware to hinder analysis.',
    example: 'The malware used an anti-debugging technique to terminate itself whenever it detected a debugger was attached.',
  },
  {
    id: 'anti-forensics',
    term: 'Anti-forensics',
    slug: 'anti-forensics',
    definition: 'Techniques used to frustrate and obstruct digital forensic investigations by deleting, hiding, or obfuscating evidence.',
    example: 'The attacker used anti-forensics methods like data wiping and encryption to cover their tracks.',
  },
  {
    id: 'anti-tamper-module',
    term: 'Anti-tamper Module',
    slug: 'anti-tamper-module',
    definition: 'A hardware or software mechanism designed to prevent or detect unauthorized modification of a system.',
    example: 'The gaming console has an anti-tamper module to prevent users from running pirated games.',
  },
  {
    id: 'ant-protocol',
    term: 'ANT+ Protocol',
    slug: 'ant-protocol',
    definition: 'A wireless sensor network protocol primarily used for sports and fitness sensors, like heart rate monitors and bike computers.',
    example: 'His new smartwatch supports the ANT+ protocol, allowing it to connect to his bike\'s power meter.',
  },
  {
    id: 'anti-spoofing',
    term: 'Anti-spoofing',
    slug: 'anti-spoofing',
    definition: 'Measures taken to prevent spoofing attacks, where an attacker impersonates another device or user on a network.',
    example: 'The email server implemented DMARC as an anti-spoofing measure to prevent fraudulent emails.',
  },
  {
    id: 'antivirus-heuristic',
    term: 'Antivirus Heuristic',
    slug: 'antivirus-heuristic',
    definition: 'A method used by antivirus software to detect new, unknown viruses by analyzing their code for suspicious characteristics.',
    example: 'The antivirus heuristic analysis flagged the program as potentially malicious because it was attempting to modify system files.',
  },
  {
    id: 'aon-memory',
    term: 'AON (Always-On) Memory',
    slug: 'aon-memory',
    definition: 'A small amount of memory in a system-on-a-chip (SoC) that remains powered even when the rest of the chip is in a low-power state.',
    example: 'The AON memory stored the state needed to quickly wake the device from sleep mode.',
  },
  {
    id: 'ap-mode',
    term: 'AP Mode (Access Point Mode)',
    slug: 'ap-mode',
    definition: 'A setting on a wireless device that allows it to function as a Wi-Fi access point, creating its own wireless network.',
    example: 'He switched his travel router to AP mode to create a private Wi-Fi network in his hotel room.',
  },
  {
    id: 'apache-beam',
    term: 'Apache Beam',
    slug: 'apache-beam',
    definition: 'An open-source, unified model for defining both batch and streaming data-parallel processing pipelines.',
    example: 'The data engineering team used Apache Beam to write a single pipeline that could run on both Apache Flink for streaming and Apache Spark for batch processing.',
  },
  {
    id: 'apache-flink',
    term: 'Apache Flink',
    slug: 'apache-flink',
    definition: 'An open-source, stream-processing framework for stateful computations over unbounded and bounded data streams.',
    example: 'The company used Apache Flink to perform real-time fraud detection on a high-throughput stream of financial transactions.',
  },
  {
    id: 'apache-kafka',
    term: 'Apache Kafka',
    slug: 'apache-kafka',
    definition: 'An open-source distributed event streaming platform used for building real-time data pipelines and streaming apps.',
    example: 'Microservices in the application communicate with each other by publishing and subscribing to events on an Apache Kafka message bus.',
  },
  {
    id: 'apache-mesos',
    term: 'Apache Mesos',
    slug: 'apache-mesos',
    definition: 'An open-source cluster manager that provides efficient resource isolation and sharing across distributed applications.',
    example: 'Before Kubernetes became dominant, many companies used Apache Mesos to manage their containerized workloads.',
  },
  {
    id: 'apache-spark',
    term: 'Apache Spark',
    slug: 'apache-spark',
    definition: 'A fast and general-purpose cluster computing system for big data processing, with built-in modules for streaming, SQL, machine learning and graph processing.',
    example: 'The data scientists used Apache Spark to process terabytes of log data and train a machine learning model.',
  },
  {
    id: 'api-endpoint',
    term: 'API Endpoint',
    slug: 'api-endpoint',
    definition: 'A specific URL where an API can be accessed by a client application to perform an operation.',
    example: 'To fetch user data, the mobile app sends a GET request to the `/api/v1/users/{id}` endpoint.',
  },
  {
    id: 'api-key',
    term: 'API Key',
    slug: 'api-key',
    definition: 'A unique code passed in to an API to identify the calling application or user.',
    example: 'To use the Google Maps API, you first need to generate an API key and include it in your requests.',
  },
  {
    id: 'apic-advanced-programmable-interrupt-controller',
    term: 'APIC (Advanced Programmable Interrupt Controller)',
    slug: 'apic-advanced-programmable-interrupt-controller',
    definition: 'A type of interrupt controller in x86 systems that allows for more complex interrupt management in multiprocessor systems.',
    example: 'Modern multi-core CPUs use APIC to manage hardware interrupts efficiently across all cores.',
  },
  {
    id: 'apk-signing',
    term: 'APK Signing',
    slug: 'apk-signing',
    definition: 'The process of digitally signing an Android application package (APK) to verify the author\'s identity and ensure the app has not been tampered with.',
    example: 'Before publishing to the Google Play Store, the developer must perform APK signing with a private key.',
  },
  {
    id: 'apm-application-performance-monitoring',
    term: 'APM (Application Performance Monitoring)',
    slug: 'apm-application-performance-monitoring',
    definition: 'Tools and processes for monitoring the performance of software applications to detect and diagnose complex performance problems.',
    example: 'The DevOps team used an APM tool like New Relic to identify a slow database query that was causing high response times.',
  },
  {
    id: 'app-container',
    term: 'App Container',
    slug: 'app-container',
    definition: 'A lightweight, standalone, executable package of software that includes everything needed to run it: code, runtime, system tools, system libraries, and settings.',
    example: 'Docker is a popular platform for creating and managing app containers.',
  },
  {
    id: 'app-manifest',
    term: 'App Manifest',
    slug: 'app-manifest',
    definition: 'A file (like `AndroidManifest.xml` or `manifest.json`) that describes essential information about an application to the operating system or browser.',
    example: 'The app manifest file declares the app\'s permissions, activities, and required hardware features.',
  },
  {
    id: 'apparmor',
    term: 'AppArmor',
    slug: 'apparmor',
    definition: 'A Linux kernel security module that restricts programs\' capabilities with per-program profiles.',
    example: 'The system administrator created an AppArmor profile to restrict the web server so it could only access files in its own directory.',
  },
  {
    id: 'append-log',
    term: 'Append Log',
    slug: 'append-log',
    definition: 'A data structure where new entries are only ever added to the end, making it immutable and ideal for audit trails and event sourcing.',
    example: 'Databases use an append log (like a write-ahead log) to ensure durability and recover transactions after a crash.',
  },
  {
    id: 'apple-filing-protocol',
    term: 'Apple Filing Protocol (AFP)',
    slug: 'apple-filing-protocol',
    definition: 'A proprietary network protocol that offers file services for macOS and classic Mac OS.',
    example: 'Before SMB became common, Mac users would connect to a file server using the Apple Filing Protocol.',
  },
  {
    id: 'apple-silicon',
    term: 'Apple Silicon',
    slug: 'apple-silicon',
    definition: 'A series of ARM-based system on a chip (SoC) processors designed by Apple Inc. for their Mac computers and other devices.',
    example: 'The M1, M2, and M3 chips are all part of the Apple Silicon family, known for their high performance and power efficiency.',
  },
  {
    id: 'application-binary-interface',
    term: 'Application Binary Interface (ABI)',
    slug: 'application-binary-interface',
    definition: 'An interface between two binary program modules; one of these is a library or operating system and the other is a user program.',
    example: 'For a C++ library to be used by a Swift application, they must be compatible at the Application Binary Interface level.',
  },
  {
    id: 'application-cache',
    term: 'Application Cache',
    slug: 'application-cache',
    definition: 'A deprecated web technology that allowed an offline web application to be cached and work without an internet connection.',
    example: 'The old version of the web app used Application Cache to work offline, but it has since been replaced by Service Workers.',
  },
  {
    id: 'application-gateway',
    term: 'Application Gateway',
    slug: 'application-gateway',
    definition: 'A type of firewall or load balancer that operates at the application layer (Layer 7) to manage and secure traffic to web applications.',
    example: 'Azure Application Gateway provides features like SSL termination and web application firewall (WAF) capabilities.',
  },
  {
    id: 'application-layer',
    term: 'Application Layer',
    slug: 'application-layer',
    definition: 'The 7th layer of the OSI model, where network-aware applications like web browsers and email clients operate.',
    example: 'HTTP, FTP, and SMTP are all protocols that function at the Application Layer.',
  },
  {
    id: 'application-load-balancer',
    term: 'Application Load Balancer (ALB)',
    slug: 'application-load-balancer',
    definition: 'A type of load balancer that operates at the application layer to route traffic based on the content of the request, such as the URL path.',
    example: 'The company uses an AWS Application Load Balancer to route requests for `/api` to one set of servers and requests for `/images` to another.',
  },
  {
    id: 'application-loop',
    term: 'Application Loop',
    slug: 'application-loop',
    definition: 'The central control flow of an event-driven program, which continuously waits for and dispatches events or messages.',
    example: 'Game engines and GUI frameworks are built around an application loop that processes user input and updates the screen every frame.',
  },
  {
    id: 'application-pool',
    term: 'Application Pool',
    slug: 'application-pool',
    definition: 'In Microsoft\'s IIS web server, an isolated environment where web applications run, improving stability and security.',
    example: 'The administrator configured each website to run in its own application pool, so if one site crashed, it wouldn\'t affect the others.',
  },
  {
    id: 'application-signing',
    term: 'Application Signing',
    slug: 'application-signing',
    definition: 'The process of digitally signing an application package to verify the author and ensure it has not been tampered with.',
    example: 'Apple requires all iOS apps to go through application signing with a valid developer certificate before they can be installed.',
  },
  {
    id: 'applet',
    term: 'Applet',
    slug: 'applet',
    definition: 'A small application that performs one specific task and runs within the context of a larger program, often a web browser (now largely obsolete).',
    example: 'In the early 2000s, many websites used Java applets to display interactive animations or games.',
  },
  {
    id: 'appsync',
    term: 'AppSync',
    slug: 'appsync',
    definition: 'An AWS service that provides a managed GraphQL API layer to securely access, manipulate, and combine data from one or more data sources.',
    example: 'The developers used AWS AppSync to quickly build a real-time, collaborative application with offline data synchronization.',
  },
  {
    id: 'apr-apache-portable-runtime',
    term: 'APR (Apache Portable Runtime)',
    slug: 'apr-apache-portable-runtime',
    definition: 'A supporting library for the Apache Web Server, providing a set of APIs that map to the underlying operating system.',
    example: 'The APR library provides a consistent interface for file I/O and network sockets, whether the code is running on Linux or Windows.',
  },
  {
    id: 'apt-package-manager',
    term: 'APT Package Manager',
    slug: 'apt-package-manager',
    definition: 'Advanced Package Tool, the command-line tool used to handle packages on Debian-based Linux distributions like Ubuntu.',
    example: 'He installed the new software by running `sudo apt-get install package-name` in the terminal.',
  },
  {
    id: 'apu-accelerated-processing-unit',
    term: 'APU (Accelerated Processing Unit)',
    slug: 'apu-accelerated-processing-unit',
    definition: 'A type of microprocessor that combines the CPU and GPU onto a single die.',
    example: 'AMD\'s APUs are popular in budget gaming PCs and handheld consoles because they offer decent graphics performance without a separate graphics card.',
  },
  {
    id: 'ar-tag',
    term: 'AR Tag',
    slug: 'ar-tag',
    definition: 'A visual marker, like a QR code or a custom image, that an augmented reality application can recognize to overlay digital content.',
    example: 'By pointing her phone\'s camera at the AR tag on the poster, a 3D model of the product appeared on her screen.',
  },
  {
    id: 'arbitrary-code-execution',
    term: 'Arbitrary Code Execution (ACE)',
    slug: 'arbitrary-code-execution',
    definition: 'A type of security vulnerability that allows an attacker to execute any commands or code of the attacker\'s choice on a target machine.',
    example: 'The buffer overflow vulnerability led to an arbitrary code execution exploit, giving the hacker full control of the server.',
  },
  {
    id: 'arc-cache',
    term: 'ARC Cache (Adaptive Replacement Cache)',
    slug: 'arc-cache',
    definition: 'A page replacement algorithm that balances between recency and frequency to improve cache hit rates.',
    example: 'ZFS, a modern file system, uses an ARC cache to optimize disk read performance.',
  },
  {
    id: 'arc-welding-fiber',
    term: 'Arc Welding (Fiber term)',
    slug: 'arc-welding-fiber',
    definition: 'The process of joining two optical fibers together using an electric arc, also known as fusion splicing.',
    example: 'The technician used a fusion splicer to perform an arc weld, creating a permanent, low-loss connection between the two fiber optic cables.',
  },
  {
    id: 'arch-linux',
    term: 'Arch Linux',
    slug: 'arch-linux',
    definition: 'A lightweight and flexible Linux distribution that provides a minimal base system, allowing users to build their own customized environment.',
    example: 'He chose Arch Linux for his new development machine because he wanted full control over every package that was installed.',
  },
  {
    id: 'arcmap-projection',
    term: 'ArcMap Projection',
    slug: 'arcmap-projection',
    definition: 'The process in GIS software like ArcMap of transforming geographic coordinates from a 3D model of the earth to a 2D map.',
    example: 'To display the data correctly on a flat map, the GIS analyst had to define the correct ArcMap projection.',
  },
  {
    id: 'area-network',
    term: 'Area Network',
    slug: 'area-network',
    definition: 'A general term for a computer network that covers a specific area, such as a LAN (Local), WAN (Wide), or PAN (Personal).',
    example: 'The company\'s WAN is an area network that connects their offices in New York and London.',
  },
  {
    id: 'argument-vector',
    term: 'Argument Vector',
    slug: 'argument-vector',
    definition: 'In C programming, the array of strings (`argv`) passed to the `main` function that contains the command-line arguments.',
    example: 'The program parsed the argument vector to check for flags like `-v` for verbose output.',
  },
  {
    id: 'arithmetic-logic-unit',
    term: 'Arithmetic Logic Unit (ALU)',
    slug: 'arithmetic-logic-unit',
    definition: 'A digital circuit within a CPU that performs arithmetic (add, subtract) and logic (AND, OR, NOT) operations.',
    example: 'When a program needs to add two numbers, the instruction is sent to the Arithmetic Logic Unit for calculation.',
  },
  {
    id: 'arm64-instruction-set',
    term: 'Arm64 Instruction Set',
    slug: 'arm64-instruction-set',
    definition: 'The 64-bit version of the ARM instruction set architecture, used in modern mobile devices and an increasing number of servers and laptops.',
    example: 'Apple\'s M-series chips are based on the Arm64 instruction set.',
  },
  {
    id: 'arm-trustzone',
    term: 'ARM TrustZone',
    slug: 'arm-trustzone',
    definition: 'A hardware-based security technology in ARM processors that creates an isolated, secure world for running trusted applications.',
    example: 'Mobile payment apps use ARM TrustZone to handle sensitive data like fingerprints and credit card information in a secure environment.',
  },
  {
    id: 'arp-cache',
    term: 'ARP Cache',
    slug: 'arp-cache',
    definition: 'A table stored in a computer\'s memory that maps IP addresses to their corresponding MAC addresses on a local network.',
    example: 'You can view the ARP cache on your computer by running the `arp -a` command.',
  },
  {
    id: 'arp-poisoning',
    term: 'ARP Poisoning',
    slug: 'arp-poisoning',
    definition: 'A cyberattack where an attacker sends falsified ARP messages over a local network to associate their MAC address with the IP of another host.',
    example: 'The attacker used ARP poisoning to intercept traffic between the victim and the network gateway, enabling a man-in-the-middle attack.',
  },
  {
    id: 'array-buffer',
    term: 'Array Buffer',
    slug: 'array-buffer',
    definition: 'A JavaScript object that represents a generic, fixed-length raw binary data buffer.',
    example: 'When working with WebSockets or files, you often receive the data in an Array Buffer, which you then need to interpret using a typed array view.',
  },
  {
    id: 'array-indexing',
    term: 'Array Indexing',
    slug: 'array-indexing',
    definition: 'The process of accessing an element in an array by its position, or index, which is typically a zero-based number.',
    example: 'In the array `[10, 20, 30]`, array indexing with `[1]` would return the value `20`.',
  },
  {
    id: 'arraylist',
    term: 'ArrayList',
    slug: 'arraylist',
    definition: 'A resizable array data structure, commonly found in languages like Java, that provides dynamic resizing as elements are added and removed.',
    example: 'He used an ArrayList to store a list of user names because he didn\'t know how many users there would be in advance.',
  },
  {
    id: 'artifact-repository',
    term: 'Artifact Repository',
    slug: 'artifact-repository',
    definition: 'A storage system for managing and storing binary artifacts, such as libraries, packages, and container images, produced by a build process.',
    example: 'The company uses JFrog Artifactory as their artifact repository to store all the Docker images and Java libraries built by their CI/CD pipeline.',
  },
  {
    id: 'artificial-general-intelligence',
    term: 'Artificial General Intelligence (AGI)',
    slug: 'artificial-general-intelligence',
    definition: 'A hypothetical type of AI that possesses the ability to understand or learn any intellectual task that a human being can.',
    example: 'Current AI is considered narrow, but the ultimate goal for many researchers is to create an Artificial General Intelligence.',
  },
  {
    id: 'artificial-neural-network',
    term: 'Artificial Neural Network (ANN)',
    slug: 'artificial-neural-network',
    definition: 'A computing system inspired by the biological neural networks that constitute animal brains, used for tasks like image recognition and natural language processing.',
    example: 'The deep learning model was built using a complex Artificial Neural Network with many hidden layers.',
  },
  {
    id: 'as-autonomous-system',
    term: 'AS (Autonomous System)',
    slug: 'as-autonomous-system',
    definition: 'A collection of connected Internet Protocol (IP) routing prefixes under the control of one or more network operators that presents a common, clearly defined routing policy to the Internet.',
    example: 'Large internet service providers like Comcast and AT&T each operate their own Autonomous System.',
  },
  {
    id: 'ascii-table',
    term: 'ASCII Table',
    slug: 'ascii-table',
    definition: 'The American Standard Code for Information Interchange, a character encoding standard for electronic communication. The ASCII table maps numbers to characters.',
    example: 'In the ASCII table, the number 65 represents the uppercase letter \'A\'.',
  },
  {
    id: 'asg-auto-scaling-group',
    term: 'ASG (Auto Scaling Group)',
    slug: 'asg-auto-scaling-group',
    definition: 'A feature in cloud computing (like AWS) that automatically adjusts the number of compute instances in a group based on demand.',
    example: 'The website\'s Auto Scaling Group automatically added more servers during the Black Friday traffic spike to keep the site responsive.',
  },
  {
    id: 'asic',
    term: 'ASIC (Application-Specific Integrated Circuit)',
    slug: 'asic',
    definition: 'An integrated circuit (IC) customized for a particular use, rather than intended for general-purpose use.',
    example: 'Bitcoin mining is most efficiently done using an ASIC specifically designed for SHA-256 hashing.',
  },
  {
    id: 'asn1-encoding',
    term: 'ASN.1 Encoding',
    slug: 'asn.1-encoding',
    definition: 'Abstract Syntax Notation One is a standard interface description language for defining data structures that can be serialized and deserialized in a cross-platform way.',
    example: 'SSL/TLS certificates use ASN.1 encoding to structure their data in a universally understood format.',
  },
  {
    id: 'asp-net-core',
    term: 'ASP.NET Core',
    slug: 'asp.net-core',
    definition: 'A free, open-source, cross-platform framework for building modern, cloud-based, internet-connected applications, developed by Microsoft.',
    example: 'The development team chose ASP.NET Core to build their new high-performance web API.',
  },
  {
    id: 'asset-bundle',
    term: 'Asset Bundle',
    slug: 'asset-bundle',
    definition: 'In game development (like Unity), a package of assets (models, textures, audio) that can be loaded on demand to manage memory and download size.',
    example: 'The game loads a new asset bundle for each level, containing only the textures and models needed for that specific area.',
  },
  {
    id: 'assembler-directive',
    term: 'Assembler Directive',
    slug: 'assembler-directive',
    definition: 'An instruction to the assembler program that is not converted into machine code, but instead directs how the code should be assembled.',
    example: 'The `.data` assembler directive is used to declare a section of memory for initialized data.',
  },
  {
    id: 'assembly-instruction',
    term: 'Assembly Instruction',
    slug: 'assembly-instruction',
    definition: 'A low-level programming language instruction that is a mnemonic representation of a single machine code instruction.',
    example: 'The `MOV AX, 5` assembly instruction moves the value 5 into the AX register.',
  },
  {
    id: 'assertion-failure',
    term: 'Assertion Failure',
    slug: 'assertion-failure',
    definition: 'An error that occurs during program execution when a specified condition (an assertion) is found to be false, indicating a bug.',
    example: 'The program crashed with an assertion failure because a function that was supposed to return a non-null value returned null.',
  },
  {
    id: 'assignment-operator',
    term: 'Assignment Operator',
    slug: 'assignment-operator',
    definition: 'A symbol in programming (like `=`) used to assign a value to a variable.',
    example: 'In the statement `x = 10`, the `=` is the assignment operator.',
  },
  {
    id: 'assistive-touch-api',
    term: 'Assistive Touch API',
    slug: 'assistive-touch-api',
    definition: 'An accessibility feature in operating systems like iOS that provides a software-based button on the screen to simulate physical gestures and button presses.',
    example: 'He uses the Assistive Touch API because the physical home button on his iPhone is broken.',
  },
  {
    id: 'async-await',
    term: 'Async/Await',
    slug: 'async-await',
    definition: 'A programming language feature that provides a more synchronous-looking syntax for writing asynchronous code, avoiding "callback hell".',
    example: 'Using async/await, the developer could write code to fetch data from an API as if it were a simple, blocking operation.',
  },
  {
    id: 'asynchronous-bus',
    term: 'Asynchronous Bus',
    slug: 'asynchronous-bus',
    definition: 'A type of computer bus where the communication is not synchronized by a common clock signal, instead using handshaking signals.',
    example: 'The I2C protocol uses an asynchronous bus, allowing devices of different speeds to communicate effectively.',
  },
  {
    id: 'asynchronous-replication',
    term: 'Asynchronous Replication',
    slug: 'asynchronous-replication',
    definition: 'In databases, a method of data replication where the primary server commits a transaction and sends the data to replicas without waiting for their confirmation.',
    example: 'They chose asynchronous replication for better performance, accepting a small risk of data loss if the primary server crashed immediately after a write.',
  },
  {
    id: 'ata-advanced-technology-attachment',
    term: 'ATA (Advanced Technology Attachment)',
    slug: 'ata-advanced-technology-attachment',
    definition: 'A standard physical interface for connecting storage devices like hard drives and CD-ROM drives, largely replaced by SATA.',
    example: 'His old computer had a large, flat ribbon cable for its ATA hard drive.',
  },
  {
    id: 'ata-secure-erase',
    term: 'ATA Secure Erase',
    slug: 'ata-secure-erase',
    definition: 'A command in the ATA standard that securely wipes all data from a storage device, making it unrecoverable.',
    example: 'Before selling his old SSD, he used the ATA Secure Erase command to ensure none of his personal data remained.',
  },
  {
    id: 'atapi',
    term: 'ATAPI (ATA Packet Interface)',
    slug: 'atapi',
    definition: 'An extension to the ATA standard that allows it to support devices like CD-ROM and tape drives.',
    example: 'The computer\'s BIOS listed the DVD drive as an ATAPI device.',
  },
  {
    id: 'athenz',
    term: 'Athenz',
    slug: 'athenz',
    definition: 'An open-source platform for X.509 certificate-based service authentication and authorization in dynamic infrastructures.',
    example: 'Yahoo developed Athenz to manage authentication and access control for their microservices at scale.',
  },
  {
    id: 'atlassian-suite',
    term: 'Atlassian Suite',
    slug: 'atlassian-suite',
    definition: 'A collection of software development and collaboration tools from the company Atlassian, including Jira, Confluence, and Bitbucket.',
    example: 'The project management team tracks all tasks in Jira, part of the Atlassian Suite.',
  },
  {
    id: 'atm-network',
    term: 'ATM Network (Asynchronous Transfer Mode)',
    slug: 'atm-network',
    definition: 'A telecommunications standard for carrying voice, video, and data in small, fixed-size cells, largely replaced by IP-based technologies.',
    example: 'In the 1990s, telephone companies used ATM networks as the backbone for their data services.',
  },
  {
    id: 'atomic-clock-sync',
    term: 'Atomic Clock Sync',
    slug: 'atomic-clock-sync',
    definition: 'The process of synchronizing computer clocks with a highly accurate time source, like an atomic clock, often using NTP (Network Time Protocol).',
    example: 'Distributed systems rely on precise atomic clock sync to ensure correct ordering of events across multiple servers.',
  },
  {
    id: 'atomic-commit',
    term: 'Atomic Commit',
    slug: 'atomic-commit',
    definition: 'In databases and version control, an operation where a set of changes are applied as a single, indivisible unit; either all changes succeed or none do.',
    example: 'A bank transfer is an atomic commit: the money must be debited from one account and credited to another in a single transaction.',
  },
  {
    id: 'atomic-counter',
    term: 'Atomic Counter',
    slug: 'atomic-counter',
    definition: 'A type of counter in concurrent programming that can be incremented or decremented as a single, uninterruptible operation.',
    example: 'He used an atomic counter to safely track the number of active requests in a multi-threaded application.',
  },
  {
    id: 'atomic-operation',
    term: 'Atomic Operation',
    slug: 'atomic-operation',
    definition: 'A sequence of one or more operations that appears to the rest of the system to occur instantaneously, without interruption.',
    example: 'Incrementing a shared counter in a multi-threaded environment must be an atomic operation to prevent race conditions.',
  },
  {
    id: 'atomizer-cloud-build-system',
    term: 'Atomizer (Cloud build system)',
    slug: 'atomizer-cloud-build-system',
    definition: 'Slang or a specific name for a system that breaks down large software builds into smaller, parallelizable units to speed up compilation.',
    example: 'The new build atomizer reduced our full-project compile time from 30 minutes to just 5.',
  },
  {
    id: 'attach-rate',
    term: 'Attach Rate',
    slug: 'attach-rate',
    definition: 'A business metric, especially in gaming, that measures the number of accessories or software titles sold per primary device (e.g., console).',
    example: 'The new console had a high attach rate, with the average user buying three games in the first month.',
  },
  {
    id: 'attack-surface',
    term: 'Attack Surface',
    slug: 'attack-surface',
    definition: 'The sum of the different points (the "attack vectors") where an unauthorized user can try to enter data to or extract data from an environment.',
    example: 'By closing unnecessary open ports on the server, the administrator reduced the system\'s attack surface.',
  },
  {
    id: 'attenuation',
    term: 'Attenuation',
    slug: 'attenuation',
    definition: 'The reduction in the strength of a signal as it travels through a medium, such as an electrical wire or optical fiber.',
    example: 'The Wi-Fi signal was weak in the back room due to attenuation from the thick concrete walls.',
  },
  {
    id: 'attribute-selector',
    term: 'Attribute Selector',
    slug: 'attribute-selector',
    definition: 'In CSS, a selector that targets HTML elements based on the presence or value of their attributes.',
    example: 'She used the attribute selector `input[type="submit"]` to style only the submit buttons in the form.',
  },
  {
    id: 'atx-power-supply',
    term: 'ATX Power Supply',
    slug: 'atx-power-supply',
    definition: 'The standard form factor for power supply units (PSUs) in modern desktop computers.',
    example: 'When building his new PC, he chose a modular ATX power supply to make cable management easier.',
  },
  {
    id: 'audio-codec',
    term: 'Audio Codec',
    slug: 'audio-codec',
    definition: 'A device or program that compresses and decompresses digital audio data. Examples include MP3, AAC, and FLAC.',
    example: 'Spotify uses the AAC audio codec to stream high-quality music while using less data than an uncompressed WAV file.',
  },
  {
    id: 'audio-driver',
    term: 'Audio Driver',
    slug: 'audio-driver',
    definition: 'Software that allows the operating system to communicate with and control the computer\'s audio hardware.',
    example: 'After reinstalling Windows, he had to install the correct audio driver to get sound working again.',
  },
  {
    id: 'audit-log',
    term: 'Audit Log',
    slug: 'audit-log',
    definition: 'A chronological record of system activities that is used to track operations, detect security violations, and for compliance.',
    example: 'The security team reviewed the audit log to see who had accessed the sensitive customer data.',
  },
  {
    id: 'aura-sync',
    term: 'Aura Sync',
    slug: 'aura-sync',
    definition: 'A utility from ASUS that allows users to synchronize the RGB lighting across compatible PC components and peripherals.',
    example: 'He used Aura Sync to set all his computer\'s RGB lights—on the motherboard, RAM, and fans—to the same color.',
  },
  {
    id: 'authentication-mechanism',
    term: 'Authentication Mechanism',
    slug: 'authentication-mechanism',
    definition: 'The specific method used to verify the identity of a user or system, such as passwords, biometrics, or security tokens.',
    example: 'The company switched its authentication mechanism from simple passwords to two-factor authentication for better security.',
  },
  {
    id: 'authorization-header',
    term: 'Authorization Header',
    slug: 'authorization-header',
    definition: 'An HTTP header that contains credentials for authenticating a user agent with a server, typically used with access tokens.',
    example: 'The application sent a `Bearer` token in the Authorization header to access the protected API endpoint.',
  },
  {
    id: 'auto-clicker',
    term: 'Auto Clicker',
    slug: 'auto-clicker',
    definition: 'A type of software or macro that can be used to automate the clicking of a mouse on a computer screen element.',
    example: 'In some online games, using an auto clicker is considered cheating as it gives an unfair advantage.',
  },
  {
    id: 'auto-scaling',
    term: 'Auto Scaling',
    slug: 'auto-scaling',
    definition: 'A cloud computing feature that automatically adds or removes compute resources based on application demand.',
    example: 'The website\'s auto-scaling policy added more web servers to handle the surge in traffic during the Super Bowl.',
  },
  {
    id: 'autocad-script',
    term: 'AutoCAD Script',
    slug: 'autocad-script',
    definition: 'A text file containing a sequence of AutoCAD commands to automate repetitive drafting tasks.',
    example: 'The architect wrote an AutoCAD script to automatically generate the floor plan for each apartment unit.',
  },
  {
    id: 'autocomplete-engine',
    term: 'Autocomplete Engine',
    slug: 'autocomplete-engine',
    definition: 'The system that powers the feature suggesting possible completions for text as the user types.',
    example: 'Google\'s search bar has a powerful autocomplete engine that predicts your query based on what you\'ve typed and what others have searched for.',
  },
  {
    id: 'autocorrect-library',
    term: 'Autocorrect Library',
    slug: 'autocorrect-library',
    definition: 'A software library or module that provides functionality to automatically correct spelling errors and typos in text input.',
    example: 'The mobile keyboard uses an autocorrect library to suggest corrections as the user types a message.',
  },
  {
    id: 'autoencoder',
    term: 'Autoencoder',
    slug: 'autoencoder',
    definition: 'A type of artificial neural network used for unsupervised learning of efficient data codings, often for dimensionality reduction or feature detection.',
    example: 'A developer used an autoencoder to compress high-dimensional data into a lower-dimensional representation for a machine learning model.',
  },
  {
    id: 'autohotkey-script',
    term: 'AutoHotkey Script',
    slug: 'autohotkey-script',
    definition: 'A script written for AutoHotkey, a free, open-source custom scripting language for Microsoft Windows, designed to automate repetitive tasks.',
    example: 'He wrote an AutoHotkey script to automatically fill out forms with his personal information with a single key press.',
  },
  {
    id: 'autoloader',
    term: 'Autoloader',
    slug: 'autoloader',
    definition: 'In programming, a function or mechanism that automatically loads classes or modules on demand, rather than loading everything at the start.',
    example: 'Modern PHP frameworks use an autoloader to improve performance by only loading the specific class files that are needed for a request.',
  },
  {
    id: 'autonomous-drone-os',
    term: 'Autonomous Drone OS',
    slug: 'autonomous-drone-os',
    definition: 'An operating system specifically designed for drones that enables them to perform tasks without direct human control, using AI for navigation and decision-making.',
    example: 'The agricultural company uses drones running an autonomous drone OS to monitor crop health and apply pesticides precisely.',
  },
  {
    id: 'auto-responder-filter',
    term: 'Auto-Responder Filter',
    slug: 'auto-responder-filter',
    definition: 'A rule or set of rules in an email system that automatically sends a predefined reply to incoming messages, often based on specific criteria.',
    example: 'She set up an auto-responder filter to let people know she was on vacation and would reply upon her return.',
  },
  {
    id: 'autosave-interval',
    term: 'Autosave Interval',
    slug: 'autosave-interval',
    definition: 'A setting in software applications that determines how frequently the current work is automatically saved to prevent data loss.',
    example: 'He changed the autosave interval in his word processor from 10 minutes to 2 minutes after losing an hour of work.',
  },
  {
    id: 'autoscaling-trigger',
    term: 'Autoscaling Trigger',
    slug: 'autoscaling-trigger',
    definition: 'A specific condition or threshold (like CPU utilization exceeding 80%) that initiates an auto-scaling action in a cloud environment.',
    example: 'The DevOps team configured an autoscaling trigger to add a new server whenever the average CPU load was above 75% for 5 minutes.',
  },
  {
    id: 'autostart-entry',
    term: 'Autostart Entry',
    slug: 'autostart-entry',
    definition: 'A configuration setting in an operating system that causes a specific program or service to launch automatically when the system boots up.',
    example: 'He removed the unnecessary autostart entry for the music player to make his computer boot faster.',
  },
  {
    id: 'autosys-scheduler',
    term: 'AutoSys Scheduler',
    slug: 'autosys-scheduler',
    definition: 'A job control system for scheduling, monitoring, and reporting on jobs in a distributed computing environment, common in enterprise settings.',
    example: 'The IT department uses the AutoSys scheduler to manage the nightly batch processing jobs for the entire company.',
  },
  {
    id: 'availability-zone',
    term: 'Availability Zone',
    slug: 'availability-zone',
    definition: 'In cloud computing (like AWS or Azure), a distinct location within a region that is insulated from failures in other zones, used for high availability.',
    example: 'To ensure their application is fault-tolerant, they deployed their servers across multiple availability zones.',
  },
  {
    id: 'avalanche-network',
    term: 'Avalanche Network',
    slug: 'avalanche-network',
    definition: 'A blockchain platform that uses a novel consensus protocol to achieve high throughput and fast finality, designed for decentralized applications and custom blockchains.',
    example: 'The DeFi project chose to build on the Avalanche network because of its low transaction fees and high scalability.',
  },
  {
    id: 'avatar-hash',
    term: 'Avatar Hash',
    slug: 'avatar-hash',
    definition: 'A hash value generated from a user\'s information (like an email address) that is used to generate a unique, consistent profile picture, like a Gravatar.',
    example: 'The forum uses an MD5 avatar hash of the user\'s email to display a unique default profile picture for each member.',
  },
  {
    id: 'avg-heuristics',
    term: 'AVG Heuristics',
    slug: 'avg-heuristics',
    definition: 'The heuristic analysis methods used by AVG antivirus software to detect new and unknown malware based on suspicious code structure or behavior.',
    example: 'The file was flagged by AVG heuristics because it was attempting to write to a protected system directory, a common malware behavior.',
  },
  {
    id: 'avr-microcontroller',
    term: 'AVR Microcontroller',
    slug: 'avr-microcontroller',
    definition: 'A family of microcontrollers developed by Atmel (now Microchip Technology), widely used in hobbyist and embedded projects, including many Arduino boards.',
    example: 'He used an ATmega328P, a popular AVR microcontroller, as the brain for his custom robotics project.',
  },
  {
    id: 'aws-batch',
    term: 'AWS Batch',
    slug: 'aws-batch',
    definition: 'A service from Amazon Web Services that enables developers to run batch computing workloads efficiently on the AWS cloud.',
    example: 'The research team used AWS Batch to process thousands of genomic data files in parallel, significantly reducing their analysis time.',
  },
  {
    id: 'aws-cloudformation',
    term: 'AWS CloudFormation',
    slug: 'aws-cloudformation',
    definition: 'An AWS service that allows you to define and provision your cloud infrastructure as code using a template file (in YAML or JSON).',
    example: 'The DevOps team used an AWS CloudFormation template to create a repeatable and automated way to deploy their entire application stack.',
  },
  {
    id: 'aws-direct-connect',
    term: 'AWS Direct Connect',
    slug: 'aws-direct-connect',
    definition: 'A cloud service solution that makes it easy to establish a dedicated network connection from your premises to AWS.',
    example: 'The financial firm used AWS Direct Connect to establish a private, high-bandwidth connection between their data center and their VPC for better security and performance.',
  },
  {
    id: 'aws-fargate',
    term: 'AWS Fargate',
    slug: 'aws-fargate',
    definition: 'A serverless compute engine for containers from AWS that allows you to run containers without having to manage servers or clusters.',
    example: 'By using AWS Fargate, the developers could focus on building their containerized application without worrying about provisioning and managing the underlying EC2 instances.',
  },
  {
    id: 'aws-iam',
    term: 'AWS IAM',
    slug: 'aws-iam',
    definition: 'AWS Identity and Access Management (IAM) is a web service that helps you securely control access to AWS resources.',
    example: 'The administrator created an AWS IAM role with specific permissions to allow an EC2 instance to access an S3 bucket without needing hardcoded credentials.',
  },
  {
    id: 'aws-lambda',
    term: 'AWS Lambda',
    slug: 'aws-lambda',
    definition: 'A serverless computing service from AWS that lets you run code without provisioning or managing servers. You pay only for the compute time you consume.',
    example: 'They created an AWS Lambda function that automatically resizes an image whenever it is uploaded to a specific S3 bucket.',
  },
  {
    id: 'aws-lightsail',
    term: 'AWS LightSail',
    slug: 'aws-lightsail',
    definition: 'An easy-to-use cloud platform from AWS that provides virtual private servers (VPS), databases, and more at a simple, low monthly price.',
    example: 'For his personal blog, he used AWS LightSail because it was a simple and affordable way to get a pre-configured WordPress server up and running.',
  },
  {
    id: 'aws-macie',
    term: 'AWS Macie',
    slug: 'aws-macie',
    definition: 'A fully managed data security and data privacy service from AWS that uses machine learning to discover and protect sensitive data in AWS.',
    example: 'The company enabled AWS Macie to continuously scan their S3 buckets for any accidental exposure of personally identifiable information (PII).',
  },
  {
    id: 'aws-neptune',
    term: 'AWS Neptune',
    slug: 'aws-neptune',
    definition: 'A fast, reliable, fully-managed graph database service from AWS that makes it easy to build and run applications that work with highly connected datasets.',
    example: 'The social media company used AWS Neptune to power its "people you may know" feature by analyzing the graph of user connections.',
  },
  {
    id: 'aws-outposts',
    term: 'AWS Outposts',
    slug: 'aws-outposts',
    definition: 'A fully managed service from AWS that extends AWS infrastructure, services, APIs, and tools to customer premises for a truly consistent hybrid experience.',
    example: 'The hospital used AWS Outposts to run their medical imaging application on-premises for low-latency processing, while still using AWS services for backup and analytics.',
  },
  {
    id: 'aws-parameter-store',
    term: 'AWS Parameter Store',
    slug: 'aws-parameter-store',
    definition: 'A feature of AWS Systems Manager that provides secure, hierarchical storage for configuration data and secrets management.',
    example: 'Instead of hardcoding the database password in their application, developers stored it in AWS Parameter Store and retrieved it securely at runtime.',
  },
  {
    id: 'aws-quicksight',
    term: 'AWS QuickSight',
    slug: 'aws-quicksight',
    definition: 'A scalable, serverless, embeddable, machine learning-powered business intelligence (BI) service from AWS.',
    example: 'The marketing team used AWS QuickSight to create interactive dashboards to visualize their campaign performance data.',
  },
  {
    id: 'aws-redshift',
    term: 'AWS Redshift',
    slug: 'aws-redshift',
    definition: 'A fully managed, petabyte-scale data warehouse service in the cloud from AWS.',
    example: 'The company loaded all its historical sales data into an AWS Redshift cluster to run complex analytical queries and generate business reports.',
  },
  {
    id: 'aws-rds',
    term: 'AWS RDS',
    slug: 'aws-rds',
    definition: 'Amazon Relational Database Service (RDS) is a managed service that makes it easy to set up, operate, and scale a relational database in the cloud.',
    example: 'They migrated their on-premises MySQL database to AWS RDS to offload the burden of database administration, like backups and patching.',
  },
  {
    id: 'aws-s3',
    term: 'AWS S3',
    slug: 'aws-s3',
    definition: 'Amazon Simple Storage Service (S3) is an object storage service that offers industry-leading scalability, data availability, security, and performance.',
    example: 'The web application stores all user-uploaded images and videos in an AWS S3 bucket.',
  },
  {
    id: 'aws-secrets-manager',
    term: 'AWS Secrets Manager',
    slug: 'aws-secrets-manager',
    definition: 'An AWS service that helps you protect secrets needed to access your applications, services, and IT resources. The service enables you to easily rotate, manage, and retrieve database credentials, API keys, and other secrets throughout their lifecycle.',
    example: 'The application uses AWS Secrets Manager to automatically rotate its database password every 30 days without requiring any code changes.',
  },
  {
    id: 'aws-ses',
    term: 'AWS SES',
    slug: 'aws-ses',
    definition: 'Amazon Simple Email Service (SES) is a cost-effective, flexible, and scalable email service that enables developers to send mail from within any application.',
    example: 'The e-commerce website uses AWS SES to send order confirmation and shipping notification emails to its customers.',
  },
  {
    id: 'aws-shield',
    term: 'AWS Shield',
    slug: 'aws-shield',
    definition: 'A managed Distributed Denial of Service (DDoS) protection service from AWS that safeguards applications running on AWS.',
    example: 'All applications running behind their AWS load balancer are automatically protected by AWS Shield Standard against common DDoS attacks.',
  },
  {
    id: 'aws-snowball',
    term: 'AWS Snowball',
    slug: 'aws-snowball',
    definition: 'A petabyte-scale data transport solution from AWS that uses secure appliances to transfer large amounts of data into and out of the AWS cloud.',
    example: 'To migrate their 50 terabytes of data to the cloud, they ordered an AWS Snowball appliance, loaded the data onto it, and shipped it back to AWS.',
  },
  {
    id: 'aws-step-functions',
    term: 'AWS Step Functions',
    slug: 'aws-step-functions',
    definition: 'A serverless function orchestrator from AWS that makes it easy to sequence AWS Lambda functions and multiple AWS services into business-critical applications.',
    example: 'They used AWS Step Functions to create a workflow that transcribes a video file, translates the text, and then sends a notification, all as a series of coordinated steps.',
  },
  {
    id: 'aws-storage-gateway',
    term: 'AWS Storage Gateway',
    slug: 'aws-storage-gateway',
    definition: 'A hybrid cloud storage service from AWS that gives you on-premises access to virtually unlimited cloud storage.',
    example: 'The office used AWS Storage Gateway to back up their local file shares to Amazon S3 automatically.',
  },
  {
    id: 'aws-vpc',
    term: 'AWS VPC',
    slug: 'aws-vpc',
    definition: 'Amazon Virtual Private Cloud (VPC) lets you provision a logically isolated section of the AWS Cloud where you can launch AWS resources in a virtual network that you define.',
    example: 'The company created an AWS VPC to build a private, isolated network in the cloud for their application servers and databases.',
  },
  {
    id: 'axi-bus',
    term: 'AXI Bus',
    slug: 'axi-bus',
    definition: 'Advanced eXtensible Interface, a part of the ARM AMBA standard, is a high-performance, high-frequency bus protocol for system-on-chip (SoC) designs.',
    example: 'In the SoC, the high-speed processor and the DDR memory controller communicate over a wide AXI bus for maximum bandwidth.',
  },
  {
    id: 'aix-operating-system',
    term: 'AIX Operating System',
    slug: 'aix-operating-system',
    definition: 'A series of proprietary Unix operating systems developed and sold by IBM for several of its computer platforms.',
    example: 'The bank\'s critical legacy application still runs on a powerful IBM server running the AIX operating system.',
  },
  {
    id: 'azure-ad',
    term: 'Azure AD',
    slug: 'azure-ad',
    definition: 'Microsoft Azure Active Directory is a cloud-based identity and access management service that provides single sign-on and multi-factor authentication.',
    example: 'The company uses Azure AD to allow employees to log in to all their cloud applications, like Office 365 and Salesforce, with a single set of credentials.',
  },
  {
    id: 'azure-blob-storage',
    term: 'Azure Blob Storage',
    slug: 'azure-blob-storage',
    definition: 'Microsoft\'s object storage solution for the cloud, designed for storing massive amounts of unstructured data.',
    example: 'The application stores all user-uploaded photos and documents in Azure Blob Storage.',
  },
  {
    id: 'azure-container-apps',
    term: 'Azure Container Apps',
    slug: 'azure-container-apps',
    definition: 'A serverless container service from Microsoft Azure that enables you to run microservices and containerized applications on a serverless platform.',
    example: 'They deployed their containerized microservices to Azure Container Apps to benefit from automatic scaling without managing the underlying Kubernetes cluster.',
  },
  {
    id: 'azure-devops',
    term: 'Azure DevOps',
    slug: 'azure-devops',
    definition: 'A suite of services from Microsoft that provides developer services for allowing teams to plan work, collaborate on code development, and build and deploy applications.',
    example: 'The team uses Azure DevOps for the entire software lifecycle, from planning tasks on Azure Boards to running builds with Azure Pipelines.',
  },
  {
    id: 'azure-front-door',
    term: 'Azure Front Door',
    slug: 'azure-front-door',
    definition: 'A scalable and secure entry point from Microsoft Azure for fast delivery of your global web applications.',
    example: 'They used Azure Front Door to provide a single global endpoint for their web application, with built-in DDoS protection and load balancing across different regions.',
  },
  {
    id: 'azure-functions',
    term: 'Azure Functions',
    slug: 'azure-functions',
    definition: 'A serverless compute service from Microsoft Azure that enables you to run event-triggered code without having to explicitly provision or manage infrastructure.',
    example: 'He wrote an Azure Function that is triggered every time a new file is added to Blob Storage, which then processes the file automatically.',
  },
  {
    id: 'azure-logic-apps',
    term: 'Azure Logic Apps',
    slug: 'azure-logic-apps',
    definition: 'A cloud service from Microsoft Azure that helps you schedule, automate, and orchestrate tasks, business processes, and workflows.',
    example: 'The marketing team built a workflow in Azure Logic Apps that automatically posts a message to Slack whenever a new lead is added to their CRM.',
  },
  {
    id: 'azure-monitor',
    term: 'Azure Monitor',
    slug: 'azure-monitor',
    definition: 'A comprehensive solution from Microsoft Azure for collecting, analyzing, and acting on telemetry from your cloud and on-premises environments.',
    example: 'The operations team uses Azure Monitor to track the performance of their virtual machines and set up alerts for high CPU usage.',
  },
  {
    id: 'azure-pipelines',
    term: 'Azure Pipelines',
    slug: 'azure-pipelines',
    definition: 'A cloud service from Microsoft Azure that you can use to automatically build and test your code project and make it available to other users.',
    example: 'Their CI/CD process is built on Azure Pipelines, which automatically deploys their web app to production after all tests pass.',
  },
  {
    id: 'azure-redis-cache',
    term: 'Azure Redis Cache',
    slug: 'azure-redis-cache',
    definition: 'A secure and dedicated Redis cache, managed by Microsoft and accessible from any application within Azure.',
    example: 'To improve performance, the application uses Azure Redis Cache to store frequently accessed database query results.',
  },
  {
    id: 'azure-sentinel',
    term: 'Azure Sentinel',
    slug: 'azure-sentinel',
    definition: 'A scalable, cloud-native, security information and event management (SIEM) and security orchestration, automation, and response (SOAR) solution from Microsoft.',
    example: 'The security operations center uses Azure Sentinel to collect security data from across the enterprise and detect threats in real time.',
  },
  {
    id: 'azure-sql',
    term: 'Azure SQL',
    slug: 'azure-sql',
    definition: 'A family of managed, secure, and intelligent products that use the SQL Server database engine in the Azure cloud.',
    example: 'Instead of managing their own SQL Server, they migrated their database to Azure SQL for automatic patching, backups, and scalability.',
  },
  {
    id: 'azure-static-web-apps',
    term: 'Azure Static Web Apps',
    slug: 'azure-static-web-apps',
    definition: 'A service from Microsoft Azure that automatically builds and deploys full stack web apps to Azure from a code repository.',
    example: 'She deployed her personal portfolio, built with React and a serverless API, to Azure Static Web Apps in just a few minutes.',
  },
  {
    id: 'azure-virtual-desktop',
    term: 'Azure Virtual Desktop',
    slug: 'azure-virtual-desktop',
    definition: 'A desktop and app virtualization service that runs on the cloud, offered by Microsoft Azure.',
    example: 'The company provided its remote employees with access to all their corporate applications through Azure Virtual Desktop.',
  },
  {
    id: 'azure-vm-scale-sets',
    term: 'Azure VM Scale Sets',
    slug: 'azure-vm-scale-sets',
    definition: 'A feature in Microsoft Azure that lets you create and manage a group of load-balanced virtual machines (VMs). The number of VM instances can automatically increase or decrease in response to demand or a defined schedule.',
    example: 'The e-commerce site uses Azure VM Scale Sets to automatically add more web servers during peak shopping seasons.',
  },
  {
    id: 'backoff-algorithm',
    term: 'Backoff Algorithm',
    slug: 'backoff-algorithm',
    definition: 'A strategy used in networking and distributed systems where a client retries a failed operation with progressively longer delays to avoid overwhelming a service.',
    example: 'When the API returned a "Too Many Requests" error, the client used an exponential backoff algorithm before retrying.',
  },
  {
    id: 'backplane-bus',
    term: 'Backplane Bus',
    slug: 'backplane-bus',
    definition: 'A group of parallel electrical connectors that form a bus, into which circuit boards can be plugged, common in blade servers and networking equipment.',
    example: 'The switch\'s high-speed backplane bus allows data to be transferred between different port modules at very high rates.',
  },
  {
    id: 'backup-rotation',
    term: 'Backup Rotation',
    slug: 'backup-rotation',
    definition: 'A system of managing multiple backup copies of data, where older backups are systematically replaced by newer ones.',
    example: 'They used a Grandfather-Father-Son backup rotation scheme to keep daily, weekly, and monthly copies of their data.',
  },
  {
    id: 'backscatter-analysis',
    term: 'Backscatter Analysis',
    slug: 'backscatter-analysis',
    definition: 'A technique in network security to analyze the reply packets from a DDoS attack to infer information about the attack\'s source and scale.',
    example: 'By using backscatter analysis, security researchers were able to estimate the size of the botnet involved in the attack.',
  },
  {
    id: 'backup-snapshot',
    term: 'Backup Snapshot',
    slug: 'backup-snapshot',
    definition: 'A point-in-time copy of a storage volume or database, which can be used to quickly restore the system to that state.',
    example: 'Before applying the major software update, the administrator took a backup snapshot of the server\'s disk.',
  },
  {
    id: 'background-daemon',
    term: 'Background Daemon',
    slug: 'background-daemon',
    definition: 'A program that runs continuously in the background on an operating system, performing tasks without user interaction.',
    example: 'The `cron` background daemon on Linux is responsible for running scheduled jobs.',
  },
  {
    id: 'background-job',
    term: 'Background Job',
    slug: 'background-job',
    definition: 'A task or process that a computer program runs in the background, allowing the user to continue interacting with the application.',
    example: 'After the user clicked "Export," the application started a background job to generate the large report, so the UI remained responsive.',
  },
  {
    id: 'back-end-system',
    term: 'Back-end System',
    slug: 'back-end-system',
    definition: 'The part of a software application that is not visible to the user, handling server-side logic, databases, and APIs.',
    example: 'When you make a purchase online, the back-end system processes your payment and updates the inventory database.',
  },
  {
    id: 'backspace-character',
    term: 'Backspace Character',
    slug: 'backspace-character',
    definition: 'A control character that moves the cursor one position backward. In ASCII, it is represented by the value 8.',
    example: 'Pressing the backspace key on your keyboard sends a backspace character to the application.',
  },
  {
    id: 'backtesting-engine',
    term: 'Backtesting Engine',
    slug: 'backtesting-engine',
    definition: 'A software tool used in finance to test a trading strategy on historical data to see how it would have performed.',
    example: 'The quantitative analyst used a backtesting engine to simulate his new algorithm on the last ten years of stock market data.',
  },
  {
    id: 'backend-for-frontend',
    term: 'Backend for Frontend (BFF)',
    slug: 'backend-for-frontend',
    definition: 'An architectural pattern where a dedicated backend service is created to serve a specific frontend application, providing an optimized API for that client.',
    example: 'The company has one BFF for its mobile app and another for its web app, allowing each to have a tailored API without affecting the other.',
  },
  {
    id: 'bad-block',
    term: 'Bad Block',
    slug: 'bad-block',
    definition: 'A sector on a storage device (like a hard drive or SSD) that is no longer reliable for storing and retrieving data.',
    example: 'The disk utility scan reported several bad blocks, indicating that the hard drive might be failing.',
  },
  {
    id: 'badge-component',
    term: 'Badge Component',
    slug: 'badge-component',
    definition: 'In UI design, a small graphical element used to display a count or status, such as the number of unread notifications.',
    example: 'The email app shows a badge component on its icon with the number of unread messages.',
  },
  {
    id: 'bag-of-words',
    term: 'Bag-of-Words',
    slug: 'bag-of-words',
    definition: 'A simple representation model used in natural language processing where a text is represented as an unordered collection (or "bag") of its words, disregarding grammar and word order.',
    example: 'For a simple spam filter, the bag-of-words model can be used to count the frequency of words like "free" and "win".',
  },
  {
    id: 'balancer-node',
    term: 'Balancer Node',
    slug: 'balancer-node',
    definition: 'A server or process in a distributed system whose primary role is to distribute incoming traffic or workload among other nodes.',
    example: 'The load balancer node received the incoming web request and forwarded it to the least busy application server.',
  },
  {
    id: 'band-steering',
    term: 'Band Steering',
    slug: 'band-steering',
    definition: 'A feature in dual-band Wi-Fi routers that encourages capable devices to connect to the faster, less congested 5 GHz band instead of the 2.4 GHz band.',
    example: 'After enabling band steering on his router, his new laptop automatically connected to the 5 GHz network for better streaming performance.',
  },
  {
    id: 'band-pass-filter',
    term: 'Band-Pass Filter',
    slug: 'band-pass-filter',
    definition: 'An electronic filter that passes frequencies within a certain range and rejects (attenuates) frequencies outside that range.',
    example: 'Audio equalizers use a series of band-pass filters to boost or cut specific frequency ranges like bass and treble.',
  },
  {
    id: 'bank-switching',
    term: 'Bank Switching',
    slug: 'bank-switching',
    definition: 'A technique used in early computing to increase the amount of usable memory beyond what a processor could directly address, by switching between different banks of memory.',
    example: 'Old video game consoles used bank switching to fit larger games onto small cartridges.',
  },
  {
    id: 'banner-grabbing',
    term: 'Banner Grabbing',
    slug: 'banner-grabbing',
    definition: 'A technique used to gain information about a computer system on a network by observing the banner, or welcome message, sent by a service.',
    example: 'A penetration tester used banner grabbing to identify the version of the web server software, looking for known vulnerabilities.',
  },
  {
    id: 'bar-chart-library',
    term: 'Bar Chart Library',
    slug: 'bar-chart-library',
    definition: 'A software library that provides functions and components for creating and displaying bar charts in an application.',
    example: 'The developer used the Chart.js library, a popular bar chart library, to create a dashboard visualizing monthly sales data.',
  },
  {
    id: 'bare-metal-server',
    term: 'Bare-metal Server',
    slug: 'bare-metal-server',
    definition: 'A physical server dedicated to a single tenant, where the operating system is installed directly on the hardware without a virtualization layer.',
    example: 'For their high-performance database, the company chose a bare-metal server to avoid the overhead of a hypervisor.',
  },
  {
    id: 'base-address-register',
    term: 'Base Address Register',
    slug: 'base-address-register',
    definition: 'A register in a computer processor that holds the beginning address of a memory block or I/O space assigned to a device.',
    example: 'The operating system reads the Base Address Register of the new PCI card to determine where its memory is mapped.',
  },
  {
    id: 'base-command',
    term: 'Base Command',
    slug: 'base-command',
    definition: 'The main command or executable in a command-line interface, to which subcommands and arguments are added.',
    example: 'In `git commit -m "message"`, `git` is the base command.',
  },
  {
    id: 'base-image',
    term: 'Base Image',
    slug: 'base-image',
    definition: 'In containerization (like Docker), the starting image upon which you build your own custom image. It typically contains an operating system.',
    example: 'He chose a lightweight Alpine Linux base image for his Docker container to keep the final image size small.',
  },
  {
    id: 'base-station',
    term: 'Base Station',
    slug: 'base-station',
    definition: 'A fixed radio transceiver in a wireless network that acts as the central connection point for other devices. A Wi-Fi access point or a cell tower are examples.',
    example: 'Your phone connects to a cellular base station to make calls and access the internet.',
  },
  {
    id: 'base64-encoding',
    term: 'Base64 Encoding',
    slug: 'base64-encoding',
    definition: 'A method of encoding binary data into a text-based format so that it can be safely transmitted over media that are designed to handle text.',
    example: 'To embed a small image directly in a CSS file, you can convert the image data into a Base64 encoded string.',
  },
  {
    id: 'baseline-drift',
    term: 'Baseline Drift',
    slug: 'baseline-drift',
    definition: 'In monitoring and analytics, a gradual and often unnoticed change in the normal or "baseline" behavior of a system over time.',
    example: 'The monitoring system didn\'t raise an alert because the slow increase in memory usage was classified as baseline drift, not a sudden spike.',
  },
  {
    id: 'bash-script',
    term: 'Bash Script',
    slug: 'bash-script',
    definition: 'A script file containing a series of commands for the Bash shell, used to automate tasks in a Unix-like operating system.',
    example: 'He wrote a Bash script to automate the process of backing up his files and uploading them to a remote server.',
  },
  {
    id: 'basic-input-output-system',
    term: 'Basic Input/Output System (BIOS)',
    slug: 'basic-input-output-system',
    definition: 'Firmware used to perform hardware initialization during the booting process on a computer.',
    example: 'She entered the BIOS setup menu to change the boot order and install a new operating system from a USB drive.',
  },
  {
    id: 'batch-file',
    term: 'Batch File',
    slug: 'batch-file',
    definition: 'A script file in DOS, OS/2, and Microsoft Windows. It consists of a series of commands to be executed by the command-line interpreter, stored in a plain text file.',
    example: 'He created a batch file with the `.bat` extension to automate a series of file management tasks on his Windows PC.',
  },
  {
    id: 'batch-job',
    term: 'Batch Job',
    slug: 'batch-job',
    definition: 'A task or set of tasks that can be executed without user interaction, often scheduled to run at off-peak hours.',
    example: 'The bank runs a batch job every night to process all the transactions from that day.',
  },
  {
    id: 'batch-normalization',
    term: 'Batch Normalization',
    slug: 'batch-normalization',
    definition: 'A technique in deep learning that normalizes the inputs of each layer to stabilize and speed up the training of artificial neural networks.',
    example: 'Adding a batch normalization layer to the neural network helped prevent the gradients from vanishing and allowed for a higher learning rate.',
  },
  {
    id: 'batch-processor',
    term: 'Batch Processor',
    slug: 'batch-processor',
    definition: 'A system or program designed to execute a series of jobs (a "batch") non-interactively.',
    example: 'The data engineering team used Apache Spark as a batch processor to analyze terabytes of historical log data.',
  },
  {
    id: 'bcrypt-hash',
    term: 'Bcrypt Hash',
    slug: 'bcrypt-hash',
    definition: 'A password-hashing function designed to be slow and computationally intensive to protect against brute-force attacks.',
    example: 'Instead of storing passwords in plain text, the application stores a secure bcrypt hash of each user\'s password.',
  },
  {
    id: 'beacon-frame',
    term: 'Beacon Frame',
    slug: 'beacon-frame',
    definition: 'One of the management frames in Wi-Fi. It is periodically sent by the access point to announce its presence and provide the network\'s parameters.',
    example: 'Your phone discovers nearby Wi-Fi networks by listening for the beacon frames they broadcast.',
  },
  {
    id: 'beamforming',
    term: 'Beamforming',
    slug: 'beamforming',
    definition: 'A signal processing technique used in sensor arrays for directional signal transmission or reception. In Wi-Fi, it focuses the signal towards a specific device.',
    example: 'Modern Wi-Fi routers use beamforming to improve signal strength and speed for connected devices.',
  },
  {
    id: 'bearer-token',
    term: 'Bearer Token',
    slug: 'bearer-token',
    definition: 'A type of access token in OAuth 2.0. The "bearer" can use this token to access protected resources without further identification.',
    example: 'The mobile app included the bearer token in the `Authorization` header of its API requests to authenticate itself.',
  },
  {
    id: 'beautifier-tool',
    term: 'Beautifier Tool',
    slug: 'beautifier-tool',
    definition: 'A utility that automatically reformats source code to make it more readable and conform to a specific style guide.',
    example: 'He ran his messy JavaScript code through a beautifier tool like Prettier to automatically fix all the indentation and spacing.',
  },
  {
    id: 'beaver-code',
    term: 'Beaver Code',
    slug: 'beaver-code',
    definition: 'Slang for overly complex or convoluted code that is difficult to understand, as if built by a beaver with no clear plan.',
    example: 'The new developer spent a week trying to understand the beaver code left behind by his predecessor.',
  },
  {
    id: 'benchmark-suite',
    term: 'Benchmark Suite',
    slug: 'benchmark-suite',
    definition: 'A collection of programs or tests used to evaluate and compare the performance of hardware or software.',
    example: 'The team ran the SPEC CPU2017 benchmark suite to measure the performance of the new processor.',
  },
  {
    id: 'bend-radius',
    term: 'Bend Radius',
    slug: 'bend-radius',
    definition: 'In fiber optics, the minimum radius one can bend a cable without damaging it or causing significant signal loss.',
    example: 'Installers must be careful not to exceed the specified bend radius when laying fiber optic cables around corners.',
  },
  {
    id: 'ber',
    term: 'BER (Bit Error Rate)',
    slug: 'ber',
    definition: 'The number of bit errors per unit time. It is a key measure of performance in a digital communication system.',
    example: 'The satellite connection had a high BER during the storm, causing intermittent data loss.',
  },
  {
    id: 'berkeley-db',
    term: 'Berkeley DB',
    slug: 'berkeley-db',
    definition: 'A high-performance embedded database library that provides a simple key/value data store.',
    example: 'Many open-source applications use Berkeley DB internally for reliable data storage.',
  },
  {
    id: 'berkeley-packet-filter',
    term: 'Berkeley Packet Filter (BPF)',
    slug: 'berkeley-packet-filter',
    definition: 'A technology that allows programs to run in a sandboxed environment within the Linux kernel, often used for high-performance networking and observability.',
    example: 'Tools like tcpdump use BPF to efficiently capture only the network packets that match a specific filter.',
  },
  {
    id: 'beta-channel',
    term: 'Beta Channel',
    slug: 'beta-channel',
    definition: 'A software release channel for users who want to test upcoming features before they are released to the general public. It is more stable than a canary or dev channel.',
    example: 'He switched to the Chrome Beta channel to try out new browser features a few weeks early.',
  },
  {
    id: 'beta-software',
    term: 'Beta Software',
    slug: 'beta-software',
    definition: 'A pre-release version of software that is given to a large group of users to try under real conditions.',
    example: 'The gaming company launched an open beta for their new game to gather feedback and stress-test the servers.',
  },
  {
    id: 'bettercap-toolkit',
    term: 'Bettercap Toolkit',
    slug: 'bettercap-toolkit',
    definition: 'A powerful, modular, and portable tool for penetration testers and reverse engineers to perform man-in-the-middle attacks.',
    example: 'The security expert used the Bettercap toolkit to demonstrate how easily an attacker could intercept traffic on an unsecured Wi-Fi network.',
  },
  {
    id: 'bezier-curve',
    term: 'Bezier Curve',
    slug: 'bezier-curve',
    definition: 'A parametric curve used in computer graphics and related fields. It is defined by a set of control points.',
    example: 'Vector graphics software like Adobe Illustrator uses Bezier curves to create smooth, scalable shapes.',
  },
  {
    id: 'bfs-algorithm',
    term: 'BFS Algorithm (Breadth-First Search)',
    slug: 'bfs-algorithm',
    definition: 'A graph traversal algorithm that explores all the neighbor nodes at the present depth prior to moving on to the nodes at the next depth level.',
    example: 'BFS algorithm is often used to find the shortest path in an unweighted graph, like finding the fewest connections between two people on a social network.',
  },
  {
    id: 'bgp-routing-table',
    term: 'BGP Routing Table',
    slug: 'bgp-routing-table',
    definition: 'A large table maintained by Border Gateway Protocol routers that lists the paths to various network destinations across the internet.',
    example: 'A major ISP had a misconfiguration in its BGP routing table, causing a significant portion of internet traffic to be incorrectly routed and leading to widespread outages.',
  },
  {
    id: 'bgp-session',
    term: 'BGP Session',
    slug: 'bgp-session',
    definition: 'A TCP connection between two BGP routers for the purpose of exchanging routing information.',
    example: 'The network engineer established a BGP session with a new transit provider to add more redundancy to their internet connectivity.',
  },
  {
    id: 'bias-node',
    term: 'Bias Node',
    slug: 'bias-node',
    definition: 'In an artificial neural network, a special node added to each layer that provides a constant value, allowing the activation function to be shifted.',
    example: 'The bias node acts like the y-intercept in a linear equation, giving the model more flexibility to fit the data.',
  },
  {
    id: 'bidirectional-bus',
    term: 'Bidirectional Bus',
    slug: 'bidirectional-bus',
    definition: 'A data bus in which data can flow in both directions between components.',
    example: 'The USB interface uses a bidirectional bus to allow data to be both read from and written to a connected device.',
  },
  {
    id: 'big-data-pipeline',
    term: 'Big Data Pipeline',
    slug: 'big-data-pipeline',
    definition: 'The end-to-end process of moving data from various sources to a destination for storage and analysis. It includes steps like data ingestion, processing, and loading.',
    example: 'The company built a big data pipeline using Kafka, Spark, and Hadoop to process streaming user activity data in real-time.',
  },
  {
    id: 'big-endian',
    term: 'Big Endian',
    slug: 'big-endian',
    definition: 'A system for storing multi-byte data where the most significant byte is placed at the lowest memory address. The opposite of Little Endian.',
    example: 'Network protocols typically use big-endian byte order, so systems with little-endian processors must convert the byte order before sending data.',
  },
  {
    id: 'big-integer',
    term: 'Big Integer',
    slug: 'big-integer',
    definition: 'A data type in programming that can represent integers of arbitrary size, not limited by the standard 32-bit or 64-bit integer types.',
    example: 'Cryptography often requires calculations with very large numbers, so a Big Integer library is used.',
  },
  {
    id: 'bikeshare-api',
    term: 'Bikeshare API',
    slug: 'bikeshare-api',
    definition: 'A specific API that provides data about a city\'s bike-sharing program, such as station locations, and the number of available bikes and empty docks.',
    example: 'The transit app used a bikeshare API to show users where the nearest available bike was located.',
  },
  {
    id: 'binary-blob',
    term: 'Binary Blob',
    slug: 'binary-blob',
    definition: 'A large object of binary data stored in a database, such as an image or an executable file.',
    example: 'The driver for the Wi-Fi card was a proprietary binary blob, so the open-source community could not inspect or modify its code.',
  },
  {
    id: 'binary-diff',
    term: 'Binary Diff',
    slug: 'binary-diff',
    definition: 'A utility or algorithm that compares two binary files and outputs the differences between them, often used for creating patches.',
    example: 'The software update was delivered as a small binary diff, containing only the changes from the previous version, which made the download much smaller.',
  },
  {
    id: 'binary-heap',
    term: 'Binary Heap',
    slug: 'binary-heap',
    definition: 'A tree-based data structure that satisfies the heap property: in a min-heap, the parent node is always smaller than its children.',
    example: 'Priority queues are often implemented using a binary heap because it allows for efficient retrieval of the highest-priority item.',
  },
  {
    id: 'binary-protocol',
    term: 'Binary Protocol',
    slug: 'binary-protocol',
    definition: 'A communication protocol that uses binary data rather than text, often for efficiency and performance. Examples include AMQP and gRPC.',
    example: 'High-frequency trading systems use a binary protocol to minimize latency when sending orders.',
  },
  {
    id: 'binary-search',
    term: 'Binary Search',
    slug: 'binary-search',
    definition: 'An efficient algorithm for finding an item from a sorted list of items. It works by repeatedly dividing in half the portion of the list that could contain the item.',
    example: 'Instead of searching the dictionary page by page, you perform a binary search by opening it to the middle and deciding which half to look in next.',
  },
  {
    id: 'binding-address',
    term: 'Binding Address',
    slug: 'binding-address',
    definition: 'In networking, the IP address that a service or application is configured to listen on.',
    example: 'The web server was configured with a binding address of 0.0.0.0, meaning it would accept connections on any available network interface.',
  },
  {
    id: 'binding-energy',
    term: 'Binding Energy (Computation)',
    slug: 'binding-energy',
    definition: 'A metaphorical term in software design for the "cost" or effort required to change a decision once it has been made.',
    example: 'Choosing a database has a high binding energy because migrating to a different one later is a very difficult and expensive process.',
  },
  {
    id: 'bing-spellcheck',
    term: 'Bing Spellcheck',
    slug: 'bing-spellcheck',
    definition: 'An API from Microsoft Azure that provides advanced spell-checking capabilities.',
    example: 'The application integrated the Bing Spellcheck API to provide users with more accurate spelling suggestions.',
  },
  {
    id: 'bit-bang-mode',
    term: 'Bit Bang Mode',
    slug: 'bit-bang-mode',
    definition: 'A technique for serial communication where the software directly controls the state of the I/O pins, "banging" out one bit at a time.',
    example: 'He used bit-bang mode on the microcontroller to communicate with a legacy device that used a non-standard serial protocol.',
  },
  {
    id: 'bit-depth',
    term: 'Bit Depth',
    slug: 'bit-depth',
    definition: 'The number of bits used to represent the color of a single pixel in an image or the amplitude of a single sample in an audio file.',
    example: 'A 24-bit image has a higher bit depth than an 8-bit image, allowing it to display millions more colors.',
  },
  {
    id: 'bit-error',
    term: 'Bit Error',
    slug: 'bit-error',
    definition: 'A bit in a digital data stream that has been flipped from 0 to 1 or vice versa due to noise or interference.',
    example: 'Error-correcting codes can be used to detect and fix single bit errors in a transmission.',
  },
  {
    id: 'bit-mask',
    term: 'Bit Mask',
    slug: 'bit-mask',
    definition: 'Data that is used for bitwise operations, particularly in a bit field. Using a mask, multiple bits in a byte, nibble, word etc. can be set either on, off or inverted from on to off (or vice versa) in a single bitwise operation.',
    example: 'The programmer used a bit mask and a bitwise AND operation to check if the "read" permission bit was set in the file\'s mode.',
  },
  {
    id: 'bit-packing',
    term: 'Bit Packing',
    slug: 'bit-packing',
    definition: 'The process of storing multiple smaller data values into a single larger data type (like an integer) to save memory.',
    example: 'In network protocols, bit packing is used to tightly pack various flags and options into the header of a packet.',
  },
  {
    id: 'bit-rate',
    term: 'Bit Rate',
    slug: 'bit-rate',
    definition: 'The number of bits that are processed or transmitted per unit of time, often measured in bits per second (bps).',
    example: 'The MP3 was encoded at a bit rate of 128 kbps, which is a common quality for music streaming.',
  },
  {
    id: 'bit-rotation',
    term: 'Bit Rotation',
    slug: 'bit-rotation',
    definition: 'A bitwise operation that shifts all bits in a register, where the bit shifted out of one end is put back into the other end.',
    example: 'Some encryption algorithms use bit rotation as part of their scrambling process.',
  },
  {
    id: 'bit-shift',
    term: 'Bit Shift',
    slug: 'bit-shift',
    definition: 'A bitwise operation that moves the bits of a binary number to the left or right. A left shift is equivalent to multiplication by 2, and a right shift is equivalent to integer division by 2.',
    example: 'The developer used a right bit shift to quickly divide the number by 4 (by shifting it two places).',
  },
  {
    id: 'bit-sliced-architecture',
    term: 'Bit Sliced Architecture',
    slug: 'bit-sliced-architecture',
    definition: 'A CPU design approach where the processor is built from smaller modules, each handling a "slice" of the total bit-width.',
    example: 'Early supercomputers used a bit-sliced architecture to create 64-bit processors from smaller 4-bit or 8-bit components.',
  },
  {
    id: 'bit-stream',
    term: 'Bit Stream',
    slug: 'bit-stream',
    definition: 'A continuous sequence of bits, as in a serial data transmission.',
    example: 'The modem converted the analog phone signal into a digital bit stream that the computer could understand.',
  },
  {
    id: 'bit-vector',
    term: 'Bit Vector',
    slug: 'bit-vector',
    definition: 'An array data structure that compactly stores individual bits.',
    example: 'A bloom filter uses a bit vector to efficiently test whether an element is a member of a set.',
  },
  {
    id: 'bitcoin-script',
    term: 'Bitcoin Script',
    slug: 'bitcoin-script',
    definition: 'A simple, stack-based programming language used to lock and unlock transactions in the Bitcoin blockchain.',
    example: 'A standard Bitcoin transaction uses a script that essentially says, "This output can be spent by anyone who can provide a digital signature matching this public key."',
  },
  {
    id: 'bitlocker',
    term: 'BitLocker',
    slug: 'bitlocker',
    definition: 'A full-volume encryption feature included with Microsoft Windows versions starting with Windows Vista.',
    example: 'The company required all employee laptops to have BitLocker enabled to protect sensitive data in case a device was lost or stolen.',
  },
  {
    id: 'bitmap-index',
    term: 'Bitmap Index',
    slug: 'bitmap-index',
    definition: 'A special kind of database index that uses bitmaps (bit arrays) to efficiently retrieve data, especially for columns with a low number of distinct values.',
    example: 'The data warehouse used a bitmap index on the "gender" column to speed up queries that filtered by male or female.',
  },
  {
    id: 'bitmap-renderer',
    term: 'Bitmap Renderer',
    slug: 'bitmap-renderer',
    definition: 'A program or system that creates an image from a description, rendering it as a grid of pixels (a bitmap).',
    example: 'Unlike a vector renderer that uses mathematical equations, a bitmap renderer works directly with pixels to draw the final image.',
  },
  {
    id: 'bittorrent-peer',
    term: 'BitTorrent Peer',
    slug: 'bittorrent-peer',
    definition: 'A computer participating in a BitTorrent network, both downloading pieces of a file and uploading pieces it already has to other peers.',
    example: 'His download speed was fast because there were many BitTorrent peers sharing the file.',
  },
  {
    id: 'bivariate-analysis',
    term: 'Bivariate Analysis',
    slug: 'bivariate-analysis',
    definition: 'The analysis of two variables to determine the empirical relationship between them.',
    example: 'The data scientist performed a bivariate analysis to see if there was a correlation between customer age and total spending.',
  },
  {
    id: 'bjt-oscillator',
    term: 'BJT Oscillator',
    slug: 'bjt-oscillator',
    definition: 'An electronic circuit using a Bipolar Junction Transistor (BJT) to produce a periodic, oscillating electronic signal.',
    example: 'The radio transmitter used a BJT oscillator to generate the carrier wave for the signal.',
  },
  {
    id: 'black-hat',
    term: 'Black Hat',
    slug: 'black-hat',
    definition: 'A hacker who violates computer security for personal gain or malice.',
    example: 'A black hat hacker broke into the company\'s network and held their data for ransom.',
  },
  {
    id: 'blackhole-route',
    term: 'Blackhole Route',
    slug: 'blackhole-route',
    definition: 'A network route that silently discards traffic without informing the source. It is often used to mitigate DDoS attacks.',
    example: 'The network administrator created a blackhole route to drop all traffic coming from the attacking IP addresses.',
  },
  {
    id: 'blacklist-check',
    term: 'Blacklist Check',
    slug: 'blacklist-check',
    definition: 'The process of checking if an IP address or domain name appears on a list of known malicious or spam sources.',
    example: 'Our email server performs a blacklist check on every incoming message to filter out spam.',
  },
  {
    id: 'blade-chassis',
    term: 'Blade Chassis',
    slug: 'blade-chassis',
    definition: 'An enclosure that houses multiple blade servers, providing shared power, cooling, and networking.',
    example: 'The data center used a blade chassis to consolidate 16 servers into a single, high-density unit.',
  },
  {
    id: 'blameless-postmortem',
    term: 'Blameless Postmortem',
    slug: 'blameless-postmortem',
    definition: 'A process for analyzing an incident or outage that focuses on identifying systemic causes rather than assigning blame to individuals.',
    example: 'After the site went down, the engineering team held a blameless postmortem to understand the root cause and prevent it from happening again.',
  },
  {
    id: 'blazor-app',
    term: 'Blazor App',
    slug: 'blazor-app',
    definition: 'A web application built using Blazor, a free and open-source web framework that enables developers to create web apps using C# and HTML.',
    example: 'The team of .NET developers built a rich interactive web UI as a Blazor app, allowing them to reuse their existing C# skills.',
  },
  {
    id: 'block-cipher',
    term: 'Block Cipher',
    slug: 'block-cipher',
    definition: 'A symmetric key cipher that operates on fixed-length groups of bits, called blocks.',
    example: 'AES is a popular block cipher that encrypts data in 128-bit blocks.',
  },
  {
    id: 'block-device',
    term: 'Block Device',
    slug: 'block-device',
    definition: 'A type of storage device that moves data in fixed-size blocks, such as a hard drive or SSD.',
    example: 'In Linux, hard drives are represented as block devices in the `/dev` directory, like `/dev/sda`.',
  },
  {
    id: 'block-explorer',
    term: 'Block Explorer',
    slug: 'block-explorer',
    definition: 'An online tool for searching and viewing transactions, blocks, and addresses on a blockchain.',
    example: 'He used a block explorer like Etherscan to check the status of his Ethereum transaction.',
  },
  {
    id: 'block-header',
    term: 'Block Header',
    slug: 'block-header',
    definition: 'In a blockchain, the part of a block that contains metadata, such as the block number, timestamp, and the hash of the previous block.',
    example: 'Miners compete to find a valid hash for the block header to add a new block to the chain.',
  },
  {
    id: 'block-io',
    term: 'Block I/O',
    slug: 'block-io',
    definition: 'Input/output operations that deal with data in fixed-size blocks, typical for storage devices.',
    example: 'The database performance was limited by the speed of the underlying disk\'s block I/O.',
  },
  {
    id: 'block-level-storage',
    term: 'Block-level Storage',
    slug: 'block-level-storage',
    definition: 'A type of data storage, often used in SANs, where data is stored in volumes referred to as blocks. Each block can be controlled as an individual hard drive.',
    example: 'Amazon EBS provides block-level storage volumes for use with EC2 instances.',
  },
  {
    id: 'blockchain-node',
    term: 'Blockchain Node',
    slug: 'blockchain-node',
    definition: 'A computer connected to a blockchain network that validates and relays transactions and maintains a copy of the ledger.',
    example: 'To fully participate in the Bitcoin network, you need to run your own blockchain node.',
  },
  {
    id: 'blockquote-tag',
    term: 'Blockquote Tag',
    slug: 'blockquote-tag',
    definition: 'An HTML tag (`<blockquote>`) used to indicate that the enclosed text is an extended quotation.',
    example: 'The web developer used the blockquote tag to format the customer testimonial on the homepage.',
  },
  {
    id: 'bloom-filter',
    term: 'Bloom Filter',
    slug: 'bloom-filter',
    definition: 'A space-efficient probabilistic data structure that is used to test whether an element is a member of a set. False positives are possible, but false negatives are not.',
    example: 'Google Chrome uses a Bloom filter to quickly check if a URL is on a list of known malicious websites before making a network request.',
  },
  {
    id: 'bloatware',
    term: 'Bloatware',
    slug: 'bloatware',
    definition: 'Unwanted software included on a new computer or mobile device by the manufacturer.',
    example: 'The first thing he did with his new laptop was uninstall all the bloatware to free up disk space and improve performance.',
  },
  {
    id: 'blob-storage',
    term: 'Blob Storage',
    slug: 'blob-storage',
    definition: 'Binary Large Object storage, a type of data storage for unstructured data like images, videos, and documents.',
    example: 'The application uses Azure Blob Storage to store all user-uploaded profile pictures.',
  },
  {
    id: 'block-reward',
    term: 'Block Reward',
    slug: 'block-reward',
    definition: 'The reward given to a miner who has successfully hashed a transaction block. It can be a mixture of coins and transaction fees.',
    example: 'The current Bitcoin block reward is 6.25 BTC, which is given to the miner who solves the next block.',
  },
  {
    id: 'blue-team-operation',
    term: 'Blue Team Operation',
    slug: 'blue-team-operation',
    definition: 'In cybersecurity, a group of individuals who are responsible for defending an enterprise\'s information systems against attacks.',
    example: 'During the cybersecurity exercise, the blue team was tasked with detecting and responding to the red team\'s simulated attacks.',
  },
  {
    id: 'blue-green-deployment',
    term: 'Blue-Green Deployment',
    slug: 'blue-green-deployment',
    definition: 'A software release strategy that involves running two identical production environments, "Blue" and "Green." Traffic is gradually shifted from the old version (Blue) to the new one (Green).',
    example: 'The company uses a blue-green deployment strategy to release new versions of their website with zero downtime.',
  },
  {
    id: 'bluetooth-le',
    term: 'Bluetooth LE',
    slug: 'bluetooth-le',
    definition: 'Bluetooth Low Energy is a power-conserving variant of Bluetooth, intended for applications that do not require continuous data transfer, such as IoT devices and wearables.',
    example: 'Your fitness tracker uses Bluetooth LE to sync data with your phone without draining its battery.',
  },
  {
    id: 'blurring-algorithm',
    term: 'Blurring Algorithm',
    slug: 'blurring-algorithm',
    definition: 'An algorithm in image processing used to reduce detail and noise in an image, such as a Gaussian blur.',
    example: 'The photo editing software applied a blurring algorithm to the background to make the subject stand out.',
  },
  {
    id: 'bmp-file',
    term: 'BMP File',
    slug: 'bmp-file',
    definition: 'The Bitmap file format, a raster graphics image file format used to store bitmap digital images, independently of the display device.',
    example: 'He saved the screenshot as a BMP file, which resulted in a large, uncompressed image.',
  },
  {
    id: 'bms-battery-management-system',
    term: 'BMS (Battery Management System)',
    slug: 'bms-battery-management-system',
    definition: 'An electronic system that manages a rechargeable battery (cell or battery pack), such as by protecting the battery from operating outside its safe operating area, monitoring its state, calculating secondary data, reporting that data, controlling its environment, authenticating it and/or balancing it.',
    example: 'The electric car\'s BMS ensures that all the cells in the battery pack charge and discharge evenly, maximizing its lifespan.',
  },
  {
    id: 'boarding-logic-ml',
    term: 'Boarding Logic (ML)',
    slug: 'boarding-logic-ml',
    definition: 'Slang for the code and processes required to onboard a new machine learning model into a production system, including validation, deployment, and monitoring setup.',
    example: 'The MLOps team standardized the boarding logic to ensure every new model was deployed safely and consistently.',
  },
  {
    id: 'bof',
    term: 'BoF (Buffer Overflow)',
    slug: 'bof',
    definition: 'A type of security vulnerability where a program writes data beyond the boundary of a buffer, which can be exploited to execute arbitrary code.',
    example: 'The hacker exploited a buffer overflow (BoF) in the web server to gain control of the system.',
  },
  {
    id: 'boiling-plate',
    term: 'Boiling Plate (Dev slang)',
    slug: 'boiling-plate',
    definition: 'Slang for boilerplate code, which is sections of code that have to be included in many places with little or no alteration.',
    example: 'The new framework reduced the amount of boiling plate code we had to write for setting up a new web service.',
  },
  {
    id: 'boltdb',
    term: 'BoltDB',
    slug: 'boltdb',
    definition: 'A pure Go key/value store that is simple, fast, and reliable, often used as an embedded database.',
    example: 'The Prometheus time-series database uses a derivative of BoltDB for its storage engine.',
  },
  {
    id: 'boolean-algebra',
    term: 'Boolean Algebra',
    slug: 'boolean-algebra',
    definition: 'A branch of algebra in which the values of the variables are the truth values true and false, usually denoted 1 and 0 respectively. It is fundamental to digital logic and computer science.',
    example: 'The logic gates in a CPU perform operations based on the principles of Boolean algebra.',
  },
  {
    id: 'boolean-mask',
    term: 'Boolean Mask',
    slug: 'boolean-mask',
    definition: 'In data analysis, an array of boolean values used to filter another array. The mask selects only the elements where the corresponding value is true.',
    example: 'The data scientist used a boolean mask to select all rows in the dataset where the "age" column was greater than 30.',
  },
  {
    id: 'boolean-query',
    term: 'Boolean Query',
    slug: 'boolean-query',
    definition: 'A type of search query that uses Boolean operators (AND, OR, NOT) to combine or exclude keywords.',
    example: 'He searched for "developer AND (remote OR hybrid) NOT manager" to find relevant job postings.',
  },
  {
    id: 'boot-flag',
    term: 'Boot Flag',
    slug: 'boot-flag',
    definition: 'A flag set on a partition of a hard drive to indicate that it contains an operating system and can be booted from.',
    example: 'He had to set the boot flag on the primary partition after installing Linux for the system to recognize it as bootable.',
  },
  {
    id: 'boot-image',
    term: 'Boot Image',
    slug: 'boot-image',
    definition: 'A type of disk image that contains all the files needed to boot an operating system.',
    example: 'He downloaded the Ubuntu boot image to create a bootable USB drive.',
  },
  {
    id: 'boot-loader',
    term: 'Boot Loader',
    slug: 'boot-loader',
    definition: 'A program that loads the main operating system for the computer when it is turned on.',
    example: 'GRUB is a popular boot loader for Linux that allows you to choose between multiple operating systems at startup.',
  },
  {
    id: 'boot-partition',
    term: 'Boot Partition',
    slug: 'boot-partition',
    definition: 'The partition on a hard drive that contains the operating system and its boot files.',
    example: 'The boot partition was corrupted, so the computer was unable to start Windows.',
  },
  {
    id: 'boot-priority',
    term: 'Boot Priority',
    slug: 'boot-priority',
    definition: 'The order in which the BIOS/UEFI tries to boot from different devices (e.g., hard drive, USB drive, network).',
    example: 'He went into the BIOS to change the boot priority so the computer would boot from the USB drive first.',
  },
  {
    id: 'boot-sector',
    term: 'Boot Sector',
    slug: 'boot-sector',
    definition: 'The first sector of a hard disk or other storage device that contains the code for starting the boot process.',
    example: 'A boot sector virus infects the master boot record of a hard drive and is loaded into memory at startup.',
  },
  {
    id: 'bootstrap-grid',
    term: 'Bootstrap Grid',
    slug: 'bootstrap-grid',
    definition: 'A popular responsive, mobile-first grid system that is part of the Bootstrap CSS framework. It uses a series of containers, rows, and columns to lay out and align content.',
    example: 'The developer used the Bootstrap grid system to easily create a responsive layout that looked good on desktops, tablets, and phones.',
  },
  {
    id: 'border-gateway-protocol',
    term: 'Border Gateway Protocol (BGP)',
    slug: 'border-gateway-protocol',
    definition: 'The standardized exterior gateway protocol designed to exchange routing and reachability information among autonomous systems on the Internet.',
    example: 'BGP is often called the "postal service of the Internet," as it determines the best routes for data to travel from network to network.',
  },
  {
    id: 'borrow-checker',
    term: 'Borrow Checker',
    slug: 'borrow-checker',
    definition: 'A key feature of the Rust programming language that enforces memory safety rules at compile time, preventing bugs like dangling pointers and data races.',
    example: 'The code didn\'t compile because the borrow checker found a place where two parts of the program were trying to modify the same data at the same time.',
  },
  {
    id: 'bot-detection',
    term: 'Bot Detection',
    slug: 'bot-detection',
    definition: 'Techniques used to identify and block automated software (bots) from accessing a website or application.',
    example: 'The login page uses a CAPTCHA as a form of bot detection to prevent automated credential stuffing attacks.',
  },
  {
    id: 'botnet',
    term: 'Botnet',
    slug: 'botnet',
    definition: 'A network of private computers infected with malicious software and controlled as a group without the owners\' knowledge, e.g., to send spam or launch DDoS attacks.',
    example: 'The massive DDoS attack was launched by a botnet consisting of thousands of compromised IoT devices.',
  },
  {
    id: 'bottleneck-analysis',
    term: 'Bottleneck Analysis',
    slug: 'bottleneck-analysis',
    definition: 'The process of identifying the part of a system that is limiting its overall performance.',
    example: 'Through bottleneck analysis, the developers found that the slow database queries were the main factor limiting the application\'s performance.',
  },
  {
    id: 'bpf-trace',
    term: 'BPF Trace',
    slug: 'bpf-trace',
    definition: 'Using Berkeley Packet Filter (BPF) to trace and observe events within the Linux kernel for performance analysis and debugging.',
    example: 'The system administrator used a BPF trace tool to see exactly which processes were accessing a specific file.',
  },
  {
    id: 'bpf-probe',
    term: 'BPF Probe',
    slug: 'bpf-probe',
    definition: 'A specific point in the kernel or user-space code where a BPF program is attached to collect data when that point is executed.',
    example: 'He attached a BPF probe to the `open` system call to monitor all file open events on the system.',
  },
  {
    id: 'bpsk-modulation',
    term: 'BPSK Modulation',
    slug: 'bpsk-modulation',
    definition: 'Binary Phase Shift Keying, a simple form of digital modulation where the phase of a carrier wave is shifted to transmit binary data (0s and 1s).',
    example: 'Early satellite communication systems used BPSK modulation because of its simplicity and robustness.',
  },
  {
    id: 'bracket-notation',
    term: 'Bracket Notation',
    slug: 'bracket-notation',
    definition: 'A syntax in programming for accessing the properties of an object or elements of an array using square brackets `[]`.',
    example: 'In JavaScript, you can access an object property using dot notation (`obj.prop`) or bracket notation (`obj[\'prop\']`).',
  },
  {
    id: 'branch-predictor',
    term: 'Branch Predictor',
    slug: 'branch-predictor',
    definition: 'A digital circuit in a modern microprocessor that tries to guess which way a branch (an if-then-else structure) will go before this is known for sure.',
    example: 'The processor\'s advanced branch predictor correctly guessed the outcome of the loop condition 99% of the time, significantly improving performance.',
  },
  {
    id: 'branch-protection',
    term: 'Branch Protection',
    slug: 'branch-protection',
    definition: 'A feature in version control systems (like GitHub) that prevents direct pushes to important branches (like `main`) and requires changes to go through a pull request and review process.',
    example: 'The team enabled branch protection on the main branch to ensure that all code is peer-reviewed before being merged.',
  },
  {
    id: 'branchless-algorithm',
    term: 'Branchless Algorithm',
    slug: 'branchless-algorithm',
    definition: 'An algorithm that avoids conditional branches (if-then statements) to prevent pipeline stalls caused by branch misprediction, often using bitwise operations or other tricks.',
    example: 'For performance-critical code, the developer rewrote the function as a branchless algorithm.',
  },
  {
    id: 'breadcrumb-navigation',
    term: 'Breadcrumb Navigation',
    slug: 'breadcrumb-navigation',
    definition: 'A secondary navigation scheme that reveals the user\'s location in a website or web application.',
    example: 'The breadcrumb navigation at the top of the page showed "Home > Products > Laptops", helping the user understand where they were.',
  },
  {
    id: 'bridge-network',
    term: 'Bridge Network',
    slug: 'bridge-network',
    definition: 'In computer networking, a device that connects two or more network segments, forwarding traffic between them. In Docker, it\'s the default network that allows containers to communicate with each other.',
    example: 'By default, Docker containers on the same host are connected to a bridge network and can communicate with each other by IP address.',
  },
  {
    id: 'brightness-filter',
    term: 'Brightness Filter',
    slug: 'brightness-filter',
    definition: 'An image processing filter that adjusts the overall lightness or darkness of an image.',
    example: 'He applied a brightness filter to the dark photo to make the details more visible.',
  },
  {
    id: 'broadcast-address',
    term: 'Broadcast Address',
    slug: 'broadcast-address',
    definition: 'An IP address in a network that allows information to be sent to all devices on that network simultaneously.',
    example: 'DHCP uses the broadcast address to send a discovery message to find a DHCP server on the local network.',
  },
  {
    id: 'broadcast-domain',
    term: 'Broadcast Domain',
    slug: 'broadcast-domain',
    definition: 'A logical division of a computer network in which all nodes can reach each other by broadcast at the data link layer.',
    example: 'A router is used to connect different broadcast domains, while a switch operates within a single broadcast domain.',
  },
  {
    id: 'broken-access-control',
    term: 'Broken Access Control',
    slug: 'broken-access-control',
    definition: 'A security vulnerability where restrictions on what authenticated users are allowed to do are not properly enforced.',
    example: 'The site had broken access control; a regular user could access the admin panel by simply changing the URL.',
  },
  {
    id: 'broken-authentication',
    term: 'Broken Authentication',
    slug: 'broken-authentication',
    definition: 'A security vulnerability related to incorrect implementation of authentication and session management, allowing attackers to compromise passwords, keys, or session tokens.',
    example: 'A common broken authentication flaw is allowing weak passwords or not invalidating session tokens after logout.'
  },
  {
    id: 'broker-node',
    term: 'Broker Node',
    slug: 'broker-node',
    definition: 'A server in a message broker system (like Kafka or RabbitMQ) that is responsible for receiving messages from producers and delivering them to consumers.',
    example: 'The Kafka cluster consisted of three broker nodes to ensure high availability and fault tolerance.'
  },
  {
    id: 'brotli-compression',
    term: 'Brotli Compression',
    slug: 'brotli-compression',
    definition: 'A lossless data compression algorithm developed by Google, often used to compress web assets for faster delivery.',
    example: 'The web server was configured to use Brotli compression for text files, which resulted in smaller file sizes than Gzip.'
  },
  {
    id: 'browser-engine',
    term: 'Browser Engine',
    slug: 'browser-engine',
    definition: 'The core software component of a web browser that is responsible for rendering web pages. Examples include Blink (Chrome), Gecko (Firefox), and WebKit (Safari).',
    example: 'The browser engine parses the HTML and CSS to construct the DOM tree and render the final page on the screen.'
  },
  {
    id: 'browser-storage-api',
    term: 'Browser Storage API',
    slug: 'browser-storage-api',
    definition: 'A set of APIs provided by web browsers for storing data on the client-side, such as LocalStorage, SessionStorage, and IndexedDB.',
    example: 'The web application used the LocalStorage API to save the user\'s preferences so they would be remembered on their next visit.'
  },
  {
    id: 'bsod',
    term: 'BSOD (Blue Screen of Death)',
    slug: 'bsod',
    definition: 'An error screen displayed on a Windows computer system following a fatal system error.',
    example: 'His computer crashed and showed a BSOD after he installed a faulty driver.'
  },
  {
    id: 'bssid',
    term: 'BSSID (Basic Service Set Identifier)',
    slug: 'bssid',
    definition: 'The MAC address of a wireless access point (AP). It uniquely identifies the AP in a wireless network.',
    example: 'While each Wi-Fi network has a name (SSID), each access point for that network has a unique BSSID.'
  },
  {
    id: 'bss-transition',
    term: 'BSS Transition',
    slug: 'bss-transition',
    definition: 'A feature in Wi-Fi (802.11v) that allows an access point to suggest that a client device roam to another access point that can provide a better connection.',
    example: 'With BSS Transition enabled, his phone seamlessly roamed to a stronger access point as he walked through the office.'
  },
  {
    id: 'build-cache',
    term: 'Build Cache',
    slug: 'build-cache',
    definition: 'A mechanism in a build system that stores the outputs of previous builds to avoid re-running tasks that have not changed, speeding up the build process.',
    example: 'The developer enabled the build cache in Gradle, which significantly reduced the time it took to compile the Android app.'
  },
  {
    id: 'build-chain',
    term: 'Build Chain',
    slug: 'build-chain',
    definition: 'The sequence of tools and steps used to compile source code into a final binary artifact.',
    example: 'Our C++ build chain consists of a preprocessor, compiler, assembler, and linker.'
  },
  {
    id: 'build-failure',
    term: 'Build Failure',
    slug: 'build-failure',
    definition: 'An error that occurs during the build process that prevents it from completing successfully.',
    example: 'The CI/CD pipeline reported a build failure due to a syntax error in the code.'
  },
  {
    id: 'build-number',
    term: 'Build Number',
    slug: 'build-number',
    definition: 'A unique number assigned to each build of a software application, often incremented automatically by the build server.',
    example: 'The QA team reported a bug in build number 1.2.3.456.'
  },
  {
    id: 'build-optimization',
    term: 'Build Optimization',
    slug: 'build-optimization',
    definition: 'Techniques used to make the build process faster or the resulting binary smaller and more performant.',
    example: 'The build optimization settings in the compiler were set to maximize performance for the release version.'
  },
  {
    id: 'build-script',
    term: 'Build Script',
    slug: 'build-script',
    definition: 'A script that automates the process of building a software application.',
    example: 'He wrote a build script using Gradle to automate the compilation and packaging of the Java application.'
  },
  {
    id: 'build-server',
    term: 'Build Server',
    slug: 'build-server',
    definition: 'A dedicated server that is used to automatically build and test software projects, often as part of a continuous integration system.',
    example: 'The company uses Jenkins as their build server to automate their CI/CD pipelines.'
  },
  {
    id: 'bulk-endpoint',
    term: 'Bulk Endpoint',
    slug: 'bulk-endpoint',
    definition: 'An API endpoint designed to accept and process a large number of data records in a single request.',
    example: 'Instead of making 1000 separate API calls, the developer used the bulk endpoint to upload all the new user records at once.'
  },
  {
    id: 'bulldozer-architecture',
    term: 'Bulldozer Architecture',
    slug: 'bulldozer-architecture',
    definition: 'A CPU microarchitecture developed by AMD, used in their FX-series processors, known for its use of multi-core modules.',
    example: 'The AMD FX-8350 was a popular processor based on the Bulldozer architecture.'
  },
  {
    id: 'bullet-physics-engine',
    term: 'Bullet Physics Engine',
    slug: 'bullet-physics-engine',
    definition: 'A professional open-source physics engine that simulates collision detection, soft and rigid body dynamics.',
    example: 'The 3D game used the Bullet Physics Engine to create realistic collisions and object interactions.'
  },
  {
    id: 'bundle-identifier',
    term: 'Bundle Identifier',
    slug: 'bundle-identifier',
    definition: 'A unique string that identifies an application to the operating system, used in macOS and iOS. It is typically in reverse DNS format (e.g., com.example.app).',
    example: 'When submitting his app to the App Store, he had to provide a unique bundle identifier.'
  },
  {
    id: 'bundle-loader',
    term: 'Bundle Loader',
    slug: 'bundle-loader',
    definition: 'A part of a module bundler (like Webpack or Parcel) that is responsible for loading and parsing different types of files (like CSS or images) and transforming them into JavaScript modules.',
    example: 'He configured a bundle loader in Webpack to handle SCSS files, converting them into plain CSS that the browser can understand.'
  },
  {
    id: 'bus-contention',
    term: 'Bus Contention',
    slug: 'bus-contention',
    definition: 'A situation in a computer system where multiple devices try to use the same data bus at the same time, which can lead to conflicts and errors.',
    example: 'The system crashed due to bus contention, as two peripherals tried to write to the memory bus simultaneously.'
  },
  {
    id: 'bus-cycle',
    term: 'Bus Cycle',
    slug: 'bus-cycle',
    definition: 'The time required to complete a single data transfer on a computer bus.',
    example: 'The CPU had to wait for several bus cycles to read the data from the slow peripheral.'
  },
  {
    id: 'busy-loop',
    term: 'Busy Loop',
    slug: 'busy-loop',
    definition: 'A loop that does nothing but check a condition, consuming CPU time without performing any useful work. Also known as busy-waiting or spinning.',
    example: 'The old code used a busy loop to wait for user input, which was very inefficient and caused high CPU usage.'
  },
  {
    id: 'byte-address',
    term: 'Byte Address',
    slug: 'byte-address',
    definition: 'A unique numerical address that corresponds to a single byte of storage in a computer\'s memory.',
    example: 'The pointer variable stored the byte address of the beginning of the string.'
  },
  {
    id: 'byte-buffer',
    term: 'Byte Buffer',
    slug: 'byte-buffer',
    definition: 'A data structure in programming that represents a fixed-size sequence of bytes, often used for I/O operations.',
    example: 'In Java, a `ByteBuffer` can be used to efficiently read binary data from a file or network socket.'
  },
  {
    id: 'byte-channel',
    term: 'Byte Channel',
    slug: 'byte-channel',
    definition: 'In Java NIO, an interface that represents a channel for reading and writing bytes.',
    example: 'A `FileChannel` is a type of byte channel that can be used for reading and writing to a file.'
  },
  {
    id: 'byte-code',
    term: 'Byte Code',
    slug: 'byte-code',
    definition: 'A form of instruction set designed for efficient execution by a software interpreter or virtual machine.',
    example: 'When you compile a Java program, it is converted into bytecode, which is then executed by the Java Virtual Machine (JVM).'
  },
  {
    id: 'byte-offset',
    term: 'Byte Offset',
    slug: 'byte-offset',
    definition: 'The position of a byte within a larger block of data, such as a file or a memory buffer, relative to the beginning.',
    example: 'To read the third integer from the file, he had to seek to a byte offset of 8 (2 integers * 4 bytes/integer).'
  },
  {
    id: 'byte-order-mark',
    term: 'Byte Order Mark (BOM)',
    slug: 'byte-order-mark',
    definition: 'A special Unicode character at the beginning of a text file that indicates the byte order (endianness) and encoding of the file.',
    example: 'The text editor was having trouble opening the file because it didn\'t correctly handle the UTF-8 Byte Order Mark.'
  },
  {
    id: 'byte-level-encryption',
    term: 'Byte-level Encryption',
    slug: 'byte-level-encryption',
    definition: 'Encryption that is performed on individual bytes or small blocks of bytes, as opposed to file-level or disk-level encryption.',
    example: 'Some streaming protocols use byte-level encryption to secure the data as it is being transmitted.'
  },
  {
    id: 'bypass-capacitor',
    term: 'Bypass Capacitor',
    slug: 'bypass-capacitor',
    definition: 'A capacitor used in an electronic circuit to filter out noise and provide a stable power supply to an integrated circuit.',
    example: 'The circuit board had a small bypass capacitor placed next to each IC to ensure clean power.'
  },
  {
    id: 'bypass-mode',
    term: 'Bypass Mode',
    slug: 'bypass-mode',
    definition: 'A mode of operation for a network security device (like a firewall or IPS) where traffic is allowed to pass through without inspection, often used during maintenance or troubleshooting.',
    example: 'The network administrator put the firewall into bypass mode to test if it was the source of the connectivity issue.'
  },
  {
    id: 'byod-policy',
    term: 'BYOD Policy',
    slug: 'byod-policy',
    definition: 'Bring Your Own Device, a policy that allows employees to use their personal devices for work and defines the security requirements for doing so.',
    example: 'The company\'s BYOD policy required employees to install mobile device management software on their personal phones.'
  },
  {
    id: 'byzantine-fault',
    term: 'Byzantine Fault',
    slug: 'byzantine-fault',
    definition: 'In distributed systems, a type of fault where a component can behave erratically, sending conflicting information to different parts of the system. Tolerating these is a key challenge.',
    example: 'Blockchain consensus algorithms like Proof-of-Work are designed to be Byzantine Fault Tolerant.'
  },
  {
    id: 'bzip2-compression',
    term: 'BZip2 Compression',
    slug: 'bzip2-compression',
    definition: 'A free and open-source lossless data compression algorithm that often provides better compression ratios than Gzip, but is slower.',
    example: 'He used bzip2 compression to archive the large log files, as storage space was more of a concern than compression speed.'
  },
  {
    id: 'bzrfs',
    term: 'BZRFS',
    slug: 'bzrfs',
    definition: 'A non-standard term, likely a typo or blend of BZR (Bazaar version control) and a file system like ZFS. Not a recognized IT term.',
    example: 'The user mentioned BZRFS, but they likely meant to refer to either the Bazaar version control system or the ZFS file system.'
  },
  {
    id: 'b-tree-index',
    term: 'B-tree Index',
    slug: 'b-tree-index',
    definition: 'A self-balancing tree data structure that maintains sorted data and allows for efficient searches, sequential access, insertions, and deletions. It is the default index type for most relational databases.',
    example: 'The database uses a B-tree index on the primary key column to quickly locate specific rows.'
  },
  {
    id: 'b-tree-node',
    term: 'B-tree Node',
    slug: 'b-tree-node',
    definition: 'A single node within a B-tree data structure, which can contain multiple keys and pointers to child nodes.',
    example: 'When a new key was inserted, the B-tree node was split into two to maintain the balance of the tree.'
  },
  {
    id: 'bump-allocator',
    term: 'Bump Allocator',
    slug: 'bump-allocator',
    definition: 'A very fast but limited memory allocator that works by simply incrementing a pointer (bumping it) into a region of memory. It cannot deallocate individual objects.',
    example: 'For the temporary data needed during a single frame of the game, the developer used a bump allocator for maximum speed.'
  },
  {
    id: 'bus-arbitration',
    term: 'Bus Arbitration',
    slug: 'bus-arbitration',
    definition: 'The process of deciding which device on a computer bus gets to use the bus at any given time, preventing conflicts.',
    example: 'The PCI bus controller handles bus arbitration to ensure that only one device is transmitting data at a time.'
  },
  {
    id: 'bus-snooping',
    term: 'Bus Snooping',
    slug: 'bus-snooping',
    definition: 'A technique used in multiprocessor systems where each cache controller monitors the memory bus to see if it has a copy of a data block that has been modified by another processor, ensuring cache coherency.',
    example: 'The multi-core CPU relies on bus snooping to keep all the individual core caches consistent with each other.'
  },
  {
    id: 'busybox',
    term: 'BusyBox',
    slug: 'busybox',
    definition: 'A software suite that provides several stripped-down Unix tools in a single executable file. It is often used in embedded systems and Linux distributions with limited resources.',
    example: 'The Alpine Linux container image is very small because it uses BusyBox for most of its core utilities.'
  },
  {
    id: 'bitwise-and',
    term: 'Bitwise AND',
    slug: 'bitwise-and',
    definition: 'A bitwise operation that takes two equal-length binary representations and performs the logical AND operation on each pair of corresponding bits.',
    example: 'He used a bitwise AND with a bitmask to check if a specific permission flag was set.'
  },
  {
    id: 'bitwise-or',
    term: 'Bitwise OR',
    slug: 'bitwise-or',
    definition: 'A bitwise operation that takes two bit patterns of equal length and performs the logical inclusive OR operation on each pair of corresponding bits.',
    example: 'To set a permission flag, he used a bitwise OR with the corresponding bitmask.'
  },
  {
    id: 'bitwise-xor',
    term: 'Bitwise XOR',
    slug: 'bitwise-xor',
    definition: 'A bitwise operation that takes two bit patterns of equal length and performs the logical exclusive OR operation on each pair of corresponding bits. The result is 1 if the bits are different, and 0 if they are the same.',
    example: 'A simple encryption algorithm can be created using bitwise XOR, as applying it twice with the same key returns the original value.'
  },
  {
    id: 'bitwise-not',
    term: 'Bitwise NOT',
    slug: 'bitwise-not',
    definition: 'A unary bitwise operation that inverts all the bits of its operand.',
    example: 'To flip all the bits in a byte, you can use the bitwise NOT operator.'
  },
  {
    id: 'bitwise-shifting',
    term: 'Bitwise Shifting',
    slug: 'bitwise-shifting',
    definition: 'An operation that moves the bits of a binary number to the left or right. A left shift is a fast way to multiply by powers of 2, and a right shift is a fast way to divide.',
    example: 'The developer used bitwise shifting to quickly multiply a number by 8 (by shifting it left three times).'
  },
  {
    id: 'ai-alignment',
    term: 'AI Alignment',
    slug: 'ai-alignment',
    definition: 'The field of research focused on ensuring that artificial intelligence systems are designed to pursue goals and behave in ways that are aligned with human values and intentions.',
    example: 'The goal of AI alignment is to prevent advanced AI from having unintended and harmful consequences.'
  },
  {
    id: 'api-chaining',
    term: 'API Chaining',
    slug: 'api-chaining',
    definition: 'A process where the output of one API call is used as the input for another API call, creating a sequence or "chain" of requests to accomplish a more complex task.',
    example: 'The script used API chaining: first, it called the authentication API to get a token, then it used that token to call the user data API.'
  },
  {
    id: 'asynchronous-sockets',
    term: 'Asynchronous Sockets',
    slug: 'asynchronous-sockets',
    definition: 'A programming model for network sockets that allows an application to initiate an operation (like sending or receiving data) and continue processing other tasks without waiting for the operation to complete.',
    example: 'A high-performance web server uses asynchronous sockets to handle thousands of concurrent connections with a small number of threads.'
  },
  {
    id: 'automated-patch-deployment',
    term: 'Automated Patch Deployment',
    slug: 'automated-patch-deployment',
    definition: 'The process of automatically distributing and applying software patches to systems on a network, often using a centralized management tool.',
    example: 'The company uses an automated patch deployment system to ensure all servers receive critical security updates as soon as they are released.'
  },
  {
    id: 'automated-rollback',
    term: 'Automated Rollback',
    slug: 'automated-rollback',
    definition: 'A feature in a deployment system that automatically reverts to a previous stable version of an application if the new version fails health checks or has a high error rate.',
    example: 'The CI/CD pipeline is configured with automated rollback, so a bad deployment is quickly and safely undone.'
  },
  {
    id: 'automated-provisioning',
    term: 'Automated Provisioning',
    slug: 'automated-provisioning',
    definition: 'The use of scripts and tools (like Terraform or Ansible) to automatically create and configure new infrastructure, such as virtual machines or cloud services.',
    example: 'With automated provisioning, a developer can spin up a complete testing environment with a single command.'
  },
  {
    id: 'avx-instructions',
    term: 'AVX Instructions',
    slug: 'avx-instructions',
    definition: 'Advanced Vector Extensions, a set of instructions for x86 CPUs that allow for Single Instruction, Multiple Data (SIMD) operations, significantly speeding up tasks like video encoding and scientific computing.',
    example: 'The video editing software was optimized to use AVX instructions, which dramatically reduced rendering times.'
  },
  {
    id: 'avif-format',
    term: 'AVIF Format',
    slug: 'avif-format',
    definition: 'AV1 Image File Format, a modern and highly efficient image file format that provides better compression than JPEG and WebP.',
    example: 'The website started serving images in AVIF format to reduce page load times, with a fallback to JPEG for older browsers.'
  },
  {
    id: 'average-latency',
    term: 'Average Latency',
    slug: 'average-latency',
    definition: 'The average time it takes for a system to respond to a request. It is a common metric for measuring performance.',
    example: 'The team\'s goal was to get the average latency of the API below 100 milliseconds.'
  },
  {
    id: 'availability-heuristic-sys',
    term: 'Availability Heuristic (Sys)',
    slug: 'availability-heuristic-sys',
    definition: 'In system design and troubleshooting, the mental shortcut of relying on examples that immediately come to mind. This can lead to misdiagnosing a problem based on a recent, memorable outage rather than a systematic investigation.',
    example: 'The engineer fell for the availability heuristic, blaming the recent database upgrade for the outage when the real cause was a network issue.'
  },
  {
    id: 'attack-vector',
    term: 'Attack Vector',
    slug: 'attack-vector',
    definition: 'A path or means by which a hacker can gain access to a computer or network server in order to deliver a payload or malicious outcome.',
    example: 'Phishing emails are a common attack vector for delivering ransomware.'
  },
  {
    id: 'audio-latency',
    term: 'Audio Latency',
    slug: 'audio-latency',
    definition: 'The delay between when an audio signal enters a system and when it emerges. Low audio latency is critical for professional audio recording and real-time communication.',
    example: 'The musician used a dedicated audio interface with ASIO drivers to achieve very low audio latency, allowing him to record his guitar without any noticeable delay.'
  },
  {
    id: 'auto-failover',
    term: 'Auto-Failover',
    slug: 'auto-failover',
    definition: 'A high-availability feature where a system automatically switches to a redundant or standby server or network upon the failure of the primary system.',
    example: 'The database was configured with auto-failover, so if the primary server went down, the replica would automatically be promoted to primary.'
  },
  {
    id: 'auto-scaling-threshold',
    term: 'Auto-Scaling Threshold',
    slug: 'auto-scaling-threshold',
    definition: 'The specific metric and value (e.g., CPU utilization > 70%) that triggers an auto-scaling event, either scaling out (adding instances) or scaling in (removing instances).',
    example: 'They set the auto-scaling threshold to 80% CPU usage to ensure they always have enough capacity to handle traffic spikes.'
  },
  {
    id: 'azure-dns',
    term: 'Azure DNS',
    slug: 'azure-dns',
    definition: 'A hosting service for DNS domains that provides name resolution by using Microsoft Azure infrastructure.',
    example: 'The company migrated its domain\'s name servers to Azure DNS to manage all its cloud resources in one place.'
  },
  {
    id: 'azure-kubernetes-service',
    term: 'Azure Kubernetes Service (AKS)',
    slug: 'azure-kubernetes-service',
    definition: 'A managed container orchestration service from Microsoft Azure, based on the open-source Kubernetes system.',
    example: 'They deployed their microservices application to Azure Kubernetes Service to simplify management and scaling.'
  },
  {
    id: 'azure-storage-queue',
    term: 'Azure Storage Queue',
    slug: 'azure-storage-queue',
    definition: 'A service from Microsoft Azure for storing large numbers of messages that can be accessed from anywhere in the world via authenticated calls using HTTP or HTTPS.',
    example: 'The web application used an Azure Storage Queue to process image uploads asynchronously in the background.'
  },
  {
    id: 'azure-table-storage',
    term: 'Azure Table Storage',
    slug: 'azure-table-storage',
    definition: 'A NoSQL key-attribute store from Microsoft Azure for storing large amounts of structured, non-relational data.',
    example: 'The IoT application stored all its sensor data in Azure Table Storage because of its high scalability and low cost.'
  },
  {
    id: 'azure-traffic-manager',
    term: 'Azure Traffic Manager',
    slug: 'azure-traffic-manager',
    definition: 'A DNS-based traffic load balancer from Microsoft Azure that enables you to distribute traffic optimally to services across global Azure regions.',
    example: 'They used Azure Traffic Manager to route users to the closest application endpoint, reducing latency and improving performance.'
  },
  {
    id: 'azure-virtual-network',
    term: 'Azure Virtual Network (VNet)',
    slug: 'azure-virtual-network',
    definition: 'The fundamental building block for your private network in Microsoft Azure. A VNet enables many types of Azure resources to securely communicate with each other, the internet, and on-premises networks.',
    example: 'The company created an Azure Virtual Network to isolate their backend servers and databases from the public internet.'
  },
  {
    id: 'ai-quantization',
    term: 'AI Quantization',
    slug: 'ai-quantization',
    definition: 'A technique to reduce the precision of the numbers used in an AI model (e.g., from 32-bit floats to 8-bit integers) to make the model smaller and faster, with minimal loss of accuracy.',
    example: 'Through AI quantization, they were able to run the complex language model on a mobile device.'
  },
  {
    id: 'ai-tokenization',
    term: 'AI Tokenization',
    slug: 'ai-tokenization',
    definition: 'In natural language processing, the process of breaking down a piece of text into smaller units called tokens, which can be words, subwords, or characters.',
    example: 'The first step in training a language model is AI tokenization, which converts the raw text into a sequence of numbers the model can understand.'
  },
  {
    id: 'ai-llm-pipeline',
    term: 'AI LLM Pipeline',
    slug: 'ai-llm-pipeline',
    definition: 'The end-to-end workflow for building and deploying a large language model (LLM), including data collection, preprocessing, training, fine-tuning, and inference.',
    example: 'The company built an AI LLM pipeline to continuously improve their customer service chatbot with new conversation data.'
  },
  {
    id: 'adaptive-routing',
    term: 'Adaptive Routing',
    slug: 'adaptive-routing',
    definition: 'A routing algorithm that changes its routing decisions based on the current state of the network, such as traffic and topology changes.',
    example: 'The mesh network uses adaptive routing to find the best path for data, even if some nodes go down.'
  },
  {
    id: 'agent-based-modeling',
    term: 'Agent-Based Modeling',
    slug: 'agent-based-modeling',
    definition: 'A type of computational modeling that simulates the actions and interactions of autonomous agents (both individual or collective entities such as organizations or groups) with a view to assessing their effects on the system as a whole.',
    example: 'Economists use agent-based modeling to simulate how individual consumer behaviors can lead to large-scale market trends.'
  },
  {
    id: 'application-profiler',
    term: 'Application Profiler',
    slug: 'application-profiler',
    definition: 'A software tool that analyzes a program\'s performance to identify bottlenecks and optimize its resource usage (CPU, memory, etc.).',
    example: 'The developer used an application profiler to find out which function was consuming the most CPU time.'
  },
  {
    id: 'array-slicing',
    term: 'Array Slicing',
    slug: 'array-slicing',
    definition: 'An operation in programming that extracts a portion of an array, creating a new array or a view into the original one.',
    example: 'In Python, he used array slicing `my_list[2:5]` to get a new list containing the 3rd, 4th, and 5th elements.'
  },
  {
    id: 'aspect-ratio',
    term: 'Aspect Ratio',
    slug: 'aspect-ratio',
    definition: 'The proportional relationship between the width and height of an image or screen.',
    example: 'Modern widescreen TVs have an aspect ratio of 16:9, while older TVs had a 4:3 aspect ratio.'
  },
  {
    id: 'asset-hashing',
    term: 'Asset Hashing',
    slug: 'asset-hashing',
    definition: 'A technique used in web development where a unique hash is added to the filename of a static asset (like a CSS or JS file). This allows for aggressive caching, as the filename changes whenever the content does.',
    example: 'The build process uses asset hashing, so `styles.css` becomes `styles.a1b2c3d4.css`, which allows the user\'s browser to cache it forever.'
  },
  {
    id: 'auto-typer',
    term: 'Auto Typer (Dev tool)',
    slug: 'auto-typer',
    definition: 'A software tool or script that automates typing, often used for repetitive data entry, testing forms, or in some cases, cheating in games.',
    example: 'The QA tester used an auto-typer to quickly fill out the long registration form with test data.'
  },
  {
    id: 'auto-versioning',
    term: 'Auto Versioning',
    slug: 'auto-versioning',
    definition: 'The process of automatically incrementing the version number of a software application with each new build or release, often based on a set of rules (like Semantic Versioning).',
    example: 'The CI/CD pipeline is configured for auto-versioning, so every new feature release automatically gets a new minor version number.'
  },
  {
    id: 'automated-testing',
    term: 'Automated Testing',
    slug: 'automated-testing',
    definition: 'The use of special software to control the execution of tests and the comparison of actual outcomes with predicted outcomes.',
    example: 'The team wrote a suite of automated tests that run every time new code is pushed, ensuring that no regressions are introduced.'
  },
  {
    id: 'automatic-gain-control',
    term: 'Automatic Gain Control (AGC)',
    slug: 'automatic-gain-control',
    definition: 'A closed-loop feedback regulating circuit in an amplifier or chain of amplifiers, the purpose of which is to maintain a suitable signal amplitude at its output, despite variation of the signal amplitude at the input.',
    example: 'Your phone uses automatic gain control to keep the volume of a call consistent, even if the other person is speaking softly or loudly.'
  },
  {
    id: 'autonomous-server',
    term: 'Autonomous Server',
    slug: 'autonomous-server',
    definition: 'A server that can manage and heal itself without human intervention, often using AI and automation.',
    example: 'The database was running on an autonomous server that could automatically apply patches, tune its own performance, and recover from failures.'
  },
  {
    id: 'auto-formatter',
    term: 'Auto-formatter',
    slug: 'auto-formatter',
    definition: 'A development tool that automatically formats source code to conform to a specific style guide, improving readability and consistency.',
    example: 'The team uses an auto-formatter like Prettier, so they never have to argue about code style.'
  },
  {
    id: 'algorithm',
    term: 'Algorithm',
    slug: 'algorithm',
    definition: 'A process or set of rules to be followed in calculations or other problem-solving operations, especially by a computer.',
    example: 'Google\'s search algorithm is a complex system used to retrieve data from its search index and instantly deliver the best possible results for a query.',
  },
  {
    id: 'api',
    term: 'API',
    slug: 'api',
    definition: 'An Application Programming Interface (API) is a set of rules and protocols that allows different software applications to communicate with each other. It defines the methods and data formats that applications can use to request and exchange information.',
    example: 'When you use an app like Uber, it uses Google Maps\' API to show you the map and calculate routes, rather than building its own mapping service from scratch.',
  },
  {
    id: 'agile',
    term: 'Agile',
    slug: 'agile',
    definition: 'A project management methodology that uses an incremental, iterative approach. Instead of a big-bang launch, teams deliver work in small, but consumable, increments. The goal is to provide value to customers faster and with fewer headaches.',
    example: 'A software team uses the Agile method, working in two-week "sprints" to release new features incrementally, gathering feedback after each release to guide the next phase of development.',
  },
  {
    id: 'ajax',
    term: 'AJAX',
    slug: 'ajax',
    definition: 'Asynchronous JavaScript and XML. A technique for creating fast and dynamic web pages. It allows web pages to be updated asynchronously by exchanging small amounts of data with the server behind the scenes.',
    example: 'When you like a post on social media and the like count updates without reloading the page, that is likely using AJAX.',
  },
  {
    id: 'ansible',
    term: 'Ansible',
    slug: 'ansible',
    definition: 'An automation tool for configuration management, provisioning, and application deployment using YAML.',
    example: 'A DevOps engineer wrote an Ansible playbook to automatically configure and deploy a web server on 100 different machines.',
  },
  {
    id: 'api-gateway',
    term: 'API Gateway',
    slug: 'api-gateway',
    definition: 'A middleware layer that routes API requests, handles rate limiting, authentication, caching, etc.',
    example: 'The company uses an API gateway to manage all incoming requests, ensuring only authenticated users can access their microservices.',
  },
  {
    id: 'authentication',
    term: 'Authentication',
    slug: 'authentication',
    definition: 'The process of verifying the identity of a user or process. It confirms that you are who you say you are.',
    example: 'Entering your username and password on a website is the most common form of authentication.',
  },
  {
    id: 'authorization',
    term: 'Authorization',
    slug: 'authorization',
    definition: 'The process of giving an individual or service permission to do something or have access to specific resources. It happens after authentication.',
    example: 'After you log in (authentication), the system checks your role (authorization) to see if you have permission to view the admin dashboard.',
  },
  {
    id: 'backdoor',
    term: 'Backdoor',
    slug: 'backdoor',
    definition: 'A covert method of bypassing normal authentication or encryption in a computer, product, embedded device, or its embodiment.',
    example: 'A malicious actor installed a backdoor on the server, allowing them to access it later without needing credentials.',
  },
  {
    id: 'backend',
    term: 'Backend',
    slug: 'backend',
    definition: 'The backend of a website or software application is the part that the user doesn\'t see. It includes the server, database, and application logic. It\'s responsible for storing and organizing data and ensuring everything on the client-side works.',
    example: 'When you sign up for a new account, the backend is what processes your information, creates your user profile, and stores it securely in a database.'
  },
  {
    id: 'bandwidth',
    term: 'Bandwidth',
    slug: 'bandwidth',
    definition: 'The maximum rate of data transfer across a given path. It is often mistaken for internet speed, but it\'s actually the volume of information that can be sent over a connection in a measured amount of time.',
    example: 'Streaming a 4K movie requires more bandwidth than browsing a simple text-based website.',
  },
  {
    id: 'baseband',
    term: 'Baseband',
    slug: 'baseband',
    definition: 'In telecommunications, baseband refers to the original frequency range of a transmission signal before it is modulated. It can also refer to the processor in a phone that manages all radio communications.',
    example: 'A smartphone\'s baseband processor is responsible for handling connections to cellular networks.',
  },
  {
    id: 'baseline',
    term: 'Baseline',
    slug: 'baseline',
    definition: 'A standardized point of reference. In performance testing, it is a set of measurements used as a basis for comparison.',
    example: 'The team established a performance baseline for the application before making any changes, so they could measure the impact of their optimizations.',
  },
  {
    id: 'batchfile',
    term: 'Batch File',
    slug: 'batchfile',
    definition: 'A script file in DOS, OS/2, and Microsoft Windows. It consists of a series of commands to be executed by the command-line interpreter.',
    example: 'He wrote a batch file to automate the process of copying files and renaming them on his Windows PC.',
  },
  {
    id: 'bash',
    term: 'Bash',
    slug: 'bash',
    definition: 'A command-line interpreter and scripting language for Unix-like operating systems. It is the default shell for many Linux distributions and for macOS.',
    example: 'The developer wrote a Bash script to automate the process of backing up files every night.',
  },
  {
    id: 'baudrate',
    term: 'Baud Rate',
    slug: 'baudrate',
    definition: 'The rate at which information is transferred in a communication channel. In the serial port context, "baud rate" is the speed at which data is sent over a serial line, measured in bits per second.',
    example: 'The two devices needed to be configured with the same baud rate of 9600 to communicate correctly over the serial connection.',
  },
  {
    id: 'bearertoken',
    term: 'Bearer Token',
    slug: 'bearertoken',
    definition: 'A type of access token in OAuth 2.0. The "bearer" of the token can use it to access protected resources without further identification.',
    example: 'The web application included the Bearer Token in the Authorization header of its API requests to authenticate itself.',
  },
  {
    id: 'betabuild',
    term: 'Beta Build',
    slug: 'betabuild',
    definition: 'A pre-release version of software that is distributed to a group of users for testing before its official release.',
    example: 'The developers released a beta build of the new operating system to gather feedback and find bugs.',
  },
  {
    id: 'bgp',
    term: 'BGP (Border Gateway Protocol)',
    slug: 'bgp',
    definition: 'The routing protocol used to exchange routing information across the internet.',
    example: 'BGP is what allows different internet service providers to share information about how to reach various IP address ranges.',
  },
  {
    id: 'bios',
    term: 'BIOS',
    slug: 'bios',
    definition: 'Basic Input/Output System. Firmware used to perform hardware initialization during the booting process (power-on startup) and to provide runtime services for operating systems and programs.',
    example: 'I had to enter the BIOS to change the boot order of my computer.',
  },
  {
    id: 'blob',
    term: 'BLOB (Binary Large Object)',
    slug: 'blob',
    definition: 'A collection of binary data stored as a single entity in a database management system.',
    example: 'The user\'s profile picture was stored as a BLOB in the database.',
  },
  {
    id: 'blockchain',
    term: 'Blockchain',
    slug: 'blockchain',
    definition: 'A blockchain is a distributed, immutable ledger that is used to record transactions and track assets in a business network. An asset can be tangible (a house, car, cash, land) or intangible (intellectual property, patents, copyrights, branding).',
    example: 'Bitcoin uses a blockchain to record all transactions. Each "block" contains a list of transactions, and it\'s linked to the previous one, creating a secure and unchangeable chain.',
  },
  {
    id: 'blueteam',
    term: 'Blue Team',
    slug: 'blueteam',
    definition: 'In cybersecurity, a group of individuals who are responsible for defending an enterprise\'s information systems against attacks.',
    example: 'During the security drill, the blue team successfully defended the network against the red team\'s simulated attack.',
  },
  {
    id: 'bottleneck',
    term: 'Bottleneck',
    slug: 'bottleneck',
    definition: 'A point of congestion in a system that limits its overall performance. The bottleneck is the component that has the lowest capacity and therefore slows down the entire system.',
    example: 'The slow database query was the bottleneck that was causing the entire application to respond slowly.',
  },
  {
    id: 'bootstrap',
    term: 'Bootstrap',
    slug: 'bootstrap',
    definition: 'The process of loading a set of instructions when a computer is first turned on or booted. In web development, it also refers to a popular front-end framework for creating responsive websites.',
    example: 'The developer used the Bootstrap framework to quickly create a responsive layout for the new website.',
  },
  {
    id: 'branch',
    term: 'Branch',
    slug: 'branch',
    definition: 'In version control systems like Git, a branch is a parallel version of a repository. It allows you to work on different features or fixes without affecting the main codebase.',
    example: 'The developer created a new branch to work on the user authentication feature.',
  },
  {
    id: 'breakfix',
    term: 'Break-Fix',
    slug: 'breakfix',
    definition: 'A model of IT support where services are provided on an as-needed basis, rather than through a proactive maintenance plan. The technician is called to "fix" something when it "breaks".',
    example: 'The small business relied on a break-fix model, calling an IT consultant only when their server went down.',
  },
  {
    id: 'bridge',
    term: 'Bridge',
    slug: 'bridge',
    definition: 'A network device that connects two or more network segments, forwarding traffic between them. It operates at the data link layer (Layer 2) of the OSI model.',
    example: 'The network administrator used a bridge to connect the two separate office LANs.',
  },
  {
    id: 'bringup',
    term: 'Bring-up',
    slug: 'bringup',
    definition: 'In hardware engineering, the process of powering on a new circuit board or system for the first time and getting it to a basic functional state.',
    example: 'The hardware team spent the week on the bring-up of the new prototype, starting with just powering it on and getting a serial console.',
  },
  {
    id: 'bruteforce',
    term: 'Brute-Force Attack',
    slug: 'bruteforce',
    definition: 'A trial-and-error method used by application programs to decode encrypted data such as passwords or Data Encryption Standard (DES) keys, through exhaustive effort (using brute force) rather than employing intellectual strategies.',
    example: 'The attacker launched a brute-force attack, trying every possible password combination until they found the correct one.',
  },
  {
    id: 'bufferoverflow',
    term: 'Buffer Overflow',
    slug: 'bufferoverflow',
    definition: 'A security vulnerability that occurs when a program writes data beyond the boundary of a buffer. This can be exploited by an attacker to execute arbitrary code.',
    example: 'The hacker exploited a buffer overflow vulnerability to gain control of the web server.',
  },
  {
    id: 'bugbash',
    term: 'Bug Bash',
    slug: 'bugbash',
    definition: 'A procedure in software development where all the developers, testers, and anyone else involved in the project, get together to find and report as many bugs as possible in a short period.',
    example: 'The team held a bug bash before the final release to catch any remaining issues.',
  },
  {
    id: 'bugreport',
    term: 'Bug Report',
    slug: 'bugreport',
    definition: 'A detailed document that describes a bug or defect found in a software application, including steps to reproduce it.',
    example: 'The QA tester filed a detailed bug report, which helped the developer quickly identify and fix the issue.',
  },
  {
    id: 'buildartifact',
    term: 'Build Artifact',
    slug: 'buildartifact',
    definition: 'The output of a software build process, such as a compiled executable, a library, or a packaged application.',
    example: 'The CI/CD pipeline stored the build artifact in a repository after a successful build.',
  },
  {
    id: 'buildpipeline',
    term: 'Build Pipeline',
    slug: 'buildpipeline',
    definition: 'An automated process that takes source code, builds it, runs tests, and packages it for deployment.',
    example: 'The company\'s build pipeline ensures that every code change is automatically tested before it is deployed.',
  },
  {
    id: 'burnin',
    term: 'Burn-In',
    slug: 'burnin',
    definition: 'The process of running a new piece of hardware or a system for a period of time to detect any early failures.',
    example: 'The server underwent a 48-hour burn-in test to ensure all its components were stable before being put into production.',
  },
  {
    id: 'bustopology',
    term: 'Bus Topology',
    slug: 'bus-topology',
    definition: 'A network topology in which all devices are connected to a single central cable, called the bus or backbone.',
    example: 'Early Ethernet networks often used a bus topology, but it has been largely replaced by star topologies.',
  },
  {
    id: 'bytecode',
    term: 'Bytecode',
    slug: 'bytecode',
    definition: 'A form of instruction set designed for efficient execution by a software interpreter or virtual machine.',
    example: 'When you compile a Java program, it is converted into bytecode, which is then executed by the Java Virtual Machine (JVM).',
  },
  {
    id: 'byteorder',
    term: 'Byte Order',
    slug: 'byteorder',
    definition: 'The order in which bytes of a multi-byte data word are stored in memory. The two main types are big-endian and little-endian.',
    example: 'Network protocols typically use big-endian byte order, so systems must convert their native format if it differs.',
  },
  {
    id: 'byod',
    term: 'BYOD (Bring Your Own Device)',
    slug: 'byod',
    definition: 'A policy that allows employees to use their personal devices, such as laptops and smartphones, for work purposes.',
    example: 'The company implemented a BYOD policy to reduce hardware costs and allow employees to work on their preferred devices.',
  },
  {
    id: 'baas',
    term: 'BaaS (Backend as a Service)',
    slug: 'baas',
    definition: 'A cloud service model that provides backend functionality like databases, user authentication, and push notifications, allowing developers to focus on the frontend.',
    example: 'The mobile app developer used Firebase, a popular BaaS, to handle user accounts and data storage without writing any server-side code.',
  },
  {
    id: 'baremetal',
    term: 'Bare metal',
    slug: 'bare-metal',
    definition: 'A computer server that is a physical piece of hardware, dedicated to a single tenant. The tenant can run their choice of operating system and software directly on the hardware.',
    example: 'For maximum performance, the gaming company decided to run its application on a bare-metal server instead of in a virtualized environment.',
  },
  {
    id: 'batchprocess',
    term: 'Batch Process',
    slug: 'batch-process',
    definition: 'The execution of a series of jobs ("a batch") on a computer without manual intervention.',
    example: 'The bank runs a batch process every night to calculate interest and update all customer accounts.',
  },
  {
    id: 'bitbucket',
    term: 'Bitbucket',
    slug: 'bitbucket',
    definition: 'A web-based version control repository hosting service, owned by Atlassian, for source code and development projects that use either Mercurial or (since 2011) Git.',
    example: 'The team uses Bitbucket for their private Git repositories and integrates it with Jira for issue tracking.',
  },
  {
    id: 'blackbox',
    term: 'Black Box',
    slug: 'black-box',
    definition: 'In science, computing, and engineering, a device, system, or object which can be viewed in terms of its inputs and outputs, without any knowledge of its internal workings.',
    example: 'In black-box testing, the tester evaluates the software without knowing its internal code structure.',
  },
  {
    id: 'blacklist',
    term: 'Blacklist',
    slug: 'blacklist',
    definition: 'A list of entities, such as IP addresses or email addresses, that are denied access to a system or service. The more modern term is "denylist".',
    example: 'The email server maintains a blacklist of known spam sources to protect users from junk mail.',
  },
  {
    id: 'bladeserver',
    term: 'Blade Server',
    slug: 'bladeserver',
    definition: 'A stripped-down server computer with a modular design optimized to minimize the use of physical space and energy. Blade servers have many components removed to save space, minimize power consumption, and other considerations, while still having all the functional components to be considered a computer.',
    example: 'The data center used blade servers to achieve high-density computing in a small footprint.',
  },
  {
    id: 'blockstorage',
    term: 'Block Storage',
    slug: 'blockstorage',
    definition: 'A type of data storage where data is stored in volumes referred to as blocks. Each block acts as an individual hard drive and is configured by the administrator.',
    example: 'Cloud providers like AWS offer block storage (EBS) that can be attached to virtual machines for persistent storage.',
  },
  {
    id: 'bootloader',
    term: 'Bootloader',
    slug: 'bootloader',
    definition: 'A program that loads the main operating system for the computer when it is turned on.',
    example: 'GRUB is a popular bootloader for Linux that allows you to choose between multiple operating systems at startup.',
  },
  {
    id: 'bootvolume',
    term: 'Boot Volume',
    slug: 'bootvolume',
    definition: 'The storage volume that contains the operating system and files needed to boot a computer.',
    example: 'If the boot volume is corrupted, the computer will fail to start.',
  },
  {
    id: 'bootstraptoken',
    term: 'Bootstrap Token',
    slug: 'bootstraptoken',
    definition: 'In systems like Kubernetes, a short-lived token used to securely join a new node to a cluster.',
    example: 'The administrator generated a bootstrap token to add a new worker node to the Kubernetes cluster.',
  },
  {
    id: 'breakpoint',
    term: 'Breakpoint',
    slug: 'breakpoint',
    definition: 'An intentional stopping or pausing place in a program, put in place for debugging purposes.',
    example: 'The developer set a breakpoint in the code to inspect the value of a variable at a specific point in the execution.',
  },
  {
    id: 'buffercache',
    term: 'Buffer Cache',
    slug: 'buffercache',
    definition: 'A portion of a computer\'s memory used to temporarily store data that is being read from or written to a disk.',
    example: 'The operating system uses a buffer cache to improve disk I/O performance by holding frequently accessed data in RAM.',
  },
  {
    id: 'bugfixpatch',
    term: 'Bugfix Patch',
    slug: 'bugfixpatch',
    definition: 'A small piece of software designed to update a computer program or its supporting data, to fix or improve it.',
    example: 'The company released a bugfix patch to address a critical security vulnerability.',
  },
  {
    id: 'bundleid',
    term: 'Bundle ID',
    slug: 'bundleid',
    definition: 'A unique identifier for an application, used by operating systems like iOS and macOS to recognize the app.',
    example: 'When submitting an app to the Apple App Store, you must provide a unique Bundle ID.',
  },
  {
    id: 'busmastering',
    term: 'Bus Mastering',
    slug: 'busmastering',
    definition: 'A feature that allows a device on a computer bus to initiate transactions, enabling it to directly access system memory without involving the CPU.',
    example: 'A high-speed network card might use bus mastering to transfer data directly to memory, freeing up the CPU for other tasks.',
  },
  {
    id: 'bytealignment',
    term: 'Byte Alignment',
    slug: 'bytealignment',
    definition: 'The way data is arranged and accessed in computer memory. It refers to the requirement that data be stored at a memory address that is a multiple of its size.',
    example: 'Proper byte alignment is important for performance, as misaligned data can require extra memory accesses.',
  },
  {
    id: 'bytecodevm',
    term: 'Bytecode VM',
    slug: 'bytecodevm',
    definition: 'A virtual machine that executes bytecode, which is a form of instruction set designed for efficient execution by a software interpreter.',
    example: 'The Java Virtual Machine (JVM) is a well-known bytecode VM that allows Java programs to run on any device.',
  },
  {
    id: 'bitmask',
    term: 'Bitmask',
    slug: 'bitmask',
    definition: 'Data that is used for bitwise operations, particularly in a bit field. Using a mask, multiple bits can be set on or off, or inverted, in a single bitwise operation.',
    example: 'A programmer used a bitmask to store multiple true/false flags in a single byte to save memory.',
  },
  {
    id: 'bmc',
    term: 'BMC (Baseboard Management Controller)',
    slug: 'bmc',
    definition: 'A specialized service processor that monitors the physical state of a computer, network server or other hardware device using sensors and communicating with the system administrator through an independent connection.',
    example: 'The sysadmin used the BMC to remotely power cycle the server even though the operating system was unresponsive.',
  },
  {
    id: 'bootstrapping',
    term: 'Bootstrapping',
    slug: 'bootstrapping',
    definition: 'The process of starting a computer system, where a small initial program (the boot loader) loads a larger, more complex program (the operating system).',
    example: 'The BIOS performs the initial bootstrapping of the computer, leading to the loading of Windows or Linux.',
  },
  {
    id: 'bourneshell',
    term: 'Bourne Shell',
    slug: 'bourneshell',
    definition: 'The original Unix shell, `sh`, which provided the basic scripting and command-line capabilities. Many modern shells are based on it.',
    example: 'For maximum portability, he wrote the script in Bourne shell syntax so it would run on any Unix-like system.',
  },
  {
    id: 'browsercache',
    term: 'Browser Cache',
    slug: 'browsercache',
    definition: 'A temporary storage area in your computer that holds web pages and their assets (like images) that you have recently visited.',
    example: 'Clearing your browser cache can sometimes fix issues with websites not loading correctly.',
  },
  {
    id: 'browserfingerprint',
    term: 'Browser Fingerprint',
    slug: 'browserfingerprint',
    definition: 'A collection of information about a user\'s browser and device (such as browser type, version, plugins, and screen resolution) that can be used to track them online.',
    example: 'Websites can use browser fingerprinting to identify and track users even if they clear their cookies.',
  },
  {
    id: 'browsersandbox',
    term: 'Browser Sandbox',
    slug: 'browsersandbox',
    definition: 'A security mechanism that isolates web pages in the browser from the rest of the computer, preventing malicious code from accessing your files or system.',
    example: 'The browser sandbox ensures that a malicious website cannot infect your computer with a virus.',
  },
  {
    id: 'bufferpool',
    term: 'Buffer Pool',
    slug: 'bufferpool',
    definition: 'In a database management system, a buffer pool is an area in main memory that is used to cache table and index data as it is being accessed.',
    example: 'Increasing the size of the buffer pool can significantly improve database performance by reducing disk I/O.',
  },
  {
    id: 'bugtracker',
    term: 'Bug Tracker',
    slug: 'bugtracker',
    definition: 'A software application that is used to keep track of reported software bugs in software development projects.',
    example: 'The team uses Jira as their bug tracker to manage all reported issues and assign them to developers.',
  },
  {
    id: 'bulkheadpattern',
    term: 'Bulkhead Pattern',
    slug: 'bulkheadpattern',
    definition: 'A design pattern used in distributed systems to isolate elements of an application into pools so that if one fails, the others will continue to function.',
    example: 'By using the bulkhead pattern, a failure in the payment processing service did not bring down the entire e-commerce website.',
  },
  {
    id: 'bursttransfer',
    term: 'Burst Transfer',
    slug: 'bursttransfer',
    definition: 'A mode of data transfer in which a large amount of data is sent in a short period of time.',
    example: 'The memory controller supports burst transfers to quickly fill the CPU cache.',
  },
  {
    id: 'baitingattack',
    term: 'Baiting Attack',
    slug: 'baitingattack',
    definition: 'A type of social engineering attack where an attacker leaves a malware-infected physical device, such as a USB drive, in a place where it is likely to be found and used.',
    example: 'An employee found a USB drive in the parking lot and plugged it into their computer, falling victim to a baiting attack.',
  },
  {
    id: 'baselinesecurity',
    term: 'Baseline Security',
    slug: 'baselinesecurity',
    definition: 'A minimum level of security controls that should be applied to all systems in an organization.',
    example: 'The company\'s baseline security policy requires all servers to have a firewall enabled and all passwords to be complex.',
  },
  {
    id: 'batchscheduler',
    term: 'Batch Scheduler',
    slug: 'batchscheduler',
    definition: 'A software tool used to manage and execute batch jobs. It can schedule jobs to run at specific times, manage dependencies between jobs, and monitor their execution.',
    example: 'The university uses a batch scheduler to manage the large number of computational jobs submitted by researchers to the high-performance computing cluster.',
  },
  {
    id: 'bitrot',
    term: 'Bit Rot',
    slug: 'bitrot',
    definition: 'Also known as data degradation or data decay, it is the gradual decay of data stored on storage media over time.',
    example: 'File systems like ZFS have built-in checksums to detect and protect against bit rot.',
  },
  {
    id: 'bi',
    term: 'BI (Business Intelligence)',
    slug: 'bi',
    definition: 'The use of software and services to turn data into actionable insights that inform an organization\'s business decisions.',
    example: 'The company uses a BI tool to analyze sales data and identify trends.',
  },
  {
    id: 'bireport',
    term: 'BI Report',
    slug: 'bireport',
    definition: 'A report generated by a Business Intelligence (BI) tool that presents data and analysis in a readable format, often with charts and graphs.',
    example: 'The manager reviewed the weekly BI report to track the team\'s key performance indicators.',
  },
  {
    id: 'bindvariable',
    term: 'Bind Variable',
    slug: 'bindvariable',
    definition: 'In databases, a placeholder in a SQL statement that is replaced with a literal value at execution time. It is used to prevent SQL injection and improve performance.',
    example: 'Instead of concatenating user input into the query, the developer used a bind variable to safely pass the value to the database.',
  },
  {
    id: 'bitflip',
    term: 'Bit Flip',
    slug: 'bitflip',
    definition: 'An error in computer data in which a single bit is inverted, from 0 to 1 or vice versa. This can be caused by radiation or hardware faults.',
    example: 'A random bit flip in memory caused the program to crash unexpectedly.',
  },
  {
    id: 'bittorrent',
    term: 'BitTorrent',
    slug: 'bittorrent',
    definition: 'A communication protocol for peer-to-peer file sharing (P2P) which is used to distribute large amounts of data and electronic files over the Internet.',
    example: 'He used BitTorrent to download the latest Linux distribution, which was faster than downloading from a single server.',
  },
  {
    id: 'bluetoothstack',
    term: 'Bluetooth Stack',
    slug: 'bluetoothstack',
    definition: 'The software that implements the Bluetooth protocols, allowing an operating system to communicate with Bluetooth devices.',
    example: 'He had to update his computer\'s Bluetooth stack to support the new features of his wireless headphones.',
  },
  {
    id: 'bounceattack',
    term: 'Bounce Attack',
    slug: 'bounceattack',
    definition: 'A type of network attack where an attacker sends requests to a server with the source IP address spoofed to be the victim\'s address. The server then sends its replies to the victim, flooding them with traffic.',
    example: 'A DNS amplification attack is a type of bounce attack.',
  },
  {
    id: 'browserexploitkit',
    term: 'Browser Exploit Kit',
    slug: 'browserexploitkit',
    definition: 'A software kit that is used to exploit vulnerabilities in web browsers. It is often hosted on a compromised website and used to automatically install malware on visitors\' computers.',
    example: 'The user\'s computer was infected with ransomware after visiting a website that was running a browser exploit kit.',
  },
  {
    id: 'bufferingstrategy',
    term: 'Buffering Strategy',
    slug: 'bufferingstrategy',
    definition: 'The method used to manage a buffer, such as how much data to store before processing or transmitting it.',
    example: 'The video player uses a clever buffering strategy to ensure smooth playback even on a slow internet connection.',
  },
  {
    id: 'builtinfunction',
    term: 'Built-in Function',
    slug: 'builtinfunction',
    definition: 'A function that is provided by a programming language or environment, rather than being defined by the user.',
    example: 'In Python, `print()` and `len()` are examples of built-in functions.',
  },
  {
    id: 'buserror',
    term: 'Bus Error',
    slug: 'buserror',
    definition: 'A type of fault raised by a computer\'s hardware, indicating that the processor has attempted an invalid memory access.',
    example: 'The program crashed with a bus error because it tried to access an unaligned memory address.',
  },
  {
    id: 'busywait',
    term: 'Busy-wait',
    slug: 'busywait',
    definition: 'A technique in which a process repeatedly checks a condition, such as whether a lock is available. This can be very inefficient as it consumes CPU cycles without doing useful work.',
    example: 'The code used a busy-wait loop to wait for the hardware to become ready, which was inefficient and drained the battery on the mobile device.',
  },
  {
    id: 'byteswapping',
    term: 'Byte Swapping',
    slug: 'byteswapping',
    definition: 'The process of changing the byte order of a multi-byte data value, for example, from big-endian to little-endian.',
    example: 'When reading data from a network packet, the program had to perform byte swapping to convert the data to the processor\'s native byte order.',
  },
  {
    id: 'bytestream',
    term: 'Byte Stream',
    slug: 'bytestream',
    definition: 'A sequence of bytes, often used to represent data being transferred over a network or read from a file.',
    example: 'The TCP protocol provides a reliable byte stream between two applications.',
  },
  {
    id: 'bytearray',
    term: 'Byte Array',
    slug: 'bytearray',
    definition: 'An array data structure that holds a sequence of bytes.',
    example: 'He read the contents of the image file into a byte array to process it in memory.',
  },
  {
    id: 'bytepointer',
    term: 'Byte Pointer',
    slug: 'bytepointer',
    definition: 'A pointer that points to a memory location containing a single byte of data.',
    example: 'In C, you can use a byte pointer to iterate through the individual bytes of a larger data structure.',
  },
  {
    id: 'byteslice',
    term: 'Byte Slice',
    slug: 'byteslice',
    definition: 'In languages like Go, a slice is a flexible view into the elements of an array. A byte slice is a slice of a byte array.',
    example: 'The Go program used a byte slice to efficiently read a portion of a file into memory.',
  },
  {
    id: 'bytewrapper',
    term: 'Byte Wrapper',
    slug: 'bytewrapper',
    definition: 'A class or object that "wraps" a raw byte array or buffer, providing a more convenient interface for reading and writing different data types.',
    example: 'Java\'s `ByteBuffer` is a byte wrapper that provides methods for reading and writing primitive types like integers and floats.',
  },
  {
    id: 'byteboundary',
    term: 'Byte Boundary',
    slug: 'byteboundary',
    definition: 'A specific memory address that is a multiple of a certain power of two. Aligning data to byte boundaries can improve performance.',
    example: 'For optimal performance, the data structure was aligned to an 8-byte boundary.',
  },
  {
    id: 'big-data',
    term: 'Big Data',
    slug: 'big-data',
    definition: 'Extremely large and complex datasets that traditional data-processing application software is inadequate to deal with. It is characterized by the three Vs: volume, velocity, and variety.',
    example: 'Social media companies analyze big data to understand user behavior and serve targeted ads.',
  },
  {
    id: 'binary',
    term: 'Binary',
    slug: 'binary',
    definition: 'A number system that only uses two digits: 0 and 1. It is the fundamental language of computers.',
    example: 'The letter "A" is represented in binary as 01000001.',
  },
  {
    id: 'bit',
    term: 'Bit',
    slug: 'bit',
    definition: 'The smallest unit of data in a computer, with a single binary value of either 0 or 1.',
    example: 'A 64-bit processor can handle more data at once than a 32-bit processor.',
  },
  {
    id: 'bug',
    term: 'Bug',
    slug: 'bug',
    definition: 'An error, flaw, or fault in a computer program or system that causes it to produce an incorrect or unexpected result, or to behave in unintended ways.',
    example: 'The developers worked all night to fix a critical bug before the software release.',
  },
  {
    id: 'build',
    term: 'Build',
    slug: 'build',
    definition: 'In software development, a build is the process of converting source code files into a standalone artifact (like an executable program or a library) that can be run on a computer.',
    example: 'The continuous integration server automatically creates a new build every time a developer pushes code to the repository.',
  },
  {
    id: 'byte',
    term: 'Byte',
    slug: 'byte',
    definition: 'A unit of digital information that most commonly consists of eight bits. It is the basic addressable element in many computer architectures.',
    example: 'A file size is often measured in kilobytes, megabytes, or gigabytes, which are multiples of a byte.',
  },
  {
    id: 'cache',
    term: 'Cache',
    slug: 'cache',
    definition: 'A cache is a temporary storage area that stores data so that future requests for that data can be served faster. It could be a hardware or software component.',
    example: 'Your web browser caches images and text from websites you visit frequently, so the next time you go to that site, it loads much faster because the content is already on your computer.',
  },
  {
    id: 'cdn',
    term: 'CDN',
    slug: 'cdn',
    definition: 'A Content Delivery Network (CDN) is a geographically distributed network of proxy servers and their data centers. The goal is to provide high availability and performance by distributing the service spatially relative to end-users.',
    example: 'Netflix uses a CDN to store copies of its movies and shows on servers all around the world, so when you stream a video, it comes from a server near you, reducing buffering and improving quality.',
  },
  {
    id: 'cli',
    term: 'CLI',
    slug: 'cli',
    definition: 'A Command-Line Interface (CLI) is a text-based interface used to run programs, manage computer files and interact with the computer. It is an alternative to a Graphical User Interface (GUI).',
    example: 'Instead of clicking on icons, a developer might use the CLI to navigate folders, create files, and run programs by typing commands like `cd my-project` or `npm install`.',
  },
  {
    id: 'ci-cd',
    term: 'CI/CD',
    slug: 'ci-cd',
    definition: 'Continuous Integration and Continuous Delivery/Deployment. A method to frequently deliver apps to customers by introducing automation into the stages of app development.',
    example: 'Our team has a CI/CD pipeline that automatically builds, tests, and deploys our application whenever new code is merged.',
  },
  {
    id: 'class',
    term: 'Class',
    slug: 'class',
    definition: 'In object-oriented programming, a class is a blueprint for creating objects. It provides initial values for state (member variables) and implementations of behavior (member functions or methods).',
    example: 'The programmer defined a `Car` class with properties like `color` and `speed`, and methods like `start()` and `stop()`.',
  },
  {
    id: 'cloud-computing',
    term: 'Cloud Computing',
    slug: 'cloud-computing',
    definition: 'The delivery of computing services—including servers, storage, databases, networking, software, analytics, and intelligence—over the Internet ("the cloud") to offer faster innovation, flexible resources, and economies of scale.',
    example: 'Instead of buying and managing their own servers, the startup used Amazon Web Services (AWS) for their cloud computing needs.',
  },
  {
    id: 'codec',
    term: 'Codec',
    slug: 'codec',
    definition: 'A device or program that compresses data to enable faster transmission and decompresses received data. A portmanteau of "coder-decoder".',
    example: 'Video streaming services use codecs like H.264 to compress video files for efficient streaming over the internet.',
  },
  {
    id: 'commit',
    term: 'Commit',
    slug: 'commit',
    definition: 'In version control systems like Git, a commit is the operation which saves the changes to the local repository. Each commit has a unique ID and a message describing the changes.',
    example: 'After fixing the bug, the developer made a commit with the message "Fix login issue for guest users".',
  },
  {
    id: 'compiler',
    term: 'Compiler',
    slug: 'compiler',
    definition: 'A special program that processes statements written in a particular programming language and turns them into machine language or "code" that a computer\'s processor uses.',
    example: 'The C++ code was run through a compiler to create an executable file that could be run on Windows.',
  },
  {
    id: 'containerization',
    term: 'Containerization',
    slug: 'containerization',
    definition: 'A lightweight alternative to full machine virtualization that involves encapsulating an application in a container with its own operating environment.',
    example: 'Docker is a popular tool for containerization, allowing developers to package an application with all its dependencies.',
  },
  {
    id: 'cookie',
    term: 'Cookie',
    slug: 'cookie',
    definition: 'A small piece of data sent from a website and stored on the user\'s computer by the user\'s web browser while the user is browsing.',
    example: 'An e-commerce site uses a cookie to remember the items you added to your shopping cart.',
  },
  {
    id: 'cpu',
    term: 'CPU',
    slug: 'cpu',
    definition: 'Central Processing Unit. The primary component of a computer that executes instructions. It is often referred to as the "brain" of the computer.',
    example: 'A faster CPU can improve the performance of a computer, especially for intensive tasks like video editing or gaming.',
  },
  {
    id: 'cron-job',
    term: 'Cron job',
    slug: 'cron-job',
    definition: 'A time-based job scheduler in Unix-like computer operating systems. Users who set up and maintain software environments use cron to schedule jobs to run periodically at fixed times, dates, or intervals.',
    example: 'The system administrator set up a cron job to perform a database backup every day at 2 AM.',
  },
  {
    id: 'cross-site-scripting',
    term: 'Cross-Site Scripting (XSS)',
    slug: 'cross-site-scripting',
    definition: 'A type of security vulnerability typically found in web applications. XSS allows attackers to inject client-side scripts into web pages viewed by other users.',
    example: 'The website was vulnerable to XSS, allowing an attacker to steal users\' session cookies by injecting a malicious script into the comment section.',
  },
  {
    id: 'cryptography',
    term: 'Cryptography',
    slug: 'cryptography',
    definition: 'The practice and study of techniques for secure communication in the presence of third parties called adversaries. It is about constructing and analyzing protocols that prevent third parties or the public from reading private messages.',
    example: 'End-to-end encryption in messaging apps is a modern application of cryptography.',
  },
  {
    id: 'css',
    term: 'CSS',
    slug: 'css',
    definition: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS describes how HTML elements should be displayed on screen, paper, or in other media.',
    example: 'If HTML is the skeleton of a webpage, CSS is the clothing. It defines the colors, fonts, and layout, making the website visually appealing.',
  },
  {
    id: 'daemon',
    term: 'Daemon',
    slug: 'daemon',
    definition: 'A computer program that runs as a background process, rather than being under the direct control of an interactive user.',
    example: 'The `sshd` daemon on a Linux server listens for incoming SSH connections.',
  },
  {
    id: 'data-lake',
    term: 'Data Lake',
    slug: 'data-lake',
    definition: 'A centralized repository that allows you to store all your structured and unstructured data at any scale.',
    example: 'The company built a data lake to store raw data from IoT devices, social media, and sales transactions for future analysis.',
  },
  {
    id: 'data-mining',
    term: 'Data Mining',
    slug: 'data-mining',
    definition: 'The process of discovering patterns in large data sets involving methods at the intersection of machine learning, statistics, and database systems.',
    example: 'Retail companies use data mining to discover customer shopping habits and offer personalized recommendations.',
  },
  {
    id: 'data-warehouse',
    term: 'Data Warehouse',
    slug: 'data-warehouse',
    definition: 'A large store of data accumulated from a wide range of sources within a company and used to guide management decisions. The data is typically structured and cleaned for reporting and analysis.',
    example: 'Analysts query the data warehouse to generate reports on quarterly sales performance across different regions.',
  },
  {
    id: 'database',
    term: 'Database',
    slug: 'database',
    definition: 'A database is an organized collection of structured information, or data, typically stored electronically in a computer system. A database is usually controlled by a database management system (DBMS).',
    example: 'A social media app stores all user profiles, posts, comments, and likes in a database, allowing the information to be retrieved and displayed to users.',
  },
  {
    id: 'debug',
    term: 'Debug',
    slug: 'debug',
    definition: 'The process of finding and resolving defects or problems within a computer program that prevent correct operation of computer software or a system.',
    example: 'The programmer spent hours debugging the code to find the source of the crash.',
  },
  {
    id: 'deployment',
    term: 'Deployment',
    slug: 'deployment',
    definition: 'In software development, deployment is the process of making a software application available for use. This can involve installing the software on servers, configuring it, and making it accessible to users.',
    example: 'After months of development, the team began the deployment process to push the new version of their website to the live servers for everyone to see.',
  },
  {
    id: 'devops',
    term: 'DevOps',
    slug: 'devops',
    definition: 'A set of practices that combines software development (Dev) and IT operations (Ops). It aims to shorten the systems development life cycle and provide continuous delivery with high software quality.',
    example: 'By adopting a DevOps culture, the company was able to release software updates much faster and with fewer errors.',
  },
  {
    id: 'dhcp',
    term: 'DHCP',
    slug: 'dhcp',
    definition: 'Dynamic Host Configuration Protocol. A network management protocol used to automate the process of configuring devices on IP networks.',
    example: 'When you connect to a Wi-Fi network, your device gets an IP address automatically from a DHCP server.',
  },
  {
    id: 'dns',
    term: 'DNS',
    slug: 'dns',
    definition: 'The Domain Name System (DNS) is the phonebook of the Internet. Humans access information online through domain names, like nytimes.com or espn.com. Web browsers interact through Internet Protocol (IP) addresses. DNS translates domain names to IP addresses so browsers can load Internet resources.',
    example: 'When you type "google.com" into your browser, DNS servers find the correct IP address for Google, like 172.217.9.142, allowing your computer to connect to it.',
  },
  {
    id: 'docker',
    term: 'Docker',
    slug: 'docker',
    definition: 'Docker is a platform for developing, shipping, and running applications in containers. It allows developers to package an application with all of its dependencies into a standardized unit for software development.',
    example: 'A developer uses Docker to create a container with their web application, a database, and all necessary libraries. They can then share this single container with their team, ensuring it runs exactly the same for everyone.',
  },
  {
    id: 'dom',
    term: 'DOM',
    slug: 'dom',
    definition: 'Document Object Model. A programming interface for web documents. It represents the page so that programs can change the document structure, style, and content.',
    example: 'JavaScript uses the DOM to manipulate HTML elements, like changing the text of a paragraph or adding a new button.',
  },
  {
    id: 'downtime',
    term: 'Downtime',
    slug: 'downtime',
    definition: 'A period of time when a system, such as a computer or a network, is unavailable or out of service.',
    example: 'The website experienced some downtime last night for scheduled maintenance.',
  },
  {
    id: 'edge-computing',
    term: 'Edge Computing',
    slug: 'edge-computing',
    definition: 'A distributed computing paradigm that brings computation and data storage closer to the sources of data. This is done to improve response times and save bandwidth.',
    example: 'A smart security camera might use edge computing to process video locally and only send an alert to the cloud if it detects motion.',
  },
  {
    id: 'emulator',
    term: 'Emulator',
    slug: 'emulator',
    definition: 'Hardware or software that enables one computer system (called the host) to behave like another computer system (called the guest).',
    example: 'A developer uses an Android emulator on their computer to test how their app will look and behave on a real phone.',
  },
  {
    id: 'encapsulation',
    term: 'Encapsulation',
    slug: 'encapsulation',
    definition: 'In object-oriented programming, encapsulation refers to the bundling of data with the methods that operate on that data, or the restricting of direct access to some of an object\'s components.',
    example: 'A `Car` class encapsulates the `speed` variable, only allowing it to be changed through methods like `accelerate()` and `brake()`.',
  },
  {
    id: 'encryption',
    term: 'Encryption',
    slug: 'encryption',
    definition: 'Encryption is the process of converting information or data into a code, especially to prevent unauthorized access. The reverse process, decryption, makes the encrypted information readable again.',
    example: 'Messaging apps like Signal use end-to-end encryption to scramble your messages, so only you and the person you\'re communicating with can read them.',
  },
  {
    id: 'firewall',
    term: 'Firewall',
    slug: 'firewall',
    definition: 'A firewall is a network security device that monitors incoming and outgoing network traffic and decides whether to allow or block specific traffic based on a defined set of security rules.',
    example: 'Your home internet router has a built-in firewall that acts like a security guard, preventing unauthorized access to your home network from the internet.',
  },
  {
    id: 'firmware',
    term: 'Firmware',
    slug: 'firmware',
    definition: 'A specific class of computer software that provides low-level control for a device\'s specific hardware.',
    example: 'You might need to update the firmware on your router to get new features or security patches.',
  },
  {
    id: 'framework',
    term: 'Framework',
    slug: 'framework',
    definition: 'A pre-written set of code that provides a structure for developing software applications. It provides a standard way to build and deploy applications.',
    example: 'React and Angular are popular JavaScript frameworks for building user interfaces.',
  },
  {
    id: 'frontend',
    term: 'Frontend',
    slug: 'frontend',
    definition: 'The frontend of a website or software application is the part that the user interacts with directly. It is also referred to as the "client-side" of the application. It includes everything that users experience directly: text colors and styles, images, graphs and tables, buttons, colors, and navigation menu.',
    example: 'A frontend developer uses HTML, CSS, and JavaScript to build the visual elements of a website, like the sign-up form, the navigation bar, and the layout of the articles you read.',
  },
  {
    id: 'full-stack',
    term: 'Full-stack',
    slug: 'full-stack',
    definition: 'A full-stack developer is an engineer who can handle all the work of databases, servers, systems engineering, and clients. Depending on the project, what customers need may be a mobile stack, a Web stack, or a native application stack.',
    example: 'The startup hired a full-stack developer who could build both the user-facing website and the server-side logic to power it.',
  },
  {
    id: 'garbage-collection',
    term: 'Garbage Collection',
    slug: 'garbage-collection',
    definition: 'A form of automatic memory management. The garbage collector attempts to reclaim memory that was allocated by the program, but is no longer referenced.',
    example: 'Languages like Java and C# have automatic garbage collection, which frees developers from manually managing memory.',
  },
  {
    id: 'gateway',
    term: 'Gateway',
    slug: 'gateway',
    definition: 'A node (router) on a TCP/IP network that serves as an access point to another network. A gateway is a networking hardware device that connects two dissimilar networks.',
    example: 'Your home router acts as a gateway between your local network (LAN) and the internet (WAN).',
  },
  {
    id: 'git',
    term: 'Git',
    slug: 'git',
    definition: 'Git is a distributed version control system designed to handle everything from small to very large projects with speed and efficiency. It is used for tracking changes in source code during software development.',
    example: 'A team of developers uses Git to work on the same project. Each developer can work on their own "branch" and then merge their changes back into the main project, while Git keeps track of every change made.',
  },
  {
    id: 'gpu',
    term: 'GPU',
    slug: 'gpu',
    definition: 'Graphics Processing Unit. A specialized electronic circuit designed to rapidly manipulate and alter memory to accelerate the creation of images in a frame buffer intended for output to a display device.',
    example: 'A powerful GPU is essential for playing modern video games at high settings and for training complex machine learning models.',
  },
  {
    id: 'graphql',
    term: 'GraphQL',
    slug: 'graphql',
    definition: 'GraphQL is a query language for APIs and a runtime for fulfilling those queries with your existing data. It gives clients the power to ask for exactly what they need and nothing more, making it easier to evolve APIs over time.',
    example: 'Instead of making multiple API requests to get a user\'s profile, their posts, and their followers, a mobile app can use a single GraphQL query to fetch all of that specific data at once.',
  },
  {
    id: 'gui',
    term: 'GUI',
    slug: 'gui',
    definition: 'Graphical User Interface. A type of user interface that allows users to interact with electronic devices through graphical icons and audio indicators such as primary notation, instead of text-based user interfaces, typed command labels or text navigation.',
    example: 'Windows and macOS have sophisticated GUIs, making them easy for most people to use.',
  },
  {
    id: 'html',
    term: 'HTML',
    slug: 'html',
    definition: 'HyperText Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.',
    example: 'HTML provides the basic structure of a webpage, like creating headings, paragraphs, and links, much like a skeleton provides the frame for a body.',
  },
  {
    id: 'http',
    term: 'HTTP/HTTPS',
    slug: 'http',
    definition: 'Hypertext Transfer Protocol (HTTP) is the foundation of data communication for the World Wide Web. HTTPS is the secure version of HTTP, where communications are encrypted.',
    example: 'When you visit a website, your browser sends an HTTP request to the server to get the page content. If you\'re on a banking site, it uses HTTPS to encrypt your login details for security.',
  },
  {
    id: 'ide',
    term: 'IDE',
    slug: 'ide',
    definition: 'An Integrated Development Environment (IDE) is a software application that provides comprehensive facilities to computer programmers for software development. An IDE normally consists of a source code editor, build automation tools, and a debugger.',
    example: 'Programmers use an IDE like Visual Studio Code, which combines a code editor, a terminal, and debugging tools all in one window to streamline their workflow.',
  },
  {
    id: 'immutable',
    term: 'Immutable',
    slug: 'immutable',
    definition: 'An object whose state cannot be modified after it is created. This is in contrast to a mutable object, which can be modified after it is created.',
    example: 'In many programming languages, strings are immutable. Any function that seems to modify a string actually creates a new one.',
  },
  {
    id: 'inheritance',
    term: 'Inheritance',
    slug: 'inheritance',
    definition: 'In object-oriented programming, inheritance is the mechanism of basing an object or class upon another object (prototype-based inheritance) or class (class-based inheritance), retaining similar implementation.',
    example: 'A `Dog` class and a `Cat` class can both inherit properties and methods from a more general `Animal` class.',
  },
  {
    id: 'integration-testing',
    term: 'Integration Testing',
    slug: 'integration-testing',
    definition: 'A level of software testing where individual units are combined and tested as a group. The purpose of this level of testing is to expose faults in the interaction between integrated units.',
    example: 'After unit testing the login and database modules, the team performed integration testing to ensure they worked together correctly.',
  },
  {
    id: 'iot',
    term: 'IoT',
    slug: 'iot',
    definition: 'Internet of Things. The network of physical devices, vehicles, home appliances and other items embedded with electronics, software, sensors, actuators, and connectivity which enables these objects to connect and exchange data.',
    example: 'Smart home devices like thermostats, lights, and speakers are all part of the IoT.',
  },
  {
    id: 'ip-address',
    term: 'IP Address',
    slug: 'ip-address',
    definition: 'An Internet Protocol (IP) address is a numerical label assigned to each device connected to a computer network that uses the Internet Protocol for communication. An IP address serves two main functions: host or network interface identification and location addressing.',
    example: 'An IP address is like the mailing address for your computer on the internet, allowing it to send and receive data from other computers.',
  },
  {
    id: 'javascript',
    term: 'JavaScript',
    slug: 'javascript',
    definition: 'JavaScript is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. It enables interactive web pages and is an essential part of web applications.',
    example: 'When you click a button on a website and a pop-up appears without the page reloading, that interactivity is powered by JavaScript.',
  },
  {
    id: 'json',
    term: 'JSON',
    slug: 'json',
    definition: 'JavaScript Object Notation (JSON) is a lightweight data-interchange format. It is easy for humans to read and write and easy for machines to parse and generate. It is based on a subset of the JavaScript Programming Language.',
    example: 'When a weather app gets forecast data from a server, the server often sends it in JSON format, like {"city": "New York", "temperature": 75}, which the app can easily understand and display.',
  },
  {
    id: 'jwt',
    term: 'JWT',
    slug: 'jwt',
    definition: 'JSON Web Token. A compact, URL-safe means of representing claims to be transferred between two parties. The claims in a JWT are encoded as a JSON object that is used as the payload of a JSON Web Signature (JWS) structure or as the plaintext of a JSON Web Encryption (JWE) structure.',
    example: 'After a user logs in, the server issues a JWT which the client then sends with every subsequent request to prove they are authenticated.',
  },
  {
    id: 'kernel',
    term: 'Kernel',
    slug: 'kernel',
    definition: 'The core component of an operating system. It manages the system\'s resources, and it is a bridge between the hardware and the software.',
    example: 'The Linux kernel is open-source, meaning anyone can view and contribute to its code.',
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
    id: 'latency',
    term: 'Latency',
    slug: 'latency',
    definition: 'The delay before a transfer of data begins following an instruction for its transfer. In networking, it\'s the time it takes for a data packet to travel from one point to another.',
    example: 'Online gamers prefer a connection with low latency to avoid lag between their actions and what happens in the game.',
  },
  {
    id: 'library',
    term: 'Library',
    slug: 'library',
    definition: 'In programming, a library is a collection of pre-compiled routines that a program can use. The routines, sometimes called modules, are stored in object format.',
    example: 'Instead of writing their own code to handle dates and times, the developer used the `date-fns` library.',
  },
  {
    id: 'load-balancing',
    term: 'Load Balancing',
    slug: 'load-balancing',
    definition: 'The process of distributing network traffic or computational workloads across multiple servers to ensure no single server becomes overwhelmed. It improves responsiveness and availability of applications.',
    example: 'A busy website uses a load balancer to distribute incoming traffic evenly across a fleet of web servers.',
  },
  {
    id: 'log',
    term: 'Log',
    slug: 'log',
    definition: 'A file that records either events that occur in an operating system or other software runs, or messages between different users of a communication software.',
    example: 'When the application crashed, the developer checked the error log to find the cause of the problem.',
  },
  {
    id: 'machine-learning',
    term: 'Machine Learning',
    slug: 'machine-learning',
    definition: 'Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy.',
    example: 'Your email service uses machine learning to identify spam by learning from the emails you and other users mark as junk.',
  },
  {
    id: 'middleware',
    term: 'Middleware',
    slug: 'middleware',
    definition: 'Software that acts as a bridge between an operating system or database and applications, especially on a network.',
    example: 'In our web application, we have middleware that checks if a user is authenticated before allowing them to access certain routes.',
  },
  {
    id: 'microservices',
    term: 'Microservices',
    slug: 'microservices',
    definition: 'Microservices is an architectural style that structures an application as a collection of loosely coupled services. In a microservices architecture, services are fine-grained and the protocols are lightweight.',
    example: 'An online shopping application might be built using microservices: one service for user accounts, another for the product catalog, and a third for the shopping cart. They all work together but can be updated independently.',
  },
  {
    id: 'monorepo',
    term: 'Monorepo',
    slug: 'monorepo',
    definition: 'A software development strategy where code for many projects is stored in the same repository.',
    example: 'Google uses a massive monorepo to manage the source code for nearly all of its software.',
  },
  {
    id: 'mvc',
    term: 'MVC',
    slug: 'mvc',
    definition: 'Model-View-Controller. An architectural pattern that separates an application into three main logical components: the model, the view, and the controller.',
    example: 'Many web frameworks, like Ruby on Rails, are based on the MVC pattern to organize code.',
  },
  {
    id: 'nosql',
    term: 'NoSQL',
    slug: 'nosql',
    definition: 'A NoSQL database provides a mechanism for storage and retrieval of data that is modeled in means other than the tabular relations used in relational databases. They are highly flexible and can handle large amounts of unstructured data.',
    example: 'A social media platform uses a NoSQL database to store user posts, which can vary greatly in structure—some have text, some have images, some have videos, making a flexible data model ideal.',
  },
  {
    id: 'npm',
    term: 'npm',
    slug: 'npm',
    definition: 'Node Package Manager. It is the default package manager for the JavaScript runtime environment Node.js.',
    example: 'To use the React framework, you first install it into your project by running `npm install react`.',
  },
  {
    id: 'oauth',
    term: 'OAuth',
    slug: 'oauth',
    definition: 'OAuth is an open standard for access delegation, commonly used as a way for Internet users to grant websites or applications access to their information on other websites but without giving them the passwords.',
    example: 'When you see a "Log in with Google" button on a website, it uses OAuth. You grant that site access to your basic Google profile information without ever giving it your Google password.',
  },
  {
    id: 'object-oriented-programming',
    term: 'Object-Oriented Programming (OOP)',
    slug: 'object-oriented-programming',
    definition: 'A programming paradigm based on the concept of "objects", which can contain data, in the form of fields (often known as attributes or properties), and code, in the form of procedures (often known as methods).',
    example: 'Java, Python, and C++ are popular object-oriented programming languages.',
  },
  {
    id: 'open-source',
    term: 'Open Source',
    slug: 'open-source',
    definition: 'Software for which the original source code is made freely available and may be redistributed and modified.',
    example: 'The Linux operating system is one of the most successful examples of open-source software.',
  },
  {
    id: 'paas',
    term: 'PaaS',
    slug: 'paas',
    definition: 'Platform as a Service (PaaS) is a cloud computing model where a third-party provider delivers hardware and software tools to users over the internet. PaaS provides a platform for developers to build, run, and manage applications without the complexity of building and maintaining the infrastructure.',
    example: 'A developer uses a PaaS like Heroku to deploy their web application. They just upload their code, and Heroku handles the servers, databases, and scaling, letting the developer focus only on the app itself.',
  },
  {
    id: 'packet',
    term: 'Packet',
    slug: 'packet',
    definition: 'A small amount of data sent over a network, such as a LAN or the Internet. Each packet contains the address of its origin and destination, and information that connects it to the other packets in the message.',
    example: 'When you load a webpage, its content is broken down into many small packets that are sent to your computer and reassembled by your browser.',
  },
  {
    id: 'polymorphism',
    term: 'Polymorphism',
    slug: 'polymorphism',
    definition: 'In programming, polymorphism is the provision of a single interface to entities of different types. It allows you to perform a single action in different ways.',
    example: 'A `shape.draw()` method could be used on a `Circle` object to draw a circle, and on a `Square` object to draw a square, demonstrating polymorphism.',
  },
  {
    id: 'port',
    term: 'Port',
    slug: 'port',
    definition: 'In computer networking, a port is a communication endpoint. It is a number used to identify a specific process to which a network message is to be forwarded when it arrives at a server.',
    example: 'Web servers typically listen for HTTP traffic on port 80 and HTTPS traffic on port 443.',
  },
  {
    id: 'protocol',
    term: 'Protocol',
    slug: 'protocol',
    definition: 'A set of rules or procedures for transmitting data between electronic devices, such as computers.',
    example: 'HTTP is the protocol used for transmitting webpages, while SMTP is the protocol for sending emails.',
  },
  {
    id: 'proxy',
    term: 'Proxy',
    slug: 'proxy',
    definition: 'A proxy server is a server application that acts as an intermediary between a client requesting a resource and the server providing that resource.',
    example: 'A company might use a proxy server to filter and monitor its employees\' internet traffic.',
  },
  {
    id: 'pull-request',
    term: 'Pull Request (PR)',
    slug: 'pull-request',
    definition: 'A feature of version control systems (like GitHub) that allows a developer to propose changes to a codebase. It is a request for the repository maintainers to "pull" the developer\'s changes into the main branch.',
    example: 'After finishing the new feature, the developer opened a pull request for the team to review her code.',
  },
  {
    id: 'query',
    term: 'Query',
    slug: 'query',
    definition: 'A query is a request for data or information from a database. Queries can be designed to retrieve specific data, perform calculations, or automate data management tasks.',
    example: 'When you search for products on an e-commerce website, a query is sent to the database to retrieve all items that match your search criteria.',
  },
  {
    id: 'ram',
    term: 'RAM',
    slug: 'ram',
    definition: 'Random Access Memory. A form of computer memory that can be read and changed in any order, typically used to store working data and machine code.',
    example: 'Having more RAM allows you to have more applications open at the same time without slowing down your computer.',
  },
  {
    id: 'refactoring',
    term: 'Refactoring',
    slug: 'refactoring',
    definition: 'The process of restructuring existing computer code—changing the factoring—without changing its external behavior. The goal is to improve code readability and reduce complexity.',
    example: 'The team decided to refactor the old code to make it more efficient and easier to maintain.',
  },
  {
    id: 'regression-testing',
    term: 'Regression Testing',
    slug: 'regression-testing',
    definition: 'A type of software testing which verifies that a recent program or code change has not adversely affected existing features.',
    example: 'After every new build, an automated suite of regression tests is run to ensure that old bugs haven\'t reappeared.',
  },
  {
    id: 'repository',
    term: 'Repository (Repo)',
    slug: 'repository',
    definition: 'A central location in which data is stored and managed. In software development, a repository (or "repo") is a storage location for software packages, often managed by a version control system like Git.',
    example: 'The project\'s source code is stored in a public GitHub repository.',
  },
  {
    id: 'rest',
    term: 'REST',
    slug: 'rest',
    definition: 'Representational State Transfer (REST) is a software architectural style that defines a set of constraints to be used for creating Web services. Web services that conform to the REST architectural style, called RESTful Web services, provide interoperability between computer systems on the Internet.',
    example: 'Many APIs are RESTful. For example, a weather application might send a request to a URL like `api.weather.com/v1/forecast/new-york` to get the weather, which is a simple, stateless RESTful interaction.',
  },
  {
    id: 'router',
    term: 'Router',
    slug: 'router',
    definition: 'A networking device that forwards data packets between computer networks. Routers perform the traffic directing functions on the Internet.',
    example: 'Your home Wi-Fi router connects your devices to the internet.',
  },
  {
    id: 'saas',
    term: 'SaaS',
    slug: 'saas',
    definition: 'Software as a Service (SaaS) is a software distribution model in which a third-party provider hosts applications and makes them available to customers over the Internet. SaaS is one of three main categories of cloud computing, alongside infrastructure as a service (IaaS) and platform as a service (PaaS).',
    example: 'Web-based email services like Gmail, office tools like Google Docs, or customer relationship management software like Salesforce are all examples of SaaS.',
  },
  {
    id: 'scalability',
    term: 'Scalability',
    slug: 'scalability',
    definition: 'The property of a system to handle a growing amount of work by adding resources to the system.',
    example: 'The application was designed for scalability, allowing it to handle a sudden surge in traffic by automatically adding more servers.',
  },
  {
    id: 'sdk',
    term: 'SDK',
    slug: 'sdk',
    definition: 'A Software Development Kit (SDK) is a collection of software development tools in one installable package. They facilitate the creation of applications by having a compiler, debugger and sometimes a software framework.',
    example: 'To build an Android app, developers download the Android SDK, which includes all the libraries and tools needed to write, test, and debug applications for the Android platform.',
  },
  {
    id: 'server',
    term: 'Server',
    slug: 'server',
    definition: 'A computer program or a device that provides functionality for other programs or devices, called "clients". This architecture is called the client–server model.',
    example: 'When you visit a website, your browser (the client) requests the webpage from a web server.',
  },
  {
    id: 'serverless',
    term: 'Serverless',
    slug: 'serverless',
    definition: 'A cloud-computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources. Pricing is based on the actual amount of resources consumed by an application, rather than on pre-purchased units of capacity.',
    example: 'The developer used a serverless architecture with AWS Lambda, so she only paid for the compute time she consumed, without needing to manage any servers.',
  },
  {
    id: 'shell',
    term: 'Shell',
    slug: 'shell',
    definition: 'A user interface for access to an operating system\'s services. In general, operating system shells use either a command-line interface (CLI) or graphical user interface (GUI).',
    example: 'Bash is a popular command-line shell used in many Unix-like systems.',
  },
  {
    id: 'sprint',
    term: 'Sprint',
    slug: 'sprint',
    definition: 'In Agile software development, a sprint is a set period of time during which specific work has to be completed and made ready for review. Sprints are typically one to four weeks long.',
    example: 'The development team planned to complete the user authentication feature during the next two-week sprint.',
  },
  {
    id: 'sql',
    term: 'SQL',
    slug: 'sql',
    definition: 'Structured Query Language (SQL) is a standard language for storing, manipulating and retrieving data in relational databases. It is the standard language for Relational Database Management Systems (RDBMS).',
    example: 'A data analyst writes an SQL query like `SELECT * FROM Customers WHERE Country="Mexico";` to retrieve a list of all customers from Mexico from the company\'s database.',
  },
  {
    id: 'ssh',
    term: 'SSH',
    slug: 'ssh',
    definition: 'Secure Shell or Secure Socket Shell. A network protocol that gives users, particularly system administrators, a secure way to access a computer over an unsecured network.',
    example: 'The developer used SSH to securely connect to the remote server and manage its files.',
  },
  {
    id: 'ssl-tls',
    term: 'SSL/TLS',
    slug: 'ssl-tls',
    definition: 'Transport Layer Security (TLS), and its now-deprecated predecessor, Secure Sockets Layer (SSL), are cryptographic protocols designed to provide communications security over a computer network. They are used in applications such as web browsing, email, and instant messaging.',
    example: 'The "https" and padlock icon in your browser\'s address bar indicate that your connection to the website is secured by SSL/TLS, encrypting the data between you and the server.',
  },
  {
    id: 'stack',
    term: 'Stack',
    slug: 'stack',
    definition: 'In software development, a stack is the set of technologies used to build an application. For example, a web stack might include a specific operating system, web server, database, and programming language.',
    example: 'The MERN stack consists of MongoDB, Express.js, React, and Node.js.',
  },
  {
    id: 'tcp-ip',
    term: 'TCP/IP',
    slug: 'tcp-ip',
    definition: 'Transmission Control Protocol/Internet Protocol (TCP/IP) is a suite of communication protocols used to interconnect network devices on the internet. It specifies how data should be packetized, addressed, transmitted, routed, and received.',
    example: 'TCP/IP is the fundamental language of the internet. When you send an email, TCP breaks it into small packets, and IP makes sure they are sent to the correct address, where TCP reassembles them.',
  },
  {
    id: 'throughput',
    term: 'Throughput',
    slug: 'throughput',
    definition: 'The amount of material or items passing through a system or process. In networking, it is the rate of successful message delivery over a communication channel.',
    example: 'We measured the network\'s throughput to see how much data we could actually transfer per second.',
  },
  {
    id: 'token',
    term: 'Token',
    slug: 'token',
    definition: 'In authentication, a token is a piece of data that represents a user\'s identity and is used to access protected resources.',
    example: 'After logging in, the server gives the client an access token to use for future API requests.',
  },
  {
    id: 'ui',
    term: 'UI',
    slug: 'ui',
    definition: 'The User Interface (UI) is the point of human-computer interaction and communication in a device. This can include display screens, keyboards, a mouse, and the appearance of a desktop. It is also the way through which a user interacts with an application or a website.',
    example: 'The UI of a mobile app includes all the buttons you tap, the text you read, the images you see, and the way you swipe through different screens.',
  },
  {
    id: 'unit-testing',
    term: 'Unit Testing',
    slug: 'unit-testing',
    definition: 'A level of software testing where individual units/components of a software are tested. The purpose is to validate that each unit of the software performs as designed.',
    example: 'The developer wrote a unit test for the function that calculates sales tax to ensure it returned the correct amount.',
  },
  {
    id: 'uptime',
    term: 'Uptime',
    slug: 'uptime',
    definition: 'A measure of the time a machine, typically a computer, has been left running and operational. It is often used as a measure of computer operating system reliability or stability.',
    example: 'The server has an uptime of 99.999%, meaning it is almost never down.',
  },
  {
    id: 'url',
    term: 'URL',
    slug: 'url',
    definition: 'Uniform Resource Locator. A reference (an address) to a resource on the Internet. A URL has two main components: a protocol identifier and a resource name.',
    example: 'To visit the Google homepage, you type its URL, `https://www.google.com`, into your browser\'s address bar.',
  },
  {
    id: 'ux',
    term: 'UX',
    slug: 'ux',
    definition: 'User Experience (UX) refers to a person\'s emotions and attitudes about using a particular product, system or service. It includes the practical, experiential, affective, meaningful and valuable aspects of human-computer interaction and product ownership.',
    example: 'A good UX design for an e-commerce site means the process of finding a product, adding it to the cart, and checking out is smooth, intuitive, and frustration-free for the user.',
  },
  {
    id: 'version-control',
    term: 'Version Control',
    slug: 'version-control',
    definition: 'A system that records changes to a file or set of files over time so that you can recall specific versions later.',
    example: 'Git is the most popular version control system, allowing teams to track changes in their code and collaborate effectively.',
  },
  {
    id: 'virtual-machine',
    term: 'Virtual Machine',
    slug: 'virtual-machine',
    definition: 'A Virtual Machine (VM) is a digital version of a physical computer. A VM is a computer file, typically called an image, that behaves like an actual computer. It can run in a window as a separate computing environment, often to run a different operating system.',
    example: 'A developer might use a virtual machine on their Mac to run a full version of Windows, allowing them to test their software on both operating systems without needing a second computer.',
  },
  {
    id: 'vpn',
    term: 'VPN',
    slug: 'vpn',
    definition: 'A Virtual Private Network (VPN) extends a private network across a public network and enables users to send and receive data across shared or public networks as if their computing devices were directly connected to the private network.',
    example: 'An employee working from home uses a VPN to securely connect to their company\'s internal network, allowing them to access files and systems as if they were in the office.',
  },
  {
    id: 'wan',
    term: 'WAN',
    slug: 'wan',
    definition: 'A Wide Area Network (WAN) is a telecommunications network that extends over a large geographic area for the primary purpose of computer networking. WANs are often established with leased telecommunication circuits.',
    example: 'The Internet is the largest WAN, connecting billions of computers globally. A large corporation also uses a WAN to connect its office branches in different cities.',
  },
  {
    id: 'waterfall-model',
    term: 'Waterfall Model',
    slug: 'waterfall-model',
    definition: 'A sequential design process, used in software development processes, in which progress is seen as flowing steadily downwards (like a waterfall) through the phases of conception, initiation, analysis, design, construction, testing, deployment and maintenance.',
    example: 'The project was managed using the Waterfall model, with each phase being completed before the next one began.',
  },
  {
    id: 'websocket',
    term: 'WebSocket',
    slug: 'websocket',
    definition: 'A computer communications protocol, providing full-duplex communication channels over a single TCP connection. It is located at layer 7 in the OSI model and is used for creating real-time applications.',
    example: 'A live chat application uses WebSockets to instantly push new messages to all connected users.',
  },
  {
    id: 'xml',
    term: 'XML',
    slug: 'xml',
    definition: 'Extensible Markup Language (XML) is a markup language and file format for storing, transmitting, and reconstructing arbitrary data. It defines a set of rules for encoding documents in a format that is both human-readable and machine-readable.',
    example: 'XML is often used for configuration files or for transmitting data between different systems. For example, an RSS feed uses an XML file to list the latest articles from a website.',
  },
  {
    id: 'yaml',
    term: 'YAML',
    slug: 'yaml',
    definition: 'YAML (YAML Ain\'t Markup Language) is a human-readable data-serialization language. It is commonly used for configuration files and in applications where data is being stored or transmitted.',
    example: 'Many modern applications use YAML for their configuration files because its syntax is clean and easy to read, using indentation to denote structure, e.g. `docker-compose.yml` or Kubernetes configs.',
  },
  {
    id: 'zip',
    term: 'ZIP',
    slug: 'zip',
    definition: 'ZIP is an archive file format that supports lossless data compression. A .zip file may contain one or more files or directories that may have been compressed. It is a common way to package and transport files.',
    example: 'To send a folder of photos via email, you might first compress it into a single .zip file to reduce the overall size and make it a single attachment.',
  },
  {
    id: 'backlog',
    term: 'Backlog',
    slug: 'backlog',
    definition: 'In project management, a backlog is a list of tasks or features that need to be completed. In Agile, this is often the product backlog, which is a prioritized list of work for the development team.',
    example: 'The team reviewed the product backlog to decide which features to work on in the next sprint.',
  },
  {
    id: 'aar-android-archive',
    term: 'AAR (Android Archive)',
    slug: 'aar-android-archive',
    definition: 'A package file that contains compiled Android libraries, resources, and manifests, used for distributing reusable Android components.',
    example: 'Instead of copying code, a developer includes a third-party image loading library in their project by adding its AAR file as a dependency.',
  },
  {
    id: 'abi-application-binary-interface',
    term: 'ABI (Application Binary Interface)',
    slug: 'abi-application-binary-interface',
    definition: 'Defines how software components interact at the binary level—calling conventions, data types, register usage, etc. Critical for cross-platform compatibility.',
    example: 'For an Android app with C++ code to run on both ARM and x86 processors, the developer must build separate native libraries for each target ABI.',
  },
  {
    id: 'abr-adaptive-bitrate-streaming',
    term: 'ABR (Adaptive Bitrate Streaming)',
    slug: 'abr-adaptive-bitrate-streaming',
    definition: 'A streaming method where video/audio quality automatically adjusts to the user’s internet speed to prevent buffering.',
    example: 'When you watch Netflix, the video quality might start low and then become sharp and clear. That\'s ABR adjusting the stream to your network connection.',
  },
  {
    id: 'acid-properties',
    term: 'ACID Properties',
    slug: 'acid-properties',
    definition: 'A set of rules ensuring reliable database transactions: Atomicity, Consistency, Isolation, Durability.',
    example: 'When you transfer money, the bank\'s database uses ACID properties to ensure the money is successfully withdrawn from one account and deposited into another as a single, indivisible operation.',
  },
  {
    id: 'ack-acknowledgment-packet',
    term: 'ACK (Acknowledgment Packet)',
    slug: 'ack-acknowledgment-packet',
    definition: 'A signal sent in networking indicating that data was successfully received.',
    example: 'When you send a file, your computer waits for an ACK from the server for each piece of data. If it doesn\'t get one, it re-sends that piece.',
  },
  {
    id: 'acl-access-control-list',
    term: 'ACL (Access Control List)',
    slug: 'acl-access-control-list',
    definition: 'A permission list specifying which users or systems can access certain files, directories, or services.',
    example: 'A network administrator configures a router\'s ACL to block all traffic from a specific IP address to enhance security.',
  },
  {
    id: 'acpi-advanced-configuration-and-power-interface',
    term: 'ACPI (Advanced Configuration and Power Interface)',
    slug: 'acpi-advanced-configuration-and-power-interface',
    definition: 'A standard that allows the OS to control hardware power states—sleep, hibernate, CPU throttling, etc.',
    example: 'When you close your laptop lid and it goes to sleep, the ACPI standard is what allows the operating system to manage that power-saving state.',
  },
  {
    id: 'active-directory-ad',
    term: 'Active Directory (AD)',
    slug: 'active-directory-ad',
    definition: 'Microsoft’s centralized directory service used for managing users, computers, credentials, and policies in enterprise networks.',
    example: 'In a large company, IT uses Active Directory to create a new employee\'s account, giving them access to the corporate network, email, and shared files with a single login.',
  },
  {
    id: 'ad-hoc-network',
    term: 'Ad Hoc Network',
    slug: 'ad-hoc-network',
    definition: 'A temporary wireless network created without routers or infrastructure, often peer-to-peer.',
    example: 'During a power outage, students created an ad hoc network with their laptops to share files directly without needing a Wi-Fi router.',
  },
  {
    id: 'address-bus',
    term: 'Address Bus',
    slug: 'address-bus',
    definition: 'A communication system in a CPU that transfers memory addresses, determining which memory location to access.',
    example: 'When your computer needs to read data, the CPU sends the memory address of that data over the address bus to the RAM.',
  },
  {
    id: 'address-space-layout-randomization-aslr',
    term: 'Address Space Layout Randomization (ASLR)',
    slug: 'address-space-layout-randomization-aslr',
    definition: 'A security technique that randomizes memory address locations to defend against buffer overflows.',
    example: 'Modern operating systems use ASLR to make it harder for malware to predict where to inject malicious code into a running application.',
  },
  {
    id: 'aes-advanced-encryption-standard',
    term: 'AES (Advanced Encryption Standard)',
    slug: 'aes-advanced-encryption-standard',
    definition: 'A widely used symmetric encryption algorithm with 128-, 192-, or 256-bit keys, used in secure communications.',
    example: 'The Wi-Fi Protected Access (WPA2/3) standard uses AES to encrypt the data transmitted between your device and the router.',
  },
  {
    id: 'aft-android-file-transfer',
    term: 'AFT (Android File Transfer)',
    slug: 'aft-android-file-transfer',
    definition: 'A protocol and tool for transferring files between Android devices and computers.',
    example: 'To move photos from his Android phone to his MacBook, he used the Android File Transfer application.',
  },
  {
    id: 'agile-methodology',
    term: 'Agile Methodology',
    slug: 'agile-methodology',
    definition: 'A software development approach emphasizing adaptability, continuous delivery, and iterative improvement.',
    example: 'Our software team follows the Agile methodology, working in two-week sprints to deliver new features incrementally and respond quickly to customer feedback.'
  },
  {
    id: 'aidl-android-interface-definition-language',
    term: 'AIDL (Android Interface Definition Language)',
    slug: 'aidl-android-interface-definition-language',
    definition: 'A framework in Android for defining communication interfaces between processes.',
    example: 'A music player app uses AIDL to allow other apps to control playback (play, pause, skip) even when they are running in separate processes.',
  },
  {
    id: 'ai-model-quantization',
    term: 'AI Model Quantization',
    slug: 'ai-model-quantization',
    definition: 'Reducing precision (e.g., from float32 to int8) to make AI models smaller and faster with minimal accuracy loss.',
    example: 'To run an image recognition model on a smartphone, developers use quantization to shrink the model size, making it faster and more battery-efficient.',
  },
  {
    id: 'aio-all-in-one-computer',
    term: 'AIO (All-in-One Computer)',
    slug: 'aio-all-in-one-computer',
    definition: 'A computer where the display and internal hardware are combined into one chassis.',
    example: 'The Apple iMac is a well-known example of an AIO computer, with all its components housed behind the screen.',
  },
  {
    id: 'aiops-artificial-intelligence-for-it-operations',
    term: 'AIOps (Artificial Intelligence for IT Operations)',
    slug: 'aiops-artificial-intelligence-for-it-operations',
    definition: 'The application of machine learning to automate IT monitoring, alerting, and incident response.',
    example: 'An AIOps platform analyzed thousands of server logs, detected an unusual pattern, and automatically alerted the IT team to a potential failure before it happened.',
  },
  {
    id: 'airgap-network',
    term: 'Airgap Network',
    slug: 'airgap-network',
    definition: 'A network completely isolated with no internet or external connectivity, used for maximum security.',
    example: 'Critical infrastructure systems, like those at a nuclear power plant, are kept on an airgap network to protect them from external cyberattacks.',
  },
  {
    id: 'ajax-asynchronous-javascript-and-xml',
    term: 'AJAX (Asynchronous JavaScript and XML)',
    slug: 'ajax-asynchronous-javascript-and-xml',
    definition: 'A web technique that allows updating parts of a webpage without reloading the entire page.',
    example: 'When you like a post on social media and the like count updates instantly, that is an AJAX request working in the background.',
  },
  {
    id: 'alarm-manager-android',
    term: 'Alarm Manager (Android)',
    slug: 'alarm-manager-android',
    definition: 'A system service for scheduling time-based operations even when the app is not running.',
    example: 'A calendar app uses the Alarm Manager to schedule a notification that will fire at the exact time of a user\'s appointment.',
  },
  {
    id: 'algorithmic-complexity',
    term: 'Algorithmic Complexity',
    slug: 'algorithmic-complexity',
    definition: 'A formal measure (Big-O notation) describing how the time or space requirement of an algorithm scales.',
    example: 'An algorithm with O(n²) complexity will become significantly slower as the input size (n) grows compared to one with O(n) complexity.',
  },
  {
    id: 'alias-record-dns',
    term: 'Alias Record (DNS)',
    slug: 'alias-record-dns',
    definition: 'A DNS entry that points one domain to another, often using CNAME.',
    example: 'The administrator created a CNAME alias record so that "www.example.com" points to "example.com".',
  },
  {
    id: 'allocator-memory-allocator',
    term: 'Allocator (Memory Allocator)',
    slug: 'allocator-memory-allocator',
    definition: 'The low-level system that handles allocating and freeing memory blocks in programs.',
    example: 'In C++, the `new` keyword calls the memory allocator to find and reserve a block of memory for a new object.',
  },
  {
    id: 'amp-accelerated-mobile-pages',
    term: 'AMP (Accelerated Mobile Pages)',
    slug: 'amp-accelerated-mobile-pages',
    definition: 'A lightweight web framework designed to load extremely fast on mobile devices.',
    example: 'News articles that use AMP often appear with a lightning bolt icon in search results and load almost instantly when clicked.',
  },
  {
    id: 'amqp-advanced-message-queuing-protocol',
    term: 'AMQP (Advanced Message Queuing Protocol)',
    slug: 'amqp-advanced-message-queuing-protocol',
    definition: 'A binary protocol enabling reliable message delivery between distributed applications.',
    example: 'Financial systems use AMQP for guaranteed message delivery between different trading and processing services.',
  },
  {
    id: 'android-runtime-art',
    term: 'Android Runtime (ART)',
    slug: 'android-runtime-art',
    definition: 'The modern Android application execution environment replacing Dalvik, using ahead-of-time compilation.',
    example: 'Thanks to ART, apps on modern Android devices often launch faster and run more efficiently because they are compiled to native code upon installation.',
  },
  {
    id: 'anomaly-detection',
    term: 'Anomaly Detection',
    slug: 'anomaly-detection',
    definition: 'The AI/ML process of detecting unusual patterns indicating errors, attacks, or system failures.',
    example: 'A credit card company uses anomaly detection to flag a transaction as potentially fraudulent if it occurs in a different country from the user\'s usual location.',
  },
  {
    id: 'antimalware-engine',
    term: 'Antimalware Engine',
    slug: 'antimalware-engine',
    definition: 'A system component that analyzes files/processes to detect viruses and malicious behavior.',
    example: 'Windows Defender\'s antimalware engine scanned the downloaded file and quarantined it after identifying it as a known trojan.',
  },
  {
    id: 'aot-compilation-ahead-of-time',
    term: 'AOT Compilation (Ahead-of-Time)',
    slug: 'aot-compilation-ahead-of-time',
    definition: 'Compiling code to machine language before execution, improving performance and startup time.',
    example: 'The .NET Core runtime uses AOT compilation to convert an application into a self-contained, high-performance executable.',
  },
  {
    id: 'api-rate-limiting',
    term: 'API Rate Limiting',
    slug: 'api-rate-limiting',
    definition: 'Restricting how often clients can hit an API to prevent abuse or server overload.',
    example: 'The Twitter API has a rate limit that allows a developer to make only a certain number of requests every 15 minutes.',
  },
  {
    id: 'apk-android-package-kit',
    term: 'APK (Android Package Kit)',
    slug: 'apk-android-package-kit',
    definition: 'The packaged file format used to distribute and install Android applications.',
    example: 'To install an app from outside the Google Play Store, you need to download and open its APK file.',
  },
  {
    id: 'app-bundle-aab',
    term: 'App Bundle (AAB)',
    slug: 'app-bundle-aab',
    definition: 'A publishing format that allows Google Play to generate optimized APKs per device configuration.',
    example: 'Developers upload a single AAB to Google Play, which then delivers smaller, optimized APKs to users containing only the resources for their specific screen size and language.',
  },
  {
    id: 'app-sandbox-android',
    term: 'App Sandbox (Android)',
    slug: 'app-sandbox-android',
    definition: 'A security feature isolating apps from one another, protecting data and system integrity.',
    example: 'Because of the app sandbox, a malicious game you installed cannot access the private data stored by your banking app.',
  },
  {
    id: 'application-layer-osi-model',
    term: 'Application Layer (OSI Model)',
    slug: 'application-layer-osi-model',
    definition: 'Layer 7; the closest to the user, enabling HTTP, FTP, SMTP, DNS, etc.',
    example: 'When you use a web browser, you are interacting with protocols at the Application Layer, such as HTTP to request webpages.',
  },
  {
    id: 'application-pool-iis',
    term: 'Application Pool (IIS)',
    slug: 'application-pool-iis',
    definition: 'An isolated environment where web applications run, improving security and stability.',
    example: 'The admin configured each website to run in its own application pool, so if one site crashed, it wouldn\'t bring down the others on the same server.',
  },
  {
    id: 'archive-bit',
    term: 'Archive Bit',
    slug: 'archive-bit',
    definition: 'A file attribute indicating whether the file has been backed up.',
    example: 'Backup software checks the archive bit on files to determine which ones have changed since the last backup and need to be saved again.',
  },
  {
    id: 'arm-architecture',
    term: 'ARM Architecture',
    slug: 'arm-architecture',
    definition: 'A low-power processor instruction set used in mobile, IoT, and some server hardware.',
    example: 'Most smartphones and tablets, including the iPhone and many Android devices, are powered by ARM-based processors due to their energy efficiency.',
  },
  {
    id: 'arp-address-resolution-protocol',
    term: 'ARP (Address Resolution Protocol)',
    slug: 'arp-address-resolution-protocol',
    definition: 'Maps IP addresses to physical MAC addresses on local networks.',
    example: 'When your computer wants to send data to another device on your Wi-Fi, it uses ARP to find the destination device\'s physical MAC address.',
  },
  {
    id: 'artifact-ci-cd',
    term: 'Artifact (CI/CD)',
    slug: 'artifact-ci-cd',
    definition: 'Any output from the build process—executables, libraries, Docker images, bundles.',
    example: 'After a successful build, the CI/CD pipeline stores the compiled .apk file as an artifact, ready for testing and deployment.',
  },
  {
    id: 'asgi-asynchronous-server-gateway-interface',
    term: 'ASGI (Asynchronous Server Gateway Interface)',
    slug: 'asgi-asynchronous-server-gateway-interface',
    definition: 'A Python standard supporting asynchronous web applications (successor to WSGI).',
    example: 'Web frameworks like FastAPI use ASGI to handle many concurrent connections efficiently, making them ideal for applications with WebSockets or long-polling.',
  },
  {
    id: 'asimd-advanced-simd-neon-instructions',
    term: 'ASIMD (Advanced SIMD / Neon Instructions)',
    slug: 'asimd-advanced-simd-neon-instructions',
    definition: 'ARM’s vector processing extension for high-performance parallel computation.',
    example: 'A mobile video editing app uses ASIMD instructions to speed up the process of applying filters to video frames.',
  },
  {
    id: 'asm-js',
    term: 'ASM.js',
    slug: 'asm-js',
    definition: 'A low-level subset of JavaScript designed for high-performance web applications.',
    example: 'Game engines were sometimes compiled to asm.js to run complex 3D graphics in a web browser before WebAssembly became widespread.',
  },
  {
    id: 'asn-1-abstract-syntax-notation-one',
    term: 'ASN.1 (Abstract Syntax Notation One)',
    slug: 'asn-1-abstract-syntax-notation-one',
    definition: 'A schema language used in telecom, cryptography, and networking for encoding structured data.',
    example: 'SSL/TLS certificates use ASN.1 to define the structure of the certificate\'s data, such as the public key and issuer information.',
  },
  {
    id: 'asp-net-core-middleware',
    term: 'ASP.NET Core Middleware',
    slug: 'asp-net-core-middleware',
    definition: 'Components that process HTTP requests/responses in the ASP.NET pipeline.',
    example: 'An ASP.NET developer added a middleware component to log every incoming HTTP request before it reaches the application logic.',
  },
  {
    id: 'asset-pipeline',
    term: 'Asset Pipeline',
    slug: 'asset-pipeline',
    definition: 'A build system for processing static files (CSS, JS, images) into optimized bundles.',
    example: 'The Ruby on Rails asset pipeline automatically combines and minifies all JavaScript files into a single, smaller file to improve page load times.',
  },
  {
    id: 'asymmetric-encryption',
    term: 'Asymmetric Encryption',
    slug: 'asymmetric-encryption',
    definition: 'Cryptography using public and private keys for secure message exchange.',
    example: 'When you send an encrypted email using PGP, you use the recipient\'s public key to encrypt it, and they use their private key to decrypt it.',
  },
  {
    id: 'binary-mapping',
    term: 'Binary Mapping',
    slug: 'binary-mapping',
    definition: 'The process of associating binary data with a specific structure or meaning, such as mapping a binary file into a program\'s memory space.',
    example: 'The operating system performs binary mapping to load the executable file into memory before running it.'
  },
  {
    id: 'binary-merge',
    term: 'Binary Merge',
    slug: 'binary-merge',
    definition: 'The process of combining two or more binary files or data streams into a single one, often requiring a specific algorithm to handle conflicts or overlaps.',
    example: 'Version control systems sometimes have to perform a binary merge when two developers modify the same image file.'
  },
  {
    id: 'binary-mode',
    term: 'Binary Mode',
    slug: 'binary-mode',
    definition: 'A mode for file I/O operations where data is read and written as raw bytes, without any text encoding or line-ending translation.',
    example: 'To correctly copy an image file, you must open both the source and destination files in binary mode.'
  },
  {
    id: 'binary-module',
    term: 'Binary Module',
    slug: 'binary-module',
    definition: 'A pre-compiled software module or library that is distributed in a binary format and can be linked into a larger application.',
    example: 'He downloaded a binary module for the physics engine to avoid having to compile it from source.'
  },
  {
    id: 'binary-model',
    term: 'Binary Model',
    slug: 'binary-model',
    definition: 'In machine learning, a classification model that predicts one of two possible outcomes (e.g., yes/no, spam/not spam).',
    example: 'The team trained a binary model to detect fraudulent transactions.'
  },
  {
    id: 'binary-object',
    term: 'Binary Object',
    slug: 'binary-object',
    definition: 'A file or piece of data that contains compiled code or non-textual data. See also BLOB.',
    example: 'The linker combines several binary object files to create the final executable program.'
  },
  {
    id: 'binary-operand',
    term: 'Binary Operand',
    slug: 'binary-operand',
    definition: 'An operand in a computer instruction that is binary data.',
    example: 'The bitwise AND instruction takes two binary operands.'
  },
  {
    id: 'binary-operation',
    term: 'Binary Operation',
    slug: 'binary-operation',
    definition: 'An operation that takes two operands, such as addition or subtraction. Also refers to bitwise operations on binary numbers.',
    example: 'The CPU\'s arithmetic logic unit (ALU) is responsible for performing binary operations.'
  },
  {
    id: 'binary-packet',
    term: 'Binary Packet',
    slug: 'binary-packet',
    definition: 'A network packet whose payload is composed of binary data rather than plain text.',
    example: 'The gRPC protocol uses binary packets for efficient communication between services.'
  },
  {
    id: 'binary-parser',
    term: 'Binary Parser',
    slug: 'binary-parser',
    definition: 'A program or library designed to read and interpret the structure of a binary file format.',
    example: 'He wrote a binary parser to extract metadata from the JPEG image files.'
  },
  {
    id: 'binary-patch',
    term: 'Binary Patch',
    slug: 'binary-patch',
    definition: 'A small file containing the differences between two binary files, used to update an old version to a new one. Also known as a binary diff.',
    example: 'The video game update was delivered as a binary patch to reduce the download size.'
  },
  {
    id: 'binary-payload',
    term: 'Binary Payload',
    slug: 'binary-payload',
    definition: 'The portion of a data packet or message that contains the actual binary data being transmitted, as opposed to headers or metadata.',
    example: 'The WebSocket message contained a binary payload representing a compressed image.'
  },
  {
    id: 'binary-record',
    term: 'Binary Record',
    slug: 'binary-record',
    definition: 'A record in a database or file that is stored in a binary format for efficiency.',
    example: 'The high-performance database stored each entry as a compact binary record.'
  },
  {
    id: 'binary-sensor',
    term: 'Binary Sensor',
    slug: 'binary-sensor',
    definition: 'A sensor that has only two states, such as on/off, open/closed, or occupied/unoccupied.',
    example: 'A door sensor is a type of binary sensor used in home automation systems.'
  },
  {
    id: 'binary-set',
    term: 'Binary Set',
    slug: 'binary-set',
    definition: 'A collection of binary files or components that are treated as a single unit.',
    example: 'The installer contained a binary set of all the libraries needed to run the application.'
  },
  {
    id: 'binary-symbol',
    term: 'Binary Symbol',
    slug: 'binary-symbol',
    definition: 'In compiled code, a name (for a function or variable) that has an address in the binary file. These are used by the linker and debugger.',
    example: 'The debugger used the binary symbol table to map the memory address back to the original function name.'
  },
  {
    id: 'binary-system',
    term: 'Binary System',
    slug: 'binary-system',
    definition: 'A number system that uses only two digits, 0 and 1. It is the fundamental basis for all modern computing.',
    example: 'All data inside a computer is ultimately represented using the binary system.'
  },
  {
    id: 'binary-tag',
    term: 'Binary Tag',
    slug: 'binary-tag',
    definition: 'A tag or piece of metadata in a binary file format used to identify a block of data.',
    example: 'The TIFF file format uses binary tags to store information about the image, like its width and height.'
  },
  {
    id: 'binary-token',
    term: 'Binary Token',
    slug: 'binary-token',
    definition: 'An authentication token or credential that is represented in a compact binary format, such as a JWT or a Kerberos ticket.',
    example: 'The system used a binary token for authentication to minimize network overhead.'
  },
  {
    id: 'binary-tree-map',
    term: 'Binary Tree Map',
    slug: 'binary-tree-map',
    definition: 'A map or dictionary data structure that is implemented using a binary search tree, which keeps the keys sorted.',
    example: 'A `TreeMap` in Java is an example of a binary tree map.'
  },
  {
    id: 'binary-version',
    term: 'Binary Version',
    slug: 'binary-version',
    definition: 'The version number associated with a compiled, binary release of a piece of software.',
    example: 'He checked the binary version of the library to see if it contained the latest security patch.'
  },
  {
    id: 'binlog',
    term: 'Binlog',
    slug: 'binlog',
    definition: 'Short for binary log. In database systems like MySQL, a log file that contains a record of all changes to the database, used for replication and recovery.',
    example: 'The database administrator used the binlog to restore the database to a point in time before the accidental deletion occurred.'
  },
  {
    id: 'bin-packing',
    term: 'Bin Packing',
    slug: 'bin-packing',
    definition: 'An optimization problem in computer science where items of different sizes must be packed into a finite number of bins or containers in a way that minimizes the number of bins used.',
    example: 'A cloud orchestration system uses a bin packing algorithm to efficiently place virtual machines onto physical hosts.'
  },
  {
    id: 'bin-sort',
    term: 'Bin Sort',
    slug: 'bin-sort',
    definition: 'A sorting algorithm that works by distributing elements into a number of "bins." Each bin is then sorted individually, either using a different sorting algorithm, or by recursively applying the bin sorting algorithm. Also known as bucket sort.',
    example: 'Bin sort is effective when the input data is uniformly distributed over a range.'
  },
  {
    id: 'bitbake',
    term: 'BitBake',
    slug: 'bitbake',
    definition: 'A make-like build tool that is the core of the Yocto Project, used for building custom embedded Linux distributions.',
    example: 'The embedded systems engineer wrote a BitBake recipe to include a custom application in their Linux build.'
  },
  {
    id: 'bit-bang',
    term: 'Bit Bang',
    slug: 'bit-bang',
    definition: 'A technique for serial communication where the software directly controls the state of the I/O pins, "banging" out one bit at a time. It is used when a hardware serial interface is not available.',
    example: 'He implemented an I2C driver in software using the bit-bang method on the microcontroller.'
  },
  {
    id: 'bit-bank',
    term: 'Bit Bank',
    slug: 'bit-bank',
    definition: 'A non-standard term, likely referring to a bank of memory or a bit array.',
    example: 'The graphics card had a large bit bank for storing texture data.'
  },
  {
    id: 'bit-block',
    term: 'Bit Block',
    slug: 'bit-block',
    definition: 'A fixed-size block of bits. The term is general and can refer to a block in a storage device, a network packet, or a data structure.',
    example: 'The encryption algorithm operates on a 128-bit block of data at a time.'
  },
  {
    id: 'bit-bridge',
    term: 'Bit Bridge',
    slug: 'bit-bridge',
    definition: 'A non-standard term, possibly referring to a hardware or software component that bridges two different binary systems or protocols.',
    example: 'They needed a custom bit bridge to connect the legacy 8-bit system to the modern 64-bit bus.'
  },
  {
    id: 'bitbucket-error',
    term: 'Bitbucket Error',
    slug: 'bitbucket-error',
    definition: 'An error message or condition originating from the Bitbucket version control hosting service, such as a failed pipeline or a permissions issue.',
    example: 'The developer received a Bitbucket error indicating that the build had failed due to a test case not passing.'
  },
  {
    id: 'bit-cell',
    term: 'Bit Cell',
    slug: 'bit-cell',
    definition: 'The physical component in a memory chip (like DRAM or SRAM) that stores a single bit of information.',
    example: 'Each bit cell in a DRAM chip consists of a transistor and a capacitor.'
  },
  {
    id: 'bit-clustering',
    term: 'Bit Clustering',
    slug: 'bit-clustering',
    definition: 'A data analysis technique that groups similar items together based on their binary representations or bit patterns.',
    example: 'The security analyst used bit clustering to find families of related malware samples.'
  },
  {
    id: 'bit-converter',
    term: 'Bit Converter',
    slug: 'bit-converter',
    definition: 'A tool or function that converts data from one binary representation to another, such as from an integer to a sequence of bits.',
    example: 'He used an online bit converter to see the binary representation of a floating-point number.'
  },
  {
    id: 'bit-copy',
    term: 'Bit Copy',
    slug: 'bit-copy',
    definition: 'An exact, bit-for-bit copy of a piece of data or a storage device. Also known as a binary copy.',
    example: 'A disk imaging tool performs a bit copy of a hard drive to create a perfect clone.'
  },
  {
    id: 'bit-counter',
    term: 'Bit Counter',
    slug: 'bit-counter',
    definition: 'A circuit or algorithm that counts the number of set bits (1s) in a binary number. Also known as a population count.',
    example: 'Some processors have a dedicated instruction to perform a fast bit counter operation.'
  },
  {
    id: 'bit-cycle',
    term: 'Bit Cycle',
    slug: 'bit-cycle',
    definition: 'The time it takes to transmit a single bit over a communication channel.',
    example: 'At a baud rate of 9600, the bit cycle is approximately 104 microseconds.'
  },
  {
    id: 'bitdefender',
    term: 'Bitdefender',
    slug: 'bitdefender',
    definition: 'A popular antivirus and cybersecurity software company.',
    example: 'He installed Bitdefender on his new computer to protect it from malware.'
  },
  {
    id: 'bit-domain',
    term: 'Bit Domain',
    slug: 'bit-domain',
    definition: 'A non-standard term, possibly referring to the set of all possible values a bit can have (0 and 1), or a specific area of a system dealing with bit-level operations.',
    example: 'The developer was working in the bit domain, optimizing the low-level networking code.'
  },
  {
    id: 'bit-driver',
    term: 'Bit Driver',
    slug: 'bit-driver',
    definition: 'A low-level software driver that interacts with hardware by directly manipulating individual bits in its control registers.',
    example: 'Writing a bit driver for the custom hardware was a complex task requiring deep knowledge of the device\'s specifications.'
  },
  {
    id: 'bit-editor',
    term: 'Bit Editor',
    slug: 'bit-editor',
    definition: 'A specialized editor, often a hex editor, that allows a user to view and modify the individual bits and bytes of a file.',
    example: 'The reverse engineer used a bit editor to patch the executable and bypass its license check.'
  },
  {
    id: 'bit-engine',
    term: 'Bit Engine',
    slug: 'bit-engine',
    definition: 'A non-standard term, likely referring to a software engine or hardware component that is highly optimized for bit-level operations.',
    example: 'The compression library used a custom bit engine to achieve a high compression ratio.'
  },
  {
    id: 'bit-error-rate',
    term: 'Bit Error Rate (BER)',
    slug: 'bit-error-rate',
    definition: 'The number of bit errors divided by the total number of transferred bits during a studied time interval. BER is a unitless performance measure.',
    example: 'The BER of the satellite link increased during the heavy rain, causing some data corruption.'
  },
  {
    id: 'bit-field',
    term: 'Bit Field',
    slug: 'bit-field',
    definition: 'A data structure in programming that allows you to pack multiple smaller integer values into a single machine word, using a specific number of bits for each value.',
    example: 'The network protocol used a bit field in its header to store several boolean flags in a single byte.'
  },
  {
    id: 'bit-file',
    term: 'Bit File',
    slug: 'bit-file',
    definition: 'A file that contains the configuration data for a Field-Programmable Gate Array (FPGA).',
    example: 'After compiling the VHDL code, the FPGA development tool generated a bit file that could be loaded onto the device.'
  },
  {
    id: 'bit-flash',
    term: 'Bit Flash',
    slug: 'bit-flash',
    definition: 'The process of programming a hardware device, especially an FPGA, with a bit file.',
    example: 'He performed a bit flash to update the firmware on the custom hardware board.'
  },
  {
    id: 'bit-flow',
    term: 'Bit Flow',
    slug: 'bit-flow',
    definition: 'A non-standard term, likely referring to the flow or stream of bits in a digital communication system.',
    example: 'The oscilloscope was used to visualize the bit flow on the serial communication line.'
  },
  {
    id: 'bit-frame',
    term: 'Bit Frame',
    slug: 'bit-frame',
    definition: 'A sequence of bits that forms a single unit of data in a digital communication protocol. A synonym for a data frame.',
    example: 'An Ethernet bit frame contains headers, a payload, and a checksum.'
  },
  {
    id: 'bit-graph',
    term: 'Bit Graph',
    slug: 'bit-graph',
    definition: 'A graph data structure where nodes or edges are represented by individual bits, often in a bit matrix, for space efficiency.',
    example: 'He used a bit graph to represent the social network connections for a very large number of users.'
  },
  {
    id: 'bit-grid',
    term: 'Bit Grid',
    slug: 'bit-grid',
    definition: 'A two-dimensional array of bits. See Binary Grid.',
    example: 'Conway\'s Game of Life can be implemented using a bit grid to represent the state of the cells.'
  },
  {
    id: 'bit-group',
    term: 'Bit Group',
    slug: 'bit-group',
    definition: 'A collection of bits that are treated as a single unit, such as a byte or a word.',
    example: 'The processor reads data from memory in 64-bit groups.'
  },
  {
    id: 'bit-hub',
    term: 'Bit Hub',
    slug: 'bit-hub',
    definition: 'A non-standard term, possibly slang for a central repository of binary artifacts, like Bitbucket or Artifactory.',
    example: 'The team pushed their compiled libraries to the central bit hub after each successful build.'
  },
  {
    id: 'bit-index',
    term: 'Bit Index',
    slug: 'bit-index',
    definition: 'An index data structure that uses bitmaps to efficiently retrieve data. See Bitmap Index.',
    example: 'The data warehouse used a bit index on the low-cardinality "country" column.'
  },
  {
    id: 'bit-injection',
    term: 'Bit Injection',
    slug: 'bit-injection',
    definition: 'A type of attack or fault injection where an attacker intentionally flips a bit in a memory or data stream to cause a malfunction or gain an advantage.',
    example: 'By using a precisely timed bit injection attack, the researchers were able to bypass the security checks.'
  },
  {
    id: 'bit-kernel',
    term: 'Bit Kernel',
    slug: 'bit-kernel',
    definition: 'A non-standard term, possibly referring to a very small, minimal operating system kernel designed for embedded systems.',
    example: 'The IoT device ran a custom bit kernel that was only a few kilobytes in size.'
  },
  {
    id: 'bit-layer',
    term: 'Bit Layer',
    slug: 'bit-layer',
    definition: 'A non-standard term, likely referring to the physical layer (Layer 1) of the OSI model, which deals with the transmission of raw bits.',
    example: 'The network engineer was troubleshooting a problem at the bit layer, checking the cable for damage.'
  },
  {
    id: 'bit-line',
    term: 'Bit Line',
    slug: 'bit-line',
    definition: 'In memory chip design, a wire that connects a column of bit cells, used for reading or writing data.',
    example: 'To read a bit, the corresponding word line and bit line are activated.'
  },
  {
    id: 'bit-loader',
    term: 'Bit Loader',
    slug: 'bit-loader',
    definition: 'A program that loads a bit file onto an FPGA.',
    example: 'He used the bit loader utility provided by the FPGA vendor.'
  },
  {
    id: 'bit-lock',
    term: 'Bit Lock',
    slug: 'bit-lock',
    definition: 'A synchronization primitive that uses a single bit as a lock, often as part of a more complex locking mechanism.',
    example: 'The low-level synchronization routine used a bit lock to provide fast, uncontended access.'
  },
  {
    id: 'bit-machine',
    term: 'Bit Machine',
    slug: 'bit-machine',
    definition: 'A theoretical computer or a real processor that operates on individual bits. Modern computers are word-oriented, but some operations are bit-level.',
    example: 'The first computers were essentially bit machines, processing one bit at a time.'
  },
  {
    id: 'bitmap-file',
    term: 'Bitmap File (BMP)',
    slug: 'bitmap-file',
    definition: 'A raster graphics image file format used to store bitmap digital images. BMP files are typically uncompressed and therefore large.',
    example: 'He saved the screenshot as a bitmap file to preserve the exact pixel data without any compression artifacts.'
  },
  {
    id: 'bit-masking',
    term: 'Bit Masking',
    slug: 'bit-masking',
    definition: 'The act of using a bit mask and bitwise operations to set, clear, or toggle specific bits in a value.',
    example: 'Through bit masking, the developer could store eight different boolean flags in a single byte.'
  },
  {
    id: 'bit-matrix',
    term: 'Bit Matrix',
    slug: 'bit-matrix',
    definition: 'A two-dimensional array of bits, used to represent relationships in a graph or as a mask in image processing.',
    example: 'An adjacency matrix for a graph can be implemented efficiently as a bit matrix.'
  },
  {
    id: 'bit-merge',
    term: 'Bit Merge',
    slug: 'bit-merge',
    definition: 'The process of combining two or more bit streams or bit fields into one.',
    example: 'The function performed a bit merge to combine the red, green, and blue color channels into a single pixel value.'
  },
  {
    id: 'bit-mode',
    term: 'Bit Mode',
    slug: 'bit-mode',
    definition: 'A mode of operation for a hardware device or software program that deals with data at the bit level.',
    example: 'The serial port was put into bit mode to allow for a custom communication protocol.'
  },
  {
    id: 'bit-module',
    term: 'Bit Module',
    slug: 'bit-module',
    definition: 'A hardware or software module that is designed to perform bit-level operations.',
    example: 'The encryption chip contained a dedicated bit module for performing fast bitwise rotations and substitutions.'
  },
  {
    id: 'bit-model',
    term: 'Bit Model',
    slug: 'bit-model',
    definition: 'A mathematical or computational model that operates on bits.',
    example: 'The error correction code was based on a sophisticated bit model of the communication channel.'
  },
  {
    id: 'bit-node',
    term: 'Bit Node',
    slug: 'bit-node',
    definition: 'A node in a data structure (like a trie or a tree) that corresponds to a single bit.',
    example: 'In a binary trie, each bit node has two children, one for 0 and one for 1.'
  },
  {
    id: 'bit-operation',
    term: 'Bit Operation',
    slug: 'bit-operation',
    definition: 'A bitwise operation (AND, OR, XOR, NOT, shift) that operates on one or more binary numbers at the level of their individual bits.',
    example: 'He used a bit operation to quickly check if a number was even or odd.'
  },
  {
    id: 'bit-optimizer',
    term: 'Bit Optimizer',
    slug: 'bit-optimizer',
    definition: 'A tool or algorithm that attempts to optimize code or data structures at the bit level for size or speed.',
    example: 'The compiler\'s bit optimizer was able to pack the data structure into a smaller space by rearranging its fields.'
  },
  {
    id: 'bit-packet',
    term: 'Bit Packet',
    slug: 'bit-packet',
    definition: 'A non-standard term for a network packet, emphasizing its nature as a sequence of bits.',
    example: 'The router inspected the header of each bit packet to determine where to forward it.'
  },
  {
    id: 'bit-page',
    term: 'Bit Page',
    slug: 'bit-page',
    definition: 'In memory management, a page of memory that is used to store a bitmap, often to track the allocation of other pages.',
    example: 'The operating system used a bit page to keep track of which physical memory frames were free.'
  },
  {
    id: 'bit-parser',
    term: 'Bit Parser',
    slug: 'bit-parser',
    definition: 'A parser that reads and interprets a stream of data at the bit level, rather than at the byte or character level.',
    example: 'He wrote a bit parser to decode the custom video file format.'
  },
  {
    id: 'bit-partition',
    term: 'Bit Partition',
    slug: 'bit-partition',
    definition: 'The division of a set of bits into smaller groups or fields.',
    example: 'The bit partition of the 32-bit instruction code defined the opcode, register operands, and immediate value.'
  },
  {
    id: 'bit-patch',
    term: 'Bit Patch',
    slug: 'bit-patch',
    definition: 'A patch for a binary file that modifies individual bits or bytes. See Binary Patch.',
    example: 'The game mod was distributed as a bit patch that modified the game\'s main executable.'
  },
  {
    id: 'bit-payload',
    term: 'Bit Payload',
    slug: 'bit-payload',
    definition: 'The actual data portion of a packet or frame, represented as a sequence of bits.',
    example: 'The bit payload of the Ethernet frame contained the IP packet.'
  },
  {
    id: 'bit-pointer-map',
    term: 'Bit Pointer Map',
    slug: 'bit-pointer-map',
    definition: 'A non-standard term, possibly referring to a data structure that maps keys to pointers, where the keys or map itself are implemented using bit-level techniques.',
    example: 'The custom memory manager used a bit pointer map for fast lookups of allocated blocks.'
  },
  {
    id: 'bit-port',
    term: 'Bit Port',
    slug: 'bit-port',
    definition: 'A physical or logical port that transmits or receives data one bit at a time (a serial port).',
    example: 'The microcontroller communicated with the sensor over a single bit port.'
  },
  {
    id: 'bit-probe',
    term: 'Bit Probe',
    slug: 'bit-probe',
    definition: 'A hardware or software tool used to monitor the state of a single bit or a line in a digital circuit.',
    example: 'The engineer used a logic analyzer as a bit probe to debug the timing issue on the circuit board.'
  },
  {
    id: 'bit-processor',
    term: 'Bit Processor',
    slug: 'bit-processor',
    definition: 'A processor that is designed to be efficient at bit-level operations.',
    example: 'Cryptographic hardware often includes a specialized bit processor to speed up encryption and decryption.'
  },
  {
    id: 'bit-queue',
    term: 'Bit Queue',
    slug: 'bit-queue',
    definition: 'A queue data structure that stores individual bits.',
    example: 'The compression algorithm used a bit queue to buffer the output bitstream.'
  },
  {
    id: 'bit-rate-control',
    term: 'Bit Rate Control',
    slug: 'bit-rate-control',
    definition: 'In video encoding, the process of managing the bit rate to achieve a desired balance between file size and quality.',
    example: 'The video encoder used a variable bit rate control strategy, allocating more bits to complex scenes and fewer to simple ones.'
  },
  {
    id: 'bit-record',
    term: 'Bit Record',
    slug: 'bit-record',
    definition: 'A data record where individual fields are packed at the bit level to save space.',
    example: 'The sensor data was stored in a compact bit record format.'
  },
  {
    id: 'bit-reference',
    term: 'Bit Reference',
    slug: 'bit-reference',
    definition: 'A pointer or reference to a single bit within a larger data structure.',
    example: 'C++\'s `std::vector<bool>` uses a bit reference proxy object to allow access to individual bits.'
  },
  {
    id: 'bit-register',
    term: 'Bit Register',
    slug: 'bit-register',
    definition: 'A register in a CPU or microcontroller that holds a single bit or a set of status flags.',
    example: 'The result of the comparison was stored in a bit register.'
  },
  {
    id: 'bit-replica',
    term: 'Bit Replica',
    slug: 'bit-replica',
    definition: 'An exact, bit-for-bit copy of a file or storage device. See Bit Copy.',
    example: 'The forensics expert created a bit replica of the suspect\'s hard drive for analysis.'
  },
  {
    id: 'bit-request',
    term: 'Bit Request',
    slug: 'bit-request',
    definition: 'A non-standard term, likely referring to a request for a single bit of information or a request at a very low level of a system.',
    example: 'The device sent a bit request to check the status of the sensor.'
  },
  {
    id: 'bit-resolver',
    term: 'Bit Resolver',
    slug: 'bit-resolver',
    definition: 'A non-standard term, possibly for a component that resolves conflicts or makes decisions based on bit-level data.',
    example: 'The bus arbitration logic included a bit resolver to decide which device gets priority.'
  },
  {
    id: 'bit-routing',
    term: 'Bit Routing',
    slug: 'bit-routing',
    definition: 'Routing decisions made at the bit level, which is not typical. Routing is usually done at the packet (Layer 3) or frame (Layer 2) level.',
    example: 'The term "bit routing" is not standard, as routing operates on packets, not individual bits.'
  },
  {
    id: 'bit-sample',
    term: 'Bit Sample',
    slug: 'bit-sample',
    definition: 'A single bit value taken from a signal or data stream at a specific point in time.',
    example: 'The analog-to-digital converter takes a bit sample of the audio waveform thousands of times per second.'
  },
  {
    id: 'bit-scan',
    term: 'Bit Scan',
    slug: 'bit-scan',
    definition: 'A CPU instruction that finds the index of the first or last set bit in a word.',
    example: 'He used the bit scan instruction to quickly find the position of the highest order bit in the number.'
  },
  {
    id: 'bit-scheduler',
    term: 'Bit Scheduler',
    slug: 'bit-scheduler',
    definition: 'A non-standard term. Scheduling in computer systems typically happens at the process, thread, or task level, not the bit level.',
    example: 'The real-time operating system had a high-precision task scheduler, but not a "bit scheduler."'
  },
  {
    id: 'bit-sector',
    term: 'Bit Sector',
    slug: 'bit-sector',
    definition: 'A non-standard term. A sector is the smallest physical storage unit on a disk and is composed of many bits, not a "bit sector".',
    example: 'The hard drive had a standard 512-byte sector size, not a bit sector.'
  },
  {
    id: 'bit-sensor',
    term: 'Bit Sensor',
    slug: 'bit-sensor',
    definition: 'A sensor that provides a binary output (on/off). See Binary Sensor.',
    example: 'The magnetic reed switch is a simple bit sensor that detects if a door is open or closed.'
  },
  {
    id: 'bit-server',
    term: 'Bit Server',
    slug: 'bit-server',
    definition: 'A non-standard term, possibly slang for a server that handles a high volume of low-level, bit-oriented data.',
    example: 'The company\'s custom bit server handled the real-time stream of financial market data.'
  },
  {
    id: 'bit-session',
    term: 'Bit Session',
    slug: 'bit-session',
    definition: 'A non-standard term. A session is a higher-level concept in networking (Layer 5) and applications.',
    example: 'The user established a session with the web server, but this involved many packets, not a "bit session."'
  },
  {
    id: 'bit-set-operation',
    term: 'Bit Set Operation',
    slug: 'bit-set-operation',
    definition: 'An operation performed on a bitset (a data structure that stores a collection of bits), such as union, intersection, or difference.',
    example: 'He used a bit set operation to efficiently find the common elements between two large sets of integers.'
  },
  {
    id: 'bit-signal',
    term: 'Bit Signal',
    slug: 'bit-signal',
    definition: 'A digital signal that can be in one of two states, representing a 0 or a 1.',
    example: 'The square wave on the oscilloscope represented the bit signal being transmitted.'
  },
  {
    id: 'bit-signature',
    term: 'Bit Signature',
    slug: 'bit-signature',
    definition: 'A sequence of bits that uniquely identifies a file or a piece of data. See Hash or Fingerprint.',
    example: 'The antivirus software uses a bit signature to detect known malware files.'
  },
  {
    id: 'bit-slice',
    term: 'Bit Slice',
    slug: 'bit-slice',
    definition: 'A single bit or a small group of bits taken from a larger word. Also refers to a CPU architecture where the processor is built from smaller modules, each handling a "slice" of the total bit-width.',
    example: 'The bit-slice architecture allowed them to build a 32-bit processor using four 8-bit ALU slices.'
  },
  {
    id: 'bit-slot',
    term: 'Bit Slot',
    slug: 'bit-slot',
    definition: 'The time interval during which a single bit is transmitted in a serial communication system.',
    example: 'In a time-division multiplexing system, each user is assigned a specific bit slot.'
  },
  {
    id: 'bit-socket',
    term: 'Bit Socket',
    slug: 'bit-socket',
    definition: 'A non-standard term. A socket is an endpoint for communication, operating at a higher level than individual bits.',
    example: 'The application opened a TCP socket to connect to the server, not a bit socket.'
  },
  {
    id: 'bit-space',
    term: 'Bit Space',
    slug: 'bit-space',
    definition: 'The set of all possible binary strings of a given length.',
    example: 'An 8-bit value has a bit space of 2^8, or 256, possible combinations.'
  },
  {
    id: 'bit-stack',
    term: 'Bit Stack',
    slug: 'bit-stack',
    definition: 'A stack data structure that stores individual bits.',
    example: 'The programmer implemented a custom bit stack for a memory-constrained embedded system.'
  },
  {
    id: 'bit-stamp',
    term: 'Bit Stamp',
    slug: 'bit-stamp',
    definition: 'A non-standard term, possibly referring to a timestamp with very high precision, or a unique binary identifier.',
    example: 'Each packet was marked with a high-resolution bit stamp to allow for precise ordering.'
  },
  {
    id: 'bitstream-buffer',
    term: 'Bitstream Buffer',
    slug: 'bitstream-buffer',
    definition: 'A buffer in memory used to temporarily store a stream of bits before it is processed or transmitted.',
    example: 'The video decoder used a bitstream buffer to handle variations in the network speed.'
  },
  {
    id: 'bit-structure',
    term: 'Bit Structure',
    slug: 'bit-structure',
    definition: 'The way in which bits are organized within a larger data structure, such as a bit field or a packet header.',
    example: 'The developer had to carefully follow the documented bit structure to parse the network protocol correctly.'
  },
  {
    id: 'bit-switch',
    term: 'Bit Switch',
    slug: 'bit-switch',
    definition: 'A physical or logical switch that operates at the bit level. This is not a standard term, as switching typically occurs at the frame or packet level.',
    example: 'He referred to the multiplexer as a bit switch, as it selected one of several input bit streams.'
  },
  {
    id: 'bit-tagger',
    term: 'Bit Tagger',
    slug: 'bit-tagger',
    definition: 'A non-standard term, possibly for a tool or process that adds metadata (tags) at the bit level of a file.',
    example: 'The custom forensics tool acted as a bit tagger, marking suspicious sections of the binary file.'
  },
  {
    id: 'bit-timer',
    term: 'Bit Timer',
    slug: 'bit-timer',
    definition: 'A high-precision timer in a communication system that is synchronized with the bit clock and is used for sampling the signal.',
    example: 'The serial communication interface used a bit timer to ensure it read the data line at the correct moments.'
  },
  {
    id: 'bit-token-map',
    term: 'Bit Token Map',
    slug: 'bit-token-map',
    definition: 'A non-standard term, possibly a data structure that maps tokens to bit-level representations.',
    example: 'The custom compiler used a bit token map to encode keywords into a compact binary format.'
  },
  {
    id: 'bit-tools',
    term: 'Bit Tools',
    slug: 'bit-tools',
    definition: 'A collection of software utilities for manipulating data at the bit and byte level.',
    example: 'He downloaded a set of bit tools to help him with his reverse engineering project.'
  },
  {
    id: 'bit-trace',
    term: 'Bit Trace',
    slug: 'bit-trace',
    definition: 'A detailed log or trace of a digital signal, showing the value of each bit over time.',
    example: 'The logic analyzer provided a bit trace of the communication between the two chips.'
  },
  {
    id: 'bit-tracker',
    term: 'Bit Tracker',
    slug: 'bit-tracker',
    definition: 'In a BitTorrent network, the central server that keeps track of which peers have which pieces of a file.',
    example: 'The BitTorrent client connected to the bit tracker to get a list of peers to download from.'
  },
  {
    id: 'bit-transport',
    term: 'Bit Transport',
    slug: 'bit-transport',
    definition: 'The process of moving bits from one place to another, referring to the physical layer (Layer 1) of a network.',
    example: 'Fiber optic cables provide a very high-speed bit transport medium.'
  },
  {
    id: 'bit-tree-node',
    term: 'Bit Tree Node',
    slug: 'bit-tree-node',
    definition: 'A node in a tree data structure that is based on the bit-level representation of its keys, such as a binary trie.',
    example: 'Each bit-tree node represented a single bit in the IP address prefix.'
  },
  {
    id: 'bit-trigger',
    term: 'Bit Trigger',
    slug: 'bit-trigger',
    definition: 'A trigger in a system (like a debugger or logic analyzer) that is activated by a specific bit pattern.',
    example: 'He set a bit trigger to pause the program whenever a specific error flag was set.'
  },
  {
    id: 'bit-tunnel',
    term: 'Bit Tunnel',
    slug: 'bit-tunnel',
    definition: 'A non-standard term for a communication channel that transmits raw bits.',
    example: 'The two devices communicated over a simple bit tunnel.'
  },
  {
    id: 'bit-type',
    term: 'Bit Type',
    slug: 'bit-type',
    definition: 'A data type that can only hold a single bit of information (0 or 1). Many languages do not have a native bit type and use a byte or integer instead.',
    example: 'The database had a special bit type column to efficiently store boolean flags.'
  },
  {
    id: 'bit-unit',
    term: 'Bit Unit',
    slug: 'bit-unit',
    definition: 'A functional unit in a processor that is designed to perform bitwise operations.',
    example: 'The CPU had a dedicated bit unit for fast encryption and decryption.'
  },
  {
    id: 'bit-validator',
    term: 'Bit Validator',
    slug: 'bit-validator',
    definition: 'A component that checks if a sequence of bits conforms to a specific format or rule.',
    example: 'The protocol implementation included a bit validator to check for malformed packets.'
  },
  {
    id: 'bit-value',
    term: 'Bit Value',
    slug: 'bit-value',
    definition: 'The value of a single bit, either 0 or 1.',
    example: 'The bit value at that position was 1.'
  },
  {
    id: 'bit-version',
    term: 'Bit Version',
    slug: 'bit-version',
    definition: 'A version number or identifier that is stored at the bit level within a file format.',
    example: 'The parser checked the bit version in the file header to know how to interpret the rest of the data.'
  },
  {
    id: 'bit-view',
    term: 'Bit View',
    slug: 'bit-view',
    definition: 'A user interface or tool that allows for the visualization of data at the bit level.',
    example: 'The hex editor provided a bit view to show the binary representation of each byte.'
  },
  {
    id: 'bit-vision',
    term: 'Bit Vision',
    slug: 'bit-vision',
    definition: 'Slang for the ability to mentally visualize and manipulate data at the bit level, a skill of expert low-level programmers.',
    example: 'The old-school programmer had amazing bit vision and could debug problems just by looking at a hex dump.'
  },
  {
    id: 'bit-watch',
    term: 'Bit Watch',
    slug: 'bit-watch',
    definition: 'A debugging feature where the execution of a program is halted whenever a specific bit in memory changes its value.',
    example: 'He set a bit watch on the status register to see what was causing the error flag to be set.'
  },
  {
    id: 'bit-wave',
    term: 'Bit Wave',
    slug: 'bit-wave',
    definition: 'A non-standard term, likely referring to the waveform of a digital signal representing a stream of bits.',
    example: 'The oscilloscope displayed the bit wave on the screen.'
  },
  {
    id: 'bit-window',
    term: 'Bit Window',
    slug: 'bit-window',
    definition: 'A small, fixed-size window or buffer that moves over a bitstream, used in some algorithms like sliding window compression.',
    example: 'The compression algorithm looked for repeating patterns within its 16-bit window.'
  },
  {
    id: 'bizops',
    term: 'BizOps',
    slug: 'bizops',
    definition: 'A discipline that combines business operations with IT operations, focusing on using data and automation to improve business processes and decision-making.',
    example: 'The BizOps team created a dashboard that provided real-time insights into how system performance was impacting sales.'
  },
  {
    id: 'biztalk',
    term: 'BizTalk',
    slug: 'biztalk',
    definition: 'Microsoft BizTalk Server, an enterprise service bus (ESB) that helps organizations automate business processes.',
    example: 'The company used BizTalk to integrate their internal SAP system with their external partners\' ordering systems.'
  },
  {
    id: 'bk-tree',
    term: 'BK-Tree',
    slug: 'bk-tree',
    definition: 'A Burkhard-Keller tree, a tree-based data structure used for nearest-neighbor searches in metric spaces, often used for spell-checking.',
    example: 'To find all words within a certain edit distance of the misspelled word, the program used a BK-Tree.'
  },
  {
    id: 'blackarch',
    term: 'BlackArch',
    slug: 'blackarch',
    definition: 'A penetration testing and security research Linux distribution based on Arch Linux, containing a large number of cybersecurity tools.',
    example: 'The security researcher booted into their BlackArch environment to start the penetration test.'
  },
  {
    id: 'black-box-model',
    term: 'Black Box Model',
    slug: 'black-box-model',
    definition: 'In machine learning, a model whose internal workings are not easily understood by humans, such as a deep neural network.',
    example: 'The neural network was a black box model; it gave very accurate predictions, but it was difficult to explain exactly why.'
  },
  {
    id: 'black-fiber',
    term: 'Black Fiber',
    slug: 'black-fiber',
    definition: 'A non-standard term, likely slang for dark fiber, which is unused or unlit optical fiber available for lease.',
    example: 'The company leased black fiber between their two data centers to build their own private high-speed network.'
  },
  {
    id: 'black-hole-route',
    term: 'Black Hole Route',
    slug: 'black-hole-route',
    definition: 'A network route that directs traffic to a null interface, effectively discarding it. It is often used to mitigate DDoS attacks.',
    example: 'To stop the attack, the network administrator configured a black hole route for the target IP address.'
  },
  {
    id: 'blacklist-filter',
    term: 'Blacklist Filter',
    slug: 'blacklist-filter',
    definition: 'A filter that blocks access from entities that are on a predefined list of forbidden items. See also Allowlist.',
    example: 'The email server used a blacklist filter to block messages from known spam domains.'
  },
  {
    id: 'black-net',
    term: 'Black Net',
    slug: 'black-net',
    definition: 'Slang for a private, isolated, or secret network, sometimes used for malicious or covert activities.',
    example: 'The hackers communicated over a black net to avoid detection.'
  },
  {
    id: 'black-ops',
    term: 'Black Ops',
    slug: 'black-ops',
    definition: 'Slang in the tech world for a secret, unofficial, or off-the-books project within a company.',
    example: 'A small team was working on a black ops project to develop a competitor to the company\'s main product.'
  },
  {
    id: 'blackout-test',
    term: 'Blackout Test',
    slug: 'blackout-test',
    definition: 'A type of disaster recovery test where a system or data center is intentionally powered down to see how the failover systems respond.',
    example: 'The company performed a blackout test over the weekend to validate their disaster recovery plan.'
  },
  {
    id: 'black-screen',
    term: 'Black Screen',
    slug: 'black-screen',
    definition: 'A common computer error where the display shows nothing but a black screen, often indicating a problem with the operating system, drivers, or hardware.',
    example: 'After the update, the computer would only boot to a black screen.'
  },
  {
    id: 'black-site',
    term: 'Black Site',
    slug: 'black-site',
    definition: 'In a tech context, slang for a secret or undisclosed data center or server location.',
    example: 'The whistleblower revealed the location of the company\'s black site data center.'
  },
  {
    id: 'black-socket',
    term: 'Black Socket',
    slug: 'black-socket',
    definition: 'A non-standard term, possibly referring to a network socket that is used for covert communication or is part of a backdoor.',
    example: 'The malware opened a black socket to exfiltrate data to the attacker\'s server.'
  },
  {
    id: 'black-wall',
    term: 'Black Wall',
    slug: 'black-wall',
    definition: 'Slang for a very restrictive firewall or a set of security rules that blocks almost all traffic.',
    example: 'The secure government network was protected by a black wall that only allowed a few specific types of connections.'
  },
  {
    id: 'blade-array',
    term: 'Blade Array',
    slug: 'blade-array',
    definition: 'A collection of blade servers housed within a single chassis.',
    example: 'The data center consisted of several racks of blade arrays.'
  },
  {
    id: 'blade-disk',
    term: 'Blade Disk',
    slug: 'blade-disk',
    definition: 'A hard drive or SSD that is designed to be installed in a blade server.',
    example: 'Each server in the blade chassis had its own dedicated blade disk for the operating system.'
  },
  {
    id: 'blade-fabric',
    term: 'Blade Fabric',
    slug: 'blade-fabric',
    definition: 'The high-speed networking infrastructure within a blade chassis that connects all the blade servers to each other and to the external network.',
    example: 'The chassis had a 10 Gigabit Ethernet blade fabric.'
  },
  {
    id: 'blade-manager',
    term: 'Blade Manager',
    slug: 'blade-manager',
    definition: 'A management module within a blade chassis that is used to configure, monitor, and manage all the blade servers.',
    example: 'The system administrator used the blade manager to remotely power on a new server.'
  },
  {
    id: 'blade-memory',
    term: 'Blade Memory',
    slug: 'blade-memory',
    definition: 'RAM modules that are specifically designed for use in blade servers.',
    example: 'He upgraded the blade memory in all the servers to improve performance.'
  },
  {
    id: 'blade-network',
    term: 'Blade Network',
    slug: 'blade-network',
    definition: 'The network formed by the blade servers within a chassis.',
    example: 'Communication within the blade network was extremely fast due to the high-speed backplane.'
  },
  {
    id: 'blade-power',
    term: 'Blade Power',
    slug: 'blade-power',
    definition: 'The power supply system for a blade chassis, which provides shared power to all the servers.',
    example: 'The blade chassis had redundant blade power supplies to ensure uptime.'
  },
  {
    id: 'blade-service',
    term: 'Blade Service',
    slug: 'blade-service',
    definition: 'A software service or application that is running on a blade server.',
    example: 'The web application was deployed as a blade service on the cluster.'
  },
  {
    id: 'blade-switch',
    term: 'Blade Switch',
    slug: 'blade-switch',
    definition: 'A network switch module that is installed in a blade chassis to provide network connectivity for the servers.',
    example: 'The blade switch provided 16 ports of Gigabit Ethernet for the servers.'
  },
  {
    id: 'blast-radius',
    term: 'Blast Radius',
    slug: 'blast-radius',
    definition: 'In IT and DevOps, the measure of how far-reaching the impact of a change or failure can be. A key goal of microservices and other architectures is to minimize the blast radius.',
    example: 'By deploying the change to only one server at a time, they limited the blast radius if something went wrong.'
  },
  {
    id: 'ble-adapter',
    term: 'BLE Adapter',
    slug: 'ble-adapter',
    definition: 'A hardware device, often a USB dongle, that adds Bluetooth Low Energy capability to a computer.',
    example: 'He plugged in a BLE adapter to connect his new fitness tracker to his old desktop PC.'
  },
  {
    id: 'ble-beacon',
    term: 'BLE Beacon',
    slug: 'ble-beacon',
    definition: 'A small, low-power Bluetooth Low Energy device that continuously broadcasts an identifier. Smartphones and other devices can use this to determine their proximity to the beacon.',
    example: 'The museum used BLE beacons to provide visitors with information about the exhibits they were standing in front of.'
  },
  {
    id: 'ble-controller',
    term: 'BLE Controller',
    slug: 'ble-controller',
    definition: 'The hardware component of a Bluetooth Low Energy device that is responsible for the radio and low-level protocol operations.',
    example: 'The BLE controller is a highly optimized chip designed for low power consumption.'
  },
  {
    id: 'ble-daemon',
    term: 'BLE Daemon',
    slug: 'ble-daemon',
    definition: 'A background service on an operating system that manages Bluetooth Low Energy connections and devices.',
    example: 'The `bluetoothd` process on Linux is the BLE daemon.'
  },
  {
    id: 'ble-driver',
    term: 'BLE Driver',
    slug: 'ble-driver',
    definition: 'The software driver that allows the operating system to communicate with a Bluetooth Low Energy controller.',
    example: 'He had to install a new BLE driver to get his adapter working.'
  },
  {
    id: 'ble-firmware',
    term: 'BLE Firmware',
    slug: 'ble-firmware',
    definition: 'The software that runs on the processor of a Bluetooth Low Energy device.',
    example: 'He updated the BLE firmware on his smartwatch to get new features and bug fixes.'
  },
  {
    id: 'ble-gateway',
    term: 'BLE Gateway',
    slug: 'ble-gateway',
    definition: 'A device that scans for data from nearby BLE sensors and forwards it to a cloud service or a local server, often over Wi-Fi or Ethernet.',
    example: 'The warehouse used a BLE gateway to collect temperature data from sensors on all the refrigeration units.'
  },
  {
    id: 'ble-host',
    term: 'BLE Host',
    slug: 'ble-host',
    definition: 'The part of the Bluetooth Low Energy stack that runs on the application processor of a device (like a phone or computer) and manages higher-level protocols and profiles.',
    example: 'The BLE host on the smartphone was responsible for discovering and connecting to the heart rate monitor.'
  },
  {
    id: 'ble-layer',
    term: 'BLE Layer',
    slug: 'ble-layer',
    definition: 'A specific layer within the Bluetooth Low Energy protocol stack, such as the Physical Layer, Link Layer, or Application Layer.',
    example: 'The developer was working with the GATT layer of the BLE stack to define the services and characteristics for their device.'
  },
  {
    id: 'ble-mesh',
    term: 'BLE Mesh',
    slug: 'ble-mesh',
    definition: 'A standard for creating many-to-many mesh networks of Bluetooth Low Energy devices, enabling applications like large-scale building automation.',
    example: 'The smart lighting system in the office building used a BLE mesh network, allowing any light to communicate with any other light.'
  },
  {
    id: 'ble-scanner',
    term: 'BLE Scanner',
    slug: 'ble-scanner',
    definition: 'A device or application that listens for advertising packets from nearby Bluetooth Low Energy devices.',
    example: 'He used a BLE scanner app on his phone to see all the nearby beacons.'
  },
  {
    id: 'ble-service',
    term: 'BLE Service',
    slug: 'ble-service',
    definition: 'In the GATT profile of Bluetooth Low Energy, a service is a collection of data and associated behaviors to accomplish a particular function. For example, a "Heart Rate Service".',
    example: 'The fitness tracker exposed a standard BLE service for heart rate and another custom service for step count.'
  },
  {
    id: 'ble-stack',
    term: 'BLE Stack',
    slug: 'ble-stack',
    definition: 'The complete software implementation of the Bluetooth Low Energy protocol suite.',
    example: 'The embedded developer chose a certified BLE stack to ensure compatibility with phones and other devices.'
  },
  {
    id: 'blend-pipeline',
    term: 'Blend Pipeline',
    slug: 'blend-pipeline',
    definition: 'In computer graphics, the part of the rendering pipeline that combines the color of a new fragment with the color already in the framebuffer, used for effects like transparency.',
    example: 'To render the semi-transparent window, the graphics programmer had to correctly configure the blend pipeline.'
  },
  {
    id: 'block-adapter',
    term: 'Block Adapter',
    slug: 'block-adapter',
    definition: 'A hardware controller or software driver that provides an interface to a block storage device.',
    example: 'The virtual machine used a virtio block adapter for high-performance access to its virtual disk.'
  },
  {
    id: 'block-allocator',
    term: 'Block Allocator',
    slug: 'block-allocator',
    definition: 'The part of a file system or memory manager that is responsible for allocating and freeing blocks of storage.',
    example: 'The file system\'s block allocator tries to keep files in contiguous blocks to improve read performance.'
  },
  {
    id: 'block-cache',
    term: 'Block Cache',
    slug: 'block-cache',
    definition: 'A cache that stores recently used blocks of data from a storage device in memory to speed up future accesses. See Buffer Cache.',
    example: 'The database server had a large block cache to minimize slow disk I/O.'
  },
  {
    id: 'block-checksum',
    term: 'Block Checksum',
    slug: 'block-checksum',
    definition: 'A checksum value calculated for a single block of data, used to detect corruption.',
    example: 'Modern file systems like ZFS store a block checksum with each data block to ensure data integrity.'
  },
  {
    id: 'block-cipher-mode',
    term: 'Block Cipher Mode',
    slug: 'block-cipher-mode',
    definition: 'An algorithm that uses a block cipher to provide confidentiality for messages of arbitrary length. Examples include CBC, GCM, and CTR.',
    example: 'For authenticated encryption, the developer chose to use the AES block cipher in GCM mode.'
  },
  {
    id: 'block-cluster',
    term: 'Block Cluster',
    slug: 'block-cluster',
    definition: 'A group of contiguous blocks on a storage device that are allocated as a single unit. Also known as an allocation unit.',
    example: 'The file system used a 4KB block cluster size.'
  },
  {
    id: 'block-commit',
    term: 'Block Commit',
    slug: 'block-commit',
    definition: 'In a blockchain, the final step of adding a new, validated block to the chain.',
    example: 'After the block commit, the transaction was considered irreversible.'
  },
  {
    id: 'block-compression',
    term: 'Block Compression',
    slug: 'block-compression',
    definition: 'A type of compression that operates on fixed-size blocks of data independently.',
    example: 'The bzip2 algorithm uses block compression to achieve high compression ratios.'
  },
  {
    id: 'block-copy',
    term: 'Block Copy',
    slug: 'block-copy',
    definition: 'An operation that copies a block of data from one location to another, often implemented as a highly optimized `memcpy` function.',
    example: 'The DMA controller performed the block copy, freeing up the CPU for other tasks.'
  },
  {
    id: 'block-driver',
    term: 'Block Driver',
    slug: 'block-driver',
    definition: 'The software driver that allows the operating system to communicate with a block storage device.',
    example: 'The operating system loaded the SATA block driver to access the hard drive.'
  },
  {
    id: 'block-dump',
    term: 'Block Dump',
    slug: 'block-dump',
    definition: 'A raw, hexadecimal representation of the data contained in a block of storage.',
    example: 'The forensics expert examined the block dump to recover a deleted file.'
  },
  {
    id: 'block-engine',
    term: 'Block Engine',
    slug: 'block-engine',
    definition: 'A non-standard term, likely referring to a software engine that processes data in blocks.',
    example: 'The custom data processing framework had a powerful block engine for parallel computation.'
  },
  {
    id: 'block-entry',
    term: 'Block Entry',
    slug: 'block-entry',
    definition: 'An entry in a data structure (like an allocation table or an index) that corresponds to a single block of data.',
    example: 'The file allocation table contained a block entry for each cluster on the disk.'
  },
  {
    id: 'block-file',
    term: 'Block File',
    slug: 'block-file',
    definition: 'In some databases and file systems, a file that is used to store data blocks.',
    example: 'The Bitcoin Core client stores the blockchain data in a series of block files (`blk*.dat`).'
  },
  {
    id: 'block-id',
    term: 'Block ID',
    slug: 'block-id',
    definition: 'A unique identifier for a block, such as its block number in a blockchain or its address on a disk.',
    example: 'He searched for the transaction using its block ID.'
  },
  {
    id: 'block-index',
    term: 'Block Index',
    slug: 'block-index',
    definition: 'An index that maps keys to the specific blocks on a storage device where the corresponding data is located.',
    example: 'The database\'s block index allowed it to quickly find the right data block without scanning the entire file.'
  },
  {
    id: 'block-link',
    term: 'Block Link',
    slug: 'block-link',
    definition: 'A pointer or reference in a data structure that links one block of data to another, such as in a linked list of blocks.',
    example: 'Each block in the file allocation table contained a block link to the next block in the file\'s chain.'
  },
  {
    id: 'block-list',
    term: 'Block List',
    slug: 'block-list',
    definition: 'A list of entities that are blocked or denied access. See Blacklist or Denylist.',
    example: 'The firewall\'s block list contained the IP addresses of known malicious actors.'
  },
  {
    id: 'block-loader',
    term: 'Block Loader',
    slug: 'block-loader',
    definition: 'A component of a system that is responsible for loading blocks of data from storage into memory.',
    example: 'The operating system\'s block loader fetched the required pages from the disk when a page fault occurred.'
  },
  {
    id: 'block-map',
    term: 'Block Map',
    slug: 'block-map',
    definition: 'A data structure that maps logical block addresses to physical block addresses.',
    example: 'The flash translation layer in an SSD uses a block map to handle wear leveling.'
  },
  {
    id: 'block-mask',
    term: 'Block Mask',
    slug: 'block-mask',
    definition: 'A bitmask used to select or modify a block of data.',
    example: 'He used a block mask to extract a specific channel from the interleaved audio data.'
  },
  {
    id: 'block-merge',
    term: 'Block Merge',
    slug: 'block-merge',
    definition: 'The process of merging two or more blocks of data, often as part of a merge sort algorithm or a database compaction process.',
    example: 'The log-structured merge-tree performed a block merge in the background to combine smaller data files into larger ones.'
  },
  {
    id: 'block-message',
    term: 'Block Message',
    slug: 'block-message',
    definition: 'A message in a communication protocol that is transmitted as a single, fixed-size block.',
    example: 'The satellite communication system used fixed-size block messages to simplify error handling.'
  },
  {
    id: 'block-metadata',
    term: 'Block Metadata',
    slug: 'block-metadata',
    definition: 'Data about a block, such as its checksum, timestamp, or its position in a larger data structure.',
    example: 'The file system stores block metadata in its inodes.'
  },
  {
    id: 'block-model',
    term: 'Block Model',
    slug: 'block-model',
    definition: 'In 3D modeling and computer graphics, a model that is constructed from simple blocks or voxels.',
    example: 'Minecraft is a famous example of a game that uses a block model for its world.'
  },
  {
    id: 'block-object',
    term: 'Block Object',
    slug: 'block-object',
    definition: 'A software object that represents or manages a block of data.',
    example: 'The programmer created a block object to encapsulate the data and metadata for each block in the file.'
  },
  {
    id: 'block-offset',
    term: 'Block Offset',
    slug: 'block-offset',
    definition: 'The position within a block where a particular piece of data is located.',
    example: 'The file pointer was represented as a block number and a block offset.'
  },
  {
    id: 'block-operation',
    term: 'Block Operation',
    slug: 'block-operation',
    definition: 'An operation that is performed on an entire block of data at once, such as a block copy or a block encryption.',
    example: 'Modern CPUs have special instructions to speed up block operations.'
  },
  {
    id: 'block-packet',
    term: 'Block Packet',
    slug: 'block-packet',
    definition: 'A network packet that contains a single block of data.',
    example: 'The file transfer protocol broke the file down into a series of block packets.'
  },
  {
    id: 'block-parser',
    term: 'Block Parser',
    slug: 'block-parser',
    definition: 'A parser that is designed to interpret data that is structured in blocks.',
    example: 'He wrote a block parser to read the custom save file format of the old video game.'
  },
  {
    id: 'block-partition',
    term: 'Block Partition',
    slug: 'block-partition',
    definition: 'A partition on a storage device that is treated as a raw block device, without a file system.',
    example: 'The high-performance database used a raw block partition to avoid the overhead of the operating system\'s file system.'
  },
  {
    id: 'block-patch',
    term: 'Block Patch',
    slug: 'block-patch',
    definition: 'A patch that modifies data at the block level of a file or storage device.',
    example: 'The software update was applied as a block patch, which was much smaller than downloading the entire new version.'
  },
  {
    id: 'block-payload',
    term: 'Block Payload',
    slug: 'block-payload',
    definition: 'The data portion of a block, as distinct from its header or metadata.',
    example: 'The block payload contained the compressed image data.'
  },
  {
    id: 'block-pool',
    term: 'Block Pool',
    slug: 'block-pool',
    definition: 'A pool of pre-allocated memory blocks that can be quickly assigned to tasks, avoiding the overhead of calling the system memory allocator for each request.',
    example: 'The real-time system used a block pool to ensure deterministic memory allocation times.'
  },
  {
    id: 'block-protocol',
    term: 'Block Protocol',
    slug: 'block-protocol',
    definition: 'A communication protocol that transmits data in fixed-size blocks.',
    example: 'The iSCSI protocol is a block protocol that allows for SCSI commands to be sent over an IP network.'
  },
  {
    id: 'block-queue',
    term: 'Block Queue',
    slug: 'block-queue',
    definition: 'A queue that stores blocks of data, often used to pass data between different threads or components in a system.',
    example: 'The producer thread added data to the block queue, and the consumer thread processed it.'
  },
  {
    id: 'block-reader',
    term: 'Block Reader',
    slug: 'block-reader',
    definition: 'A software component that is responsible for reading data in blocks from a storage device or network stream.',
    example: 'He implemented a custom block reader to handle the non-standard file format.'
  },
  {
    id: 'block-region',
    term: 'Block Region',
    slug: 'block-region',
    definition: 'A contiguous region of blocks on a storage device.',
    example: 'The file was stored in a single block region, which made reading it very fast.'
  },
  {
    id: 'block-repair',
    term: 'Block Repair',
    slug: 'block-repair',
    definition: 'The process of repairing a corrupted block of data, often by using a backup copy or error-correction codes.',
    example: 'The RAID system automatically performed a block repair when it detected a checksum mismatch.'
  },
  {
    id: 'block-replica',
    term: 'Block Replica',
    slug: 'block-replica',
    definition: 'A copy of a block of data that is stored on a different device or location for redundancy.',
    example: 'The distributed file system stored three block replicas for each piece of data to ensure fault tolerance.'
  },
  {
    id: 'block-request',
    term: 'Block Request',
    slug: 'block-request',
    definition: 'A request from a system for a specific block of data from a storage device or network.',
    example: 'When the application needed the data, it issued a block request to the operating system.'
  },
  {
    id: 'block-resolver',
    term: 'Block Resolver',
    slug: 'block-resolver',
    definition: 'A non-standard term, possibly for a component that translates a logical block address to a physical one.',
    example: 'The file system\'s block resolver determined the exact location of the data on the disk.'
  },
  {
    id: 'block-routing',
    term: 'Block Routing',
    slug: 'block-routing',
    definition: 'A non-standard term. Routing is done at the packet level, not the block level.',
    example: 'The concept of block routing is not used in standard networking terminology.'
  },
  {
    id: 'block-scanner',
    term: 'Block Scanner',
    slug: 'block-scanner',
    definition: 'A tool that reads and analyzes the individual blocks of a storage device, often used for data recovery or forensic analysis.',
    example: 'The block scanner was able to find fragments of the deleted file.'
  },
  {
    id: 'block-scheduler',
    term: 'Block Scheduler',
    slug: 'block-scheduler',
    definition: 'The part of an operating system or hypervisor that schedules I/O operations to block devices. See I/O Scheduler.',
    example: 'The Linux block scheduler has several different algorithms, like CFQ and Deadline, to optimize disk access.'
  },
  {
    id: 'block-sector',
    term: 'Block Sector',
    slug: 'block-sector',
    definition: 'A redundant term, as a sector is the smallest addressable unit of a block device.',
    example: 'He meant to say "disk sector," not "block sector."'
  },
  {
    id: 'block-sensor',
    term: 'Block Sensor',
    slug: 'block-sensor',
    definition: 'In model railroading and industrial automation, a sensor that detects the presence of an object within a specific "block" of a track or conveyor belt.',
    example: 'The block sensor signaled that the train had entered the next section of track.'
  },
  {
    id: 'block-server',
    term: 'Block Server',
    slug: 'block-server',
    definition: 'A server that provides block-level storage to other computers over a network, typically as part of a Storage Area Network (SAN).',
    example: 'The company used an iSCSI block server to provide storage for their database cluster.'
  },
  {
    id: 'block-service',
    term: 'Block Service',
    slug: 'block-service',
    definition: 'A cloud computing service that provides block-level storage, such as Amazon EBS or Google Persistent Disk.',
    example: 'He attached a volume from the block service to his virtual machine.'
  },
  {
    id: 'block-session',
    term: 'Block Session',
    slug: 'block-session',
    definition: 'A non-standard term. A session is a higher-level concept.',
    example: 'The term "block session" is not used in standard IT terminology.'
  },
  {
    id: 'block-set',
    term: 'Block Set',
    slug: 'block-set',
    definition: 'A collection of data blocks.',
    example: 'The file was composed of a block set scattered across the disk.'
  },
  {
    id: 'block-shift',
    term: 'Block Shift',
    slug: 'block-shift',
    definition: 'An operation that shifts an entire block of data in memory.',
    example: 'The graphics algorithm used a fast block shift operation to scroll the image.'
  },
  {
    id: 'block-signal',
    term: 'Block Signal',
    slug: 'block-signal',
    definition: 'In railway signaling, a signal that controls entry into a block of track.',
    example: 'The train had to wait for a clear block signal before proceeding.'
  },
  {
    id: 'block-slice',
    term: 'Block Slice',
    slug: 'block-slice',
    definition: 'A portion or "slice" of a data block.',
    example: 'He read a 64-byte block slice from the file.'
  },
  {
    id: 'block-space',
    term: 'Block Space',
    slug: 'block-space',
    definition: 'The amount of storage space occupied by blocks on a device.',
    example: 'Even though the file was small, it occupied a full 4KB of block space due to the file system\'s cluster size.'
  },
  {
    id: 'block-stack',
    term: 'Block Stack',
    slug: 'block-stack',
    definition: 'In visual programming languages, a sequence of connected blocks that represents a script.',
    example: 'In Scratch, you create a program by snapping together a block stack.'
  },
  {
    id: 'block-stamp',
    term: 'Block Stamp',
    slug: 'block-stamp',
    definition: 'A non-standard term, likely referring to a timestamp or other metadata associated with a block.',
    example: 'Each block in the chain had a unique block stamp.'
  },
  {
    id: 'block-state',
    term: 'Block State',
    slug: 'block-state',
    definition: 'The state of a block of data, such as whether it is free, allocated, or corrupted.',
    example: 'The file system metadata tracks the block state for every block on the disk.'
  },
  {
    id: 'block-storage-node',
    term: 'Block Storage Node',
    slug: 'block-storage-node',
    definition: 'A server in a distributed storage system that is responsible for storing and serving data blocks.',
    example: 'The Ceph cluster consisted of several block storage nodes, each with multiple hard drives.'
  },
  {
    id: 'block-stream',
    term: 'Block Stream',
    slug: 'block-stream',
    definition: 'A stream of data that is read or written in blocks.',
    example: 'He processed the block stream from the file to calculate its checksum.'
  },
  {
    id: 'block-structure',
    term: 'Block Structure',
    slug: 'block-structure',
    definition: 'The way in which data is organized within a block.',
    example: 'The programmer had to understand the block structure to parse the file format correctly.'
  },
  {
    id: 'block-switch',
    term: 'Block Switch',
    slug: 'block-switch',
    definition: 'A non-standard term. Switching is done at the frame or packet level.',
    example: 'The network device was a Layer 2 switch, not a block switch.'
  },
  {
    id: 'block-system',
    term: 'Block System',
    slug: 'block-system',
    definition: 'A non-standard term, possibly referring to a system based on block storage or blockchain.',
    example: 'Their custom database was a block system designed for high throughput.'
  },
  {
    id: 'block-tag',
    term: 'Block Tag',
    slug: 'block-tag',
    definition: 'A tag or identifier associated with a block of data.',
    example: 'The memory manager used a block tag to track which process owned each block of memory.'
  },
  {
    id: 'block-timer',
    term: 'Block Timer',
    slug: 'block-timer',
    definition: 'A timer that operates in blocks of time, or a timer associated with a specific block of code or data.',
    example: 'The real-time system used a block timer to schedule tasks with high precision.'
  },
  {
    id: 'block-token',
    term: 'Block Token',
    slug: 'block-token',
    definition: 'A token or credential that grants access to a specific block of data.',
    example: 'To read the encrypted file, the application first had to request a block token from the key server.'
  },
  {
    id: 'block-trace',
    term: 'Block Trace',
    slug: 'block-trace',
    definition: 'A trace or log of all I/O operations to a block device.',
    example: 'The developer used a block trace to debug the performance issue with the database.'
  },
  {
    id: 'block-tracker',
    term: 'Block Tracker',
    slug: 'block-tracker',
    definition: 'A system that keeps track of the state and location of data blocks, such as in a distributed file system.',
    example: 'The Hadoop NameNode acts as a block tracker for the entire HDFS cluster.'
  },
  {
    id: 'block-transfer',
    term: 'Block Transfer',
    slug: 'block-transfer',
    definition: 'The transfer of data in the form of blocks.',
    example: 'The DMA controller handled the block transfer between the peripheral and main memory.'
  },
  {
    id: 'block-tree',
    term: 'Block Tree',
    slug: 'block-tree',
    definition: 'A tree data structure where each node is a block of data, such as a B-tree or a Merkle tree.',
    example: 'The file system used a block tree to efficiently manage the allocation of disk space.'
  },
  {
    id: 'block-trigger',
    term: 'Block Trigger',
    slug: 'block-trigger',
    definition: 'A trigger in a database or system that is activated when a specific block of data is accessed or modified.',
    example: 'He set a block trigger to log all attempts to write to the protected memory region.'
  },
  {
    id: 'block-tunnel',
    term: 'Block Tunnel',
    slug: 'block-tunnel',
    definition: 'A tunnel that encapsulates and transports block-level I/O over a network.',
    example: 'They used a block tunnel to connect their local server to a cloud-based block storage service.'
  },
  {
    id: 'block-upgrade',
    term: 'Block Upgrade',
    slug: 'block-upgrade',
    definition: 'The process of upgrading a system or file format at the block level, often by applying a patch.',
    example: 'The database performed a block upgrade to the new file format without requiring a full data migration.'
  },
  {
    id: 'block-validator',
    term: 'Block Validator',
    slug: 'block-validator',
    definition: 'In a blockchain, a node that is responsible for validating the transactions in a new block and ensuring it conforms to the protocol rules.',
    example: 'The block validator checked the digital signatures of all transactions before accepting the new block.'
  },
  {
    id: 'block-value',
    term: 'Block Value',
    slug: 'block-value',
    definition: 'The data contained within a single block.',
    example: 'He read the block value from the disk and parsed it.'
  },
  {
    id: 'block-vector',
    term: 'Block Vector',
    slug: 'block-vector',
    definition: 'A vector or array where each element is a block of data.',
    example: 'The image processing algorithm operated on a block vector representing the pixels of the image.'
  },
  {
    id: 'block-version',
    term: 'Block Version',
    slug: 'block-version',
    definition: 'The version number of a block in a file format or blockchain, indicating its structure.',
    example: 'The parser checked the block version to know how to interpret the data.'
  },
  {
    id: 'block-view',
    term: 'Block View',
    slug: 'block-view',
    definition: 'A user interface or visualization that shows the layout and contents of data blocks.',
    example: 'The disk editor provided a block view of the file system.'
  },
  {
    id: 'block-watcher',
    term: 'Block Watcher',
    slug: 'block-watcher',
    definition: 'A service or tool that monitors a block device or blockchain for changes.',
    example: 'He wrote a block watcher script to get a notification whenever a new block was added to the Ethereum blockchain.'
  },
  {
    id: 'block-window',
    term: 'Block Window',
    slug: 'block-window',
    definition: 'A fixed-size window that slides over a stream of blocks, used in some data processing algorithms.',
    example: 'The deduplication algorithm used a block window to find duplicate blocks of data.'
  },
  {
    id: 'bloom-hash',
    term: 'Bloom Hash',
    slug: 'bloom-hash',
    definition: 'One of the hash functions used in a Bloom filter.',
    example: 'A Bloom filter uses multiple independent bloom hash functions to map an element to several bits in the bit array.'
  },
  {
    id: 'bloom-index',
    term: 'Bloom Index',
    slug: 'bloom-index',
    definition: 'A database index that uses a Bloom filter to quickly test if a value might exist in a table, avoiding a more expensive disk read. It can produce false positives.',
    example: 'The database used a bloom index to speed up queries on the large, un-indexed text column.'
  },
  {
    id: 'bloom-key',
    term: 'Bloom Key',
    slug: 'bloom-key',
    definition: 'The input value (the key) that is hashed and checked against a Bloom filter.',
    example: 'The bloom key was the user\'s email address, which was checked to see if it was already in the database.'
  },
  {
    id: 'bluebugging',
    term: 'BlueBugging',
    slug: 'bluebugging',
    definition: 'A form of Bluetooth attack that allows an attacker to take control of a victim\'s phone, including making calls, sending messages, and accessing data.',
    example: 'Through bluebugging, the attacker was able to eavesdrop on the victim\'s phone calls.'
  },
  {
    id: 'bluejacking',
    term: 'BlueJacking',
    slug: 'bluejacking',
    definition: 'The sending of unsolicited messages over Bluetooth to Bluetooth-enabled devices such as mobile phones or laptops.',
    example: 'In the early days of Bluetooth, bluejacking was a common prank, sending anonymous messages to nearby phones.'
  },
  {
    id: 'bluesnarfing',
    term: 'BlueSnarfing',
    slug: 'bluesnarfing',
    definition: 'The unauthorized access of information from a wireless device through a Bluetooth connection. This can include calendars, contact lists, and private data.',
    example: 'The attacker used bluesnarfing to steal the contact list from the victim\'s phone.'
  },
  {
    id: 'blueprint-file',
    term: 'Blueprint File',
    slug: 'blueprint-file',
    definition: 'A configuration file that defines the structure and components of a system, used for automated provisioning. Similar to a template.',
    example: 'The cloud automation tool used a blueprint file to deploy the entire multi-tier web application.'
  },
  {
    id: 'bluetooth-adaptor',
    term: 'Bluetooth Adaptor',
    slug: 'bluetooth-adaptor',
    definition: 'A hardware device, often a USB dongle, that adds Bluetooth functionality to a computer.',
    example: 'He bought a Bluetooth adaptor to connect his wireless keyboard to his desktop PC.'
  },
  {
    id: 'bluetooth-driver',
    term: 'Bluetooth Driver',
    slug: 'bluetooth-driver',
    definition: 'The software driver that allows the operating system to communicate with the Bluetooth hardware.',
    example: 'He had to update his Bluetooth driver to fix the connection issues with his new headphones.'
  },
  {
    id: 'bluetooth-module',
    term: 'Bluetooth Module',
    slug: 'bluetooth-module',
    definition: 'A small hardware module that provides Bluetooth connectivity, often used in embedded systems and IoT devices.',
    example: 'The Arduino project used a Bluetooth module to allow it to be controlled from a smartphone.'
  },
  {
    id: 'bluetooth-monitor',
    term: 'Bluetooth Monitor',
    slug: 'bluetooth-monitor',
    definition: 'A tool or mode that allows for the capturing and analysis of Bluetooth traffic.',
    example: 'The security researcher put the adapter into Bluetooth monitor mode to sniff the communication between the device and the phone.'
  },
  {
    id: 'bluetooth-security',
    term: 'Bluetooth Security',
    slug: 'bluetooth-security',
    definition: 'The measures and protocols used to secure Bluetooth connections, such as pairing, authentication, and encryption.',
    example: 'Modern Bluetooth security uses strong encryption to prevent eavesdropping.'
  },
  {
    id: 'bluetooth-service',
    term: 'Bluetooth Service',
    slug: 'bluetooth-service',
    definition: 'In the GATT profile, a collection of characteristics and relationships to accomplish a particular function. See BLE Service.',
    example: 'The heart rate monitor implemented the standard Bluetooth service for heart rate measurement.'
  },
  {
    id: 'bluetooth-socket',
    term: 'Bluetooth Socket',
    slug: 'bluetooth-socket',
    definition: 'A software endpoint for communication between two Bluetooth devices, similar to a TCP socket.',
    example: 'The Android app opened a Bluetooth socket to create a connection with the embedded device.'
  },
  {
    id: 'boot-animation',
    term: 'Boot Animation',
    slug: 'boot-animation',
    definition: 'The animation that is displayed on a device\'s screen while the operating system is loading.',
    example: 'He created a custom boot animation for his Android phone.'
  },
  {
    id: 'boot-args',
    term: 'Boot Args',
    slug: 'boot-args',
    definition: 'Arguments or parameters passed to the operating system kernel at boot time to configure its behavior.',
    example: 'He added the `nomodeset` boot arg to fix the display issue when booting Linux.'
  },
  {
    id: 'boot-config',
    term: 'Boot Config',
    slug: 'boot-config',
    definition: 'The configuration file for a boot loader, which specifies which operating systems to load and what parameters to use.',
    example: 'He edited the `grub.cfg` boot config file to change the default operating system.'
  },
  {
    id: 'boot-key',
    term: 'Boot Key',
    slug: 'boot-key',
    definition: 'A key on a keyboard that is pressed during startup to enter the BIOS/UEFI setup or a boot menu (e.g., F2, F12, Del).',
    example: 'He repeatedly pressed the F12 boot key to bring up the boot device selection menu.'
  },
  {
    id: 'boot-kernel',
    term: 'Boot Kernel',
    slug: 'boot-kernel',
    definition: 'The specific operating system kernel file that is loaded by the boot loader.',
    example: 'The boot loader loaded the `vmlinuz` boot kernel into memory and then started it.'
  },
  {
    id: 'boot-log',
    term: 'Boot Log',
    slug: 'boot-log',
    definition: 'A log file that records the events that occur during the system boot process.',
    example: 'He examined the boot log to find out why the system was taking so long to start up.'
  },
  {
    id: 'boot-manager',
    term: 'Boot Manager',
    slug: 'boot-manager',
    definition: 'A program that allows a user to choose which operating system to load from multiple installed on a computer. See Boot Loader.',
    example: 'The Windows Boot Manager allows you to dual-boot between Windows and Linux.'
  },
  {
    id: 'boot-mode',
    term: 'Boot Mode',
    slug: 'boot-mode',
    definition: 'A mode that a device can be put into for specific startup procedures, such as recovery mode or bootloader mode.',
    example: 'He put his Android phone into boot mode to flash a new custom ROM.'
  },
  {
    id: 'boot-option',
    term: 'Boot Option',
    slug: 'boot-option',
    definition: 'An entry in the BIOS/UEFI or boot manager that corresponds to a bootable device or operating system.',
    example: 'He added a new boot option for the USB drive.'
  },
  {
    id: 'boot-patch',
    term: 'Boot Patch',
    slug: 'boot-patch',
    definition: 'A patch that is applied to the boot loader or kernel to fix a problem or add functionality.',
    example: 'He had to apply a boot patch to get the new hardware working with the old operating system.'
  },
  {
    id: 'boot-params',
    term: 'Boot Params',
    slug: 'boot-params',
    definition: 'Parameters passed to the kernel at boot time. See Boot Args.',
    example: 'The boot params included the location of the root file system.'
  },
  {
    id: 'boot-recovery',
    term: 'Boot Recovery',
    slug: 'boot-recovery',
    definition: 'The process of recovering a system that will not boot, often by using a recovery partition or bootable media.',
    example: 'He used the boot recovery disk to repair the corrupted master boot record.'
  },
  {
    id: 'boot-script',
    term: 'Boot Script',
    slug: 'boot-script',
    definition: 'A script that is run automatically during the system boot process.',
    example: 'The sysadmin added a command to a boot script to automatically mount a network drive at startup.'
  },
  {
    id: 'boot-service',
    term: 'Boot Service',
    slug: 'boot-service',
    definition: 'A service or daemon that is started during the boot process.',
    example: 'The networking boot service was responsible for configuring the IP address.'
  },
  {
    id: 'boot-stack',
    term: 'Boot Stack',
    slug: 'boot-stack',
    definition: 'The initial memory stack that is set up and used by the boot loader and kernel during the early stages of the boot process.',
    example: 'The boot stack is very small, so complex operations must wait until the full memory management system is initialized.'
  },
  {
    id: 'boot-state',
    term: 'Boot State',
    slug: 'boot-state',
    definition: 'The current state of the system during the boot process.',
    example: 'The boot log showed that the system hung in the "loading drivers" boot state.'
  },
  {
    id: 'boot-time',
    term: 'Boot Time',
    slug: 'boot-time',
    definition: 'The amount of time it takes for a computer to start up and become usable.',
    example: 'Switching from a hard drive to an SSD significantly reduced the computer\'s boot time.'
  },
  {
    id: 'boot-utils',
    term: 'Boot Utils',
    slug: 'boot-utils',
    definition: 'A collection of utility programs for managing the boot process, such as configuring the boot loader or creating bootable media.',
    example: 'He used the boot utils to create a bootable USB drive from the ISO file.'
  },
  {
    id: 'boot-vector',
    term: 'Boot Vector',
slug: 'boot-vector',
    definition: 'The memory address where the CPU begins execution after a reset. Also known as the reset vector.',
    example: 'The ROM contains the initial code located at the boot vector.'
  },
  {
    id: 'boundary-scan',
    term: 'Boundary Scan',
    slug: 'boundary-scan',
    definition: 'A method for testing interconnections on printed circuit boards or within integrated circuits. It is standardized as JTAG (IEEE 1149.1).',
    example: 'The factory used a boundary scan test to check for soldering defects on the circuit boards.'
  },
];
