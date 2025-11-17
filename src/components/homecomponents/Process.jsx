import React, { useState, useEffect, useRef } from 'react';

const Process = () => {
  const [activePhase, setActivePhase] = useState(1);
  const phaseRefs = useRef([]);

  const phases = [
    {
      id: 1,
      label: 'Phase 1',
      title: 'Discovery & Design',
      points: [
        'Site assessment and structural load analysis.',
        'Custom 3D layout design aligned with your project theme.',
        'Equipment selection based on target demographics.',
        'Budget planning with transparent pricing.'
      ]
    },
    {
      id: 2,
      label: 'Phase 2',
      title: 'Approval & Planning',
      points: [
        'Regulatory compliance documentation.',
        'Vendor coordination and timeline mapping.',
        'Material procurement and logistics.',
        'Project kick-off meeting with stakeholders.'
      ]
    },
    {
      id: 3,
      label: 'Phase 3',
      title: 'Installation & Execution',
      points: [
        'On-site project management.',
        'Professional equipment installation.',
        'Flooring, mirrors, and ambient setup.',
        'Electrical and HVAC integration.'
      ]
    },
    {
      id: 4,
      label: 'Phase 4',
      title: 'Quality Assurance',
      points: [
        'Equipment calibration and safety testing.',
        'Staff training for operations.',
        'Walkthrough and client inspection.',
        'Final walkthrough and sign-off.'
      ]
    },
    {
      id: 5,
      label: 'Phase 5',
      title: 'Post-Handover Support',
      points: [
        '12-month comprehensive warranty.',
        'Preventive maintenance scheduling.',
        'Equipment upgrade consultations.',
        'Emergency response support.'
      ]
    }
  ];

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const phaseIndex = phaseRefs.current.indexOf(entry.target);
          if (phaseIndex !== -1) {
            setActivePhase(phaseIndex + 1);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    phaseRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      phaseRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  // Determine which phases should be active (completed)
  const getPhaseStatus = (phaseId) => {
    return phaseId <= activePhase;
  };

  return (
    <section 
      className="w-full flex justify-center items-center px-4 sm:px-8 lg:px-16" 
      style={{ 
        backgroundColor: 'white',
        paddingTop: '112px',
        paddingBottom: '112px'
      }}
    >
      {/* Main Container - Centered */}
      <div 
        style={{
          width: '100%',
          maxWidth: '1280px',
          opacity: 1
        }}
      >
        {/* Header Section - Centered */}
        <div 
          className="mx-auto"
          style={{
            width: '100%',
            maxWidth: '768px',
            marginBottom: '80px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px'
          }}
        >
          {/* Process Label */}
          <p 
            className="font-poppins"
            style={{
              fontWeight: 600,
              fontSize: '16px',
              lineHeight: '150%',
              letterSpacing: '0%',
              color: '#C34A36',
              opacity: 1
            }}
          >
            Process
          </p>

          {/* Main Heading */}
          <h2 
            className="font-unbounded"
            style={{
              fontWeight: 500,
              fontSize: '58px',
              lineHeight: '120%',
              letterSpacing: '-1%',
              color: '#18191A',
              opacity: 1
            }}
          >
            Five Phases. Zero Hassles. One Partner for Your Entire Fitness Amenity.
          </h2>
        </div>

        {/* Timeline Section - Centered */}
        <div 
          className="mx-auto"
          style={{ 
            position: 'relative', 
            width: '100%',
            maxWidth: '750px'
          }}
        >
          {/* Vertical Line */}
          <div 
            style={{
              position: 'absolute',
              left: '0',
              top: '0',
              bottom: '0',
              width: '2px',
              backgroundColor: '#E5E5E5',
              zIndex: 1
            }}
          />

          {/* Phase Cards Container */}
          <div 
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '48px',
              position: 'relative'
            }}
          >
            {phases.map((phase, index) => {
              const isCompleted = getPhaseStatus(phase.id);
              const isCurrentActive = activePhase === phase.id;

              return (
                <div 
                  key={phase.id}
                  ref={(el) => (phaseRefs.current[index] = el)}
                  style={{
                    position: 'relative',
                    paddingLeft: isCurrentActive ? '94.5px' : '62.5px',
                    transition: 'padding-left 0.5s ease'
                  }}
                >
                  {/* Timeline Dot */}
                  <div 
                    style={{
                      position: 'absolute',
                      left: '-6px',
                      top: '32px',
                      width: '12px',
                      height: '12px',
                      borderRadius: '50%',
                      backgroundColor: isCompleted ? '#C34A36' : '#E5E5E5',
                      border: '2px solid white',
                      transition: 'all 0.5s ease',
                      zIndex: 10
                    }}
                  />

                  {/* Phase Card */}
                  <div 
                    style={{
                      width: '100%',
                      maxWidth: '688px',
                      borderRadius: '16px',
                      padding: '32px',
                      backgroundColor: 'white',
                      opacity: 1,
                      transition: 'all 0.5s ease',
                      boxShadow: isCurrentActive 
                        ? '0 8px 24px rgba(195, 74, 54, 0.15)' 
                        : '0 4px 12px rgba(0,0,0,0.08)'
                    }}
                  >
                    {/* Phase Label */}
                    <p 
                      className="font-poppins font-semibold"
                      style={{
                        fontSize: '14px',
                        color: isCompleted ? '#C34A36' : '#999999',
                        transition: 'color 0.5s ease',
                        marginBottom: '12px'
                      }}
                    >
                      {phase.label}
                    </p>

                    {/* Phase Title */}
                    <h3 
                      className="font-unbounded font-semibold"
                      style={{
                        fontSize: '28px',
                        lineHeight: '130%',
                        letterSpacing: '-1%',
                        color: isCompleted ? '#18191A' : '#666666',
                        transition: 'color 0.5s ease',
                        marginBottom: '20px'
                      }}
                    >
                      {phase.title}
                    </h3>

                    {/* Phase Points */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                      {phase.points.map((point, pointIndex) => (
                        <div key={pointIndex} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                          <span 
                            style={{
                              color: isCompleted ? '#C34A36' : '#CCCCCC',
                              fontSize: '18px',
                              transition: 'color 0.5s ease',
                              lineHeight: '1.5',
                              flexShrink: 0
                            }}
                          >
                            •
                          </span>
                          <p 
                            className="font-poppins"
                            style={{
                              fontSize: '14px',
                              lineHeight: '150%',
                              color: isCompleted ? '#404040' : '#999999',
                              transition: 'color 0.5s ease',
                              flex: 1
                            }}
                          >
                            {point}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
