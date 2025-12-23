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
  
    // Default fallback for other handbooks
    return articleContent['artificial-lift-legacy'];
  }

  // Export default content for backward compatibility
  export const defaultArticleContent = articleContent['artificial-lift-legacy'];
