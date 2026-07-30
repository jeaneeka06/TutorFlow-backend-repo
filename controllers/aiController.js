exports.getAISuggestions = async (req, res) => {
    const { subject, progress } = req.body;

    // Placeholder AI logic
    const suggestions = [
        `Focus on ${subject} fundamentals.`,
        `Review your last ${progress} lessons.`,
        `Try scheduling shorter, more frequent sessions.`
    ];

    res.json({ suggestions });
};
