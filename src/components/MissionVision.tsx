import { Target, Eye, Award } from "lucide-react";

export default function MissionVision() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          width: "100%",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          padding: "20px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2
          style={{ marginBottom: "16px", fontSize: "24px", fontWeight: "bold" }}
        >
          Our Vision
        </h2>

        <div
          style={{ marginBottom: "24px", fontSize: "16px", lineHeight: "1.5" }}
        >
          <p>
            Empowering Marginalised Communities through Unity, Education, and
            Economic Empowerment.
            <br />
            (একতা, শিক্ষা এবং অর্থনৈতিক ক্ষমতায়নের মাধ্যমে প্রান্তিক জনগোষ্ঠীর
            ক্ষমতায়ন)
          </p>

          <p className="pt-5">
            To ensure that minorities get the benefits they are entitled to by
            the state and Central Government
            <br />
            (রাজ্য ও কেন্দ্রসরকারী কর্তৃক যে সুবিধা সংখ্যালঘুদের প্রাপ্য সেটা
            যাতে তারা সঠিক ভাবে পায় )
          </p>
        </div>
      </div>
    </div>
  );
}
