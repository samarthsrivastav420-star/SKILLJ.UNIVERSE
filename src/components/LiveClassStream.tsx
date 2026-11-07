import React, { useState, useEffect } from 'react';
import {
  Video,
  Radio,
  Users,
  MessageSquare,
  Send,
  HelpCircle,
  FileDown,
  Volume2,
  Maximize2,
  ThumbsUp,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const LiveClassStream: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'chat' | 'doubts' | 'poll'>('chat');
  const [chatMessages, setChatMessages] = useState<
    { sender: string; text: string; time: string; isInstructor?: boolean }[]
  >([
    {
      sender: 'Dr. Aryan Verma',
      text: 'Welcome students to today’s GenAI Architecture & Vector Database live stream! Ask questions in the doubts tab.',
      time: 'Just now',
      isInstructor: true,
    },
    {
      sender: 'Pooja K.',
      text: 'Good evening Sir! Audio and video are crystal clear.',
      time: '1m ago',
    },
    {
      sender: 'Aman Deep',
      text: 'Sir, will we get the PDF notes after the stream finishes?',
      time: '30s ago',
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [liked, setLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(482);
  const [pollVoted, setPollVoted] = useState<number | null>(null);
  const [notesDownloaded, setNotesDownloaded] = useState(false);

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    setChatMessages((prev) => [
      ...prev,
      {
        sender: 'You (Student)',
        text: inputText,
        time: 'Just now',
      },
    ]);
    setInputText('');

    // Simulate faculty reply
    setTimeout(() => {
      setChatMessages((prev) => [
        ...prev,
        {
          sender: 'Dr. Aryan Verma (Faculty)',
          text: 'Great question! In our production architecture, we decouple embedding indexing from real-time queries for sub-100ms response.',
          time: 'Just now',
          isInstructor: true,
        },
      ]);
    }, 1500);
  };

  const handleVote = (idx: number) => {
    setPollVoted(idx);
  };

  const handleToggleLike = () => {
    if (!liked) {
      setLikesCount((prev) => prev + 1);
      setLiked(true);
    } else {
      setLikesCount((prev) => prev - 1);
      setLiked(false);
    }
  };

  return (
    <section id="live-classes-section" className="py-16 bg-slate-900/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-xs font-semibold mb-2">
              <Radio className="h-3 w-3 animate-ping" />
              <span>LIVE STREAM CLASSES ACTIVE</span>
            </div>
            <h2 className="text-3xl font-extrabold text-white tracking-tight font-['Space_Grotesk']">
              Interactive Live Classroom
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Real-time interactive masterclasses with 100% verified faculty, live doubts, and peer discussions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setNotesDownloaded(true);
                setTimeout(() => setNotesDownloaded(false), 3000);
              }}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-all cursor-pointer"
            >
              <FileDown className="h-4 w-4 text-amber-400" />
              <span>{notesDownloaded ? 'PDF Notes Saved!' : 'Download Faculty Handout (PDF)'}</span>
            </button>
          </div>
        </div>

        {/* Live Stream Main Container */}
        <div className="grid lg:grid-cols-3 gap-6 rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-2xl">
          
          {/* Video Player Column */}
          <div className="lg:col-span-2 flex flex-col justify-between bg-black relative min-h-[380px] sm:min-h-[440px]">
            {/* Simulated Live Stream Video Presentation */}
            <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&auto=format&fit=crop&q=80"
                alt="Live Stream Visual"
                className="absolute inset-0 w-full h-full object-cover opacity-35 filter brightness-75"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-slate-950/60" />

              {/* Top Video Overlay Bar */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs z-10">
                <div className="flex items-center gap-2">
                  <span className="px-2.5 py-1 rounded-md bg-rose-600 text-white font-bold flex items-center gap-1.5 shadow-md text-[11px] animate-pulse">
                    <span className="h-2 w-2 rounded-full bg-white"></span>
                    LIVE NOW
                  </span>
                  <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-slate-200 border border-slate-700 font-medium flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5 text-sky-400" />
                    1,428 Students Connected
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 rounded bg-slate-900/80 backdrop-blur-md text-amber-300 font-mono text-[11px] border border-slate-700">
                    1080p 60fps HD
                  </span>
                </div>
              </div>

              {/* Center Content Mockup */}
              <div className="relative z-10 max-w-lg mx-auto">
                <div className="inline-flex p-3 rounded-full bg-indigo-600/30 text-indigo-400 border border-indigo-500/40 mb-3 shadow-lg">
                  <Video className="h-8 w-8 text-indigo-300" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  Session #14: Scalable Microservices & AI Workflow Pipelines
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 mb-4">
                  Instructor: <strong>Dr. Aryan Verma</strong> • Verified Master Faculty (IIT Bombay Alum)
                </p>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs font-semibold">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  <span>Topic: Production Gemini SDK & Vector Embeddings</span>
                </div>
              </div>

              {/* Bottom Video Player Control Bar */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-slate-200 z-10 bg-slate-900/80 backdrop-blur-md p-2.5 rounded-xl border border-slate-800">
                <div className="flex items-center gap-3">
                  <button
                    onClick={handleToggleLike}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-lg font-semibold transition-all ${
                      liked ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40' : 'bg-slate-800 hover:bg-slate-700 text-slate-200'
                    }`}
                  >
                    <ThumbsUp className={`h-3.5 w-3.5 ${liked ? 'fill-rose-400 text-rose-400' : ''}`} />
                    <span>{likesCount}</span>
                  </button>

                  <span className="text-slate-400 hidden sm:inline text-[11px]">
                    Quality: High Efficiency Streaming
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Volume2 className="h-4 w-4 text-slate-300" />
                  <Maximize2 className="h-4 w-4 text-slate-300 cursor-pointer hover:text-white" />
                </div>
              </div>
            </div>

            {/* Video Info Strip */}
            <div className="p-4 bg-slate-950 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <span className="text-amber-400 font-semibold">Course: Full Stack Web & GenAI Apps</span>
                <span className="text-slate-600">•</span>
                <span>Next Stream: Tomorrow 7:00 PM IST</span>
              </div>
              <span className="text-emerald-400 font-medium">80% Revenue Share Transparency Model</span>
            </div>
          </div>

          {/* Interactive Live Chat & Doubts Panel */}
          <div className="flex flex-col h-[480px] bg-slate-950 border-t lg:border-t-0 lg:border-l border-slate-800">
            
            {/* Panel Tabs */}
            <div className="flex items-center border-b border-slate-800 bg-slate-900/70 p-1">
              <button
                onClick={() => setActiveTab('chat')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'chat'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <MessageSquare className="h-3.5 w-3.5" />
                <span>Live Chat</span>
              </button>

              <button
                onClick={() => setActiveTab('doubts')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'doubts'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <HelpCircle className="h-3.5 w-3.5" />
                <span>Ask Doubt</span>
              </button>

              <button
                onClick={() => setActiveTab('poll')}
                className={`flex-1 py-2 text-xs font-bold rounded-lg transition-all flex items-center justify-center gap-1.5 ${
                  activeTab === 'poll'
                    ? 'bg-indigo-600 text-white shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Sparkles className="h-3.5 w-3.5 text-amber-400" />
                <span>Live Poll</span>
              </button>
            </div>

            {/* Chat Body */}
            {activeTab === 'chat' && (
              <>
                <div className="flex-1 p-4 overflow-y-auto space-y-3 text-xs scrollbar-thin">
                  {chatMessages.map((msg, idx) => (
                    <div
                      key={idx}
                      className={`p-2.5 rounded-xl border ${
                        msg.isInstructor
                          ? 'bg-indigo-950/50 border-indigo-500/30 text-indigo-100'
                          : 'bg-slate-900 border-slate-800 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className={`font-bold ${msg.isInstructor ? 'text-amber-400' : 'text-slate-300'}`}>
                          {msg.sender}
                        </span>
                        <span className="text-[10px] text-slate-500">{msg.time}</span>
                      </div>
                      <p className="leading-relaxed">{msg.text}</p>
                    </div>
                  ))}
                </div>

                {/* Chat Input */}
                <form onSubmit={handleSendMessage} className="p-3 border-t border-slate-800 bg-slate-900/60 flex items-center gap-2">
                  <input
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Send a question to faculty..."
                    className="flex-1 bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-indigo-500"
                  />
                  <button
                    type="submit"
                    className="p-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg transition-colors cursor-pointer"
                    title="Send message"
                  >
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              </>
            )}

            {/* Doubts Tab */}
            {activeTab === 'doubts' && (
              <div className="p-4 flex-1 flex flex-col justify-between overflow-y-auto text-xs">
                <div className="space-y-3">
                  <div className="p-3 bg-emerald-950/30 border border-emerald-800/40 rounded-xl">
                    <span className="text-[10px] font-bold text-emerald-400 uppercase">Resolved by Faculty</span>
                    <p className="font-semibold text-white mt-0.5">Q: How do we handle database locks during high concurrency?</p>
                    <p className="text-slate-400 mt-1">
                      Faculty: Use optimistic locking or Postgres advisory locks with connection pooling like PgBouncer.
                    </p>
                  </div>

                  <div className="p-3 bg-slate-900 border border-slate-800 rounded-xl">
                    <span className="text-[10px] font-bold text-amber-400 uppercase">Pending in Live Queue</span>
                    <p className="font-semibold text-white mt-0.5">Q: Will this certificate be recognized for university credit transfer?</p>
                    <p className="text-slate-400 mt-1">Yes, via the official SkillJ verified blockchain credential ledger.</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-800">
                  <p className="text-[11px] text-slate-400 text-center">
                    Submit your question above in the Live Chat to get faculty resolution in real-time.
                  </p>
                </div>
              </div>
            )}

            {/* Live Poll Tab */}
            {activeTab === 'poll' && (
              <div className="p-4 flex-1 flex flex-col justify-between text-xs">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/10 text-amber-300 font-bold text-[10px] mb-2">
                    <Sparkles className="h-3 w-3" />
                    INSTRUCTOR LIVE QUIZ POLL
                  </div>
                  <h4 className="font-bold text-white text-sm mb-3">
                    Which data structure provides average O(1) time complexity for lookup operations?
                  </h4>

                  <div className="space-y-2">
                    {[
                      { option: 'A. Binary Search Tree (BST)', votes: '12%' },
                      { option: 'B. Hash Table / Hash Map', votes: '74%', isCorrect: true },
                      { option: 'C. Linked List', votes: '4%' },
                      { option: 'D. Red-Black Tree', votes: '10%' },
                    ].map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleVote(idx)}
                        className={`w-full text-left p-2.5 rounded-lg border transition-all text-xs flex items-center justify-between ${
                          pollVoted === idx
                            ? 'bg-indigo-600/30 border-indigo-400 text-white font-semibold'
                            : 'bg-slate-900 border-slate-800 text-slate-300 hover:bg-slate-800'
                        }`}
                      >
                        <span>{item.option}</span>
                        {pollVoted !== null && (
                          <span className="font-mono text-xs text-amber-400 font-bold">{item.votes}</span>
                        )}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="text-center pt-2 border-t border-slate-800">
                  <span className="text-[11px] text-slate-400">
                    {pollVoted !== null ? 'Your vote recorded! 982 students voted.' : 'Click any option to cast your live vote.'}
                  </span>
                </div>
              </div>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
