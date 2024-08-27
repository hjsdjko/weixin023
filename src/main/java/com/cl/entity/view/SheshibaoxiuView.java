package com.cl.entity.view;

import com.cl.entity.SheshibaoxiuEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;
import java.math.BigDecimal;

import java.io.Serializable;
import com.cl.utils.EncryptUtil;
 

/**
 * 设施报修
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2024-03-29 14:15:48
 */
@TableName("sheshibaoxiu")
public class SheshibaoxiuView  extends SheshibaoxiuEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public SheshibaoxiuView(){
	}
 
 	public SheshibaoxiuView(SheshibaoxiuEntity sheshibaoxiuEntity){
 	try {
			BeanUtils.copyProperties(this, sheshibaoxiuEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}


}
