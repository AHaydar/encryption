import 'regenerator-runtime/runtime';
import {
  KmsKeyringBrowser,
  KMS,
  getClient,
  buildClient,
  CommitmentPolicy,
} from '@aws-crypto/client-browser';

const name = document.getElementById('name');
const age = document.getElementById('age');
const userForm = document.getElementById('user-form');

const { encrypt, decrypt } = buildClient(
  CommitmentPolicy.REQUIRE_ENCRYPT_REQUIRE_DECRYPT
);

const encryptData = async (plainText) => {
  const generatorKeyId = 'arn:aws:kms:us-east-1:248869629908:alias/awesome-key';
  const keyIds = [
    'arn:aws:kms:us-east-1:248869629908:key/85219ff8-edc7-4db5-a185-9b0f292163bd',
  ];

  const clientProvider = getClient(KMS, {
    credentials: {
      accessKeyId: 'asdfsdfse33SSDFFF',
      secretAccessKey: 'GHGSDFS@###RWSDFSZssssss',
    },
  });

  try {
    const keyring = new KmsKeyringBrowser({
      clientProvider,
      generatorKeyId,
      keyIds,
    });

    const result = await encrypt(keyring, plainText);
    console.log('here is the encrypted data', result);
  } catch (e) {
    console.log('something went wrong', e);
  }
};

userForm.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log(name.value, age.value);
  encryptData(name.value);
});
