export type MetricPoint = { label: string; views: number; streamx: number };

export const metricSeries: MetricPoint[] = [
  { label: "Mon", views: 41, streamx: 27 },
  { label: "Tue", views: 53, streamx: 34 },
  { label: "Wed", views: 48, streamx: 29 },
  { label: "Thu", views: 66, streamx: 42 },
  { label: "Fri", views: 72, streamx: 46 },
  { label: "Sat", views: 60, streamx: 38 },
  { label: "Sun", views: 82, streamx: 53 },
];

export const courseData = [
  { id: "distributed-systems", title: "Distributed Systems, Clearly Explained", instructor: "Anika Rao", category: "Engineering", lessons: 32, duration: "12h 40m", enrolled: "2.4k", color: "blue", progress: 64 },
  { id: "ml-production", title: "Machine Learning in Production", instructor: "Rohan Desai", category: "AI & Data", lessons: 24, duration: "9h 15m", enrolled: "1.8k", color: "cyan", progress: 38 },
  { id: "product-design", title: "Designing Products People Love", instructor: "Mira Kapoor", category: "Product", lessons: 18, duration: "6h 20m", enrolled: "936", color: "green", progress: 81 },
];

export const videoData = [
  { title: "Building a global edge network", course: "Streaming Fundamentals", duration: "18:42", views: "18,240", size: "842 MB", status: "Ready", compression: "72%" },
  { title: "Adaptive bitrate, without the mystery", course: "Streaming Fundamentals", duration: "24:18", views: "12,608", size: "1.2 GB", status: "Ready", compression: "68%" },
  { title: "Video codecs for real-world learners", course: "Encoding for Scale", duration: "31:05", views: "9,412", size: "1.6 GB", status: "Processing", compression: "—" },
  { title: "Cache keys and CDN strategy", course: "Streaming Fundamentals", duration: "15:33", views: "7,886", size: "—", status: "Queued", compression: "—" },
];

export const learnerRoster = [
  { name: "Aarav Mehta", email: "aarav.mehta@example.com", role: "Student", courses: 4, watch: "18h 24m", status: "Active" },
  { name: "Diya Iyer", email: "diya.iyer@example.com", role: "Instructor", courses: 3, watch: "32h 08m", status: "Active" },
  { name: "Kabir Shah", email: "kabir.shah@example.com", role: "Student", courses: 2, watch: "11h 52m", status: "Active" },
  { name: "Meera Nair", email: "meera.nair@example.com", role: "Student", courses: 6, watch: "42h 16m", status: "Active" },
];

export const infrastructureNodes = [
  { name: "Mumbai · West India", type: "Edge node", cpu: 32, memory: 48, rps: "12.4k", latency: "14 ms", health: "Healthy" },
  { name: "Bengaluru · South India", type: "Edge node", cpu: 41, memory: 55, rps: "9.8k", latency: "19 ms", health: "Healthy" },
  { name: "Delhi · North India", type: "Edge node", cpu: 72, memory: 78, rps: "16.2k", latency: "42 ms", health: "Warning" },
  { name: "Singapore · APAC", type: "Origin gateway", cpu: 28, memory: 44, rps: "22.1k", latency: "68 ms", health: "Healthy" },
];

export const featureData = [
  { icon: "Activity", title: "Adaptive video streaming", detail: "Deliver the right rendition for every connection with a standards-based HLS-ready pipeline." },
  { icon: "Layers3", title: "Intelligent encoding", detail: "A bitrate ladder designed around the picture—not fixed presets that waste every byte." },
  { icon: "Network", title: "Edge-first delivery", detail: "Keep repeat lessons closer to learners, reducing origin trips and unnecessary transfer." },
  { icon: "Gauge", title: "Bandwidth intelligence", detail: "Understand usage by region, course, video, quality, and time of day." },
  { icon: "Database", title: "Storage optimization", detail: "Track original and rendition footprints together across the video lifecycle." },
  { icon: "ChartNoAxesCombined", title: "Playback analytics", detail: "See startup, completion, buffering, and viewer signals in one operational view." },
  { icon: "ShieldCheck", title: "Protected delivery", detail: "Private assets, signed-access architecture, and owner-scoped access controls." },
  { icon: "GraduationCap", title: "Learning built in", detail: "Connect lessons, modules, courses, and watch progress to delivery performance." },
];

export type CalculatorInputs = {
  viewers: number;
  hours: number;
  duration: number;
  videos: number;
  uploads: number;
  size: number;
  quality: number;
  cache: number;
};

export function estimateStreamingCosts(inputs: CalculatorInputs) {
  const minutes = Math.max(1, inputs.duration);
  const minutesPerViewer = Math.max(1, inputs.hours * 60);
  const totalGb = (inputs.viewers * minutesPerViewer * inputs.quality) / 60;
  const cacheFactor = 1 - Math.min(0.99, Math.max(0, inputs.cache) / 100);
  const originGb = totalGb * cacheFactor;
  const storedGb = Math.max(0, inputs.videos) * Math.max(0, inputs.size) * 0.38 + Math.max(0, inputs.uploads) * Math.max(0, inputs.size) * 0.38;
  const legacyCost = totalGb * 6.4 + storedGb * 2.1 + inputs.uploads * 110;
  const optimizedCost = totalGb * 2.9 * (0.7 + cacheFactor * 0.3) + storedGb * 0.74 + inputs.uploads * 52;
  return { monthlyGb: totalGb, originGb, storedGb, legacyCost, optimizedCost, savingsPercent: legacyCost > 0 ? Math.max(0, ((legacyCost - optimizedCost) / legacyCost) * 100) : 0, minutes };
}

export const monthSeries = [
  { label: "Apr", traditional: 82, streamx: 38 }, { label: "May", traditional: 96, streamx: 44 },
  { label: "Jun", traditional: 108, streamx: 47 }, { label: "Jul", traditional: 117, streamx: 50 },
  { label: "Aug", traditional: 126, streamx: 54 }, { label: "Sep", traditional: 139, streamx: 57 },
];

export const demoMetrics = {
  totalViews: "2.84M", watchTime: "38.2k hrs", bandwidth: "184 TB", bandwidthSaved: "142 TB",
  cacheHit: "94.2%", startup: "1.2s", storage: "8.6 TB", cost: "₹48,320",
};