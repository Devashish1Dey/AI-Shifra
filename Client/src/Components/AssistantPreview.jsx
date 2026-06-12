import React from 'react'

const themes = {
    dark: {
        bg: "bg-[#050816]",

        overlay: 
            "bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_45%)]",
        
        orb:
            "from-cyan-400 via-purple-500 to-pink-500",

        cardBorder:
            "border border-white/10",

        text:
            "text-white",

        sub:
            "text-white/65",

        listening:
            "text-emerald-400",

        wave:
            "bg-emerald-400",

        button:
            "from-purple-500 to-violet-400",
        
        micGlow:
            "shadow-[0_0_60px_rgba(168,85,247,0.45)]",
    },

    light: {
        bg:
            "bg-gradient-to-br from-white via-[#f8fafc] to-[#eef6ff]",

        overlay:
            "bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.14),transparent_45%)]",

        orb:
            "from-blue-300 via-cyan-300 to-pink-300",

        cardBorder:
            "border border-[#dbeafe]",

        text:
            "text-[#081028]",

        sub:
            "text-[#475569]",

        listening:
            "text-blue-500",

        wave:
            "bg-blue-500",

        button:
            "from-blue-400 to-cyan-400",

        micGlow:
            "shadow-[0_0_70px_rgba(59,130,246,0.35)]",
    },

    glass: {
        
    }
}

const AssistantPreview = () => {
  return (
    <div>
      
    </div>
  )
}

export default AssistantPreview
