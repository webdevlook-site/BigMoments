import React, { useEffect, useRef, useState, useMemo } from "react";
import { SectionId, ServiceItem } from "../types";
import {
  Newspaper,
  Calendar,
  ChevronLeft,
  ChevronRight,
  TrendingUp,
  Image as ImageIcon,
  X,
  Filter,
  Tag,
  User,
} from "lucide-react";
import { newsArticles, NewsArticle } from "../data/newsArticles";

const News: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
    null
  );
  const [isClosing, setIsClosing] = useState(false);
  const [isModalMounted, setIsModalMounted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  // Get unique categories
  const categories = useMemo(() => {
    const cats = Array.from(new Set(newsArticles.map(article => article.category)));
    return ["All", ...cats.sort()];
  }, []);

  // Filter articles by category
  const filteredArticles = useMemo(() => {
    if (selectedCategory === "All") return newsArticles;
    return newsArticles.filter(article => article.category === selectedCategory);
  }, [selectedCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerView(2);
      } else {
        setItemsPerView(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (selectedArticle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [selectedArticle]);

  // Reset carousel when category changes
  useEffect(() => {
    setCurrentIndex(0);
  }, [selectedCategory]);

  const maxIndex = Math.max(0, filteredArticles.length - itemsPerView);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
  };

  const openArticle = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsClosing(false);
    // Trigger opening animation after modal mounts
    setTimeout(() => {
      setIsModalMounted(true);
    }, 10);
  };

  const closeArticle = () => {
    setIsClosing(true);
    setIsModalMounted(false);
    setTimeout(() => {
      setSelectedArticle(null);
      setIsClosing(false);
    }, 300); // Match animation duration
  };

  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentIndex < maxIndex) {
      handleNext();
    }
    if (isRightSwipe && currentIndex > 0) {
      handlePrev();
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  return (
    <>
      <section
        ref={sectionRef}
        id={SectionId.NEWS}
        className="py-24 bg-slate-50 relative overflow-hidden"
      >
        {/* Background: Subtle Pitch Markings */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-full bg-black"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-black rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div
            className={`text-center mb-16 reveal-on-scroll ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-teal-50 border border-teal-100 text-teal-700 font-bold text-xs uppercase tracking-[0.2em] mb-6">
              <Newspaper className="w-4 h-4" />
              Latest Updates
            </div>

            <h2
              className="font-heading text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter"
              style={{ lineHeight: "1.2" }}
            >
              Stay In The{" "}
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-emerald-500"
                style={{
                  paddingBottom: "0.15em",
                  paddingRight: "0.1em",
                  display: "inline-block",
                }}
              >
                Loop
              </span>
            </h2>

            <p className="text-slate-600 text-lg max-w-2xl mx-auto leading-relaxed font-medium">
              Keep up with the latest news, player moves, and insights from BIG
              MOMENTS.
            </p>
          </div>

          {/* Category Filters */}
          <div
            className={`mb-8 reveal-on-scroll delay-100 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            <div className="flex items-center gap-2 mb-4 max-[400px]:mb-3">
              <Filter className="w-4 h-4 text-slate-600 max-[400px]:w-3.5 max-[400px]:h-3.5" />
              <span className="text-sm font-bold text-slate-600 uppercase tracking-wider max-[400px]:text-xs">
                Filter by Category
              </span>
            </div>

            {/* Mobile Dropdown (≤768px) */}
            <div className="md:hidden">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 rounded-lg bg-white border-2 border-slate-200 text-slate-900 font-bold text-sm uppercase tracking-wider focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all duration-300 ease-in-out appearance-none cursor-pointer"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.5rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                  paddingRight: '2.5rem'
                }}
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                    {category !== "All" && ` (${newsArticles.filter(a => a.category === category).length})`}
                  </option>
                ))}
              </select>
            </div>

            {/* Desktop Buttons (>768px) */}
            <div className="hidden md:flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-wider transition-all duration-300 ease-in-out ${
                    selectedCategory === category
                      ? "bg-teal-600 text-white shadow-md"
                      : "bg-white text-slate-600 border border-slate-200 hover:bg-teal-50 hover:border-teal-500 hover:text-teal-600"
                  }`}
                >
                  {category}
                  {category !== "All" && (
                    <span className={`ml-1.5 text-[10px] ${
                      selectedCategory === category ? "text-emerald-200" : "text-slate-400"
                    }`}>
                      ({newsArticles.filter(a => a.category === category).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Carousel Container */}
          <div
            className={`relative reveal-on-scroll delay-200 ${
              isVisible ? "is-visible" : ""
            }`}
          >
            {/* Carousel Navigation */}
            <div className="flex items-center justify-between mb-8 max-[400px]:mb-6">
              <div className="flex items-center gap-3 max-[400px]:gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentIndex === 0}
                  className="p-3 max-[400px]:p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-teal-50 hover:border-teal-500 hover:text-teal-600 transition-all duration-300 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:text-slate-600 shadow-sm"
                  aria-label="Previous news"
                >
                  <ChevronLeft className="w-5 h-5 max-[400px]:w-4 max-[400px]:h-4" />
                </button>
                <button
                  onClick={handleNext}
                  disabled={currentIndex >= maxIndex}
                  className="p-3 max-[400px]:p-2 rounded-lg bg-white border border-slate-200 text-slate-600 hover:bg-teal-50 hover:border-teal-500 hover:text-teal-600 transition-all duration-300 ease-in-out disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:bg-white disabled:hover:border-slate-200 disabled:hover:text-slate-600 shadow-sm"
                  aria-label="Next news"
                >
                  <ChevronRight className="w-5 h-5 max-[400px]:w-4 max-[400px]:h-4" />
                </button>
              </div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider max-[400px]:text-[10px]">
                {filteredArticles.length} {filteredArticles.length === 1 ? "Article" : "Articles"}
              </div>
            </div>

            {/* Empty State */}
            {filteredArticles.length === 0 && (
              <div className="text-center py-16 px-4">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-slate-100 mb-4">
                  <Newspaper className="w-8 h-8 text-slate-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">No Articles Found</h3>
                <p className="text-slate-600 mb-6">
                  No articles match the selected category. Try selecting a different filter.
                </p>
                <button
                  onClick={() => setSelectedCategory("All")}
                  className="px-6 py-2 bg-teal-600 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-teal-700 transition-colors duration-300 ease-in-out"
                >
                  View All Articles
                </button>
              </div>
            )}

            {/* Carousel Track */}
            {filteredArticles.length > 0 && (
              <div
                className="overflow-hidden"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{
                    transform: `translateX(-${
                      currentIndex * (100 / itemsPerView)
                    }%)`,
                  }}
                >
                  {filteredArticles.map((article) => (
                  <div
                    key={article.id}
                    className="flex-shrink-0 px-3"
                    style={{ width: `${100 / itemsPerView}%` }}
                  >
                    <div className="group bg-white rounded-xl border border-slate-200 hover:border-teal-500 transition-all duration-300 shadow-sm hover:shadow-xl overflow-hidden h-full flex flex-col">
                      {/* Image */}
                      <div className="relative h-48 bg-slate-100 overflow-hidden flex-shrink-0">
                        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-emerald-900/20 group-hover:opacity-0 transition-opacity duration-300"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ImageIcon className="w-16 h-16 text-slate-300" />
                        </div>
                        {/* Category Badge on Image */}
                        <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-emerald-700 font-bold text-[10px] uppercase tracking-wider shadow-lg">
                          <TrendingUp className="w-3 h-3" />
                          {article.category}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6 relative flex-grow flex flex-col">
                        {/* Title */}
                        <h3 className="text-lg font-black text-slate-900 mb-3 uppercase tracking-tight leading-tight group-hover:text-teal-600 transition-colors line-clamp-2">
                          {article.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                          {article.excerpt}
                        </p>

                        {/* Date, Author and Read Button */}
                        <div className="space-y-3 pt-4 border-t border-slate-100 mt-auto">
                          <div className="flex items-center justify-between text-slate-400 text-xs">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-3.5 h-3.5" />
                              <span>{article.date}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <User className="w-3.5 h-3.5" />
                              <span className="font-medium">{article.author}</span>
                            </div>
                          </div>

                          <button
                            onClick={() => openArticle(article)}
                            className="w-full px-4 py-2 bg-teal-950 text-white font-bold text-xs uppercase tracking-wider rounded hover:bg-teal-900 transition-colors duration-300 ease-in-out"
                          >
                            Read Full Article
                          </button>
                        </div>

                        {/* Hover Accent Bar */}
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 to-emerald-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                      </div>
                    </div>
                  </div>
                  ))}
                </div>
              </div>
            )}

            {/* Dots Indicator */}
            {filteredArticles.length > 0 && maxIndex > 0 && (
              <div className="flex justify-center gap-2 mt-8">
                {Array.from({ length: maxIndex + 1 }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ease-in-out ${
                      index === currentIndex
                        ? "bg-teal-600 w-8"
                        : "bg-slate-300 hover:bg-slate-400"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Article Modal Overlay */}
      {selectedArticle && (
        <div
          className={`fixed inset-0 z-200 flex items-end md:items-center justify-center bg-black/60 backdrop-blur-sm md:p-4 transition-opacity duration-300 ${
            isModalMounted && !isClosing ? "opacity-100" : "opacity-0"
          }`}
          onClick={closeArticle}
        >
          <div
            className={`bg-white rounded-t-3xl md:rounded-2xl max-w-4xl w-full max-h-[92vh] md:max-h-[90vh] overflow-y-auto relative shadow-2xl transition-all duration-300 ease-out ${
              isModalMounted && !isClosing
                ? "translate-y-0 md:scale-100 md:opacity-100"
                : "translate-y-full md:translate-y-0 md:scale-95 md:opacity-0"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between z-10">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 font-bold text-[10px] uppercase tracking-wider">
                <TrendingUp className="w-3 h-3" />
                {selectedArticle.category}
              </div>
              <button
                onClick={closeArticle}
                className="p-2 rounded-lg hover:bg-slate-100 text-slate-600 hover:text-slate-900 transition-colors"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 md:p-8">
              {/* Image Placeholder */}
              <div className="relative h-64 md:h-96 bg-slate-100 rounded-xl overflow-hidden mb-8">
                <div className="absolute inset-0 bg-gradient-to-br from-teal-900/20 to-emerald-900/20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <ImageIcon className="w-24 h-24 text-slate-300" />
                </div>
              </div>

              {/* Article Title */}
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4 uppercase italic tracking-tight leading-tight">
                {selectedArticle.title}
              </h2>

              {/* Date and Author */}
              <div className="flex items-center gap-4 mb-8 pb-8 border-b border-slate-200">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{selectedArticle.date}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-600 text-sm">
                  <User className="w-4 h-4" />
                  <span className="font-medium">{selectedArticle.author}</span>
                </div>
              </div>

              {/* Full Content */}
              <div className="prose prose-slate max-w-none">
                {selectedArticle.fullContent.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-slate-600 text-base leading-relaxed mb-6"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Close Button at Bottom */}
              <div className="mt-12 pt-8 border-t border-slate-200 text-center">
                <button
                  onClick={closeArticle}
                  className="px-8 py-3 bg-teal-950 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-teal-900 transition-colors shadow-lg hover:shadow-xl"
                >
                  Close Article
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default News;
