import React from "react";
import { Typography, Container, Paper } from "@mui/material";

const Terms = () => {
  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Paper
        elevation={1}
        sx={{ p: 4, mt: 4, mb: 2, bgcolor: "black", color: "white" }}
      >
        <Typography variant="h3" gutterBottom>
          Terms and Conditions for Sacred Genesis
        </Typography>
        <Typography variant="body1" paragraph>
          Welcome to Sacred Genesis!
        </Typography>
        <Typography variant="body1" paragraph>
          Sacred Genesis is a collection of digital artworks (NFTs) operating on
          the Polygon blockchain network. By accessing our website and utilizing
          our services, you agree to comply with and be bound by the following
          terms and conditions.
        </Typography>
        <Typography variant="h5" gutterBottom>
          1. Acceptance of Terms
        </Typography>
        <Typography variant="body1" paragraph>
          These terms apply to your access to and use of the Sacred Genesis
          website and its associated services. By using our website, you agree
          to these terms. If you do not agree, you should not use our services.
        </Typography>
        <Typography variant="h5" gutterBottom>
          2. NFT Transactions
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>2.1 Blockchain Transactions:</strong> All NFT transactions are
          conducted on the Polygon blockchain. Once a transaction is executed,
          it cannot be reversed. We are not responsible for the undoing or
          reversal of any transactions.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>2.2 Third-Party Platforms:</strong> Sacred Genesis NFTs are
          acquired through third-party platforms like Opensea. We are not
          responsible for transactions conducted on these platforms.
        </Typography>
        <Typography variant="h5" gutterBottom>
          3. User Responsibilities
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>3.1 Account Safety:</strong> Users are solely responsible for
          the safety and management of their digital wallets and credentials.
          Sacred Genesis is not liable for any loss or damage arising from
          unauthorized access to your wallet.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>3.2 Compliance with Laws:</strong> Users must comply with all
          applicable laws and regulations in their use of Sacred Genesis NFTs.
        </Typography>
        <Typography variant="h5" gutterBottom>
          4. Ownership and Usage Rights
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4.1 Ownership:</strong> Upon acquiring a Sacred Genesis NFT,
          referred to as a "Prayer," you gain ownership of the digital artwork.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4.2 Personal and Commercial Use:</strong> As an owner, you are
          granted the right to use the NFT for both personal and commercial
          purposes, subject to the following conditions:
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4.2.1 Personal Use:</strong> You may display the NFT for
          personal enjoyment.
        </Typography>
        <Typography variant="body1" paragraph>
          <strong>4.2.2 Commercial Use:</strong> You may use the NFT in
          commercial ventures, provided that:
          <ul>
            <li>The use does not infringe on the rights of others.</li>
            <li>The use complies with all applicable laws and regulations.</li>
            <li>
              The NFT is not used in connection with illegal or unethical
              activities.
            </li>
          </ul>
        </Typography>
        <Typography variant="h5" gutterBottom>
          5. Intellectual Property Rights
        </Typography>
        <Typography variant="body1" paragraph>
          Sacred Genesis and its original content, features, and functionality
          are and will remain the exclusive property of Sacred Genesis and its
          licensors.
        </Typography>
        <Typography variant="h5" gutterBottom>
          6. Amendments to Terms
        </Typography>
        <Typography variant="body1" paragraph>
          We reserve the right to amend these terms at any time. Your continued
          use of the website following the posting of changes will constitute
          your acceptance of those changes.
        </Typography>
        {/* <Typography variant="h5" gutterBottom>
          7. Contact Information
        </Typography>
        <Typography variant="body1" paragraph>
          For any questions regarding these terms, please contact us at &nbsp;
          <Link href="mailto:sacred.genesis.art@gmail.com">
            sacred.genesis.art@gmail.com
          </Link>
          .
        </Typography> */}
      </Paper>
    </Container>
  );
};

export default Terms;
