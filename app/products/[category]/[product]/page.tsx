import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Client from "./client"

interface Props {
  params: { category: string; product: string }
}

const productData = {
  "active-vibration-systems": {
    "dvia-t": {
      name: "DVIA-T",
      title: "Tabletop Active Vibration Isolation System",
      description:
        "Compact active vibration isolation system designed for tabletop applications requiring precise vibration control.",
      specifications: {
        "Load Capacity": "50-200 kg",
        "Isolation Performance": "> 95% at 1 Hz",
        "Platform Size": "600 x 900 mm",
        "Power Consumption": "< 100W",
      },
      features: [
        "Advanced feedback control system",
        "Real-time vibration monitoring",
        "Automatic leveling",
        "Low power consumption",
      ],
    },
    "dvia-m": {
      name: "DVIA-M",
      title: "Mid-Size Active Vibration Isolation System",
      description: "Mid-size active vibration isolation system for medium-scale precision applications.",
      specifications: {
        "Load Capacity": "200-500 kg",
        "Isolation Performance": "> 98% at 1 Hz",
        "Platform Size": "1200 x 1800 mm",
        "Power Consumption": "< 200W",
      },
      features: [
        "Multi-axis vibration control",
        "Advanced signal processing",
        "Remote monitoring capability",
        "Modular design",
      ],
    },
    "dvia-ml": {
      name: "DVIA-ML",
      title: "Large Active Vibration Isolation System",
      description: "Large-scale active vibration isolation system for heavy precision equipment.",
      specifications: {
        "Load Capacity": "500-1000 kg",
        "Isolation Performance": "> 98% at 1 Hz",
        "Platform Size": "1800 x 2400 mm",
        "Power Consumption": "< 300W",
      },
      features: ["Heavy-duty construction", "Multi-zone control", "Advanced diagnostics", "Scalable architecture"],
    },
    "dvia-mlp": {
      name: "DVIA-MLP",
      title: "Large Platform Active Vibration Isolation System",
      description: "Extra-large platform active vibration isolation system for the most demanding applications.",
      specifications: {
        "Load Capacity": "1000-2000 kg",
        "Isolation Performance": "> 99% at 1 Hz",
        "Platform Size": "2400 x 3000 mm",
        "Power Consumption": "< 400W",
      },
      features: ["Ultra-large platform", "Distributed control system", "Real-time monitoring", "Custom configurations"],
    },
    "dvia-mo": {
      name: "DVIA-MO",
      title: "Modular Optical Active Vibration Isolation System",
      description: "Specialized active vibration isolation system optimized for optical applications.",
      specifications: {
        "Load Capacity": "100-300 kg",
        "Isolation Performance": "> 97% at 1 Hz",
        "Platform Size": "900 x 1200 mm",
        "Power Consumption": "< 150W",
      },
      features: ["Optical table compatibility", "Ultra-low noise", "Precision control", "Modular expansion"],
    },
    "dvia-u": {
      name: "DVIA-U",
      title: "Universal Active Vibration Isolation System",
      description: "Universal active vibration isolation system for various applications.",
      specifications: {
        "Load Capacity": "100-500 kg",
        "Isolation Performance": "> 96% at 1 Hz",
        "Platform Size": "Customizable",
        "Power Consumption": "< 200W",
      },
      features: ["Universal compatibility", "Flexible configuration", "Easy installation", "Cost-effective solution"],
    },
    "dvia-ud": {
      name: "DVIA-UD",
      title: "Ultra-Duty Active Vibration Isolation System",
      description: "Ultra-duty active vibration isolation system for extreme environments.",
      specifications: {
        "Load Capacity": "2000+ kg",
        "Isolation Performance": "> 99% at 1 Hz",
        "Platform Size": "Custom",
        "Power Consumption": "< 500W",
      },
      features: ["Extreme load capacity", "Harsh environment rated", "Industrial grade", "24/7 operation"],
    },
    "dvia-ub": {
      name: "DVIA-UB",
      title: "Ultra-Broadband Active Vibration Isolation System",
      description: "Ultra-broadband active vibration isolation system for wide frequency range control.",
      specifications: {
        "Load Capacity": "200-800 kg",
        "Isolation Performance": "> 98% (0.1-100 Hz)",
        "Platform Size": "1200 x 1800 mm",
        "Power Consumption": "< 250W",
      },
      features: ["Ultra-wide frequency range", "Advanced filtering", "Multi-sensor feedback", "Adaptive control"],
    },
    "dvia-ulf": {
      name: "DVIA-ULF",
      title: "Ultra-Low-Frequency Active Vibration Isolation System",
      description: "Ultra-low-frequency active vibration isolation system designed for SEM and TEM applications.",
      specifications: {
        "Load Capacity": "100-400 kg",
        "Isolation Performance": "> 99% at 0.1 Hz",
        "Platform Size": "Modular",
        Height: "86 mm",
      },
      features: ["Ultra-low profile design", "Modular architecture", "SEM/TEM optimized", "Easy installation"],
    },
    "dvia-p": {
      name: "DVIA-P",
      title: "Portable Active Vibration Isolation System",
      description: "Portable active vibration isolation system for mobile applications.",
      specifications: {
        "Load Capacity": "50-150 kg",
        "Isolation Performance": "> 95% at 1 Hz",
        "Platform Size": "600 x 800 mm",
        Weight: "< 50 kg",
      },
      features: ["Lightweight design", "Battery operation", "Quick setup", "Portable solution"],
    },
  },
  "optical-tables": {
    "research-grade": {
      name: "Research Grade",
      title: "Research Grade Optical Table Top",
      description: "Premium optical table designed for the most demanding research applications.",
      specifications: {
        Flatness: "< 5 μm over 1m²",
        Material: "Ferromagnetic steel honeycomb",
        Thickness: "203 mm (8 inches)",
        "Hole Pattern": "M6 x 25mm grid",
      },
      features: [
        "Ultra-flat surface",
        "Superior vibration damping",
        "Magnetic compatibility",
        "Precision hole pattern",
      ],
    },
    "scientific-grade": {
      name: "Scientific Grade",
      title: "Scientific Grade Optical Table Top",
      description: "High-quality optical table for scientific applications.",
      specifications: {
        Flatness: "< 10 μm over 1m²",
        Material: "Steel honeycomb",
        Thickness: "152 mm (6 inches)",
        "Hole Pattern": "M6 x 25mm grid",
      },
      features: ["Excellent flatness", "Good vibration damping", "Standard hole pattern", "Cost-effective"],
    },
    "non-magnetic": {
      name: "Non-Magnetic",
      title: "Non-Magnetic Optical Table Top",
      description: "Non-magnetic optical table for sensitive magnetic applications.",
      specifications: {
        Flatness: "< 8 μm over 1m²",
        Material: "Aluminum honeycomb",
        Thickness: "203 mm (8 inches)",
        "Magnetic Field": "< 0.1 Gauss",
      },
      features: ["Zero magnetic interference", "Lightweight construction", "Corrosion resistant", "Precision machined"],
    },
    breadboards: {
      name: "Optical Breadboards",
      title: "Optical Breadboards",
      description: "Precision optical breadboards for component mounting.",
      specifications: {
        Flatness: "< 25 μm",
        Material: "Aluminum",
        Thickness: "12.7 mm (0.5 inches)",
        "Hole Pattern": "M6 x 25mm grid",
      },
      features: ["Lightweight design", "Standard hole pattern", "Multiple sizes", "Easy handling"],
    },
    "aluminum-plates": {
      name: "Aluminum Plates",
      title: "Aluminum Optical Plates",
      description: "Precision aluminum plates for optical applications.",
      specifications: {
        Flatness: "< 50 μm",
        Material: "6061-T6 Aluminum",
        Thickness: "25.4 mm (1 inch)",
        Surface: "Black anodized",
      },
      features: ["Corrosion resistant", "Lightweight", "Standard threading", "Custom sizes available"],
    },
    "pneumatic-supports": {
      name: "Pneumatic Supports",
      title: "Pneumatic Table Supports",
      description: "Pneumatic isolation supports for optical tables.",
      specifications: {
        "Load Capacity": "50-500 kg per leg",
        "Height Range": "711-864 mm",
        Isolation: "> 95% at 10 Hz",
        "Air Pressure": "5.5 bar",
      },
      features: ["Automatic leveling", "Height adjustment", "Superior isolation", "Maintenance-free"],
    },
    "rigid-supports": {
      name: "Rigid Supports",
      title: "Rigid Table Supports",
      description: "Rigid supports for stable optical table mounting.",
      specifications: {
        "Load Capacity": "100-1000 kg per leg",
        "Height Range": "711-864 mm",
        Material: "Steel construction",
        Finish: "Powder coated",
      },
      features: ["High stability", "Adjustable height", "Robust construction", "Cost-effective"],
    },
    "pneumatic-self": {
      name: "Pneumatic Self-Standing",
      title: "Pneumatic Self-Standing Tables",
      description: "Complete pneumatic isolation table systems.",
      specifications: {
        "Table Size": "600x900 to 1500x3000 mm",
        "Load Capacity": "200-2000 kg",
        Isolation: "> 95% at 10 Hz",
        Height: "711-864 mm",
      },
      features: ["Complete system", "Automatic leveling", "Multiple sizes", "Ready to use"],
    },
    "rigid-self": {
      name: "Rigid Self-Standing",
      title: "Rigid Self-Standing Tables",
      description: "Complete rigid optical table systems.",
      specifications: {
        "Table Size": "600x900 to 1500x3000 mm",
        "Load Capacity": "200-2000 kg",
        Material: "Steel frame",
        Height: "711-864 mm",
      },
      features: ["High stability", "Robust construction", "Multiple sizes", "Cost-effective"],
    },
    accessories: {
      name: "Accessories",
      title: "Optical Table Accessories",
      description: "Various accessories for optical table systems.",
      specifications: {
        Types: "Clamps, Posts, Mounts",
        Material: "Stainless steel",
        Threading: "M6, 1/4-20",
        Finish: "Black anodized",
      },
      features: ["Wide variety", "Standard threading", "High quality", "Universal compatibility"],
    },
  },
  "vibration-workstations": {
    "dvid-l": {
      name: "DVID-L",
      title: "Large Vibration Isolation Workstation",
      description: "Large vibration isolation workstation for precision work.",
      specifications: {
        "Work Surface": "1200 x 1800 mm",
        "Load Capacity": "300 kg",
        Isolation: "> 95% at 10 Hz",
        Height: "Adjustable",
      },
      features: ["Large work surface", "Excellent isolation", "Adjustable height", "Ergonomic design"],
    },
    "dvid-c": {
      name: "DVID-C",
      title: "Compact Vibration Isolation Workstation",
      description: "Compact vibration isolation workstation for small spaces.",
      specifications: {
        "Work Surface": "600 x 900 mm",
        "Load Capacity": "150 kg",
        Isolation: "> 90% at 10 Hz",
        Height: "Fixed",
      },
      features: ["Space-saving design", "Good isolation", "Affordable", "Easy setup"],
    },
    "dvid-h": {
      name: "DVID-H",
      title: "Heavy-Duty Vibration Isolation Workstation",
      description: "Heavy-duty vibration isolation workstation for demanding applications.",
      specifications: {
        "Work Surface": "1500 x 2100 mm",
        "Load Capacity": "500 kg",
        Isolation: "> 98% at 10 Hz",
        Height: "Adjustable",
      },
      features: ["Heavy-duty construction", "Superior isolation", "Large capacity", "Industrial grade"],
    },
    "dvid-t": {
      name: "DVID-T",
      title: "Tabletop Vibration Isolation Workstation",
      description: "Tabletop vibration isolation workstation for desktop applications.",
      specifications: {
        "Work Surface": "450 x 600 mm",
        "Load Capacity": "50 kg",
        Isolation: "> 85% at 10 Hz",
        Height: "Desktop",
      },
      features: ["Desktop size", "Portable", "Easy to use", "Cost-effective"],
    },
  },
  "pneumatic-platforms": {
    "dvip-c": {
      name: "DVIP-C",
      title: "Compact Pneumatic Platform",
      description: "Compact pneumatic isolation platform for small equipment.",
      specifications: {
        "Platform Size": "600 x 600 mm",
        "Load Capacity": "100 kg",
        Isolation: "> 95% at 10 Hz",
        "Air Pressure": "5.5 bar",
      },
      features: ["Compact design", "Excellent isolation", "Easy installation", "Maintenance-free"],
    },
    "dvip-b": {
      name: "DVIP-B",
      title: "Basic Pneumatic Platform",
      description: "Basic pneumatic isolation platform for general applications.",
      specifications: {
        "Platform Size": "900 x 900 mm",
        "Load Capacity": "200 kg",
        Isolation: "> 90% at 10 Hz",
        "Air Pressure": "5.5 bar",
      },
      features: ["Standard size", "Good isolation", "Reliable operation", "Cost-effective"],
    },
  },
  "pneumatic-isolators": {
    "dvim-g": {
      name: "DVIM-G",
      title: "General Purpose Pneumatic Isolator",
      description: "General purpose pneumatic isolator for various applications.",
      specifications: {
        "Load Capacity": "50-200 kg",
        Isolation: "> 90% at 10 Hz",
        "Height Range": "150-250 mm",
        "Air Pressure": "5.5 bar",
      },
      features: ["Versatile application", "Good isolation", "Adjustable height", "Easy installation"],
    },
    "dvim-m": {
      name: "DVIM-M",
      title: "Medium Load Pneumatic Isolator",
      description: "Medium load pneumatic isolator for heavier equipment.",
      specifications: {
        "Load Capacity": "200-500 kg",
        Isolation: "> 95% at 10 Hz",
        "Height Range": "200-300 mm",
        "Air Pressure": "5.5 bar",
      },
      features: ["Medium load capacity", "Excellent isolation", "Robust construction", "Reliable performance"],
    },
    "dvim-f": {
      name: "DVIM-F",
      title: "Floor-Standing Pneumatic Isolator",
      description: "Floor-standing pneumatic isolator for large equipment.",
      specifications: {
        "Load Capacity": "500-1000 kg",
        Isolation: "> 98% at 10 Hz",
        "Height Range": "700-900 mm",
        "Air Pressure": "5.5 bar",
      },
      features: ["High load capacity", "Superior isolation", "Floor-standing design", "Industrial grade"],
    },
  },
  "foundation-systems": {
    dvif: {
      name: "DVIF",
      title: "Foundation Isolation System",
      description: "Complete foundation isolation system for building-wide vibration control.",
      specifications: {
        "Load Capacity": "10-100 tons",
        Isolation: "> 99% at 1 Hz",
        "System Type": "Active/Passive hybrid",
        Coverage: "Building-wide",
      },
      features: ["Building-wide isolation", "Hybrid technology", "Extreme load capacity", "Custom engineering"],
    },
  },
  "acoustic-enclosures": {
    "dae-series": {
      name: "DAE Series",
      title: "Dynamic Acoustic Enclosure Series",
      description: "Dynamic acoustic enclosures for noise reduction and vibration isolation.",
      specifications: {
        "Noise Reduction": "40-60 dB",
        "Size Range": "1-10 m³",
        Isolation: "> 95% at 10 Hz",
        Material: "Composite panels",
      },
      features: ["Excellent noise reduction", "Integrated isolation", "Modular design", "Custom configurations"],
    },
    "dse-series": {
      name: "DSE Series",
      title: "Dynamic Sound Enclosure Series",
      description: "Dynamic sound enclosures for comprehensive noise and vibration control.",
      specifications: {
        "Noise Reduction": "50-70 dB",
        "Size Range": "2-20 m³",
        Isolation: "> 98% at 10 Hz",
        Material: "Advanced composites",
      },
      features: ["Superior noise control", "Advanced isolation", "Large size range", "Professional grade"],
    },
  },
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const categoryData = productData[params.category as keyof typeof productData]
  const product = categoryData?.[params.product as keyof typeof categoryData]

  if (!product) {
    return {
      title: "Product Not Found | DVIA",
    }
  }

  return {
    title: `${product.name} - ${product.title} | DVIA`,
    description: product.description,
    openGraph: {
      title: `${product.name} - ${product.title} | DVIA`,
      description: product.description,
      type: "website",
    },
  }
}

export async function generateStaticParams() {
  const params = []
  for (const [category, products] of Object.entries(productData)) {
    for (const product of Object.keys(products)) {
      params.push({
        category,
        product,
      })
    }
  }
  return params
}

export const revalidate = 86400 // ISR: revalidate every 24 hours

const ProductDetailPage = ({ params }: Props) => {
  const categoryData = productData[params.category as keyof typeof productData]
  const product = categoryData?.[params.product as keyof typeof categoryData]

  if (!product) {
    notFound()
  }

  // Special handling for DVIA-ULF to show the Apple-style page
  if (params.product === "dvia-ulf") {
    return <Client category={params.category} productId={params.product} productData={product} />
  }

  // For other products, show the regular product detail page
  return <Client category={params.category} productId={params.product} productData={product} />
}

export default ProductDetailPage
