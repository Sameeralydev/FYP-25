"use client"

import { useState, useEffect } from "react"

export const useScrollAnimation = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const checkVisibility = (elementId) => {
    const element = document.getElementById(elementId)
    if (element) {
      const rect = element.getBoundingClientRect()
      const isElementVisible = rect.top < window.innerHeight && rect.bottom > 0

      setIsVisible((prev) => ({
        ...prev,
        [elementId]: isElementVisible,
      }))
    }
  }

  return { scrollY, isVisible, checkVisibility }
}