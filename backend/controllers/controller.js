const { db } = require('../firebase');
const { v4: uuidv4 } = require('uuid');

// Add a line to the transcript
// EXAMPLE:
// const addTranscriptLine = async (req, res) => {
//     try {
//       const { interviewId, question, answer } = req.body;
//       const lineId = uuidv4(); // Generate a unique ID for the line
//       const time_stamp = admin.firestore.FieldValue.serverTimestamp();
//       await db.collection('interviews')
//         .doc(interviewId)
//         .collection('transcripts')
//         .doc(lineId)
//         .set({
//           question,
//           answer,
//           time_stamp
//         });
//       res.status(200).json({ message: 'Line added successfully' });
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };
//   // Get all lines of a transcript
//   const getTranscript = async (req, res) => {
//     try {
//       const { interviewId } = req.body;
//       const transcriptSnapshot = await db.collection('interviews')
//         .doc(interviewId)
//         .collection('transcripts')
//         .orderBy('time_stamp')
//         .get();
//       const transcript = transcriptSnapshot.docs.map(doc => ({
//         id: doc.id,
//         ...doc.data()
//       }));
//       res.status(200).json(transcript);
//     } catch (error) {
//       res.status(500).json({ error: error.message });
//     }
//   };  

module.exports = {
    
};