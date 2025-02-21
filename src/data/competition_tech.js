import bgmi_img from '../assets/techy_comp/BGMI.png'
import bullet_echo_img from '../assets/techy_comp/bullet echo.png'
import code_clash_img from '../assets/techy_comp/code clash.png'
import dev_duel_img from '../assets/techy_comp/dev duel.png'
import drone_racing_img from '../assets/techy_comp/drone race.png'
import enigma_img from '../assets/techy_comp/enigma.png'
import game_jam_img from '../assets/techy_comp/gamejam.png'
import innov_ai_tion_img from '../assets/techy_comp/innovaition.png'
import maze_explorer_img from '../assets/techy_comp/maze explorer.png'
import pulse_quest_img from '../assets/techy_comp/pulse.png'
import real_cricket_img from '../assets/techy_comp/real cricket.png'
import road_to_valor_img from '../assets/techy_comp/road to valor.png'
import robo_soccer_img from '../assets/techy_comp/robosoccer.png'
import signal_processing_img from '../assets/techy_comp/spc.png'
import vtc_img from '../assets/techy_comp/vtc.png'
import ewaste_img from '../assets/techy_comp/EWASTE.png'

const tech_competitions = [
  {
    name: 'Blockspace Virtual Trading',
    description: 'Dive into the world of cryptocurrency trading with this exciting 3-day competition on the Roostoo platform. Starting with a mock portfolio, participants will trade in real-time markets using market and limit orders to maximize returns. Compete for the top spot on the live leaderboard and win exciting prizes based on your final portfolio value. Sharpen your trading strategies and show the world your crypto prowess!',
    image: vtc_img,
    link: 'https://bharatversity.com/dashboard/event/67947b528f8b890021012a11'
  },
  {
    name: 'BGMI',
    description: 'Get ready to showcase your gaming skills at one of the most thrilling Battlegrounds Mobile India (BGMI) tournaments! Join us for an action-packed event as part of Elan and nVision, IIT Hyderabad.',
    image: bgmi_img,
    link: 'https://bharatversity.com/dashboard/event/6788e2b3c9499900218d6be4'
  },
  {
    name: 'Bullet echo',
    description: 'Welcome to the Bullet Echo Offline 3v3 Knockout Tournament! Form your team, showcase your strategy and teamwork, and outlast your opponents in this high-stakes competition. The tournament follows a knockout format, where teams must work together to claim victory and progress to the next round. Only the best will rise to the top!',
    image: bullet_echo_img,
    link: 'https://bharatversity.com/dashboard/event/6784ee7fc9499900218d583a'
  },
  {
    name: 'Road to Valor',
    description: 'Welcome to the Road to Valor Offline Knockout Tournament! Compete against other strategists in this intense head-to-head tournament to claim the title of champion. The tournament follows a knockout format, ensuring only the best move forward. Assemble your army, plan your strategy, and lead your forces to victory!',
    image: road_to_valor_img,
    link: 'https://bharatversity.com/dashboard/event/6788e1abc9499900218d6bd0'
  },
  {
    name: 'Real Cricket',
    description: 'Compete in an intense 1v1 knockout format on Real Cricket. Register and compete in thrilling 5-over T20 matches, and claim the champions title!',
    image: real_cricket_img,
    link: 'https://bharatversity.com/dashboard/event/6784ea32c9499900218d579d'
  },
  {
    name: 'Code Clash',
    description: 'A competitive programming competition where participants solve algorithmic and mathematical problems within a limited time frame. It tests participants’ problem-solving skills, algorithmic efficiency, and coding speed.',
    image: code_clash_img,
    link: 'https://forms.gle/fMUvPCqEp2jY9LTXA'
  },
  {
    name: 'Game Jam',
    description: 'Participants must design and create video games from scratch within a given time frame. It showcases participants creativity, programming skills, and game design abilities.',
    image: game_jam_img,
    link: 'https://bharatversity.com/dashboard/event/6784de91c9499900218d5652'
  },
  {
    name: 'Dev Duel',
    description: 'Welcome to the Hackathon conducted by Lambda and Elan & nVision! We are thrilled to have you participate in this week-long challenge where creativity meets code. Get ready to build something extraordinary and showcase your technical and creative abilities!',
    image: dev_duel_img,
    link: 'https://bharatversity.com/dashboard/event/6784e111c9499900218d56ab'
  },
  {
    name: 'Pulse Quest',
    description: 'A machine learning competition where participants develop and deploy machine learning models to solve specific tasks or challenges, demonstrating their proficiency in data analysis, model building, and deployment.',
    image: pulse_quest_img,
    link: 'https://bharatversity.com/dashboard/event/6784e01fc9499900218d5697'
  },
  {
    name: 'Enigma CTF',
    description: 'Enigma CTF25 will be a Jeopardy style Capture The Flag competition. The participating teams will be given challenges based on reverse engineering, cryptography and forensics. The objective is to find hidden flags.',
    image: enigma_img,
    link: 'https://bharatversity.com/dashboard/event/6784dd47c9499900218d563d'
  },
  {
    name: 'Innov-AI-tion',
    description: 'A competition where participants aim to harness the power of AI and machine learning, to solve a very specific problem! Participating teams will develop an AI-powered application which provides a specific type of service (To be announced!)...  ',
    image: innov_ai_tion_img,
    link: 'https://bharatversity.com/dashboard/event/6784e20cc9499900218d56d3'
  },
  {
    name: 'Maze explorer',
    description: 'Design and implement a maze-solving robot capable of autonomously navigating through a given 3D maze constructed with rigid walls and open pathways. The robot should reach a specified destination while avoiding obstacles in the shortest possible time.',
    image: maze_explorer_img,
    link: 'https://bharatversity.com/dashboard/event/6787b266c9499900218d64b5'
  },
  {
    name: 'Waveform Wars',
    description: 'Put your signal processing skills to the test in the signal processing hackathon, a two-round hackathon designed for enthusiasts of MATLAB and Python. Tackle challenges ranging from basic filtering and frequency analysis to advanced tasks like real-time signal denoising and QPSK simulation. With time-bound problem-solving and a testbench evaluation system, this competition rewards innovation, accuracy, and quick thinking. Compete to become the ultimate signal processing champion!',
    image: signal_processing_img,
    link: 'https://bharatversity.com/dashboard/event/67908350942d860021c71b29'
  },
  {
    name: 'Drone racing',
    description: 'Design, construction and pilot drones capable of high speed and good controllability in order to pick up and deliver payloads in the shortest time possible, while avoiding obstacles.',
    image: drone_racing_img,
    link: 'https://bharatversity.com/dashboard/event/67875a0ac9499900218d61f7'
  },
  {
    name: 'Robosoccer',
    description: 'Design a team of robots which play football. The team would compete against the other teams in a knockout tournament.',
    image: robo_soccer_img,
    link: 'https://bharatversity.com/dashboard/event/678504fac9499900218d5900'
  },
  {
    name: 'E-waste Management Ideathon',
    description: 'The E-Waste Ideathon invites participants to propose innovative and sustainable solutions for managing e-waste, biomedical waste, solid waste, and wastewater. Ideas will be evaluated on their creativity, feasibility, and potential societal impact. Showcase your problem-solving skills and help create a cleaner, greener future!',
    image: ewaste_img,
    link: 'https://bharatversity.com/dashboard/event/67875bb6c9499900218d62c9'
  },

];

export default tech_competitions;