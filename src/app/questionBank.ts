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
      },
      {
        "id": "fundamentals-of-physiology-and-pharmacology-questions",
        "title": "Fundamentals of Physiology and Pharmacology Questions",
        "questionSets": [
          {
            "id": "fpp-1-homeostasis-and-physiological-variables",
            "title": "FPP-1 Homeostasis and Physiological Variables",
            "questions": [
              {
                "question": "A healthy individual\u2019s arterial blood pressure varies considerably throughout the day but remains close to 120/80 mmHg when averaged over 24 hours. Which concept best explains this observation?",
                "options": {
                  "A": "The variable remains fixed at its set point",
                  "B": "The variable is dynamically maintained within a predictable range",
                  "C": "The variable is controlled exclusively by positive feedback",
                  "D": "The variable changes because homeostatic mechanisms are absent",
                  "E": "The variable is maintained independently of physical activity"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient suddenly stops breathing. Within minutes, arterial oxygen falls and arterial carbon dioxide rises to life-threatening levels. Which feature of homeostasis is best illustrated?",
                "options": {
                  "A": "Some variables can deviate substantially without immediate harm",
                  "B": "Some variables require rapid regulation for short-term survival",
                  "C": "All variables are regulated with equal physiological priority",
                  "D": "Long-term hormonal control is sufficient for acute disturbances",
                  "E": "Reproductive function is prioritised over gas exchange"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Following a carbohydrate-rich meal, blood glucose rises before returning towards baseline within approximately one hour. Which process is primarily responsible for this return?",
                "options": {
                  "A": "Glucose is excreted rapidly in the urine",
                  "B": "Glucose is converted to carbon dioxide in the blood",
                  "C": "Insulin promotes glucose uptake and storage in tissues",
                  "D": "Glucagon increases glucose uptake by the liver",
                  "E": "Intestinal glucose absorption stops immediately"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A student records a core temperature of 37.0\u00b0C at rest. During exercise, temperature rises slightly before returning towards its previous value. In this system, 37.0\u00b0C is best described as the:",
                "options": {
                  "A": "Effector",
                  "B": "Afferent signal",
                  "C": "Set point",
                  "D": "Integrating centre",
                  "E": "Predictable range"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A physiological variable changes from its set point. A receptor detects the change and sends information to the central nervous system. Which component of a negative feedback loop carries this information?",
                "options": {
                  "A": "Efferent pathway",
                  "B": "Afferent pathway",
                  "C": "Effector organ",
                  "D": "Positive feedback pathway",
                  "E": "Endocrine target pathway"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A control centre compares a measured physiological variable with its set point and determines the required response. Which component of a homeostatic system performs this function?",
                "options": {
                  "A": "Sensor",
                  "B": "Effector",
                  "C": "Integrating centre",
                  "D": "Afferent pathway",
                  "E": "Paracrine mediator"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A cold environment causes a fall in core temperature. Which combined response would most effectively restore temperature towards its set point?",
                "options": {
                  "A": "Sweating and cutaneous vasodilation",
                  "B": "Shivering and cutaneous vasoconstriction",
                  "C": "Reduced metabolism and cutaneous vasodilation",
                  "D": "Reduced muscle activity and sweating",
                  "E": "Shivering and cutaneous vasodilation"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient develops a fever and begins sweating as core temperature starts to fall towards normal. Which mechanism best describes the effect of sweating?",
                "options": {
                  "A": "It amplifies the original temperature rise",
                  "B": "It reduces heat loss from the skin",
                  "C": "It opposes the original temperature rise",
                  "D": "It raises the hypothalamic set point",
                  "E": "It increases skeletal muscle heat production"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The smell of food causes salivation and gastric secretion before any food enters the mouth. Which regulatory mechanism is responsible?",
                "options": {
                  "A": "Negative feedback",
                  "B": "Positive feedback",
                  "C": "Feed-forward control",
                  "D": "Hormonal inhibition",
                  "E": "Paracrine feedback"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A frightened person develops an increased heart rate and increased skeletal muscle blood flow before running away. Which interpretation is most accurate?",
                "options": {
                  "A": "Negative feedback correcting reduced cardiac output",
                  "B": "Feed-forward preparation for expected physical activity",
                  "C": "Positive feedback amplifying arterial pressure indefinitely",
                  "D": "Paracrine regulation confined to skeletal muscle",
                  "E": "Hormonal control independent of neuronal input"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A person consumes a high-salt meal. Plasma osmolarity rises, stimulating thirst and increased water intake. Why may this response contribute to hypertension if repeated chronically?",
                "options": {
                  "A": "Water intake decreases plasma volume",
                  "B": "Water intake increases sodium excretion immediately",
                  "C": "Water intake restores osmolarity but increases plasma volume",
                  "D": "Water intake lowers blood pressure by diluting plasma proteins",
                  "E": "Water intake causes vasodilation without changing volume"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why is plasma osmolarity prioritised over arterial pressure following acute ingestion of excess salt?",
                "options": {
                  "A": "Osmolarity changes are always easier to correct",
                  "B": "Small osmolarity disturbances may threaten survival more rapidly",
                  "C": "Blood pressure is not a regulated physiological variable",
                  "D": "Blood pressure cannot be influenced by plasma volume",
                  "E": "Osmolarity is regulated only by conscious behaviour"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A rise in metabolic rate increases carbon dioxide production. Which additional physiological variable is most immediately affected through the bicarbonate buffer system?",
                "options": {
                  "A": "Plasma sodium concentration",
                  "B": "Blood pH",
                  "C": "Core temperature set point",
                  "D": "Plasma glucose set point",
                  "E": "Steroid hormone synthesis"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient hypoventilates, causing arterial carbon dioxide to increase. Which chemical change is most likely?",
                "options": {
                  "A": "Reduced carbonic acid formation and increased pH",
                  "B": "Increased carbonic acid formation and reduced pH",
                  "C": "Reduced bicarbonate formation and increased pH",
                  "D": "Increased oxygen binding and reduced hydrogen ions",
                  "E": "Increased sodium concentration and unchanged pH"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The sympathetic and parasympathetic nervous systems often exert opposing effects on the same physiological variable. What is the principal advantage of this arrangement?",
                "options": {
                  "A": "It eliminates the need for sensory receptors",
                  "B": "It permits more precise adjustment of the variable",
                  "C": "It converts negative feedback into positive feedback",
                  "D": "It prevents any change from the set point",
                  "E": "It allows conscious control of visceral organs"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient experiences sudden emotional shock. Adrenaline rapidly increases heart rate, but the effect fades within minutes. Which property best explains this response?",
                "options": {
                  "A": "Adrenaline binds an intracellular receptor and alters transcription",
                  "B": "Adrenaline binds a cell-surface receptor and activates signalling enzymes",
                  "C": "Adrenaline enters the nucleus and stimulates protein synthesis",
                  "D": "Adrenaline acts through a steroid receptor in cardiac muscle",
                  "E": "Adrenaline requires new gene expression before acting"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which hormone is most likely to produce a slow-onset response that persists for days by changing gene expression?",
                "options": {
                  "A": "Insulin",
                  "B": "Adrenaline",
                  "C": "Oxytocin",
                  "D": "Cortisol",
                  "E": "Noradrenaline"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which pairing of hormone class and receptor location is most accurate?",
                "options": {
                  "A": "Peptide hormones \u2014 intracellular nuclear receptors",
                  "B": "Catecholamines \u2014 intracellular cytoplasmic receptors",
                  "C": "Steroid hormones \u2014 intracellular receptors",
                  "D": "Thyroid hormones \u2014 cell-surface ion channels",
                  "E": "Glycopeptides \u2014 nuclear DNA-binding receptors"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Blood glucose rises after a meal, causing pancreatic beta cells to secrete insulin. Insulin then promotes hepatic glucose uptake and glycogen formation. In this control loop, the circulation carrying insulin to the liver functions as the:",
                "options": {
                  "A": "Sensor",
                  "B": "Integrating centre",
                  "C": "Afferent pathway",
                  "D": "Efferent pathway",
                  "E": "Set point"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "In the regulation of blood glucose, pancreatic beta cells detect glucose concentration and adjust insulin secretion. Which statement best describes the role of these cells?",
                "options": {
                  "A": "They function only as effectors",
                  "B": "They function as both sensor and integrating centre",
                  "C": "They function only as an afferent pathway",
                  "D": "They function as a paracrine target tissue",
                  "E": "They function as the glucose storage organ"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Nitric oxide is released by vascular endothelial cells and diffuses to nearby smooth muscle, causing relaxation. Which form of signalling is illustrated?",
                "options": {
                  "A": "Endocrine signalling",
                  "B": "Synaptic signalling",
                  "C": "Paracrine signalling",
                  "D": "Feed-forward signalling",
                  "E": "Positive feedback signalling"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A mosquito bite activates mast cells, which release histamine. Histamine increases permeability in nearby blood vessels, producing local swelling. Why is this classified as paracrine signalling?",
                "options": {
                  "A": "Histamine travels through the circulation to distant tissues",
                  "B": "Histamine acts on neighbouring cells within the same tissue",
                  "C": "Histamine alters gene expression in the nucleus",
                  "D": "Histamine is released from a neuronal integrating centre",
                  "E": "Histamine amplifies its own secretion through feedback"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During labour, pressure on the cervix stimulates oxytocin secretion, which strengthens uterine contractions and increases cervical pressure further. Which feature makes this positive feedback physiologically effective rather than harmful?",
                "options": {
                  "A": "The response lowers oxytocin secretion after each contraction",
                  "B": "The response has a clear terminating event",
                  "C": "The response maintains uterine activity within a narrow range",
                  "D": "The response is controlled only by paracrine mediators",
                  "E": "The response prevents further cervical stimulation"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A woman in labour experiences progressively stronger and more frequent uterine contractions. Which event terminates the positive feedback cycle?",
                "options": {
                  "A": "Increased progesterone secretion",
                  "B": "Decreased cervical pressure before delivery",
                  "C": "Birth of the baby",
                  "D": "Increased hypothalamic sensitivity",
                  "E": "Continued oxytocin release"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best describes the regulation of arterial blood pressure?",
                "options": {
                  "A": "It is controlled only by neuronal negative feedback",
                  "B": "It is controlled only by circulating hormones",
                  "C": "It is regulated by neuronal, hormonal and paracrine mechanisms",
                  "D": "It is maintained through positive feedback during exercise",
                  "E": "It can be precisely controlled by conscious effort"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fpp-2-fundamental-principles-of-pharmacology-1",
            "title": "FPP-2 Fundamental principles of pharmacology 1",
            "questions": [
              {
                "question": "A researcher identifies a chemical that produces a reproducible biological effect in cultured cells but is rapidly degraded in the stomach and cannot reach its target tissue after oral administration. Which property most limits its usefulness as a medicinal drug?",
                "options": {
                  "A": "It lacks a known chemical structure",
                  "B": "It cannot be delivered effectively to its site of action",
                  "C": "It does not bind covalently to its target",
                  "D": "It has excessive receptor specificity",
                  "E": "It cannot be classified by therapeutic use"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient asks why insulin is usually injected rather than taken as a conventional tablet. Which explanation is most accurate?",
                "options": {
                  "A": "Insulin is too lipophilic to enter the circulation",
                  "B": "Insulin is rapidly excreted by the kidneys after oral administration",
                  "C": "Insulin is a peptide that would be degraded in the gastrointestinal tract",
                  "D": "Insulin binds extensively to dietary proteins in the stomach",
                  "E": "Insulin requires hepatic metabolism before becoming active"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient buys Nurofen from a pharmacy. Which statement correctly describes the different ways this medicine may be named?",
                "options": {
                  "A": "Nurofen is the generic name and ibuprofen is the chemical name",
                  "B": "Nurofen is the trade name and ibuprofen is the generic name",
                  "C": "Ibuprofen is the trade name and analgesic is the generic name",
                  "D": "Cyclooxygenase inhibitor is the trade name and ibuprofen is the therapeutic class",
                  "E": "Analgesic is the chemical name and Nurofen is the mechanism-based name"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A clinician tells a colleague that a patient has been prescribed a beta blocker without naming the individual drug. Which type of classification is being used?",
                "options": {
                  "A": "Chemical structure",
                  "B": "Trade name",
                  "C": "Therapeutic indication",
                  "D": "Mechanism of action",
                  "E": "Route of administration"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "A local anaesthetic prevents action potential propagation by binding to a sodium channel. Which major class of drug target is involved?",
                "options": {
                  "A": "Enzyme",
                  "B": "Receptor",
                  "C": "Transporter",
                  "D": "Ion channel",
                  "E": "Structural protein"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "A selective serotonin reuptake inhibitor increases serotonin availability by preventing its removal from the synaptic cleft. Which molecular target is most likely inhibited?",
                "options": {
                  "A": "Ion channel",
                  "B": "Transporter",
                  "C": "Nuclear receptor",
                  "D": "Structural enzyme",
                  "E": "Extracellular matrix protein"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A new compound binds tightly to a receptor but does not alter receptor activity or downstream signalling. Why is it unlikely to be an effective drug in its current form?",
                "options": {
                  "A": "Binding must always be covalent to produce an effect",
                  "B": "The compound has failed to alter the function of its target",
                  "C": "Receptors cannot be useful molecular targets",
                  "D": "Effective drugs must bind to several proteins",
                  "E": "The compound must first be converted into a peptide"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Aspirin inhibits cyclooxygenase for the remaining lifetime of the affected enzyme molecule. Which interaction best explains this prolonged inhibition?",
                "options": {
                  "A": "Reversible hydrophobic interaction",
                  "B": "Reversible electrostatic interaction",
                  "C": "Irreversible covalent binding",
                  "D": "Temporary hydrogen bonding",
                  "E": "Competitive transporter blockade"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A drug binds only to one receptor subtype, but that receptor is expressed in both cardiovascular and gastrointestinal tissues. The drug lowers blood pressure but also causes marked gastrointestinal effects. Which description is most accurate?",
                "options": {
                  "A": "The drug is selective but not specific",
                  "B": "The drug is specific but not selective",
                  "C": "The drug is neither specific nor active",
                  "D": "The drug is selective and tissue-restricted",
                  "E": "The drug is non-specific but clinically selective"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient with severe liver failure receives a drug that is normally extensively metabolised by the liver. Which aspect of pharmacology is most relevant when considering dose reduction?",
                "options": {
                  "A": "Pharmacodynamics",
                  "B": "Receptor selectivity",
                  "C": "Pharmacokinetics",
                  "D": "Therapeutic classification",
                  "E": "Molecular specificity"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A drug binds to a cardiac receptor and increases heart rate within seconds. Which statement describes the pharmacodynamic component of this response?",
                "options": {
                  "A": "The drug is absorbed from the gastrointestinal tract",
                  "B": "The drug is distributed through the bloodstream",
                  "C": "The drug binds to and modifies receptor function",
                  "D": "The drug is metabolised by hepatic enzymes",
                  "E": "The drug is excreted through the kidneys"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "An orally administered drug is largely metabolised by the liver before reaching the systemic circulation. Which pharmacokinetic process is primarily responsible?",
                "options": {
                  "A": "Receptor desensitisation",
                  "B": "First-pass metabolism",
                  "C": "Renal filtration",
                  "D": "Tissue selectivity",
                  "E": "Ligand specificity"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Researchers observe that adrenaline relaxes bronchial smooth muscle through beta-2 receptors. They develop salbutamol to mimic this effect in asthma. Which stage of drug discovery is illustrated by identifying beta-2 receptor activation as a treatment strategy?",
                "options": {
                  "A": "Post-marketing surveillance",
                  "B": "Target identification and hypothesis generation",
                  "C": "Phase I dose escalation",
                  "D": "Phase III registration testing",
                  "E": "Generic drug manufacture"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A new drug has completed animal toxicology studies and is administered to 50 healthy volunteers using increasing doses under controlled conditions. What is the main purpose of this trial?",
                "options": {
                  "A": "To establish effectiveness in patients with the disease",
                  "B": "To compare the drug with standard treatment in thousands of patients",
                  "C": "To assess safety, tolerability and initial pharmacokinetics",
                  "D": "To detect rare adverse effects after marketing",
                  "E": "To determine effectiveness in population subgroups"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A medicine has been approved and prescribed widely for several years. A clinician notices an unexpected adverse reaction in a patient taking multiple medicines and submits a report through the Yellow Card Scheme. Which stage of drug development does this represent?",
                "options": {
                  "A": "Preclinical toxicology",
                  "B": "Phase I testing",
                  "C": "Phase II testing",
                  "D": "Phase III testing",
                  "E": "Phase IV surveillance"
                },
                "correctAnswer": "E",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fpp-3-fundamental-principles-of-pharmacology-2",
            "title": "FPP-3 Fundamental principles of pharmacology 2",
            "questions": [
              {
                "question": "A pharmacologist increases the concentration of an agonist and plots the biological response. Which graph best represents the relationship between drug concentration and response when plotted on a logarithmic concentration scale?",
                "options": {
                  "A": "Linear relationship",
                  "B": "Rectangular hyperbola",
                  "C": "Sigmoidal (S-shaped) curve",
                  "D": "Exponential curve",
                  "E": "Bell-shaped curve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best describes the primary function of a receptor?",
                "options": {
                  "A": "It metabolises drugs into active compounds",
                  "B": "It transports drugs across the cell membrane",
                  "C": "It detects extracellular signalling molecules and transduces signals into the cell",
                  "D": "It synthesises endogenous hormones",
                  "E": "It permanently stores neurotransmitters"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient with Parkinson\u2019s disease is prescribed a dopamine receptor agonist. Why is an agonist appropriate in this condition?",
                "options": {
                  "A": "It irreversibly blocks dopamine receptors",
                  "B": "It mimics the action of dopamine at its receptor",
                  "C": "It increases dopamine metabolism",
                  "D": "It prevents dopamine synthesis",
                  "E": "It destroys overactive dopaminergic neurons"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which receptor class produces the fastest cellular response following activation?",
                "options": {
                  "A": "G protein-coupled receptor",
                  "B": "Nuclear receptor",
                  "C": "Receptor tyrosine kinase",
                  "D": "Ligand-gated ion channel",
                  "E": "Intracellular enzyme receptor"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which receptor type typically mediates effects over seconds by activating intracellular signalling cascades?",
                "options": {
                  "A": "Ligand-gated ion channel",
                  "B": "Voltage-gated sodium channel",
                  "C": "G protein-coupled receptor",
                  "D": "Nuclear receptor",
                  "E": "DNA-binding receptor"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Steroid hormones such as glucocorticoids produce effects that often take hours to develop because they primarily act through which receptor type?",
                "options": {
                  "A": "Ligand-gated ion channels",
                  "B": "G protein-coupled receptors",
                  "C": "Nuclear receptors that alter gene transcription",
                  "D": "Voltage-gated ion channels",
                  "E": "Cell surface transporters"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best defines the dissociation constant (KD)?",
                "options": {
                  "A": "The concentration of drug producing the maximum response",
                  "B": "The concentration of drug occupying 50% of receptors at equilibrium",
                  "C": "The concentration producing 50% of the maximal physiological response",
                  "D": "The concentration causing irreversible receptor blockade",
                  "E": "The dose required to inhibit 50% of enzyme activity"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Drug A has a KD of 1 nM, whereas Drug B has a KD of 100 nM for the same receptor. Which statement is correct?",
                "options": {
                  "A": "Drug B has higher affinity",
                  "B": "Drug A has lower affinity",
                  "C": "Drug A has higher affinity because it requires a lower concentration to occupy 50% of receptors",
                  "D": "Both drugs have identical affinity",
                  "E": "KD provides no information about affinity"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which parameter is obtained from a concentration-response curve and represents the concentration required to produce 50% of the maximum response?",
                "options": {
                  "A": "KD",
                  "B": "PA2",
                  "C": "Emax",
                  "D": "EC50",
                  "E": "IC50"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why is EC50 usually different from KD for an agonist?",
                "options": {
                  "A": "Agonists bind irreversibly to receptors",
                  "B": "Biological response depends on receptor activation and downstream signalling, not receptor occupancy alone",
                  "C": "KD is only measured in living patients",
                  "D": "EC50 only applies to antagonists",
                  "E": "Receptors cannot become fully occupied"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Two agonists bind the same receptor with similar affinity. Agonist X produces a maximal response, whereas Agonist Y reaches only 60% of the maximal response even when all receptors are occupied. Agonist Y is best described as:",
                "options": {
                  "A": "Competitive antagonist",
                  "B": "Irreversible antagonist",
                  "C": "Full agonist",
                  "D": "Partial agonist",
                  "E": "Inverse agonist"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "A competitive antagonist is added to an isolated tissue preparation before an agonist concentration-response curve is repeated. What is the expected effect?",
                "options": {
                  "A": "Reduced Emax with no change in EC50",
                  "B": "Parallel rightward shift of the curve with unchanged Emax",
                  "C": "Leftward shift of the curve",
                  "D": "Complete abolition of all responses",
                  "E": "Increased Emax"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which property explains why a competitive antagonist alone produces no physiological response?",
                "options": {
                  "A": "It has efficacy but no affinity",
                  "B": "It has neither affinity nor efficacy",
                  "C": "It has affinity but zero efficacy",
                  "D": "It irreversibly destroys receptors",
                  "E": "It activates intracellular kinases directly"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A non-competitive antagonist binds to an allosteric site on a receptor. What is the most likely effect on the agonist concentration-response curve?",
                "options": {
                  "A": "Parallel rightward shift with unchanged Emax",
                  "B": "Leftward shift with increased Emax",
                  "C": "Reduced Emax that cannot be overcome by increasing agonist concentration",
                  "D": "No change in the curve",
                  "E": "Increased receptor affinity for the agonist"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A researcher calculates the PA2 value of a new competitive antagonist. What does this value primarily reflect?",
                "options": {
                  "A": "The maximal response produced by the antagonist",
                  "B": "The affinity of the antagonist for the receptor",
                  "C": "The efficacy of the agonist",
                  "D": "The proportion of receptors occupied by the agonist",
                  "E": "The metabolic clearance of the antagonist"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A pharmacologist describes pharmacokinetics as \u201cwhat the body does to the drug.\u201d Which process is NOT included in pharmacokinetics?",
                "options": {
                  "A": "Absorption",
                  "B": "Distribution",
                  "C": "Receptor activation",
                  "D": "Metabolism",
                  "E": "Excretion"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient swallows an oral tablet. Which sequence correctly describes the journey of the drug through the body?",
                "options": {
                  "A": "Distribution \u2192 Absorption \u2192 Excretion \u2192 Metabolism",
                  "B": "Absorption \u2192 Distribution \u2192 Metabolism/Clearance \u2192 Excretion",
                  "C": "Distribution \u2192 Receptor binding \u2192 Absorption \u2192 Clearance",
                  "D": "Metabolism \u2192 Distribution \u2192 Absorption \u2192 Excretion",
                  "E": "Excretion \u2192 Distribution \u2192 Absorption \u2192 Metabolism"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which pharmacokinetic parameter is essential for calculating a maintenance dosing regimen?",
                "options": {
                  "A": "Volume of distribution",
                  "B": "Half-life",
                  "C": "Clearance",
                  "D": "Bioavailability",
                  "E": "Cmax"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which pharmacokinetic parameter is required to calculate an appropriate loading dose?",
                "options": {
                  "A": "Clearance only",
                  "B": "Volume of distribution",
                  "C": "Half-life only",
                  "D": "Elimination rate constant only",
                  "E": "Bioavailability only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A drug is administered by intravenous bolus injection. At what point is the plasma concentration highest?",
                "options": {
                  "A": "After the absorption phase",
                  "B": "At time zero",
                  "C": "At the elimination phase",
                  "D": "After one half-life",
                  "E": "After first-pass metabolism"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Following oral administration, why does plasma drug concentration initially increase?",
                "options": {
                  "A": "Elimination has not yet started",
                  "B": "Absorption rate exceeds elimination rate",
                  "C": "Distribution has stopped",
                  "D": "The kidneys temporarily stop excreting the drug",
                  "E": "Hepatic metabolism is saturated"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "At the time of maximum plasma concentration (Cmax) after an oral dose, which statement is true?",
                "options": {
                  "A": "Elimination rate is zero",
                  "B": "Absorption has completely stopped",
                  "C": "Absorption rate equals elimination rate",
                  "D": "Clearance reaches its maximum",
                  "E": "Distribution is complete"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which pharmacokinetic parameter describes the fraction of unchanged drug reaching the systemic circulation?",
                "options": {
                  "A": "Clearance",
                  "B": "Half-life",
                  "C": "Volume of distribution",
                  "D": "Bioavailability",
                  "E": "Elimination rate constant"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why does an intravenous dose have 100% bioavailability?",
                "options": {
                  "A": "It avoids renal excretion",
                  "B": "It bypasses metabolism completely",
                  "C": "The entire administered dose enters the systemic circulation directly",
                  "D": "It increases absorption",
                  "E": "It has a longer half-life"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A drug has an oral bioavailability of 50%. To achieve the same systemic exposure as a 100 mg intravenous dose, what oral dose is required?",
                "options": {
                  "A": "50 mg",
                  "B": "100 mg",
                  "C": "150 mg",
                  "D": "200 mg",
                  "E": "250 mg"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best describes the volume of distribution (Vd)?",
                "options": {
                  "A": "It is the actual volume of blood in the body",
                  "B": "It represents the amount of drug excreted by the kidneys",
                  "C": "It is an apparent volume that reflects how extensively a drug distributes out of plasma",
                  "D": "It measures hepatic metabolism",
                  "E": "It is equal to total body water"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A drug has a very large volume of distribution. Which statement is most likely to be true?",
                "options": {
                  "A": "Most of the drug remains within the plasma",
                  "B": "The drug distributes extensively into tissues",
                  "C": "The drug cannot cross cell membranes",
                  "D": "The drug is rapidly excreted in urine",
                  "E": "The drug has 100% bioavailability"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Aspirin and propranolol have similar clearances, but propranolol has a much longer half-life. Which pharmacokinetic property best explains this?",
                "options": {
                  "A": "Higher bioavailability",
                  "B": "Lower clearance",
                  "C": "Larger volume of distribution",
                  "D": "Faster absorption",
                  "E": "Lower potency"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A drug undergoes glucuronidation in the liver. This reaction is best classified as:",
                "options": {
                  "A": "Phase I oxidation",
                  "B": "Phase I hydrolysis",
                  "C": "Phase II conjugation",
                  "D": "Renal filtration",
                  "E": "First-pass absorption"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement regarding clearance is correct?",
                "options": {
                  "A": "Clearance depends only on renal excretion",
                  "B": "Total clearance is the sum of clearances from all eliminating organs",
                  "C": "Clearance is unaffected by liver disease",
                  "D": "Clearance and bioavailability are identical measurements",
                  "E": "Clearance increases when volume of distribution increases"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient with severe liver cirrhosis is prescribed a drug eliminated almost entirely by hepatic metabolism. What is the most likely consequence if the dose is unchanged?",
                "options": {
                  "A": "Reduced plasma drug concentration",
                  "B": "Increased clearance",
                  "C": "Increased plasma drug concentration and greater risk of toxicity",
                  "D": "Increased bioavailability to 100%",
                  "E": "Decreased half-life"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Half-life is defined as:",
                "options": {
                  "A": "The time required for all drug to be eliminated",
                  "B": "The time required for plasma drug concentration to fall by 50%",
                  "C": "The time taken to reach Cmax",
                  "D": "The time needed to reach steady state",
                  "E": "The time required for 50% receptor occupancy"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which relationship correctly describes the half-life of a drug?",
                "options": {
                  "A": "It depends only on bioavailability",
                  "B": "It depends only on clearance",
                  "C": "It is influenced by both clearance and volume of distribution",
                  "D": "It depends only on receptor affinity",
                  "E": "It is independent of pharmacokinetics"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why are blood samples collected more frequently during the early phase of pharmacokinetic studies?",
                "options": {
                  "A": "Drug absorption has not yet started",
                  "B": "Plasma concentrations change most rapidly early after dosing",
                  "C": "Clearance has not yet begun",
                  "D": "Volume of distribution is constant",
                  "E": "Bioavailability cannot yet be calculated"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why can the volume of distribution not be directly calculated from an oral dosing study alone?",
                "options": {
                  "A": "Oral drugs are never completely absorbed",
                  "B": "Clearance is unknown",
                  "C": "Plasma concentration at time zero is zero",
                  "D": "First-pass metabolism cannot occur",
                  "E": "Elimination is not first-order"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "What is the primary purpose of toxicology during drug development?",
                "options": {
                  "A": "To determine drug efficacy in patients",
                  "B": "To intentionally identify the dose at which a drug becomes toxic",
                  "C": "To measure patient adherence",
                  "D": "To compare a drug with placebo",
                  "E": "To calculate bioavailability"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best describes the benefit-risk ratio in drug development?",
                "options": {
                  "A": "Only efficacy is considered before approving a drug",
                  "B": "Every drug with side effects is rejected",
                  "C": "Drug approval depends on whether the expected benefits outweigh the potential risks",
                  "D": "Cost is the main factor determining approval",
                  "E": "Risk is ignored if a drug is highly effective"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why might a chemotherapy drug with severe adverse effects still be approved?",
                "options": {
                  "A": "Cancer drugs bypass safety testing",
                  "B": "Cancer drugs have no alternatives",
                  "C": "The potential survival benefit outweighs the risks",
                  "D": "Chemotherapy drugs are not regulated",
                  "E": "Patients cannot experience adverse drug reactions"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which term refers to an unintended harmful effect caused by a medicine at therapeutic doses?",
                "options": {
                  "A": "Drug interaction",
                  "B": "Adverse drug reaction",
                  "C": "Bioavailability",
                  "D": "Hyperpharmacology",
                  "E": "Therapeutic effect"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Approximately what proportion of hospital admissions are estimated to be caused by adverse drug reactions?",
                "options": {
                  "A": "1%",
                  "B": "2%",
                  "C": "5%",
                  "D": "15%",
                  "E": "25%"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "According to the lecture, approximately what proportion of patients do not take their medicines as prescribed?",
                "options": {
                  "A": "10%",
                  "B": "25%",
                  "C": "50%",
                  "D": "75%",
                  "E": "90%"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A drug produces excessive lowering of blood pressure because it activates its intended receptor too strongly. This is an example of:",
                "options": {
                  "A": "Off-target pharmacology",
                  "B": "Drug interaction",
                  "C": "Hyperpharmacology",
                  "D": "Genotoxicity",
                  "E": "Carcinogenicity"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best defines an off-target effect?",
                "options": {
                  "A": "A drug acting on its intended receptor at the correct dose",
                  "B": "A drug binding to unintended molecular targets",
                  "C": "A drug being eliminated by the kidneys",
                  "D": "A drug failing to reach the circulation",
                  "E": "A drug producing no therapeutic effect"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Propranolol can cause bronchoconstriction because it binds to:",
                "options": {
                  "A": "\u03b21 receptors in the heart",
                  "B": "\u03b22 receptors in the lungs",
                  "C": "Muscarinic receptors",
                  "D": "Dopamine receptors",
                  "E": "Histamine H1 receptors"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Compared with small-molecule drugs, monoclonal antibodies generally:",
                "options": {
                  "A": "Have more off-target effects",
                  "B": "Have no pharmacological target",
                  "C": "Are highly specific for their intended target",
                  "D": "Are metabolised more rapidly",
                  "E": "Are only used in healthy volunteers"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which factor could increase plasma drug concentrations in an elderly patient receiving a standard dose?",
                "options": {
                  "A": "Increased renal clearance",
                  "B": "Reduced renal function",
                  "C": "Faster hepatic metabolism",
                  "D": "Increased bioavailability only",
                  "E": "Better medication adherence"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which stage of drug development primarily identifies and optimises lead compounds?",
                "options": {
                  "A": "Phase I clinical trials",
                  "B": "Discovery",
                  "C": "Phase III clinical trials",
                  "D": "Post-marketing surveillance",
                  "E": "Phase IV clinical trials"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During discovery, scientists primarily aim to:",
                "options": {
                  "A": "Test drugs in thousands of patients",
                  "B": "Identify high-risk compounds before expensive development",
                  "C": "Compare drugs with standard care",
                  "D": "Perform post-marketing surveillance",
                  "E": "Monitor medication adherence"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which type of study deliberately administers increasing doses over prolonged periods to identify toxic effects?",
                "options": {
                  "A": "Safety pharmacology",
                  "B": "Phase I clinical trial",
                  "C": "Toxicology",
                  "D": "Pharmacokinetics",
                  "E": "Phase IV surveillance"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Safety pharmacology primarily investigates:",
                "options": {
                  "A": "Long-term carcinogenicity",
                  "B": "Effects of a therapeutic dose on vital organ systems",
                  "C": "Drug efficacy in patients",
                  "D": "Medication adherence",
                  "E": "Cost-effectiveness"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which organ systems make up the \u201ccore battery\u201d assessed in safety pharmacology?",
                "options": {
                  "A": "Gastrointestinal, renal and hepatic",
                  "B": "Cardiovascular, respiratory and central nervous system",
                  "C": "Cardiovascular, gastrointestinal and endocrine",
                  "D": "Renal, hepatic and respiratory",
                  "E": "Endocrine, immune and cardiovascular"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "What is the ideal outcome of a safety pharmacology study?",
                "options": {
                  "A": "Significant toxicity in multiple organs",
                  "B": "Mild liver toxicity only",
                  "C": "No clinically relevant effects on vital organ systems",
                  "D": "Evidence of carcinogenicity",
                  "E": "Severe off-target effects"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why are toxicology studies performed before first-in-human trials?",
                "options": {
                  "A": "To prove efficacy in patients",
                  "B": "To establish the dose at which toxicity begins and identify affected organs",
                  "C": "To determine patient adherence",
                  "D": "To compare with placebo",
                  "E": "To identify medication cost"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Phase I clinical trials of most small-molecule drugs are usually conducted in:",
                "options": {
                  "A": "Patients with severe disease only",
                  "B": "Healthy human volunteers",
                  "C": "Children",
                  "D": "Pregnant women",
                  "E": "Elderly patients only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which phase of clinical development primarily evaluates efficacy in patients while continuing to assess safety?",
                "options": {
                  "A": "Phase I",
                  "B": "Discovery",
                  "C": "Phase II",
                  "D": "Phase IV",
                  "E": "Toxicology"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which phase involves large patient populations across multiple centres before licensing?",
                "options": {
                  "A": "Discovery",
                  "B": "Phase I",
                  "C": "Phase II",
                  "D": "Phase III",
                  "E": "Phase IV"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Post-marketing surveillance (Phase IV) is particularly valuable because it can detect:",
                "options": {
                  "A": "Drug solubility",
                  "B": "Rare adverse drug reactions not seen in clinical trials",
                  "C": "Initial target identification",
                  "D": "Molecular binding affinity",
                  "E": "Drug synthesis errors only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "What is the main role of medicines regulators such as the MHRA?",
                "options": {
                  "A": "To decide medicine pricing",
                  "B": "To assess quality, safety and efficacy before approval",
                  "C": "To manufacture medicines",
                  "D": "To prescribe medicines",
                  "E": "To recruit patients for clinical trials"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement about medicines regulators is correct?",
                "options": {
                  "A": "They decide whether the NHS should fund medicines",
                  "B": "They primarily evaluate cost-effectiveness",
                  "C": "They assess quality, efficacy and safety rather than cost",
                  "D": "They perform animal experiments",
                  "E": "They conduct Phase I trials themselves"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "If a licensed medicine is associated with a newly recognised rare but serious adverse effect, regulators may:",
                "options": {
                  "A": "Ignore the finding",
                  "B": "Remove all patient information leaflets",
                  "C": "Issue a black box warning or withdraw the drug",
                  "D": "Double the recommended dose",
                  "E": "Skip further monitoring"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fpp-7-synapses-and-synaptic-transmission",
            "title": "FPP-7 Synapses and Synaptic Transmission",
            "questions": [
              {
                "question": "A cardiac muscle cell depolarises and rapidly causes an adjacent cardiac muscle cell to depolarise without releasing a neurotransmitter. Which structure most directly permits this transmission?",
                "options": {
                  "A": "Voltage-gated calcium channel",
                  "B": "Acetylcholine receptor",
                  "C": "Gap junction",
                  "D": "Synaptic vesicle",
                  "E": "Postsynaptic density"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Compared with electrical synaptic transmission, chemical synaptic transmission is slower primarily because it requires:",
                "options": {
                  "A": "Potassium movement through voltage-gated channels",
                  "B": "Conversion of an electrical signal into a chemical signal and back again",
                  "C": "Propagation of an action potential along a myelinated axon",
                  "D": "Activation of sodium-potassium ATPase pumps",
                  "E": "Diffusion of ions through gap junctions"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "An action potential arrives at a presynaptic terminal and depolarises its membrane. Which event occurs next?",
                "options": {
                  "A": "Opening of voltage-gated calcium channels",
                  "B": "Opening of postsynaptic chloride channels",
                  "C": "Activation of acetylcholinesterase",
                  "D": "Reuptake of neurotransmitter into astrocytes",
                  "E": "Opening of presynaptic potassium leak channels"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "Calcium entry into a presynaptic terminal most directly promotes neurotransmitter release by:",
                "options": {
                  "A": "Generating the postsynaptic action potential",
                  "B": "Activating neurotransmitter receptors in the synaptic cleft",
                  "C": "Triggering synaptic vesicle docking and fusion with the membrane",
                  "D": "Inhibiting neurotransmitter reuptake transporters",
                  "E": "Closing voltage-gated sodium channels in the axon"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Botulinum toxin reduces acetylcholine release at the neuromuscular junction by interfering with:",
                "options": {
                  "A": "Acetylcholine synthesis from choline",
                  "B": "Voltage-gated calcium channel opening",
                  "C": "Synaptic vesicle fusion with the presynaptic membrane",
                  "D": "Nicotinic acetylcholine receptor activation",
                  "E": "Acetylcholinesterase activity in the synaptic cleft"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A drug inhibits acetylcholinesterase at the neuromuscular junction. Which immediate effect is most likely?",
                "options": {
                  "A": "Reduced acetylcholine synthesis",
                  "B": "Prolonged acetylcholine action in the synaptic cleft",
                  "C": "Reduced calcium entry into the presynaptic terminal",
                  "D": "Increased breakdown of postsynaptic receptors",
                  "E": "Prevention of synaptic vesicle docking"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A selective serotonin reuptake inhibitor increases serotonergic signalling primarily by:",
                "options": {
                  "A": "Increasing serotonin synthesis in the postsynaptic neuron",
                  "B": "Preventing serotonin degradation by acetylcholinesterase",
                  "C": "Blocking serotonin transport away from the synaptic cleft",
                  "D": "Directly activating postsynaptic serotonin receptors",
                  "E": "Increasing calcium influx through postsynaptic channels"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Stimulation of a motor neuron produces a small depolarisation of a muscle fibre that does not reach threshold. This response is best described as:",
                "options": {
                  "A": "An action potential",
                  "B": "An end-plate potential",
                  "C": "An absolute refractory period",
                  "D": "A saltatory potential",
                  "E": "An equilibrium potential"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why does an isolated excitatory postsynaptic potential become smaller as it spreads through a neuron?",
                "options": {
                  "A": "Neurotransmitter is metabolised inside the axon",
                  "B": "Voltage-gated sodium channels immediately become inactivated",
                  "C": "Local current spreads passively and undergoes electrotonic decay",
                  "D": "The sodium-potassium ATPase reverses its direction",
                  "E": "Calcium is rapidly pumped into the synaptic cleft"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Three excitatory synapses located on different dendrites are activated at approximately the same time. Their combined depolarisation triggers an action potential. This is an example of:",
                "options": {
                  "A": "Temporal summation",
                  "B": "Spatial summation",
                  "C": "Saltatory conduction",
                  "D": "Presynaptic inhibition",
                  "E": "Quantal release"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "One excitatory synapse fires repeatedly in rapid succession, allowing successive postsynaptic potentials to overlap and reach threshold. This is an example of:",
                "options": {
                  "A": "Spatial summation",
                  "B": "Temporal summation",
                  "C": "Electrical coupling",
                  "D": "Synaptic fatigue",
                  "E": "Postsynaptic inhibition"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Activation of a GABAergic synapse opens postsynaptic chloride channels. Which effect is most likely?",
                "options": {
                  "A": "Membrane depolarisation towards threshold",
                  "B": "Increased probability of an action potential",
                  "C": "Membrane hyperpolarisation away from threshold",
                  "D": "Opening of voltage-gated calcium channels",
                  "E": "Increased acetylcholine release"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During the patellar tendon reflex, contraction of the quadriceps is accompanied by relaxation of the hamstrings. Which mechanism produces hamstring relaxation?",
                "options": {
                  "A": "Direct inhibition of the sensory afferent neuron",
                  "B": "Activation of an inhibitory spinal interneuron",
                  "C": "Reduced glutamate release from the quadriceps motor neuron",
                  "D": "Activation of the hamstring motor neuron by acetylcholine",
                  "E": "Electrical coupling between quadriceps and hamstring fibres"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Miniature end-plate potentials occur spontaneously in the absence of a nerve action potential. They most directly demonstrate that neurotransmitter is released:",
                "options": {
                  "A": "Continuously through open membrane pores",
                  "B": "In discrete packets contained within vesicles",
                  "C": "Only after postsynaptic depolarisation",
                  "D": "Through voltage-gated sodium channels",
                  "E": "In proportion to muscle fibre length"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A mutation causes presynaptic voltage-gated calcium channels to remain open longer than normal. Which consequence is most likely?",
                "options": {
                  "A": "Reduced neurotransmitter release following each action potential",
                  "B": "Increased neurotransmitter release following each action potential",
                  "C": "Failure of the presynaptic membrane to depolarise",
                  "D": "Reduced postsynaptic receptor density",
                  "E": "Increased neurotransmitter breakdown in the synaptic cleft"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fpp-8-physiology-pharmacology-of-the-autonomic-nervous-system",
            "title": "FPP-8 Physiology/Pharmacology of the Autonomic Nervous System",
            "questions": [
              {
                "question": "Which component of the peripheral nervous system is primarily responsible for involuntary regulation of heart rate, digestion and glandular secretion?",
                "options": {
                  "A": "Somatic nervous system",
                  "B": "Central nervous system",
                  "C": "Autonomic nervous system",
                  "D": "Motor cortex",
                  "E": "Cerebellum"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement correctly distinguishes the sympathetic from the parasympathetic nervous system?",
                "options": {
                  "A": "Sympathetic preganglionic fibres are longer than parasympathetic preganglionic fibres",
                  "B": "Parasympathetic postganglionic fibres are longer than sympathetic postganglionic fibres",
                  "C": "Sympathetic preganglionic fibres are shorter and postganglionic fibres are longer",
                  "D": "Both systems have equally long preganglionic fibres",
                  "E": "Sympathetic fibres arise only from the brainstem"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The preganglionic neurons of the sympathetic nervous system arise primarily from which spinal cord segments?",
                "options": {
                  "A": "Cervical only",
                  "B": "Brainstem and sacral cord",
                  "C": "T1\u2013L2",
                  "D": "L3\u2013L5",
                  "E": "S2\u2013S4 only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which neurotransmitter is released by all preganglionic autonomic neurons?",
                "options": {
                  "A": "Noradrenaline",
                  "B": "Dopamine",
                  "C": "Adrenaline",
                  "D": "Acetylcholine",
                  "E": "Serotonin"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "At autonomic ganglia, acetylcholine primarily activates which receptor?",
                "options": {
                  "A": "Muscarinic receptor",
                  "B": "\u03b21-adrenoceptor",
                  "C": "\u03b11-adrenoceptor",
                  "D": "Nicotinic acetylcholine receptor",
                  "E": "\u03b22-adrenoceptor"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which neurotransmitter is most commonly released from postganglionic sympathetic neurons onto their target organs?",
                "options": {
                  "A": "Acetylcholine",
                  "B": "Noradrenaline",
                  "C": "Dopamine",
                  "D": "Glycine",
                  "E": "GABA"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which receptor is most commonly activated by postganglionic parasympathetic neurons at their target organs?",
                "options": {
                  "A": "Nicotinic receptor",
                  "B": "\u03b21-adrenoceptor",
                  "C": "\u03b12-adrenoceptor",
                  "D": "Muscarinic receptor",
                  "E": "NMDA receptor"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure is the major exception to the typical two-neuron sympathetic pathway?",
                "options": {
                  "A": "Lacrimal gland",
                  "B": "Salivary gland",
                  "C": "Adrenal medulla",
                  "D": "Urinary bladder",
                  "E": "Sinoatrial node"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Activation of the parasympathetic nervous system is most likely to produce which effect?",
                "options": {
                  "A": "Increased heart rate",
                  "B": "Bronchodilation",
                  "C": "Pupillary dilation",
                  "D": "Increased gastrointestinal motility",
                  "E": "Reduced salivary secretion"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "During a fight-or-flight response, which physiological change is expected?",
                "options": {
                  "A": "Bronchoconstriction",
                  "B": "Pupillary constriction",
                  "C": "Increased gastrointestinal motility",
                  "D": "Increased heart rate",
                  "E": "Increased bladder contraction"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Nicotinic acetylcholine receptors are best described as:",
                "options": {
                  "A": "G protein-coupled receptors",
                  "B": "Seven-transmembrane receptors",
                  "C": "Ligand-gated ion channels",
                  "D": "Tyrosine kinase receptors",
                  "E": "Nuclear receptors"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which muscarinic receptor subtype is primarily responsible for slowing the heart?",
                "options": {
                  "A": "M1",
                  "B": "M2",
                  "C": "M3",
                  "D": "M4",
                  "E": "M5"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Activation of cardiac M2 receptors decreases heart rate primarily because:",
                "options": {
                  "A": "Adenylyl cyclase activity increases",
                  "B": "HCN channel activity increases",
                  "C": "Potassium channels open and HCN channel activity falls",
                  "D": "Intracellular calcium markedly increases",
                  "E": "\u03b21 receptors become activated"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which enzyme rapidly terminates cholinergic signalling by breaking down acetylcholine in the synaptic cleft?",
                "options": {
                  "A": "Monoamine oxidase",
                  "B": "Catechol-O-methyltransferase",
                  "C": "Tyrosine hydroxylase",
                  "D": "Acetylcholinesterase",
                  "E": "Dopamine \u03b2-hydroxylase"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which drug mechanism is most appropriate for treating acute asthma according to the lecture?",
                "options": {
                  "A": "M3 muscarinic receptor agonist",
                  "B": "\u03b22-adrenoceptor antagonist",
                  "C": "\u03b22-adrenoceptor agonist",
                  "D": "\u03b21-adrenoceptor antagonist",
                  "E": "Nicotinic receptor antagonist"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Ipratropium improves symptoms of asthma primarily by:",
                "options": {
                  "A": "Activating \u03b22 receptors",
                  "B": "Blocking M3 muscarinic receptors",
                  "C": "Stimulating nicotinic receptors",
                  "D": "Inhibiting acetylcholinesterase",
                  "E": "Activating \u03b21 receptors"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A patient has an overactive bladder caused by excessive smooth muscle contraction. Which drug action would most directly reduce symptoms?",
                "options": {
                  "A": "M3 muscarinic receptor agonist",
                  "B": "\u03b23-adrenoceptor antagonist",
                  "C": "M3 muscarinic receptor antagonist",
                  "D": "Nicotinic receptor agonist",
                  "E": "\u03b11-adrenoceptor agonist"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Salbutamol relieves bronchoconstriction because it:",
                "options": {
                  "A": "Blocks muscarinic receptors",
                  "B": "Activates \u03b22-adrenoceptors causing smooth muscle relaxation",
                  "C": "Activates \u03b21-adrenoceptors to increase cardiac output",
                  "D": "Inhibits acetylcholinesterase",
                  "E": "Stimulates \u03b11-adrenoceptors"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "In adrenergic synapses, termination of neurotransmitter signalling occurs primarily through:",
                "options": {
                  "A": "Breakdown by acetylcholinesterase",
                  "B": "Diffusion only",
                  "C": "Reuptake of noradrenaline into the presynaptic neuron",
                  "D": "Breakdown by phospholipase C",
                  "E": "Degradation by adenylyl cyclase"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Amphetamine increases sympathetic activity primarily by:",
                "options": {
                  "A": "Blocking \u03b22 receptors",
                  "B": "Stimulating muscarinic receptors",
                  "C": "Displacing noradrenaline from presynaptic nerve terminals",
                  "D": "Inhibiting acetylcholinesterase",
                  "E": "Blocking nicotinic receptors"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fpp-9-skeletal-and-cardiac-muscle-physiology",
            "title": "FPP-9 Skeletal and Cardiac Muscle Physiology",
            "questions": [
              {
                "question": "Which feature is shared by both skeletal and cardiac muscle?",
                "options": {
                  "A": "Both are involuntary muscles",
                  "B": "Both are non-striated",
                  "C": "Both contain sarcomeres and are striated",
                  "D": "Both are innervated by autonomic motor neurons",
                  "E": "Both generate spontaneous action potentials"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A sarcomere is defined as:",
                "options": {
                  "A": "The region between two adjacent T-tubules",
                  "B": "The region between two adjacent Z-lines",
                  "C": "The region containing only myosin filaments",
                  "D": "The entire muscle fibre",
                  "E": "The region between two mitochondria"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The A band of skeletal muscle primarily corresponds to:",
                "options": {
                  "A": "Regions containing only actin filaments",
                  "B": "Regions containing only titin",
                  "C": "Regions occupied mainly by thick myosin filaments",
                  "D": "Mitochondria-rich regions",
                  "E": "The Z-line"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure represents an invagination of the muscle cell membrane that carries the action potential into the cell?",
                "options": {
                  "A": "Sarcoplasmic reticulum",
                  "B": "Terminal cisterna",
                  "C": "Mitochondrion",
                  "D": "T-tubule",
                  "E": "Sarcomere"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Compared with skeletal muscle, cardiac muscle cells are:",
                "options": {
                  "A": "Long cylindrical fibres with multiple nuclei",
                  "B": "Brick-shaped cells joined together",
                  "C": "Unstriated spindle-shaped cells",
                  "D": "Larger in diameter and length",
                  "E": "Devoid of mitochondria"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best describes ventricular cardiac muscle action potentials?",
                "options": {
                  "A": "They last approximately 1 ms",
                  "B": "They contain a long plateau phase",
                  "C": "They lack a refractory period",
                  "D": "They are shorter than neuronal action potentials",
                  "E": "They are generated only by motor neurons"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why is the refractory period of ventricular cardiac muscle unusually long?",
                "options": {
                  "A": "To increase calcium entry into skeletal muscle",
                  "B": "To allow summation of contractions",
                  "C": "To prevent tetanic contraction and reduce re-entry arrhythmias",
                  "D": "To improve neuromuscular transmission",
                  "E": "To increase ATP synthesis"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Skeletal muscle can undergo tetanic contraction because:",
                "options": {
                  "A": "Its action potential is longer than cardiac muscle",
                  "B": "It has a very long refractory period",
                  "C": "Its refractory period is short, allowing repeated stimulation",
                  "D": "Calcium cannot leave the cytoplasm",
                  "E": "It contracts spontaneously"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which ion directly links electrical excitation to contraction in both skeletal and cardiac muscle?",
                "options": {
                  "A": "Sodium",
                  "B": "Potassium",
                  "C": "Chloride",
                  "D": "Calcium",
                  "E": "Magnesium"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Removing extracellular calcium causes cardiac muscle contraction to stop almost immediately because:",
                "options": {
                  "A": "Cardiac muscle relies on calcium-induced calcium release",
                  "B": "ATP production stops instantly",
                  "C": "Sodium channels permanently close",
                  "D": "Potassium cannot leave the cell",
                  "E": "Troponin C is degraded"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "Skeletal muscle continues contracting for some time after extracellular calcium is removed because:",
                "options": {
                  "A": "It does not require calcium for contraction",
                  "B": "It uses voltage-induced calcium release from intracellular stores",
                  "C": "Calcium enters through sodium channels",
                  "D": "Troponin C is permanently activated",
                  "E": "Calcium is produced inside mitochondria"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During excitation-contraction coupling in cardiac muscle, calcium entering through L-type calcium channels primarily:",
                "options": {
                  "A": "Directly activates troponin C only",
                  "B": "Activates sodium channels",
                  "C": "Triggers calcium release from the sarcoplasmic reticulum",
                  "D": "Pumps calcium out of the cell",
                  "E": "Closes ryanodine receptors"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The intracellular calcium release channel in the sarcoplasmic reticulum is the:",
                "options": {
                  "A": "SERCA pump",
                  "B": "HCN channel",
                  "C": "Ryanodine receptor",
                  "D": "L-type calcium channel",
                  "E": "Sodium-calcium exchanger"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which protein pumps calcium back into the sarcoplasmic reticulum during relaxation?",
                "options": {
                  "A": "Ryanodine receptor",
                  "B": "SERCA",
                  "C": "Troponin T",
                  "D": "Sodium channel",
                  "E": "Tropomyosin"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Calcium initiates contraction by binding directly to:",
                "options": {
                  "A": "Actin",
                  "B": "Myosin",
                  "C": "Tropomyosin",
                  "D": "Troponin C",
                  "E": "Troponin I"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "ATP is required during skeletal and cardiac muscle contraction primarily because it:",
                "options": {
                  "A": "Opens sodium channels",
                  "B": "Binds calcium",
                  "C": "Allows myosin heads to detach and cycle forward",
                  "D": "Activates troponin C",
                  "E": "Closes calcium channels"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "According to the Frank-Starling law, increasing ventricular filling before contraction will:",
                "options": {
                  "A": "Decrease force because cross-bridge overlap falls",
                  "B": "Increase force because sarcomeres are stretched closer to their optimal length",
                  "C": "Prevent calcium release",
                  "D": "Shorten the refractory period",
                  "E": "Reduce ATP production"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Stretching cardiac muscle increases contractile force by:",
                "options": {
                  "A": "Increasing only action potential duration",
                  "B": "Increasing only calcium entry through L-type channels",
                  "C": "Increasing cross-bridge overlap and calcium sensitivity",
                  "D": "Increasing sodium channel density",
                  "E": "Decreasing troponin C affinity for calcium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which term describes an increase in the strength of cardiac muscle contraction?",
                "options": {
                  "A": "Positive chronotropy",
                  "B": "Positive lusitropy",
                  "C": "Positive inotropy",
                  "D": "Positive dromotropy",
                  "E": "Positive bathmotropy"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "fpp-10-smooth-muscle-physiology",
            "title": "FPP-10 Smooth Muscle Physiology",
            "questions": [
              {
                "question": "Which organ system contains smooth muscle?",
                "options": {
                  "A": "Skeletal muscle only",
                  "B": "Cardiac muscle only",
                  "C": "Blood vessels, gastrointestinal tract, airways, bladder and uterus",
                  "D": "Bones only",
                  "E": "Brain only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which blood vessels are the primary site of regulation of vascular resistance?",
                "options": {
                  "A": "Capillaries",
                  "B": "Veins",
                  "C": "Venules",
                  "D": "Arterioles",
                  "E": "Aorta"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Veins are primarily classified as:",
                "options": {
                  "A": "Resistance vessels",
                  "B": "Exchange vessels",
                  "C": "Capacitance vessels",
                  "D": "Pacemaker vessels",
                  "E": "Conducting vessels only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Gap junctions in smooth muscle primarily allow:",
                "options": {
                  "A": "Hormone secretion",
                  "B": "Electrical coupling between adjacent cells",
                  "C": "ATP synthesis",
                  "D": "Calcium storage",
                  "E": "Protein synthesis"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which smooth muscle type is most commonly innervated using the unitary model?",
                "options": {
                  "A": "Iris muscle",
                  "B": "Ciliary body",
                  "C": "Piloerector muscles",
                  "D": "Gastrointestinal smooth muscle",
                  "E": "Extraocular skeletal muscle"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The major cytoskeletal proteins responsible for contraction in smooth muscle are:",
                "options": {
                  "A": "Keratin and collagen",
                  "B": "Actin and myosin",
                  "C": "Tubulin and collagen",
                  "D": "Elastin and titin",
                  "E": "Laminin and dystrophin"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which intracellular organelle serves as the major calcium store in smooth muscle?",
                "options": {
                  "A": "Golgi apparatus",
                  "B": "Nucleus",
                  "C": "Sarcoplasmic reticulum",
                  "D": "Lysosome",
                  "E": "Peroxisome"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which smooth muscles commonly generate slow waves and action potentials?",
                "options": {
                  "A": "Vascular smooth muscle only",
                  "B": "Airway smooth muscle only",
                  "C": "Gastrointestinal smooth muscle",
                  "D": "Iris smooth muscle",
                  "E": "Piloerector muscles"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Compared with skeletal muscle, the action potentials in gastrointestinal smooth muscle are:",
                "options": {
                  "A": "Shorter",
                  "B": "Identical in duration",
                  "C": "Much longer",
                  "D": "Sodium-independent but instantaneous",
                  "E": "Absent under all conditions"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Most vascular smooth muscle contracts in response to:",
                "options": {
                  "A": "Large all-or-none action potentials only",
                  "B": "Graded depolarisations rather than action potentials",
                  "C": "Direct skeletal motor neuron input",
                  "D": "Nicotinic receptor activation",
                  "E": "Troponin activation"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "In smooth muscle, the upstroke of an action potential is mainly due to:",
                "options": {
                  "A": "Sodium influx",
                  "B": "Potassium influx",
                  "C": "Calcium influx",
                  "D": "Chloride influx",
                  "E": "Calcium efflux"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best describes contraction in smooth muscle compared with skeletal muscle?",
                "options": {
                  "A": "Both require troponin C activation",
                  "B": "Both rely on myosin light-chain kinase",
                  "C": "Smooth muscle lacks troponin and instead uses calmodulin",
                  "D": "Smooth muscle does not require calcium",
                  "E": "Smooth muscle contracts independently of ATP"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Calcium initiates smooth muscle contraction by first binding to:",
                "options": {
                  "A": "Troponin C",
                  "B": "Tropomyosin",
                  "C": "Calmodulin",
                  "D": "Myosin",
                  "E": "Actin"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Activated calcium-calmodulin directly stimulates:",
                "options": {
                  "A": "Myosin light-chain phosphatase",
                  "B": "Myosin light-chain kinase",
                  "C": "SERCA",
                  "D": "Ryanodine receptors",
                  "E": "Troponin I"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Relaxation of smooth muscle is promoted by:",
                "options": {
                  "A": "Increased myosin light-chain kinase activity",
                  "B": "Inhibition of myosin light-chain phosphatase",
                  "C": "Activation of myosin light-chain phosphatase",
                  "D": "Increased troponin C affinity",
                  "E": "Increased calcium influx through voltage-gated channels"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which G-protein pathway commonly increases intracellular calcium in smooth muscle?",
                "options": {
                  "A": "Gi",
                  "B": "Gs",
                  "C": "Gq",
                  "D": "G12 only",
                  "E": "Golf"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Activation of \u03b11-adrenoceptors on vascular smooth muscle usually causes:",
                "options": {
                  "A": "Vasodilation",
                  "B": "Vasoconstriction",
                  "C": "No change in vessel diameter",
                  "D": "Bronchodilation",
                  "E": "Bladder relaxation"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Activation of \u03b22-adrenoceptors on airway smooth muscle causes:",
                "options": {
                  "A": "Bronchoconstriction",
                  "B": "Bronchodilation",
                  "C": "Increased mucus secretion only",
                  "D": "Airway smooth muscle hypertrophy",
                  "E": "Increased intracellular calcium causing contraction"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Nitric oxide released from endothelial cells relaxes vascular smooth muscle primarily by increasing:",
                "options": {
                  "A": "cAMP",
                  "B": "IP3",
                  "C": "cGMP",
                  "D": "ATP",
                  "E": "DAG"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Sildenafil (Viagra) improves erectile function primarily by:",
                "options": {
                  "A": "Blocking \u03b11-adrenoceptors",
                  "B": "Activating \u03b22-adrenoceptors",
                  "C": "Inhibiting phosphodiesterase-5 to enhance cGMP signalling",
                  "D": "Blocking calcium channels",
                  "E": "Stimulating acetylcholine release"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          }
        ],
        "subfolders": []
      },
      {
        "id": "anatomy-of-cardiovascular-and-respiratory-systems-questions",
        "title": "Anatomy of Cardiovascular and Respiratory Systems Questions",
        "questionSets": [
          {
            "id": "acrs01l-chest-wall",
            "title": "ACRS01L Chest Wall",
            "questions": [
              {
                "question": "Which structure forms the anterior boundary of the thoracic cavity?",
                "options": {
                  "A": "Thoracic vertebrae",
                  "B": "Diaphragm",
                  "C": "Sternum",
                  "D": "Clavicle",
                  "E": "Scapula"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure forms the inferior boundary of the thoracic cavity containing the heart and lungs?",
                "options": {
                  "A": "Costal margin",
                  "B": "Twelfth rib",
                  "C": "Diaphragm",
                  "D": "Xiphoid process",
                  "E": "Thoracic inlet"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the sternum articulates superiorly with the clavicles?",
                "options": {
                  "A": "Body",
                  "B": "Xiphoid process",
                  "C": "Manubrium",
                  "D": "Costal margin",
                  "E": "Sternal angle"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The sternal angle corresponds to the articulation between which two parts of the sternum?",
                "options": {
                  "A": "Manubrium and clavicle",
                  "B": "Body and xiphoid process",
                  "C": "Manubrium and body",
                  "D": "Body and first rib",
                  "E": "Manubrium and first rib"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which rib can be identified by first palpating the sternal angle?",
                "options": {
                  "A": "First rib",
                  "B": "Second rib",
                  "C": "Third rib",
                  "D": "Fourth rib",
                  "E": "Fifth rib"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The transverse thoracic plane passing through the sternal angle lies approximately at which vertebral level?",
                "options": {
                  "A": "T1\u2013T2",
                  "B": "T2\u2013T3",
                  "C": "T4\u2013T5",
                  "D": "T6\u2013T7",
                  "E": "T8\u2013T9"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which important airway event occurs at the level of the sternal angle?",
                "options": {
                  "A": "Trachea begins",
                  "B": "Larynx divides",
                  "C": "Trachea bifurcates into the main bronchi",
                  "D": "Right main bronchus enters the lung",
                  "E": "Oesophagus enters the stomach"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Typical ribs are:",
                "options": {
                  "A": "Ribs 1\u20137",
                  "B": "Ribs 2\u20138",
                  "C": "Ribs 3\u20139",
                  "D": "Ribs 4\u201310",
                  "E": "Ribs 5\u201312"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A typical rib articulates with:",
                "options": {
                  "A": "One vertebral body only",
                  "B": "Two adjacent vertebral bodies and the transverse process of the corresponding vertebra",
                  "C": "Two transverse processes only",
                  "D": "The sternum only",
                  "E": "One vertebral body and two transverse processes"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which feature contains the intercostal neurovascular bundle?",
                "options": {
                  "A": "Rib tubercle",
                  "B": "Rib angle",
                  "C": "Costal groove",
                  "D": "Neck of the rib",
                  "E": "Head of the rib"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which rib has grooves for the subclavian artery and vein?",
                "options": {
                  "A": "First rib",
                  "B": "Second rib",
                  "C": "Tenth rib",
                  "D": "Eleventh rib",
                  "E": "Twelfth rib"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which rib has a tuberosity for attachment of serratus anterior?",
                "options": {
                  "A": "First rib",
                  "B": "Second rib",
                  "C": "Seventh rib",
                  "D": "Tenth rib",
                  "E": "Twelfth rib"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Floating ribs are:",
                "options": {
                  "A": "Ribs 1\u20132",
                  "B": "Ribs 6\u20138",
                  "C": "Ribs 8\u201310",
                  "D": "Ribs 11\u201312",
                  "E": "Ribs 10\u201312"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "False ribs are:",
                "options": {
                  "A": "Ribs 1\u20135",
                  "B": "Ribs 6\u20138",
                  "C": "Ribs 8\u201310",
                  "D": "Ribs 10\u201312",
                  "E": "Ribs 11\u201312"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which feature distinguishes thoracic vertebrae from cervical and lumbar vertebrae?",
                "options": {
                  "A": "Transverse foramina",
                  "B": "Bifid spinous processes",
                  "C": "Costal facets for rib articulation",
                  "D": "Large vertebral bodies",
                  "E": "Uncinate processes"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During inspiration, the pump-handle movement primarily increases which thoracic diameter?",
                "options": {
                  "A": "Vertical",
                  "B": "Lateral",
                  "C": "Anteroposterior",
                  "D": "Oblique",
                  "E": "Circumferential only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The bucket-handle movement primarily increases which thoracic diameter?",
                "options": {
                  "A": "Vertical",
                  "B": "Lateral (transverse)",
                  "C": "Anteroposterior",
                  "D": "Sagittal only",
                  "E": "Superior-inferior"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which muscle must be reflected to expose pectoralis minor during dissection?",
                "options": {
                  "A": "Serratus anterior",
                  "B": "External intercostal",
                  "C": "Pectoralis major",
                  "D": "Latissimus dorsi",
                  "E": "Trapezius"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Pectoralis minor inserts onto the:",
                "options": {
                  "A": "Clavicle",
                  "B": "Acromion",
                  "C": "Coracoid process",
                  "D": "Greater tubercle of humerus",
                  "E": "Spine of scapula"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Serratus anterior originates from:",
                "options": {
                  "A": "First three ribs",
                  "B": "First five ribs",
                  "C": "First seven ribs",
                  "D": "First nine ribs",
                  "E": "All twelve ribs"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The external intercostal muscle fibres run:",
                "options": {
                  "A": "Inferoposteriorly (\u201chands in pockets\u201d reversed)",
                  "B": "Horizontally",
                  "C": "Anteroinferiorly (\u201chands in pockets\u201d)",
                  "D": "Vertically",
                  "E": "Spiral around the rib cage"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which intercostal muscle layer is most active during inspiration?",
                "options": {
                  "A": "Innermost intercostal",
                  "B": "Internal intercostal",
                  "C": "External intercostal",
                  "D": "Transversus thoracis",
                  "E": "Subcostalis"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The intercostal neurovascular bundle lies between which muscle layers?",
                "options": {
                  "A": "External and internal intercostals",
                  "B": "External intercostal and ribs",
                  "C": "Internal and innermost intercostals",
                  "D": "Innermost intercostal and pleura",
                  "E": "External intercostal and fascia"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The intercostal neurovascular bundle is arranged from superior to inferior as:",
                "options": {
                  "A": "Nerve, artery, vein",
                  "B": "Artery, vein, nerve",
                  "C": "Vein, artery, nerve",
                  "D": "Vein, nerve, artery",
                  "E": "Artery, nerve, vein"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During an intercostal nerve block, the needle is typically inserted just superior to the rib because:",
                "options": {
                  "A": "The pleura is thickest there",
                  "B": "The collateral nerve is larger than the main nerve",
                  "C": "The main intercostal neurovascular bundle runs in the costal groove on the inferior border of the rib",
                  "D": "There are no blood vessels superior to the rib",
                  "E": "The intercostal muscles are absent"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The intercostal nerves are continuations of the:",
                "options": {
                  "A": "Dorsal rami of thoracic spinal nerves",
                  "B": "Ventral rami of thoracic spinal nerves",
                  "C": "Cervical plexus",
                  "D": "Sympathetic trunk",
                  "E": "Phrenic nerves"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Most posterior intercostal arteries arise directly from the:",
                "options": {
                  "A": "Internal thoracic artery",
                  "B": "Subclavian artery",
                  "C": "Thoracic aorta",
                  "D": "Axillary artery",
                  "E": "Costocervical trunk"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The anterior intercostal arteries supplying the upper six spaces arise from the:",
                "options": {
                  "A": "Thoracic aorta",
                  "B": "Internal thoracic artery",
                  "C": "Axillary artery",
                  "D": "Superior intercostal artery",
                  "E": "Ascending aorta"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which muscle is considered the primary muscle of inspiration?",
                "options": {
                  "A": "External intercostal",
                  "B": "Serratus anterior",
                  "C": "Diaphragm",
                  "D": "Pectoralis major",
                  "E": "Scalenes"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement correctly distinguishes the inferior thoracic aperture from the inferior boundary of the thoracic cavity?",
                "options": {
                  "A": "They are identical anatomical structures.",
                  "B": "The inferior thoracic aperture is formed by the diaphragm.",
                  "C": "The diaphragm forms the inferior boundary of the thoracic cavity, whereas the inferior thoracic aperture is the bony opening of the rib cage.",
                  "D": "The inferior thoracic aperture lies superior to the diaphragm.",
                  "E": "The inferior thoracic aperture contains only thoracic organs."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "acrs02l-respiratory-system-1-anatomy-introduction",
            "title": "ACRS02L Respiratory System 1: Anatomy Introduction",
            "questions": [
              {
                "question": "Which structure is responsible for gas exchange in the respiratory system?",
                "options": {
                  "A": "Trachea",
                  "B": "Bronchi",
                  "C": "Larynx",
                  "D": "Alveoli",
                  "E": "Pharynx"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which of the following is part of the upper respiratory tract?",
                "options": {
                  "A": "Main bronchi",
                  "B": "Trachea",
                  "C": "Larynx",
                  "D": "Bronchioles",
                  "E": "Alveoli"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The lower respiratory tract begins at approximately which point?",
                "options": {
                  "A": "Nasal cavity",
                  "B": "Oropharynx",
                  "C": "Upper half of the larynx",
                  "D": "Lower half of the larynx",
                  "E": "Main bronchi"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The primary function of the hyaline cartilage rings of the trachea is to:",
                "options": {
                  "A": "Produce mucus",
                  "B": "Prevent collapse of the airway",
                  "C": "Warm inspired air",
                  "D": "Perform gas exchange",
                  "E": "Produce surfactant"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Anatomically, the thoracic inlet is another name for the:",
                "options": {
                  "A": "Inferior thoracic aperture",
                  "B": "Aortic hiatus",
                  "C": "Superior thoracic aperture",
                  "D": "Costal margin",
                  "E": "Mediastinum"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure passes through the thoracic inlet?",
                "options": {
                  "A": "Inferior vena cava",
                  "B": "Trachea",
                  "C": "Thoracic duct only",
                  "D": "Diaphragm",
                  "E": "Abdominal aorta"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Clinicians commonly use the term \u201cthoracic outlet syndrome\u201d to describe compression occurring at the anatomical:",
                "options": {
                  "A": "Inferior thoracic aperture",
                  "B": "Superior thoracic aperture",
                  "C": "Aortic hiatus",
                  "D": "Oesophageal hiatus",
                  "E": "Caval opening"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement correctly describes the diaphragm?",
                "options": {
                  "A": "It is a flat sheet of connective tissue.",
                  "B": "It forms the inferior thoracic aperture.",
                  "C": "It is a dome-shaped skeletal muscle.",
                  "D": "It consists entirely of tendon.",
                  "E": "It separates the neck from the thorax."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the diaphragm attaches to the costal margin?",
                "options": {
                  "A": "Sternal part",
                  "B": "Costal part",
                  "C": "Lumbar part",
                  "D": "Central tendon",
                  "E": "Right crus only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The central part of the diaphragm consists of:",
                "options": {
                  "A": "Hyaline cartilage",
                  "B": "Smooth muscle",
                  "C": "Fibrocartilage",
                  "D": "Central tendon",
                  "E": "Elastic ligament"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The right and left crura of the diaphragm arise from the:",
                "options": {
                  "A": "Sternum",
                  "B": "Costal cartilages",
                  "C": "Lumbar vertebrae",
                  "D": "Clavicles",
                  "E": "Scapulae"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which artery gives rise to the internal thoracic artery?",
                "options": {
                  "A": "Thoracic aorta",
                  "B": "Abdominal aorta",
                  "C": "Subclavian artery",
                  "D": "Axillary artery",
                  "E": "Brachial artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The pericardiacophrenic artery is a branch of the:",
                "options": {
                  "A": "Thoracic aorta",
                  "B": "Internal thoracic artery",
                  "C": "Inferior phrenic artery",
                  "D": "Musculophrenic artery",
                  "E": "Superior phrenic artery"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which artery supplies the inferior surface of the diaphragm?",
                "options": {
                  "A": "Superior phrenic artery",
                  "B": "Pericardiacophrenic artery",
                  "C": "Musculophrenic artery",
                  "D": "Inferior phrenic artery",
                  "E": "Internal thoracic artery"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The mnemonic \u201cC3, 4 and 5 keep the diaphragm alive\u201d refers to the origin of the:",
                "options": {
                  "A": "Intercostal nerves",
                  "B": "Vagus nerve",
                  "C": "Phrenic nerve",
                  "D": "Sympathetic trunk",
                  "E": "Long thoracic nerve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The phrenic nerve carries:",
                "options": {
                  "A": "Motor fibres only",
                  "B": "Sensory fibres only",
                  "C": "Sympathetic fibres only",
                  "D": "Both motor and sensory fibres",
                  "E": "Parasympathetic fibres only"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Each phrenic nerve primarily supplies:",
                "options": {
                  "A": "Both halves of the diaphragm equally",
                  "B": "The ipsilateral half of the diaphragm",
                  "C": "Only the central tendon",
                  "D": "Only the costal part",
                  "E": "Only the lumbar part"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The peripheral parts of the diaphragm near the ribs also receive sensory innervation from the:",
                "options": {
                  "A": "Vagus nerve",
                  "B": "Intercostal nerves",
                  "C": "Sympathetic trunk",
                  "D": "Greater splanchnic nerve",
                  "E": "Recurrent laryngeal nerve"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure passes through the caval opening?",
                "options": {
                  "A": "Oesophagus",
                  "B": "Descending thoracic aorta",
                  "C": "Inferior vena cava",
                  "D": "Thoracic duct",
                  "E": "Azygos vein"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which nerve also passes through the caval opening?",
                "options": {
                  "A": "Left phrenic nerve",
                  "B": "Right phrenic nerve",
                  "C": "Left vagus nerve",
                  "D": "Right vagus nerve",
                  "E": "Greater splanchnic nerve"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure passes through the oesophageal hiatus?",
                "options": {
                  "A": "Inferior vena cava",
                  "B": "Descending aorta",
                  "C": "Oesophagus",
                  "D": "Azygos vein",
                  "E": "Thoracic duct"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which additional structures accompany the oesophagus through the oesophageal hiatus?",
                "options": {
                  "A": "Phrenic nerves",
                  "B": "Anterior and posterior vagal trunks",
                  "C": "Thoracic duct only",
                  "D": "Azygos vein only",
                  "E": "Sympathetic trunks"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure passes through the aortic hiatus?",
                "options": {
                  "A": "Trachea",
                  "B": "Inferior vena cava",
                  "C": "Descending thoracic aorta",
                  "D": "Oesophagus",
                  "E": "Pulmonary trunk"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which additional structures pass through the aortic hiatus?",
                "options": {
                  "A": "Right phrenic nerve and pulmonary veins",
                  "B": "Thoracic duct and azygos vein",
                  "C": "Left vagus nerve and superior vena cava",
                  "D": "Inferior vena cava and thoracic duct",
                  "E": "Pulmonary arteries only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which hiatus lies within the central tendon of the diaphragm?",
                "options": {
                  "A": "Oesophageal hiatus",
                  "B": "Aortic hiatus",
                  "C": "Caval opening",
                  "D": "Medial arcuate ligament",
                  "E": "Lateral arcuate ligament"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "After passing through the diaphragm, the thoracic aorta becomes the:",
                "options": {
                  "A": "Ascending aorta",
                  "B": "Aortic arch",
                  "C": "Abdominal aorta",
                  "D": "External iliac artery",
                  "E": "Internal thoracic artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The psoas major muscle passes beneath the:",
                "options": {
                  "A": "Lateral arcuate ligament",
                  "B": "Medial arcuate ligament",
                  "C": "Central tendon",
                  "D": "Costal part",
                  "E": "Sternal part"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The quadratus lumborum muscle passes beneath the:",
                "options": {
                  "A": "Medial arcuate ligament",
                  "B": "Caval opening",
                  "C": "Oesophageal hiatus",
                  "D": "Lateral arcuate ligament",
                  "E": "Aortic hiatus"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The first six anterior intercostal arteries arise directly from the:",
                "options": {
                  "A": "Thoracic aorta",
                  "B": "Internal thoracic artery",
                  "C": "Superior intercostal artery",
                  "D": "Musculophrenic artery",
                  "E": "Inferior phrenic artery"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement about the anterior intercostal veins is correct?",
                "options": {
                  "A": "Each artery is accompanied by a single vein.",
                  "B": "They drain directly into the superior vena cava.",
                  "C": "They commonly occur as paired accompanying veins alongside the arteries.",
                  "D": "They all drain into the azygos vein.",
                  "E": "They are absent in the upper six intercostal spaces."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "acrs03l-respiratory-system-2-anatomy-of-breathing",
            "title": "ACRS03L Respiratory System 2: Anatomy of Breathing",
            "questions": [
              {
                "question": "During quiet inspiration, the primary muscle responsible for increasing thoracic volume is the:",
                "options": {
                  "A": "External intercostal muscle",
                  "B": "Sternocleidomastoid",
                  "C": "Diaphragm",
                  "D": "Pectoralis major",
                  "E": "Rectus abdominis"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During inspiration, contraction of the diaphragm causes it to:",
                "options": {
                  "A": "Relax and become more dome-shaped",
                  "B": "Flatten and descend",
                  "C": "Elevate the ribs directly",
                  "D": "Compress the lungs",
                  "E": "Narrow the thoracic cavity"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The bucket handle movement of the ribs primarily increases the:",
                "options": {
                  "A": "Vertical diameter",
                  "B": "Anteroposterior diameter",
                  "C": "Transverse diameter",
                  "D": "Sagittal diameter of the vertebral column",
                  "E": "Diameter of the trachea"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The pump handle movement primarily increases the:",
                "options": {
                  "A": "Vertical diameter",
                  "B": "Transverse diameter",
                  "C": "Anteroposterior diameter",
                  "D": "Diameter of the diaphragm",
                  "E": "Diameter of the bronchi"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During quiet expiration:",
                "options": {
                  "A": "The diaphragm actively contracts",
                  "B": "The diaphragm relaxes and becomes dome-shaped",
                  "C": "External intercostals contract forcefully",
                  "D": "Sternocleidomastoid contracts",
                  "E": "Abdominal muscles contract maximally"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Increasing thoracic volume during inspiration causes intrathoracic pressure to:",
                "options": {
                  "A": "Increase",
                  "B": "Remain unchanged",
                  "C": "Decrease",
                  "D": "Equalise with atmospheric pressure",
                  "E": "Become positive"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Approximately how far does the diaphragm descend during quiet breathing?",
                "options": {
                  "A": "0.5 cm",
                  "B": "1.5 cm",
                  "C": "3 cm",
                  "D": "5 cm",
                  "E": "8 cm"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Compared with standing, the diaphragm sits higher when lying supine primarily because:",
                "options": {
                  "A": "The lungs expand upward",
                  "B": "The heart pushes it superiorly",
                  "C": "Abdominal organs push it upward",
                  "D": "The phrenic nerve shortens",
                  "E": "The ribs descend"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why can breathing feel more difficult when lying flat?",
                "options": {
                  "A": "The lungs lose their blood supply",
                  "B": "The diaphragm has a greater distance to move",
                  "C": "The trachea narrows",
                  "D": "The bronchi collapse",
                  "E": "The phrenic nerve is compressed"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which spinal nerve roots contribute to the phrenic nerve?",
                "options": {
                  "A": "C1\u2013C3",
                  "B": "C2\u2013C4",
                  "C": "C3\u2013C5",
                  "D": "C4\u2013C6",
                  "E": "C5\u2013C7"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Injury to the right phrenic nerve most directly causes paralysis of the:",
                "options": {
                  "A": "Entire diaphragm",
                  "B": "Left hemidiaphragm",
                  "C": "Right hemidiaphragm",
                  "D": "External intercostals",
                  "E": "Internal intercostals"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Unilateral phrenic nerve paralysis is often relatively asymptomatic because:",
                "options": {
                  "A": "The vagus nerve compensates",
                  "B": "The opposite hemidiaphragm continues functioning",
                  "C": "The intercostal nerves replace the phrenic nerve",
                  "D": "Both phrenic nerves innervate the whole diaphragm",
                  "E": "The diaphragm is not required for quiet breathing"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Bilateral phrenic nerve paralysis is most likely to result in:",
                "options": {
                  "A": "Hoarseness only",
                  "B": "Respiratory distress",
                  "C": "Difficulty swallowing only",
                  "D": "Bradycardia",
                  "E": "Loss of smell"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During forced expiration, the abdominal muscles primarily:",
                "options": {
                  "A": "Increase thoracic volume",
                  "B": "Flatten the diaphragm",
                  "C": "Increase intra-abdominal pressure, pushing the diaphragm upward",
                  "D": "Elevate the sternum",
                  "E": "Prevent rib movement"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which muscle is NOT considered an accessory muscle of inspiration?",
                "options": {
                  "A": "Sternocleidomastoid",
                  "B": "Scalenes",
                  "C": "Pectoralis major",
                  "D": "Diaphragm",
                  "E": "Pectoralis minor"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Athletes often brace their arms on their knees after intense exercise because this:",
                "options": {
                  "A": "Prevents diaphragm fatigue",
                  "B": "Stabilises the pectoral muscles so they can assist inspiration",
                  "C": "Lowers heart rate directly",
                  "D": "Increases airway diameter",
                  "E": "Relaxes the abdominal wall"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The fibres of the external intercostal muscles run:",
                "options": {
                  "A": "Superomedially (\u201chands in pockets\u201d reversed)",
                  "B": "Vertically",
                  "C": "Inferomedially (\u201chands in pockets\u201d)",
                  "D": "Horizontally",
                  "E": "Circularly"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Experimental evidence demonstrates that the external intercostal muscles are active primarily during:",
                "options": {
                  "A": "Quiet expiration only",
                  "B": "Forced expiration only",
                  "C": "Inspiration",
                  "D": "Coughing only",
                  "E": "Swallowing"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the internal intercostal muscles is active during inspiration?",
                "options": {
                  "A": "Interosseous part",
                  "B": "Interchondral part",
                  "C": "Entire muscle equally",
                  "D": "Innermost part only",
                  "E": "Posterior fibres only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the internal intercostal muscles is primarily active during expiration?",
                "options": {
                  "A": "Interchondral part",
                  "B": "Interosseous part",
                  "C": "External fibres",
                  "D": "Costal cartilage only",
                  "E": "Central tendon"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The trachea begins as a continuation of the:",
                "options": {
                  "A": "Pharynx",
                  "B": "Oesophagus",
                  "C": "Larynx",
                  "D": "Nasal cavity",
                  "E": "Main bronchi"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The posterior wall of the trachea is completed by:",
                "options": {
                  "A": "Hyaline cartilage",
                  "B": "Elastic cartilage",
                  "C": "Smooth muscle and a membranous wall",
                  "D": "Fibrocartilage",
                  "E": "Bone"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The trachea bifurcates at approximately the level of the:",
                "options": {
                  "A": "Jugular notch",
                  "B": "T1 vertebra",
                  "C": "Sternal angle",
                  "D": "Xiphoid process",
                  "E": "T12 vertebra"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why is an aspirated foreign body more likely to enter the right lung?",
                "options": {
                  "A": "The right lung is larger",
                  "B": "The left main bronchus is absent",
                  "C": "The right main bronchus is wider and more vertical",
                  "D": "The carina directs objects to the left",
                  "E": "The right bronchus is longer"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The ridge located at the tracheal bifurcation is called the:",
                "options": {
                  "A": "Hilum",
                  "B": "Carina",
                  "C": "Pleural reflection",
                  "D": "Costal groove",
                  "E": "Mediastinum"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "How many lobar (secondary) bronchi normally arise from the right main bronchus?",
                "options": {
                  "A": "One",
                  "B": "Two",
                  "C": "Three",
                  "D": "Four",
                  "E": "Five"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "How many lobar bronchi normally arise from the left main bronchus?",
                "options": {
                  "A": "One",
                  "B": "Two",
                  "C": "Three",
                  "D": "Four",
                  "E": "Five"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A bronchopulmonary segment is supplied by its own:",
                "options": {
                  "A": "Main bronchus only",
                  "B": "Lobar bronchus only",
                  "C": "Segmental bronchus and accompanying blood vessels",
                  "D": "Pulmonary vein only",
                  "E": "Pleural reflection only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The main clinical advantage of bronchopulmonary segments is that they:",
                "options": {
                  "A": "Prevent pneumonia",
                  "B": "Allow segmental surgical resection while preserving the remaining lung",
                  "C": "Contain no blood vessels",
                  "D": "Prevent aspiration",
                  "E": "Increase surfactant production"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the respiratory tract is the first site where gas exchange occurs?",
                "options": {
                  "A": "Trachea",
                  "B": "Main bronchi",
                  "C": "Terminal bronchioles",
                  "D": "Respiratory bronchioles",
                  "E": "Lobar bronchi"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "acrs04l-respiratory-system-3-upper-airways",
            "title": "ACRS04L Respiratory System 3: Upper Airways",
            "questions": [
              {
                "question": "Which structure separates the nasal cavity into right and left halves?",
                "options": {
                  "A": "Inferior nasal concha",
                  "B": "Vomer only",
                  "C": "Nasal septum",
                  "D": "Middle meatus",
                  "E": "Cribriform plate"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Air enters the nasal cavity through the:",
                "options": {
                  "A": "Choanae",
                  "B": "Posterior nasal apertures",
                  "C": "Anterior nasal apertures (nostrils)",
                  "D": "Inferior meatus",
                  "E": "Nasopharynx"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Air leaves the nasal cavity to enter the pharynx through the:",
                "options": {
                  "A": "External nares",
                  "B": "Anterior nasal apertures",
                  "C": "Choanae (posterior nasal apertures)",
                  "D": "Superior meatus",
                  "E": "Laryngopharynx"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which epithelial lining covers most of the respiratory region of the nasal cavity?",
                "options": {
                  "A": "Simple squamous epithelium",
                  "B": "Stratified squamous epithelium",
                  "C": "Ciliated pseudostratified columnar epithelium",
                  "D": "Transitional epithelium",
                  "E": "Simple cuboidal epithelium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The vestibule of the nose is lined primarily by:",
                "options": {
                  "A": "Simple squamous epithelium",
                  "B": "Stratified squamous epithelium",
                  "C": "Transitional epithelium",
                  "D": "Ciliated pseudostratified columnar epithelium",
                  "E": "Simple columnar epithelium"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The olfactory epithelium is found mainly in the:",
                "options": {
                  "A": "Inferior nasal meatus",
                  "B": "Vestibule",
                  "C": "Roof of the nasal cavity",
                  "D": "Floor of the nasal cavity",
                  "E": "Posterior choana"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "What is the primary respiratory function of the nasal conchae?",
                "options": {
                  "A": "Produce surfactant",
                  "B": "Increase surface area to warm and humidify inspired air",
                  "C": "Generate mucus only",
                  "D": "Prevent swallowing",
                  "E": "Produce voice"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The spaces beneath the nasal conchae are called:",
                "options": {
                  "A": "Choanae",
                  "B": "Sinuses",
                  "C": "Meatuses (meati)",
                  "D": "Fossae",
                  "E": "Hiatuses"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which space lies superior to the superior nasal concha?",
                "options": {
                  "A": "Superior meatus",
                  "B": "Inferior meatus",
                  "C": "Middle meatus",
                  "D": "Sphenoethmoidal recess",
                  "E": "Nasopharynx"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which of the following is NOT a paranasal sinus?",
                "options": {
                  "A": "Frontal sinus",
                  "B": "Ethmoidal sinus",
                  "C": "Maxillary sinus",
                  "D": "Sphenoid sinus",
                  "E": "Mastoid sinus"
                },
                "correctAnswer": "E",
                "explanation": "No explanation provided."
              },
              {
                "question": "A major function of the paranasal sinuses is to:",
                "options": {
                  "A": "Produce red blood cells",
                  "B": "Warm and humidify inspired air",
                  "C": "Prevent speech",
                  "D": "Pump mucus into the lungs",
                  "E": "Store cerebrospinal fluid"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Another important function of the paranasal sinuses is to:",
                "options": {
                  "A": "Increase skull weight",
                  "B": "Produce saliva",
                  "C": "Reduce the mass of the skull",
                  "D": "Protect the pituitary gland",
                  "E": "Produce lymphocytes"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Tears drain into the nasal cavity through the:",
                "options": {
                  "A": "Frontal sinus",
                  "B": "Nasolacrimal duct",
                  "C": "Ethmoidal air cells",
                  "D": "Choana",
                  "E": "Sphenoid sinus"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which paranasal sinus is most prone to poor drainage because its opening lies superior to the sinus cavity?",
                "options": {
                  "A": "Frontal sinus",
                  "B": "Ethmoidal sinus",
                  "C": "Maxillary sinus",
                  "D": "Sphenoid sinus",
                  "E": "Mastoid air cells"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During the day, mucus tends to collect in the maxillary sinus because:",
                "options": {
                  "A": "It has no drainage opening",
                  "B": "Gravity opposes drainage",
                  "C": "The mucus is too thick",
                  "D": "It lacks cilia",
                  "E": "The sinus is closed during inspiration"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the pharynx lies directly posterior to the nasal cavity?",
                "options": {
                  "A": "Oropharynx",
                  "B": "Laryngopharynx",
                  "C": "Nasopharynx",
                  "D": "Hypopharynx",
                  "E": "Oral vestibule"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the pharynx lies directly posterior to the oral cavity?",
                "options": {
                  "A": "Nasopharynx",
                  "B": "Oropharynx",
                  "C": "Laryngopharynx",
                  "D": "Oesophagus",
                  "E": "Larynx"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the pharynx lies directly posterior to the larynx?",
                "options": {
                  "A": "Nasopharynx",
                  "B": "Oropharynx",
                  "C": "Laryngopharynx",
                  "D": "Oral cavity",
                  "E": "Choana"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "At approximately which vertebral level do the larynx end and the trachea begin?",
                "options": {
                  "A": "C2",
                  "B": "C4",
                  "C": "C5",
                  "D": "C6",
                  "E": "T1"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The larynx extends approximately between which vertebral levels?",
                "options": {
                  "A": "C1\u2013C4",
                  "B": "C2\u2013C5",
                  "C": "C3\u2013C6",
                  "D": "C4\u2013T1",
                  "E": "C5\u2013T2"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which cartilage forms the \u201cAdam\u2019s apple\u201d?",
                "options": {
                  "A": "Cricoid cartilage",
                  "B": "Epiglottis",
                  "C": "Thyroid cartilage",
                  "D": "Arytenoid cartilage",
                  "E": "Corniculate cartilage"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which cartilage forms a complete ring around the airway?",
                "options": {
                  "A": "Thyroid cartilage",
                  "B": "Epiglottis",
                  "C": "Cricoid cartilage",
                  "D": "Arytenoid cartilage",
                  "E": "Cuneiform cartilage"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which cartilage acts as a flap to protect the airway during swallowing?",
                "options": {
                  "A": "Thyroid cartilage",
                  "B": "Arytenoid cartilage",
                  "C": "Epiglottis",
                  "D": "Corniculate cartilage",
                  "E": "Cricoid cartilage"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which paired cartilages directly control movement of the vocal folds?",
                "options": {
                  "A": "Cuneiform cartilages",
                  "B": "Corniculate cartilages",
                  "C": "Arytenoid cartilages",
                  "D": "Thyroid cartilages",
                  "E": "Cricoid cartilages"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The true vocal cords are formed by the free edge of the:",
                "options": {
                  "A": "Quadrangular membrane",
                  "B": "Cricothyroid membrane",
                  "C": "Thyrohyoid membrane",
                  "D": "Cricotracheal ligament",
                  "E": "Hyoepiglottic ligament"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The false vocal cords (vestibular folds) are formed by the free edge of the:",
                "options": {
                  "A": "Cricothyroid membrane",
                  "B": "Quadrangular membrane",
                  "C": "Thyrohyoid membrane",
                  "D": "Cricotracheal ligament",
                  "E": "Median thyrohyoid ligament"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The opening between the true vocal folds is known as the:",
                "options": {
                  "A": "Vestibule",
                  "B": "Laryngeal inlet",
                  "C": "Rima glottidis",
                  "D": "Choana",
                  "E": "Piriform recess"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During deep inspiration, the rima glottidis:",
                "options": {
                  "A": "Closes completely",
                  "B": "Narrows to a slit",
                  "C": "Widens to maximise airflow",
                  "D": "Remains unchanged",
                  "E": "Is covered by the epiglottis"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During quiet breathing, the rima glottidis is typically:",
                "options": {
                  "A": "Completely closed",
                  "B": "Diamond-shaped",
                  "C": "Circular",
                  "D": "A narrow slit",
                  "E": "Triangular"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During speech, the true vocal folds are:",
                "options": {
                  "A": "Maximally abducted",
                  "B": "Widely separated",
                  "C": "Adducted, leaving only a narrow slit",
                  "D": "Completely relaxed",
                  "E": "Covered by the epiglottis"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which muscle abducts the vocal folds to open the airway?",
                "options": {
                  "A": "Cricothyroid",
                  "B": "Posterior cricoarytenoid",
                  "C": "Thyroarytenoid",
                  "D": "Lateral cricoarytenoid",
                  "E": "Vocalis"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The only intrinsic muscle of the larynx supplied by the external branch of the superior laryngeal nerve is the:",
                "options": {
                  "A": "Posterior cricoarytenoid",
                  "B": "Lateral cricoarytenoid",
                  "C": "Thyroarytenoid",
                  "D": "Cricothyroid",
                  "E": "Vocalis"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Sensation from the mucosa superior to the vocal folds is carried mainly by the:",
                "options": {
                  "A": "Recurrent laryngeal nerve",
                  "B": "Glossopharyngeal nerve",
                  "C": "Internal branch of the superior laryngeal nerve",
                  "D": "External branch of the superior laryngeal nerve",
                  "E": "Hypoglossal nerve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The recurrent laryngeal nerve supplies:",
                "options": {
                  "A": "Only the epiglottis",
                  "B": "Most intrinsic muscles of the larynx and sensation below the vocal folds",
                  "C": "Only the cricothyroid muscle",
                  "D": "Only the thyroid gland",
                  "E": "The pharyngeal constrictors only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "On the left side, the recurrent laryngeal nerve loops around the:",
                "options": {
                  "A": "Left subclavian artery",
                  "B": "Common carotid artery",
                  "C": "Arch of the aorta",
                  "D": "Pulmonary trunk",
                  "E": "Internal thoracic artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "On the right side, the recurrent laryngeal nerve loops around the:",
                "options": {
                  "A": "Arch of the aorta",
                  "B": "Right subclavian artery",
                  "C": "Brachiocephalic vein",
                  "D": "Ascending aorta",
                  "E": "Common carotid artery"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The superior laryngeal artery is a branch of the:",
                "options": {
                  "A": "Superior thyroid artery",
                  "B": "Inferior thyroid artery",
                  "C": "Lingual artery",
                  "D": "Facial artery",
                  "E": "Ascending pharyngeal artery"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "The inferior laryngeal artery arises from the:",
                "options": {
                  "A": "Superior thyroid artery",
                  "B": "Inferior thyroid artery",
                  "C": "External carotid artery",
                  "D": "Common carotid artery",
                  "E": "Internal thoracic artery"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which artery gives rise to the superior thyroid artery?",
                "options": {
                  "A": "Internal carotid artery",
                  "B": "External carotid artery",
                  "C": "Subclavian artery",
                  "D": "Common carotid artery",
                  "E": "Thyrocervical trunk"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The inferior thyroid artery most directly arises from the:",
                "options": {
                  "A": "External carotid artery",
                  "B": "Common carotid artery",
                  "C": "Thyrocervical trunk",
                  "D": "Internal thoracic artery",
                  "E": "Vertebral artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "acrs05l-respiratory-system-4-lungs-and-pleurae",
            "title": "ACRS05L Respiratory System 4: Lungs and Pleurae",
            "questions": [
              {
                "question": "Which fissure is found only in the right lung?",
                "options": {
                  "A": "Oblique fissure",
                  "B": "Horizontal fissure",
                  "C": "Cardiac notch",
                  "D": "Lingula",
                  "E": "Pulmonary ligament"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "How many lobes does the right lung have?",
                "options": {
                  "A": "One",
                  "B": "Two",
                  "C": "Three",
                  "D": "Four",
                  "E": "Five"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which lobes are present in the left lung?",
                "options": {
                  "A": "Superior, middle and inferior",
                  "B": "Superior and inferior only",
                  "C": "Middle and inferior only",
                  "D": "Superior only",
                  "E": "Inferior only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure is unique to the left lung?",
                "options": {
                  "A": "Oblique fissure",
                  "B": "Hilum",
                  "C": "Horizontal fissure",
                  "D": "Cardiac notch",
                  "E": "Apex"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The lingula is anatomically part of the:",
                "options": {
                  "A": "Right middle lobe",
                  "B": "Left superior lobe",
                  "C": "Left inferior lobe",
                  "D": "Right superior lobe",
                  "E": "Mediastinum"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The apex of each lung extends:",
                "options": {
                  "A": "To the level of the second rib only",
                  "B": "Above the first rib into the root of the neck",
                  "C": "To the clavicle only",
                  "D": "Into the axilla",
                  "E": "Below the diaphragm"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which surface of the lung contains the hilum?",
                "options": {
                  "A": "Costal surface",
                  "B": "Inferior surface",
                  "C": "Medial (mediastinal) surface",
                  "D": "Apical surface",
                  "E": "Posterior surface"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The hilum of the lung is best described as the:",
                "options": {
                  "A": "Site of alveolar gas exchange",
                  "B": "Junction between visceral and parietal pleura",
                  "C": "Entrance and exit for bronchi, vessels, nerves and lymphatics",
                  "D": "Lowest part of the lung",
                  "E": "Attachment of the diaphragm"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure entering the hilum can be identified by palpable cartilage in its wall?",
                "options": {
                  "A": "Pulmonary artery",
                  "B": "Pulmonary vein",
                  "C": "Main bronchus",
                  "D": "Bronchial vein",
                  "E": "Lymphatic vessel"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Relative to the main bronchus, the pulmonary veins are generally:",
                "options": {
                  "A": "Superior",
                  "B": "Inferior",
                  "C": "Posterior",
                  "D": "Medial",
                  "E": "Lateral"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "On the left side, the pulmonary artery lies:",
                "options": {
                  "A": "Inferior to the main bronchus",
                  "B": "Anterior to the main bronchus",
                  "C": "Superior to the main bronchus",
                  "D": "Posterior to the pulmonary veins",
                  "E": "Within the oblique fissure"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "On the right side, the pulmonary artery lies mainly:",
                "options": {
                  "A": "Inferior to the bronchus",
                  "B": "Anterior to the bronchus",
                  "C": "Posterior to the bronchus",
                  "D": "Lateral to the pulmonary veins",
                  "E": "Within the horizontal fissure"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A deep groove for the descending aorta is normally found on the:",
                "options": {
                  "A": "Right lung only",
                  "B": "Left lung only",
                  "C": "Both lungs equally",
                  "D": "Neither lung",
                  "E": "Inferior lobe only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Grooves for the superior vena cava and azygos vein are found on the:",
                "options": {
                  "A": "Left lung",
                  "B": "Right lung",
                  "C": "Both lungs",
                  "D": "Diaphragm",
                  "E": "Pericardium"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The cardiac impression is deepest on the:",
                "options": {
                  "A": "Right lung",
                  "B": "Left lung",
                  "C": "Equal on both lungs",
                  "D": "Inferior lobes only",
                  "E": "Posterior surfaces only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The pleura directly covering the surface of the lung is the:",
                "options": {
                  "A": "Costal pleura",
                  "B": "Mediastinal pleura",
                  "C": "Visceral pleura",
                  "D": "Diaphragmatic pleura",
                  "E": "Cervical pleura"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The pleura lining the inner thoracic wall is the:",
                "options": {
                  "A": "Visceral pleura",
                  "B": "Endothoracic fascia",
                  "C": "Parietal pleura",
                  "D": "Fibrous pericardium",
                  "E": "Endocardium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The space between the visceral and parietal pleura normally contains:",
                "options": {
                  "A": "Air",
                  "B": "Blood",
                  "C": "A thin layer of serous fluid",
                  "D": "Lymph",
                  "E": "Mucus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The main function of pleural fluid is to:",
                "options": {
                  "A": "Nourish alveoli",
                  "B": "Lubricate pleural surfaces and maintain lung adherence",
                  "C": "Oxygenate blood",
                  "D": "Prevent mucus formation",
                  "E": "Produce surfactant"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The connective tissue layer immediately external to the parietal pleura is the:",
                "options": {
                  "A": "Endothoracic fascia",
                  "B": "Endocardium",
                  "C": "Fibrous pericardium",
                  "D": "Visceral fascia",
                  "E": "Transversalis fascia"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the parietal pleura lines the thoracic wall?",
                "options": {
                  "A": "Cervical pleura",
                  "B": "Mediastinal pleura",
                  "C": "Diaphragmatic pleura",
                  "D": "Costal pleura",
                  "E": "Visceral pleura"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the parietal pleura covers the superior surface of the diaphragm?",
                "options": {
                  "A": "Costal pleura",
                  "B": "Mediastinal pleura",
                  "C": "Cervical pleura",
                  "D": "Diaphragmatic pleura",
                  "E": "Visceral pleura"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which part of the parietal pleura extends into the root of the neck over the lung apex?",
                "options": {
                  "A": "Costal pleura",
                  "B": "Cervical pleura",
                  "C": "Diaphragmatic pleura",
                  "D": "Mediastinal pleura",
                  "E": "Visceral pleura"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The costodiaphragmatic recess is located between the:",
                "options": {
                  "A": "Visceral pleura and lung",
                  "B": "Mediastinal pleura and heart",
                  "C": "Costal and diaphragmatic pleura",
                  "D": "Bronchus and pulmonary artery",
                  "E": "Pulmonary artery and pulmonary vein"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The costodiaphragmatic recess exists because:",
                "options": {
                  "A": "The lungs overexpand",
                  "B": "The lungs do not fully occupy the pleural cavity inferiorly",
                  "C": "The diaphragm contains cartilage",
                  "D": "The pleura is absent inferiorly",
                  "E": "The mediastinum pushes the lungs upwards"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Thoracocentesis is commonly performed in the:",
                "options": {
                  "A": "2nd intercostal space",
                  "B": "4th intercostal space",
                  "C": "Costodiaphragmatic recess",
                  "D": "Suprasternal notch",
                  "E": "Axilla only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During thoracocentesis, the needle is inserted just superior to the rib below to avoid injuring the:",
                "options": {
                  "A": "Lung apex",
                  "B": "Diaphragm",
                  "C": "Intercostal neurovascular bundle",
                  "D": "Pleural cavity",
                  "E": "Internal thoracic artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which rib level approximately marks the inferior border of the lung posteriorly at rest?",
                "options": {
                  "A": "6th rib",
                  "B": "8th rib",
                  "C": "10th rib",
                  "D": "12th rib",
                  "E": "L1 vertebra"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Inserting a thoracocentesis needle below the 10th intercostal space on the right increases the risk of injuring the:",
                "options": {
                  "A": "Heart",
                  "B": "Spleen",
                  "C": "Liver",
                  "D": "Kidney",
                  "E": "Oesophagus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Entry of air into the pleural cavity is termed:",
                "options": {
                  "A": "Haemothorax",
                  "B": "Hydrothorax",
                  "C": "Pneumothorax",
                  "D": "Pyothorax",
                  "E": "Atelectasis"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The immediate consequence of a pneumothorax is:",
                "options": {
                  "A": "Lung hyperinflation",
                  "B": "Collapse of the affected lung",
                  "C": "Bronchoconstriction only",
                  "D": "Pleural thickening",
                  "E": "Increased surfactant production"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Blood within the pleural cavity is called:",
                "options": {
                  "A": "Haemoptysis",
                  "B": "Haemopericardium",
                  "C": "Haemothorax",
                  "D": "Haematoma",
                  "E": "Haemomediastinum"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The mediastinal pleura receives sensory innervation primarily from the:",
                "options": {
                  "A": "Vagus nerve",
                  "B": "Sympathetic trunk",
                  "C": "Phrenic nerve",
                  "D": "Intercostal nerves",
                  "E": "Recurrent laryngeal nerve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The central diaphragmatic pleura is supplied by the:",
                "options": {
                  "A": "Intercostal nerves",
                  "B": "Vagus nerve",
                  "C": "Phrenic nerve",
                  "D": "Long thoracic nerve",
                  "E": "Thoracodorsal nerve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The costal pleura is supplied mainly by the:",
                "options": {
                  "A": "Vagus nerve",
                  "B": "Phrenic nerve",
                  "C": "Intercostal nerves",
                  "D": "Sympathetic trunk",
                  "E": "Pulmonary plexus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The visceral pleura is innervated primarily by:",
                "options": {
                  "A": "Somatic sensory fibres",
                  "B": "Autonomic fibres via the pulmonary plexus",
                  "C": "Phrenic nerve only",
                  "D": "Intercostal nerves only",
                  "E": "Hypoglossal nerve"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement best describes the visceral pleura?",
                "options": {
                  "A": "It is highly sensitive to pain from somatic nerves.",
                  "B": "It receives autonomic innervation through the pulmonary plexus.",
                  "C": "It lines the thoracic wall.",
                  "D": "It is supplied only by the phrenic nerve.",
                  "E": "It is continuous with the endothoracic fascia."
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Deoxygenated blood reaches the lungs through the:",
                "options": {
                  "A": "Pulmonary veins",
                  "B": "Bronchial arteries",
                  "C": "Pulmonary arteries",
                  "D": "Superior vena cava",
                  "E": "Bronchial veins"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Oxygenated blood returns from the lungs to the heart through the:",
                "options": {
                  "A": "Pulmonary arteries",
                  "B": "Pulmonary veins",
                  "C": "Bronchial veins",
                  "D": "Azygos vein",
                  "E": "Superior vena cava"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "acrs06l-cardiovascular-system-1-anatomy-introduction",
            "title": "ACRS06L Cardiovascular System 1: Anatomy Introduction",
            "questions": [
              {
                "question": "Which space lies between the two pulmonary cavities?",
                "options": {
                  "A": "Pleural cavity",
                  "B": "Mediastinum",
                  "C": "Pericardial cavity",
                  "D": "Thoracic inlet",
                  "E": "Costodiaphragmatic recess"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement correctly distinguishes the pleural cavity from the pulmonary cavity?",
                "options": {
                  "A": "They are the same structure.",
                  "B": "The pleural cavity contains the lungs.",
                  "C": "The pulmonary cavity is the potential space between pleural layers.",
                  "D": "The pleural cavity is the potential space between parietal and visceral pleura.",
                  "E": "The pulmonary cavity contains only pleural fluid."
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The apex of the heart is normally located in the:",
                "options": {
                  "A": "Right 5th intercostal space at the midclavicular line",
                  "B": "Left 2nd intercostal space at the sternal border",
                  "C": "Left 5th intercostal space at the midclavicular line",
                  "D": "Left 4th intercostal space at the anterior axillary line",
                  "E": "Right 4th intercostal space at the parasternal line"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Approximately what proportion of the heart lies to the left of the midline?",
                "options": {
                  "A": "One quarter",
                  "B": "One third",
                  "C": "One half",
                  "D": "Two thirds",
                  "E": "Three quarters"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The diaphragmatic surface of the heart rests primarily on the:",
                "options": {
                  "A": "Right hemidiaphragm",
                  "B": "Costal margin",
                  "C": "Central tendon of the diaphragm",
                  "D": "Left lung",
                  "E": "Sternum"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The sternal angle lies at approximately which vertebral level posteriorly?",
                "options": {
                  "A": "T2\u2013T3",
                  "B": "T3\u2013T4",
                  "C": "T4\u2013T5",
                  "D": "T6\u2013T7",
                  "E": "T8\u2013T9"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which major airway bifurcates at the level of the sternal angle?",
                "options": {
                  "A": "Oesophagus",
                  "B": "Left main bronchus",
                  "C": "Trachea",
                  "D": "Pulmonary trunk",
                  "E": "Superior vena cava"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which major vessel begins to form the arch of the aorta at the level of the sternal angle?",
                "options": {
                  "A": "Descending aorta",
                  "B": "Ascending aorta",
                  "C": "Inferior vena cava",
                  "D": "Pulmonary veins",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The tough outer layer anchoring the heart to the diaphragm is the:",
                "options": {
                  "A": "Visceral pericardium",
                  "B": "Parietal pleura",
                  "C": "Fibrous pericardium",
                  "D": "Endocardium",
                  "E": "Epicardium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The fibrous pericardium is firmly attached inferiorly to the:",
                "options": {
                  "A": "Costal pleura",
                  "B": "Central tendon of the diaphragm",
                  "C": "Left lung",
                  "D": "Sternum",
                  "E": "Liver"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The layer directly covering the external surface of the heart is the:",
                "options": {
                  "A": "Fibrous pericardium",
                  "B": "Parietal serous pericardium",
                  "C": "Visceral serous pericardium",
                  "D": "Endocardium",
                  "E": "Endothoracic fascia"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The parietal layer of the serous pericardium lines the:",
                "options": {
                  "A": "Surface of the heart",
                  "B": "Inner surface of the fibrous pericardium",
                  "C": "Thoracic wall",
                  "D": "Pleural cavity",
                  "E": "Diaphragm only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The pericardial cavity is located between the:",
                "options": {
                  "A": "Fibrous and visceral pericardium",
                  "B": "Fibrous and parietal pleura",
                  "C": "Parietal and visceral layers of serous pericardium",
                  "D": "Heart and diaphragm",
                  "E": "Pleura and pericardium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The normal contents of the pericardial cavity are:",
                "options": {
                  "A": "Air",
                  "B": "Blood",
                  "C": "A thin layer of serous fluid",
                  "D": "Lymph",
                  "E": "Synovial fluid"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The primary function of pericardial fluid is to:",
                "options": {
                  "A": "Oxygenate the myocardium",
                  "B": "Lubricate the heart during contraction",
                  "C": "Prevent coronary artery disease",
                  "D": "Anchor the heart to the sternum",
                  "E": "Conduct electrical impulses"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Cardiac tamponade results primarily from:",
                "options": {
                  "A": "Air entering the pleural cavity",
                  "B": "Excess fluid accumulating within the pericardial cavity",
                  "C": "Myocardial hypertrophy",
                  "D": "Pulmonary embolism",
                  "E": "Coronary artery occlusion"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "In cardiac tamponade, the main physiological problem is:",
                "options": {
                  "A": "Increased coronary blood flow",
                  "B": "Compression of the heart, limiting ventricular filling",
                  "C": "Collapse of the lungs",
                  "D": "Rupture of the aorta",
                  "E": "Hyperinflation of the ventricles"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Pericardiocentesis is performed to:",
                "options": {
                  "A": "Drain pleural fluid",
                  "B": "Remove pericardial fluid",
                  "C": "Measure pulmonary artery pressure",
                  "D": "Aspirate blood from the left ventricle",
                  "E": "Biopsy the myocardium"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The preferred site for pericardiocentesis is chosen because it:",
                "options": {
                  "A": "Avoids the liver",
                  "B": "Avoids the phrenic nerve only",
                  "C": "Passes through the bare area with minimal risk of puncturing the lung",
                  "D": "Enters directly through the sternum",
                  "E": "Passes through the diaphragm"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Sensory innervation of the fibrous pericardium is carried mainly by the:",
                "options": {
                  "A": "Vagus nerve",
                  "B": "Sympathetic trunk",
                  "C": "Phrenic nerve",
                  "D": "Intercostal nerves",
                  "E": "Recurrent laryngeal nerve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Pain from the fibrous pericardium is commonly referred to the:",
                "options": {
                  "A": "Lower abdomen",
                  "B": "Groin",
                  "C": "Supraclavicular region and shoulder",
                  "D": "Medial thigh",
                  "E": "Lower back"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Referred pain from the fibrous pericardium is explained by the origin of the phrenic nerve from:",
                "options": {
                  "A": "C1\u2013C2",
                  "B": "C3\u2013C5",
                  "C": "T1\u2013T3",
                  "D": "T5\u2013T7",
                  "E": "L1\u2013L3"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The transverse pericardial sinus lies:",
                "options": {
                  "A": "Between the atria",
                  "B": "Posterior to the pulmonary veins only",
                  "C": "Posterior to the ascending aorta and pulmonary trunk, anterior to the superior vena cava",
                  "D": "Inferior to the heart apex",
                  "E": "Between the ventricles"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Surgeons use the transverse pericardial sinus primarily to:",
                "options": {
                  "A": "Access the coronary sinus",
                  "B": "Clamp the outflow vessels during cardiac surgery",
                  "C": "Drain pleural fluid",
                  "D": "Locate the phrenic nerve",
                  "E": "Access the left atrium"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The oblique pericardial sinus is formed mainly by reflections around the:",
                "options": {
                  "A": "Pulmonary trunk and aorta",
                  "B": "Pulmonary veins",
                  "C": "Coronary arteries",
                  "D": "Coronary sinus",
                  "E": "Superior vena cava only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The first arteries to branch from the ascending aorta are the:",
                "options": {
                  "A": "Brachiocephalic arteries",
                  "B": "Coronary arteries",
                  "C": "Pulmonary arteries",
                  "D": "Common carotid arteries",
                  "E": "Bronchial arteries"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which branch arises directly from the aortic arch?",
                "options": {
                  "A": "Right common carotid artery",
                  "B": "Right subclavian artery",
                  "C": "Left common carotid artery",
                  "D": "Right vertebral artery",
                  "E": "Right coronary artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure gives rise to both the right common carotid artery and the right subclavian artery?",
                "options": {
                  "A": "Ascending aorta",
                  "B": "Left common carotid artery",
                  "C": "Brachiocephalic trunk",
                  "D": "Descending thoracic aorta",
                  "E": "Pulmonary trunk"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which statement about the brachiocephalic trunk is correct?",
                "options": {
                  "A": "There is a right and left brachiocephalic trunk.",
                  "B": "It arises from the pulmonary trunk.",
                  "C": "It is a single vessel arising from the aortic arch.",
                  "D": "It supplies only the right upper limb.",
                  "E": "It drains into the superior vena cava."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The thoracic aorta gives rise to which arteries?",
                "options": {
                  "A": "Coronary arteries only",
                  "B": "Posterior intercostal arteries",
                  "C": "Pulmonary arteries",
                  "D": "Internal jugular arteries",
                  "E": "Superior vena cava"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The ligamentum arteriosum is the adult remnant of the fetal:",
                "options": {
                  "A": "Foramen ovale",
                  "B": "Ductus venosus",
                  "C": "Ductus arteriosus",
                  "D": "Umbilical vein",
                  "E": "Umbilical artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The left recurrent laryngeal nerve loops around the:",
                "options": {
                  "A": "Arch of the azygos vein",
                  "B": "Ligamentum arteriosum",
                  "C": "Superior vena cava",
                  "D": "Coronary sinus",
                  "E": "Inferior vena cava"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The superior vena cava is formed by the union of the:",
                "options": {
                  "A": "Internal jugular veins only",
                  "B": "Subclavian veins only",
                  "C": "Right and left brachiocephalic veins",
                  "D": "Azygos and hemiazygos veins",
                  "E": "External jugular veins"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Each brachiocephalic vein is formed by the union of the:",
                "options": {
                  "A": "Internal and external jugular veins",
                  "B": "Internal jugular and subclavian veins",
                  "C": "Subclavian and axillary veins",
                  "D": "Vertebral and subclavian veins",
                  "E": "External jugular and axillary veins"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The arch of the azygos vein drains directly into the:",
                "options": {
                  "A": "Inferior vena cava",
                  "B": "Right atrium",
                  "C": "Superior vena cava",
                  "D": "Pulmonary trunk",
                  "E": "Left brachiocephalic vein"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The foramen ovale in the fetus allows blood to pass directly from the:",
                "options": {
                  "A": "Left atrium to left ventricle",
                  "B": "Right atrium to left atrium",
                  "C": "Right ventricle to pulmonary trunk",
                  "D": "Left ventricle to aorta",
                  "E": "Pulmonary artery to aorta"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The adult remnant of the foramen ovale is the:",
                "options": {
                  "A": "Ligamentum arteriosum",
                  "B": "Coronary sinus",
                  "C": "Fossa ovalis",
                  "D": "Crista terminalis",
                  "E": "Moderator band"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "In fetal circulation, the ductus arteriosus connects the:",
                "options": {
                  "A": "Right atrium and left atrium",
                  "B": "Left ventricle and aorta",
                  "C": "Pulmonary trunk and aortic arch",
                  "D": "Inferior vena cava and right atrium",
                  "E": "Superior vena cava and right atrium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The main purpose of the fetal foramen ovale and ductus arteriosus is to:",
                "options": {
                  "A": "Increase blood flow through the lungs",
                  "B": "Bypass the non-functional fetal lungs",
                  "C": "Supply the coronary arteries",
                  "D": "Increase pulmonary pressure",
                  "E": "Oxygenate blood within the lungs"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "After birth, closure of the ductus arteriosus is important because it:",
                "options": {
                  "A": "Prevents blood from entering the right atrium",
                  "B": "Prevents mixing of oxygenated and deoxygenated blood between the pulmonary trunk and aorta",
                  "C": "Allows blood to bypass the lungs",
                  "D": "Increases pulmonary blood flow to fetal levels",
                  "E": "Connects the pulmonary veins to the left atrium"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "acrs07l-cardiovascular-system-2-anatomy-of-the-heart-1",
            "title": "ACRS07L Cardiovascular System 2: Anatomy of the Heart 1",
            "questions": [
              {
                "question": "The coronary sulcus primarily separates the:",
                "options": {
                  "A": "Right and left atria",
                  "B": "Right and left ventricles",
                  "C": "Atria from the ventricles",
                  "D": "Right atrium from the left ventricle",
                  "E": "Pulmonary trunk from the aorta"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The anterior interventricular groove separates the:",
                "options": {
                  "A": "Right and left atria",
                  "B": "Right and left ventricles",
                  "C": "Left atrium and left ventricle",
                  "D": "Right atrium and right ventricle",
                  "E": "Atria from ventricles"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which groove continues from the anterior to the posterior surface of the heart between the ventricles?",
                "options": {
                  "A": "Coronary sulcus",
                  "B": "Coronary sinus",
                  "C": "Anterior interventricular groove",
                  "D": "Crista terminalis",
                  "E": "Aortic vestibule"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Epicardial fat is located:",
                "options": {
                  "A": "Deep to the myocardium",
                  "B": "Within the endocardium",
                  "C": "Superficial to the heart muscle",
                  "D": "Inside the pericardial cavity",
                  "E": "Within the coronary sinus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which external feature helps identify the right atrium?",
                "options": {
                  "A": "Moderator band",
                  "B": "Left auricle",
                  "C": "Right auricle",
                  "D": "Coronary sinus",
                  "E": "Fossa ovalis"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The coronary sinus drains directly into the:",
                "options": {
                  "A": "Left atrium",
                  "B": "Right ventricle",
                  "C": "Pulmonary trunk",
                  "D": "Right atrium",
                  "E": "Superior vena cava"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which chamber receives venous blood from both the superior vena cava and inferior vena cava?",
                "options": {
                  "A": "Left atrium",
                  "B": "Left ventricle",
                  "C": "Right atrium",
                  "D": "Right ventricle",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure separates the smooth and muscular parts of the right atrium?",
                "options": {
                  "A": "Interatrial septum",
                  "B": "Moderator band",
                  "C": "Crista terminalis",
                  "D": "Coronary sulcus",
                  "E": "Trabeculae carneae"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The muscular ridges within the atria are called:",
                "options": {
                  "A": "Trabeculae carneae",
                  "B": "Papillary muscles",
                  "C": "Pectinate muscles",
                  "D": "Chordae tendineae",
                  "E": "Moderator bands"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The smooth part of the right atrium develops embryologically from the:",
                "options": {
                  "A": "Primitive ventricle",
                  "B": "Primitive atrium",
                  "C": "Sinus venosus",
                  "D": "Bulbus cordis",
                  "E": "Endocardial cushions"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which embryological structure contributes to the smooth wall of the left atrium?",
                "options": {
                  "A": "Primitive atrium only",
                  "B": "Pulmonary veins",
                  "C": "Primitive ventricle",
                  "D": "Aortic sac",
                  "E": "Ductus arteriosus"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The fossa ovalis is found in the:",
                "options": {
                  "A": "Right atrium only",
                  "B": "Left atrium only",
                  "C": "Both atria (on opposite sides of the interatrial septum)",
                  "D": "Right ventricle",
                  "E": "Left ventricle"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which valve guards the opening between the right atrium and right ventricle?",
                "options": {
                  "A": "Mitral valve",
                  "B": "Pulmonary valve",
                  "C": "Aortic valve",
                  "D": "Tricuspid valve",
                  "E": "Coronary valve"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why is the tricuspid valve given its name?",
                "options": {
                  "A": "It has three papillary muscles.",
                  "B": "It has three cusps.",
                  "C": "It has three chordae tendineae.",
                  "D": "It opens in three phases.",
                  "E": "It lies between three chambers."
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The chordae tendineae connect the valve cusps to the:",
                "options": {
                  "A": "Moderator band",
                  "B": "Crista terminalis",
                  "C": "Papillary muscles",
                  "D": "Coronary sinus",
                  "E": "Trabeculae carneae"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The muscular ridges lining the ventricles are known as:",
                "options": {
                  "A": "Pectinate muscles",
                  "B": "Trabeculae carneae",
                  "C": "Papillary muscles",
                  "D": "Crista terminalis",
                  "E": "Aortic sinuses"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The smooth outflow tract of the right ventricle is called the:",
                "options": {
                  "A": "Aortic vestibule",
                  "B": "Coronary sinus",
                  "C": "Conus arteriosus",
                  "D": "Crista terminalis",
                  "E": "Moderator band"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Blood leaving the right ventricle passes through the conus arteriosus into the:",
                "options": {
                  "A": "Ascending aorta",
                  "B": "Left atrium",
                  "C": "Pulmonary trunk",
                  "D": "Coronary arteries",
                  "E": "Superior vena cava"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure is unique to the right ventricle?",
                "options": {
                  "A": "Papillary muscles",
                  "B": "Chordae tendineae",
                  "C": "Moderator band",
                  "D": "Trabeculae carneae",
                  "E": "Bicuspid valve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The moderator band has an important role in:",
                "options": {
                  "A": "Coronary venous drainage",
                  "B": "Electrical conduction within the heart",
                  "C": "Valve lubrication",
                  "D": "Preventing ventricular rupture",
                  "E": "Atrial contraction"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Compared with the right ventricle, the left ventricular wall is:",
                "options": {
                  "A": "Much thinner",
                  "B": "Slightly thinner",
                  "C": "Similar thickness",
                  "D": "Much thicker",
                  "E": "Absent"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The left ventricular wall is thicker because it:",
                "options": {
                  "A": "Receives more venous blood",
                  "B": "Pumps blood to the pulmonary circulation",
                  "C": "Generates higher pressure for systemic circulation",
                  "D": "Contains more valves",
                  "E": "Has more coronary veins"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which valve lies between the left atrium and left ventricle?",
                "options": {
                  "A": "Tricuspid valve",
                  "B": "Pulmonary valve",
                  "C": "Aortic valve",
                  "D": "Mitral (bicuspid) valve",
                  "E": "Coronary valve"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The mitral valve differs from the tricuspid valve because it has:",
                "options": {
                  "A": "One cusp",
                  "B": "Two cusps",
                  "C": "Three cusps",
                  "D": "Four cusps",
                  "E": "No chordae tendineae"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The smooth outflow tract of the left ventricle is called the:",
                "options": {
                  "A": "Conus arteriosus",
                  "B": "Coronary sulcus",
                  "C": "Aortic vestibule",
                  "D": "Coronary sinus",
                  "E": "Crista terminalis"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The visceral layer of the serous pericardium is also called the:",
                "options": {
                  "A": "Endocardium",
                  "B": "Fibrous pericardium",
                  "C": "Epicardium",
                  "D": "Myocardium",
                  "E": "Parietal pericardium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which layer forms the thick muscular wall responsible for contraction?",
                "options": {
                  "A": "Epicardium",
                  "B": "Endocardium",
                  "C": "Myocardium",
                  "D": "Fibrous pericardium",
                  "E": "Parietal pericardium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The endocardium lines the:",
                "options": {
                  "A": "Outside of the heart",
                  "B": "Pericardial cavity",
                  "C": "Internal chambers and valves",
                  "D": "Coronary arteries",
                  "E": "Fibrous pericardium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The right and left coronary arteries arise from the:",
                "options": {
                  "A": "Pulmonary trunk",
                  "B": "Aortic arch",
                  "C": "Ascending aorta",
                  "D": "Brachiocephalic trunk",
                  "E": "Left ventricle"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The openings of the coronary arteries within the ascending aorta are called the:",
                "options": {
                  "A": "Coronary sulci",
                  "B": "Aortic sinuses",
                  "C": "Aortic vestibules",
                  "D": "Coronary fossae",
                  "E": "Sinus venosus"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The right coronary artery typically travels initially within the:",
                "options": {
                  "A": "Anterior interventricular groove",
                  "B": "Posterior interventricular groove",
                  "C": "Coronary sulcus",
                  "D": "Interatrial septum",
                  "E": "Aortic vestibule"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which branch commonly arises from the right coronary artery and runs along the inferior border of the heart?",
                "options": {
                  "A": "Circumflex artery",
                  "B": "Left marginal artery",
                  "C": "Right marginal artery",
                  "D": "Anterior interventricular artery",
                  "E": "Great cardiac artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The posterior interventricular artery most commonly arises from the:",
                "options": {
                  "A": "Left coronary artery",
                  "B": "Circumflex artery",
                  "C": "Right coronary artery",
                  "D": "Pulmonary artery",
                  "E": "Great cardiac vein"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The anterior interventricular artery is a branch of the:",
                "options": {
                  "A": "Right coronary artery",
                  "B": "Circumflex artery",
                  "C": "Left coronary artery",
                  "D": "Pulmonary trunk",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Another commonly used name for the anterior interventricular artery is the:",
                "options": {
                  "A": "Posterior descending artery",
                  "B": "Left anterior descending (LAD) artery",
                  "C": "Right marginal artery",
                  "D": "Circumflex artery",
                  "E": "Great cardiac artery"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The circumflex artery is a branch of the:",
                "options": {
                  "A": "Right coronary artery",
                  "B": "Pulmonary artery",
                  "C": "Left coronary artery",
                  "D": "Aortic arch",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Coronary dominance is determined by which artery gives rise to the:",
                "options": {
                  "A": "Right marginal artery",
                  "B": "Circumflex artery",
                  "C": "Posterior interventricular artery",
                  "D": "Great cardiac vein",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Approximately what proportion of people have right coronary dominance?",
                "options": {
                  "A": "10%",
                  "B": "30%",
                  "C": "50%",
                  "D": "About 70%",
                  "E": "About 95%"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "Coronary arteries are described as functional end arteries because:",
                "options": {
                  "A": "They lack valves.",
                  "B": "They arise from the pulmonary trunk.",
                  "C": "Occlusion causes poor collateral blood supply to distal myocardium.",
                  "D": "They drain directly into the atria.",
                  "E": "They contain only deoxygenated blood."
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which symptom is classically associated with myocardial ischaemia due to coronary artery disease?",
                "options": {
                  "A": "Sudden abdominal pain",
                  "B": "Angina pectoris",
                  "C": "Severe flank pain",
                  "D": "Isolated calf pain",
                  "E": "Painless haematuria"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During coronary artery bypass grafting (CABG), the graft is usually connected:",
                "options": {
                  "A": "Proximal to the blockage only",
                  "B": "Distal to the blockage to restore blood flow",
                  "C": "Between the pulmonary artery and aorta",
                  "D": "Between the atria",
                  "E": "Between the venae cavae"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which vessel is commonly harvested for coronary artery bypass grafting?",
                "options": {
                  "A": "Femoral artery",
                  "B": "Radial vein",
                  "C": "Great saphenous vein",
                  "D": "Internal jugular vein",
                  "E": "Azygos vein"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "A coronary stent primarily works by:",
                "options": {
                  "A": "Removing the artery",
                  "B": "Increasing venous return",
                  "C": "Expanding the narrowed coronary artery lumen",
                  "D": "Blocking coronary blood flow",
                  "E": "Replacing the aortic valve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The great cardiac vein accompanies the:",
                "options": {
                  "A": "Right marginal artery",
                  "B": "Circumflex artery only",
                  "C": "Anterior interventricular artery",
                  "D": "Pulmonary trunk",
                  "E": "Superior vena cava"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Most cardiac veins ultimately drain into the:",
                "options": {
                  "A": "Pulmonary veins",
                  "B": "Coronary sinus",
                  "C": "Inferior vena cava",
                  "D": "Pulmonary trunk",
                  "E": "Left atrium"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which veins drain directly into the right atrium without first entering the coronary sinus?",
                "options": {
                  "A": "Great cardiac veins",
                  "B": "Middle cardiac veins",
                  "C": "Anterior cardiac veins",
                  "D": "Small cardiac veins",
                  "E": "Posterior veins of the left ventricle"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "acrs08l-cardiovascular-system-3-anatomy-of-the-heart-2",
            "title": "ACRS08L Cardiovascular System 3: Anatomy of the Heart 2",
            "questions": [
              {
                "question": "Which pair of valves are classified as atrioventricular (AV) valves?",
                "options": {
                  "A": "Aortic and pulmonary valves",
                  "B": "Mitral and pulmonary valves",
                  "C": "Tricuspid and mitral valves",
                  "D": "Aortic and tricuspid valves",
                  "E": "Pulmonary and mitral valves"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The semilunar valves are located between the:",
                "options": {
                  "A": "Atria and ventricles",
                  "B": "Right and left atria",
                  "C": "Ventricles and their outflow tracts",
                  "D": "Pulmonary veins and atria",
                  "E": "Superior vena cava and right atrium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The pulmonary valve guards blood flow between the:",
                "options": {
                  "A": "Right atrium and right ventricle",
                  "B": "Left atrium and left ventricle",
                  "C": "Right ventricle and pulmonary trunk",
                  "D": "Left ventricle and aorta",
                  "E": "Pulmonary veins and left atrium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The aortic valve guards blood flow between the:",
                "options": {
                  "A": "Left atrium and left ventricle",
                  "B": "Left ventricle and ascending aorta",
                  "C": "Right ventricle and pulmonary trunk",
                  "D": "Aorta and left atrium",
                  "E": "Pulmonary trunk and aorta"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Compared with AV valves, semilunar valves:",
                "options": {
                  "A": "Have chordae tendineae",
                  "B": "Have papillary muscles",
                  "C": "Are located in the outflow tracts",
                  "D": "Contain only two cusps",
                  "E": "Open into the atria"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The aortic sinuses are found:",
                "options": {
                  "A": "Within the right atrium",
                  "B": "Within the pulmonary trunk",
                  "C": "At the root of the ascending aorta",
                  "D": "In the coronary sinus",
                  "E": "Within the superior vena cava"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Chordae tendineae connect the cusps of AV valves to:",
                "options": {
                  "A": "Moderator bands",
                  "B": "Trabeculae carneae",
                  "C": "Papillary muscles",
                  "D": "Endocardium",
                  "E": "Coronary arteries"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "During ventricular contraction, papillary muscles contract primarily to:",
                "options": {
                  "A": "Open the semilunar valves",
                  "B": "Pull the chordae tendineae taut",
                  "C": "Increase coronary blood flow",
                  "D": "Relax the AV valves",
                  "E": "Close the aortic valve directly"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The main function of the chordae tendineae is to:",
                "options": {
                  "A": "Open AV valves",
                  "B": "Prevent valve prolapse into the atria",
                  "C": "Supply blood to the papillary muscles",
                  "D": "Anchor semilunar valves",
                  "E": "Conduct electrical impulses"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "If the chordae tendineae rupture, the most immediate consequence is likely:",
                "options": {
                  "A": "Failure of semilunar valve opening",
                  "B": "AV valve prolapse and regurgitation",
                  "C": "Failure of SA node activity",
                  "D": "Complete heart block",
                  "E": "Pulmonary embolism"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Semilunar valves open primarily because:",
                "options": {
                  "A": "Papillary muscles pull them open",
                  "B": "Blood pressure from ventricular contraction pushes them open",
                  "C": "Chordae tendineae lift them",
                  "D": "The atria contract",
                  "E": "Gravity pulls them open"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Semilunar valves close because:",
                "options": {
                  "A": "Papillary muscles contract",
                  "B": "Chordae tendineae tighten",
                  "C": "Backflow of blood fills the cusps",
                  "D": "The atria contract",
                  "E": "The ventricles shorten"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure is absent from semilunar valves?",
                "options": {
                  "A": "Three cusps",
                  "B": "Fibrous tissue",
                  "C": "Chordae tendineae",
                  "D": "Valve leaflets",
                  "E": "Endocardial covering"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The primary function of all four heart valves is to:",
                "options": {
                  "A": "Increase cardiac output",
                  "B": "Generate electrical impulses",
                  "C": "Ensure unidirectional blood flow",
                  "D": "Produce heart sounds",
                  "E": "Oxygenate the myocardium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Ventricular systole refers to:",
                "options": {
                  "A": "Ventricular relaxation",
                  "B": "Ventricular contraction",
                  "C": "Atrial contraction",
                  "D": "Closure of the aortic valve only",
                  "E": "Filling of the ventricles"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During ventricular systole, which valves are open?",
                "options": {
                  "A": "AV valves only",
                  "B": "Semilunar valves only",
                  "C": "All four valves",
                  "D": "None of the valves",
                  "E": "Tricuspid valve only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "During ventricular diastole, which valves are normally open?",
                "options": {
                  "A": "AV valves",
                  "B": "Semilunar valves",
                  "C": "All four valves",
                  "D": "None of the valves",
                  "E": "Aortic valve only"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "The first heart sound (\u201club\u201d) is produced by closure of the:",
                "options": {
                  "A": "Semilunar valves",
                  "B": "AV valves",
                  "C": "Aortic valve only",
                  "D": "Pulmonary valve only",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The second heart sound (\u201cdub\u201d) is produced by closure of the:",
                "options": {
                  "A": "AV valves",
                  "B": "Tricuspid valve only",
                  "C": "Semilunar valves",
                  "D": "Mitral valve only",
                  "E": "Coronary arteries"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Heart murmurs are most commonly produced by:",
                "options": {
                  "A": "Normal smooth blood flow",
                  "B": "Turbulent blood flow",
                  "C": "Coronary artery pulsation",
                  "D": "Myocardial contraction",
                  "E": "Epicardial fat"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "A heart murmur caused by valvular disease is primarily due to:",
                "options": {
                  "A": "Complete absence of blood flow",
                  "B": "Turbulent flow across an abnormal valve",
                  "C": "Increased coronary perfusion",
                  "D": "Faster SA node firing",
                  "E": "Pericardial fluid"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Failure of an AV valve to close properly results in:",
                "options": {
                  "A": "Blood flowing from atrium to ventricle",
                  "B": "Blood regurgitating from ventricle to atrium",
                  "C": "Reduced coronary blood flow",
                  "D": "Pulmonary embolism",
                  "E": "Closure of semilunar valves"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "If the aortic valve fails to open fully (stenosis), the left ventricle must:",
                "options": {
                  "A": "Generate less pressure",
                  "B": "Generate greater pressure to eject blood",
                  "C": "Stop contracting",
                  "D": "Fill with less blood",
                  "E": "Empty directly into the atrium"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Chronic aortic stenosis commonly leads to:",
                "options": {
                  "A": "Left ventricular hypertrophy",
                  "B": "Right atrial enlargement",
                  "C": "Pulmonary vein dilation",
                  "D": "Coronary sinus enlargement",
                  "E": "Left atrial rupture"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "The mitral valve is best auscultated at the:",
                "options": {
                  "A": "Right 2nd intercostal space",
                  "B": "Left 2nd intercostal space",
                  "C": "Left 5th intercostal space, midclavicular line",
                  "D": "Lower left sternal border",
                  "E": "Right 5th intercostal space"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The aortic valve is best auscultated at the:",
                "options": {
                  "A": "Left 5th intercostal space",
                  "B": "Right 2nd intercostal space",
                  "C": "Left 2nd intercostal space",
                  "D": "Right 5th intercostal space",
                  "E": "Xiphisternal junction"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The pulmonary valve is best auscultated at the:",
                "options": {
                  "A": "Right 2nd intercostal space",
                  "B": "Left 2nd intercostal space",
                  "C": "Left 5th intercostal space",
                  "D": "Right 5th intercostal space",
                  "E": "Apex beat"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Why are auscultation points not directly over the anatomical valve positions?",
                "options": {
                  "A": "The valves move during breathing.",
                  "B": "Heart sounds are heard best in the direction of blood flow.",
                  "C": "The valves lie beneath the lungs.",
                  "D": "Blood flow reverses direction.",
                  "E": "They are easier to remember."
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which valve is generally auscultated near the lower sternal border?",
                "options": {
                  "A": "Mitral valve",
                  "B": "Pulmonary valve",
                  "C": "Tricuspid valve",
                  "D": "Aortic valve",
                  "E": "Coronary valve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure is the normal pacemaker of the heart?",
                "options": {
                  "A": "AV node",
                  "B": "Bundle branches",
                  "C": "Purkinje fibres",
                  "D": "SA node",
                  "E": "Moderator band"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The SA node is located:",
                "options": {
                  "A": "Near the coronary sinus",
                  "B": "Between the right atrium and superior vena cava",
                  "C": "In the interventricular septum",
                  "D": "In the left atrium",
                  "E": "At the apex of the heart"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The intrinsic firing rate of the SA node is approximately:",
                "options": {
                  "A": "30 beats/min",
                  "B": "50 beats/min",
                  "C": "70 beats/min",
                  "D": "100 beats/min",
                  "E": "140 beats/min"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The AV node is primarily responsible for:",
                "options": {
                  "A": "Initiating ventricular contraction",
                  "B": "Delaying conduction to allow atrial contraction first",
                  "C": "Supplying coronary arteries",
                  "D": "Closing AV valves",
                  "E": "Opening semilunar valves"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "If the SA node fails completely, the AV node can act as a pacemaker at approximately:",
                "options": {
                  "A": "20 beats/min",
                  "B": "35 beats/min",
                  "C": "50 beats/min",
                  "D": "90 beats/min",
                  "E": "120 beats/min"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Electrical impulses travel from the AV node into the ventricles via the:",
                "options": {
                  "A": "Coronary arteries",
                  "B": "Coronary sinus",
                  "C": "Atrioventricular bundle (Bundle of His) and bundle branches",
                  "D": "Papillary muscles",
                  "E": "Chordae tendineae"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Ventricular depolarisation normally begins near the:",
                "options": {
                  "A": "Base of the heart",
                  "B": "Left atrium",
                  "C": "Apex of the ventricles",
                  "D": "Pulmonary trunk",
                  "E": "Coronary sulcus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The moderator band provides:",
                "options": {
                  "A": "Coronary venous drainage",
                  "B": "A shortcut for electrical conduction in the right ventricle",
                  "C": "Attachment for the mitral valve",
                  "D": "Support for the pulmonary valve",
                  "E": "Blood supply to papillary muscles"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Sympathetic stimulation of the heart primarily:",
                "options": {
                  "A": "Decreases heart rate",
                  "B": "Stops SA node activity",
                  "C": "Increases heart rate",
                  "D": "Closes the AV valves",
                  "E": "Decreases myocardial contractility"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Parasympathetic fibres supplying the heart travel mainly via the:",
                "options": {
                  "A": "Phrenic nerve",
                  "B": "Sympathetic chain",
                  "C": "Vagus nerve",
                  "D": "Intercostal nerves",
                  "E": "Great cardiac nerve"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Sympathetic fibres supplying the heart arise from spinal cord levels approximately:",
                "options": {
                  "A": "C1\u2013C4",
                  "B": "C5\u2013C8",
                  "C": "T1\u2013T4/5",
                  "D": "T6\u2013T12",
                  "E": "L1\u2013L5"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Both sympathetic and parasympathetic fibres reach the heart through the:",
                "options": {
                  "A": "Pulmonary trunk",
                  "B": "Cardiac plexus",
                  "C": "Coronary sinus",
                  "D": "Aortic arch",
                  "E": "Phrenic nerve"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The cardiac plexus is located:",
                "options": {
                  "A": "Within the interventricular septum",
                  "B": "Near the tracheal bifurcation",
                  "C": "Inside the left ventricle",
                  "D": "Around the coronary sinus",
                  "E": "Within the diaphragm"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Pain fibres from the heart travel back to the CNS mainly alongside:",
                "options": {
                  "A": "Parasympathetic fibres only",
                  "B": "Sympathetic fibres",
                  "C": "Phrenic nerve only",
                  "D": "Recurrent laryngeal nerve",
                  "E": "Intercostal arteries"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Cardiac referred pain commonly radiates to the:",
                "options": {
                  "A": "Right lower limb",
                  "B": "Left medial arm and chest",
                  "C": "Abdomen only",
                  "D": "Right shoulder only",
                  "E": "Back of the neck only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Cardiac referred pain occurs because:",
                "options": {
                  "A": "Coronary arteries supply the arm",
                  "B": "Visceral and somatic afferents converge onto the same spinal cord segments",
                  "C": "The vagus nerve innervates the skin",
                  "D": "The heart directly stimulates skeletal muscle",
                  "E": "Blood flow is diverted to the arm"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The dermatomes most commonly associated with cardiac referred pain are:",
                "options": {
                  "A": "C1\u2013C3",
                  "B": "C5\u2013C8",
                  "C": "T1\u2013T5",
                  "D": "T6\u2013T10",
                  "E": "L1\u2013L4"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              }
            ]
          },
          {
            "id": "acrs09l-mediastinum",
            "title": "ACRS09L Mediastinum",
            "questions": [
              {
                "question": "Which statement best describes the mediastinum?",
                "options": {
                  "A": "The cavity containing both lungs",
                  "B": "The central compartment of the thoracic cavity between the pleural cavities",
                  "C": "The space between the diaphragm and abdominal cavity",
                  "D": "The cavity containing only the heart",
                  "E": "The space posterior to the vertebral column"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure is NOT found within the mediastinum?",
                "options": {
                  "A": "Heart",
                  "B": "Oesophagus",
                  "C": "Trachea",
                  "D": "Lung",
                  "E": "Thoracic duct"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The lateral boundaries of the mediastinum are formed by the:",
                "options": {
                  "A": "Fibrous pericardium",
                  "B": "Costal pleura",
                  "C": "Mediastinal pleura",
                  "D": "Thoracic vertebrae",
                  "E": "Sternum"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The superior boundary of the mediastinum is the:",
                "options": {
                  "A": "Sternal angle",
                  "B": "Superior thoracic aperture",
                  "C": "First rib",
                  "D": "Clavicle",
                  "E": "Manubrium"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The inferior boundary of the mediastinum is the:",
                "options": {
                  "A": "Costal margin",
                  "B": "Xiphoid process",
                  "C": "Diaphragm",
                  "D": "Transverse thoracic plane",
                  "E": "T12 vertebra"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The anterior boundary of the mediastinum is primarily the:",
                "options": {
                  "A": "Thoracic vertebrae",
                  "B": "Sternum",
                  "C": "Fibrous pericardium",
                  "D": "Mediastinal pleura",
                  "E": "Trachea"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The posterior boundary of the mediastinum is formed by the:",
                "options": {
                  "A": "Sternum",
                  "B": "Fibrous pericardium",
                  "C": "Thoracic vertebral bodies",
                  "D": "Diaphragm",
                  "E": "Costal cartilages"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The transverse thoracic plane passes through the:",
                "options": {
                  "A": "Xiphisternal joint",
                  "B": "T8 vertebra",
                  "C": "Sternal angle and T4/T5 level",
                  "D": "First rib",
                  "E": "T12 vertebra"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The transverse thoracic plane divides the mediastinum into:",
                "options": {
                  "A": "Right and left mediastina",
                  "B": "Anterior and posterior mediastina",
                  "C": "Superior and inferior mediastina",
                  "D": "Pulmonary and cardiac compartments",
                  "E": "Cervical and thoracic compartments"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The inferior mediastinum is subdivided into:",
                "options": {
                  "A": "Superior, middle and inferior",
                  "B": "Anterior, middle and posterior",
                  "C": "Right, left and central",
                  "D": "Cervical, thoracic and abdominal",
                  "E": "Cardiac, pulmonary and oesophageal"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure forms the main boundary separating the anterior and posterior parts of the inferior mediastinum?",
                "options": {
                  "A": "Sternum",
                  "B": "Trachea",
                  "C": "Fibrous pericardium",
                  "D": "Thoracic duct",
                  "E": "Oesophagus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure is normally found in the superior mediastinum?",
                "options": {
                  "A": "Ascending aorta",
                  "B": "Arch of the aorta",
                  "C": "Left ventricle",
                  "D": "Pulmonary trunk",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "In adults, the thymus is best described as:",
                "options": {
                  "A": "A large endocrine gland",
                  "B": "A prominent lymph node",
                  "C": "Mostly replaced by fatty tissue",
                  "D": "Completely absent",
                  "E": "Located in the posterior mediastinum"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which vein is found within the superior mediastinum?",
                "options": {
                  "A": "Great saphenous vein",
                  "B": "Inferior vena cava",
                  "C": "Brachiocephalic vein",
                  "D": "Hepatic vein",
                  "E": "Femoral vein"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which nerve is present in the superior mediastinum but not its contralateral equivalent?",
                "options": {
                  "A": "Right phrenic nerve",
                  "B": "Left recurrent laryngeal nerve",
                  "C": "Right vagus nerve",
                  "D": "Left phrenic nerve",
                  "E": "Left sympathetic chain"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The left recurrent laryngeal nerve loops around the:",
                "options": {
                  "A": "Left pulmonary artery",
                  "B": "Left subclavian artery",
                  "C": "Arch of the aorta",
                  "D": "Ascending aorta",
                  "E": "Ligamentum arteriosum only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The anterior mediastinum in adults mainly contains:",
                "options": {
                  "A": "Trachea",
                  "B": "Oesophagus",
                  "C": "Fat and thymic remnants",
                  "D": "Descending aorta",
                  "E": "Thoracic duct"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which major structure occupies the middle mediastinum?",
                "options": {
                  "A": "Descending thoracic aorta",
                  "B": "Heart within the fibrous pericardium",
                  "C": "Thoracic duct",
                  "D": "Oesophagus",
                  "E": "Azygos vein"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The phrenic nerve passes through the:",
                "options": {
                  "A": "Posterior mediastinum only",
                  "B": "Middle mediastinum",
                  "C": "Anterior mediastinum only",
                  "D": "Superior mediastinum only",
                  "E": "None of the mediastinal compartments"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which structure is found in the posterior mediastinum?",
                "options": {
                  "A": "Ascending aorta",
                  "B": "Pulmonary trunk",
                  "C": "Descending thoracic aorta",
                  "D": "Right atrium",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The descending thoracic aorta begins approximately at the level of:",
                "options": {
                  "A": "T1",
                  "B": "T2",
                  "C": "T4/T5",
                  "D": "T8",
                  "E": "T12"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which artery arises directly from the thoracic aorta?",
                "options": {
                  "A": "Coronary artery",
                  "B": "Superior thyroid artery",
                  "C": "Posterior intercostal artery",
                  "D": "Internal thoracic artery",
                  "E": "Inferior epigastric artery"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The thoracic aorta gives bronchial arteries that supply the:",
                "options": {
                  "A": "Alveoli",
                  "B": "Pulmonary veins",
                  "C": "Bronchial tree",
                  "D": "Pleural cavity",
                  "E": "Diaphragm only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which branch of the thoracic aorta supplies the superior surface of the diaphragm?",
                "options": {
                  "A": "Inferior phrenic artery",
                  "B": "Superior phrenic artery",
                  "C": "Internal thoracic artery",
                  "D": "Pericardiacophrenic artery",
                  "E": "Intercostal artery"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The oesophagus begins as a continuation of the pharynx at approximately:",
                "options": {
                  "A": "C2",
                  "B": "C4",
                  "C": "C6",
                  "D": "T1",
                  "E": "T4"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The oesophagus passes through the:",
                "options": {
                  "A": "Caval opening",
                  "B": "Aortic hiatus",
                  "C": "Oesophageal hiatus",
                  "D": "Foramen magnum",
                  "E": "Obturator canal"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "In the superior thorax, the oesophagus lies:",
                "options": {
                  "A": "Anterior to the trachea",
                  "B": "Posterior to the trachea",
                  "C": "Lateral to the trachea",
                  "D": "Inferior to the trachea",
                  "E": "Within the trachea"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "As it descends through the posterior mediastinum, the oesophagus is displaced slightly to the right by the:",
                "options": {
                  "A": "Inferior vena cava",
                  "B": "Pulmonary trunk",
                  "C": "Descending thoracic aorta",
                  "D": "Thoracic duct",
                  "E": "Left atrium"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Parasympathetic fibres supplying the oesophagus are derived primarily from the:",
                "options": {
                  "A": "Phrenic nerve",
                  "B": "Vagus nerve",
                  "C": "Sympathetic trunk",
                  "D": "Greater splanchnic nerve",
                  "E": "Intercostal nerves"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The anterior vagal trunk is mainly derived from the:",
                "options": {
                  "A": "Right vagus nerve",
                  "B": "Left vagus nerve",
                  "C": "Phrenic nerve",
                  "D": "Sympathetic chain",
                  "E": "Left recurrent laryngeal nerve"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The posterior vagal trunk is mainly derived from the:",
                "options": {
                  "A": "Right vagus nerve",
                  "B": "Left vagus nerve",
                  "C": "Greater splanchnic nerve",
                  "D": "Phrenic nerve",
                  "E": "Thoracic duct"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "Parasympathetic stimulation of the oesophagus primarily:",
                "options": {
                  "A": "Reduces peristalsis",
                  "B": "Stops glandular secretion",
                  "C": "Increases peristalsis and glandular secretion",
                  "D": "Closes the lower oesophageal sphincter permanently",
                  "E": "Decreases smooth muscle activity"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Sympathetic fibres supplying the oesophagus typically originate from spinal cord levels:",
                "options": {
                  "A": "C1\u2013C4",
                  "B": "T2\u2013T6",
                  "C": "T7\u2013T12",
                  "D": "L1\u2013L5",
                  "E": "S2\u2013S4"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which neighbouring structure produces a normal constriction of the oesophagus?",
                "options": {
                  "A": "Left ventricle",
                  "B": "Pulmonary veins",
                  "C": "Arch of the aorta",
                  "D": "Superior vena cava",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Another normal constriction of the oesophagus is caused by the:",
                "options": {
                  "A": "Right atrium",
                  "B": "Left main bronchus",
                  "C": "Descending colon",
                  "D": "Inferior vena cava",
                  "E": "Pulmonary valve"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The final normal thoracic constriction of the oesophagus occurs where it passes through the:",
                "options": {
                  "A": "Trachea",
                  "B": "Diaphragm",
                  "C": "Pulmonary trunk",
                  "D": "Pericardium",
                  "E": "Sternum"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The thoracic duct drains lymph from:",
                "options": {
                  "A": "The right upper quadrant only",
                  "B": "The left lower limb only",
                  "C": "Most of the body except the right upper quadrant",
                  "D": "The thorax only",
                  "E": "The abdomen only"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The thoracic duct begins at the:",
                "options": {
                  "A": "Cisterna chyli",
                  "B": "Left venous angle",
                  "C": "Right lymphatic duct",
                  "D": "Thoracic inlet",
                  "E": "Splenic hilum"
                },
                "correctAnswer": "A",
                "explanation": "No explanation provided."
              },
              {
                "question": "The thoracic duct empties into the venous system at the:",
                "options": {
                  "A": "Right venous angle",
                  "B": "Left venous angle",
                  "C": "Superior vena cava",
                  "D": "Inferior vena cava",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The right upper quadrant of the body drains primarily into the:",
                "options": {
                  "A": "Thoracic duct",
                  "B": "Cisterna chyli",
                  "C": "Right lymphatic duct",
                  "D": "Azygos vein",
                  "E": "Thoracic aorta"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "In the posterior mediastinum, the thoracic duct is typically identified between the:",
                "options": {
                  "A": "Trachea and sternum",
                  "B": "Oesophagus and azygos vein",
                  "C": "Pulmonary trunk and aorta",
                  "D": "Heart and diaphragm",
                  "E": "Superior vena cava and trachea"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Greater, lesser and least splanchnic nerves carry primarily:",
                "options": {
                  "A": "Postganglionic parasympathetic fibres",
                  "B": "Preganglionic sympathetic fibres",
                  "C": "Somatic motor fibres",
                  "D": "Somatic sensory fibres",
                  "E": "Postganglionic sympathetic fibres"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "The greater splanchnic nerve receives fibres mainly from:",
                "options": {
                  "A": "T1\u2013T4",
                  "B": "T3\u2013T5",
                  "C": "T5\u2013T9/10",
                  "D": "T10\u2013T12",
                  "E": "L1\u2013L3"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "The lesser splanchnic nerve usually arises from:",
                "options": {
                  "A": "T1\u2013T2",
                  "B": "T5\u2013T7",
                  "C": "T8\u2013T9",
                  "D": "T10\u2013T11",
                  "E": "T12 only"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The least splanchnic nerve usually arises from:",
                "options": {
                  "A": "T8",
                  "B": "T10",
                  "C": "T11",
                  "D": "T12",
                  "E": "L1"
                },
                "correctAnswer": "D",
                "explanation": "No explanation provided."
              },
              {
                "question": "The greater, lesser and least splanchnic nerves connect the sympathetic trunk to the:",
                "options": {
                  "A": "Cardiac plexus",
                  "B": "Pulmonary plexus",
                  "C": "Prevertebral ganglia in the abdomen",
                  "D": "Phrenic nerve",
                  "E": "Brachial plexus"
                },
                "correctAnswer": "C",
                "explanation": "No explanation provided."
              },
              {
                "question": "Unlike cardiopulmonary splanchnic nerves, the greater splanchnic nerve contains mainly:",
                "options": {
                  "A": "Postganglionic sympathetic fibres",
                  "B": "Preganglionic sympathetic fibres",
                  "C": "Parasympathetic fibres",
                  "D": "Somatic motor fibres",
                  "E": "Sensory fibres only"
                },
                "correctAnswer": "B",
                "explanation": "No explanation provided."
              },
              {
                "question": "Which of the following structures is found in BOTH the superior and posterior mediastinum?",
                "options": {
                  "A": "Pulmonary trunk",
                  "B": "Oesophagus",
                  "C": "Heart",
                  "D": "Ascending aorta",
                  "E": "Coronary sinus"
                },
                "correctAnswer": "B",
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
