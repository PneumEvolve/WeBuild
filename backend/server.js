const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// In-memory data
let proposals = [
  { id: 1, title: 'Raise SEED APY to 60%', yes: 0, no: 0 },
  { id: 2, title: 'Add new NFT collection', yes: 0, no: 0 }
];

app.get('/api/proposals', (req, res) => {
  res.json(proposals);
});

app.post('/api/vote', (req, res) => {
  const { proposalId, vote } = req.body;
  const proposal = proposals.find(p => p.id === proposalId);
  if (proposal) {
    if (vote === 'yes') proposal.yes += 1;
    else if (vote === 'no') proposal.no += 1;
  }
  res.json({ success: true, proposals });
});

app.listen(PORT, () => console.log(`Backend listening on port ${PORT}`));
