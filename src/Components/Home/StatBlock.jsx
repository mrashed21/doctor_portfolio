import { motion } from "framer-motion";

const StatBlock = ({ icon: Icon, value, label, delay }) => (
  <motion.div
    className="flex flex-col items-start bg-white/10 backdrop-blur-sm p-4 md:p-6 rounded-xl border border-white/20"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 0.6, delay: delay }}
    data-aos="fade-up"
    data-aos-delay={delay * 1000}
  >
    <Icon className="w-8 h-8 text-green-200 mb-3" />
    <div className="text-3xl font-extrabold text-white mb-1">{value}</div>
    <div className="text-sm font-medium text-green-100">{label}</div>
  </motion.div>
);

export default StatBlock;
