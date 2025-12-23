export const handbooks = [
  {
    id: 'general-knowledge',
    title: 'General Knowledge',
    description: '12 Chapters - Introduction, Safety, Rig Unit, Completion, Glossary',
    icon: '📚',
    color: '#4CAF50',
    chapters: 12
  },
  {
    id: 'wk-rokan',
    title: 'WK Rokan Operation',
    description: 'Operational Procedures and Guidelines',
    icon: '🛢️',
    iconImg: '/wk-rokan.png',
    color: '#2196F3',
    chapters: 10
  }
];

export const generalKnowledgeChapters = [
  { id: 1, title: 'Abbreviation', subtitle: 'Tap to see details', progress: 0 },
  { id: 2, title: 'Drilling & Well Intervention Safety', subtitle: 'Tap to see details', progress: 0 },
  { id: 3, title: 'HSSE Rig Operation', subtitle: 'Tap to see details', progress: 0 },
  { id: 4, title: 'Rig Unit', subtitle: 'Tap to see details', progress: 0 },
  { id: 5, title: 'Pre-Well Intervention Execution', subtitle: 'Tap to see details', progress: 0 },
  { id: 6, title: 'Well Intervention Operation', subtitle: 'Tap to see details', progress: 0 },
  { id: 7, title: 'Well Problem Handling', subtitle: 'Tap to see details', progress: 0 },
  { id: 8, title: 'Packer', subtitle: 'Tap to see details', progress: 0 },
  { id: 9, title: 'Well Head', subtitle: 'Tap to see details', progress: 0 },
  { id: 10, title: 'Well Completion', subtitle: 'Tap to see details', progress: 0 },
  { id: 11, title: 'Artificial Lift', subtitle: 'Tap to see details', progress: 0 },
  { id: 12, title: 'Glossary', subtitle: 'Tap to see details', progress: 0 }
];

export const rigHubChapters = [
  { id: 1, title: 'Objective', subtitle: 'Tap to see details' },
  { id: 2, title: 'Rig Hub Introduction', subtitle: 'Tap to see details' },
  { id: 3, title: 'On-Boarding Process', subtitle: 'Tap to see details' },
  { id: 4, title: 'Sumatera Operation Area', subtitle: 'Tap to see details' },
  { id: 5, title: 'Artificial Lift', subtitle: 'Tap to see details' },
  { id: 6, title: 'Heavy Oil Best Practice', subtitle: 'Tap to see details' },
  { id: 7, title: 'Light Oil Best Practice', subtitle: 'Tap to see details' },
  { id: 8, title: 'Special Operation', subtitle: 'Tap to see details' },
  { id: 9, title: 'Simultaneous Operations (SIMOPS)', subtitle: 'Tap to see details' },
  { id: 10, title: 'Appendix', subtitle: 'Tap to see details' }
];

export const bookmarks = [
  {
    id: 1,
    title: 'Artificial Lift',
    category: 'Rig Hub',
    progress: 0
  },
  {
    id: 2,
    title: 'Rig Unit',
    category: 'General Knowledge',
    progress: 0
  },
  {
    id: 3,
    title: 'Light Oil Best Practice',
    category: 'Rig Hub',
    progress: 0
  }
];

export const searchResults = [
  {
    id: 1,
    title: 'HSSE Rig Operation',
    subtitle: 'Health, safety, security, & environment',
    category: 'General Knowledge',
    icon: '📚'
  },
  {
    id: 2,
    title: 'Well Intervention Operation',
    subtitle: 'Operational procedures',
    category: 'General Knowledge',
    icon: '📚'
  },
  {
    id: 3,
    title: 'Sumatera Operation Area',
    subtitle: 'Regional operations',
    category: 'Rig Hub',
    icon: '🛢️'
  },
  {
    id: 4,
    title: 'Heavy Oil Best Practice',
    subtitle: 'Heavy oil operations',
    category: 'Rig Hub',
    icon: '🛢️'
  },
  {
    id: 5,
    title: 'Light Oil Best Practice',
    subtitle: 'Light oil operations',
    category: 'Rig Hub',
    icon: '🛢️'
  },
  {
    id: 6,
    title: 'Special Operation',
    subtitle: 'Specialized procedures',
    category: 'Rig Hub',
    icon: '🛢️'
  },
  {
    id: 7,
    title: 'Simultaneous Operations (SIMOPS)',
    subtitle: 'Concurrent operations management',
    category: 'Rig Hub',
    icon: '🛢️'
  }
];

