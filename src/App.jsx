import React, { useState } from 'react';
import { ChevronRight, ArrowLeft, Star, Award, GraduationCap, X } from 'lucide-react';

const ChandigarhUniversityVideo = () => {
  const [slide, setSlide] = useState(0);
  const [course, setCourse] = useState(null);
  const [hover, setHover] = useState(null);
  const [selectedSpec, setSelectedSpec] = useState(null);

  const courses = [
    {
      name: "B.Tech Computer Science",
      icon: "💻",
      color: "from-blue-600 to-cyan-600",
      borderColor: "border-blue-500",
      specs: [
        { 
          name: "Artificial Intelligence & Machine Learning",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "University Institute of Engineering & Technology (UIET), Panjab University"]
        },
        { 
          name: "Data Science & Analytics",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Dr. S.S. Bhatnagar University Institute of Chemical Engineering & Technology"]
        },
        { 
          name: "Cyber Security",
          colleges: ["University Institute of Engineering & Technology (UIET), Panjab University", "Panjab University, Chandigarh (Sector 14)"]
        },
        { 
          name: "Cloud Computing",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "University Institute of Engineering & Technology (UIET), Panjab University"]
        },
        { 
          name: "Full Stack Development",
          colleges: ["University Institute of Engineering & Technology (UIET), Panjab University", "Panjab University, Chandigarh (Sector 14)"]
        }
      ]
    },
    {
      name: "MBA",
      icon: "💼",
      color: "from-purple-600 to-pink-600",
      borderColor: "border-purple-500",
      specs: [
        { 
          name: "Marketing Management",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Government College for Girls, Chandigarh (Sector 11)"]
        },
        { 
          name: "Finance Management",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Government College for Girls, Chandigarh (Sector 11)"]
        },
        { 
          name: "Human Resource Management",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Government College for Girls, Chandigarh (Sector 11)"]
        },
        { 
          name: "International Business",
          colleges: ["Panjab University, Chandigarh (Sector 14)"]
        },
        { 
          name: "Business Analytics",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Dr. S.S. Bhatnagar University Institute of Chemical Engineering & Technology"]
        }
      ]
    },
    {
      name: "B.Sc Agriculture",
      icon: "🌾",
      color: "from-green-600 to-emerald-600",
      borderColor: "border-green-500",
      specs: [
        { 
          name: "Agronomy",
          colleges: ["Panjab University, Chandigarh (Sector 14)"]
        },
        { 
          name: "Horticulture",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Government Home Science College, Chandigarh (Sector 10)"]
        },
        { 
          name: "Soil Science",
          colleges: ["Panjab University, Chandigarh (Sector 14)"]
        },
        { 
          name: "Plant Pathology",
          colleges: ["Panjab University, Chandigarh (Sector 14)"]
        },
        { 
          name: "Agricultural Economics",
          colleges: ["Panjab University, Chandigarh (Sector 14)"]
        }
      ]
    },
    {
      name: "BBA",
      icon: "📊",
      color: "from-orange-600 to-amber-600",
      borderColor: "border-orange-500",
      specs: [
        { 
          name: "General Management",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Government College for Girls, Chandigarh (Sector 11)"]
        },
        { 
          name: "Digital Marketing",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Government College for Girls, Chandigarh (Sector 11)"]
        },
        { 
          name: "Entrepreneurship",
          colleges: ["Panjab University, Chandigarh (Sector 14)"]
        },
        { 
          name: "Banking & Finance",
          colleges: ["Panjab University, Chandigarh (Sector 14)", "Government College for Girls, Chandigarh (Sector 11)"]
        },
        { 
          name: "International Business",
          colleges: ["Panjab University, Chandigarh (Sector 14)"]
        }
      ]
    },
    {
      name: "B.Pharmacy",
      icon: "💊",
      color: "from-teal-600 to-cyan-600",
      borderColor: "border-teal-500",
      specs: [
        { 
          name: "Pharmaceutical Chemistry",
          colleges: ["Post Graduate Institute of Medical Education & Research (PGIMER)", "Government Medical College & Hospital, Chandigarh (Sector 32)"]
        },
        { 
          name: "Pharmacology",
          colleges: ["Post Graduate Institute of Medical Education & Research (PGIMER)", "Government Medical College & Hospital, Chandigarh (Sector 32)"]
        },
        { 
          name: "Clinical Pharmacy",
          colleges: ["Post Graduate Institute of Medical Education & Research (PGIMER)", "Government Medical College & Hospital, Chandigarh (Sector 32)"]
        },
        { 
          name: "Pharmaceutical Analysis",
          colleges: ["Government Medical College & Hospital, Chandigarh (Sector 32)", "Post Graduate Institute of Medical Education & Research (PGIMER)"]
        },
        { 
          name: "Drug Regulatory Affairs",
          colleges: ["Post Graduate Institute of Medical Education & Research (PGIMER)"]
        }
      ]
    },
    {
      name: "B.Design",
      icon: "🎨",
      color: "from-pink-600 to-rose-600",
      borderColor: "border-pink-500",
      specs: [
        { 
          name: "Fashion Design",
          colleges: ["Government College of Art, Chandigarh (Sector 10)", "Government Home Science College, Chandigarh (Sector 10)"]
        },
        { 
          name: "Interior Design",
          colleges: ["Government College of Art, Chandigarh (Sector 10)", "Government Home Science College, Chandigarh (Sector 10)"]
        },
        { 
          name: "Graphic Design",
          colleges: ["Government College of Art, Chandigarh (Sector 10)"]
        },
        { 
          name: "Product Design",
          colleges: ["Government College of Art, Chandigarh (Sector 10)"]
        },
        { 
          name: "UI/UX Design",
          colleges: ["Government College of Art, Chandigarh (Sector 10)", "Panjab University, Chandigarh (Sector 14)"]
        }
      ]
    }
  ];

  const colleges = [
    { name: "Government College of Art, Chandigarh (Sector 10)", rating: 4.5 },
    { name: "Panjab University, Chandigarh (Sector 14)", rating: 4.8 },
    { name: "Post Graduate Institute of Medical Education & Research (PGIMER)", rating: 4.9 },
    { name: "Government Medical College & Hospital, Chandigarh (Sector 32)", rating: 4.7 },
    { name: "Government College for Girls, Chandigarh (Sector 11)", rating: 4.6 },
    { name: "Government Home Science College, Chandigarh (Sector 10)", rating: 4.5 },
    { name: "Dr. S.S. Bhatnagar University Institute of Chemical Engineering & Technology", rating: 4.8 },
    { name: "University Institute of Engineering & Technology (UIET), Panjab University", rating: 4.7 }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 flex items-center justify-center p-4">
      
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .fade-in { animation: fadeIn 0.6s ease-out; }
        .slide-in { animation: slideIn 0.5s ease-out; }
      `}</style>

      <div className="w-full max-w-6xl bg-white rounded-2xl shadow-2xl overflow-hidden relative">
        
        {/* SLIDE 1: Welcome */}
        {slide === 0 && (
          <div className="min-h-screen flex flex-col items-center justify-center p-12 bg-gradient-to-br from-slate-50 to-blue-50 fade-in">
            <div className="text-center space-y-10 max-w-5xl">
              <div className="mb-6">
                <img 
                  src="https://images.seeklogo.com/logo-png/43/1/chandigarh-university-cu-logo-png_seeklogo-432515.png" 
                  alt="Chandigarh University"
                  className="w-full max-w-3xl mx-auto drop-shadow-lg"
                />
              </div>
              
              <button
                onClick={() => setSlide(1)}
                className="px-10 py-4 bg-gradient-to-r from-red-600 to-orange-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center gap-3 mx-auto"
              >
                Explore Programs
                <ChevronRight className="w-5 h-5" />
              </button>

              <div className="flex justify-center gap-4 pt-6">
                <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <Award className="w-5 h-5 text-red-600" />
                  <span className="text-sm font-semibold text-gray-700">NAAC A+ Accredited</span>
                </div>
                <div className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200">
                  <GraduationCap className="w-5 h-5 text-orange-600" />
                  <span className="text-sm font-semibold text-gray-700">World-Class Faculty</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* SLIDE 2: Courses */}
        {slide === 1 && (
          <div className="min-h-screen p-12 bg-gradient-to-br from-slate-50 to-blue-50 fade-in">
            <button
              onClick={() => setSlide(0)}
              className="mb-8 flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back</span>
            </button>
            
            <div className="text-center mb-12">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">Choose Your Program</h2>
              <p className="text-lg text-gray-600">Select a course to view specializations</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {courses.map((c, i) => (
                <div
                  key={i}
                  onClick={() => { setCourse(c); setSlide(2); }}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  className={`cursor-pointer bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300 border-2 ${hover === i ? c.borderColor : 'border-transparent'}`}
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className="text-6xl mb-4 text-center">{c.icon}</div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 text-center">{c.name}</h3>
                  <div className="flex items-center justify-center text-blue-600 font-semibold text-sm">
                    View Details
                    <ChevronRight className="w-4 h-4 ml-1" />
                  </div>
                  {hover === i && (
                    <div className="mt-4 text-center text-xs text-gray-500 font-medium">
                      {c.specs.length} Specializations Available
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 3: Specializations */}
        {slide === 2 && course && (
          <div className="min-h-screen p-12 bg-gradient-to-br from-slate-50 to-blue-50 fade-in">
            <button
              onClick={() => { setSlide(1); setCourse(null); setSelectedSpec(null); }}
              className="mb-8 flex items-center gap-2 px-4 py-2 text-gray-600 hover:text-gray-800 bg-white rounded-lg shadow-md hover:shadow-lg transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-semibold">Back to Programs</span>
            </button>

            <div className="text-center mb-12">
              <div className="text-7xl mb-4">{course.icon}</div>
              <h2 className="text-4xl font-bold text-gray-800 mb-4">{course.name}</h2>
              <p className="text-lg text-gray-600">Click on a specialization to see available colleges</p>
            </div>

            <div className="max-w-3xl mx-auto space-y-4">
              {course.specs.map((spec, i) => (
                <div
                  key={i}
                  onClick={() => setSelectedSpec(spec)}
                  onMouseEnter={() => setHover(i)}
                  onMouseLeave={() => setHover(null)}
                  className="bg-white rounded-lg p-6 shadow-md hover:shadow-xl transform hover:scale-102 transition-all duration-300 flex items-center gap-4 border-l-4 border-transparent hover:border-blue-500 slide-in cursor-pointer"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <div className={`w-12 h-12 bg-gradient-to-br ${course.color} rounded-lg flex items-center justify-center text-white font-bold text-lg shadow-md`}>
                    {i + 1}
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-semibold text-gray-800">{spec.name}</h3>
                    <p className="text-sm text-gray-500 mt-1">{spec.colleges.length} colleges offer this program</p>
                  </div>
                  <ChevronRight className="w-5 h-5 text-blue-600" />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* SLIDE 4: Colleges (removed previous slide 4, now showing as modal) */}

        {/* Modal for College Details */}
        {selectedSpec && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4" onClick={() => setSelectedSpec(null)}>
            <div className="bg-white rounded-2xl p-8 max-w-3xl w-full shadow-2xl fade-in" onClick={(e) => e.stopPropagation()}>
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-2">{selectedSpec.name}</h3>
                  <p className="text-gray-600">Colleges offering this specialization</p>
                </div>
                <button 
                  onClick={() => setSelectedSpec(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>

              <div className="space-y-4 max-h-96 overflow-y-auto">
                {selectedSpec.colleges.map((college, i) => {
                  const collegeData = colleges.find(c => c.name === college);
                  return (
                    <div
                      key={i}
                      className="bg-gradient-to-br from-slate-50 to-blue-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-all border-l-4 border-blue-500"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center text-white font-bold flex-shrink-0">
                          {i + 1}
                        </div>
                        <div className="flex-grow">
                          <h4 className="text-base font-semibold text-gray-800 mb-2">{college}</h4>
                          {collegeData && (
                            <div className="flex items-center gap-2">
                              <div className="flex items-center gap-1 px-3 py-1 bg-yellow-50 rounded-full border border-yellow-200">
                                <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                                <span className="text-sm font-semibold text-yellow-700">{collegeData.rating}</span>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="mt-6 text-center">
                <button
                  onClick={() => setSelectedSpec(null)}
                  className="px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Progress Indicator - Only show for slides 0, 1, 2 */}
        {slide < 3 && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-full shadow-xl border border-gray-200 z-40">
            {[0, 1, 2].map((d) => (
              <button
                key={d}
                onClick={() => { if (d !== 2 || course) setSlide(d); }}
                disabled={d === 2 && !course}
                className={`transition-all duration-300 rounded-full ${
                  slide === d 
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 w-10 h-3' 
                    : 'bg-gray-300 w-3 h-3 hover:bg-gray-400 hover:scale-125'
                } ${d === 2 && !course ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChandigarhUniversityVideo;