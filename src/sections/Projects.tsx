import ProjectCard from '../components/ProjectCard';
import { motion } from 'framer-motion';

const projectsData = [
  // 1. Ambis Task Manager
  {
    title: 'Ambis Task Manager',
    description: 'Aplikasi To Do List dengan fitur realtime, kanban, dan drag & drop. Dirancang untuk meningkatkan produktivitas dalam manajemen tugas tim maupun individual.',
    // Catatan: Menggunakan placeholder umum karena URL Gambar tidak tersedia
    imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', 
    tags: ['React', 'Go Lang', 'MongoDB', 'Vite', 'Tailwind CSS', 'Fiber'],
    liveUrl: '#', // URL Live Demo tidak tersedia, menggunakan '#'
  },
  // 2. Library Online
  {
    title: 'Library Online',
    description: 'Sebuah perpustakaan online untuk peminjaman buku. Dilengkapi fitur gamifikasi (poin, leaderboard, badge) untuk mendorong dan meningkatkan minat membaca.',
    // Catatan: Menggunakan placeholder umum karena URL Gambar tidak tersedia
    imageUrl: 'https://images.pexels.com/photos/3747467/pexels-photo-3747467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['ReactJS', 'Vite', 'TailwindCSS', 'Go Lang', 'Fiber', 'MongoDB'],
    liveUrl: '#', // URL Live Demo tidak tersedia, menggunakan '#'
  },
  // 3. Game Lost History
  {
    title: 'Game Lost History (Hack n Slash)',
    description: 'Game hack n slash pixel dengan objektif menyelesaikan dungeon, dibuat untuk pameran sekolah. Saya berperan sebagai konseptor dan pembuat aset/elemen desain.',
    // Catatan: Menggunakan placeholder umum karena URL Gambar tidak tersedia
    imageUrl: 'https://images.pexels.com/photos/595804/pexels-photo-595804.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Godot', 'Canva'],
    liveUrl: '#', // URL Live Demo tidak tersedia, menggunakan '#'
  },
  // 4. Website Class Registration
  {
    title: 'Website Class Registration',
    description: 'Website untuk mendata murid dan guru (kelas, ruangan, jurusan) yang berguna untuk absensi. Menyediakan halaman untuk pengelolaan data master.',
    // Catatan: Menggunakan placeholder umum karena URL Gambar tidak tersedia
    imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Laravel', 'Figma'],
    liveUrl: '#', // URL Live Demo tidak tersedia, menggunakan '#'
  },
  // 5. Application for Data Collection
  {
    title: 'Mobile App for Data Collection',
    description: 'Aplikasi mobile sederhana yang dibuat menggunakan Kotlin untuk menampilkan list data. Digunakan sebagai solusi pengumpulan data dasar.',
    // Catatan: Menggunakan placeholder umum karena URL Gambar tidak tersedia
    imageUrl: 'https://images.pexels.com/photos/5717415/pexels-photo-5717415.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Kotlin'],
    liveUrl: '#', // URL Live Demo tidak tersedia, menggunakan '#'
  },
  // 6. Store Cashier Application
  {
    title: 'Store Cashier Application',
    description: 'Aplikasi kasir berbasis website yang berfungsi untuk mendata pemasukan, transaksi, dan menampilkan/mengedit stok (Stock Opname). Mirip dengan kasir toko pada umumnya.',
    // Catatan: Menggunakan placeholder umum karena URL Gambar tidak tersedia
    imageUrl: 'https://images.pexels.com/photos/50987/money-card-business-credit-card-50987.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    tags: ['Java'],
    liveUrl: '#', // URL Live Demo tidak tersedia, menggunakan '#'
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-secondary/30 py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">Proyek Pilihan Saya</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Kumpulan proyek yang menonjolkan keahlian saya dalam menciptakan aplikasi web, mobile, dan game.
          </p>
        </motion.div>
        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;