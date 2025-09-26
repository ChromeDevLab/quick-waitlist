import {
  Body,
  Container,
  Head,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

export const EmailTemplate = () => {
  return (
    <Html>
      <Head />
      <Preview>Welcome to DeleteTweets.net - Your Digital Heritage Manager</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section>
            <Text style={greeting}>
              Hello there! 👋
            </Text>
            <Text style={mainText}>
              Thank you for subscribing to <strong>DeleteTweets.net</strong> updates. You&apos;re about to become an important member of our digital privacy protection community.
            </Text>
            <Text style={missionText}>
              🔐 <strong>Our Mission</strong><br />
              Help you safely and efficiently manage your Twitter digital footprint, allowing you to regain control of your online presence. We&apos;re not just a deletion tool &mdash; we&apos;re your responsible &ldquo;Digital Heritage Manager.&rdquo;
            </Text>
            <Text style={featuresText}>
              ✨ <strong>What&apos;s Coming Your Way</strong><br />
              • First-hand news about our product launch<br />
              • Deep insights into digital privacy protection<br />
              • Best practices for social media management<br />
              • Exclusive early access privileges
            </Text>
            <Text style={trustText}>
              🛡️ <strong>Our Promise</strong><br />
              Your privacy and security are always our top priority. We promise: no spam, every notification is carefully crafted to bring you truly valuable information only.
            </Text>
            <Text style={closingText}>
              Thank you for your trust. We look forward to building a safer, more controllable digital life together with you.
            </Text>
            <Text style={signature}>
              The DeleteTweets.net Team<br />
              <span style={tagline}>Redefining your digital footprint</span>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

const main = {
  backgroundColor: "#F8F9FA", // 按照设计文档的背景色
  padding: "20px 0",
};

const container = {
  backgroundColor: "#ffffff",
  border: "1px solid #e5e7eb",
  borderRadius: "12px",
  padding: "50px",
  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
};


const greeting = {
  fontSize: "20px",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: "600",
  color: "#1F2937", // 设计文档中的主标题颜色
  lineHeight: "28px",
  marginBottom: "20px",
  textAlign: "left" as const,
};

const mainText = {
  fontSize: "16px",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: "400",
  color: "#4B5563", // 设计文档中的正文颜色
  lineHeight: "26px",
  marginBottom: "24px",
};

const missionText = {
  fontSize: "16px",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: "400",
  color: "#4B5563",
  lineHeight: "26px",
  marginBottom: "24px",
  padding: "20px",
  backgroundColor: "#EBF8FF", // 淡蓝色背景突出使命
  borderRadius: "8px",
  borderLeft: "4px solid #4A90E2", // 品牌色边框
};

const featuresText = {
  fontSize: "16px",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: "400",
  color: "#4B5563",
  lineHeight: "26px",
  marginBottom: "24px",
  padding: "20px",
  backgroundColor: "#F0FDF4", // 淡绿色背景
  borderRadius: "8px",
  borderLeft: "4px solid #50E3C2", // 行动色边框
};

const trustText = {
  fontSize: "16px",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: "400",
  color: "#4B5563",
  lineHeight: "26px",
  marginBottom: "32px",
  padding: "20px",
  backgroundColor: "#F9FAFB", // 更柔和的背景色
  borderRadius: "8px",
  borderLeft: "4px solid #9CA3AF", // 中性色边框
};

const closingText = {
  fontSize: "16px",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: "500",
  color: "#1F2937",
  lineHeight: "26px",
  marginBottom: "30px",
  textAlign: "center" as const,
};

const signature = {
  fontSize: "16px",
  fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontWeight: "600",
  color: "#1F2937",
  lineHeight: "24px",
  textAlign: "center" as const,
  marginBottom: "20px",
};

const tagline = {
  fontSize: "14px",
  fontWeight: "400",
  color: "#4A90E2", // 品牌色
  fontStyle: "italic",
};

const anchor = {
  textDecoration: "underline",
  color: "#4A90E2", // 品牌色链接
};
