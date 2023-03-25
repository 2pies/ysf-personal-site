const sharp = require('sharp')
const fs = require('fs').promises;

// const sourceDir = __dirname + '/public/images/performance';
// const sourceDir = './public/images/performance';
const sourceDir = './public/images/uploads';

const getDirAndFile = (dir) => {
  const arr = dir.split('/');
  const file = arr.pop();
  return [arr.join('/'), file];
}

const updateFiles = async (dir, fn) => {
  const files = await fs.readdir(dir, { withFileTypes: true });
  for (const file of files) {
    const filePath = dir + '/' + file.name;
    if (file.isDirectory()) {
      await updateFiles(filePath, fn);
    } else {
      await fn(filePath)
    }
  }


}

const main = async () => {
  // recursively read all files in the directory
  // and rename them to lowercase
  await updateFiles(sourceDir, async (filePath) => {
    if (filePath.includes('.DS_Store')) return;

    //#region fix file rotation
    try {
      const ext = filePath.toLowerCase().split('.').pop();

      if (!['jpg', 'png', 'jpeg', 'heic'].includes(ext))
        return;

      if (!filePath.includes('2022_2_the'))
        return;

      const tempImage = filePath.replace(`.${ext}`, `-temp.${ext}`);

      await fs.rename(filePath, tempImage);

      // const { width, height, orientation } = await sharp(filePath).metadata();

      // console.log(filePath, width, height, orientation);

      await sharp(tempImage)
        .rotate()
        .toFile(filePath.replace(`-temp.${ext}`, `.${ext}`))

      await fs.unlink(tempImage);

    } catch (error) {
      console.log('=================');
      console.log(filePath);
      throw error;
    }
    return

    //#region flatten folders
    try {
      const newFilePathTemp = '/' + filePath
        .replace(sourceDir, '')
        .replace(/\//g, '_')
        .slice(1)
        ;
      const newFilePath = sourceDir.replace('performance', 'uploads') + newFilePathTemp;

      fs.rename(filePath, newFilePath);

    } catch (error) {
      console.log('=================');
      console.log(filePath);
      throw error;
    }


    return
    //#endregion


    //#region resize images
    try {

      const ext2 = filePath.toLowerCase().split('.').pop();

      if (!['jpg', 'png', 'jpeg', 'heic'].includes(ext2))
        return;

      const tempImage = filePath.replace(`.${ext2}`, ` - temp.${ext2}`);

      await fs.rename(filePath, tempImage);

      await sharp(tempImage)
        .resize(1920)
        .toFile(filePath.replace(`.${ext2}`, '.jpg'))

      await fs.unlink(tempImage);

      return
    } catch (error) {
      console.log('=================');
      console.log(filePath);
      throw error;

    }
    //#endregion

    const newFilePath = filePath
      .toLowerCase()
      .replace(/ /g, '_')
      .replace(/’/g, '_')
      .replace(/9_it_s_a_hand\./g, '9_it_s_a_hand')
      .replace(/\.\./g, '.')
      .replace(/__/g, '_')
      .replace(/__/g, '_')
      .replace('_strangers_in_the_garden_2-_black_milk_white_coal_', 'strangers_in_the_garden_2_black_milk_white_coal')
      // .replace('2_i_m_fine.', '2_i_m_fine')
      ;

    const ext = filePath.toLowerCase().split('.').pop();

    if (!['jpg', 'png', 'jpeg', 'docx', 'mov', 'mp4', 'heic'].includes(ext))
      console.error(`Unknown file extension: ${ext} in ${filePath}`);

    const [dir, file] = getDirAndFile(newFilePath);
    if (dir.endsWith('-modified')) {
      const newDir = dir.replace('-modified', '');
      await fs.mkdir(newDir, { recursive: true });
      await fs.rename(filePath, newDir + '/' + file);
      console.count('count2');

      return;
    }

    if (filePath !== newFilePath) {
      if (ext === 'docx') {
        await fs.unlink(filePath);
      } else {
        const [dir, file] = getDirAndFile(newFilePath);
        const newDir = dir + '-modified';
        await fs.mkdir(newDir, { recursive: true });
        await fs.rename(filePath, newDir + '/' + file);
      }

      console.log(filePath);
      console.log(newFilePath);
      console.log('-----------------');
      console.count('count');
    }


    // fs.rename(filePath, newFilePath, (err) => {
    //   if (err) {
    //     console.log(err);
    //   }
    // });
  });

}

main();