export const articleContent = {
    'objective': {
     title: 'Objective',
     readTime: '5 min',
     progress: 0,
     content: `The objective of this Rig Hub handbook is to provide comprehensive guidance on Well Intervention operations in the Sumatera Operation Area. This handbook serves as a reference for operational best practices, safety procedures, and technical standards to ensure efficient and safe well intervention activities.

  Key objectives include:
  • Standardize operational procedures across all rig operations
  • Ensure HSE compliance and risk management
  • Optimize operational efficiency and performance
  • Provide clear guidelines for artificial lift operations
  • Document best practices for heavy and light oil operations
  • Establish protocols for special and simultaneous operations`,
     alert: 'Safety First: All operations must comply with PHR HSE standards and regulatory requirements.',
     checklist: [
      { id: 1, text: 'Review operational objectives', checked: false },
      { id: 2, text: 'Understand scope of handbook', checked: false },
      { id: 3, text: 'Identify applicable sections', checked: false },
      { id: 4, text: 'Complete orientation training', checked: false }
     ],
     attachments: [
      { name: 'Objective_Overview.pdf', type: 'pdf' },
      { name: 'Operations_Scope.pdf', type: 'pdf' }
     ],
     glossary: 'PHR: PT Pertamina Hulu Rokan | HSE: Health, Safety, Environment'
    },
    'rig-hub-introduction': {
     title: 'Rig Hub Introduction',
     readTime: '8 min',
     progress: 0,
     content: `The Rig Hub serves as the central coordination center for all well intervention operations in the Sumatera Operation Area. It provides integrated support for planning, execution, and monitoring of rig activities across multiple field locations.

  Rig Hub Functions:
  • Central operations coordination and monitoring
  • Real-time data management and analysis
  • Resource allocation and scheduling
  • HSE oversight and incident management
  • Technical support and troubleshooting
  • Performance tracking and optimization

  The Rig Hub operates 24/7 with dedicated teams managing different aspects of well intervention operations. It serves as the primary interface between field operations, engineering teams, and management.`,
     alert: 'Communication Protocol: All field operations must maintain continuous communication with Rig Hub.',
     checklist: [
      { id: 1, text: 'Complete Rig Hub orientation', checked: false },
      { id: 2, text: 'Understand reporting structure', checked: false },
      { id: 3, text: 'Review communication protocols', checked: false },
      { id: 4, text: 'Access Rig Hub systems', checked: false }
     ],
     attachments: [
      { name: 'Rig_Hub_Overview.pdf', type: 'pdf' },
      { name: 'Organization_Chart.pdf', type: 'pdf' },
      { name: 'Facility_Layout.png', type: 'image' }
     ],
     glossary: 'Rig Hub: Central coordination center for well intervention operations'
    },
    'on-boarding-process': {
     title: 'On-Boarding Process',
     readTime: '10 min',
     progress: 0,
     content: `The on-boarding process ensures all personnel are properly trained, certified, and familiar with PHR operational standards before engaging in well intervention activities.

  On-Boarding Steps:
  1. Pre-Arrival Documentation
    • Submit required certifications
    • Complete medical examination
    • Security clearance verification

  2. Orientation Training
    • HSE induction and safety briefing
    • Site-specific hazard awareness
    • Emergency response procedures
    • Environmental protection protocols

  3. Technical Training
    • Equipment familiarization
    • Standard operating procedures
    • Quality management systems
    • Digital systems and tools

  4. Field Authorization
    • Competency assessment
    • Work permit authorization
    • Site access credentials
    • Communication device assignment

  All personnel must complete the on-boarding process before starting work. Re-certification is required annually or when procedures are updated.`,
     alert: 'Mandatory Requirement: No personnel are allowed on site without completed on-boarding.',
     checklist: [
      { id: 1, text: 'Submit all required documents', checked: false },
      { id: 2, text: 'Complete HSE induction', checked: false },
      { id: 3, text: 'Pass technical assessment', checked: false },
      { id: 4, text: 'Obtain site access authorization', checked: false }
     ],
     attachments: [
      { name: 'Onboarding_Checklist.pdf', type: 'pdf' },
      { name: 'Training_Requirements.pdf', type: 'pdf' },
      { name: 'HSE_Induction_Slides.pdf', type: 'pdf' }
     ],
     glossary: 'On-boarding: Process of integrating new personnel into operations'
    },
    'sumatera-operation-area': {
     title: 'Sumatera Operation Area',
     readTime: '12 min',
     progress: 0,
     content: `The Sumatera Operation Area encompasses multiple oil and gas fields across central Sumatera, including Rokan Block operated by PT Pertamina Hulu Rokan. This area contains mature fields with diverse geological characteristics requiring specialized intervention techniques.

  Area Characteristics:
  • Total area: Approximately 6,900 km²
  • Number of active wells: 10,000+
  • Primary production: Crude oil and associated gas
  • Field types: Conventional and heavy oil reservoirs

  Major Field Clusters:
  1. Minas Field - Largest producing field
  2. Duri Field - Heavy oil steam flood operations
  3. Bekasap Field - Light oil production
  4. Petani Field - Mixed oil characteristics

  Operational Challenges:
  • Mature field decline management
  • Heavy oil production optimization
  • Water cut management
  • Infrastructure aging
  • Environmental compliance
  • Community engagement

  The operation area requires integrated well intervention strategies combining conventional workover, coiled tubing, wireline, and artificial lift operations to maintain and enhance production.`,
     alert: 'Area Specific: Each field has unique operational requirements and safety protocols.',
     checklist: [
      { id: 1, text: 'Review field characteristics', checked: false },
      { id: 2, text: 'Understand area regulations', checked: false },
      { id: 3, text: 'Identify logistical requirements', checked: false },
      { id: 4, text: 'Complete area orientation', checked: false }
     ],
     attachments: [
      { name: 'Operation_Area_Map.pdf', type: 'pdf' },
      { name: 'Field_Statistics.pdf', type: 'pdf' },
      { name: 'Infrastructure_Layout.png', type: 'image' }
     ],
     glossary: 'Rokan Block: Major oil and gas concession area in central Sumatera'
    },
    'artificial-lift': {
     title: 'Artificial Lift',
     readTime: '15 min',
     progress: 0,
     content: `Artificial lift systems are critical for maintaining production in mature wells where reservoir pressure is insufficient for natural flow. Various artificial lift methods are employed based on well conditions, fluid properties, and production requirements.

  Artificial Lift Methods:

  1. Sucker Rod Pumping (SRP)
    • Most common method in the operation area
    • Suitable for medium to high viscosity oils
    • Depth capability: Up to 3,000 meters
    • Production rates: 10-500 BOPD

  2. Electric Submersible Pump (ESP)
    • High volume production capability
    • Suitable for high water cut wells
    • Requires stable power supply
    • Production rates: 500-5,000 BOPD

  3. Progressive Cavity Pump (PCP)
    • Excellent for heavy oil and solids
    • Lower maintenance requirements
    • Depth capability: Up to 2,000 meters
    • Production rates: 50-1,500 BOPD

  4. Gas Lift
    • Applicable for wells with gas availability
    • Lower equipment costs
    • Suitable for deviated wells
    • Production rates: Variable

  Selection Criteria:
  • Fluid properties (viscosity, GOR, water cut)
  • Well depth and deviation
  • Production rate requirements
  • Operating costs and efficiency
  • Availability of utilities (power, gas)

  Installation and Maintenance:
  • Pre-installation well preparation
  • Equipment selection and sizing
  • Installation procedures and testing
  • Monitoring and optimization
  • Preventive maintenance schedules
  • Troubleshooting and repair`,
     alert: 'Safety Critical: Ensure proper well control before artificial lift installation or maintenance.',
     checklist: [
      { id: 1, text: 'Conduct well analysis', checked: false },
      { id: 2, text: 'Select appropriate lift method', checked: false },
      { id: 3, text: 'Verify equipment specifications', checked: false },
      { id: 4, text: 'Complete installation procedures', checked: false },
      { id: 5, text: 'Perform system optimization', checked: false }
     ],
     attachments: [
      { name: 'Artificial_Lift_Selection.pdf', type: 'pdf' },
      { name: 'SRP_Installation_Guide.pdf', type: 'pdf' },
      { name: 'ESP_Design_Manual.pdf', type: 'pdf' },
      { name: 'Pump_Sizing_Tool.xlsx', type: 'excel' }
     ],
     glossary: 'SRP: Sucker Rod Pump | ESP: Electric Submersible Pump | PCP: Progressive Cavity Pump | BOPD: Barrels of Oil Per Day'
    },
    'heavy-oil-best-practice': {
     title: 'Heavy Oil Best Practice',
     readTime: '14 min',
     progress: 0,
     content: `Heavy oil production in the Sumatera Operation Area, particularly in Duri Field, requires specialized techniques and best practices to optimize production while managing operational challenges associated with high viscosity fluids.

  Heavy Oil Characteristics:
  • API gravity: < 20°
  • Viscosity: > 100 cp at reservoir conditions
  • High asphaltene content
  • Thermal sensitivity

  Best Practices for Heavy Oil Operations:

  1. Thermal Recovery Methods
    Steam Flood Operations:
    • Continuous steam injection patterns
    • Steam quality monitoring (> 70%)
    • Injection pressure management
    • Producer-injector spacing optimization
    • Thermal breakthrough monitoring

  2. Production Optimization
    • Use of PCP or SRP for viscous fluids
    • Wellhead heating systems
    • Emulsion treatment
    • Sand control management
    • Flow assurance strategies

  3. Well Intervention Techniques
    • Hot oiling operations
    • Paraffin removal procedures
    • Scale inhibition programs
    • Downhole heating systems
    • Tubing flush procedures

  4. Facility Considerations
    • Heated flow lines and separators
    • Emulsion breaking systems
    • Water disposal and treatment
    • Heat management systems
    • Corrosion monitoring

  5. HSE Management
    • High temperature hazard control
    • Thermal insulation requirements
    • H2S monitoring in steam operations
    • Proper PPE for hot work
    • Emergency response procedures

  Operational Challenges and Solutions:
  • High lift costs → Optimize artificial lift selection
  • Emulsion formation → Use proper demulsifiers
  • Equipment scaling → Implement scale inhibition
  • Paraffin deposition → Regular hot oiling
  • Sand production → Install sand control devices`,
     alert: 'Thermal Hazard: High temperature operations require specialized PPE and procedures.',
     checklist: [
      { id: 1, text: 'Verify thermal system integrity', checked: false },
      { id: 2, text: 'Check heating equipment', checked: false },
      { id: 3, text: 'Confirm chemical treatment', checked: false },
      { id: 4, text: 'Monitor production parameters', checked: false },
      { id: 5, text: 'Conduct safety inspection', checked: false }
     ],
     attachments: [
      { name: 'Heavy_Oil_Handbook.pdf', type: 'pdf' },
      { name: 'Steam_Flood_Operations.pdf', type: 'pdf' },
      { name: 'Thermal_Safety_Guide.pdf', type: 'pdf' },
      { name: 'Production_Optimization.pdf', type: 'pdf' }
     ],
     glossary: 'API: American Petroleum Institute gravity scale | cp: centipoise (viscosity unit) | PCP: Progressive Cavity Pump'
    },
    'light-oil-best-practice': {
     title: 'Light Oil Best Practice',
     readTime: '12 min',
     progress: 0,
     content: `Light oil operations in fields like Bekasap require different approaches compared to heavy oil, focusing on pressure maintenance, water management, and efficient artificial lift deployment.

  Light Oil Characteristics:
  • API gravity: > 30°
  • Low viscosity: < 10 cp
  • Lower asphaltene content
  • Higher gas-oil ratio
  • Better flow characteristics

  Best Practices for Light Oil Operations:

  1. Pressure Maintenance
    • Water injection programs
    • Gas injection/recycling
    • Reservoir pressure monitoring
    • Voidage replacement management
    • Injection well performance tracking

  2. Artificial Lift Selection
    • ESP for high rate wells
    • Gas lift for high GOR wells
    • Beam pumps for low-medium rates
    • Jet pumps for remote locations

  3. Production Optimization
    • Maximize natural flow period
    • Optimize artificial lift efficiency
    • Manage gas-oil ratio
    • Control water production
    • Monitor well performance

  4. Well Intervention Strategy
    • Regular well testing programs
    • Proactive workover scheduling
    • Scale and corrosion prevention
    • Sand control management
    • Perforation optimization

  5. Water Management
    • Water cut monitoring
    • Produced water treatment
    • Water injection optimization
    • Conformance control
    • Disposal well management

  6. Gas Handling
    • Gas compression facilities
    • Gas-oil separation efficiency
    • Gas lift gas quality
    • Flare minimization
    • Gas utilization/sales

  Operational Advantages:
  • Lower lifting costs
  • Simpler facilities
    • Easier flow assurance
  • Better equipment reliability
  • Higher production rates possible

  Common Challenges:
  • Water breakthrough management
  • Rapid pressure decline
  • Scale formation
  • Corrosion in high water cut wells
  • Gas handling requirements`,
     alert: 'H2S Warning: Some light oil fields may have H2S content requiring special precautions.',
  checklist: [
      { id: 1, text: 'Review reservoir pressure data', checked: false },
      { id: 2, text: 'Verify artificial lift system', checked: false },
      { id: 3, text: 'Check water handling facilities', checked: false },
      { id: 4, text: 'Monitor GOR trends', checked: false },
      { id: 5, text: 'Inspect corrosion controls', checked: false }
     ],
     attachments: [
      { name: 'Light_Oil_Operations.pdf', type: 'pdf' },
      { name: 'Pressure_Maintenance.pdf', type: 'pdf' },
      { name: 'Water_Management_Guide.pdf', type: 'pdf' },
      { name: 'ESP_Optimization.pdf', type: 'pdf' }
     ],
     glossary: 'GOR: Gas-Oil Ratio | ESP: Electric Submersible Pump | API: American Petroleum Institute'
    },
    'special-operation': {
     title: 'Special Operation',
     readTime: '16 min',
     progress: 0,
     content: `Special operations encompass non-routine well intervention activities that require enhanced planning, specialized equipment, additional safety measures, and expert oversight.

  Types of Special Operations:

  1. Well Stimulation
    Acidizing:
    • Matrix acidizing for damage removal
    • Acid fracturing for permeability enhancement
    • Acid selection based on formation type
    • Safety protocols for acid handling
   
    Hydraulic Fracturing:
    • Fracture design and simulation
    • Proppant selection and placement
    • Equipment and personnel requirements
    • Environmental considerations

  2. Sidetrack and Redrilling
    • Sidetrack planning and design
    • Whipstock installation
    • Directional drilling operations
    • Casing while drilling
    • Wellbore abandonment procedures

  3. Sand Control Operations
    • Gravel pack installation
    • Expandable sand screens
    • Frac-pack procedures
    • Sand consolidation treatments

  4. Multilateral Well Operations
    • Junction completion systems
    • Selective re-entry procedures
    • Production optimization strategies

  5. Underbalanced Operations
    • UBD planning and risk assessment
    • Specialized equipment requirements
    • Real-time monitoring systems
    • Well control considerations

  6. High Pressure/High Temperature (HP/HT)
    • Equipment rating verification
    • Specialized tubulars and seals
    • Temperature management
    • Enhanced safety protocols

  Special Operation Management:

  Pre-Operation Phase:
  • Detailed engineering design
  • Risk assessment (HAZOP/HAZID)
  • Regulatory approvals
  • Specialized equipment procurement
  • Personnel competency verification
  • Contingency planning

  Execution Phase:
  • Enhanced supervision
  • Real-time monitoring
  • Quality control procedures
  • Communication protocols
  • Safety stand-down capability

  Post-Operation:
  • Performance evaluation
  • Lessons learned documentation
  • Equipment inspection and maintenance
  • Well testing and monitoring
  • Record keeping and reporting`,
     alert: 'High Risk: Special operations require Management of Change (MOC) approval and enhanced risk controls.',
     checklist: [
      { id: 1, text: 'Complete detailed engineering design', checked: false },
      { id: 2, text: 'Obtain MOC approval', checked: false },
      { id: 3, text: 'Verify specialized equipment', checked: false },
      { id: 4, text: 'Conduct pre-job safety meeting', checked: false },
      { id: 5, text: 'Confirm contingency plans', checked: false },
      { id: 6, text: 'Ensure expert oversight', checked: false }
     ],
     attachments: [
      { name: 'Special_Operations_Manual.pdf', type: 'pdf' },
      { name: 'Acidizing_Procedures.pdf', type: 'pdf' },
      { name: 'Sidetrack_Guidelines.pdf', type: 'pdf' },
      { name: 'MOC_Form.pdf', type: 'pdf' }
     ],
     glossary: 'MOC: Management of Change | HAZOP: Hazard and Operability Study | HP/HT: High Pressure High Temperature | UBD: Underbalanced Drilling'
    },
    'simops': {
     title: 'Simultaneous Operations (SIMOPS)',
     readTime: '14 min',
     progress: 0,
     content: `Simultaneous Operations (SIMOPS) involve multiple activities occurring at the same time and location that may create additional hazards or interfere with each other. Proper management is critical to ensure safety and operational efficiency.

  SIMOPS Categories:

  1. Drilling vs. Production
    • Well drilling near producing wells
    • Workover rig adjacent to drilling rig
    • Surface vs. subsurface interference
    • Shared facilities and equipment

  2. Multiple Well Interventions
    • Multiple rigs in same pad/location
    • Sequential vs. concurrent operations
    • Equipment and resource sharing
    • Personnel movement coordination

  3. Construction vs. Operations
    • Facility modifications during production
    • Pipeline construction near wells
    • Equipment installation activities
    • Road and infrastructure work

  4. Special Operations Overlap
    • Acidizing near active wells
    • Wireline operations during production
    • Coiled tubing and artificial lift
    • Crane operations and well work

  SIMOPS Management Framework:

  Planning Phase:
  • SIMOPS identification and assessment
  • Interface hazard analysis
  • Risk mitigation strategies
  • Resource allocation planning
  • Communication protocol development
  • Emergency response coordination

  Authorization Process:
  • SIMOPS assessment matrix
  • Risk ranking and classification
  • Approval authority levels:
    - Low risk: Supervisor approval
    - Medium risk: Operations Manager approval
    - High risk: General Manager approval
  • Permit to Work integration
  • Management of Change requirements

  Control Measures:

  Physical Controls:
  • Exclusion zones and barriers
  • Dedicated access routes
  • Equipment positioning
  • Utility isolation points
  • Emergency shutdown systems

  Administrative Controls:
  • Communication protocols
  • Coordination meetings
  • Simultaneous operation permits
  • Job safety analysis integration
  • Visitor management

  Organizational Controls:
  • SIMOPS coordinator appointment
  • Clear authority structure
  • Competency requirements
  • Training and briefings
  • Audit and inspection programs

  Communication Requirements:
  • Pre-job coordination meetings
  • Shift handover protocols
  • Real-time status updates
  • Emergency communication channels
  • Incident reporting procedures

  Monitoring and Review:
  • Ongoing risk assessment
  • Performance metrics tracking
  • Near-miss investigation
  • Continuous improvement
  • Lessons learned sharing`,
     alert: 'Critical: All SIMOPS require written approval before commencement and continuous coordination during execution.',
     checklist: [
      { id: 1, text: 'Complete SIMOPS assessment', checked: false },
      { id: 2, text: 'Identify interface hazards', checked: false },
      { id: 3, text: 'Obtain required approvals', checked: false },
      { id: 4, text: 'Conduct coordination meeting', checked: false },
      { id: 5, text: 'Verify communication systems', checked: false },
      { id: 6, text: 'Establish exclusion zones', checked: false },
      { id: 7, text: 'Appoint SIMOPS coordinator', checked: false }
     ],
     attachments: [
      { name: 'SIMOPS_Guidelines.pdf', type: 'pdf' },
      { name: 'SIMOPS_Assessment_Form.pdf', type: 'pdf' },
      { name: 'Interface_Hazard_Matrix.xlsx', type: 'excel' },
      { name: 'SIMOPS_Approval_Process.pdf', type: 'pdf' }
     ],
     glossary: 'SIMOPS: Simultaneous Operations | PTW: Permit to Work | JSA: Job Safety Analysis'
    },
    'appendix': {
     title: 'Appendix',
     readTime: '6 min',
     progress: 0,
     content: `This appendix provides supporting information, references, forms, and templates used in well intervention operations.

  Contents:

  A. Reference Standards and Regulations
    • API Standards (RP 53, RP 54, etc.)
    • Indonesian Oil & Gas Regulations
    • PHR Internal Standards
    • Industry Best Practices

  B. Forms and Templates
    • Well Intervention Authorization Form
    • Risk Assessment Template
    • Pre-Job Safety Checklist
    • SIMOPS Assessment Form
    • Management of Change Form
    • Incident Report Template
    • Daily Operations Report
    • Well Test Data Sheet

  C. Emergency Contact Information
    • Rig Hub Emergency Line
    • HSE Department
    • Medical Emergency Services
    • Fire and Rescue
    • Security Operations
    • Management Escalation List

  D. Equipment Specifications
    • Rig equipment specifications
    • Artificial lift system data
    • Well control equipment ratings
    • Tubular specifications
    • Chemical data sheets

  E. Glossary of Terms
    • Technical terminology
    • Abbreviations and acronyms
    • Unit conversions
    • Oilfield nomenclature

  F. Conversion Tables
    • Pressure units
    • Temperature scales
    • Flow rates
    • Volume measurements
    • Length and depth units

  G. Quick Reference Guides
    • Well control procedures
    • H2S safety protocols
    • Fire response procedures
    • First aid guidelines
    • Spill response actions

  H. Maps and Diagrams
    • Operation area maps
    • Field location diagrams
    • Facility layouts
    • Emergency assembly points
    • Evacuation routes

  I. Training and Certification Requirements
    • Mandatory training matrix
    • Certification validity periods
    • Refresher training schedule
    • Competency assessment criteria

  J. Revision History
    • Document version control
    • Change log
    • Distribution list
    • Next review date`,
     alert: 'Important: Ensure you are using the latest version of all forms and procedures.',
     checklist: [
      { id: 1, text: 'Review applicable standards', checked: false },
      { id: 2, text: 'Familiarize with forms', checked: false },
      { id: 3, text: 'Save emergency contacts', checked: false },
      { id: 4, text: 'Understand key terminology', checked: false }
     ],
     attachments: [
      { name: 'API_Standards_List.pdf', type: 'pdf' },
      { name: 'Forms_Templates.zip', type: 'zip' },
      { name: 'Emergency_Contacts.pdf', type: 'pdf' },
      { name: 'Conversion_Tables.pdf', type: 'pdf' },
      { name: 'Glossary_Complete.pdf', type: 'pdf' }
     ],
     glossary: 'API: American Petroleum Institute | PHR: PT Pertamina Hulu Rokan | HSE: Health Safety Environment'
    },
    // General Knowledge Chapters
    'abbreviation': {
     title: 'Abbreviation',
     readTime: '10 min',
     progress: 0,
     content: `This chapter provides a comprehensive list of abbreviations and acronyms commonly used in well intervention and oil & gas operations.

  Common Abbreviations:

  A-D:
  • API - American Petroleum Institute
  • BOPD - Barrels of Oil Per Day
  • BOP - Blowout Preventer
  • BHP - Bottom Hole Pressure
  • BHPT - Bottom Hole Pressure Temperature
  • CP - Casing Pressure
  • CT - Coiled Tubing
  • DP - Drill Pipe

  E-H:
  • ESP - Electric Submersible Pump
  • GOR - Gas Oil Ratio
  • H2S - Hydrogen Sulfide
  • HSE - Health, Safety, Environment
  • HSSE - Health, Safety, Security, Environment

  I-L:
  • ID - Internal Diameter
  • KOP - Kick Off Point
  • LOT - Leak Off Test

  M-P:
  • MD - Measured Depth
  • OD - Outside Diameter
  • PCP - Progressive Cavity Pump
  • PDC - Polycrystalline Diamond Compact
  • PPE - Personal Protective Equipment
  • PSI - Pounds per Square Inch

  Q-T:
  • SIMOPS - Simultaneous Operations
  • SOP - Standard Operating Procedure
  • SRP - Sucker Rod Pump
  • TD - Total Depth
  • TP - Tubing Pressure
  • TVD - True Vertical Depth

  U-Z:
  • WHP - Wellhead Pressure
  • WI - Well Intervention
  • WO - Workover`,
     alert: 'Note: Always verify abbreviations in context as some may have multiple meanings.',
     checklist: [
      { id: 1, text: 'Review common abbreviations', checked: false },
      { id: 2, text: 'Understand technical terms', checked: false },
      { id: 3, text: 'Memorize critical safety acronyms', checked: false },
      { id: 4, text: 'Reference when needed', checked: false }
     ],
     attachments: [
      { name: 'Complete_Abbreviation_List.pdf', type: 'pdf' },
      { name: 'Quick_Reference_Card.pdf', type: 'pdf' }
     ],
     glossary: 'This chapter serves as the abbreviation reference for the entire handbook.'
    },
    'drilling-safety': {
     title: 'Drilling & Well Intervention Safety',
     readTime: '15 min',
     progress: 0,
     content: `Safety is the top priority in all drilling and well intervention operations. This chapter outlines fundamental safety principles and practices.

  Core Safety Principles:

  1. Hazard Identification
    • Conduct thorough risk assessments before operations
    • Identify potential hazards (physical, chemical, environmental)
    • Implement appropriate control measures
    • Continuous monitoring during operations

  2. Well Control
    • Maintain proper drilling fluid properties
    • Monitor for kick indicators
    • BOP testing and maintenance
    • Emergency response procedures
    • Well control equipment certification

  3. Pressure Management
    • Understand well pressure profiles
    • Proper casing design and installation
    • Pressure testing procedures
    • Barrier philosophy implementation
    • Monitoring systems

  4. H2S Safety
    • H2S detection and monitoring
    • Respiratory protection equipment
    • Emergency evacuation procedures
    • Medical response for H2S exposure
    • Area classification and control

  5. Personal Protective Equipment (PPE)
    • Hard hat, safety glasses, steel-toed boots (mandatory)
    • Flame-resistant clothing
    • Gloves appropriate for task
    • Hearing protection in high-noise areas
    • Respiratory protection when required

  6. Emergency Response
    • Emergency action plans
    • Evacuation procedures
    • Muster points and accountability
    • Communication protocols
    • First aid and medical response

  Safety Culture:
  • Stop Work Authority - Everyone has the right and obligation to stop unsafe work
  • Near Miss Reporting - Report all incidents and near misses
  • Pre-Job Safety Meetings - Conduct before every operation
  • Continuous Improvement - Learn from incidents and implement improvements`,
     alert: 'Critical: No job is so important that it cannot be done safely. If conditions are unsafe, STOP WORK.',
     checklist: [
      { id: 1, text: 'Complete safety induction', checked: false },
      { id: 2, text: 'Verify PPE availability', checked: false },
      { id: 3, text: 'Review emergency procedures', checked: false },
      { id: 4, text: 'Conduct pre-job safety meeting', checked: false },
      { id: 5, text: 'Test H2S detection equipment', checked: false }
     ],
     attachments: [
      { name: 'Safety_Manual.pdf', type: 'pdf' },
      { name: 'Well_Control_Procedures.pdf', type: 'pdf' },
      { name: 'H2S_Safety_Guide.pdf', type: 'pdf' },
      { name: 'Emergency_Response_Plan.pdf', type: 'pdf' }
     ],
     glossary: 'BOP: Blowout Preventer | H2S: Hydrogen Sulfide | PPE: Personal Protective Equipment | HAZOP: Hazard and Operability Study'
    },
    'hsse-rig-operation': {
     title: 'HSSE Rig Operation',
     readTime: '12 min',
     progress: 0,
     content: `Health, Safety, Security, and Environment (HSSE) management is integral to all rig operations. This chapter covers HSSE requirements and best practices.

  HSSE Management System:

  1. Health Management
    • Pre-employment medical screening
    • Regular health monitoring
    • Occupational health surveillance
    • Fatigue management
    • Substance abuse policy
    • Mental health support

  2. Safety Management
    • Risk assessment and management
    • Permit to Work system
    • Job Safety Analysis (JSA)
    • Safety inspections and audits
    • Incident investigation
    • Safety performance metrics

  3. Security Management
    • Site access control
    • Personnel identification
    • Visitor management
    • Asset protection
    • Cyber security
    • Emergency lockdown procedures

  4. Environmental Management
    • Waste management and disposal
    • Spill prevention and response
    • Air emissions control
    • Water management
    • Noise control
    • Environmental monitoring

  Permit to Work System:
  • Hot Work Permit - welding, cutting, grinding
  • Cold Work Permit - routine maintenance activities
  • Confined Space Entry Permit
  • Excavation Permit
  • Lifting Operations Permit
  • Electrical Work Permit

  HSSE Performance Indicators:
  • Lost Time Injury Frequency (LTIF)
  • Total Recordable Incident Rate (TRIR)
  • Near Miss Reporting Rate
  • Environmental Incidents
  • Audit Compliance Score

  Continuous Improvement:
  • Regular HSSE meetings and toolbox talks
  • Lessons learned sharing
  • Best practice implementation
  • Training and competency development
  • Management review and commitment`,
     alert: 'HSSE Requirements: All personnel must hold valid HSSE certifications before site access.',
     checklist: [
      { id: 1, text: 'Complete HSSE induction', checked: false },
      { id: 2, text: 'Understand Permit to Work system', checked: false },
      { id: 3, text: 'Review environmental requirements', checked: false },
      { id: 4, text: 'Know emergency contacts', checked: false },
      { id: 5, text: 'Participate in HSSE meetings', checked: false }
     ],
     attachments: [
      { name: 'HSSE_Management_System.pdf', type: 'pdf' },
      { name: 'Permit_to_Work_Guide.pdf', type: 'pdf' },
      { name: 'Environmental_Procedures.pdf', type: 'pdf' },
      { name: 'JSA_Templates.pdf', type: 'pdf' }
     ],
     glossary: 'HSSE: Health Safety Security Environment | JSA: Job Safety Analysis | LTIF: Lost Time Injury Frequency | TRIR: Total Recordable Incident Rate'
    },
    'rig-unit': {
     title: 'Rig Unit',
     readTime: '14 min',
     progress: 0,
     content: `Understanding rig components and systems is essential for safe and efficient well intervention operations.

  Major Rig Components:

  1. Mast and Substructure
    • Derrick/Mast - vertical structure supporting hoisting equipment
    • Substructure - base supporting mast and providing working height
    • Crown block - fixed pulley system at mast top
    • Traveling block - movable pulley system

  2. Hoisting System
    • Drawworks - main hoisting mechanism
    • Wire rope and drilling line
    • Blocks and sheaves
    • Hook and swivel
    • Deadline anchor

  3. Rotating System
    • Top drive or rotary table
    • Kelly or drill string
    • Swivel (conventional systems)
    • Power transmission

  4. Circulation System
    • Mud pumps
    • Mud mixing and storage tanks
    • Shale shakers and solids control
    • Mud pits and agitators
    • Flow lines and standpipes

  5. Well Control Equipment
    • Blowout Preventer (BOP) stack
    • Annular preventer
    • Ram preventers (pipe, blind, shear)
    • Choke and kill lines
    • Accumulator system
    • Control panels

  6. Power Generation
    • Prime movers (diesel engines)
    • Generators
    • SCR (Silicon Controlled Rectifier) system
    • Distribution switchgear

  Rig Types:
  • Land Rigs - workover and drilling rigs
  • Jack-up Rigs - mobile offshore platforms
  • Coiled Tubing Units - specialized intervention
  • Wireline Units - logging and perforating
  • Snubbing Units - under-pressure operations

  Rig Classifications:
  • Light workover - up to 150 tons capacity
  • Medium workover - 150-300 tons
  • Heavy workover - above 300 tons
  • Drilling rigs - various capacities

  Rig Safety Systems:
  • BOP control system
  • Fire and gas detection
  • Emergency shutdown (ESD)
  • PA and alarm systems
  • Escape routes and lifeboats`,
     alert: 'Equipment Inspection: All rig equipment must be inspected and certified before operations.',
     checklist: [
      { id: 1, text: 'Conduct rig inspection', checked: false },
      { id: 2, text: 'Test BOP system', checked: false },
      { id: 3, text: 'Verify hoisting capacity', checked: false },
      { id: 4, text: 'Check safety systems', checked: false },
      { id: 5, text: 'Review equipment certifications', checked: false }
     ],
     attachments: [
      { name: 'Rig_Components_Guide.pdf', type: 'pdf' },
      { name: 'BOP_Testing_Procedure.pdf', type: 'pdf' },
      { name: 'Equipment_Specs.pdf', type: 'pdf' },
      { name: 'Rig_Inspection_Checklist.pdf', type: 'pdf' }
     ],
     glossary: 'BOP: Blowout Preventer | SCR: Silicon Controlled Rectifier | ESD: Emergency Shutdown | API: American Petroleum Institute'
    },
    'pre-well-intervention': {
     title: 'Pre-Well Intervention Execution',
     readTime: '13 min',
     progress: 0,
     content: `Proper planning and preparation are critical for successful and safe well intervention operations.

  Planning Phase:

  1. Well Data Review
    • Well history and completion status
    • Production and pressure data
    • Previous intervention records
    • Well schematic and tubular design
    • Reservoir characteristics

  2. Objectives Definition
    • Primary intervention objectives
    • Success criteria
    • Expected outcomes
    • Contingency plans

  3. Risk Assessment
    • Hazard identification (HAZID)
    • Risk analysis and evaluation
    • Control measures implementation
    • SIMOPS assessment if applicable
    • Emergency response planning

  4. Engineering Design
    • Well intervention design
    • Equipment selection
    • Tubular design and stress analysis
    • Hydraulics calculations
    • Materials selection

  5. Resource Planning
    • Rig and equipment requirements
    • Personnel and competency needs
    • Materials and consumables
    • Logistics and transportation
    • Timeline and schedule

  Preparation Phase:

  1. Regulatory Compliance
    • AFE (Authorization for Expenditure) approval
    • Well intervention permit
    • Environmental permits
    • SIMOPS approval if required
    • Regulatory notifications

  2. Pre-Job Meeting
    • Scope review with all stakeholders
    • Roles and responsibilities
    • HSE requirements
    • Communication protocols
    • Emergency procedures

  3. Site Preparation
    • Location access and preparation
    • Wellhead and tree inspection
    • Rig move and positioning
    • Utilities and facilities setup
    • Safety equipment installation

  4. Equipment Readiness
    • Equipment inspection and testing
    • Tubular inspection and preparation
    • BOP installation and testing
    • Well control equipment verification
    • Communication systems check

  5. Documentation
    • Well intervention program
    • Procedures and work instructions
    • Safety documentation (JSA, PTW)
    • Quality control plans
    • Daily reporting templates

  Quality Checks:
  • Pre-spud meeting completed
  • All permits in place
  • Equipment certified and tested
  • Personnel competency verified
  • Emergency systems functional`,
     alert: 'Pre-Job Meeting: Mandatory for all personnel before starting operations.',
     checklist: [
      { id: 1, text: 'Complete well data review', checked: false },
      { id: 2, text: 'Conduct risk assessment', checked: false },
      { id: 3, text: 'Obtain all required permits', checked: false },
      { id: 4, text: 'Hold pre-job meeting', checked: false },
      { id: 5, text: 'Verify equipment readiness', checked: false },
      { id: 6, text: 'Test communication systems', checked: false }
     ],
     attachments: [
      { name: 'Pre-Job_Checklist.pdf', type: 'pdf' },
      { name: 'Risk_Assessment_Template.pdf', type: 'pdf' },
      { name: 'Well_Intervention_Program.pdf', type: 'pdf' },
      { name: 'Equipment_Inspection_Forms.pdf', type: 'pdf' }
     ],
     glossary: 'AFE: Authorization for Expenditure | HAZID: Hazard Identification | JSA: Job Safety Analysis | PTW: Permit to Work | SIMOPS: Simultaneous Operations'
    },
    'well-intervention-operation': {
     title: 'Well Intervention Operation',
     readTime: '16 min',
     progress: 0,
     content: `This chapter covers the execution of well intervention operations from mobilization to completion.

  Types of Well Intervention:

  1. Workover Operations
    • Tubing retrieval and replacement
    • Packer setting and retrieval
    • Completion change-out
    • Sand cleanout
    • Artificial lift installation

  2. Coiled Tubing Operations
    • Circulation and cleanout
    • Acid stimulation
    • Nitrogen lifts
    • Through-tubing fishing
    • Perforation isolation

  3. Wireline Operations
    • Logging (pressure, temperature, production)
    • Perforating
    • Plug setting and retrieval
    • Memory gauge runs
    • Casing inspection

  4. Slickline Operations
    • Gauge runs
    • Plug setting/pulling
    • Valve manipulation
    • Bailer runs
    • Chemical treatments

  Operational Phases:

  Phase 1: Well Access
    • Well preparation and isolation
    • Wellhead equipment installation
    • Pressure testing
    • Initial well control establishment
    • Safety system verification

  Phase 2: Well Entry
    • BOP testing and function check
    • Initial circulation and conditioning
    • Running in hole with tools
    • Monitoring and communication
    • Continuous pressure monitoring

  Phase 3: Intervention Activities
    • Execute planned operations
    • Monitor real-time parameters
    • Adjust operations as needed
    • Document all activities
    • Maintain well control

  Phase 4: Well Restoration
    • Retrieve tools and equipment
    • Install completion components
    • Test installations
    • Well cleanup and conditioning
    • Final pressure tests

  Phase 5: Well Return to Production
    • Remove intervention equipment
    • Restore production equipment
    • Production testing
    • Handover to operations
    • Documentation completion

  Critical Operational Parameters:
  • Wellhead pressure (casing and tubing)
  • Fluid volumes and returns
  • Weight indicator
    • Torque and drag
  • H2S and gas monitoring
  • Equipment performance

  Well Control During Operations:
  • Maintain proper mud weight
  • Monitor for influx indicators
  • Conduct flow checks
  • BOP drills and readiness
  • Emergency shutdown procedures

  Quality Assurance:
  • Third-party verification when required
  • Photographic documentation
  • Real-time data recording
  • Quality control inspections
  • Compliance verification`,
     alert: 'Well Control: Maintain constant vigilance for kick indicators throughout operations.',
     checklist: [
      { id: 1, text: 'Verify BOP functionality', checked: false },
      { id: 2, text: 'Test pressure systems', checked: false },
      { id: 3, text: 'Confirm communication protocols', checked: false },
      { id: 4, text: 'Monitor key parameters continuously', checked: false },
      { id: 5, text: 'Document all activities', checked: false },
      { id: 6, text: 'Conduct safety checks', checked: false }
     ],
     attachments: [
      { name: 'Well_Intervention_Procedures.pdf', type: 'pdf' },
      { name: 'Workover_Guidelines.pdf', type: 'pdf' },
      { name: 'Coiled_Tubing_Manual.pdf', type: 'pdf' },
      { name: 'Wireline_Operations_Guide.pdf', type: 'pdf' },
      { name: 'Daily_Operations_Report.pdf', type: 'pdf' }
     ],
     glossary: 'BOP: Blowout Preventer | CT: Coiled Tubing | WL: Wireline | SL: Slickline | NPT: Non-Productive Time'
    },
    'well-problem-handling': {
     title: 'Well Problem Handling',
     readTime: '14 min',
     progress: 0,
     content: `This chapter addresses common well problems and their resolution during intervention operations.

  Common Well Problems:

  1. Stuck Pipe
    Causes:
    • Differential sticking
    • Key seating
    • Pack-off or bridge
    • Wellbore geometry issues

    Prevention:
    • Maintain proper mud properties
    • Minimize static time
    • Use rotation while tripping
    • Proper wiper trip procedures

    Resolution:
    • Jar and work pipe
    • Spot spotting fluid
    • Free point survey
    • Backoff operations
    • Fishing if necessary

  2. Lost Circulation
    Causes:
    • Natural fractures
    • Induced fractures from pressure
    • Depleted zones
    • Cavernous formations

    Prevention:
    • Monitor ECD carefully
    • Use appropriate mud weight
    • Managed pressure drilling
    • Reduce pump rates when needed

    Resolution:
    • LCM (Lost Circulation Material) pills
    • Cement plugs
    • Specialized sealants
    • Bridge plugs

  3. Well Control Issues (Kicks)
    Indicators:
    • Gain in pit volume
    • Flow rate increase
    • Pumps off but flow continues
    • Cut mud or gas in returns

    Response:
    • Shut in well per procedure
    • Record shut-in pressures
    • Implement well control procedure (Driller's Method or Wait & Weight)
    • Monitor pressures continuously
    • Circulate kick out safely

  4. H2S Presence
    Indicators:
    • H2S detector alarm
    • Sulfur smell (rotten eggs)
    • Metallic taste
    • Equipment discoloration

    Response:
    • Activate H2S emergency procedures
    • Don SCBA (Self-Contained Breathing Apparatus)
    • Evacuate if necessary
    • Increase monitoring
    • Notify authorities

  5. Sand Production
    Causes:
    • Formation consolidation loss
    • High drawdown
    • Reservoir pressure changes
    • Completion failure

    Management:
    • Reduce production rate
    • Install sand control completion
    • Use gravel pack or frac pack
    • Chemical consolidation

  6. Tubing/Packer Leaks
    Detection:
    • Pressure communication
    • Volume discrepancies
    • Production anomalies

    Resolution:
    • Pressure testing to locate leak
    • Patch or squeeze if possible
    • Replace damaged components
    • Full workover if necessary

  7. Paraffin/Asphaltene Deposition
    Prevention:
    • Chemical inhibitors
    • Maintain temperature above cloud point
    • Regular hot oil treatments

    Removal:
    • Hot oil circulation
    • Solvent treatments
    • Mechanical scraping
    • Coiled tubing cleanout

  Emergency Response:
  • Follow emergency response plan
  • Notify all relevant parties
  • Implement well control as needed
  • Document all actions
  • Conduct post-incident review`,
     alert: 'Emergency: In case of well control issues or H2S detection, follow emergency procedures immediately.',
     checklist: [
      { id: 1, text: 'Know emergency response procedures', checked: false },
      { id: 2, text: 'Understand well control methods', checked: false },
      { id: 3, text: 'Verify monitoring systems', checked: false },
      { id: 4, text: 'Check emergency equipment', checked: false },
      { id: 5, text: 'Review contingency plans', checked: false }
     ],
     attachments: [
      { name: 'Well_Control_Manual.pdf', type: 'pdf' },
      { name: 'Stuck_Pipe_Procedures.pdf', type: 'pdf' },
      { name: 'Lost_Circulation_Guide.pdf', type: 'pdf' },
      { name: 'H2S_Emergency_Procedures.pdf', type: 'pdf' },
      { name: 'Troubleshooting_Guide.pdf', type: 'pdf' }
     ],
     glossary: 'LCM: Lost Circulation Material | ECD: Equivalent Circulating Density | SCBA: Self-Contained Breathing Apparatus | H2S: Hydrogen Sulfide'
    },
    'packer': {
     title: 'Packer',
     readTime: '12 min',
     progress: 0,
     content: `Packers are critical completion components that provide isolation between tubing and casing annulus.

  Packer Types:

  1. Production Packers
    • Permanent Packers - cemented or mechanically locked
    • Retrievable Packers - can be pulled from well
    • Compression Set - set by compression from above
    • Tension Set - set by tension from above
    • Hydraulic Set - set using hydraulic pressure

  2. Service Packers
    • Bridge Plugs - temporary isolation
    • Straddle Packers - isolate specific zones
    • Through Tubing Packers - set through existing tubing

  Packer Components:

  • Slips - anchoring mechanism
  • Packing Element - sealing element (elastomer or metal)
  • Body - main structural component
  • Setting mechanism - compression, tension, or hydraulic
  • Seal bore - for seal assembly
  • Ports (if applicable) - for communication or circulation

  Packer Selection Criteria:

  1. Well Conditions
    • Temperature rating
    • Pressure rating
    • Fluid compatibility
    • Casing size and weight

  2. Operational Requirements
    • Permanent vs retrievable
    • Setting method
    • Seal assembly type
    • Tubing movement requirements

  3. Special Considerations
    • Corrosive environments
    • High temperature applications
    • Gas lift operations
    • Multi-zone completions

  Packer Installation:

  1. Pre-Installation
    • Verify packer compatibility
    • Inspect all components
    • Check casing condition at setting depth
    • Prepare setting tool

  2. Running Procedure
    • Rig up carefully
    • Run in hole with proper handling
    • Tag bottom or gauge ring
    • Position at setting depth
    • Orient if required

  3. Setting Procedure
    • Follow manufacturer procedures exactly
    • Apply proper setting force/pressure
    • Verify setting indicators
    • Confirm seal assembly engagement
    • Pressure test

  4. Testing
    • Test below packer (tubing pressure test)
    • Test above packer (annulus pressure test)
    • Hold test pressure per specifications
    • Document test results

  Packer Retrieval:

  • Tension-release type - pull specified weight
  • Shear-release type - pull to shear pins
  • Hydraulic-release type - apply release pressure
  • Milling - last resort for stuck packers

  Troubleshooting:

  • Packer won't set - check setting mechanism
  • Packer won't release - verify release procedure
  • Packer leaks - check seal assembly and elements
  • Packer stuck - use fishing or milling operations`,
     alert: 'Pressure Testing: Always pressure test packers after installation per specifications.',
     checklist: [
      { id: 1, text: 'Verify packer specifications', checked: false },
      { id: 2, text: 'Inspect packer components', checked: false },
      { id: 3, text: 'Check setting tool compatibility', checked: false },
      { id: 4, text: 'Follow setting procedure', checked: false },
      { id: 5, text: 'Conduct pressure tests', checked: false },
      { id: 6, text: 'Document installation', checked: false }
     ],
     attachments: [
      { name: 'Packer_Selection_Guide.pdf', type: 'pdf' },
      { name: 'Packer_Installation_Manual.pdf', type: 'pdf' },
      { name: 'Pressure_Testing_Procedures.pdf', type: 'pdf' },
      { name: 'Packer_Specifications.pdf', type: 'pdf' }
     ],
     glossary: 'Packer: Downhole tool that provides seal between tubing and casing | Seal Assembly: Component that seals to bore of packer'
    },
    'well-head': {
     title: 'Well Head',
     readTime: '13 min',
     progress: 0,
     content: `The wellhead is the surface termination of the wellbore, providing structural support and pressure control.

  Wellhead Components:

  1. Casing Head
    • Supports casing strings
    • Seals casing annulus
    • Provides outlet for annulus access
    • Bottom of wellhead assembly

  2. Tubing Head
    • Supports tubing string
    • Seals tubing-casing annulus
    • Provides tubing hanger seal
    • Connects to christmas tree

  3. Tubing Hanger
    • Suspends tubing in well
    • Provides seal between tubing and casing
    • May contain gas lift mandrel
    • Can have through-tubing capability

  4. Christmas Tree
    • Controls well flow
    • Provides pressure monitoring access
    • Allows intervention access
    • Contains safety valves

  Christmas Tree Components:

  • Master Valve - primary shut-off valve
  • Wing Valves - production flow control
  • Swab Valve - top valve for well access
  • Kill Wing Valve - for well kill operations
  • Flow Cross/Tee - flow path routing
  • Chokes - flow rate control

  Wellhead Pressure Ratings:

  • 2,000 psi working pressure
  • 3,000 psi working pressure
  • 5,000 psi working pressure
  • 10,000 psi working pressure
  • 15,000 psi working pressure (high pressure)
  • 20,000 psi working pressure (ultra-high pressure)

  Wellhead Installation:

  1. Surface Casing Head
    • Install on conductor/surface casing
    • Cement and test
    • Install next casing string
    • Test bowl and seal

  2. Intermediate Casing Head (if applicable)
    • Install on previous casing
    • Land and seal intermediate casing
    • Test seals and bowl

  3. Tubing Head
    • Install on production casing
    • Install tubing hanger
    • Test tubing hanger seal
    • Install adapter and tree

  4. Christmas Tree
    • Install on tubing head
    • Connect flow lines
    • Pressure test all components
    • Commission for service

  Wellhead Maintenance:

  • Regular inspections
  • Valve testing and maintenance
  • Pressure monitoring
  • Leak detection and repair
  • Corrosion monitoring
  • Annulus monitoring

  Wellhead Testing:

  • Initial installation test
  • Annual pressure tests
  • Post-intervention tests
  • Valve function tests
  • Seal integrity tests

  Safety Considerations:

  • Maintain proper pressure ratings
  • Ensure all barriers functional
  • Monitor annulus pressures
  • Follow lockout/tagout procedures
  • Use proper tools and techniques
  • Wear appropriate PPE

  Common Wellhead Problems:

  • Casing leaks - repair or replace
  • Valve leaks - repair or replace
  • Corrosion - monitor and protect
  • Sustained casing pressure - diagnose and address
  • Tree cap leaks - replace seals`,
     alert: 'Pressure Safety: Never exceed wellhead pressure ratings. Monitor all annuli for sustained pressure.',
     checklist: [
      { id: 1, text: 'Inspect wellhead condition', checked: false },
      { id: 2, text: 'Test all valves', checked: false },
      { id: 3, text: 'Check pressure gauges', checked: false },
      { id: 4, text: 'Monitor annulus pressures', checked: false },
      { id: 5, text: 'Verify safety systems', checked: false },
      { id: 6, text: 'Document inspection results', checked: false }
     ],
     attachments: [
      { name: 'Wellhead_Equipment_Manual.pdf', type: 'pdf' },
      { name: 'Wellhead_Testing_Procedures.pdf', type: 'pdf' },
      { name: 'Valve_Maintenance_Guide.pdf', type: 'pdf' },
      { name: 'Wellhead_Inspection_Checklist.pdf', type: 'pdf' }
     ],
     glossary: 'Wellhead: Surface equipment that provides structural and pressure-containing interface for drilling and production | Christmas Tree: Assembly of valves and fittings for flow control'
    },
    'well-completion': {
     title: 'Well Completion',
     readTime: '15 min',
     progress: 0,
     content: `Well completion is the process of preparing a well for production after drilling operations are complete.

  Completion Types:

  1. Open Hole Completion
    • No casing across production zone
    • Maximum reservoir contact
    • Suitable for competent formations
    • Lower initial cost
    • Limited control

  2. Cased Hole Completion
    • Production casing across reservoir
    • Perforated at selected intervals
    • Better control and selectivity
    • Allows zone isolation
    • Most common type

  3. Liner Completion
    • Liner instead of full casing string
    • Cost effective for deep wells
    • Adequate for many applications

  4. Gravel Pack Completion
    • Controls sand production
    • Gravel placed around screen
    • Open hole or cased hole
    • Conventional or frac-pack

  Completion Components:

  1. Production Tubing
    • Conducts fluids from reservoir to surface
    • Various sizes (2-3/8" to 4-1/2" common)
    • API grades based on application
    • Special materials for corrosive service

  2. Packer
    • Isolates tubing-casing annulus
    • Retrievable or permanent
    • Various setting mechanisms
    • Appropriate pressure/temperature rating

  3. Perforations
    • Create communication with reservoir
    • Shaped charge or bullet perforations
    • Phasing and shot density designed
    • Clean perforations critical

  4. Sand Control (if required)
    • Screens
    • Gravel packs
    • Frac packs
    • Chemical consolidation

  5. Artificial Lift (if required)
    • ESP, PCP, SRP, or Gas Lift
    • Selected based on well conditions
    • Installed during completion or later

  6. Subsurface Safety Valve (SSSV)
    • Fail-safe well shut-in
    • Surface controlled
    • Regulatory requirement for some wells
    • Tested regularly

  Completion Design Process:

  1. Data Collection
    • Reservoir data
    • Production forecast
    • Well trajectory
    • Fluid properties

  2. Completion Selection
    • Based on reservoir characteristics
    • Expected production rates
    • Sand control requirements
    • Cost optimization

  3. Component Selection
    • Tubing size and grade
    • Packer type
    • Completion accessories
    • Artificial lift requirements

  4. Installation Planning
    • Procedures development
    • Equipment requirements
    • Quality control measures
    • Testing procedures

  Completion Installation:

  Phase 1: Preparation
  • Clean out wellbore
  • Condition mud system
  • Run casing logs
  • Perforate zones

  Phase 2: Completion Running
  • Run tubing and packer
  • Set packer
  • Install completion components
  • Make up wellhead

  Phase 3: Testing
  • Pressure test completion
  • Test packer
  • Test SSSV if present
  • Commission for production

  Phase 4: Well Cleanup
  • Perforate if not already done
  • Displace fluids
  • Flow back and clean up
  • Optimize production

  Completion Best Practices:

  • Use quality components
  • Follow procedures strictly
  • Test all barriers
  • Document thoroughly
  • Plan for future interventions
  • Consider artificial lift early`,
     alert: 'Quality Control: All completion components must be inspected and tested per specifications.',
     checklist: [
      { id: 1, text: 'Review completion design', checked: false },
      { id: 2, text: 'Inspect all components', checked: false },
      { id: 3, text: 'Verify tubing specifications', checked: false },
      { id: 4, text: 'Test packer after setting', checked: false },
      { id: 5, text: 'Pressure test completion', checked: false },
      { id: 6, text: 'Document completion details', checked: false }
     ],
     attachments: [
      { name: 'Completion_Design_Manual.pdf', type: 'pdf' },
      { name: 'Perforation_Guide.pdf', type: 'pdf' },
      { name: 'Sand_Control_Handbook.pdf', type: 'pdf' },
      { name: 'Completion_Procedures.pdf', type: 'pdf' },
      { name: 'Well_Schematic_Template.pdf', type: 'pdf' }
     ],
     glossary: 'Completion: Process of making a well ready for production | SSSV: Subsurface Safety Valve | Gravel Pack: Sand control method using graded gravel'
    },
    'artificial-lift-gk': {
     title: 'Artificial Lift',
     readTime: '14 min',
     progress: 0,
     content: `Artificial lift systems are used to increase production when reservoir pressure is insufficient for natural flow.

  Artificial Lift Selection:

  Factors to Consider:
  • Well depth and deviation
  • Production rate requirements
  • Fluid properties (viscosity, GOR, water cut)
  • Reservoir pressure
  • Operating costs
  • Electrical power availability
  • Gas availability (for gas lift)
  • Solids content

  Artificial Lift Methods:

  1. Sucker Rod Pump (SRP)
    Description:
    • Reciprocating pump driven by surface unit
    • Positive displacement
    • Most common artificial lift method

    Advantages:
    • Handles high viscosity
    • Tolerates solids
    • Wide range of depths and rates
    • Proven technology

    Disadvantages:
    • High maintenance
    • Rod and tubing wear
    • Limited to vertical/near-vertical wells
    • Relatively low efficiency

    Applications:
    • Low to medium rate wells
    • Viscous oils
    • Shallow to medium depth

  2. Electric Submersible Pump (ESP)
    Description:
    • Multistage centrifugal pump driven by downhole motor
    • Variable frequency drive for control
    • High volume capability

    Advantages:
    • High production rates
    • Handles high water cut
    • Good for deviated wells
    • Minimal surface footprint

    Disadvantages:
    • Sensitive to solids
    • Requires stable power
    • High initial cost
    • Not suitable for very viscous fluids

    Applications:
    • High rate wells
    • High water cut
    • Offshore platforms
    • Medium to high GOR

  3. Progressive Cavity Pump (PCP)
    Description:
    • Positive displacement pump
    • Rotor rotating inside elastomer stator
    • Surface drive or downhole motor

    Advantages:
    • Excellent for heavy oil
    • Handles solids well
    • Smooth, pulsation-free flow
    • Lower operating costs

    Disadvantages:
    • Temperature limited (elastomer)
    • Depth limited
    • Stator wear in abrasive conditions

    Applications:
    • Heavy oil
    • High solids content
    • Shallow to medium depth
    • Cold production

  4. Gas Lift
    Description:
    • Compressed gas injected to lighten fluid column
    • Continuous or intermittent
    • Uses gas lift valves

    Advantages:
    • Flexible and easily controlled
    • Handles solids and scales
    • Good for high temperature
    • Low maintenance

    Disadvantages:
    • Requires gas source and compression
    • Lower efficiency
    • Complex valve system

    Applications:
    • High GOR wells
    • Where gas is available
    • High temperature wells
    • Offshore applications

  5. Hydraulic Pumping
    Description:
    • Surface power fluid pumped down to drive subsurface pump
    • Free piston or fixed piston types

    Advantages:
    • Multiple wells from central power
    • Easy to change pump size
    • Good for deviated wells

    Disadvantages:
    • Complex surface facilities
    • Requires clean power fluid
    • Higher operating cost

    Applications:
    • Remote locations
    • Multiple well installations
    • Deviated wells

  Artificial Lift Installation:

  1. Design Phase
    • Well analysis
    • System selection
    • Equipment sizing
    • Surface facility requirements

  2. Installation Phase
    • Equipment preparation
    • Installation procedures
    • Quality control
    • Commissioning

  3. Optimization Phase
    • Performance monitoring
    • Parameter adjustment
    • Production optimization
    • Efficiency improvement

  Artificial Lift Monitoring:

  • Production rates
  • Power consumption
  • Pump intake pressure
  • Motor temperature/current
  • Vibration and noise
  • Fluid levels
  • System efficiency

  Troubleshooting Common Problems:

  • Low production - check pump capacity and intake pressure
  • High power consumption - check for mechanical issues
  • Frequent failures - analyze failure mode and root cause
  • Gas locking (ESP) - improve gas handling
  • Rod/tubing wear (SRP) - check alignment and centralizers`,
     alert: 'Installation Safety: Follow all safety procedures during artificial lift installation and maintenance.',
     checklist: [
      { id: 1, text: 'Conduct well analysis', checked: false },
      { id: 2, text: 'Select appropriate lift method', checked: false },
      { id: 3, text: 'Size equipment properly', checked: false },
      { id: 4, text: 'Prepare installation procedures', checked: false },
      { id: 5, text: 'Test and commission system', checked: false },
      { id: 6, text: 'Establish monitoring protocol', checked: false }
     ],
     attachments: [
      { name: 'Artificial_Lift_Selection_Guide.pdf', type: 'pdf' },
      { name: 'SRP_Design_Manual.pdf', type: 'pdf' },
      { name: 'ESP_Handbook.pdf', type: 'pdf' },
      { name: 'PCP_Installation_Guide.pdf', type: 'pdf' },
      { name: 'Gas_Lift_Design.pdf', type: 'pdf' }
     ],
     glossary: 'SRP: Sucker Rod Pump | ESP: Electric Submersible Pump | PCP: Progressive Cavity Pump | GOR: Gas Oil Ratio | VFD: Variable Frequency Drive'
    },
    'glossary': {
     title: 'Glossary',
     readTime: '10 min',
     progress: 0,
     content: `This glossary provides definitions of common terms used in well intervention and oil & gas operations.

  A:
  • Annulus - Space between casing strings or between tubing and casing
  • API - American Petroleum Institute, sets industry standards
  • Artificial Lift - Mechanical methods to increase production

  B:
  • BHA - Bottom Hole Assembly
  • BHP - Bottom Hole Pressure
  • BOP - Blowout Preventer, primary well control equipment
  • BOPD - Barrels of Oil Per Day
  • Bridge Plug - Downhole tool for temporary zone isolation

  C:
  • Casing - Steel pipe cemented in wellbore for structural integrity
  • Circulation - Movement of fluids in wellbore
  • Completion - Process of preparing well for production
  • CT - Coiled Tubing, continuous steel pipe on reel

  D:
  • Deviation - Angle of wellbore from vertical
  • Drawdown - Pressure differential between reservoir and wellbore
  • Drill Pipe - Tubular used to transmit rotation and drilling fluid

  E:
  • ESP - Electric Submersible Pump
  • ECD - Equivalent Circulating Density

  F:
  • Fishing - Retrieval of equipment from wellbore
  • Formation - Rock layer containing hydrocarbons
  • Fracturing - Hydraulic stimulation to create fractures

  G:
  • GOR - Gas Oil Ratio
  • Gas Lift - Artificial lift method using gas injection
  • Gravel Pack - Sand control method using graded gravel

  H:
  • H2S - Hydrogen Sulfide, toxic and corrosive gas
  • HSE - Health, Safety, Environment
  • Hydrocarbons - Organic compounds of hydrogen and carbon (oil and gas)

  I:
  • Intervention - Any operation in completed well
  • Injection - Pumping fluids into reservoir

  K:
  • Kick - Influx of formation fluids into wellbore
  • Kill - To stop well flow by increasing fluid density

  L:
  • Liner - Casing that doesn't extend to surface
  • Logging - Measuring wellbore/formation properties
  • Lost Circulation - Loss of drilling fluid to formation

  M:
  • MD - Measured Depth along wellbore
  • Mud - Drilling or completion fluid
  • Mud Weight - Density of drilling fluid

  P:
  • Packer - Tool to seal annular space
  • Perforation - Holes through casing to reservoir
  • PCP - Progressive Cavity Pump
  • PPE - Personal Protective Equipment
  • Production Tubing - Pipe for producing fluids to surface

  R:
  • Reservoir - Subsurface rock containing hydrocarbons
  • Rig - Equipment for drilling or well intervention
  • ROV - Remotely Operated Vehicle

  S:
  • SIMOPS - Simultaneous Operations
  • Slickline - Solid steel wire for well operations
  • SRP - Sucker Rod Pump
  • SSSV - Subsurface Safety Valve
  • Stimulation - Treatment to improve production

  T:
  • TD - Total Depth
  • Tree - Christmas tree, wellhead flow control equipment
  • TVD - True Vertical Depth
  • Tubing - Pipe inside casing for production

  W:
  • Wellbore - Hole drilled for oil/gas well
  • Wellhead - Surface termination of well
  • Wireline - Cable with electrical conductors for logging/tools
  • Workover - Well intervention to restore/improve production

  Units and Conversions:
  • bbl - Barrel (42 US gallons)
  • psi - Pounds per Square Inch
  • ppg - Pounds per Gallon (mud weight)
  • ft - Feet
  • MD - Measured Depth
  • TVD - True Vertical Depth`,
     alert: 'Reference: Use this glossary as a quick reference for technical terms throughout the handbook.',
     checklist: [
      { id: 1, text: 'Review key terminology', checked: false },
      { id: 2, text: 'Understand abbreviations', checked: false },
      { id: 3, text: 'Familiarize with units', checked: false },
      { id: 4, text: 'Reference when needed', checked: false }
     ],
     attachments: [
      { name: 'Complete_Glossary.pdf', type: 'pdf' },
      { name: 'Unit_Conversions.pdf', type: 'pdf' },
      { name: 'Technical_Terms_Reference.pdf', type: 'pdf' }
     ],
     glossary: 'This glossary contains definitions for all technical terms used in well intervention operations.'
    },
    // Legacy content for backward compatibility
    'artificial-lift-legacy': {
     title: 'Artificial Lift',
     readTime: '8 min',
     progress: 12,
     content: `This is a sample chapter body. Include a short summary and any key safety callouts that readers should notice.`,
     alert: 'Safety Alert: Ensure SIMOPS is approved before starting.',
     checklist: [
      { id: 1, text: 'Inspect equipment', checked: false },
      { id: 2, text: 'Conduct HSE briefing', checked: false },
      { id: 3, text: 'Verify documentation', checked: false },
      { id: 4, text: 'Install packer', checked: false }
     ],
     attachments: [
      { name: 'SIMOPS_Plan.pdf', type: 'pdf' },
      { name: 'Rig_Hub_Map.png', type: 'image' }
     ],
     glossary: 'Tap SOP for a quick definition.'
    }
  };

  // Function to get article content by ID
  export function getArticleContent(chapterId, handbookId) {
    // Map chapter IDs to content keys for Rig Hub
    if (handbookId === 'wk-rokan') {
     const contentMap = {
      1: 'objective',
      2: 'rig-hub-introduction',
      3: 'on-boarding-process',
      4: 'sumatera-operation-area',
      5: 'artificial-lift',
      6: 'heavy-oil-best-practice',
      7: 'light-oil-best-practice',
      8: 'special-operation',
      9: 'simops',
      10: 'appendix'
     };
     const contentKey = contentMap[chapterId];
     return articleContent[contentKey] || articleContent['objective'];
    }
    
    // Map chapter IDs to content keys for General Knowledge
    if (handbookId === 'general-knowledge') {
     const contentMap = {
      1: 'abbreviation',
      2: 'drilling-safety',
      3: 'hsse-rig-operation',
      4: 'rig-unit',
      5: 'pre-well-intervention',
      6: 'well-intervention-operation',
      7: 'well-problem-handling',
      8: 'packer',
      9: 'well-head',
      10: 'well-completion',
      11: 'artificial-lift-gk',
      12: 'glossary'
     };
     const contentKey = contentMap[chapterId];
     return articleContent[contentKey] || articleContent['abbreviation'];
    }
  
    // Default fallback for other handbooks
    return articleContent['artificial-lift-legacy'];
  }

  // Export default content for backward compatibility
  export const defaultArticleContent = articleContent['artificial-lift-legacy'];
