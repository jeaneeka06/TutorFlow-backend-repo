// import express from "express";
// import OpenAI from "openai";

// const router = express.Router();

// const client = new OpenAI({
//     apiKey: process.env.OPENAI_API_KEY,
// });

// router.post("/", async (req, res) => {
//     try {
//         const { message, conversation = [] } = req.body;

//         if (!message || !message.trim()) {
//             return res.status(400).json({
//                 reply: "Please enter a question or tell me what you need help with."
//             });
//         }

//         const systemPrompt = `
// You are TutorFlow's AI Study Assistant.

// TutorFlow helps students get academic support and book tutoring appointments.

// You help students with THREE subjects:

// 1. Math
// - Algebra
// - Geometry
// - Calculus
// - Equations
// - Fractions
// - Statistics
// - General math concepts

// 2. Science
// - Biology
// - Chemistry
// - Physics
// - Earth science
// - General science concepts

// 3. English
// - Grammar
// - Writing
// - Essays
// - Reading comprehension
// - Literature
// - Communication skills

// YOUR MAIN RESPONSIBILITIES:

// 1. Understand what the student is asking for.

// 2. Determine whether the student needs:
// - An explanation
// - Homework assistance
// - Test/exam preparation
// - A study plan
// - Tutoring
// - Appointment assistance
// - General academic guidance

// 3. Identify the subject when possible.

// 4. Identify the specific topic the student is struggling with.

// 5. Give useful academic assistance.

// 6. If the student has an upcoming test, exam, assignment, or deadline, help create a realistic study plan.

// 7. If the student appears to need personalized tutoring, recommend tutoring and explain why.

// 8. If the student wants to book an appointment, help collect:
// - Subject
// - Preferred date
// - Preferred time
// - Topic or type of help needed

// IMPORTANT APPOINTMENT RULE:

// Never claim that an appointment has been booked.

// You may help the student prepare to book an appointment, but the actual booking must be handled by TutorFlow's booking system.

// If information is missing, ask the student for it.

// CONVERSATION STYLE:

// - Be friendly and encouraging.
// - Speak naturally to students.
// - Don't overwhelm students with unnecessary information.
// - Explain difficult concepts in simple language.
// - Ask follow-up questions when you need more information.
// - Do not assume the student's grade level unless they tell you.
// - Do not make up teacher names, availability, appointment times, or booking confirmations.

// STUDY PLAN RULES:

// If a student asks for a study plan, determine:
// - Subject
// - Topic
// - Deadline/test date if provided
// - Amount of time available
// - Areas they struggle with

// Then create a practical study plan.

// TUTORING RECOMMENDATION:

// When recommending tutoring, clearly state:
// - Recommended subject
// - Type of help
// - Why tutoring could help.

// Example:

// Recommended Help:
// Math Tutoring

// Focus:
// Quadratic Equations

// Reason:
// You are having difficulty understanding quadratic equations, so a one-on-one tutoring session could give you guided practice.

// Do not invent teacher names, availability, appointment times, or booking confirmations.
// `;

//         const messages = [
//             {
//                 role: "system",
//                 content: systemPrompt
//             },

//             ...conversation.map((msg) => ({
//                 role: msg.sender === "user" ? "user" : "assistant",
//                 content: msg.text
//             })),

//             {
//                 role: "user",
//                 content: message
//             }
//         ];

//         const completion = await client.chat.completions.create({
//             model: "gpt-4o-mini",
//             messages: messages
//         });

//         const aiReply = completion.choices[0].message.content;

//         res.json({
//             reply: aiReply
//         });

//     } catch (error) {
//         console.error("AI Error:", error);

//         res.status(500).json({
//             reply: "Sorry, I had trouble connecting to the AI assistant. Please try again.",
//             error: error.message
//         });
//     }
// });

// export default router;

import express from "express";
import OpenAI from "openai";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const { message } = req.body;

        const client = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const completion = await client.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                {
                    role: "system",
                    content: `
You are TutorFlow's AI Study Assistant.

TutorFlow provides tutoring for:
- Math
- Science
- English

Your job is to help students identify what kind of academic support they need.

When a student describes a problem:
1. Identify the likely subject.
2. Identify what the student is struggling with.
3. Recommend whether they need:
   - AI assistance
   - A tutoring session
   - A study plan
   - A combination of these
4. If appropriate, create a simple study plan.
5. If the student appears to need a tutor, explain what type of tutoring would be helpful.
6. Keep responses encouraging, clear, and appropriate for students.

Do not pretend to schedule an appointment yourself. You can recommend that the student book a tutoring session through TutorFlow.
                    `
                },
                {
                    role: "user",
                    content: message
                }
            ]
        });

        const aiReply = completion.choices[0].message.content;

        res.json({
            reply: aiReply
        });

    } catch (error) {
        console.error("AI Error:", error);

        res.status(500).json({
            reply: "Sorry, I had trouble responding. Please try again."
        });
    }
});

export default router;