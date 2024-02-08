
import React from 'react';
import { Modal } from '../../../../../components/modals/antd-modals';

const modalStyle = {
    top: 20, // Adjust this value to set the desired top position
  };

function Terms(props){
    return (
      <Modal
        type="primary"
        title="Privacy Policy"
        visible
        footer={null}
        width={900}
        // eslint-disable-next-line react/destructuring-assignment, react/prop-types
        onCancel={() => props.setshowPrivacyPolicy(false)}
        style={modalStyle}
      >
        <div className="project-modal scroll">
          <p>We may collect the following types of information when you use our Service:</p>

          <ol>
            <li>
              <strong>Personal Information:</strong> This may include your name, email address, and other
              information you provide to us.
            </li>
            <li>
              <strong>Usage Data:</strong> We may collect information about how you interact with the
              Service, such as your IP address, device information, and pages you visit.
            </li>
          </ol>

          <h2>How We Use Your Information</h2>

          <p>We may use your information for the following purposes:</p>

          <ol>
            <li>To provide and maintain the Service.</li>
            <li>To improve, personalize, and customize the Service.</li>
            <li>
              To communicate with you, including responding to your inquiries and providing customer
              support.
            </li>
            <li>To send you updates, newsletters, and promotional materials.</li>
          </ol>

          <h2>Information Sharing</h2>

          <p>We may share your personal information in the following situations:</p>

          <ol>
            <li>With your consent.</li>
            <li>To comply with legal obligations.</li>
            <li>To protect and defend our rights and property.</li>
            <li>With service providers who help us operate the Service.</li>
          </ol>

          <h2>Security</h2>

          <p>
            We take reasonable measures to protect your personal information from unauthorized access and
            disclosure. However, no method of transmission over the internet or electronic storage is
            completely secure.
          </p>

          <h2>Your Choices</h2>

          <p>
            You can choose not to provide certain information, but it may limit your ability to use the
            Service. You can also unsubscribe from marketing communications at any time.
          </p>

          <h2>Changes to This Privacy Policy</h2>

          <p>
            We may update this Privacy Policy from time to time. The latest version will be posted on this
            page, and the date of the update will be indicated.
          </p>

          <h2>Contact Us</h2>

          <p>
            If you have any questions or concerns about this Privacy Policy, please contact us at{' '}
            <a href="mailto:contact@k4m2a.com">contact@k4m2a.com</a>.
          </p>
        </div>
      </Modal>
    )
}

export default Terms;