export type Question = {
  question: string;
  options: {
    A: string;
    B: string;
    C: string;
    D: string;
    E: string;
  };
  correctAnswer: string;
  explanation: string;
};

export type QuestionSet = {
  id: string;
  title: string;
  questions: Question[];
};

export type QuestionBankFolder = {
  id: string;
  title: string;
  questionSets: QuestionSet[];
  subfolders: QuestionBankFolder[];
};

export const questionBankFolders: QuestionBankFolder[] = [
  {
    "id": "foundations-of-biomedical-science",
    "title": "Foundations of Biomedical Science",
    "questionSets": [],
    "subfolders": []
  },
  {
    "id": "physiology-and-anatomy-of-systems",
    "title": "Physiology and Anatomy of Systems",
    "questionSets": [],
    "subfolders": [
      {
        "id": "fundamentals-of-anatomy-and-histology",
        "title": "Fundamentals of Anatomy and Histology",
        "questionSets": [
          {
            "id": "fah02l-anatomical-terminology",
            "title": "FAH02L Anatomical Terminology",
            "questions": [
              {
                "question": "A patient is standing with the forearms pronated and the palms facing posteriorly. When describing the position of the thumb relative to the little finger, which statement is anatomically correct?",
                "options": {
                  "A": "The thumb is medial to the little finger because the palms face posteriorly",
                  "B": "The thumb is lateral to the little finger because descriptions assume the anatomical position",
                  "C": "The thumb is anterior to the little finger because it lies closer to the front of the body",
                  "D": "The thumb is proximal to the little finger because it is closer to the wrist",
                  "E": "The thumb is superficial to the little finger because it is more exposed"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A radiologist produces an image that divides the body into anterior and posterior portions. In which anatomical plane was the image obtained?",
                "options": {
                  "A": "Median plane",
                  "B": "Sagittal plane",
                  "C": "Coronal plane",
                  "D": "Transverse plane",
                  "E": "Oblique plane"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A clinician describes a skin lesion as lying inferior to the umbilicus, lateral to the midline and superficial to the abdominal muscles. Which interpretation is most accurate?",
                "options": {
                  "A": "The lesion is below the umbilicus, away from the midline and closer to the body surface",
                  "B": "The lesion is above the umbilicus, away from the midline and within the abdominal cavity",
                  "C": "The lesion is below the umbilicus, close to the midline and within the abdominal muscles",
                  "D": "The lesion is above the umbilicus, close to the midline and closer to the body surface",
                  "E": "The lesion is below the umbilicus, away from the body surface and close to the midline"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "During examination, a patient is asked to bring their heel towards their buttock while keeping the thigh relatively still. Which movement is being tested?",
                "options": {
                  "A": "Flexion at the hip joint",
                  "B": "Extension at the hip joint",
                  "C": "Flexion at the knee joint",
                  "D": "Plantarflexion at the ankle joint",
                  "E": "Dorsiflexion at the ankle joint"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient begins with the upper limb in the anatomical position and moves it laterally away from the trunk within the coronal plane. Which movement has occurred at the shoulder joint?",
                "options": {
                  "A": "Flexion",
                  "B": "Extension",
                  "C": "Abduction",
                  "D": "Lateral rotation",
                  "E": "Circumduction"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient is asked to place the palm flat on a table and then move the thumb away from the index finger while keeping the thumb in the same plane as the palm. Which movement of the thumb is being performed?",
                "options": {
                  "A": "Abduction",
                  "B": "Adduction",
                  "C": "Extension",
                  "D": "Opposition",
                  "E": "Reposition"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient is unable to turn the palm upwards to hold a bowl of soup. Which movement is impaired?",
                "options": {
                  "A": "Pronation",
                  "B": "Supination",
                  "C": "Opposition",
                  "D": "Medial rotation",
                  "E": "Circumduction"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "In the adult brain, a structure is described as lying on the ventral surface. Which surface is being identified?",
                "options": {
                  "A": "The superior surface of the brain",
                  "B": "The inferior surface of the brain",
                  "C": "The posterior surface of the brain",
                  "D": "The lateral surface of the brain",
                  "E": "The medial surface of the brain"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During lower-limb development, the limb bud rotates so that the embryological flexor compartment comes to lie posteriorly. Which pair of adult movements corresponds most closely to extension and flexion at the ankle, respectively?",
                "options": {
                  "A": "Plantarflexion and dorsiflexion",
                  "B": "Dorsiflexion and plantarflexion",
                  "C": "Inversion and eversion",
                  "D": "Eversion and inversion",
                  "E": "Abduction and adduction"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient reports pain in the upper central region of the abdomen. The abdomen is divided using two midclavicular lines and the subcostal and transtubercular planes. Which region contains the reported pain?",
                "options": {
                  "A": "Right hypochondriac region",
                  "B": "Left hypochondriac region",
                  "C": "Epigastric region",
                  "D": "Umbilical region",
                  "E": "Hypogastric region"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fah02l-the-basic-tissues",
            "title": "FAH02L The Basic Tissues",
            "questions": [
              {
                "question": "A histological section from an unknown organ shows a single layer of flattened cells specialised for rapid diffusion. Which location is most consistent with this finding?",
                "options": {
                  "A": "Epidermis of the skin",
                  "B": "Alveoli of the lungs",
                  "C": "Oesophagus",
                  "D": "Urinary bladder",
                  "E": "Anal canal"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A biopsy from the proximal oesophagus demonstrates multiple layers of flattened epithelial cells. Which property of this tissue best explains its location?",
                "options": {
                  "A": "Maximises diffusion of gases",
                  "B": "Allows repeated stretching without damage",
                  "C": "Provides protection against mechanical abrasion",
                  "D": "Facilitates secretion of digestive enzymes",
                  "E": "Increases absorption of nutrients"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient undergoes cystoscopy. The bladder wall is distended during the procedure, and the epithelial cells become flatter without loss of integrity. Which epithelial type is responsible for this property?",
                "options": {
                  "A": "Simple squamous epithelium",
                  "B": "Stratified squamous epithelium",
                  "C": "Simple columnar epithelium",
                  "D": "Pseudostratified columnar epithelium",
                  "E": "Transitional (urothelial) epithelium"
                },
                "correctAnswer": "E",
                "explanation": "No explanation provided."
              },
              {
                "question": "During a dissection, a student reflects the skin and removes the loose fatty layer containing superficial vessels and cutaneous nerves before reaching the dense connective tissue overlying skeletal muscle. Which structure has been removed?",
                "options": {
                  "A": "Epidermis",
                  "B": "Dermis",
                  "C": "Superficial fascia (subcutaneous tissue)",
                  "D": "Deep fascia",
                  "E": "Epimysium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A surgeon notes that the skin over the palm is much more difficult to separate from deeper tissues than the skin over the dorsum of the hand. What is the most important anatomical reason for this difference?",
                "options": {
                  "A": "The palmar epidermis contains more simple squamous epithelium",
                  "B": "The palmar dermis lacks collagen fibres",
                  "C": "The palm contains more numerous and shorter skin ligaments connecting the dermis to the deep fascia",
                  "D": "The dorsal hand contains thicker deep fascia",
                  "E": "The palm has fewer cutaneous nerves"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Following prolonged immobility during a long-haul flight, venous return from the lower limbs is reduced. Which mechanism normally provides the greatest assistance in returning blood to the heart from the legs during walking?",
                "options": {
                  "A": "Rhythmic contraction of skeletal muscles compressing veins with one-way valves",
                  "B": "Contraction of smooth muscle within capillary walls",
                  "C": "High arterial pressure transmitted directly into veins",
                  "D": "Passive recoil of lymphatic vessels",
                  "E": "Diffusion across venous capillary beds"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "During dissection, a student must distinguish an artery from a vein after colour has faded in the preserved specimen. Which feature is most reliable?",
                "options": {
                  "A": "Arteries always lie deeper than veins",
                  "B": "Veins always contain valves that are externally visible",
                  "C": "Arteries have a thicker smooth muscle layer and resist collapse",
                  "D": "Veins have thicker connective tissue walls than arteries",
                  "E": "Arteries have a wider lumen than veins"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A thrombus completely occludes the central retinal artery. Vision is rapidly lost because the retina receives no meaningful collateral blood supply. The central retinal artery is best classified as which type of vessel?",
                "options": {
                  "A": "Functional anastomotic artery",
                  "B": "Portal vein",
                  "C": "Anatomical end artery",
                  "D": "Musculovenous artery",
                  "E": "Accompanying artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient develops a slowly progressive narrowing of a coronary artery. Despite small arterial connections between coronary vessels, the affected myocardium still becomes ischaemic. Why do these anastomoses fail to prevent tissue damage?",
                "options": {
                  "A": "Coronary arteries have no arterial connections whatsoever",
                  "B": "Coronary anastomoses occur only at the capillary level and cannot provide sufficient blood flow",
                  "C": "Coronary veins divert blood away from the myocardium",
                  "D": "Coronary arteries drain directly into lymphatic vessels",
                  "E": "Coronary circulation lacks capillary beds"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient develops marked swelling of the lower limb after surgical removal of several inguinal lymph nodes. Which mechanism best explains the swelling?",
                "options": {
                  "A": "Reduced arterial blood flow into the limb",
                  "B": "Failure of venous valves causing retrograde blood flow",
                  "C": "Impaired drainage of excess interstitial fluid from tissues",
                  "D": "Increased secretion of connective tissue matrix",
                  "E": "Loss of capillary permeability to plasma proteins"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fah04l-skeleton-and-joints",
            "title": "FAH04L Skeleton and Joints",
            "questions": [
              {
                "question": "A surgeon repairs a fractured proximal phalanx of the index finger. Although the bone is only a few centimetres long, it is classified as a long bone. Which criterion determines this classification?",
                "options": {
                  "A": "It contains a medullary cavity",
                  "B": "It develops by endochondral ossification",
                  "C": "Its length is greater than its width",
                  "D": "It contains compact bone surrounding spongy bone",
                  "E": "It is found within a limb"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient sustains degeneration of the intervertebral discs. Which property of the predominant cartilage in these discs is most important for normal function?",
                "options": {
                  "A": "High elasticity allowing repeated deformation",
                  "B": "Efficient diffusion across a thin epithelial layer",
                  "C": "Resistance to compression with minimal deformation",
                  "D": "Ability to generate synovial fluid",
                  "E": "Capacity for rapid regeneration following injury"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During microscopy of compact bone, a student identifies concentric lamellae surrounding a central canal containing blood vessels and nerves. What is the name of this functional unit?",
                "options": {
                  "A": "Trabecula",
                  "B": "Osteon",
                  "C": "Medullary cavity",
                  "D": "Periosteum",
                  "E": "Endosteum"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "An elderly patient is diagnosed with osteoporosis after sustaining a low-impact fracture. Which cellular change most directly explains the reduction in bone density?",
                "options": {
                  "A": "Osteoblast activity exceeds osteoclast activity",
                  "B": "Osteocyte activity ceases completely",
                  "C": "Osteoclast activity exceeds osteoblast activity",
                  "D": "Chondrocytes replace osteocytes",
                  "E": "Periosteal cells stop producing collagen"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A radiograph of the hand of a healthy 10-year-old child demonstrates radiolucent gaps between the metaphysis and epiphysis of several long bones. What do these gaps primarily represent?",
                "options": {
                  "A": "Synovial joint cavities",
                  "B": "Areas of compact bone remodelling",
                  "C": "Epiphyseal growth plates composed of cartilage",
                  "D": "Sites of incomplete fracture healing",
                  "E": "Regions of trabecular bone formation"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A tendon inserts onto a prominent roughened projection on the proximal tibia. Which term best describes this type of bony feature?",
                "options": {
                  "A": "Condyle",
                  "B": "Facet",
                  "C": "Tuberosity",
                  "D": "Foramen",
                  "E": "Fossa"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient fractures the shaft of the humerus while preserving the proximal and distal articular surfaces. Which part of the bone has been fractured?",
                "options": {
                  "A": "Epiphysis",
                  "B": "Metaphysis",
                  "C": "Diaphysis",
                  "D": "Osteon",
                  "E": "Trabecula"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which joint is correctly matched with both its structural classification and expected degree of movement?",
                "options": {
                  "A": "Coronal suture \u2014 synovial joint allowing circumduction",
                  "B": "Pubic symphysis \u2014 secondary cartilaginous joint allowing slight movement",
                  "C": "Shoulder joint \u2014 fibrous joint allowing free movement",
                  "D": "Distal tibiofibular joint \u2014 primary cartilaginous joint allowing no movement",
                  "E": "Intervertebral disc \u2014 fibrous joint allowing rotation only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient can flex, extend, abduct, adduct and circumduct the shoulder. Which structural feature most directly enables this range of movement?",
                "options": {
                  "A": "Dense fibrous tissue uniting adjacent bones",
                  "B": "Fibrocartilage joining two bones",
                  "C": "Ball-and-socket articulation enclosed within a synovial capsule",
                  "D": "Flat articular surfaces permitting gliding only",
                  "E": "Interlocking bony sutures reinforced by periosteum"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During surgery around the elbow, a nerve supplying one of the muscles that flexes the elbow is inadvertently damaged. According to Hilton\u2019s law, which additional structure is most likely to lose sensory innervation?",
                "options": {
                  "A": "The overlying skin only",
                  "B": "The elbow joint capsule",
                  "C": "The adjacent artery",
                  "D": "The periosteum of the humeral shaft only",
                  "E": "The contralateral elbow joint"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fah05l-skeletal-muscle-and-nerve",
            "title": "FAH05L Skeletal Muscle and Nerve",
            "questions": [
              {
                "question": "A histological section demonstrates elongated, striated muscle fibres with multiple nuclei located at the periphery of each cell. Which tissue has most likely been examined?",
                "options": {
                  "A": "Smooth muscle",
                  "B": "Cardiac muscle",
                  "C": "Skeletal muscle",
                  "D": "Myocardium with Purkinje fibres",
                  "E": "Transitional epithelium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During surgery, a tendon is identified inserting into the skin rather than bone. Which group of muscles most commonly has this arrangement?",
                "options": {
                  "A": "Muscles of mastication",
                  "B": "Muscles of facial expression",
                  "C": "Rotator cuff muscles",
                  "D": "Quadriceps femoris",
                  "E": "Hamstring muscles"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A muscle is composed of multiple fascicles. Each fascicle contains numerous muscle fibres. Which connective tissue layer surrounds an individual fascicle?",
                "options": {
                  "A": "Epimysium",
                  "B": "Endomysium",
                  "C": "Perimysium",
                  "D": "Deep fascia",
                  "E": "Tendon sheath"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During skeletal muscle contraction, which structural change occurs within a sarcomere?",
                "options": {
                  "A": "Actin filaments shorten while myosin remains constant",
                  "B": "Myosin filaments shorten while actin remains constant",
                  "C": "Both actin and myosin filaments shorten equally",
                  "D": "Actin and myosin filaments slide past one another without changing their individual lengths",
                  "E": "The Z lines remain fixed while the A band length increases"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient is asked to abduct the arm to 90\u00b0 and then maintain this position without further movement. Which type of muscle contraction is primarily responsible for maintaining the arm in this static position?",
                "options": {
                  "A": "Concentric isotonic contraction",
                  "B": "Eccentric isotonic contraction",
                  "C": "Isometric contraction",
                  "D": "Reflex contraction",
                  "E": "Tonic relaxation"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient actively flexes the elbow against resistance. During this movement, the brachialis acts as the prime mover. What is the role of the triceps brachii during this action?",
                "options": {
                  "A": "Synergist",
                  "B": "Agonist",
                  "C": "Fixator",
                  "D": "Antagonist",
                  "E": "Stabiliser only"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "A student grips a heavy object more effectively after slightly extending the wrist. Which muscle action best explains the increased grip strength?",
                "options": {
                  "A": "Wrist flexors acting as agonists",
                  "B": "Wrist extensors acting as synergists by preventing unwanted wrist flexion",
                  "C": "Finger extensors acting as antagonists to the finger flexors",
                  "D": "Elbow extensors stabilising the shoulder",
                  "E": "Intrinsic hand muscles producing isometric finger extension"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A histological section of nervous tissue shows a neuron with multiple dendrites emerging from the cell body and a single axon. This morphology is most characteristic of which functional type of neuron?",
                "options": {
                  "A": "Sensory neuron in a dorsal root ganglion",
                  "B": "Bipolar neuron of the retina",
                  "C": "Motor neuron",
                  "D": "Pseudounipolar autonomic neuron",
                  "E": "Schwann cell"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which neuroglial cell is correctly matched with its primary function?",
                "options": {
                  "A": "Astrocyte \u2014 formation of myelin in peripheral nerves",
                  "B": "Oligodendrocyte \u2014 production of cerebrospinal fluid",
                  "C": "Microglia \u2014 formation of the blood-brain barrier",
                  "D": "Schwann cell \u2014 myelination of peripheral nerve axons",
                  "E": "Ependymal cell \u2014 phagocytosis of pathogens in the CNS"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "A clinician taps the patellar tendon during neurological examination. The resulting extension of the knee occurs because sensory input from the tendon ultimately activates motor neurons supplying the knee extensors while simultaneously inhibiting the knee flexors. This reflex demonstrates which principle?",
                "options": {
                  "A": "Voluntary skeletal muscle contraction always requires cortical input",
                  "B": "Skeletal muscles can only contract through concentric contractions",
                  "C": "Skeletal muscle activity can be produced through spinal reflex pathways without conscious control",
                  "D": "Tendons contain only motor nerve endings",
                  "E": "Reflexes depend exclusively on smooth muscle activation"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fah06l-nervous-system",
            "title": "FAH06L Nervous System",
            "questions": [
              {
                "question": "Which structures together make up the central nervous system (CNS)?",
                "options": {
                  "A": "Brain and cranial nerves",
                  "B": "Brain and spinal nerves",
                  "C": "Brain and spinal cord",
                  "D": "Spinal cord and peripheral ganglia",
                  "E": "Cranial nerves and spinal nerves"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A sensory receptor in the skin detects a painful stimulus. The sensory information is carried towards the central nervous system by which type of nerve fibre?",
                "options": {
                  "A": "Efferent fibre",
                  "B": "Afferent fibre",
                  "C": "Somatic motor fibre",
                  "D": "Visceral motor fibre",
                  "E": "Postganglionic fibre"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement correctly describes the functional difference between the somatic and autonomic nervous systems?",
                "options": {
                  "A": "The somatic nervous system supplies only internal organs.",
                  "B": "The autonomic nervous system controls voluntary skeletal muscle movement.",
                  "C": "The somatic nervous system primarily controls voluntary movements, whereas the autonomic nervous system regulates involuntary visceral functions.",
                  "D": "The autonomic nervous system has no sensory component.",
                  "E": "The somatic nervous system contains sympathetic and parasympathetic divisions."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure contains collections of neuronal cell bodies within the peripheral nervous system?",
                "options": {
                  "A": "Cortex",
                  "B": "Nucleus",
                  "C": "White matter",
                  "D": "Ganglion",
                  "E": "Tract"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement correctly compares grey matter and white matter?",
                "options": {
                  "A": "Grey matter consists mainly of myelinated axons.",
                  "B": "White matter consists mainly of neuronal cell bodies.",
                  "C": "Grey matter contains neuronal cell bodies, whereas white matter consists primarily of myelinated axons.",
                  "D": "White matter is found only in the spinal cord.",
                  "E": "Grey matter is absent from the cerebral hemispheres."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A spinal nerve is classified as a mixed nerve because it:",
                "options": {
                  "A": "Supplies both the upper and lower limbs.",
                  "B": "Contains both sensory (afferent) and motor (efferent) fibres.",
                  "C": "Innervates both skeletal and smooth muscle exclusively.",
                  "D": "Contains sympathetic and parasympathetic ganglia.",
                  "E": "Supplies both the brain and spinal cord."
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement correctly describes the arrangement of the roots of a spinal nerve?",
                "options": {
                  "A": "The dorsal root carries motor fibres and the ventral root carries sensory fibres.",
                  "B": "Both dorsal and ventral roots contain only sensory fibres.",
                  "C": "The dorsal root carries sensory fibres into the spinal cord, while the ventral root carries motor fibres away from it.",
                  "D": "Both roots are mixed nerves.",
                  "E": "The ventral root contains only autonomic fibres."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During a lumbar puncture, cerebrospinal fluid is usually obtained below the level of L2. Why is this considered safer?",
                "options": {
                  "A": "The vertebral canal ends at L2.",
                  "B": "The spinal cord normally terminates around L1\u2013L2, leaving only the cauda equina below.",
                  "C": "There are no spinal nerves below L2.",
                  "D": "The dura mater ends at L2.",
                  "E": "There is no cerebrospinal fluid above L2."
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best describes a dermatome?",
                "options": {
                  "A": "A muscle supplied by a single spinal nerve.",
                  "B": "An area of skin supplied predominantly by a single spinal nerve.",
                  "C": "A region supplied by a single cranial nerve.",
                  "D": "A collection of spinal ganglia.",
                  "E": "An area supplied by sympathetic fibres only."
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which feature distinguishes the autonomic nervous system from the somatic motor nervous system?",
                "options": {
                  "A": "It contains only sensory neurons.",
                  "B": "It lacks ganglia.",
                  "C": "It uses a two-neuron pathway consisting of preganglionic and postganglionic neurons separated by an autonomic ganglion.",
                  "D": "It supplies only skeletal muscle.",
                  "E": "It has no motor component."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement correctly compares the sympathetic and parasympathetic divisions of the autonomic nervous system?",
                "options": {
                  "A": "Sympathetic fibres originate from the cranial nerves only.",
                  "B": "Parasympathetic fibres originate exclusively from the thoracic spinal cord.",
                  "C": "Sympathetic outflow is thoracolumbar, whereas parasympathetic outflow is craniosacral.",
                  "D": "Both divisions originate from the same spinal cord levels.",
                  "E": "Parasympathetic fibres never travel in cranial nerves."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which cranial nerve carries the majority of parasympathetic fibres to thoracic and abdominal organs?",
                "options": {
                  "A": "Olfactory nerve (CN I)",
                  "B": "Optic nerve (CN II)",
                  "C": "Trigeminal nerve (CN V)",
                  "D": "Facial nerve (CN VII)",
                  "E": "Vagus nerve (CN X)"
                },
                "correctAnswer": "E",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which type of nerve fibre carries pain, touch and temperature sensation from the skin?",
                "options": {
                  "A": "General visceral afferent (GVA)",
                  "B": "General somatic afferent (GSA)",
                  "C": "General visceral efferent (GVE)",
                  "D": "General somatic efferent (GSE)",
                  "E": "Special visceral afferent (SVA)"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement about sympathetic pathways is correct?",
                "options": {
                  "A": "Preganglionic fibres are generally long and postganglionic fibres are short.",
                  "B": "Preganglionic fibres are generally short and synapse in sympathetic ganglia before long postganglionic fibres reach target organs.",
                  "C": "Sympathetic fibres never travel through spinal nerves.",
                  "D": "Sympathetic ganglia are located within target organs.",
                  "E": "Sympathetic fibres arise only from the sacral spinal cord."
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient suddenly encounters a dangerous situation, triggering a \u201cfight-or-flight\u201d response. Which physiological change is most consistent with sympathetic activation?",
                "options": {
                  "A": "Decreased heart rate",
                  "B": "Increased gastrointestinal motility",
                  "C": "Increased heart rate and pupil dilation",
                  "D": "Increased salivary secretion for digestion",
                  "E": "Reduced ventilation"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fah07l-imaging-technologies",
            "title": "FAH07L Imaging Technologies",
            "questions": [
              {
                "question": "A patient with suspected pulmonary embolism requires both anatomical localisation of the pulmonary vasculature and assessment of regional perfusion. Which imaging approach would provide the most complementary information?",
                "options": {
                  "A": "Chest radiograph combined with ultrasound",
                  "B": "CT combined with PET/SPECT nuclear medicine imaging",
                  "C": "MRI combined with ultrasound",
                  "D": "Fluoroscopy combined with radiography",
                  "E": "Ultrasound combined with fluoroscopy"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A radiologist reviews an axial head scan in which the skull appears dark while the cerebral cortex and white matter are clearly distinguished. Which imaging modality is most consistent with these findings?",
                "options": {
                  "A": "CT",
                  "B": "PET",
                  "C": "MRI",
                  "D": "Ultrasound",
                  "E": "Plain radiography"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A CT scanner reconstructs a three-dimensional image from multiple X-ray projections. Which statement best explains why CT provides greater anatomical detail than a conventional chest radiograph?",
                "options": {
                  "A": "CT measures radioactive emissions instead of attenuation",
                  "B": "CT reconstructs attenuation information into voxels representing physical locations within the body",
                  "C": "CT uses magnetic resonance to distinguish soft tissues",
                  "D": "CT detects reflected sound waves from tissue interfaces",
                  "E": "CT displays only surface anatomy without internal structures"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A researcher wishes to investigate which regions of the brain demonstrate increased glucose metabolism while a participant performs a cognitive task. Which imaging modality would be most appropriate?",
                "options": {
                  "A": "CT using iodinated contrast",
                  "B": "Plain skull radiography",
                  "C": "MRI without contrast",
                  "D": "FDG-PET",
                  "E": "Diagnostic ultrasound"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient requires serial imaging every month to monitor ventricular function following chemotherapy. Which modality is most appropriate because it avoids ionising radiation while providing dynamic assessment?",
                "options": {
                  "A": "CT",
                  "B": "Fluoroscopy",
                  "C": "Ultrasound",
                  "D": "PET",
                  "E": "Plain radiography"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A medical student saves a CT scan as a JPEG before transferring it to another hospital. Why is DICOM preferred instead?",
                "options": {
                  "A": "JPEG files cannot display greyscale images",
                  "B": "DICOM preserves extensive metadata and avoids inappropriate image compression",
                  "C": "JPEG files cannot store images larger than 512 \u00d7 512 pixels",
                  "D": "DICOM images require less storage than JPEG images",
                  "E": "JPEG images cannot be viewed on hospital computers"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Two imaging systems produce images with the same matrix size (1024 \u00d7 1024 pixels), but one system resolves much finer anatomical detail. Which property differs between the systems?",
                "options": {
                  "A": "Intensity resolution",
                  "B": "Image resolution",
                  "C": "Spatial resolution",
                  "D": "Metadata resolution",
                  "E": "Compression ratio"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient undergoes myocardial perfusion imaging using technetium-99m. Why is technetium-99m particularly suitable for diagnostic nuclear medicine?",
                "options": {
                  "A": "It emits alpha particles with high tissue penetration",
                  "B": "It emits beta particles that remain confined to blood vessels",
                  "C": "It emits gamma photons and has a clinically useful half-life",
                  "D": "It emits positrons with no subsequent photon production",
                  "E": "It is chemically inert and therefore remains permanently within tissues"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During MRI, cortical bone appears much darker than surrounding soft tissues. What is the principal reason for this appearance?",
                "options": {
                  "A": "Bone completely reflects radiofrequency waves",
                  "B": "Bone contains relatively few hydrogen nuclei available for signal generation",
                  "C": "Bone attenuates magnetic fields more strongly than soft tissue",
                  "D": "Bone absorbs gadolinium contrast more rapidly than muscle",
                  "E": "Bone has excessive water content causing signal cancellation"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During a fluoroscopy-guided closure of an atrial septal defect, clinicians simultaneously use transoesophageal ultrasound. What is the principal advantage of combining these modalities?",
                "options": {
                  "A": "Fluoroscopy visualises soft tissue while ultrasound tracks catheter movement",
                  "B": "Fluoroscopy provides functional blood flow measurements while ultrasound measures attenuation",
                  "C": "Fluoroscopy visualises X-ray-visible devices while ultrasound provides detailed soft tissue imaging of the heart",
                  "D": "Both modalities independently measure radioactive tracer uptake",
                  "E": "Ultrasound eliminates the need for fluoroscopy by visualising all metallic devices"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          }
        ],
        "subfolders": []
      }
    ]
  }
];
